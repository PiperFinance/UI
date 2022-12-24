import { newAllCustomChains } from "@constants/networkList";
import Flex from "@ui/Flex/Flex";
import Image from "next/image";
import React from "react";

interface IChainIcon {
  chainId: number;
}

const ChainIcon = ({ chainId }: IChainIcon) => {
  return (
    <>
      {newAllCustomChains.map(
        (chain) =>
          chain.id === chainId && (
            <Image
              src={chain.icon!}
              alt="icon"
              width={60}
              height={60}
              className="relative right-1 rounded-full"
            />
          )
      )}
    </>
  );
};

export default ChainIcon;
