import ConnectWalletModal from '@components/ConnectWalletModal';
import { Modal } from '@components/Modal/Modal';
import { Button } from '@ui/Button/Button';
import React, { useState } from 'react';

const ConnectWallet = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        width="sm"
      >
        Connect Wallet
      </Button>

      <Modal isOpen={open} closeOnOverlayClick onDismiss={() => setOpen(false)}>
        <ConnectWalletModal onDismiss={() => setOpen(false)} />
      </Modal>
    </>
  );
};

export default ConnectWallet;
