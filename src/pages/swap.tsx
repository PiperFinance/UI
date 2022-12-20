import { fetchUserBalances, useUserBalances } from "@hooks/useUserBalances";
import { allTokens, balancesList, updateTokenListAtom } from "@store/store";
import { dehydrate, QueryClient } from "@tanstack/query-core";
import { useAtom, useAtomValue } from "jotai";
import dynamic from "next/dynamic";

const Swap = dynamic(() => import("@views/Swap"));

export default function SwapPage() {
  const [, setTokens] = useAtom(allTokens);
  const [, setBalances] = useAtom(balancesList);
  const { data } = useUserBalances();
  const { tokensList } = useAtomValue(updateTokenListAtom);
  setBalances(data);
  setTokens(tokensList);
  return <Swap />;
}

// export async function getServerSideProps() {
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
