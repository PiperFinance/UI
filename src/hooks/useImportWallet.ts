import { useMutation, useQueryClient } from '@tanstack/react-query';
import { axiosWithJWT } from '../axios-interceptor';

export const baseURL = process.env.UA_URL
  ? process.env.UA_URL
  : 'https://ua.piper.finance';

const importWallet = async (req: string) => {
  await axiosWithJWT.post(`${baseURL}/user/address`, {
    addresses: [{ Hash: req }],
  });
  const { data, status } = await axiosWithJWT.get(
    `${baseURL}/user/address`,
    {}
  );
  const wallets: string[] = data.addresses.map((addObj: any) => addObj.Hash);
  localStorage.setItem('userWallets', JSON.stringify(wallets));
  return status === 200 ? data : [];
};

const useImportWallet = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (req: string) => importWallet(req),
    retry: 5,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['balances'] });
    },
  });
};

const useImportedWallets = () => {
  const importedWallets: string[] = JSON.parse(
    localStorage.getItem('userWallets') || '[]'
  );
  return { importedWallets };
};

export { importWallet, useImportWallet, useImportedWallets };
