import { CoinGeckoIds } from "@constants/coingeckoIds";
import { useQuery } from "@tanstack/react-query";
import CoinGecko from "coingecko-api";

const coinGeckoClient = new CoinGecko();

const useCoingecko = (tokenSymbol: string) => {
  const tokenId = CoinGeckoIds.find(
    (tokenDetail) =>
      tokenSymbol.toLowerCase() === tokenDetail.symbol.toLowerCase()
  );
  const { data, status } = useQuery(["tokenPrice", tokenId], async () => {
    const { data } = await coinGeckoClient.simple.price({
      ids: [tokenId?.id!],
      vs_currencies: ["usd"],
    });
    return data[tokenId?.id!].usd || 0;
  });
  return { data, status };
};

export { useCoingecko };
