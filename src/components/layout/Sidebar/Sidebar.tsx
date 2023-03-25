import {
  ArrowsRightLeftIcon,
  BeakerIcon,
  ChartBarIcon,
  CreditCardIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/solid';
import { sidebar } from '@store/store';
import { useAtom } from 'jotai';
import Link from 'next/link';
import Logo from '../../Logo/Logo';

export default function Sidebar() {
  const [isSidebarOpen] = useAtom(sidebar);

  const iconClass = 'w-5 h-5 text-gray-500 duration-75 text-gray-400';

  const navs = [
    {
      id: 0,
      name: 'Portfolio',
      link: '/',
      icon: <ChartBarIcon className={iconClass} />,
      disable: false,
      versionInfo: '',
    },
    {
      id: 1,
      name: 'Swap & Bridge',
      link: '/swap',
      icon: <ArrowsRightLeftIcon className={iconClass} />,
      disable: false,
      versionInfo: '',
    },
    {
      id: 2,
      name: 'Token Approval',
      link: '/approval',
      icon: <CreditCardIcon className={iconClass} />,
      disable: true,
      versionInfo: 'Soon',
    },
    {
      id: 3,
      name: 'Yield Optimizer',
      link: '/yield',
      icon: <BeakerIcon className={iconClass} />,
      disable: true,
      versionInfo: 'Soon',
    },
  ];

  return (
    <aside
      className={`h-screen w-fit bg-gray-122 ${
        !isSidebarOpen ? 'hidden' : 'block absolute bg-gray-800 z-10'
      } lg:block`}
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto p-3">
        <Logo />
        <ul className="space-y-6">
          {navs.map((nav) => (
            <li key={nav.id} className="w-52">
              <Link
                href={nav.link}
                className={`${
                  nav.disable ? 'pointer-events-none opacity-50' : ''
                } flex space-x-2 items-center rounded-lg p-2 font-normal text-gray-100 hover:bg-gray-700 transition duration-75`}
              >
                {nav.icon}
                <span className="">{nav.name}</span>
                {nav.versionInfo && (
                  <span
                    className={`text-xs ${nav.disable ? '' : 'text-wheat-800'}`}
                  >
                    {nav.versionInfo}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="mt-4 space-y-6 border-t pt-4 border-gray-700">
          <li>
            <Link
              href="https://docs.piper.finance"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-100 transition duration-75 hover:bg-gray-700"
            >
              <DocumentTextIcon className={iconClass} />
              <span className="ml-3">Docs</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
