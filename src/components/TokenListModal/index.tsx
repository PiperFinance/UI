import Flex from "@ui/Flex/Flex";
import React from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import { IToken } from "@store/store";
import { SetStateAction } from "jotai";
import { useCallback } from "react";
import {
  calculateNumberDecimal,
  convertToBigNumber,
  formatNumber,
} from "@utils/bignumber";
import { chainIcon } from "@constants/networkList";
import Input from "@ui/Input/Input";
import Image from "next/image";
import { useAccount, useBalance } from "wagmi";

interface ITokenListModal {
  onDismiss: () => void;
  tokens: IToken[];
  setToken: (update: SetStateAction<IToken | undefined>) => void;
  selectedCurrency?: IToken;
  search: string;
  setSearch: (update: SetStateAction<string>) => void;
}

export default function TokenListModal({
  tokens,
  onDismiss,
  setToken,
  selectedCurrency,
  setSearch,
  search,
}: ITokenListModal) {
  const Row = useCallback(({ data, index, style }: ListChildComponentProps) => {
    const currency: IToken = data[index];
    const isSelected = Boolean(
      selectedCurrency?.symbol.toLowerCase() ===
        currency.symbol.toLowerCase() &&
        selectedCurrency?.chainId === currency.chainId
    );
    const { address, isConnecting, isDisconnected } = useAccount();
    const {
      data: balance,
      error,
      isLoading,
    } = useBalance({
      address: address,
      token: currency.address,
      chainId: currency.chainId,
      watch: true,
    });

    const handleSelectToken = (token: IToken) => {
      setToken(token);
      onDismiss();
      setSearch("");
    };

    return (
      <Flex
        style={style}
        onClick={() => handleSelectToken(currency)}
        position="items-center h-16"
      >
        <Flex
          customStyle={`${
            isSelected ? "text-wheat-400" : "text-gray-100"
          }  cursor-pointer hover:text-wheat-400 transition`}
          position="items-center"
        >
          <img
            src={
              currency.logoURI
                ? currency.logoURI
                : "/assets/token-not-found.png"
            }
            alt={currency.name}
            className="h-11 w-11 rounded-full"
          />
          <Flex
            position="justify-center"
            direction="flex-col"
            customStyle="ml-3"
          >
            <h3 className="text-sm font-bold">{currency.symbol}</h3>
            {chainIcon.map(
              (chain) =>
                chain.chainId === currency.chainId && (
                  <Flex position="items-center" customStyle="space-x-1">
                    <h5 className="text-xs text-gray-300">on {chain.name}</h5>
                    <div className="relative h-5 w-5 rounded-md bg-gray-1000 ">
                      <Image src={chain.icon} alt={""} fill />
                    </div>
                  </Flex>
                )
            )}
          </Flex>
          <h5 className="w-32 text-center text-sm font-semibold">
            {/* {balance
              ? formatNumber(
                  calculateNumberDecimal(balance.value, currency.decimals),
                  4
                )
              : 0} */}
            {balance && Number(balance?.value) > 0
              ? formatNumber(balance.formatted, 5)
              : "0"}
          </h5>
        </Flex>
      </Flex>
    );
  }, []);

  return (
    <Flex
      direction="flex-col"
      customStyle="max-w-sm bg-gray-800 rounded-2xl p-5 space-y-4"
    >
      <Flex
        position="justify-between"
        customStyle="text-lg font-bold text-gray-50"
      >
        <h1>Token List</h1>
        <XMarkIcon
          onClick={() => {
            setSearch("");
            onDismiss();
          }}
          className="h-6 w-6 cursor-pointer transition hover:text-red-400"
        />
      </Flex>
      <Input
        border="full"
        fontSize="sm"
        placeholder="Search Token by name/symbol/address"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        autoFocus
      />
      <FixedSizeList
        className="flex flex-col space-y-3 overflow-y-auto"
        height={390}
        width="100%"
        itemData={tokens}
        itemCount={tokens.length}
        itemSize={64}
        // itemKey={itemKey}
      >
        {Row}
      </FixedSizeList>
    </Flex>
  );
}
