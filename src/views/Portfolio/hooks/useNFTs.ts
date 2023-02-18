import { Chains } from '@constants/networkList';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const baseURL = 'https://nt.piper.finance';

const handleSaveNFTs = async (wallet: string | undefined) => {
  const chainList: number[] = Chains.map((chain) => chain.id);
  await axios.post(`${baseURL}/save_users_nfts`, {
    userAddresses: [wallet],
    chainIds: chainList,
  });
};

const useSaveNFTs = (wallet: string | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => handleSaveNFTs(wallet),
    retry: 10,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['userNFTs'] });
    },
  });
};

const getNftList = async (
  wallet: string | undefined,
  pageSize: number,
  pageNumber: number
) => {
  const chainList = Chains.map((chain) => `&chainId=${chain.id}`);
  const { data, status } = await axios.get(
    `${baseURL}/get_users_nfts?userAddress=${wallet}${chainList.join(
      ''
    )}&pageSize=${pageSize}&pageNumber=${pageNumber}`
  );
  return status === 200 ? data.result : [];
};

const useNftList = (
  wallet: string | undefined,
  saveSucceeded: boolean,
  pageSize = 10,
  pageNumber = 1
) => {
  return useQuery({
    queryKey: ['userNFTs', wallet, pageSize, pageNumber],
    queryFn: () => getNftList(wallet, pageSize, pageNumber),
    enabled: saveSucceeded,
    staleTime: 60000,
    refetchInterval: 60000,
  });
};

export { useNftList, getNftList, useSaveNFTs };
