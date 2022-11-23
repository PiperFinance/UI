import {
  ArrowsPointingOutIcon,
  ChartBarIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useState } from 'react';
import Logo from '../../Logo/Logo';

export default function Sidebar() {
  const iconClass: string =
    'w-5 h-5 text-gray-500 duration-75 dark:text-gray-400';

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
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white dark:hover:bg-gray-700"
              >
                {nav.icon}
                <span className="ml-3">{nav.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="pt-4 mt-4 space-y-6 border-t border-gray-200 dark:border-gray-700">
          <li>
            <Link
              href="#"
              className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
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
