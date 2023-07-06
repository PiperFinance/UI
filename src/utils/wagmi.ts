import { Chains } from '@constants/networkList';
import { configureChains, createConfig } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { LedgerConnector } from 'wagmi/connectors/ledger';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { publicProvider } from 'wagmi/providers/public';

export const { publicClient, chains } = configureChains(Chains, [
  publicProvider(),
]);

export const walletConnectConnector = new WalletConnectConnector({
  chains,
  options: {
    projectId: 'd5d08188a81a1d0e2ab92df6d3bb2d0b',
  },
});

export const metaMaskConnector = new MetaMaskConnector({
  chains,
  options: {
    shimDisconnect: false,
  },
});

const ledgerConnector = new LedgerConnector({
  options: {
    projectId: 'd5d08188a81a1d0e2ab92df6d3bb2d0b',
    enableDebugLogs: true,
  },
});

export const config = createConfig({
  autoConnect: true,
  publicClient,
  connectors: [
    metaMaskConnector,
    walletConnectConnector,
    ledgerConnector,
  ],
});

export const CHAIN_IDS = chains.map((c) => c.id);
