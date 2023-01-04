import { updateBalance } from '@store/store';
import { sortData } from '@utils/customSort';
import { useUserPairBalances } from '@views/Portfolio/hooks/useUserPairs';
import { memo, useMemo } from 'react';
import { useAccount } from 'wagmi';
import PairBalanceTable from './PairBalanceTable';
import type { IPair, TPairBalanceRow, IPairResponse } from './types';

function PairBalance() {
  const { address } = useAccount();
  const { data, isLoading, isFetched } = useUserPairBalances(
    address ? address.toString() : undefined
  );

  const pairBalances: TPairBalanceRow[] = useMemo(
    () =>
      sortData(
        Object.entries(updateBalance<IPairResponse, IPair>(data)),
        'balance',
        'value'
      ) as unknown as TPairBalanceRow[],
    [data]
  );

  return <PairBalanceTable {...{ pairBalances, isLoading, isFetched }} />;
}

export default memo(PairBalance);
