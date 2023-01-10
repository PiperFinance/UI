import TotalValue from '@components/TotalValue';
import { Tab } from '@headlessui/react';
import useAddParams from '@hooks/useAddParams';
import useHasMounted from '@hooks/useHasMounted';
import Container from '@ui/Container/Container';
import Flex from '@ui/Flex/Flex';
import { Skeleton, TableRowSkeleton } from '@ui/Skeleton';
import { classNames } from '@utils/classNames';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

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
  const router = useRouter();
  const hasMounted = useHasMounted();
  const addParams = useAddParams();
  const tabs: string[] = ['Tokens', 'Liquidities', 'NFTs', 'Transactions'];

  useEffect(() => {
    tabs.find(
      (tab, index) => tab.toLowerCase() === router.query.tab && setTab(index)
    );
  }, [hasMounted, router]);

  return (
    <Container>
      {/* <TotalValue /> */}
      <Flex direction="column" customStyle="bg-gray-122 rounded-2xl p-1 sm:p-5 h-fit">
        <Tab.Group selectedIndex={tab} onChange={setTab}>
          <Tab.List className="flex-col lg:flex-row flex justify-between text-center text-sm font-medium text-gray-500  dark:border-gray-700 dark:text-gray-400 ">
            <h1 className="my-3 text-2xl font-semibold text-gray-100">
              Assets
            </h1>
            <div className="max-sm:space-x-1 space-x-4">
              {tabs.map((tab: string) => (
                <Tab
                  key={tab}
                  onClick={() => addParams({ tab: tab.toLowerCase() })}
                  className={({ selected }) =>
                    classNames(
                      'inline-block rounded-xl p-3 outline-none max-sm:text-xs max-sm:p-2',
                      selected
                        ? 'border border-primary-400 text-blue-700 dark:bg-gray-800 dark:text-blue-300'
                        : 'hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300'
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
              <TokenBalance />
            </Tab.Panel>
            <Tab.Panel>
              <PairTokenTable />
            </Tab.Panel>
            <Tab.Panel>
              <NFTList />
            </Tab.Panel>
            <Tab.Panel>
              <TransactionHistory />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </Flex>
    </Container>
  );
}
