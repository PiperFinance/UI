import LIFI, { Route as lifiRoute } from "@lifi/sdk";

import { Path, Route as socketRoute, Socket } from "@socket.tech/socket-v2-sdk";
import { ITokenDetail } from "@store/store";
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
  type: string;
}

enum RouteType {
  Rango,
  Lifi,
  Socket,
}

export type TSelectedRoute = lifiRoute | socketRoute | QuoteSimulationResult;

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
        return {
          amountOut: calculateNumberDecimal(
            (route as QuoteSimulationResult).outputAmount,
            swapData.toToken.decimals
          ),
          amountOutValue: (route as QuoteSimulationResult).outputAmount,
          totalGasFee: String(
            this.calcFeeRango((route as QuoteSimulationResult).fee)
          ),
          estimateTime: (route as QuoteSimulationResult).estimatedTimeInSeconds,
          response: route as QuoteSimulationResult,
          type: "QuoteSimulationResult",
        };

      case RouteType.Lifi:
        return {
          amountOut: calculateNumberDecimal(
            (route as lifiRoute).toAmount,
            swapData.toToken.decimals
          ),
          amountOutValue: (route as lifiRoute).toAmountUSD,
          totalGasFee: String((route as lifiRoute).gasCostUSD),
          estimateTime: Number(
            (route as lifiRoute).steps[0]?.estimate.executionDuration
          ),
          response: route as lifiRoute,
          type: "lifiRoute",
        };
      case RouteType.Socket:
        return {
          amountOut: calculateNumberDecimal(
            (route as socketRoute).toAmount,
            swapData.toToken.decimals
          ),
          amountOutValue: (route as any).receivedValueInUsd,
          totalGasFee: String((route as socketRoute).totalGasFeesInUsd),
          estimateTime: (route as socketRoute).serviceTime,
          response: route as socketRoute,
          type: "socketRoute",
        };
    }
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
