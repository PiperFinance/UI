import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useLiveQuery } from 'dexie-react-hooks';
import Image from 'next/image';
import { db } from './db';

export default function Dashboard() {
  const balances = useLiveQuery(async () => db.balances.toArray());

  if (!balances) return;
  return (
    <>
      <ConnectButton />
      <div className="grid place-content-center w-screen h-screen">
        <section className="w-full min-w-fit max-w-screen-lg border p-2 rounded-lg border-x-gray-300 ">
          <table className="table-auto w-full max-w-screen-lg">
            <tbody className="text-sm">
              {balances!.map((balance) => (
                <Disclosure
                  key={balance.address + balance.symbol}
                  as="tr"
                  className="rounded-md"
                >
                  {({ open }) => (
                    <>
                      <Disclosure.Button
                        as="td"
                        className="flex w-full justify-between rounded-lg  text-left text-sm font-medium bg-white  hover:bg-gray-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
                      >
                        <tr className="w-full">
                          <td className="p-2 whitespace-nowrap">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img
                                className="rounded-full"
                                src={balance.logo!}
                                width="40"
                                height="40"
                                alt="Alex Shatov"
                              />
                            </div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left">{balance.symbol}</div>
                          </td>
                          <td className="p-2 whitespace-nowrap">
                            <div className="text-left font-medium text-green-500">
                              ${balance.balance}
                            </div>
                          </td>
                        </tr>

                        <ChevronUpIcon
                          className={`${
                            open ? 'rotate-180 transform' : ''
                          } h-5 w-5 text-gray-500  my-auto mx-4`}
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel
                        as="div"
                        className="px-4 pt-4 pb-2 text-sm text-white-500 border border-gray-300 rounded-md"
                      ></Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}
