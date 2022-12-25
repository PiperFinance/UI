import { useState, useEffect } from "react";

interface IUseTable<T> {
  data: T[];
  page: number;
  rowsPerPage: number;
  isFetched?: boolean;
}

type TCalcRange<T> = {
  data: T[];
  rowsPerPage: number;
};

const calculateRange = <T>({ data, rowsPerPage }: TCalcRange<T>): number[] => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }

  return range;
};

const sliceData = <T>({ data, page, rowsPerPage }: IUseTable<T>) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = <T>({
  data,
  page,
  rowsPerPage,
  isFetched,
}: IUseTable<T>): { slice: T[]; range: number[] } => {
  const [range, setRange] = useState<number[]>([]);
  const [slice, setSlice] = useState<T[]>([]);

  useEffect(() => {
    if (isFetched) {
      const range = calculateRange<T>({ data, rowsPerPage });
      setRange([...range]);
      const slice = sliceData<T>({ data, page, rowsPerPage });
      setSlice([...slice]);
    }
  }, [isFetched, page]);

  return { slice, range };
};

export default useTable;
