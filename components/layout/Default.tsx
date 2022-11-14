import { FC, ReactNode } from 'react';
import Head from 'next/head';
import Sidebar from './Sidebar/Sidebar';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Default: FC<{ children: ReactNode; pageName: string }> = ({
  children,
  pageName,
}) => (
  <div className="flex bg-slate-700 overflow-hidden overflow-x-hidden overflow-y-hidden">
    <Head>
      <title>{`${pageName} |  Piper Finance`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Sidebar />
    <main className="overflow-hidden w-full">
      <div className="w-full flex justify-end items-end p-3">
        <ConnectButton />
      </div>
      {children}
    </main>
  </div>
);

export default Default;
