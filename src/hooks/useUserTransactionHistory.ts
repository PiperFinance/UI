import { newAllCustomChains } from "@constants/networkList";
import { useMutation, useQuery } from "@tanstack/react-query";
export const baseURL = "https://th.piper.finance";

const handleSaveTransaction = async (wallet: string | undefined) => {
  newAllCustomChains.forEach(async (chain) => {
    await fetch(`${baseURL}/save_users_trxs`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userAddresses: [wallet],
        chainId: chain.id,
      }),
    });
  });
};

const useSaveTransactions = (wallet: string | undefined) => {
  return useMutation({
    mutationFn: () => handleSaveTransaction(wallet),
    retry: 10,
  });
};

const fetchUserBalances = async (wallet: string | undefined, pageSize = 10) => {
  const chainList = newAllCustomChains.map((chain) => `&chainId=${chain.id}`);
  const res = await fetch(`${baseURL}?wallet=${wallet}${chainList.join("")}`);
  return res.ok ? res.json() : [];
};

const useUserBalances = (wallet: string | undefined) => {
  return useQuery({
    queryKey: ["userBalances"],
    queryFn: () => fetchUserBalances(wallet, 10),
  });
};

export { useUserBalances, fetchUserBalances, useSaveTransactions };
