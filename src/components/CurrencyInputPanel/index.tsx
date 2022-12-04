import { Button } from "@ui/Button/Button";
import Flex from "@ui/Flex/Flex";
import Input from "@ui/Input/Input";

import React, { useState } from "react";
import { Modal } from "../Modal/Modal";
import TokenListModal from "../TokenListModal";
import { IToken, searchAtom, tokenAtom, tokens } from "@store/store";
import { useAtom, useAtomValue } from "jotai";
import { CurrencyIcon } from "@ui/CurrencyIcon";

interface ICurrencyInputPanel {
  disabled?: boolean;
  setToken: () => void;
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  selectedCurrency?: IToken;
  currencyBalance?: string;
  amount: string;
}

export default function CurrencyInputPanel({
  disabled,
  setToken,
  selectedCurrency,
  currencyBalance,
  setAmount,
  amount
}: ICurrencyInputPanel) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useAtom(searchAtom);
  const tokenList = useAtomValue(tokenAtom);


  return (
    <Flex
      direction="flex-col"
      customStyle="my-4 bg-gray-122 rounded-xl p-4 my-2 h-32 space-y-1"
    >
      <Flex position="justify-between text-gray-300 px-2 text-xs font-semibold">
        <span>Balance: {currencyBalance ? currencyBalance : "0"}</span>
        {currencyBalance && !disabled && (
          <button
            onClick={() => setAmount(currencyBalance)}
            className=" text-wheat-300 transition hover:text-wheat-900"
          >
            MAX
          </button>
        )}
      </Flex>
      <Flex position="justify-between items-center">
        <Input
          placeholder="0"
          disabled={disabled}
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <Button onClick={() => setOpen(true)} intent="secondary">
          {selectedCurrency ? (
            <Flex position="justify-evenly items-center">
              <CurrencyIcon
                size="lg"
                src={selectedCurrency.logoURI}
                alt={selectedCurrency.name}
                chainId={selectedCurrency.chainId}
              />
              <h3>{selectedCurrency.symbol}</h3>
            </Flex>
          ) : (
            "Select"
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
