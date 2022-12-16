import "../styles/globals.css";
import type { AppProps, AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { client } from "@utils/wagmi";
import { WagmiConfig } from "wagmi";

const App: AppType = ({ Component, pageProps }: AppProps) => {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
    // <WagmiConfig client={client}>
    //   <WalletProvider>
    //   </WalletProvider>
    // </WagmiConfig>
  );
};

export default trpc.withTRPC(App);
