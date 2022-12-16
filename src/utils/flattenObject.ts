import { IUserBalance, IToken } from "@store/store";


export function flattenObject(balances: IUserBalance[]): IToken[] {
  let flatData: IToken[] = [];

  balances.map((balance: IUserBalance) => {
    flatData.push({
      address: balance.token.address,
      symbol: balance.token.symbol,
      decimals: balance.token.decimals,
      name: balance.token.name,
      chainId: balance.token.chainId,
      logoURI: balance.token.logoURI,
      coingeckoId: balance.token.coingeckoId,
      balance: balance.balance,
      value: balance.value,
    });
  });
  
  return flatData;
}
