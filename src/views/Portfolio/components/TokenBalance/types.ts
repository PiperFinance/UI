import type { IToken } from "@store/store";

export interface ITokenBalanceTable {
  balances: IToken[];
  isLoading: boolean;
  isFetched: boolean;
}

export type TTokenBalanceRow = [string, IToken];
