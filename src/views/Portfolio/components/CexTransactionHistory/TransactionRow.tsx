import { ICEXTransaction } from '@store/types';
import Flex from '@ui/Flex/Flex';
import Image from 'next/image';

export function CexTransactionRow(transaction: ICEXTransaction) {
  const { from, to, type } = transaction;

  const date = new Date(from.transaction.timestamp)
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
        <td className="px-4 max-sm:hidden">
          <Flex>
            <Image
              src={`/assets/cexs/${from.account.cexName}.svg`}
              alt={from.account.cexName ? from.account.cexName : 'CEX'}
              width={30}
              height={30}
            />
          </Flex>
        </td>
        <Flex direction="column" width="fit" customStyle="h-fit space-y-1">
          <Flex>
            <h1 className="text-xs sm:text-base capitalize text-gray-100">
              {type}
            </h1>
          </Flex>
          <h3 className="text-xs text-gray-400 hidden min-[400px]:block">
            {date}
          </h3>
        </Flex>
      </Flex>
      <Flex width="fit" customStyle="max-sm:hidden">
        <div className="text-md w-fit cursor-pointer rounded-full bg-slate-700 px-4 py-1 text-gray-200">
          {from.account.accountName}
        </div>
      </Flex>
      <Flex
        width="half"
        alignItems="center"
        customStyle="space-x-3 max-md:hidden"
      >
        <>
          {/* <img
            src={
              token.detail.logoURI
                ? token?.detail.logoURI
                : '/assets/token-not-found.png'
            }
            alt={token?.detail.symbol}
            className="h-8 w-8 rounded-full"
          />
          <h3 className="text-md text-gray-300">{token?.detail.symbol}</h3> */}
        </>
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
          &nbsp;{from.transaction.fee.amount}
        </Flex>
        <span>{from.transaction.fee.token.toUpperCase()}</span>
      </Flex>
    </Flex>
  );
}
