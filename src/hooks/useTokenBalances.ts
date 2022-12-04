import { MultiCallABI } from "@constants/multiCallABI";
import { erc20ABI, useAccount, useContractReads } from "wagmi";
import { IToken } from "../store/store";

export default function useTokenBalances(tokenList: any): IToken[] {
  const { address } = useAccount();
  const { contracts, tokens } = createTokenContracts(address!, tokenList);

  const { data, isError, isLoading, error } = useContractReads({
    contracts,
    onSettled(data, error) {
      if (!error) return;
      else return data;
    },
  });

  return userBalances(tokens, data);
}

const userBalances = (tokenList: IToken[], balances: any): IToken[] => {
  if (!balances || !tokenList) return [];

  const tokens: any[] = [];
  balances.forEach(async (balance: any, index: number) => {
    if (!balance || Number(balance) <= 0) return;
    tokens.push({
      id: index,
      balance: String(balance),
      ...tokenList[index],
    });
  });
  return tokens;
};

export const allTokensInOrder = (tokenLists: any): IToken[] => {
  const result: IToken[] = [];

  Object.entries(tokenLists).forEach((tokenList: any) => {
    Object.values(tokenList[1]).forEach((token: any) => {
      result.push(token[0]);
    });
  });
  return result;
};

const createTokenContracts = (
  walletAddress: string,
  tokenList: any
): { tokens: IToken[]; contracts: any } => {
  return {
    tokens: allTokensInOrder(tokenList),
    contracts: allTokensInOrder(tokenList).map((token: IToken) => {
      if (
        token.address.toLowerCase() ===
        "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLowerCase()
      ) {
        return {
          address: "0xca11bde05977b3631167028862be2a173976ca11",
          abi: MultiCallABI,
          functionName: "getEthBalance",
          args: [walletAddress],
          chainId: token.chainId,
        };
      }
      return {
        address: token.address,
        abi: erc20ABI,
        functionName: "balanceOf",
        args: [walletAddress],
        chainId: token.chainId,
      };
    }),
  };
};
