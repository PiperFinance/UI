import { MultiCallABI } from '@constants/multiCallABI';
import { allTokensInOrder } from '@constants/tokenList';
import { convertToString, formatNumber } from '@utils/bignumber';
import { getTokenPrice } from '@utils/coingecko';
import { useState } from 'react';
import { useContractReads, erc20ABI, useAccount } from 'wagmi';

const tokenContracts = (walletAddress: string) => {
  return {
    tokens: allTokensInOrder,
    contracts: allTokensInOrder.map((token) => {
      if (
        token.address.toLowerCase() ===
        '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'.toLowerCase()
      ) {
        return {
          address: '0xca11bde05977b3631167028862be2a173976ca11',
          abi: MultiCallABI,
          functionName: 'getEthBalance',
          args: [walletAddress],
          chainId: token.chain_id,
        };
      }
      return {
        address: token.address,
        abi: erc20ABI,
        functionName: 'balanceOf',
        args: [walletAddress],
        chainId: token.chain_id,
      };
    }),
  };
};

function ERC20Balance() {
  const [totalValue, setTotalValue] = useState(0);
  const { address } = useAccount();
  const { contracts, tokens } = tokenContracts(address!);
  // console.log({ contracts, tokens, address });

  // const updatePrice = async (assets: any) => {
  //   let sum = 0;
  //   const assetValues = [];
  //   for (let i = 0; i < assets.length; i++) {
  //     const asset = assets[i];
  //     if (!asset.price) {
  //       // const assetPrice = 10;

  //       const assetPrice = await getTokenPrice(asset.symbol);
  //       // if (assetPrice) {
  //       //   const assetValue =
  //       //     parseFloat(assetPrice) *
  //       //     parseFloat(String(asset.balance / 10 ** asset.decimals));
  //       //   assetValues.push(assetValue);
  //       //   asset.price = assetPrice;
  //       //   sum += assetValue;
  //       // }
  //     }
  //   }
  //   return { sum, assets };
  // };
  console.log({ allTokensInOrder, contracts });

  const { data, isError, isLoading, error } = useContractReads({
    contracts , onSettled(data, error) {
      console.log({data, error});
      if (!error) return;
      else return data;
    },onError(err) {
      console.log({err});
    },
  });

  // console.log({ isLoading, data, isError, error });
  const resBalances: any[] = [];
  const _resBalances: any[] = [];
  if (data)
    data.map((balance, index: number) => {
      const convertedBalance = String(balance);
      const token = tokens[index];
      resBalances.push({
        balance: convertedBalance,
        chainId: token.chain_id,
        ...token,
      });
    });

  if (resBalances.length !== 0) {
    resBalances.map((fullToken) =>
      fullToken.balance && Number(fullToken.balance) > 0
        ? _resBalances.push(fullToken)
        : fullToken
    );

    console.log({ _resBalances, data , contracts, tokens });
  }

  return (
    <div style={{ width: '65vw', padding: '15px' }}>
      <h1>💰 Token Balances</h1>
      <h2>➕ Total : ${totalValue}</h2>
    </div>
  );
}
export default ERC20Balance;
