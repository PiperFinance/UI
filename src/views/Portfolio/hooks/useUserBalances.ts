import { Chains } from "@constants/networkList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const baseURL = `${
  process.env.PS_URL ? process.env.PS_URL : "https://ps.piper.finance"
}/tokens/balance`;

const fetchUserBalances = async (wallet: string | undefined) => {
  if (!wallet) return;
  const chainList = Chains.map((chain) => `&chainId=${chain.id}`);
  var wallets = JSON.parse(localStorage.getItem("userWallets") || "[]").map(
    (add: string) => `&wallet=${add}`
  );
  const { data, status } = await axios.get(
    `${baseURL}?${chainList.join("")}${wallets.join("")} `
  );
  return status === 200 ? data : [];
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
