import LIFI, { Route as lifiRoute, LifiStep, Step } from "@lifi/sdk";

import { ITokenDetail, ITokenDetailDefault } from "@store/store";
import {
  EvmTransaction,
  MetaResponse,
  QuotePath,
  QuoteSimulationResult,
  RangoClient,
  SwapFee,
} from "rango-sdk-basic";
import { SwapExactIn, Symbiosis, Token, TokenAmount } from "symbiosis-js-sdk";
import { calculateNumberDecimal } from "./bignumber";
import {
  checkApprovalSync,
  prepareEvmTransaction,
} from "./prepareEvmTransaction";

export type TSelectedRoute = lifiRoute | SwapExactIn | QuoteSimulationResult;

export interface IRouteInfoPathTool {
  title: string;
  logo?: string;
}

export interface IRouteInfoPath {
  fromToken: ITokenDetailDefault;
  toToken: ITokenDetailDefault;
  tool: IRouteInfoPathTool;
  type: string;
}

export interface IRouteRequest {
  fromToken: ITokenDetail;
  toToken: ITokenDetail;
  amount: string;
  address: string;
}

export interface IFoundedRoutes {
  lifi: lifiRoute[];
  symbiosis: SwapExactIn | undefined;
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

enum RouteType {
  Rango,
  Lifi,
  Symbiosis,
}

export default class swap {
  private Lifi: LIFI;
  private Rango: RangoClient;
  private symbiosis: Symbiosis;
  private rangoMetaData: MetaResponse | undefined;
  constructor() {
    this.Lifi = new LIFI();
    this.Rango = new RangoClient("a43dfccc-bb38-48f7-9ac9-5b928df2ecc0");
    this.symbiosis = new Symbiosis("mainnet", "piper.finance");
  }

  public getRoutes(data: IRouteRequest): Promise<IRouteInfo[]> {
    return Promise.all([
      this.getLifiRoutes(data),
      this.getSymbiosisRoutes(data),
      this.getRangoRoutes(data),
      this.Rango.meta(),
    ]).then((routes) => {
      this.rangoMetaData = routes[3];
      return this.handleConvertRoutes(
        {
          lifi: routes[0],
          symbiosis: routes[1],
          rango: routes[2],
        },
        data
      );
    });
  }

  private async getLifiRoutes(data: IRouteRequest): Promise<lifiRoute[]> {
    const { amount, fromToken, toToken } = data;

    const lifiResult = await this.Lifi.getRoutes({
      fromChainId: fromToken.chainId,
      fromTokenAddress: fromToken.address,
      toChainId: toToken.chainId,
      toTokenAddress: toToken.address,
      fromAmount: amount,
      options: {
        slippage: 3 / 100,
        order: "RECOMMENDED",
      },
    });

    return lifiResult.routes;
  }

  private async getSymbiosisRoutes(
    data: IRouteRequest
  ): Promise<SwapExactIn | undefined> {
    const { address, amount, fromToken, toToken } = data;
    try {
      const tokenIn = new Token({
        chainId: fromToken.chainId,
        address:
          fromToken.address.toLowerCase() ===
          "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLowerCase()
            ? ""
            : fromToken.address,
        name: fromToken.name,
        isNative:
          fromToken.address.toLowerCase() ===
          "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLowerCase()
            ? true
            : false,
        symbol: fromToken.symbol,
        decimals: fromToken.decimals,
      });

      const tokenAmountIn = new TokenAmount(tokenIn, amount);

      const tokenOut = new Token({
        chainId: toToken.chainId,
        address:
          toToken.address.toLowerCase() ===
          "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLowerCase()
            ? ""
            : toToken.address,
        name: toToken.name,
        isNative:
          toToken.address.toLowerCase() ===
          "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLowerCase()
            ? true
            : false,
        symbol: toToken.symbol,
        decimals: toToken.decimals,
      });

      const swapping = this.symbiosis.newSwapping();
      const routes = await swapping.exactIn(
        tokenAmountIn,
        tokenOut,
        address,
        address,
        address,
        300,
        Date.now() + 20 * 60
      );

      console.log(routes);
      return routes;
    } catch (e) {}
  }

  private async getRangoRoutes(
    data: IRouteRequest
  ): Promise<QuoteSimulationResult | null> {
    if (!this.rangoMetaData) return null;
    const { amount, fromToken, toToken } = data;

    const sourceToken = this.rangoMetaData.tokens.find(
      (t) => t.address?.toLowerCase() === fromToken.address.toLowerCase()
    );
    const destinationToken = this.rangoMetaData.tokens.find(
      (t) => t.address?.toLowerCase() === toToken.address.toLowerCase()
    );

    if (!sourceToken || !destinationToken) return null;
    const routes = await this.Rango.quote({
      from: {
        blockchain: sourceToken.blockchain,
        symbol: sourceToken.symbol,
        address: sourceToken.address,
      },
      to: {
        blockchain: destinationToken.blockchain,
        symbol: destinationToken.symbol,
        address: destinationToken.address,
      },
      amount: amount,
    });

    return routes.route;
  }

  private handleConvertRoutes(
    routes: IFoundedRoutes,
    swapData: IRouteRequest
  ): IRouteInfo[] {
    const parsedRoutes: IRouteInfo[] = [];
    if (routes?.lifi && routes?.lifi.length > 0)
      routes?.lifi?.forEach((route) =>
        parsedRoutes.push(this.showRoutesInfo(route, RouteType.Lifi, swapData))
      );

    if (routes?.symbiosis)
      parsedRoutes.push(
        this.showRoutesInfo(routes?.symbiosis, RouteType.Symbiosis, swapData)
      );

    if (routes?.rango)
      parsedRoutes.push(
        this.showRoutesInfo(routes?.rango!, RouteType.Rango, swapData)
      );

    return parsedRoutes;
  }

  private showRoutesInfo(
    route: TSelectedRoute,
    type: RouteType,
    swapData: IRouteRequest
  ): IRouteInfo {
    switch (type) {
      case RouteType.Rango:
        return new ConvertRangoRoute(route as QuoteSimulationResult, swapData)
          ._ROUTE;
      case RouteType.Lifi:
        return new ConvertLifiRoute(route as lifiRoute, swapData)._ROUTE;
      case RouteType.Symbiosis:
        return new ConvertSymbiosisRoute(route as SwapExactIn, swapData)._ROUTE;
    }
  }

  public executeLifiSwap = async (signer: any, route: lifiRoute) => {
    if (!route || !signer) return;
    await this.Lifi.executeRoute(signer, route);
  };

  public executeRangoSwap = async (signer: any, data: IRouteRequest) => {
    if (!data || !this.rangoMetaData) return;

    const { amount, fromToken, toToken, address } = data;
    const sourceToken = this.rangoMetaData.tokens.find(
      (t) => t.address?.toLowerCase() === fromToken.address.toLowerCase()
    );
    const destinationToken = this.rangoMetaData.tokens.find(
      (t) => t.address?.toLowerCase() === toToken.address.toLowerCase()
    );

    if (!sourceToken || !destinationToken) return null;

    const swapResponse = await this.Rango.swap({
      from: {
        blockchain: sourceToken.blockchain,
        symbol: sourceToken.symbol,
        address: sourceToken.address,
      },
      to: {
        blockchain: destinationToken.blockchain,
        symbol: destinationToken.symbol,
        address: destinationToken.address,
      },
      amount: amount,
      fromAddress: address,
      toAddress: address,
      slippage: "1.0",
      disableEstimate: false,
      referrerAddress: null,
      referrerFee: null,
    });

    const evmTransaction = swapResponse.tx as EvmTransaction;

    if (!!evmTransaction.approveData) {
      const finalTx = prepareEvmTransaction(evmTransaction, true);
      const txHash = (await signer.sendTransaction(finalTx)).hash;
      await checkApprovalSync(swapResponse.requestId, txHash, this.Rango);
    }
    const finalTx = prepareEvmTransaction(evmTransaction, false);
    await signer.sendTransaction(finalTx);
  };
}

class ConvertLifiRoute {
  _ROUTE: IRouteInfo;

  constructor(route: lifiRoute, swapData: IRouteRequest) {
    this._ROUTE = {
      amountOut: calculateNumberDecimal(
        route.toAmount,
        swapData.toToken.decimals
      ),
      amountOutValue: route.toAmountUSD,
      totalGasFee: String(route.gasCostUSD),
      estimateTime: Number(route.steps[0]?.estimate.executionDuration),
      response: route,
      path: this.getPath(route),
      type: "lifiRoute",
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
        type: step.type,
      };
    });
  }
}


class ConvertSymbiosisRoute {
  _ROUTE: IRouteInfo;

  constructor(route: SwapExactIn, swapData: IRouteRequest) {
    this._ROUTE = {
      amountOut: "",
      amountOutValue: "",
      totalGasFee: "",
      estimateTime: 0,
      response: route,
      type: "SwapExactIn",
    };
  }

  // private getPath(route: SwapExactIn): IRouteInfoPath[] {
  //   return (route.steps[0] as LifiStep).includedSteps.map((step: Step) => {
  //     return {
  //       fromToken: step.action.fromToken,
  //       toToken: step.action.toToken,
  //       tool: {
  //         title: step.toolDetails.name,
  //         logo: step.toolDetails.logoURI,
  //       },
  //       type: "lifiStep",
  //     };
  //   });
  // }
}


class ConvertRangoRoute {
  _ROUTE: IRouteInfo;
  constructor(route: QuoteSimulationResult, swapData: IRouteRequest) {
    this._ROUTE = {
      amountOut: calculateNumberDecimal(
        route.outputAmount,
        swapData.toToken.decimals
      ),
      amountOutValue: route.outputAmount,
      totalGasFee: String(this.calcFeeRango(route.fee)),
      estimateTime: route.estimatedTimeInSeconds,
      response: route,
      path: this.getPath(route),
      type: "QuoteSimulationResult",
    };
  }

  private getPath(route: QuoteSimulationResult): IRouteInfoPath[] | undefined {
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
        type: "rangoStep",
      };
    });
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
