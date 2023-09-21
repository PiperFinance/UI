import ConnectCEDE from '@components/ConnectCEDE';
import { Tab } from '@headlessui/react';
import useAddParams from '@hooks/useAddParams';
import useHasMounted from '@hooks/useHasMounted';
import useTooltip from '@hooks/useToolTip/useToolTip';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { vaults } from '@store/store';
import Container from '@ui/Container/Container';
import Flex from '@ui/Flex/Flex';
import { Skeleton, TableRowSkeleton } from '@ui/Skeleton';
import { classNames } from '@utils/classNames';
import { useAtom } from 'jotai';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useAccount } from 'wagmi';
import CexTokenBalance from './components/CexTokenBalance';
import CexTransactionHistory from './components/CexTransactionHistory';

const TokenBalance = dynamic(() => import('./components/TokenBalance'), {
  loading: () => (
    <Flex direction="column">
      <TableRowSkeleton />
      <TableRowSkeleton />
      <TableRowSkeleton />
    </Flex>
  ),
});

const PairTokenTable = dynamic(() => import('./components/PairBalance'), {
  loading: () => (
    <Flex direction="column">
      <TableRowSkeleton />
      <TableRowSkeleton />
      <TableRowSkeleton />
    </Flex>
  ),
});

const TransactionHistory = dynamic(
  () => import('./components/TransactionHistory'),
  {
    loading: () => (
      <Flex direction="column">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </Flex>
    ),
  }
);

const NFTList = dynamic(() => import('./components/NFTList'), {
  loading: () => (
    <Flex direction="column">
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Flex>
  ),
});

export default function Portfolio() {
  const [tab, setTab] = useState<number>();
  const [isUserConnected, setIsUserConnected] = useState<boolean>();
  const router = useRouter();
  const hasMounted = useHasMounted();
  const { isConnected } = useAccount();
  const addParams = useAddParams();
  const tabs: string[] = [
    'Overview',
    'Tokens',
    'Liquidities',
    'NFTs',
    'Transactions',
    'CEX Assets',
    'CEX Transactions',
  ];

  const [vault] = useAtom(vaults);

  useEffect(() => setIsUserConnected(isConnected), [isConnected]);

  useEffect(() => {
    tabs.find(
      (tab, index) => tab.toLowerCase() === router.query.tab && setTab(index)
    );
  }, [hasMounted, router]);

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    'The liquidity provided in DEXs',
    { placement: 'bottom' }
  );

  return (
    <Container customStyle="!p-0">
      {/* <TotalValue /> */}
      {/* <Flex
        direction="column"
        customStyle="rounded-2xl p-1 sm:p-5 h-fit !p-0"
      > */}
      <Tab.Group selectedIndex={tab} onChange={setTab}>
        <Tab.List className="flex items-start text-center text-sm font-medium text-gray-300  border-gray-700 border-b  px-7">
          <div className="space-x-4">
            {tooltipVisible && tooltip}
            {tabs.map((tab: string) => (
              <Tab
                ref={tab === 'Liquidities' ? targetRef : undefined}
                key={tab}
                onClick={() => addParams({ tab: tab.toLowerCase() })}
                className={({ selected }) =>
                  classNames(
                    'inline-block border-b-2  p-3 outline-none max-sm:text-xs max-sm:p-2',
                    selected
                      ? ' border-primary-400 text-primary-700  dark:text-primary-300'
                      : 'border-transparent'
                  )
                }
              >
                {tab}
              </Tab>
            ))}
          </div>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {!isUserConnected ? (
              <Flex
                customStyle="h-[30vh] text-gray-100"
                justifyContent="center"
                alignItems="center"
                width="full"
              >
                <ConnectButton />
              </Flex>
            ) : (
              <>
                <div className="pt-4 mx-7 my-3 p-3 rounded-2xl">
                  <h1 className="text-gray-50 font-bold text-xl mb-2">NFTs</h1>
                  <NFTList isRow={true} />
                </div>
                <div className="bg-gray-800 mx-7 my-3 p-5 rounded-2xl shadow-3xl ">
                  <h1 className="text-gray-50 font-bold text-xl mb-2">
                    Tokens
                  </h1>
                  <TokenBalance />
                </div>
                <div className="bg-gray-800 mx-7 my-3 p-5 rounded-2xl shadow-3xl">
                  <h1 className="text-gray-50 font-bold text-xl mb-2">Pairs</h1>
                  <PairTokenTable />
                </div>
              </>
            )}
          </Tab.Panel>
          <Tab.Panel>
            {!isUserConnected ? (
              <Flex
                customStyle="h-[30vh] text-gray-100"
                justifyContent="center"
                alignItems="center"
                width="full"
              >
                <ConnectButton />
              </Flex>
            ) : (
              <div className="bg-gray-800 mx-7 my-3 p-5 rounded-2xl shadow-3xl ">
                <TokenBalance />
              </div>
            )}
          </Tab.Panel>
          <Tab.Panel>
            {!isUserConnected ? (
              <Flex
                customStyle="h-[30vh] text-gray-100"
                justifyContent="center"
                alignItems="center"
                width="full"
              >
                <ConnectButton />
              </Flex>
            ) : (
              <div className="bg-gray-800 mx-7 my-3 p-5 rounded-2xl shadow-3xl ">
                <PairTokenTable />
              </div>
            )}
          </Tab.Panel>
          <Tab.Panel>
            {!isUserConnected ? (
              <Flex
                customStyle="h-[30vh] text-gray-100"
                justifyContent="center"
                alignItems="center"
                width="full"
              >
                <ConnectButton />
              </Flex>
            ) : (
              <div className="bg-gray-800 mx-7 my-3 p-5 rounded-2xl shadow-3xl ">
                <NFTList />
              </div>
            )}
          </Tab.Panel>
          <Tab.Panel>
            {!isUserConnected ? (
              <Flex
                customStyle="h-[30vh] text-gray-100"
                justifyContent="center"
                alignItems="center"
                width="full"
              >
                <ConnectButton />
              </Flex>
            ) : (
              <div className="bg-gray-800 mx-7 my-3 p-5 rounded-2xl shadow-3xl ">
                <TransactionHistory />
              </div>
            )}
          </Tab.Panel>
          <Tab.Panel>
            {!vault || !vault.id ? (
              <Flex
                customStyle="h-[30vh] text-gray-100"
                justifyContent="center"
                alignItems="center"
                width="full"
              >
                <ConnectCEDE />
              </Flex>
            ) : (
              <div className="bg-gray-800 mx-7 my-3 p-5 rounded-2xl shadow-3xl ">
                <CexTokenBalance />
              </div>
            )}
          </Tab.Panel>
          <Tab.Panel>
            {!vault || !vault.id ? (
              <Flex
                customStyle="h-[30vh] text-gray-100"
                justifyContent="center"
                alignItems="center"
                width="full"
              >
                <ConnectCEDE />
              </Flex>
            ) : (
              <div className="bg-gray-800 mx-7 my-3 p-5 rounded-2xl shadow-3xl ">
                <CexTransactionHistory />
              </div>
            )}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
      {/* </Flex> */}
    </Container>
  );
}
