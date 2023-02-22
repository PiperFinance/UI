import {
  destinationToken,
  IToken,
  originToken,
  slippage,
  tokenAtom,
} from '@store/store';
import { Button } from '@ui/Button/Button';
import Container from '@ui/Container/Container';
import Flex from '@ui/Flex/Flex';
import { calculateNumberDecimalContract } from '@utils/bignumber';
import swap from '@utils/swap/swap';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect, useMemo, useState } from 'react';
import {
  useAccount,
  useBalance,
  useNetwork,
  useSigner,
  useSwitchNetwork,
} from 'wagmi';
import Spinner from '@ui/Spinner/Spinner';
import CurrencyInputPanel from '@components/CurrencyInputPanel';
import SwitchCurrencyInput from '@components/SwitchCurrencyInput';
import { toast } from 'react-hot-toast';
import { ToastError, ToastWarning } from '@components/Toast';
import { trpc } from '@utils/trpc';
import { IRouteInfo } from '@utils/swap/types';
import { Signer } from 'ethers';
import { useDebounce } from 'react-use';
import SwapSetting from './components/SwapSetting';
import ConnectWallet from '@components/ConnectWalletButton';
import { Chains } from '@constants/networkList';

interface ISwap {
  amountIn: string;
  fromToken: IToken;
  toToken: IToken;
  address: `0x${string}`;
}

export default function Swap() {
  const tokenList = useAtomValue(tokenAtom);
  const [fromToken, setFormToken] = useAtom(originToken);
  const [toToken, setToToken] = useAtom(destinationToken);
  const [isUserConnected, setIsUserConnected] = useState<boolean>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [amount, setAmount] = useState<string>();
  const [refreshRoute, setRefreshRoute] = useState<boolean>(false);

  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const {
    switchNetworkAsync,
    isSuccess,
    data,
    pendingChainId
  } = useSwitchNetwork();
  const { data: fromTokenBalance } = useBalance({
    address: address,
    token:
      fromToken?.detail?.address.toLowerCase() ===
      '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'.toLowerCase()
        ? undefined
        : (fromToken?.detail?.address as `0x${string}`),
    chainId: fromToken?.detail?.chainId,
    watch: true,
  });
  const { data: toTokenBalance } = useBalance({
    address: address,
    token:
      toToken?.detail?.address.toLowerCase() ===
      '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE'.toLowerCase()
        ? undefined
        : (toToken?.detail?.address as `0x${string}`),
    chainId: toToken?.detail?.chainId,
    watch: true,
  });

  const { data: signer, isFetched } = useSigner({
    chainId: !data ? chain?.id : data.id,
  });


  useEffect(() => setIsUserConnected(isConnected), [isConnected]);

  const handleSwap = useMemo(() => new swap(), []);

  const switchChainHook = async (
    requiredChainId: number
  ): Promise<Signer | undefined> => {
    await switchNetworkAsync?.(requiredChainId);

    if (isSuccess && isFetched) {
    console.log(data,chain,pendingChainId,isSuccess, isFetched);
      return signer as unknown as Promise<Signer | undefined>;
    }
  };

  const execute = () => {
    if (!signer || !amount || !fromToken || !toToken || !address) return;
    setIsLoading(true);
    const convertedAmountIn = calculateNumberDecimalContract(
      amount,
      fromToken.detail?.decimals!
    );
    const rpc = Chains.find((chain) => chain.id === toToken.detail.chainId);
    handleSwap
      .getRoutes(
        {
          amount: convertedAmountIn,
          fromToken: fromToken.detail,
          toToken: toToken.detail,
          address,
        },
        signer,
        rpc?.rpcUrls.default.http[0]!,
        switchChainHook
      )
      .then((res) => {
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
      });
  };

  const handleSwitchNetwork = () => {
    toast.custom((t) => (
      <ToastWarning
        title="Switch Your Network"
        dismiss={() => toast.dismiss(t.id)}
      />
    ));
    switchNetworkAsync?.(fromToken?.detail.chainId);
  };

  const insufficientBalance = Boolean(
    Number(fromTokenBalance?.formatted) < Number(amount)
  );

  return (
    <Container customStyle="h-full flex items-center justify-center">
      <Flex customStyle="max-w-lg" alignItems="center" direction="column">
        <h1 className=" text-4xl font-bold text-wheat-500">BRIDGE</h1>
        <SwapSetting setRefreshRoute={() => setRefreshRoute(!refreshRoute)} />
        <CurrencyInputPanel
          tokenList={tokenList}
          selectedCurrency={fromToken}
          setToken={setFormToken}
          currencyBalance={fromTokenBalance?.formatted}
          setAmount={setAmount}
          amount={amount}
        />
        <SwitchCurrencyInput />
        <CurrencyInputPanel
          tokenList={tokenList}
          setAmount={() => {}}
          selectedCurrency={toToken}
          setToken={setToToken}
          currencyBalance={toTokenBalance?.formatted}
          amount={amount}
          disabled
        />
        {!isUserConnected ? (
          <ConnectWallet />
        ) : isLoading ? (
          <Button disable={true} width="half" intent="disablePrimary">
            <Flex width="auto" justifyContent="center" alignItems="center">
              <Spinner />
              Processing...
            </Flex>
          </Button>
        ) : (
          <Button
            disable={insufficientBalance ? true : false}
            onClick={() =>
              chain?.id !== fromToken?.detail.chainId
                ? handleSwitchNetwork()
                : execute()
            }
            width="half"
          >
            {insufficientBalance
              ? `Insufficient ${fromToken?.detail.symbol} balance`
              : 'Swap'}
          </Button>
        )}
      </Flex>
    </Container>
  );
}
