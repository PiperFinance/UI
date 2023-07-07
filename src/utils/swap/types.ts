import { LifiStep, Step, Route as lifiRoute } from '@lifi/sdk';
import { ITokenDetail, ITokenDetailDefault } from '@store/store';
import { calculateNumberDecimal, formatNumber } from '@utils/bignumber';
import { Signer } from 'ethers';
import { QuotePath, QuoteSimulationResult, SwapFee } from 'rango-sdk-basic/lib';
import { Execute, Percent, Token, TokenAmount } from 'symbiosis-js-sdk';

export type TSelectedRoute = lifiRoute | QuoteSimulationResult;

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
  slippage: number;
}

export interface IFoundedRoutes {
  lifi: lifiRoute[] | undefined;
  rango: QuoteSimulationResult | null;
}

export interface IRouteInfo {
  amountOut: string;
  amountOutValue: string;
  totalGasFee: string;
  estimateTime: number;
  response: TSelectedRoute;
  path?: IRouteInfoPath[];
  type: string;
}

export interface ISwapExactInSymbiosis {
  execute: (signer: Signer) => Execute;
  fee: TokenAmount;
  tokenAmountOut: TokenAmount;
  tokenAmountOutWithZeroFee: TokenAmount;
  route: Token[];
  priceImpact: Percent;
  amountInUsd: TokenAmount;
  approveTo: string;
}

// classes

export class ConvertLifiRoute {
  _ROUTE: IRouteInfo;

  constructor(route: lifiRoute, swapData: IRouteRequest) {
    const { toAmount, toAmountUSD, gasCostUSD, steps } = route;
    this._ROUTE = {
      amountOut: calculateNumberDecimal(toAmount, swapData.toToken.decimals),
      amountOutValue: toAmountUSD,
      totalGasFee: String(gasCostUSD),
      estimateTime: Number(steps[0]?.estimate.executionDuration),
      response: route,
      path: this.getPath(route),
      type: 'lifiRoute',
    };
  }

  private getPath(route: lifiRoute): IRouteInfoPath[] {
    return (route.steps[0] as LifiStep).includedSteps.map((step: Step) => {
      return {
        fromToken: step.action.fromToken,
        toToken: step.action.toToken,
        tool: {
          title: step.toolDetails.name,
          logo: step.toolDetails.logoURI,
        },
        type:
          step.type === 'cross' ? 'bridge' : step.type === 'swap' ? 'swap' : '',
      };
    });
  }
}

// export class ConvertSymbiosisRoute {
//   _ROUTE: IRouteInfo;

//   constructor(route: ISwapExactInSymbiosis, swapData: IRouteRequest) {
//     this._ROUTE = {
//       amountOut: route.tokenAmountOut.toFixed(),
//       amountOutValue: route.amountInUsd.toFixed(2),
//       totalGasFee: route.fee.toFixed(),
//       estimateTime: 0,
//       response: route,
//       path: this.getPath(swapData),
//       type: 'ISwapExactInSymbiosis',
//     };
//   }

//   private getPath(swapData: IRouteRequest): IRouteInfoPath[] {
//     return [
//       {
//         fromToken: swapData.fromToken as unknown as ITokenDetailDefault,
//         toToken: swapData.toToken as unknown as ITokenDetailDefault,
//         tool: {
//           title: 'Symbiosis',
//           logo: 'https://app.symbiosis.finance/9cde72ed4852592a6aec.png',
//         },
//         type: 'swap',
//       },
//     ];
//   }
// }

export class ConvertRangoRoute {
  _ROUTE: IRouteInfo;
  constructor(route: QuoteSimulationResult, swapData: IRouteRequest) {
    const amountOut = calculateNumberDecimal(
      route.outputAmount,
      swapData.toToken.decimals
    );

    const amountOutValue = Number(amountOut) * (route as any).to.usdPrice;

    this._ROUTE = {
      amountOut,
      amountOutValue: formatNumber(amountOutValue, 2),
      totalGasFee: String(this.calcFeeRango(route.fee)),
      estimateTime: route.estimatedTimeInSeconds,
      response: route,
      path: this.getPath(route, swapData),
      type: 'QuoteSimulationResult',
    };
  }

  private getPath(
    route: QuoteSimulationResult,
    swapData: IRouteRequest
  ): IRouteInfoPath[] | undefined {
    try {
      if (!route.path) {
        return [
          {
            fromToken: swapData.fromToken as unknown as ITokenDetailDefault,
            toToken: swapData.toToken as unknown as ITokenDetailDefault,
            tool: {
              title: route.swapper.title,
              logo: route.swapper.logo,
            },
            type: 'rangoStep',
          },
        ];
      }

      return route.path?.map((step: QuotePath) => {
        return {
          fromToken: {
            address: step.from.address!,
            decimals: step.from.decimals,
            name: step.from.name,
            symbol: step.from.symbol,
            logoURI: step.from.image,
            chainId: -1,
          },
          toToken: {
            address: step.to.address!,
            decimals: step.to.decimals,
            name: step.to.name,
            symbol: step.to.symbol,
            logoURI: step.to.image,
            chainId: -1,
          },
          tool: {
            title: step.swapper.title,
            logo: step.swapper.logo,
          },
          type: 'rangoStep',
        };
      });
    } catch (e) {}
  }

  private calcFeeRango = (fees: SwapFee[]): number => {
    let totalFee: number = 0;
    fees.map((fee: SwapFee) => {
      totalFee =
        totalFee +
        Number(calculateNumberDecimal(fee.amount, fee.token.decimals)) *
          //@ts-ignore
          fee.token.usdPrice;
    });

    return totalFee;
  };
}
