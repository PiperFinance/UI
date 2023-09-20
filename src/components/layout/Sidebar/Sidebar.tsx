import { Tab } from '@headlessui/react';
import { sidebar } from '@store/store';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { CiRainbow } from 'react-icons/ci';
import { HiBeaker, HiDocumentText } from 'react-icons/hi';
import { MdInsertChartOutlined } from 'react-icons/md';
import Logo from '../../Logo/Logo';

export default function Sidebar() {
  const [isSidebarOpen] = useAtom(sidebar);
  const router = useRouter();

  const navs = [
    {
      id: 0,
      name: '',
      link: '/',
      icon: <MdInsertChartOutlined size="2rem" />,
      disable: false,
      versionInfo: '',
    },
    {
      id: 1,
      name: '',
      link: '/swap',
      icon: <CiRainbow size="2rem" />,
      disable: false,
      versionInfo: '',
    },
    // {
    //   id: 2,
    //   name: '',
    //   link: '/approval',
    //   icon: <CreditCardIcon className={iconClass} />,
    //   disable: true,
    //   versionInfo: '',
    // },
    {
      id: 2,
      name: '',
      link: '/yield',
      icon: <HiBeaker size="2rem" />,
      disable: true,
      versionInfo: '',
    },
  ];

  return (
    <aside
      className={`h-screen w-fit bg-gray-800 shadow-aside ${
        !isSidebarOpen ? 'hidden' : 'block absolute bg-gray-800 z-10'
      } lg:block`}
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto p-3">
        <Logo />
        {/* <ul className="space-y-6">
          {navs.map((nav) => (
            <li key={nav.id} className="">
              <Link
                href={nav.link}
                className={`${
                  nav.disable ? 'pointer-events-none opacity-50' : ''
                } flex space-x-2 items-center rounded-lg p-2 font-normal text-gray-100 hover:shadow-hover transition duration-75`}
              >
                {nav.icon}
                {nav.name && <span className="">{nav.name}</span>}
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
        </ul> */}
        <Tab.Group>
          <Tab.List className={'flex flex-col space-y-6'}>
            {navs.map((nav) => (
              <Tab key={nav.id} className="">
                <Link
                  href={nav.link}
                  className={`${
                    nav.disable ? 'pointer-events-none opacity-50' : ''
                  } flex space-x-2 items-center rounded-lg p-2 font-normal text-wheat-100 hover:shadow-hover ${
                    router.route === nav.link ? 'shadow-3xl text-wheat-600' : ''
                  } transition duration-75`}
                >
                  {nav.icon}
                  {nav.name && <span className="">{nav.name}</span>}
                  {nav.versionInfo && (
                    <span
                      className={`text-xs ${
                        nav.disable ? '' : 'text-wheat-800'
                      }`}
                    >
                      {nav.versionInfo}
                    </span>
                  )}
                </Link>
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>

        <ul className="mt-4 space-y-6 border-t pt-4 border-gray-500">
          <li>
            <Link
              href="https://docs.piper.finance"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center rounded-lg p-2 text-base font-normal text-gray-100 transition duration-75 hover:bg-gray-700"
            >
              <HiDocumentText size="2rem" />
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
