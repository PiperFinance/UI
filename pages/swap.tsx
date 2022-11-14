import LIFI, { Route, RouteOptions } from '@lifi/sdk';
import {
  calculateNumberDecimal,
  calculateNumberDecimalContract,
  formatNumber,
} from '@utils/bignumber';
import React, { useEffect, useRef, useState } from 'react';
import { useSigner } from 'wagmi';
import Default from '../components/layout/Default';

interface RoutesRequest {
  fromChainId: number;
  fromAmount: string;
  fromTokenAddress: string;
  fromAddress?: string;
  toChainId: number;
  toTokenAddress: string;
  toAddress?: string;
  options?: RouteOptions;
}

export default function Swap() {
  const [swapRoute, setSwapRoute] = useState<Route[]>([]);
  const { data: signer, isError, isLoading } = useSigner();

  useEffect(() => {
    console.log(swapRoute);
  }, [swapRoute]);

  const lifi = new LIFI();

  const getRoute = async (amountIn: string) => {
    const convertedAmountIn = calculateNumberDecimalContract(amountIn, 6);

    const routeOptions: RouteOptions = {
      slippage: 1 / 100,
      order: 'RECOMMENDED',
    };

    const routesRequest: RoutesRequest = {
      fromChainId: 43114,
      fromAmount: convertedAmountIn,
      fromTokenAddress: '0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E',
      toChainId: 56,
      toTokenAddress: '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82',
      options: routeOptions,
    };
    try {
      const result = await lifi.getRoutes(routesRequest);
      const routes = result.routes;

      setSwapRoute(routes);
    } catch (error) {
      console.log(error);
    }
  };

  const executeRoute = async () => {
    if (swapRoute.length === 0 || !signer) return;
    try {
      const route = await lifi.executeRoute(signer, swapRoute[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Default pageName="Swap">
      <section className="w-full h-full grid place-items-center">
        <div className="w-1/3 flex flex-col items-center">
          <h1 className="text-gray-100 font-bold text-3xl my-5 mx-3">Swap</h1>
          <div className="w-full h-32 flex dark:bg-gray-800 rounded-xl p-4 my-2 justify-between">
            <input
              className="w-full focus:outline-none max-w-[400px] bg-inherit h-10 rounded-xl p-4 text-xl text-gray-300"
              type="text"
              placeholder="From"
              onChange={(e) => getRoute(e.target.value)}
            />
            <button
              type="button"
              className="h-10 w-15 max-w-[80px] text-gray-900 bg-white border border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              From
            </button>
          </div>
          <div className="w-full h-32 flex dark:bg-gray-800 rounded-xl p-4 my-2 justify-between">
            <input
              className="w-full focus:outline-none max-w-[400px] bg-inherit h-10 rounded-xl p-4 text-xl text-gray-300"
              type="text"
              placeholder="To"
              disabled
              value={
                swapRoute[0] &&
                formatNumber(
                  calculateNumberDecimal(swapRoute[0].toAmountMin, 18),
                  4
                )
              }
            />
            <button
              type="button"
              className="h-10 w-full max-w-[80px] text-gray-900 bg-white border border-gray-800 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              To
            </button>
          </div>
          <button
            onClick={executeRoute}
            className="w-4/5 h-[60px] my-5 text-gray-400 border rounded-xl hover:bg-gray-400 hover:text-gray-900 text-xl"
          >
            Bridge
          </button>
        </div>
      </section>
    </Default>
  );
}
