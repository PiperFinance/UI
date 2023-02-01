import Flex from '@ui/Flex/Flex';
import { Skeleton } from '@ui/Skeleton';
import { useNftList, useSaveNFTs } from '@views/Portfolio/hooks/useNFTs';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';
import { NftBox } from './NftBox';
import type { INft } from './types';

export default function NFTList() {
  const { address } = useAccount();

  const { mutate, isSuccess } = useSaveNFTs(
    address ? address.toString().toLowerCase() : undefined
  );

  useEffect(() => {
    if (!address) return;
    mutate();
  }, [address]);

  const { data, isLoading, error } = useNftList(
    address ? address.toString().toLowerCase() : undefined,
    isSuccess,
    10,
    1
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
    <Flex
      customStyle="p-2 h-full"
      overflow="yAuto"
      wrap={true}
      justifyContent="evenly"
    >
      {data.nfts.map((nft: INft) => (
        <NftBox key={nft.detail.id} {...nft} />
      ))}
    </Flex>
  );
}
