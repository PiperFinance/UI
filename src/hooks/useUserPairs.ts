import { newAllCustomChains } from "@constants/networkList";
import { useQuery } from "@tanstack/react-query";
export const baseURL = "https://ps.piper.finance/pairs/balance";

const fetchUserPairBalances = async () => {
  const chainList = newAllCustomChains.map((chain) => `&chainId=${chain.id}`);
  const res = await fetch(
    `${baseURL}?wallet=0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82${chainList.join(
      ""
    )}`
  );
  return res.ok ? res.json() : [];
};

const useUserPairBalances = () => {
  return useQuery({
    queryKey: ["userPairBalances"],
    queryFn: () => fetchUserPairBalances(),
  });
};

export { useUserPairBalances, fetchUserPairBalances };
