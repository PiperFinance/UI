import '../styles/globals.css';
import type { AppProps } from 'next/app';
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import {
  chain,
  configureChains,
  createClient,
  WagmiConfig,
} from 'wagmi';
import { publicProvider } from 'wagmi/providers/public';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { infuraProvider } from 'wagmi/providers/infura';
import ERC20Balance from '../state/dashboard/updater';

const { chains, provider } = configureChains(
  [chain.polygon, chain.mainnet],
  [
    // alchemyProvider({ apiKey: 'pv-xSVPKpdeM_NXPsyr1n8rhpxvTnIDx' }),
    // infuraProvider({ apiKey: 'yourInfuraApiKey' }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Cross',
  chains,
});

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
