import { useCoingecko } from '@hooks/useCoingecko';
import useTooltip from '@hooks/useToolTip/useToolTip';
import type { ICEXBalanceList } from '@store/types';
import Flex from '@ui/Flex/Flex';
import { calculateMultiplyNumbers, formatNumber } from '@utils/bignumber';
import Image from 'next/image';
import { memo } from 'react';

export function CexTokenBalanceRow(token: ICEXBalanceList) {
  const { cexNames, freeBalance, ticker, totalBalance, accounts } = token;

  const { data: tokenPrice, status } = useCoingecko(ticker);

  const { targetRef, tooltip, tooltipVisible } = useTooltip('$' + tokenPrice, {
    placement: 'bottom-start',
  });

  const tokenValue =
    status !== 'loading'
      ? calculateMultiplyNumbers(totalBalance!, tokenPrice ?? 0)
      : 0;

  return (
    <tr className="border-b last:border-b-0 border-gray-500 transition">
      <td className="p-4">
        <Flex>
          <img
            src={'/assets/token-not-found.png'}
            alt={ticker}
            className="h-7 w-7 sm:h-10 sm:w-10"
          />
          <Flex direction="column" justifyContent="center" customStyle="ml-3">
            <h6 className="font-bold uppercase max-sm:text-xs">{ticker}</h6>
            <h6 className="text-sm text-gray-400 hidden sm:block">{ticker}</h6>
          </Flex>
        </Flex>
      </td>
      <td className="px-4 max-sm:hidden">
        <Flex>
          <Image
            src={`/assets/cexs/${cexNames[0]}.svg`}
            alt={cexNames[0] ? cexNames[0] : 'CEX'}
            width={30}
            height={30}
          />
        </Flex>
      </td>
      <td className="px-4 max-sm:hidden">
        <div ref={targetRef}>${tokenPrice?.toFixed(2)}</div>
        {tooltipVisible && tooltip}
      </td>
      <td className="px-4">
        <div>
          <b className="max-sm:text-xs">${formatNumber(tokenValue, 3)}</b>
          <div className="text-sm text-gray-400 max-sm:text-xs">
            {formatNumber(totalBalance!, 8)} <span>{ticker}</span>
          </div>
        </div>
      </td>
    </tr>
  );
}

export default memo(CexTokenBalanceRow);
