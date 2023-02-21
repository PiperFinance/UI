import { Chains } from "@constants/networkList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const baseURL = "https://test_ps.piper.finance/tokens/balance";

const fetchUserAllowanceList = async (wallet: string | undefined) => {
  if (!wallet) return;
  const chainList = Chains.map((chain) => `&chainId=${chain.id}`);
  const { data, status } = await axios.get(
    `${baseURL}?wallet=${wallet}${chainList.join("")}`
  );
  return status === 200 ? data : [];
};

const useUserAllowanceList = (wallet: string | undefined) => {
  return useQuery({
    queryKey: ["balances", wallet],
    queryFn: () => fetchUserAllowanceList(wallet),
    staleTime: 60000,
    refetchInterval: 60000,
  });
};

export { useUserAllowanceList, fetchUserAllowanceList };
