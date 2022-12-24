import ChainIcon from "@ui/ChainIcon";
import {
  useSaveTransactions,
  useTransactionList,
} from "@hooks/useTransactionHistory";
import Flex from "@ui/Flex/Flex";
import Label from "@ui/Label/Label";
import { stringToColor } from "@utils/stringToColor";
import Image from "next/image";
import { useEffect } from "react";
import { useAccount } from "wagmi";
import { ITransaction } from "./types";
import { TransactionRow } from "./TransactionRow";

interface ITransactionHistory {
  saveSucceeded: boolean;
}

export default function TransactionHistory(props: ITransactionHistory) {
  const { saveSucceeded } = props;

  const { address } = useAccount();

  const { data, error } = useTransactionList(
    address ? String(address) : undefined,
    10,
    1,
    saveSucceeded
  );

  console.log(data);

  return (
    <Flex direction="column" customStyle="p-2 h-full overflow-y-auto">
      {data.map((transaction: ITransaction) => (
        <TransactionRow {...transaction} />
      ))}
    </Flex>
  );
}
