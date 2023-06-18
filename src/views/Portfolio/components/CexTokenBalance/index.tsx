import { useVaultBalances } from '@hooks/useCede';
import { memo } from 'react';
import CexTokenBalanceTable from './CexBalanceTable';
import Flex from '@ui/Flex/Flex';
import { TableRowSkeleton } from '@ui/Skeleton';

function CexTokenBalance() {
  const { balances, loading } = useVaultBalances();
  console.log(balances)

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
