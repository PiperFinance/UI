import { CoinGeckoIds } from '@constants/coingeckoIds';
import { useQuery } from '@tanstack/react-query';
import CoinGecko from 'coingecko-api';

const coinGeckoClient = new CoinGecko();

const useCoingecko = (tokenSymbol: string) => {
  const tokenId: any = CoinGeckoIds.find(
    (tokenDetail) =>
      tokenSymbol.toLowerCase() === tokenDetail.symbol.toLowerCase()
  );
  const { data, status } = useQuery({
    queryKey: ['tokenPrice', tokenId],
    queryFn: async () => {
      const { data } = await coinGeckoClient.simple.price({
        ids: [tokenId?.id!],
        vs_currencies: ['usd'],
      });
      return data[tokenId?.id!].usd || 0;
    },
    enabled: Boolean(tokenSymbol),
    placeholderData: 0,
    staleTime: 60 * 1000,
    refetchInterval: 90 * 1000,
  });
  return { data, status };
};

const useCoingeckoChart = (tokenSymbol: string, days: string = '30') => {
  const tokenId: any = CoinGeckoIds.find(
    (tokenDetail) =>
      tokenSymbol.toLowerCase() === tokenDetail.symbol.toLowerCase()
  );

  const { data, status } = useQuery({
    queryKey: ['tokenChart', tokenId, days],
    queryFn: async () => {
      const { data } = (await coinGeckoClient.coins.fetchMarketChart(
        tokenId?.id!,
        {
          vs_currency: 'usd',
          days,
        }
      )) as any;
      return data;
    },
    enabled: Boolean(tokenSymbol),
    placeholderData: 0,
    staleTime: 60 * 1000,
    refetchInterval: 60 * 1000,
  });
  return { data, status };
};

export { useCoingecko, useCoingeckoChart };
