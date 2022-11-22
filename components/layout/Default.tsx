import { FC, ReactNode } from 'react';
import Head from 'next/head';
import Sidebar from './Sidebar/Sidebar';

const Default: FC<{ children: ReactNode; pageName: string }> = ({
  children,
  pageName,
}) => (
  <div className="flex bg-gray-1000 overflow-hidden">
    <Head>
      <title>{`${pageName} |  Piper Finance`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Sidebar />
    <main className="w-full px-10 py-5 h-screen overflow-y-auto">
      <div className="w-full flex justify-end items-end">
      </div>
      {children}
    </main>
  </div>
);

export default Default;
