import ConnectWallet from '@components/ConnectWalletButton';
import CurrencyInputPanel from '@components/CurrencyInputPanel';
import SwapRoute from '@components/SwapRoutes';
import SwitchCurrencyInput from '@components/SwitchCurrencyInput';
import { ToastError, ToastWarning } from '@components/Toast';
import { useEthersSigner } from '@hooks/useEthersSigner';
import { Route as lifiRoute } from '@lifi/sdk';
import {
  IToken,
  destinationToken,
  originToken,
  slippage,
  tokenAtom,
  userToken,
} from '@store/store';
import { Button } from '@ui/Button/Button';
import Container from '@ui/Container/Container';
import Flex from '@ui/Flex/Flex';
import { Skeleton } from '@ui/Skeleton';
import Spinner from '@ui/Spinner/Spinner';
import { calculateNumberDecimalContract } from '@utils/bignumber';
import swap from '@utils/swap/swap';
import { IRouteInfo } from '@utils/swap/types';
import { trpc } from '@utils/trpc';
import { Signer } from 'ethers';
import { useAtom, useAtomValue } from 'jotai';
import { useEffect, useMemo, useState } from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';
import { toast } from 'react-hot-toast';
import { useDebounce } from 'react-use';
import { useAccount, useBalance, useNetwork, useSwitchNetwork } from 'wagmi';

interface ISwap {
  amountIn: string;
  fromToken: IToken;
  toToken: IToken;
  address: `0x${string}`;
}

export default function Swap() {
  const [currentUserToken, setUserToken] = useAtom(userToken);

  const tokenList = useAtomValue(tokenAtom);
  const [fromToken, setFormToken] = useAtom(originToken);
  const [toToken, setToToken] = useAtom(destinationToken);
  const [currentSlippage] = useAtom(slippage);

  const [isUserConnected, setIsUserConnected] = useState<boolean>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [swapRoute, setSwapRoute] = useState<IRouteInfo[]>();
  const [amount, setAmount] = useState<string>();
  const [selectedRoute, setSelectedRoute] = useState<IRouteInfo>();
  const [refreshRoute, setRefreshRoute] = useState<boolean>(false);

  const { address, isConnected } = useAccount();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
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

  const signer = useEthersSigner();

  useEffect(() => setIsUserConnected(isConnected), [isConnected]);

  const handleSwap = useMemo(() => new swap(), []);
  const mutation = trpc.swap.routes.useMutation({
    onMutate: () => {
      setSwapRoute(undefined);
      setSelectedRoute(undefined);
    },
    onSuccess: (data) => {
      setSelectedRoute(data[0]);
      setSwapRoute(data);
    },
    onError: (error) => {
      toast.custom((t) => (
        <ToastError
          title="Failed To Fetch Routes. Please try again."
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
    },
  });

  useDebounce(
    () => {
      if (!amount || !fromToken || !toToken || !address) return;
      const convertedAmountIn = calculateNumberDecimalContract(
        amount,
        fromToken.detail?.decimals!
      );
      getRoute({ amountIn: convertedAmountIn, fromToken, toToken, address });
    },
    500,
    [amount, fromToken, toToken, address, refreshRoute]
  );

  const getRoute = ({ amountIn, fromToken, toToken, address }: ISwap) => {
    mutation.mutate({
      fromToken: fromToken.detail,
      toToken: toToken.detail,
      amount: amountIn,
      address: address,
      slippage: currentSlippage,
    });
  };

  const switchChainHook = async (
    requiredChainId: number
  ): Promise<Signer | undefined> => {
    switchNetwork?.(requiredChainId);

    return signer as unknown as Promise<Signer | undefined>;
  };

  const execute = (selectedRoute: IRouteInfo | undefined) => {
    if (
      !selectedRoute ||
      !signer ||
      !amount ||
      !fromToken ||
      !toToken ||
      !address
    )
      return;

    setIsLoading(true);
    const convertedAmountIn = calculateNumberDecimalContract(
      amount,
      fromToken.detail.decimals!
    );
    const { type, response } = selectedRoute;
    switch (type) {
      case 'QuoteSimulationResult':
        handleSwap
          .executeRangoSwap(signer, {
            fromToken: fromToken.detail!,
            toToken: toToken.detail!,
            amount: convertedAmountIn,
            address: address,
            slippage: currentSlippage,
          })
          .then((res) => {
            setIsLoading(false);
          })
          .catch((e) => {
            setIsLoading(false);
          });
        break;
      case 'lifiRoute':
        handleSwap
          .executeLifiSwap(signer, response as lifiRoute)
          .then((res) => {
            setIsLoading(false);
          })
          .catch((e) => {
            // if (
            //   e.includes("500") ||
            //   e.toLowerCase().includes("network error")
            // ) {
            //   toast.custom((t) => (
            //     <ToastWarning
            //       title="Try Again"
            //       dismiss={() => toast.dismiss(t.id)}
            //     />
            //   ));
            // }

            // if (e.includes("exchange rate")) {
            //   toast.custom((t) => (
            //     <ToastWarning
            //       title="The price has been change please press the 'Refresh' button"
            //       dismiss={() => toast.dismiss(t.id)}
            //     />
            //   ));
            // }

            setIsLoading(false);
          });
        break;
      // case 'ISwapExactInSymbiosis':
      //   handleSwap
      //     .executeSymbiosisSwap(signer, response as ISwapExactInSymbiosis)
      //     .then((res) => {
      //       setIsLoading(false);
      //     })
      //     .catch((e) => {
      //       setIsLoading(false);
      //     });
      //   break;
    }
  };

  const handleSwitchNetwork = () => {
    toast.custom((t) => (
      <ToastWarning
        title="Switch Your Network"
        dismiss={() => toast.dismiss(t.id)}
      />
    ));
    switchNetwork?.(fromToken?.detail.chainId);
  };

  const insufficientBalance = Boolean(
    Number(fromTokenBalance?.formatted) < Number(amount)
  );

  return (
    <Container customStyle="h-full flex items-center justify-center">
      <Flex customStyle="max-w-lg" alignItems="center" direction="column">
        <h1 className="mb-5 text-4xl font-bold text-wheat-300">
          SWAP & BRIDGE
        </h1>
        <CurrencyInputPanel
          tokenList={tokenList}
          selectedCurrency={fromToken}
          setToken={setFormToken as any}
          currencyBalance={fromTokenBalance?.formatted}
          setAmount={setAmount}
          amount={amount}
        />
        <SwitchCurrencyInput
          setRefreshRoute={() => setRefreshRoute(!refreshRoute)}
        />
        <CurrencyInputPanel
          tokenList={tokenList}
          setAmount={() => {}}
          selectedCurrency={toToken}
          setToken={setToToken as any}
          currencyBalance={toTokenBalance?.formatted}
          amount={selectedRoute ? selectedRoute.amountOut : ''}
          disabled
        />

        {mutation.isLoading ? (
          <Skeleton />
        ) : (
          selectedRoute &&
          swapRoute && (
            <SwapRoute
              destinationToken={toToken!}
              routes={swapRoute}
              selectedRoute={selectedRoute}
              changeRoute={setSelectedRoute}
            >
              <CountdownCircleTimer
                isPlaying={
                  !amount || !fromToken || !toToken || !address || isLoading
                    ? false
                    : true
                }
                duration={60}
                colors="#aaa"
                size={15}
                trailColor="rgba(0,0,0,0)"
                strokeWidth={2}
                onComplete={() => {
                  setRefreshRoute(!refreshRoute);
                  return { shouldRepeat: true };
                }}
              />
            </SwapRoute>
          )
        )}

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
            disable={insufficientBalance || !selectedRoute ? true : false}
            onClick={() =>
              chain?.id !== fromToken?.detail.chainId
                ? handleSwitchNetwork()
                : execute(selectedRoute!)
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
