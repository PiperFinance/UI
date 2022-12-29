import { CoinGeckoIds } from "@constants/coingeckoIds";
import { useQuery } from "@tanstack/react-query";
import CoinGecko from "coingecko-api";

const coinGeckoClient = new CoinGecko();

const useCoingecko = (tokenSymbol: string) => {
  const tokenId: any = CoinGeckoIds.find(
    (tokenDetail) =>
      tokenSymbol.toLowerCase() === tokenDetail.symbol.toLowerCase()
  );
  const { data, status } = useQuery({
    queryKey: ["tokenPrice", tokenId],
    queryFn: async () => {
      const { data } = await coinGeckoClient.simple.price({
        ids: [tokenId?.id!],
        vs_currencies: ["usd"],
      });
      return data[tokenId?.id!].usd || 0;
    },
    enabled: Boolean(tokenSymbol),
    placeholderData: 0,
    staleTime: 30000,
    refetchInterval: 30000,
  });
  return { data, status };
};

export { useCoingecko };
