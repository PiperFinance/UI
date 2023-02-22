import { Chains } from '@constants/networkList';
import Flex from '@ui/Flex/Flex';
import ChainIcon from '@components/ChainIcon';
import { handleSliceHashString } from '@utils/sliceHashString';
import useTooltip from '@hooks/useToolTip/useToolTip';
import { CurrencyIcon } from '@components/CurrencyIcon';
import { Button } from '@ui/Button/Button';
import { Modal } from '@components/Modal/Modal';
import { useState } from 'react';
import ChangeAllowanceModal from '../changeAllowanceModal';

export function AllowanceRow(allowance: any) {
  const [open, setOpen] = useState(false);

  const spenderContract = allowance[0];
  const allowanceToken: any = Object.values(allowance[1]);

  const { targetRef, tooltip, tooltipVisible } = useTooltip(spenderContract, {
    placement: 'bottom',
  });

  const currentChain = Chains.find(
    (chain) => chain.id === allowanceToken[0].detail.chainId && chain
  );

  return (
    <>
      <Flex
        customStyle="py-1 border-b border-gray-500 last:border-b-0"
        alignItems="center"
        justifyContent="between"
      >
        <Flex
          width="half"
          alignItems="center"
          justifyContent="between"
          customStyle="space-x-2"
        >
          <Flex alignItems="center">
            <CurrencyIcon
              size="xl"
              src={
                allowanceToken[0].detail.logoURI
                  ? allowanceToken[0].detail.logoURI
                  : '/assets/token-not-found.png'
              }
              alt={allowanceToken[0].detail.symbol}
              chainId={allowanceToken[0].detail.chainId}
            />
            <Flex
              width="fit"
              direction="column"
              justifyContent="center"
              customStyle="ml-3"
            >
              <h6 className="font-bold uppercase max-sm:text-xs text-gray-200">
                {allowanceToken[0].detail?.symbol}
              </h6>
              <h6 className="text-sm text-gray-400 hidden sm:block">
                {allowanceToken[0].detail?.name}
              </h6>
            </Flex>
          </Flex>
          <Flex width="fit" customStyle="max-sm:hidden">
            {tooltipVisible && tooltip}
            {spenderContract && (
              <div
                className="text-md w-fit cursor-pointer rounded-full bg-slate-700 px-4 py-1 text-gray-200"
                ref={targetRef}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${currentChain?.blockExplorers?.default.url}address/${spenderContract}`}
                >
                  {handleSliceHashString(spenderContract, 10).toUpperCase()}
                </a>
              </div>
            )}
          </Flex>
        </Flex>

        <Flex
          justifyContent="start"
          alignItems="start"
          width="fit"
          customStyle="text-gray-200 text-sm sm:text-base md:flex-row flex-col"
        >
          <Flex alignItems="center">&nbsp;{allowanceToken[0].allowance}</Flex>
        </Flex>

        <Button onClick={() => setOpen(true)} width="xs" height="sm">
          Change
        </Button>
      </Flex>
      <Modal isOpen={open} closeOnOverlayClick onDismiss={() => setOpen(false)}>
        <ChangeAllowanceModal
          onDismiss={() => setOpen(false)}
          allowance={allowanceToken[0].allowance}
          chainId={allowanceToken[0].detail.chainId}
          spender={spenderContract}
          token={allowanceToken[0].detail.address}
        />
      </Modal>
    </>
  );
}
