import { useState, useEffect } from "react";

interface IUseTable {
  data: any;
  page: number;
  rowsPerPage: number;
  isFetched?: boolean;
}

type TCalcRange = {
  data: any;
  rowsPerPage: number;
};

const calculateRange = ({ data, rowsPerPage }: TCalcRange): number[] => {
  console.log({ data, rowsPerPage });
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  console.log({ num });
  let i = 1;
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }

  console.log({ range });
  return range;
};

const sliceData = ({ data, page, rowsPerPage }: IUseTable) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = ({ data, page, rowsPerPage, isFetched }: IUseTable) => {
  const [tableRange, setTableRange] = useState<any>([]);
  const [slice, setSlice] = useState<any>([]);

  useEffect(() => {
    const range = calculateRange({ data, rowsPerPage });
    setTableRange([...range]);

    const slice = sliceData({ data, page, rowsPerPage });
    setSlice([...slice]);
  }, [isFetched, setTableRange, page, setSlice]);

  return { slice, range: tableRange };
};

export default useTable;
