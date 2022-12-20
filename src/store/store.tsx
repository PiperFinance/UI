import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { atomsWithQuery } from "jotai-tanstack-query";
import { ReactNode } from "react";
import { IChain, newAllCustomChains } from "@constants/networkList";
export const baseURL = "https://piper.finance/api/";

export interface IChainResponse {
  [key: string]: ITokenResponse;
}
export interface ITokenResponse {
  [key: string]: IToken;
}

export interface IToken {
  detail: ITokenDetail;
  priceUSD?: number;
  balance?: string;
  value?: string;
}

export interface ITokenDetailDefault {
  address: string;
  symbol: string;
  decimals: number;
  name: string;
  chainId: number;
  logoURI?: string;
}

export interface ITokenDetail extends ITokenDetailDefault {
  coingeckoId?: string;
  tags?: string[];
  lifiId: string | null;
  listedIn: string[];
  verify: boolean;
  related?: IToken[];
}

export interface ILiquidity {
  address: string;
  symbol: string;
  decimals: number;
  name: string;
  chainId: number;
  coingeckoId?: string;
  verify: boolean;
  reserves: number[];
  tokens: IToken[];
}

export interface ITransaction {
  Date: string;
  txType: string;
  chainId: number;
  txUrl: string;
  fee: string;
  address: string;
  value: string;
  txHash: string;
  receiver?: string;
  originToken?: IToken;
  destinationToken?: IToken;
}

export interface INft {
  name: string;
  chainId: number;
  image?: string;
  tokenId: string;
  standard: string;
  address: string;
  contractAddress: string;
}

export const toast = atom<JSX.Element>(<></>);

export const originToken = atomWithStorage<IToken | undefined>(
  "originToken",
  undefined
);
export const destinationToken = atomWithStorage<IToken | undefined>(
  "destinationToken",
  undefined
);

export const selectedChains = atom<IChain[]>(newAllCustomChains);

export const allTokens = atom<IToken[]>([]);
export const balancesList = atom<IChainResponse[]>([]);

export const [getAllTokens] = atomsWithQuery<ITokenResponse[]>(() => ({
  queryKey: ["allTokens"],
  queryFn: async () => {
    const res = await fetch(
      `https://raw.githubusercontent.com/PiperFinance/CD/main/tokens/outVerified/all_tokens.json`
    );
    return res.json();
  },
}));

export const searchAtom = atom<string>("");

export const chainFilterAtom = atom((get) => {
  const tokens: IToken[] = get(allTokens);
  const currentChain: IChain[] = get(selectedChains);
  return tokens.filter((token: IToken) =>
    currentChain.includes(
      newAllCustomChains.find((chain) => chain.id === token.detail?.chainId)!
    )
  );
});

export const tokenAtom = atom((get) => {
  const search: string = get(searchAtom).toLowerCase();
  const chianFilteredTokens: IToken[] = get(chainFilterAtom);
  return chianFilteredTokens.filter(
    (token: IToken) =>
      token.detail?.name.toLowerCase() === search ||
      token.detail?.symbol.toLowerCase() === search ||
      token.detail?.address.toLowerCase().includes(search)
  );
});

export const updateTokenListAtom = atom((get): { tokensList: IToken[] } => {
  const tokens: ITokenResponse[] = get(getAllTokens);
  const balances: IChainResponse[] = get(balancesList);
  return {
    tokensList: sortUpdateTokenList(
      Object.values(updateTokenList(tokens, updateBalance(balances)))
    ),
  };
});

const updateTokenList = (
  tokenList: ITokenResponse[],
  balances: ITokenResponse[]
): IToken[] => {
  return Object.assign(tokenList, balances) as unknown as IToken[];
};

export const updateBalance = (balances: IChainResponse[]): ITokenResponse[] => {
  const flatBalances: ITokenResponse[] = [];
  try {
    Object.values(balances).forEach((chainBalance: any) => {
      Object.keys(chainBalance).map((key: string) => {
        flatBalances[Number(key)] = chainBalance[Number(key)];
      });
    });
  } catch (e) {
    console.log(e);
  }
  return flatBalances;
};

const sortUpdateTokenList = (tokenList: IToken[]): IToken[] =>
  tokenList.sort(
    (tokenA: IToken, tokenB: IToken) =>
      Number(tokenB.balance) - Number(tokenA.balance)
  );
