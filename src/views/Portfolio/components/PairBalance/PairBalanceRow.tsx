import { newAllCustomChains } from "@constants/networkList";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Flex from "@ui/Flex/Flex";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getTokenPrice } from "@utils/coingecko";
import { formatNumber, calculateMultiplyNumbers } from "@utils/bignumber";
import { IPairBalanceRow } from "./types";

export function PairBalanceRow(pair: IPairBalanceRow) {
  const { detail, balance, value } = pair[1];
  const [tokenPrice, setTokenPrice] = useState<number>(0);

  useEffect(() => {
    getTokenPrice(detail.symbol).then((result) => {
      if (result) setTokenPrice(result);
    });
  }, [pair]);

  const tokenValue = calculateMultiplyNumbers(balance!, tokenPrice);

  const firstToken = Object.values(detail.tokens)[0];
  const secondToken = Object.values(detail.tokens)[1];

  return (
    <tr
      key={detail?.address}
      className="group cursor-pointer border-b last:border-b-0 hover:bg-gray-50 dark:border-gray-500 dark:hover:bg-gray-600"
    >
      <td className="p-4">
        <Flex>
          <img
            src={
              firstToken?.detail.logoURI
                ? firstToken?.detail.logoURI
                : "/assets/token-not-found.png"
            }
            alt={firstToken?.detail.symbol!}
            className="w-10 h-10"
          />
          <img
            src={
              secondToken?.detail.logoURI
                ? secondToken?.detail.logoURI
                : "/assets/token-not-found.png"
            }
            alt={secondToken?.detail.symbol}
            className="w-10 h-10"
          />
          <Flex direction="column" customStyle="ml-3">
            <h6 className="font-bold uppercase">{detail?.name}</h6>
            <h6 className="text-sm text-gray-400">{detail?.dex}</h6>
          </Flex>
        </Flex>
      </td>
      <td className="px-4">
        <Flex>
          {newAllCustomChains.map(
            (chain) =>
              chain.id === detail.chainId && (
                <Image
                  src={chain.icon!}
                  alt="icon"
                  width={60}
                  height={60}
                  className="relative right-1 rounded-full"
                />
              )
          )}
        </Flex>
      </td>
      {/* <td className="px-4">
        <div>${tokenPrice?.toFixed(2)}</div>{" "}
      </td> */}
      <td className="px-4">
        <div>
          <b>${formatNumber(tokenValue, 3)}</b>
          <div className="text-sm text-gray-400">
            {formatNumber(balance!, 8)} <span>{detail?.name}</span>
          </div>
        </div>
      </td>
      <td>
        <ChevronRightIcon className="invisible h-5 w-5 group-hover:visible group-hover:text-gray-50" />
      </td>
    </tr>
  );
}
