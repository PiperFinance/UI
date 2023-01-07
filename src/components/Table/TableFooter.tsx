import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Container from "@ui/Container/Container";
import Flex from "@ui/Flex/Flex";
import React, { useEffect } from "react";

interface ITableFooter {
  range: number[];
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  slice: any;
  totalLength: number;
  rowsPerPage: number;
}

export default function TableFooter({
  range,
  setPage,
  page,
  slice,
  totalLength,
  rowsPerPage,
}: ITableFooter) {
  useEffect(() => {
    if (slice.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slice, page, setPage]);

  return (
    <Container>
      <Flex
        justifyContent="between"
        alignItems="center"
        customStyle="pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-400">
          Showing{" "}
          <span className="font-semibold text-white">
            {page === 1 ? 1 : page * rowsPerPage - (rowsPerPage - 1)}-
            {Number(totalLength) < rowsPerPage * page
              ? totalLength
              : rowsPerPage * page}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-white">
            {totalLength}
          </span>
        </span>
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1}
              className="ml-0 block rounded-l-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
          </li>
          {range.map((el, index) => (
            <button
              key={index}
              aria-current="page"
              className={`${
                page === el
                  ? "z-10 border border-blue-300 bg-blue-50 py-2 px-3 leading-tight text-blue-600 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                  : "border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
              }`}
              onClick={() => setPage(el)}
            >
              {el}
            </button>
          ))}

          <li>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page === range.length}
              className="block rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </li>
        </ul>
      </Flex>
    </Container>
  );
}
