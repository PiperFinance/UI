import { newAllCustomChains } from "@constants/networkList";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
export const baseURL = "https://nt.piper.finance";

const handleSaveNFTs = async (wallet: string | undefined) => {
  newAllCustomChains.forEach(async (chain) => {
    await axios.post(`${baseURL}/save_users_trxs`, {
      userAddresses: [wallet],
      chainId: chain.id,
    });
  });
};

const useSaveNFTs = (wallet: string | undefined) => {
  return useMutation({
    mutationFn: () => handleSaveNFTs(wallet),
    retry: 10,
    onSuccess: () => {
      useSaveNftImages(wallet);
    },
  });
};

const handleSaveNftImages = async (wallet: string | undefined) => {
  newAllCustomChains.forEach(async (chain) => {
    await axios.post(`${baseURL}/save_users_trxs`, {
      userAddresses: [wallet],
      chainId: chain.id,
    });
  });
};

const useSaveNftImages = (wallet: string | undefined) => {
  return useMutation({
    mutationFn: () => handleSaveNftImages(wallet),
    retry: 10,
    onSuccess: () => {
      useNftList(wallet);
    },
  });
};

const getNftList = async (wallet: string | undefined, pageSize = 10) => {
  const chainList = newAllCustomChains.map((chain) => `&chainId=${chain.id}`);
  const res = await fetch(
    `${baseURL}/get_users_trxs?userAddress=${wallet}${chainList.join("")}`
  );
  return res.ok ? res.json() : [];
};

const useNftList = (wallet: string | undefined) => {
  return useQuery({
    queryKey: ["userBalances"],
    queryFn: () => getNftList(wallet, 10),
  });
};

export { useNftList, getNftList, useSaveNFTs, useSaveNftImages };
