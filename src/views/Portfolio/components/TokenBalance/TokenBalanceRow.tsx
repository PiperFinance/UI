import { newAllCustomChains } from "@constants/networkList";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Flex from "@ui/Flex/Flex";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { getTokenPrice } from "@utils/coingecko";
import { formatNumber, calculateMultiplyNumbers } from "@utils/bignumber";
import { ITokenBalanceRow } from "./types";

export function TokenBalanceRow(token : ITokenBalanceRow) {
  const { detail, balance, value } = token[1];
  const [tokenPrice, setTokenPrice] = useState<number>(0);

  useEffect(() => {
    getTokenPrice(detail.symbol).then((result) => {
      if (result) setTokenPrice(result);
    });
  }, [token]);

  const tokenValue = calculateMultiplyNumbers(balance!, tokenPrice);

  return (
    <tr
      key={detail?.address}
      className="group cursor-pointer border-b last:border-b-0 hover:bg-gray-50 dark:border-gray-500 dark:hover:bg-gray-600"
    >
      <td className="p-4">
        <Flex>
          <img
            src={
              detail.logoURI ? detail.logoURI : "/assets/token-not-found.png"
            }
            alt={detail.symbol}
            className="w-10 h-10"
          />
          <Flex direction="column" customStyle="ml-3">
            <h6 className="font-bold uppercase">{detail?.symbol}</h6>
            <h6 className="text-sm text-gray-400">{detail?.name}</h6>
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
      <td className="px-4">
        <div>${tokenPrice?.toFixed(2)}</div>{" "}
      </td>
      <td className="px-4">
        <div>
          <b>${formatNumber(tokenValue, 3)}</b>
          <div className="text-sm text-gray-400">
            {formatNumber(balance!, 8)} <span>{detail?.symbol}</span>
          </div>
        </div>
      </td>
      <td>
        <ChevronRightIcon className="invisible h-5 w-5 group-hover:visible group-hover:text-gray-50" />
      </td>
    </tr>
  );
}
