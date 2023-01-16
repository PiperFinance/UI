import Tooltip from '@components/TooltipContainer';
import { newAllCustomChains } from '@constants/networkList';
import Image from 'next/image';
import React from 'react';

interface IChainIcon {
  chainId: number;
}

const ChainIcon = ({ chainId }: IChainIcon) => {
  return (
    <>
      {newAllCustomChains.map(
        (chain) =>
          chain.id === chainId && (
            <Tooltip tooltip={chain.name} position="top">
              <div>
                <Image
                  key={chain.name}
                  src={chain.icon ?? ''}
                  alt="icon"
                  width={70}
                  height={70}
                  className="rounded-full"
                />
              </div>
            </Tooltip>
          )
      )}
    </>
  );
};

export default ChainIcon;
