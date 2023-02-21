
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { Skeleton } from '@ui/Skeleton';
import Flex from '@ui/Flex/Flex';
import type { IAllowance } from './types';
import { AllowanceRow } from './allowanceRow';
import { useUserAllowanceList } from '@views/Approval/hooks/useUserAllowanceList';
import allowanceList from "./allowance.json"
import { updateBalance } from '@store/store';

export default function AllowanceList() {
  const { address } = useAccount();


  const balances: any[] = Object.values(updateBalance<any, Text>(allowanceList as unknown as any))

  console.log(balances)


  const { data, isLoading, isFetched, isRefetching, error } =
    useUserAllowanceList(address ? address.toString() : undefined);

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
      {balances?.map((transaction: IAllowance) => (
        <AllowanceRow
          key={transaction.contract + transaction.token.address}
          {...transaction}
        />
      ))}
    </Flex>
  );
}
