import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Container from "@ui/Container/Container";
import Flex from "@ui/Flex/Flex";
import { CurrencyInputPanelSkeleton } from "@ui/Skeleton";
import Image from "next/image";
import React, { useEffect } from "react";

interface ITableBody {
  slicedList: any[];
}

export default function TableBody({ slicedList }: ITableBody) {
  return (
    <tbody>
      {slicedList.map((row: any) => (
        <TableBodyRow row={row} />
      ))}
    </tbody>
  );
}

export function TableBodyRow({ row }: any) {
  return (
    <tr
      key={row.detail?.address}
      className="group cursor-pointer border-b last:border-b-0 hover:bg-gray-50 dark:border-gray-500 dark:hover:bg-gray-600"
    >
      <td className="p-4">
        <Flex>
          <img
            src={
              row.detail.logoURI
                ? row.detail.logoURI
                : "/assets/token-not-found.png"
            }
            alt="icon"
            width={40}
            height={40}
          />
          <Flex direction="column" customStyle="ml-3">
            <h6 className="font-bold uppercase">{row.detail?.symbol}</h6>
            <h6 className="text-sm text-gray-400">{row.detail?.name}</h6>
          </Flex>
        </Flex>
      </td>
      <td className="px-4">
        <Flex>
          <Image
            src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
            alt="icon"
            width={30}
            height={30}
            className="relative right-1 rounded-full border-2 border-gray-50"
          />
          <Image
            src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
            alt="icon"
            width={30}
            height={30}
            className="relative right-3 rounded-full border-2 border-gray-50"
          />
          <Image
            src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
            alt="icon"
            width={30}
            height={30}
            className="relative right-5 rounded-full border-2 border-gray-50"
          />
          <Image
            src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
            alt="icon"
            width={30}
            height={30}
            className="relative right-7 rounded-full border-2 border-gray-50"
          />
        </Flex>
      </td>
      <td className="px-4">
        <div>${row.priceUSD}</div>
      </td>
      <td className="px-4">
        <div>
          <b>${row.value}</b>
          <div className="text-sm text-gray-400">
            {row.balance} <span>{row.detail?.symbol}</span>
          </div>
        </div>
      </td>
      <td>
        <ChevronRightIcon className="invisible h-5 w-5 group-hover:visible group-hover:text-gray-50" />
      </td>
    </tr>
  );
}
