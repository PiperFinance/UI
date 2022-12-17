import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { atomsWithQuery } from "jotai-tanstack-query";
import { ReactNode } from "react";
import { IChain, newAllCustomChains } from "@constants/networkList";
export const baseURL = "https://piper.finance/api/";

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
export const balancesList = atom<ITokenResponse[]>([]);

export const [getAllTokens] = atomsWithQuery<ITokenResponse[]>(() => ({
  queryKey: ["allTokens"],
  queryFn: async () => {
    const res = await fetch(
      `https://raw.githubusercontent.com/PiperFinance/CD/main/tokens/outVerified/all_tokens.json`
    );
    return res.json();
  },
}));

export const [getUserBalances] = atomsWithQuery<ITokenResponse[]>(() => ({
  queryKey: ["userBalance"],
  queryFn: async () => {
    const res = await fetch(
      `${baseURL}tokens/balance?wallet=0xB49F17514D6F340d7bcdFfC47526C9A3713697e0&chainId=56`
    );
    return res.ok ? res.json() : [];
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

export const updateTokenListAtom = atom(
  (get): { tokensList: IToken[]; balances: ITokenResponse[] } => {
    const tokens: ITokenResponse[] = get(getAllTokens);
    const balances: ITokenResponse[] = get(getUserBalances);

    return {
      tokensList: Object.values(
        updateTokenList(tokens, balances)
      ) as unknown as IToken[],
      balances: balances,
    };
  }
);

const updateTokenList = (
  tokenList: ITokenResponse[],
  balances: ITokenResponse[]
): ITokenResponse[] => {
  return Object.assign(tokenList, balances);
};
const sortUpdateTokenList = (tokenList: IToken[]): IToken[] =>
  tokenList.sort(
    (tokenA: IToken, tokenB: IToken) =>
      Number(tokenA.balance) - Number(tokenB.balance)
  );
