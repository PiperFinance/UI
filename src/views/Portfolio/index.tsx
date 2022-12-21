import RootLayout from "@components/layout/layout";
import List from "@components/List/List";
import { Tab } from "@headlessui/react";
import useHasMounted from "@hooks/useHasMounted";
import Container from "@ui/Container/Container";
import Flex from "@ui/Flex/Flex";
import { classNames } from "@utils/classNames";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PairTokenTable from "./components/PairTokenTable";
import TokenTable from "./components/TokenTable";

export default function Portfolio() {
  const [tab, setTab] = useState<number>();
  const router = useRouter();
  const hasMounted = useHasMounted();

  const tabs: string[] = [
    "Tokens",
    "Liquidities",
    "NFTs",
    "Transactions",
  ];

  useEffect(() => {
    tabs.find(
      (tab, index) => tab.toLowerCase() === router.query.tab && setTab(index)
    );
  }, [hasMounted, router]);

  const nfts = [
    {
      id: 1,
      name: "Poland NFT",
      language: "Polish",
      capital: "Warsaw",
    },
    {
      id: 2,
      name: "Bulgaria NFT",
      language: "Bulgarian",
      capital: "Sofia",
    },
    {
      id: 3,
      name: "Hungary NFT",
      language: "Hungarian",
      capital: "Budapest",
    },
    {
      id: 4,
      name: "Moldova NFT",
      language: "Moldovan",
      capital: "Chișinău",
    },
    {
      id: 5,
      name: "Austria NFT",
      language: "German",
      capital: "Vienna",
    },
    {
      id: 6,
      name: "Lithuania NFT",
      language: "Lithuanian",
      capital: "Vilnius",
    },
  ];

  return (
    <RootLayout pageName="Portfolio">
      <Container>
        <Flex
          direction="column"
          customStyle="bg-gray-122 rounded-2xl p-5 h-fit"
        >
          <Tab.Group selectedIndex={tab} onChange={setTab}>
            <Tab.List className="flex justify-between text-center text-sm font-medium text-gray-500  dark:border-gray-700 dark:text-gray-400 ">
              <h1 className="my-3 text-2xl font-semibold text-gray-100">
                Assets
              </h1>
              <div className="space-x-4">
                {tabs.map((tab: string) => (
                  <Tab
                    key={tab}
                    onClick={() => router.push(`?tab=${tab.toLowerCase()}`)}
                    className={({ selected }) =>
                      classNames(
                        "inline-block rounded-xl p-3 outline-none",
                        selected
                          ? "border border-primary-400 text-blue-700 dark:bg-gray-800 dark:text-blue-300"
                          : "hover:bg-gray-50 hover:text-gray-600 dark:hover:bg-gray-800 dark:hover:text-gray-300"
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
                <TokenTable />
              </Tab.Panel>
              <Tab.Panel>
                <PairTokenTable />
              </Tab.Panel>
              <Tab.Panel>
                {/* <Table data={balances} rowsPerPage={5} /> */}
                <TokenTable />
              </Tab.Panel>
              <Tab.Panel>
                <List />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </Flex>
      </Container>
    </RootLayout>
  );
}
