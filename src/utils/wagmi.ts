import { configureChains, createClient, goerli, Chain } from 'wagmi';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { publicProvider } from 'wagmi/providers/public';
import { Chains } from '@constants/networkList';

export const { provider, chains } = configureChains(Chains, [publicProvider()]);

export const injectedConnector = new InjectedConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
});


export const client = createClient({
  autoConnect: true,
  provider,
  connectors: [injectedConnector],
});
