import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Container from "@ui/Container/Container";
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
      key={row.token.address}
      className="group cursor-pointer border-b last:border-b-0 hover:bg-gray-50 dark:border-gray-500 dark:hover:bg-gray-600"
    >
      <td className="p-4">
        <div className="flex">
          <Image
            src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
            alt="icon"
            width={40}
            height={40}
          />
          <div className="ml-3">
            <h6 className="font-bold uppercase">{row.token.symbol}</h6>
            <h6 className="text-sm text-gray-400">{row.token.name}</h6>
          </div>
        </div>
      </td>
      <td className="pr-3">
        <div className="flex">
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
        </div>
      </td>
      <td className="pr-3">
        <div>$256.20</div>
      </td>
      <td className="pr-3">
        <div>
          <b>$2.15</b>
          <div className="text-sm text-gray-400">
            0.0079 <span>BNB</span>
          </div>
        </div>
      </td>
      <td>
        <ChevronRightIcon className="invisible h-5 w-5 group-hover:visible group-hover:text-gray-50" />
      </td>
    </tr>
  );
}
