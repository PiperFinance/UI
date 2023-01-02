import { newAllCustomChains } from "@constants/networkList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const baseURL = "https://ps.piper.finance/tokens/balance";

const fetchUserBalances = async (wallet: string | undefined) => {
  if (!wallet) return;
  const chainList = newAllCustomChains.map((chain) => `&chainId=${chain.id}`);
  const { data, status } = await axios.get(
    `${baseURL}?wallet=${wallet}${chainList.join("")}`
  );
  return status === 200 ? data.result : [];
};

const useUserBalances = (wallet: string | undefined) => {
  return useQuery({
    queryKey: ["balances", wallet],
    queryFn: () => fetchUserBalances(wallet),
    staleTime: 60000,
    refetchInterval: 60000,
  });
};

export { useUserBalances, fetchUserBalances };
