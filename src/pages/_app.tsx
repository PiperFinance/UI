import "../styles/globals.css";
import type { AppProps, AppType } from "next/app";
import { WagmiConfig, createClient, configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { allCustomChains } from "@constants/networkList";
import { InjectedConnector } from "wagmi/connectors/injected";

const { chains, provider } = configureChains(allCustomChains, [
  publicProvider(),
]);
const client = createClient({
  autoConnect: true,
  connectors: [
    new InjectedConnector({
      chains,
      options: {
        shimChainChangedDisconnect: true,
      },
    }),
  ],
  provider,
});

const App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    // <WalletProvider>
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
    // </WalletProvider>
  );
};

export default App;
