import { useCedeProvider } from '@hooks/useCede';
import { vaults } from '@store/store';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { config } from '@utils/wagmi';
import { useAtom } from 'jotai';
import type { AppProps, AppType } from 'next/app';
import { useEffect, useState } from 'react';
import { WagmiConfig } from 'wagmi';
import '../styles/globals.css';
import { trpc } from '../utils/trpc';

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
      <WagmiConfig config={config}>
        <Component {...pageProps} />
      </WagmiConfig>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default trpc.withTRPC(App);
