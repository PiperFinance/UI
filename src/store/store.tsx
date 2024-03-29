import { Chains, IChain } from '@constants/networkList';
import { sortData } from '@utils/customSort';
import { atom } from 'jotai';
import { atomsWithQuery } from 'jotai-tanstack-query';
import { atomWithStorage } from 'jotai/utils';
import type { ICEXBalanceList, ICedeVaults } from './types';
export const baseURL = 'https://piper.finance/api/';

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
  logoURI?: string | null;
}

export interface IAddressReq {
  userToken: IUserToken;
  address: string;
}

export interface ITokenDetail extends ITokenDetailDefault {
  coingeckoId?: string | null;
  tags?: string[];
  lifiId?: string | null;
  listedIn: string[];
  verify: boolean;
  related?: IToken[];
}

export interface IUserToken {
  accessToken: string;
  refreshToken: string;
}

export const sidebar = atom<boolean>(false);

export const toast = atom<JSX.Element>(<></>);

export const importedWallets = atomWithStorage<string[]>('userWallets', []);

export const userToken = atomWithStorage<IUserToken | undefined>(
  'userToken',
  undefined
);

export const originToken = atomWithStorage<IToken | undefined>(
  'originToken',
  undefined
);
export const destinationToken = atomWithStorage<IToken | undefined>(
  'destinationToken',
  undefined
);

export const slippage = atom<number>(0.5);

export const selectedChains = atom<IChain[]>(Chains);
export const allTokens = atom<IToken[]>([]);
export const balancesList = atom<IChainResponse[]>([]);

export const [getAllTokens] = atomsWithQuery(() => ({
  queryKey: ['allTokens'],
  queryFn: async () => {
    const res = await fetch(
      `https://raw.githubusercontent.com/PiperFinance/CD/main/tokens/outVerified/all_tokens.json`
    );

    return res.json();
  },
}));

export const searchAtom = atom<string>('');

export const chainFilterAtom = atom((get) => {
  const tokens: IToken[] = get(allTokens);
  const currentChain: IChain[] = get(selectedChains);
  return tokens.filter((token: IToken) =>
    currentChain.includes(
      Chains.find((chain) => chain.id === token.detail?.chainId)!
    )
  );
});

export const tokenAtom = atom((get) => {
  const search: string = get(searchAtom).toLowerCase();
  const chianFilteredTokens: IToken[] = get(chainFilterAtom);
  return sortData(
    chianFilteredTokens.filter(
      (token: IToken) =>
        token.detail?.symbol.toLowerCase().includes(search) ||
        token.detail?.address.toLowerCase() === search.toLowerCase()
    ),
    'balance',
    'value'
  );
});

export const updateTokenListAtom = atom((get): IToken[] => {
  const tokens: ITokenResponse[] = get(getAllTokens);
  const balances: IChainResponse[] = get(balancesList);

  const tokensList = Object.values(
    updateTokenList(
      Object.values(tokens),
      updateBalance<any, any>(balances)
    )
  );
  return tokensList;
});

const updateTokenList = (
  tokenList: ITokenResponse[],
  balances: ITokenResponse[]
): IToken[] => {
  return Object.assign(tokenList, balances) as unknown as IToken[];
};

export const updateBalance = <T, R>(balances: T[]): R[] => {
  if (!balances) return [];
  const flatBalances: R[] | R = [];
  try {
    Object.values(balances).forEach((chainBalance: any) => {
      Object.entries(chainBalance).forEach(([key, value]: any) => {
        flatBalances[key] = value;
      });
    });
  } catch (e) {}
  return flatBalances;
};

/// CEDE

export const cexBalancesList = atom<ICEXBalanceList[]>([]);
export const vaults = atom<ICedeVaults | undefined>(undefined);
