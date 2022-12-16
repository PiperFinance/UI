import { ArrowsUpDownIcon } from "@heroicons/react/24/solid";
import { destinationToken, originToken } from "@store/store";
import Flex from "@ui/Flex/Flex";
import { useAtom } from "jotai";
import React from "react";

const SwitchCurrencyInput = () => {
  const [fromToken, setFormToken] = useAtom(originToken);
  const [toToken, setToToken] = useAtom(destinationToken);

  const handleSwitchInput = () => {
    setFormToken(toToken);
    setToToken(fromToken);
  };

  return (
    <Flex customStyle="text-gray-400 rounded-full p-3 hover:text-gray-100 cursor-pointer transition">
      <ArrowsUpDownIcon
        className="h-6 w-6"
        onClick={() => handleSwitchInput()}
      />
    </Flex>
  );
};

export default SwitchCurrencyInput;
