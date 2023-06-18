import { useVaultTransaction } from '@hooks/useCede';
import { ICEXTransaction } from '@store/types';
import Flex from '@ui/Flex/Flex';
import { Skeleton } from '@ui/Skeleton';
import { CexTransactionRow } from './TransactionRow';

export default function CexTransactionHistory() {
  const { transactions, loading } = useVaultTransaction();

  if (loading) {
    return (
      <Flex direction="column">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Flex>
    );
  }

  if (!transactions) {
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

  if (transactions?.length === 0) {
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
      {transactions?.map((transaction: ICEXTransaction) => (
        <CexTransactionRow
          key={transaction.from.transaction.timestamp}
          {...transaction}
        />
      ))}
    </Flex>
  );
}
