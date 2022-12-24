import { newAllCustomChains } from "@constants/networkList";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
import Flex from "@ui/Flex/Flex";
import React from "react";
import ChainIcon from "@ui/ChainIcon";
import { ITransaction } from "./types";
import Label from "@ui/Label/Label";
import { stringToColor } from "@utils/stringToColor";
import { handleSliceHashString } from "@utils/sliceHashString";

export function TransactionRow(transaction: ITransaction) {
  const labels = ["swap", "approve", "bridge", "deposit"];

  return (
    <Flex
      customStyle="py-4 border-b border-gray-500 last:border-b-0"
      alignItems="center"
    >
      <ChainIcon chainId={transaction.chainId} />
      <Flex direction="column">
        <div className="w-fit rounded-full bg-slate-700  px-2 text-sm text-gray-200">
          {transaction.userAddress &&
            handleSliceHashString(transaction.userAddress!)}
        </div>
        <Flex customStyle="mt-2">
          {labels.map((label: string) => (
            <Label bgColor={stringToColor(label)} key={label}>
              {label}
            </Label>
          ))}
        </Flex>
      </Flex>
      <Flex width="fit"></Flex>
      {newAllCustomChains.map(
        (chain) =>
          chain.id === transaction.chainId && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`${chain.blockExplorers?.default.url}/tx/${transaction.hash}`}
              className="w-auto overflow-hidden overflow-ellipsis text-sm hover:text-gray-400 dark:text-gray-300"
            >
              <ArrowTopRightOnSquareIcon className="w-7" />
            </a>
          )
      )}
    </Flex>
  );
}
