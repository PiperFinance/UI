import Table from "@components/Table/Table";
import TableBody from "@components/Table/TableBody";
import TableHeader from "@components/Table/TableHeader";
import useTable from "@hooks/useTable";
import { useUserPairBalances } from "@hooks/useUserPairs";
import { updateBalance } from "@store/store";
import Flex from "@ui/Flex/Flex";
import { TableRowSkeleton } from "@ui/Skeleton";
import { useState } from "react";
import { PairBalanceRow } from "./PairBalanceRow";
import { IPair, IPairBalanceRow, IPairResponse } from "./types";

export default function PairBalance() {
  const [page, setPage] = useState<number>(1);
  const { data, isLoading, isFetched } = useUserPairBalances();
  const { slice, range } = useTable({
    data: !isFetched
      ? []
      : Object.entries(updateBalance<IPairResponse, IPair>(data)),
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
      totalLength={
        !isLoading
          ? Object.values(updateBalance<IPairResponse, IPair>(data)).length
          : 0
      }
      rowsPerPage={5}
      slice={slice}
      setPage={setPage}
    >
      <TableHeader titleList={["Token", "Networks", "Balance"]} />
      <TableBody>
        {slice.map((pair: IPairBalanceRow) => (
          <PairBalanceRow {...pair} />
        ))}
      </TableBody>
    </Table>
  );
}
