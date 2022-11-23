import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import { Container } from '@ui/Container/Container';
import Image from 'next/image';
import React, { useEffect } from 'react';

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
      <nav
        className="flex justify-between items-center pt-4"
        aria-label="Table navigation"
      >
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
          Showing{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            {page === 1 ? 1 : page * rowsPerPage - (rowsPerPage - 1)}-
            {Number(totalLength) < rowsPerPage * page
              ? totalLength
              : rowsPerPage * page}
          </span>{' '}
          of{' '}
          <span className="font-semibold text-gray-900 dark:text-white">
            {totalLength}
          </span>
        </span>
        <ul className="inline-flex items-center -space-x-px">
          <li>
            <button
              onClick={() => setPage(page - 1)}
              disabled={page === 1 ? true : false}
              className="block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
          </li>
          {range.map((el, index) => (
            <button
              key={index}
              aria-current="page"
              className={`${
                page === el
                  ? 'z-10 py-2 px-3 leading-tight text-blue-600 bg-blue-50 border border-blue-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
                  : 'py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              }`}
              onClick={() => setPage(el)}
            >
              {el}
            </button>
          ))}

          <li>
            <button
              onClick={() => setPage(page + 1)}
              disabled={page === range.length ? true : false}
              className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </li>
        </ul>
      </nav>
    </Container>
  );
}
