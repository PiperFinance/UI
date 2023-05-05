import { Chains } from '@constants/networkList';
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
import useTooltip from '@hooks/useToolTip/useToolTip';

export function TransactionRow(transaction: ITransaction) {
  const { userAddress, tokens, gasUsed, gasPrice, timeStamp, labels } =
    transaction;

  const { targetRef, tooltip, tooltipVisible } = useTooltip(userAddress, {
    placement: 'bottom',
  });

  const functionLabel = labels?.find(
    (label: ITransactionLabel) => label.title === 'function'
  );

  const {
    targetRef: labelRef,
    tooltip: labelToolTip,
    tooltipVisible: LabelVisible,
  } = useTooltip(functionLabel?.value, {
    placement: 'bottom-start',
  });

  const currentChain = Chains.find(
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
            {functionLabel ? (
              <>
                <h1
                  ref={labelRef}
                  key={functionLabel?.value + functionLabel?.value}
                  className="text-xs sm:text-base capitalize text-gray-100 w-32 truncate"
                >
                  {functionLabel?.value}
                </h1>
                {LabelVisible && labelToolTip}
              </>
            ) : (
              <h1 className="text-xs sm:text-base capitalize text-gray-100">
                {'<Transaction>'}
              </h1>
            )}
          </Flex>
          <h3 className="text-xs text-gray-400 hidden min-[400px]:block">{date}</h3>
        </Flex>
      </Flex>
      <Flex width="fit" customStyle="max-sm:hidden">
        {tooltipVisible && tooltip}
        {userAddress && (
          <div
            className="text-md w-fit cursor-pointer rounded-full bg-slate-700 px-4 py-1 text-gray-200"
            ref={targetRef}
          >
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
      <Flex
        width="half"
        alignItems="center"
        customStyle="space-x-3 max-md:hidden"
      >
        {tokens?.map((token) => (
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
        ))}
      </Flex>
      <Flex
        justifyContent="between"
        alignItems="center"
        width="basis32"
        customStyle="text-gray-400 text-xs sm:text-sm md:flex-row flex-col"
      >
        <Flex alignItems="center">
          <svg
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            className="h-4 w-4"
          >
            <g stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
              <path d="M6 2.3A2.7 2.7 0 0 0 3.3 5v7A1.7 1.7 0 0 0 5 13.7h4a1.7 1.7 0 0 0 1.7-1.7V5A2.7 2.7 0 0 0 8 2.3H6ZM6 6h2M10.7 5h.6a2 2 0 0 1 2 2v3"></path>
            </g>
          </svg>
          &nbsp;{transactionFee}
        </Flex>
        <span>{currentChain?.nativeCurrency.symbol.toUpperCase()}</span>
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
