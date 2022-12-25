import { useAccount } from "wagmi";
import { memo, useMemo } from "react";
import { useUserBalances } from "@views/Portfolio/hooks/useUserBalances";
import { TTokenBalanceRow } from "./types";
import { IChainResponse, updateBalance } from "@store/store";
import dynamic from "next/dynamic";

const TokenBalanceTable = dynamic(() => import("./TokenBalanceTable"));

function TokenBalance() {
  const { address } = useAccount();
  const { data, isLoading, isFetched } = useUserBalances(
    address ? address.toString() : undefined
  );

  const balances: TTokenBalanceRow[] = useMemo(
    () =>
      Object.entries(
        updateBalance<IChainResponse, Text>(data)
      ) as unknown as TTokenBalanceRow[],
    [data]
  );

  return <TokenBalanceTable {...{ balances, isLoading, isFetched }} />;
}

export default memo(TokenBalance);
