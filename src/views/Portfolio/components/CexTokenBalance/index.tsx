import { useVaultBalances } from '@hooks/useCede';
import Flex from '@ui/Flex/Flex';
import { TableRowSkeleton } from '@ui/Skeleton';
import { memo } from 'react';
import CexTokenBalanceTable from './CexBalanceTable';

function CexTokenBalance() {
  const { balances, loading } = useVaultBalances();

  if (loading) {
    return (
      <Flex direction="column">
        <TableRowSkeleton />
        <TableRowSkeleton />
        <TableRowSkeleton />
      </Flex>
    );
  }

  return <CexTokenBalanceTable balances={balances} />;
}

export default memo(CexTokenBalance);
