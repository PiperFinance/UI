import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

export const baseURL = 'https://ua.piper.finance';

const importWallet = async (addresses: string[]) => {
  // const addresses = addresses.map((chain) => `&chainId=${chain.id}`);


  const { data, status } = await axios.post(`${baseURL}/user/address`, {
    addresses,
  });
  return status === 200 ? data : [];
};

const useImportWallet = () => {
  return useMutation({
    mutationFn: (addresses: string[]) => importWallet(addresses),
    retry: 10,
  });
};

export { importWallet, useImportWallet };

