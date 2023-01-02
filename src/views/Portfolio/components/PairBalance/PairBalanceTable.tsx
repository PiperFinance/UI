import Table from "@components/Table/Table";
import TableBody from "@components/Table/TableBody";
import TableHeader from "@components/Table/TableHeader";
import Flex from "@ui/Flex/Flex";
import { TableRowSkeleton } from "@ui/Skeleton";
import useTable from "@views/Portfolio/hooks/useTable";
import { memo, useState } from "react";
import { PairBalanceRow } from "./PairBalanceRow";
import type { TPairBalanceRow, IPairBalanceTable } from "./types";

function PairBalanceTable({
  pairBalances,
  isFetched,
  isLoading,
}: IPairBalanceTable) {
  const [page, setPage] = useState<number>(1);
  const { slice, range } = useTable<TPairBalanceRow>({
    data: pairBalances,
    page,
    rowsPerPage: 5,
    isFetched,
  });

  if (isLoading) {
    return (
      <Flex direction="column">
        <TableRowSkeleton />
        <TableRowSkeleton />
        <TableRowSkeleton />
      </Flex>
    );
  }

  return (
    <Table
      page={page}
      range={range}
      totalLength={!isLoading ? pairBalances.length : 0}
      rowsPerPage={5}
      slice={slice}
      setPage={setPage}
    >
      <TableHeader titleList={["Token", "Networks", "Balance"]} />
      <TableBody>
        {slice.map((pair: TPairBalanceRow) => (
          <PairBalanceRow key={pair[0]} {...pair} />
        ))}
      </TableBody>
    </Table>
  );
}

export default memo(PairBalanceTable);
