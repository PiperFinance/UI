import { Chain } from 'wagmi';
import { StaticImageData } from 'next/image';

import eth from '@assets/networks/eth.webp';
import mantle from '@assets/networks/mantle.png';

export interface IChain extends Chain {
  icon?: StaticImageData;
}

export const Chains: IChain[] = [
  {
    nativeCurrency: { name: 'BIT', symbol: 'BIT', decimals: 18 },
    id: 5001,
    name: 'MANTLE',
    network: 'Mantle Testnet',
    rpcUrls: {
      default: { http: ['https://rpc.testnet.mantle.xyz/'] },
      public: { http: ['https://rpc.testnet.mantle.xyz/'] },
    },
    contracts: {
      ensRegistry: { address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
      multicall3: {
        address: '0xcA11bde05977b3631167028862bE2a173976CA11',
        blockCreated: 0,
      },
    },
    blockExplorers: {
      default: { name: 'mantle', url: 'https://explorer.testnet.mantle.xyz/' },
      public: { name: 'mantle', url: 'https://explorer.testnet.mantle.xyz/' },
    },
    testnet: true,
    icon: mantle,
  },
  {
    id: 5,
    name: 'Goerli',
    network: 'goerli',
    nativeCurrency: { name: 'Goerli Ether', symbol: 'ETH', decimals: 18 },
    rpcUrls: {
      default: {
        http: ['https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
      },
      public: {
        http: ['https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161'],
      },
    },
    blockExplorers: {
      default: { name: 'etherscan', url: 'https://goerli.etherscan.io' },
      public: { name: 'etherscan', url: 'https://goerli.etherscan.io' },
    },
    contracts: {
      ensRegistry: { address: '0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e' },
      multicall3: {
        address: '0xcA11bde05977b3631167028862bE2a173976CA11',
        blockCreated: 0,
      },
    },
    testnet: true,
    icon: eth,
  },
];
