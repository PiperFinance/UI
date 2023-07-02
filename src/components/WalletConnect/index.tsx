import AddNewAddress from "@components/AddNewAddress";
import ConnectWallet from "@components/ConnectWalletButton";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  WalletIcon,
} from "@heroicons/react/24/solid";
import useTooltip from "@hooks/useToolTip/useToolTip";
import { useImportedWallets } from "@hooks/useImportWallet";
import Flex from "@ui/Flex/Flex";
import { formatNumber } from "@utils/bignumber";
import { handleSliceHashString } from "@utils/sliceHashString";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import {
  IoIosArrowBack,
  IoIosArrowForward,
  IoMdAddCircleOutline,
} from "react-icons/io";
import { useAccount, useBalance, useDisconnect, useNetwork } from "wagmi";
import { ReceiveAmountSkeleton } from "../UI/Skeleton";

export default function WalletConnect() {
  const { isConnected } = useAccount();
  const [isUserConnected, setIsUserConnected] = useState<boolean>();

  useEffect(() => setIsUserConnected(isConnected), [isConnected]);
  return <div>{!isUserConnected ? <ConnectWallet /> : <WalletInfo />}</div>;
}

export function WalletInfo() {
  const [isOpen, setIsOpen] = useState(false);

  // TODO - sry for this :( it was annoying
  // console.log(isOpen);

  const { connector: activeConnector, address } = useAccount();
  const { disconnect } = useDisconnect();
  const { importedWallets } = useImportedWallets();
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
  } = useTooltip(activeConnector?.name!, { placement: "bottom" });

  const {
    targetRef: networkTarget,
    tooltip: networkTooltip,
    tooltipVisible: networkVisible,
  } = useTooltip(chain?.network!, {
    placement: "bottom",
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
    { placement: "bottom-start" }
  );

  const {
    targetRef: addressTarget,
    tooltip: addressTooltip,
    tooltipVisible: addressVisible,
  } = useTooltip(address, {
    placement: "bottom",
  });

  // const {
  //   targetRef: disconnectRef,
  //   tooltip: disconnectTooltip,
  //   tooltipVisible: disconnectVisible,
  // } = useTooltip('Disconnect', {
  //   placement: 'left-end',
  // });

  return (
    <>
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
                      src={chain?.icon ? chain?.icon.src : ""}
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
                  // ref={disconnectRef}
                  onClick={() => disconnect()}
                  className="h-8 w-8 cursor-pointer transition hover:text-wheat-400"
                />
                {/* {disconnectVisible && disconnectTooltip} */}
              </Flex>
            </Menu.Item>
            <Menu.Item>
              <Flex
                customStyle="p-3 text-gray-500 w-72 sm:w-96 text-sm border-t border-gray-800 hover:bg-gray-800"
                alignItems="center"
              >
                Imported Wallets
              </Flex>
            </Menu.Item>

            {importedWallets.map((wallet) => (
              <Menu.Item>
                <Flex
                  customStyle="p-4 text-gray-500 w-72 sm:w-96 text-sm border-t border-gray-800 hover:bg-gray-800 "
                  alignItems="center"
                >
                  <IoIosArrowForward className="w-4 h-4 mx-3" />
                  {wallet.slice(0, 15)}...
                  {wallet.slice(wallet.length - 10, wallet.length)}
                </Flex>
              </Menu.Item>
            ))}

            <Menu.Item as="div">
              <Flex
                onClick={() => setIsOpen(true)}
                customStyle="p-3 text-gray-500 w-72 sm:w-96 text-sm border-t border-gray-800 hover:bg-gray-800 rounded-b-2xl cursor-pointer"
                alignItems="center"
              >
                <IoMdAddCircleOutline className="w-4 h-4 mx-3" />
                Add another account
              </Flex>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-1000 p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-100"
                  >
                    Watch any wallet
                  </Dialog.Title>
                  <AddNewAddress />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
