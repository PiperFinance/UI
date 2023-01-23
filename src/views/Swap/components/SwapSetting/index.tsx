import React, { useState } from 'react';
import Flex from '@ui/Flex/Flex';

import {
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/solid';
import { Modal } from '@components/Modal/Modal';
import Setting from '@components/SettingModal';
import useTooltip from '@hooks/useToolTip/useToolTip';

interface ISwapSetting {
  setRefreshRoute: () => void;
}

const SwapSetting = ({ setRefreshRoute }: ISwapSetting) => {
  const [open, setOpen] = useState(false);

  const {
    targetRef: SettingRef,
    tooltip: SettingTooltip,
    tooltipVisible: SettingVisible,
  } = useTooltip('You can change swap setting here', {
    placement: 'bottom',
  });

  const {
    targetRef: RefreshRef,
    tooltip: RefreshTooltip,
    tooltipVisible: RefreshVisible,
  } = useTooltip('Update Swap Routes', {
    placement: 'bottom',
  });

  return (
    <>
      <Flex justifyContent="end" width="full" customStyle="px-5 space-x-3">
        <AdjustmentsHorizontalIcon
          ref={SettingRef}
          onClick={() => setOpen(true)}
          className="h-5 w-5 cursor-pointer text-gray-600 transition hover:text-gray-200"
        />
        {SettingVisible && SettingTooltip}
        <ArrowPathIcon
          ref={RefreshRef}
          onClick={setRefreshRoute}
          className="h-5 w-5 cursor-pointer text-gray-600 transition hover:text-gray-200"
        />
        {RefreshVisible && RefreshTooltip}
      </Flex>
      <Modal isOpen={open} closeOnOverlayClick onDismiss={() => setOpen(false)}>
        <Setting onDismiss={() => setOpen(false)} />
      </Modal>
    </>
  );
};

export default SwapSetting;
