import {
  ArrowsPointingOutIcon,
  ArrowsRightLeftIcon,
  ArrowsUpDownIcon,
  ArrowUpLeftIcon,
  ChartBarIcon,
  DocumentTextIcon,
  RectangleGroupIcon,
  WindowIcon,
} from '@heroicons/react/20/solid';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../../Logo/Logo';

export default function Sidebar() {
  const iconClass: string =
    'w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white hover:bg-gray-100';

  let [navs] = useState([
    {
      id: 0,
      name: 'Portfolio',
      link: '/portfolio',
      icon: <ChartBarIcon className={iconClass} />,
    },
    {
      id: 1,
      name: 'Cross Swap',
      link: '/cross',
      icon: <ArrowsPointingOutIcon className={iconClass} />,
    },
    {
      id: 2,
      name: 'Bridge',
      link: '/bridge',
      icon: <ArrowsUpDownIcon className={iconClass} />,
    },
    {
      id: 3,
      name: 'Swap',
      link: '/swap',
      icon: <ArrowsRightLeftIcon className={iconClass} />,
    },
  ]);

  return (
    <aside className="w-fit h-screen" aria-label="Sidebar">
      <div className="overflow-y-auto py-4 px-4 bg-gray-50 dark:bg-gray-800 h-full">
        <Logo />
        <ul className="space-y-6">
          {navs.map((nav) => (
            <li key={nav.id}>
              <Link
                href={nav.link}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {nav.icon}
                {/* <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg> */}
                <span className="ml-3">{nav.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="pt-4 mt-4 space-y-6 border-t border-gray-200 dark:border-gray-700">
          <li>
            <a
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            >
              <DocumentTextIcon className={iconClass} />
              <span className="ml-3">Documentation</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
