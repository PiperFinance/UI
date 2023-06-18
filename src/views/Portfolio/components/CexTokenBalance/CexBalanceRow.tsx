import { useCoingecko } from '@hooks/useCoingecko';
import useTooltip from '@hooks/useToolTip/useToolTip';
import type { ICEXBalanceList } from '@store/types';
import Flex from '@ui/Flex/Flex';
import { calculateMultiplyNumbers, formatNumber } from '@utils/bignumber';
import Image from 'next/image';
import { memo } from 'react';

export function CexTokenBalanceRow(token: ICEXBalanceList) {
  const { cexNames, token: ticker, totalBalance } = token;

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
            src={`https://raw.githubusercontent.com/PiperFinance/LO/main/logo/${ticker}.png`}
            alt={ticker}
            className="h-7 w-7 sm:h-10 sm:w-10"
          />
          <Flex direction="column" justifyContent="center" customStyle="ml-3">
            <h6 className="font-bold uppercase max-sm:text-xs">{ticker}</h6>
            <h6 className="text-sm text-gray-400 hidden sm:block">{ticker}</h6>
          </Flex>
        </Flex>
      </td>
      {/* <td className="px-4 max-sm:hidden">
        <Flex>
          <Image
            src={`/assets/cexs/${cexNames[0]}.svg`}
            alt={cexNames[0] ? cexNames[0] : 'CEX'}
            width={30}
            height={30}
          />
        </Flex>
      </td> */}
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
      {/* <td>
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button>
              <EllipsisVerticalIcon className="h-5 w-5" />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="z-20 absolute right-0 mt-2 w-24 origin-top-right divide-y divide-gray-600 rounded-md bg-gray-700 border border-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      // onClick={() => handleSwapToken(token[1])}
                      href="/swap"
                      className={`${
                        active ? 'bg-primary-700' : ''
                      }  flex justify-around w-full items-center text-gray-100 px-2 py-2 text-sm rounded-md`}
                    >
                      Swap
                      <ArrowsRightLeftIcon className="w-4 h-4" />
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-primary-700' : ''
                      }  flex justify-around w-full items-center px-2 py-2 text-sm rounded-md`}
                    >
                      Chart
                      <ChartBarIcon className="w-4 h-4" />
                    </button>
                  )}
                </Menu.Item>
              </div>
              <div>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-primary-700' : ''
                      } flex justify-around w-full items-center px-2 py-2 text-sm rounded-md`}
                    >
                      Info
                      <InformationCircleIcon className="w-4 h-4" />
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </td> */}
    </tr>
  );
}

export default memo(CexTokenBalanceRow);
