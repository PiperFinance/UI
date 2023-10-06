import { Chains } from '@constants/networkList';
import { useQuery } from '@tanstack/react-query';
import { sortData } from '@utils/customSort';
import axios from 'axios';

export const baseURL = process.env.TH_URL
  ? process.env.TH_URL
  : 'https://th.piper.finance';

const getTransactions = async (
  wallet: string | undefined,
  pageSize: number,
  pageNumber: number
) => {
  const chainList = Chains.map((chain) => `&chainId=${chain.id}`);
  const { data, status } = await axios.get(
    `${baseURL}/get_users_trxs?userAddress=${wallet}${chainList.join(
      ''
    )}&pageSize=${pageSize}&pageNumber=${pageNumber}`
  );
  return status === 200 ? sortData(data.result.trxs, 'timeStamp') : [];
};

const useTransactions = (
  wallet: string | undefined,
  // saveSucceeded: boolean,
  pageSize = 10,
  pageNumber = 1
) => {
  return useQuery({
    queryKey: ['userTXs', wallet, pageSize, pageNumber],
    queryFn: () => getTransactions(wallet, pageSize, pageNumber),
    // enabled: saveSucceeded,
    staleTime: 60000,
    refetchInterval: 60000,
    // onSuccess() {
    //   handleSaveTransactions(wallet);
    // },
  });
};

export { getTransactions, useTransactions };

