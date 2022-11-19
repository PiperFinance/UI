import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { Container } from '@ui/Container/Container';
import Flex from '@ui/Flex/Flex';
import { useMemo } from 'react';
import Default from '../components/layout/Default';
import List from '../components/List/List';
import Table from '../components/Table/Table';

export default function Dashboard() {
  return (
    <Default pageName="Portfolio">
      <Flex position="justify-between">
        <Table />
        <List />
      </Flex>
    </Default>
  );
}
