import Table from "@components/Table/Table";
import TableBody from "@components/Table/TableBody";
import TableHeader from "@components/Table/TableHeader";
import Flex from "@ui/Flex/Flex";
import { TableRowSkeleton } from "@ui/Skeleton";
import { useState, memo } from "react";
import useTable from "@views/Portfolio/hooks/useTable";
import { TokenBalanceRow } from "./TokenBalanceRow";
import type { ITokenBalanceTable, TTokenBalanceRow } from "./types";

function TokenBalanceTable({
  balances,
  isFetched,
  isLoading,
}: ITokenBalanceTable) {
  const [page, setPage] = useState<number>(1);
  const { slice, range } = useTable<TTokenBalanceRow>({
    data: balances,
    page,
    rowsPerPage: 7,
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
      totalLength={!isLoading ? balances.length : 0}
      rowsPerPage={7}
      slice={slice}
      setPage={setPage}
    >
      <TableHeader titleList={["Token", "Networks", "Price", "Balance", ""]} />
      <TableBody>
        {slice.map((token: TTokenBalanceRow) => (
          <TokenBalanceRow key={token[0]} {...token} />
        ))}
      </TableBody>
    </Table>
  );
}

export default memo(TokenBalanceTable);
