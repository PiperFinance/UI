import '../styles/globals.css';
import type { AppProps } from 'next/app';
import {
  Chain,
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { infuraProvider } from 'wagmi/providers/infura';
import ERC20Balance from '../state/dashboard/updater';
import {
  coinbaseWallet,
  injectedWallet,
  metaMaskWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
  braveWallet,
  ledgerWallet,
  argentWallet,
  omniWallet,
  imTokenWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { phantom } from '../wallets/phantom';

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  LedgerWalletAdapter,
  MathWalletAdapter,
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  SolletExtensionWalletAdapter,
  SolletWalletAdapter,
  UnsafeBurnerWalletAdapter,
} from '@solana/wallet-adapter-wallets';
import {
  WalletModalProvider,
  WalletDisconnectButton,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import { useMemo } from 'react';

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

const solanaChain: Chain = {
  id: 103,
  name: 'Solana',
  network: 'solana',
  nativeCurrency: {
    decimals: 18,
    name: 'Solana',
    symbol: 'SOL',
  },
  rpcUrls: {
    default: 'https://api.mainnet-beta.solana.com',
  },
  blockExplorers: {
    default: { name: 'Solscan', url: 'https://solscan.io/' },
  },
  testnet: false,
};

const avalancheChain: Chain = {
  id: 43_114,
  name: 'Avalanche',
  network: 'avalanche',
  nativeCurrency: {
    decimals: 18,
    name: 'Avalanche',
    symbol: 'AVAX',
  },
  rpcUrls: {
    default: 'https://api.avax.network/ext/bc/C/rpc',
  },
  blockExplorers: {
    default: { name: 'SnowTrace', url: 'https://snowtrace.io' },
    etherscan: { name: 'SnowTrace', url: 'https://snowtrace.io' },
  },
  testnet: false,
};

const bscChain: Chain = {
  id: 56,
  name: 'BSC Chain',
  network: 'binance smart chain',
  nativeCurrency: {
    decimals: 18,
    name: 'BSC Chain',
    symbol: 'BSC',
  },
  rpcUrls: {
    default: 'https://bsc-dataseed1.ninicoin.io/',
  },
  blockExplorers: {
    default: { name: 'BscScan', url: 'https://bscscan.come' },
  },
  testnet: false,
};

const { chains, provider } = configureChains(
  [chain.polygon, chain.mainnet, avalancheChain, bscChain],
  [
    // alchemyProvider({ apiKey: 'pv-xSVPKpdeM_NXPsyr1n8rhpxvTnIDx' }),
    // infuraProvider({ apiKey: 'yourInfuraApiKey' }),
    publicProvider(),
  ]
);

// const { connectors } = getDefaultWallets({
//   appName: 'Cross',
//   chains,
// });

const wagmiClient = createClient({
  autoConnect: true,
  provider,
});

export default function App({ Component, pageProps }: AppProps) {
  const network = WalletAdapterNetwork.Devnet;

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new SolletWalletAdapter({ network }),
      new SolletExtensionWalletAdapter({ network }),
      new LedgerWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new PhantomWalletAdapter(),
      new MathWalletAdapter(),
    ],
    [network]
  );

  return (
    <WagmiConfig client={wagmiClient}>
      {/* <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <WalletMultiButton />
              <WalletDisconnectButton />
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider> */}
      <ERC20Balance />
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
