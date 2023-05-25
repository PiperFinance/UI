import Table from '@components/Table/Table';
import TableBody from '@components/Table/TableBody';
import TableHeader from '@components/Table/TableHeader';
import { ICEXBalanceList } from '@store/store';
import useTable from '@views/Portfolio/hooks/useTable';
import { memo, useState } from 'react';
import { CexTokenBalanceRow } from './CexBalanceRow';
import type { ICexTokenBalanceTable } from './types';

function CexTokenBalanceTable({ balances }: ICexTokenBalanceTable) {
  const [page, setPage] = useState<number>(1);
  const { slice, range } = useTable<ICEXBalanceList>({
    data: balances,
    page,
    rowsPerPage: 7,
  });

  return (
    <Table
      page={page}
      range={range}
      totalLength={balances ? balances.length : 0}
      rowsPerPage={7}
      slice={slice}
      setPage={setPage}
    >
      <TableHeader titleList={['Token', 'CEX', 'Price', 'Balance', '']} />
      <TableBody>
        {balances.map((token: ICEXBalanceList) => (
          <CexTokenBalanceRow key={token.ticker} {...token} />
        ))}
      </TableBody>
    </Table>
  );
}

export default memo(CexTokenBalanceTable);
