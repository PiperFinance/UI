import CoinGecko from 'coingecko-api';
import { CoinGeckoIds } from '@constants/coingeckoIds';

const CoinGeckoClient = new CoinGecko();

export const getTokenPrice = async (_coingeckoID: string) => {
  try {
    const tokenId =
      CoinGeckoIds[_coingeckoID.toLowerCase() as keyof typeof CoinGeckoIds];

    const tokenPrice = await CoinGeckoClient.simple.price({
      ids: [tokenId],
      vs_currencies: ['usd'],
    });

    return tokenPrice.data[_coingeckoID].usd || 1;
  } catch (error) {
    console.error({ errorOnGetTokenPrice: error });
    return null;
  }
};
