import { ReactNode, useEffect, useState } from 'react';
import React from 'react';
import { useAccount } from 'wagmi';
import TableFooter from './TableFooter';
import Flex from '@ui/Flex/Flex';
import ConnectWallet from '@components/ConnectWalletButton';

interface ITable {
  rowsPerPage: number;
  range: number[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  slice: any;
  totalLength: number;
  children: ReactNode;
}

export default function Table({
  rowsPerPage,
  range,
  setPage,
  page,
  slice,
  totalLength,
  children,
}: ITable) {
  const { isConnected } = useAccount();
  const [isUserConnected, setIsUserConnected] = useState<boolean>();

  useEffect(() => setIsUserConnected(isConnected), [isConnected]);

  return (
    <>
      <table className="text-md w-full text-left text-gray-300">
        {children}
      </table>
      <TableFooter
        range={range}
        slice={slice}
        setPage={setPage}
        page={page}
        totalLength={totalLength}
        rowsPerPage={rowsPerPage}
      />
    </>
  );
}
