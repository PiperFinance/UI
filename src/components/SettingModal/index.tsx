import Flex from '@ui/Flex/Flex';
import { useAtom } from 'jotai';
import ModalHeader from '../ModalHeader';
import { slippage } from '@store/store';
import Input from '@ui/Input/Input';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/solid';
import useTooltip from '@hooks/useToolTip/useToolTip';
import NumberInput from '@components/NumberInput';

interface ISetting {
  onDismiss: () => void;
}

export default function Setting({ onDismiss }: ISetting) {
  const [currentSlippage, setSlippage] = useAtom(slippage);

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    'Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.',
    { placement: 'top' }
  );

  function handleSetValue(e: React.ChangeEvent<HTMLInputElement>) {
    const re = /^[0-9]*[.,]?[0-9]{0,2}$/;
    if (re.test(e.target.value) && !isNaN(Number.parseInt(e.target.value))) {
      setSlippage(Number.parseInt(e.target.value));
    }
  }

  return (
    <Flex
      direction="column"
      customStyle="max-w-lg bg-gray-800 rounded-2xl p-5 space-y-2 text-gray-300 min-h-[400px] max-h-[90%]"
      overflow="yAuto"
    >
      <ModalHeader title="Setting" onClick={onDismiss} />
      <Flex direction="column" customStyle="space-y-3">
        <Flex direction="row" alignItems="center">
          <h6 className="ml-1">Slippage tolerance </h6>{' '}
          {tooltipVisible && tooltip}
          <QuestionMarkCircleIcon ref={targetRef} className="w-5 ml-1" />
        </Flex>
        <Input
          inputMode="decimal"
          onChange={handleSetValue}
          value={currentSlippage}
          border="full"
          fullWidth={true}
          fontSize="sm"
          pattern="^[0-9]*[.,]?[0-9]{0,2}$"
          placeholder="0.50"
          type="text"
        />
      </Flex>
    </Flex>
  );
}
