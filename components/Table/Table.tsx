import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import useTable from '@hooks/useTable';
import { Container } from '@ui/Container/Container';
import Flex from '@ui/Flex/Flex';
import Image from 'next/image';
import React, { useState } from 'react';
import TableFooter from './TableFooter';

interface ITable {
  rowsPerPage: number;
  data: any;
  label: string;
}

export default function Table({ data, rowsPerPage, label }: ITable) {
  const [page, setPage] = useState<number>(1);
  const { slice, range } = useTable({ data, page, rowsPerPage });

  return (
    <>
      <table className="w-full text-md text-left text-gray-800 dark:text-gray-300 my-7">
        <thead className="uppercase dark:border-gray-500 text-xs text-gray-400">
          <tr className="border-b dark:border-gray-500 py-3">
            <th className="p-4">Token</th>
            <th className="pr-3">Networks</th>
            <th className="pr-3">Price</th>
            <th className="pr-3">Balance</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {slice.map((row: any) => (
            <tr
              key={row.id}
              className="border-b dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer group last:border-b-0"
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
                    <h6 className="uppercase font-bold">{row.name}</h6>
                    <h6 className="text-sm text-gray-400">Binance Coin</h6>
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
                    className="relative right-1 border-2 border-gray-50 rounded-full"
                  />
                  <Image
                    src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
                    alt="icon"
                    width={30}
                    height={30}
                    className="relative right-3 border-2 border-gray-50 rounded-full"
                  />
                  <Image
                    src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
                    alt="icon"
                    width={30}
                    height={30}
                    className="relative right-5 border-2 border-gray-50 rounded-full"
                  />
                  <Image
                    src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
                    alt="icon"
                    width={30}
                    height={30}
                    className="relative right-7 border-2 border-gray-50 rounded-full"
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
                <ChevronRightIcon className="w-5 h-5 invisible group-hover:visible group-hover:text-gray-50" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter range={range} slice={slice} setPage={setPage} page={page} />
    </>
  );
}
