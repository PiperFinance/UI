import { useAccount } from "wagmi";
import { memo, useMemo } from "react";
import { useUserBalances } from "@views/Portfolio/hooks/useUserBalances";
import { TTokenBalanceRow } from "./types";
import { IChainResponse, updateBalance } from "@store/store";
import TokenBalanceTable from "./TokenBalanceTable";

function TokenBalance() {
  const { address } = useAccount();
  const { data, isLoading, isFetched, isRefetching } = useUserBalances(
    address ? address.toString() : undefined
  );

  const balances: TTokenBalanceRow[] = useMemo(
    () =>
      Object.entries(
        updateBalance<IChainResponse, Text>(data)
      ) as unknown as TTokenBalanceRow[],
    [data, isRefetching]
  );

  return <TokenBalanceTable {...{ balances, isLoading, isFetched }} />;
}

export default memo(TokenBalance);
