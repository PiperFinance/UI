import { updateBalance } from "@store/store";
import Flex from "@ui/Flex/Flex";
import { TableRowSkeleton } from "@ui/Skeleton";
import { useUserPairBalances } from "@views/Portfolio/hooks/useUserPairs";
import dynamic from "next/dynamic";
import { memo, useMemo } from "react";
import { useAccount } from "wagmi";
import { IPair, TPairBalanceRow, IPairResponse } from "./types";

const PairBalanceTable = dynamic(() => import("./PairBalanceTable"), {
  loading: () => (
    <Flex direction="column">
      <TableRowSkeleton />
      <TableRowSkeleton />
      <TableRowSkeleton />
    </Flex>
  ),
});

function PairBalance() {
  const { address } = useAccount();
  const { data, isLoading, isFetched } = useUserPairBalances(
    address ? address.toString() : undefined
  );

  const pairBalances: TPairBalanceRow[] = useMemo(
    () =>
      Object.entries(
        updateBalance<IPairResponse, IPair>(data)
      ) as unknown as TPairBalanceRow[],
    [data]
  );

  return <PairBalanceTable {...{ pairBalances, isLoading, isFetched }} />;
}

export default memo(PairBalance);
