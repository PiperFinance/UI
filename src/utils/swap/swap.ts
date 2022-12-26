import LIFI, { Route as lifiRoute, SwitchChainHook } from "@lifi/sdk";
import { sortData } from "@utils/customSort";

import {
  EvmTransaction,
  MetaResponse,
  QuoteSimulationResult,
  RangoClient,
} from "rango-sdk-basic";
import { Symbiosis, Token, TokenAmount } from "symbiosis-js-sdk";
import {
  checkApprovalSync,
  prepareEvmTransaction,
} from "../prepareEvmTransaction";
import {
  ConvertLifiRoute,
  ConvertRangoRoute,
  ConvertSymbiosisRoute,
  IFoundedRoutes,
  IRouteInfo,
  IRouteRequest,
  ISwapExactInSymbiosis,
  TSelectedRoute,
} from "./types";

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

  private async getLifiRoutes(
    data: IRouteRequest
  ): Promise<lifiRoute[] | undefined> {
    const { amount, fromToken, toToken } = data;
    try {
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
    } catch (err) {
      console.log(err);
    }
  }

  private async getSymbiosisRoutes(
    data: IRouteRequest
  ): Promise<ISwapExactInSymbiosis | undefined> {
    const { address, amount, fromToken, toToken } = data;
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

    try {
      const routes = await swapping.exactIn(
        tokenAmountIn,
        tokenOut,
        address,
        address,
        address,
        300,
        Date.now() + 20 * 60
      );

      return routes;
    } catch (err) {}
  }

  private async getRangoRoutes(
    data: IRouteRequest
  ): Promise<QuoteSimulationResult | null> {
    if (!this.rangoMetaData) return null;
    const { fromToken, toToken } = data;

    const sourceToken = this.rangoMetaData.tokens.find(
      (t) => t.address?.toLowerCase() === fromToken.address.toLowerCase()
    );
    console.log(sourceToken);
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
      amount: data.amount,
    });

    return routes.route;
  }

  private handleConvertRoutes(
    routes: IFoundedRoutes,
    swapData: IRouteRequest
  ): IRouteInfo[] {
    const routeData = [
      { type: RouteType.Lifi, data: routes?.lifi },
      { type: RouteType.Symbiosis, data: routes?.symbiosis },
      { type: RouteType.Rango, data: routes?.rango },
    ];

    const parsedRoutes: IRouteInfo[] = [];
    for (const { type, data } of routeData) {
      if (Array.isArray(data)) {
        data.forEach((route) =>
          parsedRoutes.push(this.showRoutesInfo(route, type, swapData))
        );
      } else if (data) {
        parsedRoutes.push(this.showRoutesInfo(data!, type, swapData));
      }
    }

    return sortData(
      parsedRoutes,
      "amountOut",
      "amountOutValue",
      "totalGasFee",
      "estimateTime"
    );
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
        return new ConvertSymbiosisRoute(
          route as ISwapExactInSymbiosis,
          swapData
        )._ROUTE;
    }
  }

  public executeLifiSwap = async (
    signer: any,
    route: lifiRoute,
    switchChainHook:SwitchChainHook
  ) => {
    if (!route || !signer) return;
    await this.Lifi.executeRoute(signer, route, { ...switchChainHook });
  };

  public executeSymbiosisSwap = async (
    signer: any,
    route: ISwapExactInSymbiosis
  ) => {
    if (!route || !signer) return;
    await route.execute(signer);
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
