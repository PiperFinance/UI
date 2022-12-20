import { newAllCustomChains } from "@constants/networkList";
import { useQuery } from "@tanstack/react-query";
export const baseURL = "https://piper.finance/api/";

const fetchUserBalances = async () => {
  const chainList = newAllCustomChains.map((chain) => `&chainId=${chain.id}`);
  const res = await fetch(
    `${baseURL}tokens/balance?wallet=0xB49F17514D6F340d7bcdFfC47526C9A3713697e0${chainList.join(
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
