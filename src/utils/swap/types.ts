import { ITokenDetail, ITokenDetailDefault } from '@store/store';


export interface IRouteInfoPathTool {
  title: string;
  logo?: string;
}

export interface IRouteInfoPath {
  fromToken: ITokenDetailDefault;
  toToken: ITokenDetailDefault;
  tool?: IRouteInfoPathTool;
  type: string;
}

export interface IRouteRequest {
  fromToken: ITokenDetail;
  toToken: ITokenDetail;
  amount: string;
  address: string;
}

export interface IRouteInfo {
  amountOut: string;
  amountOutValue: string;
  totalGasFee: string;
  estimateTime: number;
  response: any;
  path?: IRouteInfoPath[];
  type: string;
}
