import { newAllCustomChains } from "@constants/networkList";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { sortData } from "@utils/customSort";
import axios from "axios";

export const baseURL = "https://th.piper.finance";

const handleSaveTransactions = async (wallet: string | undefined) => {
  const chainList: number[] = newAllCustomChains.map((chain) => chain.id);
  await axios.post(`${baseURL}/save_users_trxs`, {
    userAddresses: [wallet],
    chainIds: chainList,
  });
};

const useSaveTransactions = (wallet: string | undefined) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async () => handleSaveTransactions(wallet),
    retry: 0,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["userTXs"] });
    },
  });
};

const getTransactions = async (
  wallet: string | undefined,
  pageSize: number,
  pageNumber: number
) => {
  const chainList = newAllCustomChains.map((chain) => `&chainId=${chain.id}`);
  const { data, status } = await axios.get(
    `${baseURL}/get_users_trxs?userAddress=${wallet}${chainList.join(
      ""
    )}&pageSize=${pageSize}&pageNumber=${pageNumber}`
  );
  return status === 200 ? sortData(data.result, "timeStamp") : [];
};

const useTransactions = (
  wallet: string | undefined,
  saveSucceeded: boolean,
  pageSize = 10,
  pageNumber = 1
) => {
  return useQuery({
    queryKey: ["userTXs", wallet, pageSize, pageNumber],
    queryFn: () => getTransactions(wallet, pageSize, pageNumber),
    enabled: saveSucceeded,
  });
};

export { useTransactions, getTransactions, useSaveTransactions };
