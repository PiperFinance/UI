import { allCustomChains, newAllCustomChains } from "@constants/networkList";
import { configureChains, createClient } from "wagmi";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector as MyMetamask } from "./wallets/metamask";

export const { provider, chains } = configureChains(newAllCustomChains, [
  publicProvider(),
]);

export const injectedConnector = new InjectedConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
});

export const coinbaseConnector = new CoinbaseWalletConnector({
  chains,
  options: {
    appName: "Piper.finance",
  },
});

export const walletConnectConnector = new WalletConnectConnector({
  chains,
  options: {
    qrcode: true,
  },
});

export const walletConnectNoQrCodeConnector = new WalletConnectConnector({
  chains,
  options: {
    qrcode: false,
  },
});

export const metaMaskConnector = new MetaMaskConnector({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
});

export const myMetamask = new MyMetamask({
  chains,
  options: {
    shimDisconnect: false,
    shimChainChangedDisconnect: true,
  },
});

// export const bscConnector = new BinanceWalletConnector({ chains })

export const client = createClient({
  autoConnect: true,
  provider,
  connectors: [metaMaskConnector, coinbaseConnector, walletConnectConnector],
});

export const CHAIN_IDS = chains.map((c) => c.id);

// export const isChainSupported = memoize((chainId: number) => CHAIN_IDS.includes(chainId))
// export const isChainTestnet = memoize((chainId: number) => chains.find((c) => c.id === chainId)?.testnet)
