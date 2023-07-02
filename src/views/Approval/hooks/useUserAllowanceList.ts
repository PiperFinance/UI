import { Chains } from "@constants/networkList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const baseURL = `${
  process.env.PS_URL ? process.env.PS_URL : "https://ps.piper.finance"
}/tokens/allowance`;

const fetchUserAllowanceList = async (wallet: string | undefined) => {
  if (!wallet) return;
  const chainList = Chains.map((chain) => `&chainId=${chain.id}`);
  const contracts = [
    "0xdbf497b3d74e7812e81f87614316a90c3a1806f7",
    "0xc92470d7ffa21473611ab6c6e2fcfb8637c8f330",
  ].map((spender) => `&spenders=${spender}`);
  const { data, status } = await axios.get(
    `${baseURL}?wallet=${wallet}${chainList.join("")}${contracts.join("")}`
  );
  return status === 200 ? data : [];
};

const useUserAllowanceList = (wallet: string | undefined) => {
  return useQuery({
    queryKey: ["allowance", wallet],
    queryFn: () => fetchUserAllowanceList(wallet),
    staleTime: 30000,
    refetchInterval: 30000,
  });
};

export { useUserAllowanceList, fetchUserAllowanceList };
