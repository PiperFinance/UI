import { Chains } from "@constants/networkList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const baseURLFlat = `${
  process.env.PS_URL ? process.env.PS_URL : "https://ps.piper.finance"
}/v2/tokens/balance/flat`;

export const baseURL = `${
  process.env.PS_URL ? process.env.PS_URL : "https://ps.piper.finance"
}/v2/tokens/balance`;

const fetchUserBalances = async (
  wallet: string | undefined | null,
  flat: boolean
) => {
  let wallets = [""];

  if (!wallet) {
    wallets = JSON.parse(localStorage.getItem("userWallets") || "[]").map(
      (add: string) => `&wallet=${add}`
    );
  } else {
    wallets = [`&wallet=${wallet}`];
  }
  const chainList = Chains.map((chain) => `&chainId=${chain.id}`);
  const url = `${flat ? baseURLFlat : baseURL}?${chainList.join(
    ""
  )}${wallets.join("")} `;
  const { data, status } = await axios.get(url);
  return status === 200 ? data : [];
};

const useUserBalancesFlat = (wallet: string | undefined | null) => {
  return useQuery({
    queryKey: ["balances"],
    queryFn: () => fetchUserBalances(wallet, true),
    staleTime: 60000,
    refetchInterval: 60000,
  });
};
// NOTE - for swap page you kinda need a chain separated result
const useUserBalances = (wallet: string | undefined | null) => {
  return useQuery({
    queryKey: ["balances"],
    queryFn: () => fetchUserBalances(wallet, false),
    staleTime: 60000,
    refetchInterval: 60000,
  });
};

export { useUserBalances, fetchUserBalances, useUserBalancesFlat };
