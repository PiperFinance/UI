import {
  ArrowsPointingOutIcon,
  ChartBarIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../Logo/Logo";

export default function Sidebar() {
  const iconClass = "w-5 h-5 text-gray-500 duration-75 text-gray-400";

  const [navs] = useState([
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
    <aside className="h-screen w-fit bg-gray-122" aria-label="Sidebar">
      <div className="h-full overflow-y-auto  p-4">
        <Logo />
        <ul className="space-y-6">
          {navs.map((nav) => (
            <li key={nav.id}>
              <Link
                href={nav.link}
                className="flex items-center rounded-lg p-2 text-base font-normal text-gray-100 hover:bg-gray-700 transition duration-75"
              >
                {nav.icon}
                <span className="ml-3">{nav.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-4 space-y-6 border-t pt-4 border-gray-700">
          <li>
            <Link
              href="#"
              className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-100 transition duration-75 hover:bg-gray-700"
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
