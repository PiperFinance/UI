import { Chains } from '@constants/networkList';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const baseURL = 'https://test_ps.piper.finance/tokens/allowance';

const fetchUserAllowanceList = async (wallet: string | undefined) => {
  if (!wallet) return;
  const chainList = Chains.map((chain) => `&chainId=${chain.id}`);
  const contracts = ['0xdbf497b3d74e7812e81f87614316a90c3a1806f7'].map((spender) => `&spenders=${spender}`);
  const { data, status } = await axios.get(
    `${baseURL}?wallet=${wallet}${chainList.join('')}${contracts.join('')}`
  );
  return status === 200 ? data : [];
};

const useUserAllowanceList = (wallet: string | undefined) => {
  return useQuery({
    queryKey: ['allowance', wallet],
    queryFn: () => fetchUserAllowanceList(wallet),
    staleTime: 60000,
    refetchInterval: 60000,
  });
};

export { useUserAllowanceList, fetchUserAllowanceList };
