import RootLayout from "@components/layout/layout";
import { newAllCustomChains } from "@constants/networkList";
import { Tab } from "@headlessui/react";
import useAddParams from "@hooks/useAddParams";
import useHasMounted from "@hooks/useHasMounted";
import { useSaveTransactions } from "@hooks/useTransactionHistory";
import Container from "@ui/Container/Container";
import Flex from "@ui/Flex/Flex";
import { classNames } from "@utils/classNames";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount } from "wagmi";
import NFTList from "./components/NFTList";
import PairTokenTable from "./components/PairBalance";
import TokenBalance from "./components/TokenBalance";
import TransactionHistory from "./components/TransactionHistory";

export default function Portfolio() {
  const [tab, setTab] = useState<number>();
  const router = useRouter();
  const hasMounted = useHasMounted();
  const addParams = useAddParams();

  const tabs: string[] = ["Tokens", "Liquidities", "NFTs", "Transactions"];

  useEffect(() => {
    tabs.find(
      (tab, index) => tab.toLowerCase() === router.query.tab && setTab(index)
    );
  }, [hasMounted, router]);

  const { address } = useAccount();

  const { mutate, isSuccess } = useSaveTransactions(
    address ? String(address).toLowerCase() : undefined
  );


  useEffect(() => {
    newAllCustomChains.forEach((chain) => {
      mutate({ chainId: chain.id });
    });
  }, [address]);

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
                    onClick={() => addParams({ tab: tab.toLowerCase() })}
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
                <TokenBalance />
              </Tab.Panel>
              <Tab.Panel>
                <PairTokenTable />
              </Tab.Panel>
              <Tab.Panel>
                <NFTList saveSucceeded={isSuccess} />
              </Tab.Panel>
              <Tab.Panel>
                <TransactionHistory saveSucceeded={isSuccess} />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </Flex>
      </Container>
    </RootLayout>
  );
}
