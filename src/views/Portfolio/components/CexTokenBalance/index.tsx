import { cexBalancesList } from '@store/store';
import { useAtom } from 'jotai';
import { memo } from 'react';
import CexTokenBalanceTable from './CexBalanceTable';

function CexTokenBalance() {
  const [cexBalanceToken] = useAtom(cexBalancesList);

  return <CexTokenBalanceTable balances={cexBalanceToken} />;
}

export default memo(CexTokenBalance);
