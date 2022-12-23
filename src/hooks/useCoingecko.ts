import { CoinGeckoIds } from "@constants/coingeckoIds";
import { useQuery } from "@tanstack/react-query";
import CoinGecko from "coingecko-api";

const CoinGeckoClient = new CoinGecko();

const fetchTokenPriceCoingecko = (tokenSymbol: string) => {
  const tokenId = CoinGeckoIds.find(
    (tokenDetail) =>
      tokenSymbol.toLowerCase() === tokenDetail.symbol.toLowerCase()
  );
  const res = CoinGeckoClient.simple
    .price({
      ids: [tokenId?.id!],
      vs_currencies: ["usd"],
    })
    .then((res) => res);
  return res;
};

const useCoingecko = (tokenSymbol: string) => {
  return useQuery({
    queryKey: ["coingecko"],
    queryFn: () => fetchTokenPriceCoingecko(tokenSymbol),
  });
};

export { useCoingecko, fetchTokenPriceCoingecko };
