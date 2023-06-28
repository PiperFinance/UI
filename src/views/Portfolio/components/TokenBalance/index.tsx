import { useAccount } from "wagmi";
import { memo, useMemo } from "react";
import { useUserBalancesFlat } from "@views/Portfolio/hooks/useUserBalances";
import type { IChainResponse, IToken } from "@store/store";
import type { TTokenBalanceRow } from "./types";
import TokenBalanceTable from "./TokenBalanceTable";
import { sortData } from "@utils/customSort";

function TokenBalance() {
  const { data, isLoading, isFetched, isRefetching } =
    useUserBalancesFlat(undefined);

  const balances: IToken[] = useMemo(
    () => sortData(data as any, "value", "balance") as unknown as IToken[],
    [data, isRefetching]
  );

  return <TokenBalanceTable {...{ balances, isLoading, isFetched }} />;
}

export default memo(TokenBalance);
