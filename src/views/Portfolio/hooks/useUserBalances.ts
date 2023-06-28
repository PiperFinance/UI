import { Chains } from "@constants/networkList";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// export const baseURL = `${
//   process.env.PS_URL ? process.env.PS_URL : "https://ps.piper.finance"
// }/v2/tokens/balance/flat`;

const fetchUserBalances = async (wallet: string | undefined | null) => {
  let wallets = [];

  if (!wallet) {
    wallets = JSON.parse(localStorage.getItem("userWallets") || "[]").map(
      (add: string) => `&wallet=${add}`
    );
  } else {
    wallets = [wallet];
  }

  const chainList = Chains.map((chain) => `&chainId=${chain.id}`);
  const { data, status } = await axios.get(
    `https://ps.piper.finance/v2/tokens/balance/flat?${chainList.join(
      ""
    )}${wallets.join("")} `
  );
  return status === 200 ? data : [];
};

const useUserBalances = (wallet: string | undefined | null) => {
  return useQuery({
    queryKey: ["balances"],
    queryFn: () => fetchUserBalances(wallet),
    staleTime: 60000,
    refetchInterval: 60000,
  });
};

export { useUserBalances, fetchUserBalances };
