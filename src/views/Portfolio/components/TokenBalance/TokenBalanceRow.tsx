import ChainIcon from '@components/ChainIcon';
import TokenLogo from '@components/TokenLogo';
import { Menu, Transition } from '@headlessui/react';
import {
  ArrowsRightLeftIcon,
  ChartBarIcon,
  EllipsisVerticalIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';
import useTooltip from '@hooks/useToolTip/useToolTip';
import { IToken, destinationToken, originToken } from '@store/store';
import Flex from '@ui/Flex/Flex';
import { calculateMultiplyNumbers, formatNumber } from '@utils/bignumber';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { Fragment, memo } from 'react';
import { HiExternalLink } from 'react-icons/hi';

export function TokenBalanceRow(token: IToken) {
  const [, setFormToken] = useAtom(originToken);
  const [, setToToken] = useAtom(destinationToken);

  const { detail, balance } = token;
  // const { data: tokenPrice, status } = useCoingecko(detail?.symbol);

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    '$' + token.priceUSD,
    {
      placement: 'bottom-start',
    }
  );

  const tokenValue =
    status !== 'loading'
      ? calculateMultiplyNumbers(balance!, token.priceUSD ?? 0)
      : 0;

  function handleSwapToken(token: IToken) {
    setFormToken(token);
    setToToken(undefined);
  }

  return (
    <tr
      key={detail?.address}
      className="border-b last:border-b-0 border-gray-300 transition"
    >
      <td className="p-4">
        <Flex>
          <TokenLogo detail={detail} style={'h-7 w-7 sm:h-10 sm:w-10'} />
          <Flex direction="column" justifyContent="center" customStyle="ml-3">
            <h6 className="font-bold text-gray-50 uppercase max-sm:text-xs">
              {detail?.symbol}
            </h6>
            <h6 className="text-sm text-gray-200 hidden sm:block">
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
      <td className="px-4 max-sm:hidden text-gray-200">
        <div ref={targetRef}>${token.priceUSD?.toFixed(2)}</div>
        {tooltipVisible && tooltip}
      </td>
      <td className="px-4">
        <div>
          <b className="max-sm:text-xs text-gray-50">${formatNumber(token.value!, 3)}</b>
          <div className="text-sm text-gray-200 max-sm:text-xs">
            {formatNumber(balance!, 8)} <span>{detail?.symbol}</span>
          </div>
        </div>
      </td>
      <td>
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
            <Menu.Items className="z-20 absolute right-0 mt-2 w-24 origin-top-right divide-y divide-gray-600 rounded-md bg-gray-800 shadow-modal  border border-gray-modalBorder ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div>
                <Menu.Item>
                  {({ active }) => (
                    <Link
                      onClick={() => handleSwapToken(token)}
                      href="/swap"
                      className={`${
                        active ? 'bg-primary-700/60' : ''
                      }  flex justify-around w-full items-center text-gray-50 px-2 py-2 text-sm rounded-md`}
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
                    <Link
                    href={`/${token.detail.chainId}/${token.detail.symbol}`}
                      className={`${
                        active ? 'bg-primary-700/60' : ''
                      }  flex justify-around w-full items-center text-gray-50 px-2 py-2 text-sm rounded-md`}
                    >
                      Chart
                      <ChartBarIcon className="w-4 h-4" />
                    </Link>
                  )}
                </Menu.Item>
              </div>
              <div>
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`${
                        active ? 'bg-primary-700/60' : ''
                      } flex justify-around w-full items-center text-gray-50 px-2 py-2 text-sm rounded-md`}
                    >
                      Info
                      <HiExternalLink className="w-4 h-4" />
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </td>
    </tr>
  );
}

export default memo(TokenBalanceRow);
