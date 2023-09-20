import { useImportWallet } from '@hooks/useImportWallet';
import { Button } from '@ui/Button/Button';
import Flex from '@ui/Flex/Flex';
import Input from '@ui/Input/Input';
import { useState } from 'react';

interface IImportAddress {
  onClose: () => void;
}

const IImportAddress = (props: IImportAddress) => {
  const [address, setAddress] = useState<string>();
  const { mutate } = useImportWallet();

  return (
    <Flex
      customStyle="text-gray-500 rounded-2xl w-full sm:w-96 text-sm"
      alignItems="center"
    >
      <Flex alignItems="center" direction={'column'} customStyle="space-y-3 my-2">
        <Input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Address"
          border={'full'}
          fontSize={'sm'}
        />
        <Button
          width={`full`}
          height={'sm'}
          fontSize={'sm'}
          onClick={() => {
            address && mutate(address);
            props.onClose();
          }}
        >
          Import
        </Button>
      </Flex>
    </Flex>
  );
};

export default IImportAddress;
