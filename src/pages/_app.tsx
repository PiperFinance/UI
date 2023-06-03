import '../styles/globals.css';
import type { AppProps, AppType } from 'next/app';
import { trpc } from '../utils/trpc';
import { client } from '@utils/wagmi';
import { WagmiConfig } from 'wagmi';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useCedeProvider } from '@hooks/useCede';
import { vaults } from '@store/store';
import { useAtom } from 'jotai';

const App: AppType = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(() => new QueryClient());
  const [, setVault] = useAtom(vaults);

  const { cedeProvider } = useCedeProvider();

  useEffect(() => {
    if (!cedeProvider) return;
    cedeProvider.on('accountsChanged', () => setVault(undefined));
  }, [cedeProvider]);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <WagmiConfig client={client}>
          <Component {...pageProps} />
        </WagmiConfig>
      </Hydrate>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default trpc.withTRPC(App);
