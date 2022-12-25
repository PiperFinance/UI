import Flex from "@ui/Flex/Flex";
import type { ReactNode } from "react";
import React, { useState } from "react";
import type { IRouteInfo } from "@utils/swap/types";
import type { IToken } from "@store/store";
import { formatNumber } from "@utils/bignumber";
import { Badge } from "@ui/Badge/Badge";
import { ChevronRightIcon, ClockIcon } from "@heroicons/react/24/solid";
import SwapRouteModal from "../SwapRoutesModal";
import { Modal } from "../Modal/Modal";

interface ISwapRoutes {
  selectedRoute: IRouteInfo;
  changeRoute: React.Dispatch<React.SetStateAction<IRouteInfo | undefined>>;
  routes: IRouteInfo[];
  destinationToken: IToken;
  children: ReactNode;
}
export default function SwapRoute({
  selectedRoute,
  routes,
  destinationToken,
  changeRoute,
  children,
}: ISwapRoutes) {
  const [open, setOpen] = useState(false);

  const { amountOut, totalGasFee, estimateTime } = selectedRoute;

  return (
    <>
      <Flex
        justifyContent="between"
        alignItems="center"
        width="full"
        customStyle="my-4 bg-gray-122 rounded-xl p-4 h-14 text-gray-300 border border-gray-700 cursor-pointer space-x-3"
        onClick={() => setOpen(routes.length > 0)}
      >
        <Flex alignItems="center" customStyle="space-x-3">
          <h1 className="font-bold">Receive: {formatNumber(amountOut, 3)}</h1>
          {children}
        </Flex>
        <Flex alignItems="center" width="fit" customStyle="space-x-2">
          {totalGasFee && (
            <Badge>
              <svg
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                className="h-4 w-4"
              >
                <g
                  stroke="currentColor"
                  stroke-width="1.4"
                  stroke-linecap="round"
                >
                  <path d="M6 2.3A2.7 2.7 0 0 0 3.3 5v7A1.7 1.7 0 0 0 5 13.7h4a1.7 1.7 0 0 0 1.7-1.7V5A2.7 2.7 0 0 0 8 2.3H6ZM6 6h2M10.7 5h.6a2 2 0 0 1 2 2v3"></path>
                </g>
              </svg>
              {formatNumber(totalGasFee, 3)}
            </Badge>
          )}
          <Badge>
            <ClockIcon className="h-4 w-4" />
            {estimateTime ? Math.round(estimateTime / 60) : "?"}
          </Badge>
        </Flex>
        <ChevronRightIcon className="h-5 w-5" />
      </Flex>
      <Modal isOpen={open} closeOnOverlayClick onDismiss={() => setOpen(false)}>
        <SwapRouteModal
          destinationToken={destinationToken}
          routes={routes}
          onDismiss={() => setOpen(false)}
          selectedRoute={selectedRoute}
          changeRoute={changeRoute}
        />
      </Modal>
    </>
  );
}
