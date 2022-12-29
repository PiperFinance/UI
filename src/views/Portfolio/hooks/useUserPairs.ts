import { newAllCustomChains } from "@constants/networkList";
import { useQuery } from "@tanstack/react-query";
export const baseURL = "https://ps.piper.finance/pairs/balance";

const fetchUserPairBalances = async (wallet: string | undefined) => {
  if (!wallet) return;
  const chainList = newAllCustomChains.map((chain) => `&chainId=${chain.id}`);
  const res = await fetch(`${baseURL}?wallet=${wallet}${chainList.join("")}`);
  return res.ok ? res.json() : [];
};

const useUserPairBalances = (wallet: string | undefined) => {
  return useQuery({
    queryKey: ["liquidities", wallet],
    queryFn: () => fetchUserPairBalances(wallet),
    staleTime: 60000,
    refetchInterval: 60000,
  });
};

export { useUserPairBalances, fetchUserPairBalances };
