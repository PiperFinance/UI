import { useState, useEffect } from 'react';

interface IUseTable {
  data: any;
  page: number;
  rowsPerPage: number;
}

type TCalcRange = {
  data: any;
  rowsPerPage: number;
};

const calculateRange = ({ data, rowsPerPage }: TCalcRange): number[] => {
  const range = [];
  const num = Math.ceil(data.length / rowsPerPage);
  let i = 1;
  for (let i = 1; i <= num; i++) {
    range.push(i);
  }
  return range;
};

const sliceData = ({ data, page, rowsPerPage }: IUseTable) => {
  return data.slice((page - 1) * rowsPerPage, page * rowsPerPage);
};

const useTable = ({ data, page, rowsPerPage }: IUseTable) => {
  const [tableRange, setTableRange] = useState<any>([]);
  const [slice, setSlice] = useState<any>([]);

  useEffect(() => {
    const range = calculateRange({ data, rowsPerPage });
    setTableRange([...range]);

    const slice = sliceData({ data, page, rowsPerPage });
    console.log(slice);
    setSlice([...slice]);
  }, [data, setTableRange, page, setSlice]);

  return { slice, range: tableRange };
};

export default useTable;
