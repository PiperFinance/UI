import type { IToken, ITokenDetail } from '@store/store';

export interface IAllowance {
  token: ITokenDetail;
  allowance: string;
  contract: string;
}
