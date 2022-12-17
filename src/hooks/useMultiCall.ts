// import { MultiCallABI } from "@constants/multiCallABI";
// import { IToken, sortedAllTokens, tokenList } from "@store/store";
// import { useAtom } from "jotai";
// import { erc20ABI, useAccount, useContractReads } from "wagmi";

export default function useMultiCall() {
  // const [allTokens] = useAtom(tokenList);
  // const [sorted, setSorted] = useAtom(sortedAllTokens);
  // const { address } = useAccount();
  // const { contracts, tokens } = tokenContracts(allTokens, address!);
  // const { data, isError, isLoading, error } = useContractReads({
  //   contracts,
  //   onSettled(data, error) {
  //     if (error) return "0";
  //     else return data;
  //   },
  // });
  // if (!data) return;
  // const acceptedBalances: IToken[] = [];
  // data?.forEach((balance, index: number) => {
  //   acceptedBalances.push({
  //     balance: String(balance),
  //     ...tokens[index]!,
  //   });
  // });

  // return acceptedBalances
}

// const tokenContracts = (tokenList: IToken[], walletAddress: string) => {
//   return {
//     tokens: tokenList,
//     contracts: tokenList.map((token) => {
//       return {
//         address:
//           token.address.toLowerCase() ===
//           "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLowerCase()
//             ? "0xca11bde05977b3631167028862be2a173976ca11"
//             : token.address,
//         abi:
//           token.address.toLowerCase() ===
//           "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLowerCase()
//             ? MultiCallABI
//             : erc20ABI,
//         functionName:
//           token.address.toLowerCase() ===
//           "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLowerCase()
//             ? "getEthBalance"
//             : "balanceOf",
//         args: [walletAddress],
//         chainId: token.chainId,
//         watch: true,
//       };
//     }),
//   };
// };
