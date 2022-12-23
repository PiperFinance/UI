import { IToken } from "@store/store";

export interface IPairResponse {
  [key: string]: IPair;
}

export interface IPair {
  [key: string]: IPairValue;
}

export interface IPairValue {
  detail: IPairDetail;
  priceUSD?: number;
  balance?: string;
  value?: string;
}

export interface IPairDetail {
  address: string;
  symbol: string;
  decimals: number;
  name: string;
  chainId: number;
  coingeckoId?: string;
  verify: boolean;
  tokens: {
    [key: string]: IToken;
  };
  dex: string;
  tokensOrder: string[];
}

export interface IPairBalanceRow {
  0: string;
  1: IPairValue;
}
