import Flex from '@ui/Flex/Flex';
import React from 'react';
import metamask from '@assets/wallets/metamask.svg';
import phantom from '@assets/wallets/phantom.svg';
import trust from '@assets/wallets/trust.svg';
import walletConnect from '@assets/wallets/walletconnect.svg';
import xdefi from '@assets/wallets/xdefi.svg';
import coinbase from '@assets/wallets/coinbase wallet.svg';
import Image from 'next/image';
import { useConnect } from 'wagmi';
import ModalHeader from '../ModalHeader';

type TWalletList = {
  name: string;
  icon: any;
  onClick?: () => void;
};

interface IWalletConnectModal {
  onDismiss: () => void;
}

export default function ConnectWalletModal({ onDismiss }: IWalletConnectModal) {
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect({
      onSuccess() {
        onDismiss();
      },
    });

  const walletList: TWalletList[] = [
    {
      name: 'Metamask',
      icon: metamask,
    },
    {
      name: 'Phantom',
      icon: phantom,
    },
    {
      name: 'Trust Wallet',
      icon: trust,
    },
    {
      name: 'Wallet Connect',
      icon: walletConnect,
    },
    {
      name: 'Xdefi',
      icon: xdefi,
    },
    {
      name: 'Coinbase',
      icon: coinbase,
    },
  ];

  return (
    <Flex
      direction="column"
      customStyle="max-w-lg bg-gray-800 rounded-2xl p-5 space-y-2"
    >
      <ModalHeader title="Connect Your Wallet" onClick={onDismiss} />
      <Flex justifyContent="between" wrap={true}>
        {connectors.map((connector) => (
          <Flex
            key={connector.id}
            direction="column"
            width="basis32"
            justifyContent="evenly"
            alignItems="center"
            customStyle={`text-gray-50 text-sm rounded-2xl bg-gray-999 cursor-pointer h-32 my-4 ${
              isLoading && connector.id === pendingConnector?.id
                ? 'animate-pulse'
                : ''
            }`}
            onClick={() => connect({ connector })}
          >
            <div className="relative h-12 w-12">
              <Image
                className="rounded-full"
                src={`/assets/wallets/${connector.name.toLowerCase()}.svg`}
                alt={connector.name}
                fill
              />
            </div>
            <span>{connector.name}</span>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
