import React, { ReactNode } from "react";
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
