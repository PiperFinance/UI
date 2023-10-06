import { Button } from '@ui/Button/Button';
import Flex from '@ui/Flex/Flex';
import Input from '@ui/Input/Input';

import { CurrencyIcon } from '@components/CurrencyIcon';
import useHasMounted from '@hooks/useHasMounted';
import type { IToken } from '@store/store';
import { searchAtom } from '@store/store';
import { CurrencyInputPanelSkeleton } from '@ui/Skeleton';
import { formatNumber } from '@utils/bignumber';
import { useAtom } from 'jotai';
import React, { useState } from 'react';
import { Modal } from '../Modal/Modal';
import TokenListModal from '../TokenListModal';

interface ICurrencyInputPanel {
  disabled?: boolean;
  setToken: () => void;
  setAmount: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectedCurrency?: IToken;
  currencyBalance?: string;
  amount?: string;
  placeholder?: string;
  tokenList: IToken[];
}

export default function CurrencyInputPanel({
  disabled,
  setToken,
  selectedCurrency,
  currencyBalance,
  setAmount,
  amount,
  tokenList,
  placeholder,
}: ICurrencyInputPanel) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useAtom(searchAtom);
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return <CurrencyInputPanelSkeleton />;
  }

  return (
    <Flex
      direction="column"
      width="full"
      customStyle={`rounded-xl p-4 h-42 space-y-1 bg-gray-800 shadow-3xl`}
    >
      <Flex
        customStyle="text-gray-300 px-2 text-xs font-semibold"
        justifyContent="between"
      >
        <span className="text-wheat-300">
          Balance:{' '}
          {currencyBalance && Number(currencyBalance) > 0
            ? formatNumber(currencyBalance, 5)
            : '0'}
        </span>
        {!disabled && (
          <button
            onClick={
              currencyBalance ? () => setAmount(currencyBalance) : undefined
            }
            className=" text-wheat-300 transition hover:text-wheat-900"
          >
            MAX
          </button>
        )}
      </Flex>
      <Flex justifyContent="between" alignItems="center">
        <Input
          type="text"
          pattern="^[0-9]*[.,]?[0-9]*$"
          autoCorrect="off"
          autoComplete="off"
          spellCheck="false"
          inputMode="decimal"
          placeholder={placeholder}
          disabled={disabled}
          onChange={(e) => setAmount(e.target.value)}
          fontSize="lg"
          value={amount}
        />
        <Button onClick={() => setOpen(true)} intent="wheat">
          {selectedCurrency ? (
            <Flex justifyContent="evenly" alignItems="center">
              <CurrencyIcon
                size="lg"
                detail={selectedCurrency.detail}
                chainId={selectedCurrency.detail?.chainId}
              />
              <h3>{selectedCurrency.detail?.symbol}</h3>
            </Flex>
          ) : (
            'Select'
          )}
        </Button>
        <Modal
          isOpen={open}
          closeOnOverlayClick
          onDismiss={() => setOpen(false)}
        >
          <TokenListModal
            setToken={setToken}
            tokens={tokenList}
            onDismiss={() => setOpen(false)}
            search={search}
            setSearch={setSearch}
            selectedCurrency={selectedCurrency}
          />
        </Modal>
      </Flex>
    </Flex>
  );
}
