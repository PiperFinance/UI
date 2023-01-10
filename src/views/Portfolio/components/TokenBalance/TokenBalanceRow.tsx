import { ChevronRightIcon } from '@heroicons/react/20/solid';
import Flex from '@ui/Flex/Flex';
import React, { memo } from 'react';
import { formatNumber, calculateMultiplyNumbers } from '@utils/bignumber';
import ChainIcon from '@components/ChainIcon';
import { useCoingecko } from '@hooks/useCoingecko';
import type { TTokenBalanceRow } from './types';

export function TokenBalanceRow(token: TTokenBalanceRow) {
  const { detail, balance } = token[1];
  const { data: tokenPrice, status } = useCoingecko(detail?.symbol);

  const tokenValue =
    status !== 'loading'
      ? calculateMultiplyNumbers(balance!, tokenPrice ?? 0)
      : 0;

  return (
    <tr
      key={detail?.address}
      className="group cursor-pointer border-b last:border-b-0 border-gray-500 hover:bg-gray-600"
    >
      <td className="p-4">
        <Flex>
          <img
            src={
              detail.logoURI ? detail.logoURI : '/assets/token-not-found.png'
            }
            alt={detail.symbol}
            className="h-7 w-7 sm:h-10 sm:w-10"
          />
          <Flex direction="column" justifyContent="center" customStyle="ml-3">
            <h6 className="font-bold uppercase max-sm:text-xs">
              {detail?.symbol}
            </h6>
            <h6 className="text-sm text-gray-400 hidden sm:block">
              {detail?.name}
            </h6>
          </Flex>
        </Flex>
      </td>
      <td className="px-4 max-sm:hidden">
        <Flex>
          <ChainIcon chainId={detail.chainId} />
        </Flex>
      </td>
      <td className="px-4 max-sm:hidden">
        <div>${tokenPrice?.toFixed(2)}</div>{' '}
      </td>
      <td className="px-4">
        <div>
          <b className="max-sm:text-xs">${formatNumber(tokenValue, 3)}</b>
          <div className="text-sm text-gray-400 max-sm:text-xs">
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

export default memo(TokenBalanceRow);
