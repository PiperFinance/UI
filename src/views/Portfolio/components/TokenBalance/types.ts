import { IToken } from "@store/store";

export interface ITokenBalanceTable {
  balances: TTokenBalanceRow[];
  isLoading: boolean;
  isFetched: boolean;
}

export type TTokenBalanceRow = [string, IToken];
