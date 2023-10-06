import RootLayout from '@components/layout/layout';
import { allTokens, balancesList, updateTokenListAtom } from '@store/store';
import { useUserBalancesFlat } from '@views/Portfolio/hooks/useUserBalances';
import { useAtom, useAtomValue } from 'jotai';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import { useAccount } from 'wagmi';

const Swap = dynamic(() => import('@views/Swap'));

export default function SwapPage() {
  const [, setTokens] = useAtom(allTokens);
  const [balances, setBalances] = useAtom(balancesList);
  const { address } = useAccount();
  const { data } = useUserBalancesFlat(address ? String(address) : '');
  const tokensList = useAtomValue(updateTokenListAtom);
  useEffect(() => {
    setBalances(data);
    if (!balances) return;
    setTokens(tokensList);
  }, [balances, data]);

  return (
    <RootLayout pageName="Swap">
      <Swap />
    </RootLayout>
  );
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
