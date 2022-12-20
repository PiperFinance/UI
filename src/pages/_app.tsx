import "../styles/globals.css";
import type { AppProps, AppType } from "next/app";
import { trpc } from "../utils/trpc";
import { client } from "@utils/wagmi";
import { WagmiConfig } from "wagmi";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";

const App: AppType = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <WagmiConfig client={client}>
          <Component {...pageProps} />
        </WagmiConfig>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default trpc.withTRPC(App);
