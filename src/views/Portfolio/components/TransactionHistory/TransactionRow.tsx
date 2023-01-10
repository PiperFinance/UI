import { newAllCustomChains } from '@constants/networkList';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/20/solid';
import Flex from '@ui/Flex/Flex';
import React from 'react';
import ChainIcon from '@components/ChainIcon';
import { handleSliceHashString } from '@utils/sliceHashString';
import {
  formatNumber,
  calculateMultiplyNumbers,
  calculateNumberDecimal,
} from '@utils/bignumber';
import type { ITransaction, ITransactionLabel } from './types';

export function TransactionRow(transaction: ITransaction) {
  const { userAddress, token, gasUsed, gasPrice, timeStamp, labels } =
    transaction;

  const currentChain = newAllCustomChains.find(
    (chain) => chain.id === transaction.chainId && chain
  );

  const transactionFee = formatNumber(
    calculateMultiplyNumbers(
      calculateNumberDecimal(gasPrice, currentChain?.nativeCurrency.decimals!),
      gasUsed
    ),
    6
  );

  const date = new Date(timeStamp * 1000)
    .toISOString()
    .slice(0, 19)
    .replace('T', ' ');

  return (
    <Flex
      customStyle="py-1 border-b border-gray-500 last:border-b-0"
      alignItems="center"
      justifyContent="between"
    >
      <Flex width="fit" alignItems="center" customStyle="space-x-2">
        <ChainIcon chainId={transaction.chainId} />
        <Flex direction="column" width="fit" customStyle="h-fit space-y-1">
          <Flex>
            {labels ? (
              labels?.map((label: ITransactionLabel, index) =>
                label.title === 'function' ? (
                  <h1
                    key={label.value + index}
                    className="text-xs sm:text-base capitalize text-gray-100"
                  >
                    {label.value}
                  </h1>
                ) : (
                  ''
                )
              )
            ) : (
              <h1 className="text-md capitalize text-gray-100">#</h1>
            )}
          </Flex>
          <h3 className="text-xs text-gray-400">{date}</h3>
        </Flex>
      </Flex>
      <Flex width="fit" customStyle='max-sm:hidden'>
        {userAddress && (
          <div className="text-md w-fit cursor-pointer rounded-full bg-slate-700 px-4 py-1 text-gray-200">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${currentChain?.blockExplorers?.default.url}/address/${userAddress}`}
            >
              {handleSliceHashString(userAddress!)}
            </a>
          </div>
        )}
      </Flex>
      <Flex width="half" alignItems="center" customStyle="space-x-3 max-md:hidden">
        {Array.isArray(token) ? (
          token.map((token) => (
            <>
              <img
                src={
                  token.detail.logoURI
                    ? token?.detail.logoURI
                    : '/assets/token-not-found.png'
                }
                alt={token?.detail.symbol}
                className="h-8 w-8 rounded-full"
              />
              <h3 className="text-md text-gray-300">{token?.detail.symbol}</h3>
            </>
          ))
        ) : (
          <></>
        )}
      </Flex>
      <Flex width="fit">
        <h3 className="text-xs sm:text-sm text-gray-400">
          {transactionFee}&nbsp;
          {currentChain?.nativeCurrency.symbol.toUpperCase()}
        </h3>
      </Flex>
      <Flex width="fit">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`${currentChain?.blockExplorers?.default.url}/tx/${transaction.hash}`}
          className="w-auto overflow-hidden text-ellipsis text-sm hover:text-gray-400 text-gray-300"
        >
          <ArrowTopRightOnSquareIcon className="w-5 sm:w-7" />
        </a>
      </Flex>
    </Flex>
  );
}
