import {
  ArrowsPointingOutIcon,
  ChartBarIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../Logo/Logo";

export default function Sidebar() {
  const iconClass: string =
    "w-5 h-5 text-gray-500 duration-75 dark:text-gray-400";

  let [navs] = useState([
    {
      id: 0,
      name: "Portfolio",
      link: "/",
      icon: <ChartBarIcon className={iconClass} />,
    },
    {
      id: 1,
      name: "Cross Swap",
      link: "/swap",
      icon: <ArrowsPointingOutIcon className={iconClass} />,
    },
  ]);

  return (
    <aside
      className="h-screen w-fit bg-gray-50 dark:bg-gray-122"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto  py-4 px-4 ">
        <Logo />
        <ul className="space-y-6">
          {navs.map((nav) => (
            <li key={nav.id}>
              <Link
                href={nav.link}
                className="flex items-center rounded-lg p-2 text-base font-normal text-gray-900 dark:text-white dark:hover:bg-gray-700"
              >
                {nav.icon}
                <span className="ml-3">{nav.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-4 space-y-6 border-t border-gray-200 pt-4 dark:border-gray-700">
          <li>
            <Link
              href="#"
              className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              <DocumentTextIcon className={iconClass} />
              <span className="ml-3">Documentation</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
