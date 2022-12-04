import { Button } from "@ui/Button/Button";
import Container from "@ui/Container/Container";
import Flex from "@ui/Flex/Flex";
import React, { useContext } from "react";
import metamask from "@assets/wallets/metamask.svg";
import phantom from "@assets/wallets/phantom.svg";
import trust from "@assets/wallets/trust.svg";
import walletConnect from "@assets/wallets/walletconnect.svg";
import xdefi from "@assets/wallets/xdefi.svg";
import coinbase from "@assets/wallets/coinbase.svg";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { useAccount, useConnect, useDisconnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

type TWalletList = {
  name: string;
  icon: any;
  onClick?: () => void;
};

interface IWalletConnectModal {
  onDismiss: () => void;
}

export default function WalletConnectModal({ onDismiss }: IWalletConnectModal) {
  const { connect } = useConnect({
    connector: new InjectedConnector(),
    onSuccess(data) {
      onDismiss();
    },
  });
  const { disconnect } = useDisconnect();

  const walletList: TWalletList[] = [
    {
      name: "Metamask",
      icon: metamask,
      onClick: function () {
        connect();
      },
    },
    {
      name: "Phantom",
      icon: phantom,
    },
    {
      name: "Trust Wallet",
      icon: trust,
    },
    {
      name: "Wallet Connect",
      icon: walletConnect,
    },
    {
      name: "Xdefi",
      icon: xdefi,
    },
    {
      name: "Coinbase",
      icon: coinbase,
    },
  ];

  return (
    <Flex
      direction="flex-col"
      customStyle="max-w-lg bg-gray-800 rounded-2xl p-5 space-y-2"
    >
      <Flex
        position="justify-between"
        customStyle="text-lg font-bold text-gray-50"
      >
        <h1>Connect Wallet</h1>
        <XMarkIcon
          onClick={onDismiss}
          className="h-6 w-6 cursor-pointer transition hover:text-red-400"
        />
      </Flex>
      <Flex position="justify-between" customStyle="flex-wrap">
        {walletList.map((wallet: TWalletList) => (
          <Flex
            key={wallet.name}
            direction="flex-col"
            position="justify-evenly items-center text-gray-50 text-sm rounded-2xl bg-gray-999 cursor-pointer"
            customStyle="basis-32 h-32 my-4"
            onClick={wallet.onClick}
          >
            <div className="relative h-12 w-12">
              <Image
                className="rounded-full"
                src={wallet.icon}
                alt={wallet.name}
                fill
              />
            </div>
            <span>{wallet.name}</span>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
