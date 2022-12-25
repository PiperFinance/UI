import { newAllCustomChains } from "@constants/networkList";
import Image from "next/image";
import React from "react";

interface IChainIcon {
  chainId: number;
}

const ChainIcon = ({ chainId }: IChainIcon) => {
  return (
    <div>
      {newAllCustomChains.map(
        (chain) =>
          chain.id === chainId && (
            <Image
              key={chain.name}
              src={chain.icon ?? ""}
              alt="icon"
              width={70}
              height={70}
              className="rounded-full"
            />
          )
      )}
    </div>
  );
};

export default ChainIcon;
