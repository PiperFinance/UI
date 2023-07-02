import { Chains } from '@constants/networkList';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const baseURLFlat = `${
  process.env.PS_URL ? process.env.PS_URL : 'https://ps.piper.finance'
}/v2/tokens/balance/flat`;

export const baseURL = `${
  process.env.PS_URL ? process.env.PS_URL : 'https://ps.piper.finance'
}/v2/tokens/balance`;

const fetchUserBalances = async (wallet: string, flat: boolean) => {
  const addresses = [
    ...JSON.parse(localStorage.getItem('userWallets') || '[]'),
    wallet,
  ].map((add: string) => `&wallet=${add}`);
  // const addresses = wallets.map((wallet) => `&wallet=${wallet}`);
  const chainList = Chains.map((chain) => `&chainId=${chain.id}`);
  const url = `${flat ? baseURLFlat : baseURL}?${chainList.join(
    ''
  )}${addresses.join('')} `;
  const { data, status } = await axios.get(url);
  return status === 200 ? data : [];
};

const useUserBalancesFlat = (wallet: string) => {
  return useQuery({
    queryKey: ['balances'],
    queryFn: () => fetchUserBalances(wallet, true),
    staleTime: 60000,
    refetchInterval: 60000,
  });
};

export { fetchUserBalances, useUserBalancesFlat };
