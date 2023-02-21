import { Chains } from '@constants/networkList';
import Flex from '@ui/Flex/Flex';
import ChainIcon from '@components/ChainIcon';
import { handleSliceHashString } from '@utils/sliceHashString';
import type { IAllowance } from './types';
import useTooltip from '@hooks/useToolTip/useToolTip';
import { CurrencyIcon } from '@components/CurrencyIcon';
import { Button } from '@ui/Button/Button';
import { Modal } from '@components/Modal/Modal';
import { useState } from 'react';
import ChangeAllowanceModal from '../changeAllowanceModal';

export function AllowanceRow(allowance: IAllowance) {
  const [open, setOpen] = useState(false);
  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    allowance.contract,
    {
      placement: 'bottom',
    }
  );

  const currentChain = Chains.find(
    (chain) => chain.id === allowance.token.chainId && chain
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
                allowance.token.logoURI
                  ? allowance.token.logoURI
                  : '/assets/token-not-found.png'
              }
              alt={allowance.token.symbol}
              chainId={allowance.token.chainId}
            />
            <Flex
              width="fit"
              direction="column"
              justifyContent="center"
              customStyle="ml-3"
            >
              <h6 className="font-bold uppercase max-sm:text-xs text-gray-200">
                {allowance.token?.symbol}
              </h6>
              <h6 className="text-sm text-gray-400 hidden sm:block">
                {allowance.token?.name}
              </h6>
            </Flex>
          </Flex>
          <Flex width="fit" customStyle="max-sm:hidden">
            {tooltipVisible && tooltip}
            {allowance.contract && (
              <div
                className="text-md w-fit cursor-pointer rounded-full bg-slate-700 px-4 py-1 text-gray-200"
                ref={targetRef}
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={`${currentChain?.blockExplorers?.default.url}address/${allowance.contract}`}
                >
                  {handleSliceHashString(allowance.contract, 10).toUpperCase()}
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
          <Flex alignItems="center">&nbsp;{allowance.allowance}</Flex>
        </Flex>

        <Button onClick={() => setOpen(true)} width="xs" height="sm">
          Change
        </Button>
      </Flex>
      <Modal isOpen={open} closeOnOverlayClick onDismiss={() => setOpen(false)}>
        <ChangeAllowanceModal
          onDismiss={() => setOpen(false)}
          allowance={allowance}
        />
      </Modal>
    </>
  );
}
