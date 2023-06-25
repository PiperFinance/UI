import { useMutation } from '@tanstack/react-query';
import {
  generateRandomEmail,
  generateRandomPassword,
} from '@utils/generateEmail';
import axios from 'axios';

export const baseURL = 'https://ua.piper.finance';

const handleSingUp = async (params: {
  wallet: string | undefined;
  signedMsg: string;
}) => {
  const email = generateRandomEmail();
  const password = generateRandomPassword();

  const { data, status } = await axios.post(`${baseURL}/SignUpSignIn`, {
    address: {
      hash: params.wallet,
      chain: 1,
    },
    email: email,
    password: password,
    signedMsg: params.signedMsg,
  });

  return status === 200 ? data : [];
};

const useSingUp = () => {
  return useMutation({
    mutationFn: (data: { wallet: string | undefined; signedMsg: string }) =>
      handleSingUp(data),
    retry: 10,
    onSuccess: (data) => {
      sessionStorage.setItem('userToken', JSON.stringify(data));
    },
  });
};

export { useSingUp, handleSingUp };
