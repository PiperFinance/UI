import { Chains } from '@constants/networkList';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const baseURL = process.env.NT_URL
  ? process.env.NT_URL
  : 'https://nt.piper.finance';

const getNftList = async (wallet: string | undefined) => {
  const chainList = Chains.map((chain) => `&chainId=${chain.id}`);
  const { data, status } = await axios.get(
    `https://th_v2.piper.finance/wallet/56/nft/${wallet}`
  );
  return status === 200 ? data : [];
};

const useNftList = (
  wallet: string | undefined,
  // saveSucceeded: boolean,
  pageSize = 10,
  pageNumber = 1
) => {
  return useQuery({
    queryKey: ['userNFTs', wallet],
    queryFn: () => getNftList(wallet),
    staleTime: 60000,
    refetchInterval: 60000,
  });
};

export { getNftList, useNftList };
