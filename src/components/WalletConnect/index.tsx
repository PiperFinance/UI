import Flex from '@ui/Flex/Flex';
import React, { Fragment, useEffect, useState } from 'react';
import { useAccount, useBalance, useDisconnect, useNetwork } from 'wagmi';
import Image from 'next/image';
import { handleSliceHashString } from '@utils/sliceHashString';
import { formatNumber } from '@utils/bignumber';
import { ReceiveAmountSkeleton } from '../UI/Skeleton';
import { Menu, Transition } from '@headlessui/react';
import {
  ArrowRightOnRectangleIcon,
  WalletIcon,
} from '@heroicons/react/24/solid';
import useTooltip from '@hooks/useToolTip/useToolTip';
import ConnectWallet from '@components/ConnectWalletButton';

export default function WalletConnect() {
  const { isConnected } = useAccount();
  const [isUserConnected, setIsUserConnected] = useState<boolean>();

  useEffect(() => setIsUserConnected(isConnected), [isConnected]);
  return <div>{!isUserConnected ? <ConnectWallet /> : <WalletInfo />}</div>;
}

export function WalletInfo() {
  const { connector: activeConnector, address } = useAccount();
  const { disconnect } = useDisconnect();

  const { chain } = useNetwork();
  const { data } = useBalance({
    address: address,
    chainId: chain?.id,
    watch: true,
  });

  const {
    targetRef: connectorTarget,
    tooltip: connectorTooltip,
    tooltipVisible: connectorVisible,
  } = useTooltip(activeConnector?.name!, { placement: 'bottom' });

  const {
    targetRef: networkTarget,
    tooltip: networkTooltip,
    tooltipVisible: networkVisible,
  } = useTooltip(chain?.network!, {
    placement: 'bottom',
  });

  const {
    targetRef: balanceTarget,
    tooltip: balanceTooltip,
    tooltipVisible: balanceVisible,
  } = useTooltip(
    <Flex>
      {data?.formatted}
      &nbsp;
      {data?.symbol}
    </Flex>,
    { placement: 'bottom-start' }
  );

  const {
    targetRef: addressTarget,
    tooltip: addressTooltip,
    tooltipVisible: addressVisible,
  } = useTooltip(address, {
    placement: 'bottom',
  });

  const {
    targetRef: disconnectRef,
    tooltip: disconnectTooltip,
    tooltipVisible: disconnectVisible,
  } = useTooltip('Disconnect', {
    placement: 'left-end',
  });

  return (
    <Menu as="div" className="relative my-5">
      <Menu.Button>
        <WalletIcon className="w-9 h-9 bg-gray-128 rounded-full p-2 text-gray-500 hover:text-gray-100 transition-all" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 origin-top-right rounded-2xl border border-gray-800 bg-gray-1000 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <Flex
              customStyle="p-2 text-gray-500 rounded-2xl w-72 sm:w-96 text-sm"
              alignItems="center"
            >
              <Flex alignItems="center" customStyle="space-x-3 w-1/2">
                <div ref={networkTarget}>
                  <Image
                    //@ts-ignore
                    src={chain?.icon.src}
                    alt={chain?.network!}
                    width={50}
                    height={50}
                    className="rounded-lg bg--800"
                  />
                </div>
                {networkVisible && networkTooltip}
                <div ref={connectorTarget}>
                  <Image
                    src={`/assets/wallets/${activeConnector?.name.toLowerCase()}.svg`}
                    alt={activeConnector?.name!}
                    width={45}
                    height={45}
                    className="rounded-lg"
                  />
                </div>
                {connectorVisible && connectorTooltip}
                {!data ? (
                  <ReceiveAmountSkeleton />
                ) : (
                  <Flex direction="column" customStyle=" ">
                    <span
                      ref={addressTarget}
                      className="rounded-lg text-base font-semibold text-gray-200"
                    >
                      {address && handleSliceHashString(address!)}
                    </span>
                    {addressVisible && addressTooltip}
                    <div ref={balanceTarget} className="text-sm">
                      {formatNumber(String(data?.formatted), 6)}
                      {data?.symbol}
                    </div>
                    {balanceVisible && balanceTooltip}
                  </Flex>
                )}
              </Flex>
              <ArrowRightOnRectangleIcon
                ref={disconnectRef}
                onClick={() => disconnect()}
                className="h-8 w-8 cursor-pointer transition hover:text-wheat-400"
              />
              {disconnectVisible && disconnectTooltip}
            </Flex>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
