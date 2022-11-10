import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@rainbow-me/rainbowkit/styles.css';
import {
  Chain,
  connectorsForWallets,
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi';
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
  iconUrl: 'https://example.com/icon.svg',
  iconBackground: '#fff',
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

const tronChain: any = {
  name: 'Tron',
  network: 'tron',
  iconUrl: 'https://example.com/icon.svg',
  iconBackground: '#fff',
  nativeCurrency: {
    decimals: 18,
    name: 'Tron',
    symbol: 'TRX',
  },
  rpcUrls: {
    default: 'https://api.mainnet-beta.solana.com',
  },
  blockExplorers: {
    default: { name: 'tronscan', url: 'https://tronscan.org/#/' },
  },
  testnet: false,
};

const { chains, provider } = configureChains(
  [chain.polygon, chain.mainnet],
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

const connectors = connectorsForWallets([
  {
    groupName: 'Wallets',
    wallets: [
      injectedWallet({ chains }),
      metaMaskWallet({ chains }),
      coinbaseWallet({ chains, appName: 'Cross' }),
      walletConnectWallet({ chains }),
      trustWallet({ chains }),
      braveWallet({ chains }),
      argentWallet({ chains }),
      omniWallet({ chains }),
      imTokenWallet({ chains }),
      rainbowWallet({ chains }),
      phantom({ chains: [solanaChain] }),
    ],
  },
]);

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
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
      <RainbowKitProvider chains={chains} modalSize="compact">
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
              <WalletMultiButton />
              <WalletDisconnectButton />
              {/* Your app's components go here, nested within the context providers. */}
            </WalletModalProvider>
          </WalletProvider>
        </ConnectionProvider>
        <ERC20Balance />
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
