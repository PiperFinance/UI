import { newAllCustomChains } from '@constants/networkList';
import ChainIcon from '@ui/ChainIcon';
import Flex from '@ui/Flex/Flex';
import { handleSliceHashString } from '@utils/sliceHashString';
import React from 'react';
import type { INft } from './types';

export function NftBox(nft: INft) {
  const { detail, balance, totalSupply } = nft;

  const currentChain = newAllCustomChains.find(
    (chain) => chain.id === detail.chainId && chain
  );

  return (
    <Flex
      direction="column"
      customStyle="rounded-lg border border-gray-500 max-w-xs mb-7"
      // alignItems="center"
    >
      <div className="relative w-full h-[400px] rounded-t-lg">
        <div className="absolute right-0">
          <ChainIcon chainId={currentChain?.id!} />
        </div>
        <img className="h-auto rounded-t-lg" src={detail.uri} alt="" />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {detail.symbol}
        </h5>
        <h6 className="mb-2 text-sm tracking-tight text-gray-200">
          Name: {detail.name}
        </h6>

        <h6 className="mb-2 text-sm tracking-tight text-gray-200">
          Contract:&nbsp;
          <a
            className=" transition hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href={`${
              currentChain?.blockExplorers?.default.url
            }/token/${detail.address!}`}
          >
            {handleSliceHashString(detail.address)}
          </a>
        </h6>

        {detail.description && (
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {detail.description}
          </p>
        )}
        <h6 className="mb-2 text-sm tracking-tight text-gray-300">
          Balance: {balance}&nbsp;, Total Supply: {totalSupply}
        </h6>
        <a
          href="#"
          className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            aria-hidden="true"
            className="ml-2 -mr-1 h-4 w-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </Flex>
  );
}
