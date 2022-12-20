import { fetchUserBalances, useUserBalances } from "@hooks/useUserBalances";
import { balancesList } from "@store/store";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import dynamic from "next/dynamic";

const Portfolio = dynamic(() => import("@views/Portfolio"));

export default function Home() {
  return <Portfolio />;
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
