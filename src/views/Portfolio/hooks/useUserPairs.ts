import { newAllCustomChains } from "@constants/networkList";
import { useQuery } from "@tanstack/react-query";
export const baseURL = "https://ps.piper.finance/pairs/balance";

const fetchUserPairBalances = async (wallet: string | undefined) => {
  if (!wallet) return;
  const chainList = newAllCustomChains.map((chain) => `&chainId=${chain.id}`);
  const res = await fetch(`${baseURL}?wallet=0xbdDB01D0113401a07fFb18da356DE256386a9000${chainList.join("")}`);
  return res.ok ? res.json() : [];
};

const useUserPairBalances = (wallet: string | undefined) => {
  return useQuery({
    queryKey: ["userPairBalances"],
    queryFn: () => fetchUserPairBalances(wallet),
  });
};

export { useUserPairBalances, fetchUserPairBalances };

// 0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82
