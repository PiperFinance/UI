import Image from 'next/image';
import { useEffect, useState } from 'react';
import cedeImg from './cede-store.png';

import { detectCedeProvider } from '@cedelabs/providers';
import useHasMounted from '@hooks/useHasMounted';
import { useAtom } from 'jotai';
import { cexBalancesList } from '@store/store';

const ConnectCEDE = () => {
  const [open, setOpen] = useState(false);
  const [cedeProvider, setCedeProvider] = useState<any>();
  const [vault, setVault] = useState<any>();

  const [, setCexBalanceToken] = useAtom(cexBalancesList);

  const hasMount = useHasMounted();

  const getProvider = async () => {
    const provider = await detectCedeProvider();

    setCedeProvider(provider);
  };

  useEffect(() => {
    getProvider();
  }, [hasMount]);

  const handleConnectCEDE = async () => {
    if (!cedeProvider) return;
    await cedeProvider.request({ method: 'connect' });

    const vaultPreview = cedeProvider.getVaultPreviews();
    setVault(vaultPreview[0]);

    const vaultId = vaultPreview[0].id;
    const balances = await cedeProvider.request({
      method: 'balances',
      params: {
        vaultId,
        accountNames: ['Kucoin 1'],
      },
    });

    setCexBalanceToken(balances.data);
  };

  return (
    <>
      <button
        onClick={() => {
          handleConnectCEDE();
        }}
        className="flex border border-primary-700 rounded-xl text-gray-200 p-3 mx-3 space-x-1 h-fit items-center hover:bg-primary-700 transition-all"
      >
        <Image
          className="mx-1"
          alt="CEDE"
          src={cedeImg}
          width={30}
          height={30}
        />
        {vault && vault.isActive ? '' : 'Connect to CEDE'}
      </button>

      {/* <Modal isOpen={open} closeOnOverlayClick onDismiss={() => setOpen(false)}>
        <ConnectWalletModal onDismiss={() => setOpen(false)} />
      </Modal> */}
    </>
  );
};

export default ConnectCEDE;
