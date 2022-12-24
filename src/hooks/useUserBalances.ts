import { newAllCustomChains } from "@constants/networkList";
import { useQuery } from "@tanstack/react-query";
export const baseURL = "https://ps.piper.finance/tokens/balance";

const fetchUserBalances = async (wallet: string) => {
  const chainList = newAllCustomChains.map((chain) => `&chainId=${chain.id}`);
  const res = await fetch(
    `${baseURL}?wallet=${wallet}${chainList.join(
      ""
    )}`
  );
  return res.ok ? res.json() : [];
};

const useUserBalances = (wallet: string) => {
  return useQuery({
    queryKey: ["userBalances"],
    queryFn: () => fetchUserBalances(wallet),
  });
};

export { useUserBalances, fetchUserBalances };
