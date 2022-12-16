import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import useTable from "@hooks/useTable";
import { balancesList } from "@store/store";
// import { walletBalances } from '@store/store';
import Flex from "@ui/Flex/Flex";
import { flattenObject } from "@utils/flattenObject";
import { useAtom } from "jotai";
import Image from "next/image";
import React, { ReactNode, useState } from "react";
import TableFooter from "./TableFooter";

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
  return (
    <>
      <table className="text-md my-7 w-full text-left text-gray-800 dark:text-gray-300">
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
