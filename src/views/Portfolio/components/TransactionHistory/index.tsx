import {
  useSaveTransactions,
  useTransactions,
} from "@views/Portfolio/hooks/useTransactions";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { ITransaction } from "./types";
import { TransactionRow } from "./TransactionRow";
import { Skeleton } from "@ui/Skeleton";
import Flex from "@ui/Flex/Flex";

export default function TransactionHistory() {
  const { address } = useAccount();

  const { mutate, isSuccess } = useSaveTransactions(
    address ? String(address).toLowerCase() : undefined
  );

  useEffect(() => {
    if (!address) return;
    mutate();
  }, [address]);

  const { data, isLoading, error } = useTransactions(
    address ? String(address) : undefined,
    10,
    1,
    isSuccess
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
    <Flex direction="column" customStyle="p-2 h-full overflow-y-auto">
      {data?.map((transaction: ITransaction) => (
        <TransactionRow {...transaction} />
      ))}
    </Flex>
  );
}
