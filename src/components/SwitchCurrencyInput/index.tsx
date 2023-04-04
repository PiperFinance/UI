import { ArrowsUpDownIcon } from '@heroicons/react/24/solid';
import { destinationToken, originToken } from '@store/store';
import Flex from '@ui/Flex/Flex';
import { useAtom } from 'jotai';
import { useState } from 'react';
import {
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/solid';
import { Modal } from '@components/Modal/Modal';
import Setting from '@components/SettingModal';
import useTooltip from '@hooks/useToolTip/useToolTip';

interface ISwitchCurrency {
  setRefreshRoute: () => void;
}

const SwitchCurrencyInput = (props: ISwitchCurrency) => {
  const [open, setOpen] = useState(false);
  const [fromToken, setFormToken] = useAtom(originToken);
  const [toToken, setToToken] = useAtom(destinationToken);

  const handleSwitchInput = () => {
    setFormToken(toToken);
    setToToken(fromToken);
  };

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

  const {
    targetRef: SwitchRef,
    tooltip: SwitchTooltip,
    tooltipVisible: SwitchVisible,
  } = useTooltip('Switch Tokens', {
    placement: 'bottom',
  });

  return (
    <>
      <Flex customStyle="text-gray-400 rounded-full p-3 cursor-pointer transition space-x-5">
        <AdjustmentsHorizontalIcon
          ref={SettingRef}
          onClick={() => setOpen(true)}
          className="h-7 w-7 hover:bg-gray-900 rounded-md p-1 transition-all"
        />
        {SettingVisible && SettingTooltip}
        <ArrowsUpDownIcon
          ref={SwitchRef}
          className="h-7 w-7 hover:bg-gray-900 rounded-md p-1 transition-all"
          onClick={() => handleSwitchInput()}
        />
        {SwitchVisible && SwitchTooltip}
        <ArrowPathIcon
          ref={RefreshRef}
          onClick={props.setRefreshRoute}
          className="h-7 w-7 hover:bg-gray-900 rounded-md p-1 transition-all"
        />
        {RefreshVisible && RefreshTooltip}
      </Flex>
      <Modal isOpen={open} closeOnOverlayClick onDismiss={() => setOpen(false)}>
        <Setting onDismiss={() => setOpen(false)} />
      </Modal>
    </>
  );
};

export default SwitchCurrencyInput;
