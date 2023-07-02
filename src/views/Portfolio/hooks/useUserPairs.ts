import { Chains } from "@constants/networkList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const baseURL = `${
  process.env.PS_URL ? process.env.PS_URL : "https://ps.piper.finance"
}/pairs/balance`;

const fetchUserPairBalances = async (wallet: string | undefined) => {
  if (!wallet) return;
  const chainList = Chains.map((chain) => `&chainId=${chain.id}`);
  const { data, status } = await axios.get(
    `${baseURL}?wallet=${wallet}${chainList.join("")}`
  );
  return status === 200 ? data : [];
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
