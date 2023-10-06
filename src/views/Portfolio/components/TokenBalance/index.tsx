import { type IToken } from '@store/store';
import { sortData } from '@utils/customSort';
import { useUserBalancesFlat } from '@views/Portfolio/hooks/useUserBalances';
import { memo, useMemo } from 'react';
import { useAccount } from 'wagmi';
import TokenBalanceTable from './TokenBalanceTable';

function TokenBalance() {
  const { address } = useAccount();

  const { data, isLoading, isFetched, isRefetching } =
    useUserBalancesFlat(address!);

  const balances: IToken[] = useMemo(
    () => sortData(data as any, 'value', 'balance') as unknown as IToken[],
    [data, isRefetching]
  );

  return <TokenBalanceTable {...{ balances, isLoading, isFetched }} />;
}

export default memo(TokenBalance);
