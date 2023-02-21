import { Chains } from '@constants/networkList';
import ChainIcon from '@components/ChainIcon';
import Flex from '@ui/Flex/Flex';
import { handleSliceHashString } from '@utils/sliceHashString';
import React from 'react';
import type { INft } from './types';
import { ArrowRightIcon } from '@heroicons/react/20/solid';

export function NftBox(nft: INft) {
  const { detail, balance, totalSupply, userAddress } = nft;

  const currentChain = Chains.find(
    (chain) => chain.id === detail.chainId && chain
  );

  return (
    <Flex
      direction="column"
      justifyContent="between"
      customStyle="rounded-lg border border-gray-500 max-w-xs mb-7"
      // alignItems="center"
    >
      <div className="relative w-full h-80 rounded-t-lg overflow-hidden">
        <div className="absolute right-0">
          <ChainIcon chainId={currentChain?.id!} />
        </div>
        <span className="bg-primary-900 font-bold text-xs px-4 text-gray-300 rounded-2xl absolute left-2 top-5">
          ERC{detail.type.toString()}
        </span>
        <img
          className="rounded-t-lg object-cover h-80 w-full"
          src={detail.uri}
          alt=""
        />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          {detail.symbol}
        </h5>
        <h6 className="mb-2 text-sm tracking-tight text-gray-200">
          <strong>Name</strong>: {detail.name}
        </h6>

        <h6 className="mb-2 text-sm tracking-tight text-gray-200">
          <strong>Wallet:</strong>&nbsp;
          <a
            className=" transition hover:underline"
            target="_blank"
            rel="noopener noreferrer"
            href={`${
              currentChain?.blockExplorers?.default.url
            }/address/${detail.address!}`}
          >
            {handleSliceHashString(userAddress, 10).toLowerCase()}
          </a>
        </h6>
        <h6 className="mb-2 text-sm tracking-tight text-gray-300">
          <strong>Total Supply:</strong> {totalSupply}
        </h6>
        <h6 className="mb-2 text-sm tracking-tight text-gray-300">
          <strong>Balance:</strong> {balance}
        </h6>
        <Flex direction="column" customStyle='mb-5'>
          <h6 className="mb-2 text-sm tracking-tight text-gray-300">
            <strong>Description:</strong>{' '}
          </h6>
          <p className=" font-normal text-gray-400">
            {detail.description
              ? `"${detail.description}"`
              : '<No Description>'}
          </p>
        </Flex>

        <Flex justifyContent="center">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`${
              currentChain?.blockExplorers?.default.url
            }/token/${detail.address!}`}
            className="inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {handleSliceHashString(detail.address, 12).toLowerCase()}
            <ArrowRightIcon className="w-4" />
          </a>
        </Flex>
      </div>
    </Flex>
  );
}
