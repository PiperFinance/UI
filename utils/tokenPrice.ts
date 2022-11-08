import { CoinGeckoIds } from '@constants/coingeckoIds';

export const getTokenPrice = async () => {
  // const CoinGeckoClient = new CoinGecko();
  // CoinGeckoClient.coins.fetch(CoinGeckoIds[tokenSymbol]).then((data) => console.log(data))
  // const tokenId = CoinGeckoIds[tokenSymbol.toLowerCase()];
  // if (!tokenId) {
  //   return null;
  // } else {
  //   try {
  //     const fetchRes = await fetch(
  //       `https://api.coingecko.com/api/v3/simple/price?ids=${tokenId}&vs_currencies=usd`,
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         return data;
  //       });
  //     const price = fetchRes[tokenId].usd;
  //     return price || 1;
  //   } catch (error) {
  //     console.error({ errorOnGetTokenPrice: error });
  //     return null;
  //   }
  // }
  // console.log(cmcPrices(tokenSymbol).then((data) => { return data }));
  // formattedData:
  // exchangeAddress: "0x1f98431c8ad98523631ae4a59f267346ea31f984"
  // exchangeName: "Uniswap v3"
  // formattedNative: "0.005269 ETH"
  // formattedUsd: "$9.09"
  // nativePrice:
  // decimals: 18
  // name: "Ether"
  // symbol: "ETH"
  // value: "5268878710433216"
  // [[Prototype]]: Object
  // usdPrice: 9.093794575981569
};
