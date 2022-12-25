import Flex from "@ui/Flex/Flex";
import React, { useCallback } from "react";
import type { ListChildComponentProps } from "react-window";
import { FixedSizeList } from "react-window";
import type { IToken } from "@store/store";
import { selectedChains } from "@store/store";
import type { SetStateAction } from "jotai";
import { useAtom } from "jotai";
import { formatNumber } from "@utils/bignumber";
import Input from "@ui/Input/Input";
import Image from "next/image";
import { useAccount, useBalance } from "wagmi";
import type { IChain } from "@constants/networkList";
import { newAllCustomChains } from "@constants/networkList";
import ModalHeader from "../ModalHeader";

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
  const [currentChain, setCurrentChain] = useAtom(selectedChains);
  const toggleChain = (chain: IChain) => {
    currentChain.includes(chain)
      ? setCurrentChain(currentChain.filter((i) => i !== chain))
      : setCurrentChain([...currentChain, chain]);
  };

  const Row = useCallback(({ data, index, style }: ListChildComponentProps) => {
    const currency: IToken = data[index];
    const isSelected = Boolean(
      selectedCurrency?.detail?.symbol.toLowerCase() ===
        currency.detail.symbol.toLowerCase() &&
        selectedCurrency?.detail?.chainId === currency.detail.chainId
    );
    const { address } = useAccount();
    const {
      data: balance,
      error,
      isLoading,
    } = useBalance({
      address,
      token:
        currency.detail.address.toLowerCase() ===
        "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLowerCase()
          ? undefined
          : (currency.detail.address as `0x${string}`),
      chainId: currency.detail.chainId,
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
        customStyle="h-16 overflow-x-hidden overflow-hidden"
        alignItems="center"
      >
        <Flex
          customStyle={`${
            isSelected ? "text-wheat-400" : "text-gray-100"
          }  cursor-pointer hover:text-wheat-400 transition`}
          alignItems="center"
        >
          <img
            src={
              currency.detail.logoURI
                ? currency.detail.logoURI
                : "/assets/token-not-found.png"
            }
            alt={currency.detail.name}
            className="h-11 w-11 rounded-full"
          />
          <Flex justifyContent="center" direction="column" customStyle="ml-3">
            <h3 className="text-sm font-bold">{currency.detail.symbol}</h3>
            {newAllCustomChains.map(
              (chain) =>
                chain.id === currency.detail.chainId && (
                  <Flex alignItems="center" customStyle="space-x-1">
                    <h5 className="text-xs text-gray-300">on {chain.name}</h5>
                    <div className="relative h-5 w-5 rounded-md bg-gray-1000 ">
                      <Image src={chain.icon!} alt={""} fill />
                    </div>
                  </Flex>
                )
            )}
          </Flex>
          <span className="w-32 text-center text-sm font-semibold">
            {balance && Number(balance.value) > 0
              ? formatNumber(balance.formatted, 5)
              : "0"}
          </span>
        </Flex>
      </Flex>
    );
  }, []);

  return (
    <Flex
      direction="column"
      customStyle="max-w-sm bg-gray-800 rounded-2xl p-5 space-y-4"
    >
      <ModalHeader
        title="Connect Wallet"
        onClick={() => {
          setSearch("");
          onDismiss();
        }}
      />
      <Flex justifyContent="between" customStyle="flex-wrap">
        {newAllCustomChains.map((chain) => (
          <div
            onClick={() => toggleChain(chain)}
            className={`${
              currentChain.includes(chain)
                ? "border-green-300 hover:border-green-700"
                : "border-gray-600 hover:border-gray-100"
            } relative m-1 h-14 basis-1/6 cursor-pointer rounded-lg border  p-3 transition hover:border-gray-100`}
          >
            <Image src={chain.icon!} alt={chain.name} fill />
          </div>
        ))}
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
