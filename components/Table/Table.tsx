import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Container } from '@ui/Container/Container';
import Image from 'next/image';
import React from 'react';

export default function Table() {
  return (
    <Container style="max-w-5xl border border-gray-500 sm:rounded-3xl">
      <h1 className="text-2xl my-3 font-semibold text-gray-100">Portfolio</h1>
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
          <tr className="border-b dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer group last:border-b-0">
            <td className="p-4">
              <div className="flex">
                <Image
                  src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <div className="ml-3">
                  <h6 className="uppercase font-bold">BNB</h6>
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
          <tr className="border-b dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer group last:border-b-0">
            <td className="p-4">
              <div className="flex">
                <Image
                  src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <div className="ml-3">
                  <h6 className="uppercase font-bold">BNB</h6>
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
          <tr className="border-b dark:border-gray-500 hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer group last:border-b-0">
            <td className="p-4">
              <div className="flex">
                <Image
                  src="https://token.metaswap.codefi.network/assets/nativeCurrencyLogos/binanceCoin.svg"
                  alt="icon"
                  width={40}
                  height={40}
                />
                <div className="ml-3">
                  <h6 className="uppercase font-bold">BNB</h6>
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
        </tbody>
      </table>
      <nav
        className="flex justify-between items-center pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            1-10
          </span>{' '}
          of{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            1000
          </span>
        </span>
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <a
              href="#"
              className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Previous</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              href="#"
              aria-current="page"
              className="z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              ...
            </a>
          </li>
          <li>
            <a
              href="#"
              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              100
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <span className="sr-only">Next</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
