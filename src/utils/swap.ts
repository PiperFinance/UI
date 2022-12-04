import { chainIcon } from "@constants/networkList";
import LIFI, { Route, RouteOptions } from "@lifi/sdk";
import { Path, Socket, SocketQuote, Token } from "@socket.tech/socket-v2-sdk";
import { QuoteResponse, RangoClient } from "rango-sdk-basic";

export interface routeRequest {
  fromToken: Token;
  toToken: Token;
  amount: string;
  address: `0x${string}`;
}
// Promise<Route[] | ((signer: any, swapRoute: any) => Promise<void>)>
// Route[] | ((signer: any, swapRoute: any) => Promise<void>)
export interface foundedRoutes {
  lifi: Route[];
  socket: SocketQuote | null;
  rango: QuoteResponse | undefined;
  // amount: string;
  // address: `0x${string}`;
}

export default class swap {
  private Lifi: LIFI;
  private Socket: Socket;
  private Rango: RangoClient;
  constructor() {
    this.Lifi = new LIFI();
    this.Socket = new Socket({
      apiKey: "ccc09760-55ac-4072-9875-6e51f496f7c5",
    });
    this.Rango = new RangoClient("a43dfccc-bb38-48f7-9ac9-5b928df2ecc0");
  }

  public async getRoutes(data: routeRequest): Promise<foundedRoutes> {
    const lifiRoute = await this.getLifiRoutes(data);
    const socketRoute = await this.getSocketRoutes(data);
    const rangoRoute = await this.getRangoRoutes(data);
    return { lifi: lifiRoute, socket: socketRoute, rango: rangoRoute };
  }

  private async getLifiRoutes(data: routeRequest): Promise<Route[]> {
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
    const routes = lifiResult.routes;

    return routes;
  }

  private async getSocketRoutes(
    data: routeRequest
  ): Promise<SocketQuote | null> {
    const path = new Path({
      fromToken: data.fromToken,
      toToken: data.toToken,
    });
    const routes = await this.Socket.getBestQuote({
      path,
      amount: data.amount,
      address: data.address,
    });

    return routes;
  }

  private async getRangoRoutes(
    data: routeRequest
  ): Promise<QuoteResponse | undefined> {
    const { amount, fromToken, toToken, address } = data;

    const meta = await this.Rango.meta();

    const sourceToken = meta?.tokens.find(
      (t) => t.address?.toLowerCase() === fromToken.address.toLowerCase()
    );
    const destinationToken = meta?.tokens.find(
      (t) => t.address?.toLowerCase() === toToken.address.toLowerCase()
    );

    if (!sourceToken || !destinationToken) return;
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

    return routes;
  }
}
