import { newAllCustomChains } from "@constants/networkList";
import { useQuery } from "@tanstack/react-query";
export const baseURL = "https://ps.piper.finance/tokens/balance";

const fetchUserBalances = async () => {
  const chainList = newAllCustomChains.map((chain) => `&chainId=${chain.id}`);
  const res = await fetch(
    `${baseURL}?wallet=0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82${chainList.join(
      ""
    )}`
  );
  return res.ok ? res.json() : [];
};

const useUserBalances = () => {
  return useQuery({
    queryKey: ["userBalances"],
    queryFn: () => fetchUserBalances(),
  });
};

export { useUserBalances, fetchUserBalances };
