import LIFI, { Route as lifiRoute } from "@lifi/sdk";

import { Path, Route as socketRoute, Socket } from "@socket.tech/socket-v2-sdk";
import { ITokenDetail, ITokenDetailDefault } from "@store/store";
import {
  EvmTransaction,
  MetaResponse,
  QuoteSimulationResult,
  RangoClient,
  SwapFee,
} from "rango-sdk-basic";
import { calculateNumberDecimal } from "./bignumber";
import {
  checkApprovalSync,
  prepareEvmTransaction,
} from "./prepareEvmTransaction";

export type TSelectedRoute = lifiRoute | socketRoute | QuoteSimulationResult;

export interface IRouteInfoPathTool {
  title: string;
  logo?: string;
}

export interface IRouteInfoPath {
  fromToken: ITokenDetailDefault;
  toToken: ITokenDetailDefault;
  tool: IRouteInfoPathTool[];
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
  socket: socketRoute | undefined;
  rango: QuoteSimulationResult | null;
}

export interface IRouteInfo {
  amountOut: string;
  amountOutValue: string;
  totalGasFee: string;
  estimateTime: number;
  response: TSelectedRoute;
  // path: IRouteInfoPath[];
  type: string;
}

enum RouteType {
  Rango,
  Lifi,
  Socket,
}

export default class swap {
  private Lifi: LIFI;
  private Socket: Socket;
  private Rango: RangoClient;
  private rangoMetaData: MetaResponse | undefined;
  constructor() {
    this.Lifi = new LIFI();
    this.Socket = new Socket({
      apiKey: "ccc09760-55ac-4072-9875-6e51f496f7c5",
    });
    this.Rango = new RangoClient("a43dfccc-bb38-48f7-9ac9-5b928df2ecc0");
  }

  public getRoutes(data: IRouteRequest): Promise<IRouteInfo[]> {
    return Promise.all([
      this.getLifiRoutes(data),
      this.getSocketRoutes(data),
      this.getRangoRoutes(data),
      this.Rango.meta(),
    ]).then((routes) => {
      this.rangoMetaData = routes[3];
      return this.handleConvertRoutes(
        {
          lifi: routes[0],
          socket: routes[1],
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

  private async getSocketRoutes(
    data: IRouteRequest
  ): Promise<socketRoute | undefined> {
    const path = new Path({
      fromToken: data.fromToken,
      toToken: data.toToken,
    });
    const routes = await this.Socket.getBestQuote({
      path,
      amount: data.amount,
      address: data.address,
    });
    return routes?.route;
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

    if (routes?.socket)
      parsedRoutes.push(
        this.showRoutesInfo(routes?.socket!, RouteType.Socket, swapData)
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
        return new ConvertRangoRoute(
          route as QuoteSimulationResult,
          swapData,
          this.Rango,
          this.rangoMetaData!
        )._ROUTE;
      case RouteType.Lifi:
        return new ConvertLifiRoute(route as lifiRoute, swapData, this.Lifi)
          ._ROUTE;
      case RouteType.Socket:
        return new ConvertSocketRoute(
          route as socketRoute,
          swapData,
          this.Socket
        )._ROUTE;
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

  public executeSocketSwap = async (signer: any, data: IRouteRequest) => {
    if (!data) return;
    const path = new Path({
      fromToken: data.fromToken,
      toToken: data.toToken,
    });
    const { amount, address } = data;
    const quote = await this.Socket.getBestQuote({ path, amount, address });
    if (!quote) return;
    const execute = await this.Socket.start(quote);
    let next = await execute.next();
    while (!next.done && next.value) {
      const tx = next.value;
      const approvalTxData = await tx.getApproveTransaction();
      if (approvalTxData) {
        const approvalTx = await signer.sendTransaction(approvalTxData);
        await approvalTx.wait();
      }
      const sendTxData = await tx.getSendTransaction();
      const sendTx = await signer.sendTransaction(sendTxData);
      await sendTx.wait();
      next = await execute.next(sendTx.hash);
    }
  };
}

class ConvertLifiRoute {
  _ROUTE: IRouteInfo;

  constructor(route: lifiRoute, swapData: IRouteRequest, sdk: LIFI) {
    this._ROUTE = {
      amountOut: calculateNumberDecimal(
        route.toAmount,
        swapData.toToken.decimals
      ),
      amountOutValue: route.toAmountUSD,
      totalGasFee: String(route.gasCostUSD),
      estimateTime: Number(route.steps[0]?.estimate.executionDuration),
      response: route,
      type: "lifiRoute",
    };
  }
}

class ConvertSocketRoute {
  _ROUTE: IRouteInfo;
  constructor(route: socketRoute, swapData: IRouteRequest, sdk: Socket) {
    this._ROUTE = {
      amountOut: calculateNumberDecimal(
        route.toAmount,
        swapData.toToken.decimals
      ),
      amountOutValue: (route as any).receivedValueInUsd,
      totalGasFee: String(route.totalGasFeesInUsd),
      estimateTime: Number(route.serviceTime),
      response: route,
      type: "socketRoute",
    };
  }
}

class ConvertRangoRoute {
  _ROUTE: IRouteInfo;
  constructor(
    route: QuoteSimulationResult,
    swapData: IRouteRequest,
    sdk: RangoClient,
    rangoMetaData: MetaResponse
  ) {
    this._ROUTE = {
      amountOut: calculateNumberDecimal(
        route.outputAmount,
        swapData.toToken.decimals
      ),
      amountOutValue: route.outputAmount,
      totalGasFee: String(this.calcFeeRango(route.fee)),
      estimateTime: route.estimatedTimeInSeconds,
      response: route as QuoteSimulationResult,
      type: "QuoteSimulationResult",
    };
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
