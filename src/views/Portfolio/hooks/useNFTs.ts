import { newAllCustomChains } from "@constants/networkList";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
export const baseURL = "https://nt.piper.finance";

const handleSaveNFTs = async (wallet: string | undefined) => {
  const chainList: number[] = newAllCustomChains.map((chain) => chain.id);
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
      queryClient.invalidateQueries({ queryKey: ["userNFTs"] });
    },
  });
};

const getNftList = async (
  wallet: string | undefined,
  pageSize: number,
  pageNumber: number
) => {
  const chainList = newAllCustomChains.map((chain) => `&chainId=${chain.id}`);
  const { data, status } = await axios.get(
    `${baseURL}/get_users_nfts?userAddress=${wallet}${chainList.join(
      ""
    )}&pageSize=${pageSize}&pageNumber=${pageNumber}`
  );
  return status === 200 ? data.result : [];
};

const useNftList = (
  wallet: string | undefined,
  pageSize: number = 10,
  pageNumber: number = 1,
  saveSucceeded: boolean
) => {
  return useQuery({
    queryKey: ["userNFTs", wallet, pageSize, pageNumber],
    queryFn: () => getNftList(wallet, pageSize, pageNumber),
  });
};

export { useNftList, getNftList, useSaveNFTs };
