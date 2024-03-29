import { IChain, Chains } from '@constants/networkList';
import useTooltip from '@hooks/useToolTip/useToolTip';
import Image from 'next/image';

interface IChainIcon {
  chainId: number;
}

function ChainIconComponent(chain: IChain) {
  const { targetRef, tooltip, tooltipVisible } = useTooltip(chain.network, {
    placement: 'bottom',
  });

  return (
    <>
      {tooltipVisible && tooltip}
      <div ref={targetRef}>
        <Image
          key={chain.name}
          src={chain.icon ?? ''}
          alt="icon"
          width={70}
          height={70}
          className="rounded-full"
        />
      </div>
    </>
  );
}

const ChainIcon = ({ chainId }: IChainIcon) => {
  return (
    <>
      {Chains.map(
        (chain) => chain.id === chainId && <ChainIconComponent key={chain.id} {...chain} />
      )}
    </>
  );
};

export default ChainIcon;
