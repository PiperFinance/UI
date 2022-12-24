import Table from "@components/Table/Table";
import TableBody from "@components/Table/TableBody";
import TableHeader from "@components/Table/TableHeader";
import useTable from "@hooks/useTable";
import { useUserBalances } from "@hooks/useUserBalances";
import { IChainResponse, ITokenResponse, updateBalance } from "@store/store";
import Flex from "@ui/Flex/Flex";
import { TableRowSkeleton } from "@ui/Skeleton";
import { useState } from "react";
import { useAccount } from "wagmi";
import { TokenBalanceRow } from "./TokenBalanceRow";
import { ITokenBalanceRow } from "./types";

export default function TokenBalance() {
  const [page, setPage] = useState<number>(1);
  const { address } = useAccount();
  const { data, isLoading, isFetched } = useUserBalances(String(address));
  const { slice, range } = useTable({
    data: !isFetched
      ? []
      : Object.entries(updateBalance<IChainResponse, ITokenResponse>(data)),
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
          ? Object.values(updateBalance<IChainResponse, ITokenResponse>(data))
              .length
          : 0
      }
      rowsPerPage={5}
      slice={slice}
      setPage={setPage}
    >
      <TableHeader titleList={["Token", "Network", "Price", "Balance", ""]} />
      <TableBody>
        {slice.map((token: ITokenBalanceRow) => (
          <TokenBalanceRow {...token} />
        ))}
      </TableBody>
    </Table>
  );
}
