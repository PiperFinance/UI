import Flex from '@ui/Flex/Flex';
import { Skeleton } from '@ui/Skeleton';
import { useTransactions } from '@views/Portfolio/hooks/useTransactions';
import { useAccount } from 'wagmi';
import { TransactionRow } from './TransactionRow';
import type { ITransaction } from './types';

export default function TransactionHistory() {
  const { address } = useAccount();
  const { data, isLoading, error } = useTransactions(
    address ? String(address) : undefined,
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
