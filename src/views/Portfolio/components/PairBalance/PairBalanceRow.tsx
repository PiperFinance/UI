import ChainIcon from '@components/ChainIcon';
import { Menu, Transition } from '@headlessui/react';
import {
  ChartBarIcon,
  EllipsisVerticalIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/solid';
import Flex from '@ui/Flex/Flex';
import { calculateNumberDecimal, formatNumber } from '@utils/bignumber';
import { Fragment } from 'react';
import type { TPairBalanceRow } from './types';

export function PairBalanceRow(pair: TPairBalanceRow) {
  const { detail, balance } = pair[1];

  const firstToken = Object.values(detail.tokens ? detail.tokens : [])[0];
  const secondToken = Object.values(detail.tokens ? detail.tokens : [])[1];

  return (
    <tr
      key={detail?.address}
      className="border-b last:border-b-0 border-gray-300 transition"
    >
      <td className="p-4">
        <Flex alignItems="center">
          <img
            src={
              firstToken?.detail.logoURI
                ? firstToken?.detail.logoURI
                : '/assets/token-not-found.png'
            }
            alt={firstToken?.detail.symbol!}
            className="sm:mr-1 h-5 w-5 sm:h-8 sm:w-8"
          />
          <img
            src={
              secondToken?.detail.logoURI
                ? secondToken?.detail.logoURI
                : '/assets/token-not-found.png'
            }
            alt={secondToken?.detail.symbol}
            className="sm:mr-1 h-5 w-5 sm:h-8 sm:w-8"
          />
          <Flex direction="column" customStyle="ml-3 max-sm:ml-1">
            <h6 className="font-bold text-gray-50 uppercase max-sm:text-xs">
              {detail?.name}
            </h6>
            <h6 className="text-sm text-gray-200 max-sm:hidden capitalize">
              {detail?.dex}
            </h6>
          </Flex>
        </Flex>
      </td>
      <td className="px-4 max-sm:hidden">
        <Flex>
          <ChainIcon chainId={detail.chainId} />
        </Flex>
      </td>
      {/* <td className="px-4">
        <div>${tokenPrice?.toFixed(2)}</div>{" "}
      </td> */}
      <td className="px-4">
        <div>
          {/* <b>${formatNumber(tokenValue, 3)}</b> */}
          <div className="text-sm sm:text-md text-gray-200">
            {formatNumber(calculateNumberDecimal(balance!, 18), 8)}{' '}
            <span>{detail?.name}</span>
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
            <Menu.Items className="z-20 absolute right-0 mt-2 w-24 origin-top-right divide-y divide-gray-600 rounded-md bg-gray-700 border border-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
      </td>
    </tr>
  );
}
