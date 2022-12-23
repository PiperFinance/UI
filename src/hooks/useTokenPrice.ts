import { newAllCustomChains } from "@constants/networkList";
import { useQuery } from "@tanstack/react-query";
export const baseURL = "https://tp.piper.finance/";

const fetchTokenPrice = async (chainId:number, tokenId:number) => {
  const res = await fetch(
    `${baseURL}?chainId=${chainId}&tokenId=${tokenId}`
  );
  return res.ok ? res.json() : [];
};

const useTokenPrice = (chainId:number, tokenId:number) => {
  return useQuery({
    queryKey: ["tokenPrise"],
    queryFn: () => fetchTokenPrice(chainId, tokenId),
  });
};

export { useTokenPrice, fetchTokenPrice };
