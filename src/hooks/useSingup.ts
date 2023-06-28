import { useMutation } from "@tanstack/react-query";
import {
  generateRandomEmail,
  generateRandomPassword,
} from "@utils/generateEmail";
import axios from "axios";

export const baseURL = process.env.UA_URL
  ? process.env.UA_URL
  : "https://ua.piper.finance";

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

  localStorage.setItem("userWallets", JSON.stringify([params.wallet]));

  return status === 200 ? data : [];
};

const useSingUp = () => {
  return useMutation({
    mutationFn: (data: { wallet: string | undefined; signedMsg: string }) =>
      handleSingUp(data),
    retry: 10,
    onSuccess: (data) => {
      localStorage.setItem("accessToken", data.accessToken);
      localStorage.setItem("refreshToken", data.refreshToken);
    },
  });
};

export { useSingUp, handleSingUp };
