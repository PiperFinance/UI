import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Flex from "@ui/Flex/Flex";
import React from "react";
import { formatNumber, calculateNumberDecimal } from "@utils/bignumber";
import { TPairBalanceRow } from "./types";
import ChainIcon from "@ui/ChainIcon";

export function PairBalanceRow(pair: TPairBalanceRow) {
  const { detail, balance, value } = pair[1];

  const firstToken = Object.values(detail.tokens)[0];
  const secondToken = Object.values(detail.tokens)[1];

  return (
    <tr
      key={detail?.address}
      className="group cursor-pointer border-b last:border-b-0 hover:bg-gray-50 dark:border-gray-500 dark:hover:bg-gray-600"
    >
      <td className="p-4">
        <Flex alignItems="center">
          <img
            src={
              firstToken?.detail.logoURI
                ? firstToken?.detail.logoURI
                : "/assets/token-not-found.png"
            }
            alt={firstToken?.detail.symbol!}
            className="mr-1 h-8 w-8"
          />
          <img
            src={
              secondToken?.detail.logoURI
                ? secondToken?.detail.logoURI
                : "/assets/token-not-found.png"
            }
            alt={secondToken?.detail.symbol}
            className="mr-1 h-8 w-8"
          />
          <Flex direction="column" customStyle="ml-3">
            <h6 className="font-bold uppercase">{detail?.name}</h6>
            <h6 className="text-sm text-gray-400">{detail?.dex}</h6>
          </Flex>
        </Flex>
      </td>
      <td className="px-4">
        <Flex>
          <ChainIcon chainId={detail.chainId} />
        </Flex>
      </td>
      {/* <td className="px-4">
        <div>${tokenPrice?.toFixed(2)}</div>{" "}
      </td> */}
      <td className="px-4">
        <div>
          {/* <b>${formatNumber(tokenValue, 3)}</b> */}
          <div className="text-md text-gray-400">
            {formatNumber(calculateNumberDecimal(balance!, 18), 8)}{" "}
            <span>{detail?.name}</span>
          </div>
        </div>
      </td>
      <td>
        <ChevronRightIcon className="invisible h-5 w-5 group-hover:visible group-hover:text-gray-50" />
      </td>
    </tr>
  );
}
