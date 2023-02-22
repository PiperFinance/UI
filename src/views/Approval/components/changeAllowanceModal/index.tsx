import ModalHeader from '@components/ModalHeader';
import { Button } from '@ui/Button/Button';
import Flex from '@ui/Flex/Flex';
import Input from '@ui/Input/Input';
import { ethers } from 'ethers';
import { useState } from 'react';
import {
  erc20ABI,
  useAccount,
  useContract,
  useNetwork,
  useSigner,
  useSwitchNetwork,
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
  const { data: signer, isFetched } = useSigner({
    chainId: props.chainId,
  });

  const [allowance, setAllowance] = useState<string>(props.allowance);

  const contract = useContract({
    address: props.token,
    abi: erc20ABI,
    signerOrProvider: signer,
  });

  const handleSwitchNetwork = () => {
    switchNetwork?.(props.chainId);
  };

  async function handleChangeApprove() {
    if (!address || !contract) return;

    const approveAmount = ethers.utils.parseEther(allowance);

    await contract
      ?.approve(props.spender, approveAmount, { from: address })
      .then((res) => props.onDismiss());
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
