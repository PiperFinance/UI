import { Tab } from "@headlessui/react";
import Container from "@ui/Container/Container";
import Flex from "@ui/Flex/Flex";
import { classNames } from "@utils/classNames";
import RootLayout from "../components/layout/layout";
import List from "../components/List/List";
import Table from "../components/Table/Table";

export default function Dashboard() {
  const balances = [
    {
      id: 1,
      name: "Poland",
      language: "Polish",
      capital: "Warsaw",
    },
    {
      id: 2,
      name: "Bulgaria",
      language: "Bulgarian",
      capital: "Sofia",
    },
    {
      id: 3,
      name: "Hungary",
      language: "Hungarian",
      capital: "Budapest",
    },
    {
      id: 4,
      name: "Moldova",
      language: "Moldovan",
      capital: "Chișinău",
    },
    {
      id: 5,
      name: "Austria",
      language: "German",
      capital: "Vienna",
    },
    {
      id: 6,
      name: "Lithuania",
      language: "Lithuanian",
      capital: "Vilnius",
    },
    {
      id: 7,
      name: "Lithuania",
      language: "Lithuanian",
      capital: "Vilnius",
    },
    {
      id: 8,
      name: "Lithuania",
      language: "Lithuanian",
      capital: "Vilnius",
    },
    {
      id: 9,
      name: "Lithuania",
      language: "Lithuanian",
      capital: "Vilnius",
    },
    {
      id: 10,
      name: "Lithuania",
      language: "Lithuanian",
      capital: "Vilnius",
    },
    {
      id: 11,
      name: "Lithuania",
      language: "Lithuanian",
      capital: "Vilnius",
    },
  ];

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

  const tabs: string[] = ["Tokens", "NFTs", "Liquidities", "Transactions"];

  return (
    <RootLayout pageName="Portfolio">
      <Container>
        <Flex
          direction="flex-col"
          customStyle="bg-gray-800 rounded-2xl p-5"
        >
          <Tab.Group>
            <Tab.List className="flex justify-between text-center text-sm font-medium text-gray-500  dark:border-gray-700 dark:text-gray-400 ">
              <h1 className="my-3 text-2xl font-semibold text-gray-100">
                Assets
              </h1>
              <div className="space-x-4">
                {tabs.map((tab: string) => (
                  <Tab
                    key={tab}
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
                <Table data={balances} rowsPerPage={5} />
              </Tab.Panel>
              <Tab.Panel>
                <Table data={nfts} rowsPerPage={5} />
              </Tab.Panel>
              <Tab.Panel>
                <Table data={balances} rowsPerPage={5} />
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