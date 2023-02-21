import ModalHeader from '@components/ModalHeader';
import { Button } from '@ui/Button/Button';
import Flex from '@ui/Flex/Flex';
import Input from '@ui/Input/Input';
import React, { useState } from 'react';
import { IAllowance } from '../allowanceList/types';

interface IChangeAllowanceModal {
  onDismiss: () => void;
  allowance: IAllowance;
}

const ChangeAllowanceModal = (props: IChangeAllowanceModal) => {
  const [allowance, setAllowance] = useState<string>(props.allowance.allowance);
  return (
    <Flex
      direction="column"
      customStyle="max-w-lg bg-gray-800 rounded-2xl p-5 space-y-4"
    >
      <ModalHeader
        title="Change Allowance"
        onClick={() => {
          props.onDismiss();
        }}
      />
      <Flex
        justifyContent="center"
        alignItems="center"
        customStyle="space-x-10"
      >
        <Input
          border="full"
          value={allowance}
          onChange={(e) => setAllowance(e.target.value)}
        />
        <Button width="sm" height="sm">
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default ChangeAllowanceModal;
