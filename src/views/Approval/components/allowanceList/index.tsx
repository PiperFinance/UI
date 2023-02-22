import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { Skeleton } from '@ui/Skeleton';
import Flex from '@ui/Flex/Flex';
import { AllowanceRow } from './allowanceRow';
import { useUserAllowanceList } from '@views/Approval/hooks/useUserAllowanceList';

export default function AllowanceList() {
  const { address } = useAccount();

  const { data, isLoading, isFetched, isRefetching, error } =
    useUserAllowanceList(address ? address.toString() : undefined);

  const updateBalance = <T, R>(balances: T[]): R[] => {
    if (!balances) return [];
    const flatBalances: R[] | R = [];
    try {
      Object.entries(balances).forEach(([key, value]: any) => {
        const spender = key
        Object.entries(value).forEach(([key, value]: any) => {
          flatBalances[key] = { "contract": spender, ...value };
        });
      });
    } catch (e) {}
    return flatBalances;
  };

  const allowanceItem: any[] = Object.values(
    updateBalance<any, Text>(data as unknown as any)
  );

  console.log(allowanceItem);
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

  if (!data || data?.length === 0) {
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
      {allowanceItem?.map((allowance) => (
        <AllowanceRow {...allowance} />
      ))}
    </Flex>
  );
}
