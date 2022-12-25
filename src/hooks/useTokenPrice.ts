import { useQuery } from "@tanstack/react-query";
import axios from "axios";
export const baseURL = "https://tp.piper.finance/";

const fetchTokenPrice = async (chainId: number, tokenId: string) => {
  const { data } = await axios.get(
    `${baseURL}?chainId=${chainId}&tokenId=${tokenId}`
  );
  return data.result;
};

const useTokenPrice = (chainId: number, tokenId: string) => {
  const { data, status } = useQuery({
    queryKey: ["tokenPrice", tokenId, chainId],
    queryFn: () => fetchTokenPrice(chainId, tokenId),
  });

  return { data, status };
};

export { useTokenPrice, fetchTokenPrice };
