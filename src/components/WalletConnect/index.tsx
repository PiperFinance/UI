import { Button } from "@ui/Button/Button";
import Flex from "@ui/Flex/Flex";
import React, { useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import { Modal } from "../Modal/Modal";
import WalletConnectModal from "../WalletConnectModal";
import Image from "next/image";
import { handleSliceHashString } from "@utils/sliceHashString";
import { formatNumber } from "@utils/bignumber";

export default function WalletConnect() {
  const { connector: activeConnector, isConnected, address } = useAccount();
  const { data } = useBalance({
    address,
  });
  const [open, setOpen] = useState(false);

  return (
    <div>
      {isConnected ? (
        <Flex
          position="items-center"
          customStyle="p-2 bg-wheat-200 rounded-2xl space-x-3 my-3"
        >
          <Image
            src={`/assets/wallets/${activeConnector?.name.toLowerCase()}.svg`}
            alt={activeConnector?.name!}
            width={30}
            height={30}
          />
          <Flex>
            {formatNumber(String(data?.formatted), 6)}
            {data?.symbol}
          </Flex>
          <span className="rounded-lg bg-primary-800 px-3 text-lg text-gray-200">
            {address && handleSliceHashString(address!)}
          </span>
        </Flex>
      ) : (
        <Button onClick={() => setOpen(true)} width="sm">
          ConnectWallet
        </Button>
      )}

      <Modal isOpen={open} closeOnOverlayClick onDismiss={() => setOpen(false)}>
        <WalletConnectModal onDismiss={() => setOpen(false)} />
      </Modal>
    </div>
  );
}
