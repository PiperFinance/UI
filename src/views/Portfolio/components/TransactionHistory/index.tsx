import ChainIcon from "@ui/ChainIcon";
import {
  useSaveTransactions,
  useTransactionList,
} from "@views/Portfolio/hooks/useTransactionHistory";
import Flex from "@ui/Flex/Flex";
import Label from "@ui/Label/Label";
import { stringToColor } from "@utils/stringToColor";
import Image from "next/image";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { ITransaction } from "./types";
import { TransactionRow } from "./TransactionRow";
import { Skeleton } from "@ui/Skeleton";

interface ITransactionHistory {
  saveSucceeded: boolean;
}

export default function TransactionHistory(props: ITransactionHistory) {
  const { saveSucceeded } = props;

  const { address } = useAccount();

  const { data, isLoading, error } = useTransactionList(
    address ? String(address) : undefined,
    10,
    1,
    saveSucceeded
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
      <Flex direction="column" customStyle="p-2 h-full overflow-y-auto">
        Something went wrong
      </Flex>
    );
  }

  return (
    <Flex direction="column" customStyle="p-2 h-full overflow-y-auto">
      {data.map((transaction: ITransaction) => (
        <TransactionRow {...transaction} />
      ))}
    </Flex>
  );
}
