import { Button } from '@ui/Button/Button';
import Flex from '@ui/Flex/Flex';
import React, { Fragment, useEffect, useState } from 'react';
import { useAccount, useBalance, useDisconnect, useNetwork } from 'wagmi';
import { Modal } from '../Modal/Modal';
import WalletConnectModal from '../WalletConnectModal';
import Image from 'next/image';
import { handleSliceHashString } from '@utils/sliceHashString';
import { formatNumber } from '@utils/bignumber';
import { Skeleton } from '../UI/Skeleton';
import { Menu, Transition } from '@headlessui/react';
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

export default function WalletConnect() {
  const [open, setOpen] = useState(false);
  const { isConnected } = useAccount();
  const [isUserConnected, setIsUserConnected] = useState<boolean>();

  useEffect(() => setIsUserConnected(isConnected), [isConnected]);
  return (
    <div>
      {!isUserConnected ? (
        <Button
          onClick={() => {
            setOpen(true);
          }}
          width="sm"
        >
          ConnectWallet
        </Button>
      ) : (
        <WalletInfo />
      )}

      <Modal isOpen={open} closeOnOverlayClick onDismiss={() => setOpen(false)}>
        <WalletConnectModal onDismiss={() => setOpen(false)} />
      </Modal>
    </div>
  );
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

  return (
    <Menu as="div" className="relative my-5">
      <Menu.Button>
        <Flex
          alignItems="center"
          customStyle="p-2 bg-wheat-200 rounded-2xl text-base space-x-3"
        >
          <Image
            src={`/assets/wallets/${activeConnector?.name.toLowerCase()}.svg`}
            alt={activeConnector?.name!}
            width={30}
            height={30}
          />
          <Image
            //@ts-ignore
            src={chain?.icon.src}
            alt={activeConnector?.name!}
            width={30}
            height={30}
            className="rounded-lg bg-gray-800"
          />
          {!data ? (
            <Skeleton />
          ) : (
            <Flex customStyle="text-sm lg:text-lg">
              {formatNumber(String(data?.formatted), 6)}
              {data?.symbol}
            </Flex>
          )}
          <span className="rounded-lg bg-primary-800 px-3 max-[420px]:hidden sm:text-base lg:text-lg text-gray-200">
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
                  <Skeleton />
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
                onClick={() => disconnect()}
                className="h-8 w-8 cursor-pointer transition hover:text-wheat-400"
              />
            </Flex>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
