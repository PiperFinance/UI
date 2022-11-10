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
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} modalSize="compact">
        <ERC20Balance />
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
