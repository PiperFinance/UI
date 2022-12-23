import CoinGecko from 'coingecko-api';
import { CoinGeckoIds } from '@constants/coingeckoIds';

const CoinGeckoClient = new CoinGecko();

export const getTokenPrice = async (_tokenSymbol: string) => {
  try {
    const tokenId = CoinGeckoIds.find((tokenDetail) => _tokenSymbol.toLowerCase() === tokenDetail.symbol.toLowerCase());
    const tokenPrice = await CoinGeckoClient.simple.price({
      ids: [tokenId?.id!],
      vs_currencies: ['usd'],
    });

    return tokenPrice.data[tokenId?.id!].usd || 0;
  } catch (error) {
    console.error({ errorOnGetTokenPrice: error });
    return null;
  }
};
