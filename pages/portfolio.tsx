import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { Container } from '@ui/Container/Container';
import Flex from '@ui/Flex/Flex';
import { useMemo } from 'react';
import Default from '../components/layout/Default';
import List from '../components/List/List';
import Table from '../components/Table/Table';

export default function Dashboard() {
  const balances = [
    {
      id: 1,
      name: 'Poland',
      language: 'Polish',
      capital: 'Warsaw',
    },
    {
      id: 2,
      name: 'Bulgaria',
      language: 'Bulgarian',
      capital: 'Sofia',
    },
    {
      id: 3,
      name: 'Hungary',
      language: 'Hungarian',
      capital: 'Budapest',
    },
    {
      id: 4,
      name: 'Moldova',
      language: 'Moldovan',
      capital: 'Chișinău',
    },
    {
      id: 5,
      name: 'Austria',
      language: 'German',
      capital: 'Vienna',
    },
    {
      id: 6,
      name: 'Lithuania',
      language: 'Lithuanian',
      capital: 'Vilnius',
    },
    {
      id: 7,
      name: 'Lithuania',
      language: 'Lithuanian',
      capital: 'Vilnius',
    },
    {
      id: 8,
      name: 'Lithuania',
      language: 'Lithuanian',
      capital: 'Vilnius',
    },
    {
      id: 9,
      name: 'Lithuania',
      language: 'Lithuanian',
      capital: 'Vilnius',
    },
    {
      id: 10,
      name: 'Lithuania',
      language: 'Lithuanian',
      capital: 'Vilnius',
    },
    {
      id: 11,
      name: 'Lithuania',
      language: 'Lithuanian',
      capital: 'Vilnius',
    },
  ];

  return (
    <Default pageName="Portfolio">
      <Flex position="justify-between">
        <Table data={balances} rowsPerPage={5} />
        <List />
      </Flex>
    </Default>
  );
}
