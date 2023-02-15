import Flex from '@ui/Flex/Flex';
import React, { Fragment, useEffect, useState } from 'react';
import { useAccount, useBalance, useDisconnect, useNetwork } from 'wagmi';
import Image from 'next/image';
import { handleSliceHashString } from '@utils/sliceHashString';
import { formatNumber } from '@utils/bignumber';
import { ReceiveAmountSkeleton } from '../UI/Skeleton';
import { Menu, Transition } from '@headlessui/react';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
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
    { placement: 'bottom' }
  );

  const {
    targetRef: addressTarget,
    tooltip: addressTooltip,
    tooltipVisible: addressVisible,
  } = useTooltip(address, {
    placement: 'auto',
  });

  const {
    targetRef: disconnectRef,
    tooltip: disconnectTooltip,
    tooltipVisible: disconnectVisible,
  } = useTooltip('Disconnect', {
    placement: 'bottom',
  });


  return (
    <Menu as="div" className="relative my-5">
      <Menu.Button>
        <Flex
          alignItems="center"
          customStyle="p-2 bg-wheat-200 rounded-2xl text-base space-x-3"
        >
          {connectorVisible && connectorTooltip}
          <div className="relative h-8 w-8" ref={connectorTarget}>
            <Image
              src={`/assets/wallets/${activeConnector?.name.toLowerCase()}.svg`}
              alt={activeConnector?.name!}
              fill
            />
          </div>
          {networkVisible && networkTooltip}
          <div className="relative h-8 w-8" ref={networkTarget}>
            <Image
              //@ts-ignore
              src={chain.icon ? chain?.icon.src : undefined}
              alt={chain?.network!}
              fill
              className="rounded-lg bg-gray-800"
            />
          </div>
          {balanceVisible && balanceTooltip}
          {!data ? (
            <ReceiveAmountSkeleton />
          ) : (
            <div ref={balanceTarget}>
              <Flex customStyle="text-sm lg:text-lg" width="fit">
                {formatNumber(data?.formatted.toString(), 6)}
                &nbsp;
                {data?.symbol}
              </Flex>
            </div>
          )}
          {addressVisible && addressTooltip}
          <span
            ref={addressTarget}
            className="rounded-lg bg-primary-800 px-3 max-[420px]:hidden sm:text-base lg:text-lg text-gray-200"
          >
            {address && handleSliceHashString(address!)}
          </span>
        </Flex>
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
        <Menu.Items className="absolute right-0 mt-2 origin-top-right rounded-2xl border border-gray-700 bg-gray-122 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            <Flex
              customStyle="p-2 text-gray-500 rounded-2xl w-72 sm:w-96 text-sm"
              alignItems="center"
            >
              <Flex alignItems="center" customStyle="space-x-3 w-1/2">
                <Image
                  src={`/assets/wallets/${activeConnector?.name.toLowerCase()}.svg`}
                  alt={activeConnector?.name!}
                  width={40}
                  height={40}
                />
                {!data ? (
                  <ReceiveAmountSkeleton />
                ) : (
                  <Flex direction="column" customStyle=" ">
                    <span className="rounded-lg text-base font-semibold text-gray-200">
                      {address && handleSliceHashString(address!)}
                    </span>
                    <div className="text-sm">
                      {formatNumber(String(data?.formatted), 6)}
                      {data?.symbol}
                    </div>
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
