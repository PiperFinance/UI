import React, { useState } from 'react';
import Flex from '@ui/Flex/Flex';

import {
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/solid';
import { Modal } from '@components/Modal/Modal';
import Setting from '@components/SettingModal';

interface ISwapSetting {
  setRefreshRoute: () => void;
}

const SwapSetting = ({ setRefreshRoute }: ISwapSetting) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Flex justifyContent="end" width="full" customStyle="px-5 space-x-3">
        <AdjustmentsHorizontalIcon
          onClick={() => setOpen(true)}
          className="h-5 w-5 cursor-pointer text-gray-600 transition hover:text-gray-200"
        />
        <ArrowPathIcon
          onClick={setRefreshRoute}
          className="h-5 w-5 cursor-pointer text-gray-600 transition hover:text-gray-200"
        />
      </Flex>
      <Modal isOpen={open} closeOnOverlayClick onDismiss={() => setOpen(false)}>
        <Setting onDismiss={() => setOpen(false)} />
      </Modal>
    </>
  );
};

export default SwapSetting;
