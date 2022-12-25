import { allTokens, balancesList, updateTokenListAtom } from "@store/store";
import { useUserBalances } from "@views/Portfolio/hooks/useUserBalances";
import { useAtom, useAtomValue } from "jotai";
import dynamic from "next/dynamic";
import { useAccount } from "wagmi";

const Swap = dynamic(() => import("@views/Swap"));

export default function SwapPage() {
  const [, setTokens] = useAtom(allTokens);
  const [, setBalances] = useAtom(balancesList);
  const { address } = useAccount();
  const { data } = useUserBalances(address ? String(address) : undefined);
  const { tokensList } = useAtomValue(updateTokenListAtom);
  setBalances(data);
  setTokens(tokensList);
  return <Swap />;
}

// export async function getStaticProps() {
//   const queryClient = new QueryClient();

//   await queryClient.prefetchQuery({
//     queryKey: ["userBalances"],
//     queryFn: () => fetchUserBalances(),
//   });

//   return {
//     props: {
//       balances: dehydrate(queryClient),
//     },
//   };
// }
