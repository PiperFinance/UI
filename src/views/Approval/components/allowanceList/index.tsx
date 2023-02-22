import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { Skeleton } from '@ui/Skeleton';
import Flex from '@ui/Flex/Flex';
import { AllowanceRow } from './allowanceRow';
import { useUserAllowanceList } from '@views/Approval/hooks/useUserAllowanceList';
import { updateBalance } from '@store/store';

export default function AllowanceList() {
  const { address } = useAccount();

  const { data, isLoading, isFetched, isRefetching, error } =
    useUserAllowanceList(address ? address.toString() : undefined);

  const allowanceItem: any[] = Object.entries(
    updateBalance<any, Text>(data as unknown as any)
  );

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
