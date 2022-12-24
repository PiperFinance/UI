import { newAllCustomChains } from "@constants/networkList";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
export const baseURL = "https://th.piper.finance";


const handleSaveTransaction = async (
  wallet: string | undefined,
  chainId: number
) => {
  await axios.post(`${baseURL}/save_users_trxs`, {
    userAddresses: [wallet],
    chainId,
  });
};

const useSaveTransactions = (wallet: string | undefined) => {
  return useMutation({
    mutationFn: async ({ chainId }: any) =>
      handleSaveTransaction(wallet, chainId),
    retry: 0,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["userTX"] });
    },
  });
};

const getTransactionList = async (
  wallet: string | undefined,
  pageSize: number,
  pageNumber: number
) => {
  const { data, status } = await axios.get(
    `${baseURL}/get_users_trxs?userAddress=${wallet}&chainId=250&pageSize=${pageSize}&pageNumber=${pageNumber}`
  );
  return status === 200 ? data.result : [];
};

const useTransactionList = (
  wallet: string | undefined,
  pageSize: number = 10,
  pageNumber: number = 1,
  saveSucceeded: boolean
) => {
  return useQuery({
    queryKey: ["userTX", wallet, pageSize, pageNumber],
    queryFn: () => getTransactionList(wallet, pageSize, pageNumber),
    enabled: saveSucceeded,
  });
};

export { useTransactionList, getTransactionList, useSaveTransactions };
