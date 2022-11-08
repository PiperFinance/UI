import { MultiCallABI } from '@constants/multiCallABI';
import { allTokensInOrder } from '@constants/tokenList';
import { useState } from 'react';
import { useContractReads, erc20ABI, useAccount } from 'wagmi';
import { db } from '../../pages/db';

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
  const { data, isError, isLoading, error } = useContractReads({
    contracts,
    onSettled(data, error) {
      if (!error) return;
      else return data;
    },
    onError(err) {
      console.log({ err });
    },
    staleTime: 10_000,
  });

  console.log(data);

  const userBalances = () => {
    if (!data) return;

    const acceptedBalances: any[] = [];
    data.forEach(async (balance, index: number) => {
      if (!balance || Number(balance) <= 0) return;
      acceptedBalances.push({
        id: index,
        balance: String(balance),
        ...tokens[index],
      });
    });

    try {
      db.balances.bulkPut(acceptedBalances).then((lastKey) => {});
    } catch (error) {
      console.log(error);
    }
  };

  userBalances();

  return <></>;
}
export default ERC20Balance;
