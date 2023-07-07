import ModalHeader from '@components/ModalHeader';
import { Button } from '@ui/Button/Button';
import Flex from '@ui/Flex/Flex';
import Input from '@ui/Input/Input';
import { ethers } from 'ethers';
import { useState } from 'react';
import {
  erc20ABI,
  useAccount,
  useContractWrite,
  useNetwork,
  usePrepareContractWrite,
  useSwitchNetwork,
  useWalletClient,
} from 'wagmi';

interface IChangeAllowanceModal {
  onDismiss: () => void;
  allowance: string;
  chainId: number;
  spender: `0x${string}`;
  token: string;
}

const ChangeAllowanceModal = (props: IChangeAllowanceModal) => {
  const { switchNetwork } = useSwitchNetwork();
  const { chain } = useNetwork();
  const { address } = useAccount();

  const { data: walletClient } = useWalletClient({
    chainId: chain?.id,
  });

  const [allowance, setAllowance] = useState<string>(props.allowance);

  const { config } = usePrepareContractWrite({
    address: props.token as `0x${string}`,
    abi: erc20ABI,
    functionName: 'approve',
    chainId: chain?.id,
    account: address,
  });

  const { data, isLoading, isSuccess, write } = useContractWrite({
    address: props.token as `0x${string}`,
    abi: erc20ABI,
    functionName: 'approve',
    chainId: chain?.id,
    onSuccess(data) {
      props.onDismiss();
    },
  });

  const handleSwitchNetwork = () => {
    switchNetwork?.(props.chainId);
  };

  async function handleChangeApprove() {
    if (!address || !write) return;

    const approveAmount = ethers.utils.parseEther(allowance);
    await write({
      args: [props.spender, approveAmount as any],
    });
  }

  return (
    <Flex
      direction="column"
      customStyle="max-w-lg bg-gray-800 rounded-2xl p-5 space-y-4"
    >
      <ModalHeader
        title="Change Allowance"
        onClick={() => {
          props.onDismiss();
        }}
      />
      <Flex
        justifyContent="center"
        alignItems="center"
        customStyle="space-x-10"
      >
        <Input
          border="full"
          value={allowance}
          onChange={(e) => setAllowance(e.target.value)}
        />
        <Button
          width="sm"
          height="sm"
          onClick={() =>
            chain?.id !== props.chainId
              ? handleSwitchNetwork()
              : handleChangeApprove()
          }
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default ChangeAllowanceModal;
