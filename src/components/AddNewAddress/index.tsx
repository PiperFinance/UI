import { useImportWallet } from '@hooks/useImportWallet';
import { userToken, IAddressReq } from '@store/store';
import { Button } from '@ui/Button/Button';
import Flex from '@ui/Flex/Flex';
import Input from '@ui/Input/Input';
import { useAtom } from 'jotai';
import { useState } from 'react';

const AddNewAddress = () => {
  const [address, setAddress] = useState<string>();
  const { mutate } = useImportWallet();

  const [currentUserToken, setUserToken] = useAtom(userToken);
  

  return (
    <Flex
      customStyle="text-gray-500 rounded-2xl w-full sm:w-96 text-sm"
      alignItems="center"
    >
      <Flex alignItems="center" customStyle="space-x-3">
        <Input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Enter Address"
          border={'full'}
          fontSize={'sm'}
        />
        <Button 
          width={`sm`}
          height={'sm'} 
          fontSize={'sm'}
          onClick={() => address ? mutate(address) : 0}>
          Import
        </Button>
      </Flex>
    </Flex>
  );
};

export default AddNewAddress;
