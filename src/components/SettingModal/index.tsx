import Flex from '@ui/Flex/Flex';
import { useAtom } from 'jotai';
import ModalHeader from '../ModalHeader';
import { slippage } from '@store/store';
import Input from '@ui/Input/Input';

interface ISetting {
  onDismiss: () => void;
}

export default function Setting({ onDismiss }: ISetting) {
  const [currentSlippage, setSlippage] = useAtom(slippage);

  return (
    <Flex
      direction="column"
      customStyle="max-w-lg bg-gray-800 rounded-2xl p-5 space-y-2 text-gray-300 max-h-[90%]"
      overflow="yAuto"
    >
      <ModalHeader title="Setting" onClick={onDismiss} />
      <Flex direction="column" customStyle="space-y-3">
        <h6 className="ml-1">Slippage tolerance</h6>

        <Input
          type="text"
          pattern="^[0-9]*[.,]?[0-9]*$"
          autoCorrect="off"
          autoComplete="off"
          spellCheck="false"
          inputMode="decimal"
          onChange={(e) => setSlippage(Number(e.target.value))}
          value={currentSlippage}
          border="full"
          fullWidth={true}
          fontSize="sm"
        />
      </Flex>
    </Flex>
  );
}
