import Table from '@components/Table/Table';
import TableBody from '@components/Table/TableBody';
import TableHeader from '@components/Table/TableHeader';
import { IToken } from '@store/store';
import Flex from '@ui/Flex/Flex';
import { TableRowSkeleton } from '@ui/Skeleton';
import useTable from '@views/Portfolio/hooks/useTable';
import { memo, useState } from 'react';
import { TokenBalanceRow } from './TokenBalanceRow';
import type { ITokenBalanceTable } from './types';

function TokenBalanceTable({
  balances,
  isFetched,
  isLoading,
}: ITokenBalanceTable) {
  const [page, setPage] = useState<number>(1);
  const { slice, range } = useTable<IToken>({
    data: balances,
    page,
    rowsPerPage: 10,
    isFetched,
  });

  if (isLoading) {
    return (
      <Flex direction="column">
        <TableRowSkeleton />
        <TableRowSkeleton />
        <TableRowSkeleton />
      </Flex>
    );
  }

  return (
    <Table
      page={page}
      range={range}
      totalLength={!isLoading ? balances.length : 0}
      rowsPerPage={10}
      slice={slice}
      setPage={setPage}
    >
      <TableHeader titleList={['Token', 'Networks', 'Price', 'Balance', '']} />
      <TableBody>
        {slice.map((token: IToken) => (
          <TokenBalanceRow {...token} />
        ))}
      </TableBody>
    </Table>
  );
}

export default memo(TokenBalanceTable);
