import { Button } from '@ui/Button/Button';
import { useConnect } from 'wagmi';

const ConnectWallet = () => {

  const { connect, connectors } = useConnect();

  return (
    <Button
      onClick={() => connectors.map((connector) => connect({ connector }))}
      width="sm"
    >
      Connect Wallet
    </Button>
  );
};

export default ConnectWallet;
