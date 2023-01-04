import { Button } from "@ui/Button/Button";
import Flex from "@ui/Flex/Flex";
import Input from "@ui/Input/Input";

import React, { useState } from "react";
import type { IToken } from "@store/store";
import { searchAtom } from "@store/store";
import { useAtom } from "jotai";
import { CurrencyIcon } from "@components/CurrencyIcon";
import { formatNumber } from "@utils/bignumber";
import useHasMounted from "@hooks/useHasMounted";
import { CurrencyInputPanelSkeleton } from "@ui/Skeleton";
import TokenListModal from "../TokenListModal";
import { Modal } from "../Modal/Modal";

interface ICurrencyInputPanel {
  disabled?: boolean;
  setToken: () => void;
  setAmount: React.Dispatch<React.SetStateAction<string | undefined>>;
  selectedCurrency?: IToken;
  currencyBalance?: string;
  amount?: string;
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
      customStyle="bg-gray-122 rounded-xl p-4 my-2 h-42 border border-gray-700 space-y-1"
    >
      <Flex
        customStyle="text-gray-300 px-2 text-xs font-semibold"
        justifyContent="between"
      >
        <span>
          Balance:{" "}
          {currencyBalance && Number(currencyBalance) > 0
            ? formatNumber(currencyBalance, 5)
            : "0"}
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
          placeholder="0"
          disabled={disabled}
          autoComplete="off"
          onChange={(e) => setAmount(e.target.value)}
          fontSize="xl"
          value={amount}
        />
        <Button onClick={() => setOpen(true)} intent="secondary">
          {selectedCurrency ? (
            <Flex justifyContent="evenly" alignItems="center">
              <CurrencyIcon
                size="lg"
                src={
                  selectedCurrency.detail?.logoURI
                    ? selectedCurrency.detail?.logoURI
                    : "/assets/token-not-found.png"
                }
                alt={selectedCurrency.detail?.name}
                chainId={selectedCurrency.detail?.chainId}
              />
              <h3>{selectedCurrency.detail?.symbol}</h3>
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
