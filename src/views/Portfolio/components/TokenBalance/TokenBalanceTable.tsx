import Table from "@components/Table/Table";
import TableBody from "@components/Table/TableBody";
import TableHeader from "@components/Table/TableHeader";
import Flex from "@ui/Flex/Flex";
import { TableRowSkeleton } from "@ui/Skeleton";
import { useState } from "react";
import { TokenBalanceRow } from "./TokenBalanceRow";
import { ITokenBalanceTable, TTokenBalanceRow } from "./types";
import { memo } from "react";
import useTable from "@views/Portfolio/hooks/useTable";

function TokenBalanceTable({
  balances,
  isFetched,
  isLoading,
}: ITokenBalanceTable) {
  const [page, setPage] = useState<number>(1);

  const { slice, range } = useTable<TTokenBalanceRow>({
    data: balances,
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
      totalLength={!isLoading ? balances.length : 0}
      rowsPerPage={5}
      slice={slice}
      setPage={setPage}
    >
      <TableHeader titleList={["Token", "Network", "Price", "Balance", ""]} />
      <TableBody>
        {slice.map((token: TTokenBalanceRow) => (
          <TokenBalanceRow {...token} />
        ))}
      </TableBody>
    </Table>
  );
}

export default memo(TokenBalanceTable);
