import type { FC, ReactNode } from 'react';
import Head from 'next/head';
import Flex from '@ui/Flex/Flex';
import Container from '@ui/Container/Container';
import dynamic from 'next/dynamic';
import ToastContainer from '@components/ToastContainer';
import Sidebar from './Sidebar/Sidebar';
import { Bars3Icon } from '@heroicons/react/24/solid';
import { useAtom } from 'jotai';
import { sidebar } from '@store/store';

const WalletConnect = dynamic(() => import('../WalletConnect'));

const RootLayout: FC<{ children: ReactNode; pageName: string }> = ({
  children,
  pageName,
}) => {
  const [, setSidebar] = useAtom(sidebar);
  return (
    <Flex
      overflow="hidden"
      customStyle="h-screen bg-gray-123"
      onClick={(e) => setSidebar(false)}
    >
      <Head>
        <title>{`${pageName} |  Piper Finance`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ToastContainer />
      <Sidebar />
      <Flex direction="column" customStyle="h-screen" overflow="hidden">
        <Container>
          <Flex justifyContent="mdBetween">
            <Bars3Icon
              className="w-8 text-wheat-300 cursor-pointer block lg:hidden"
              onClick={(e) => {
                e.stopPropagation();
                setSidebar(true);
              }}
            />
            <WalletConnect />
          </Flex>
        </Container>
        <Flex overflow="yAuto">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default RootLayout;
