import type { FC, ReactNode } from 'react';
import Head from 'next/head';
import { Inter } from '@next/font/google';
import Flex from '@ui/Flex/Flex';
import Container from '@ui/Container/Container';
import dynamic from 'next/dynamic';
import ToastContainer from '@components/ToastContainer';
import Sidebar from './Sidebar/Sidebar';

const WalletConnect = dynamic(() => import('../WalletConnect'));

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

const RootLayout: FC<{ children: ReactNode; pageName: string }> = ({
  children,
  pageName,
}) => {
  return (
    <Flex
      overflow="hidden"
      customStyle={`${inter.variable} h-screen bg-gray-1000 font-sans`}
    >
      <Head>
        <title>{`${pageName} |  Piper Finance`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ToastContainer />
      <Sidebar />
      <Flex direction="column" customStyle="h-screen" overflow="hidden">
        <Container>
          <Flex justifyContent="end">
            <WalletConnect />
          </Flex>
        </Container>
        <Flex customStyle="px-10 py-5" overflow="yAuto">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default RootLayout;
