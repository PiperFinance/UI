import {
  useSaveTransactions,
  useTransactions,
} from "@views/Portfolio/hooks/useTransactions";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { Skeleton } from "@ui/Skeleton";
import Flex from "@ui/Flex/Flex";
import type { ITransaction } from "./types";
import { TransactionRow } from "./TransactionRow";

export default function TransactionHistory() {
  const { address } = useAccount();

  // const { mutate, isSuccess } = useSaveTransactions(
  //   address ? String(address).toLowerCase() : undefined
  // );

  // useEffect(() => {
  //   if (!address) return;
  //   mutate();
  // }, [address]);

  const { data, isLoading, error } = useTransactions(
    address ? String(address) : undefined,
    // isSuccess,
    20,
    1
  );

  if (isLoading) {
    return (
      <Flex direction="column">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Flex>
    );
  }

  if (error) {
    return (
      <Flex
        customStyle="h-40 text-gray-100"
        justifyContent="center"
        alignItems="center"
      >
        Something went wrong
      </Flex>
    );
  }

  if (data?.length === 0) {
    return (
      <Flex
        customStyle="h-40 text-gray-100"
        justifyContent="center"
        alignItems="center"
      >
        No Activity
      </Flex>
    );
  }

  return (
    <Flex direction="column" customStyle="p-2 h-full" overflow="yAuto">
      {data?.map((transaction: ITransaction) => (
        <TransactionRow key={transaction.hash} {...transaction} />
      ))}
    </Flex>
  );
}
