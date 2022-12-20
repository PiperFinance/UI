import { destinationToken, IToken, originToken, tokenAtom } from "@store/store";
import { Button } from "@ui/Button/Button";
import Container from "@ui/Container/Container";
import Flex from "@ui/Flex/Flex";
import { calculateNumberDecimalContract } from "@utils/bignumber";
import swap, { IRouteInfo } from "@utils/swap";
import { useAtom, useAtomValue } from "jotai";
import { Route as lifiRoute } from "@lifi/sdk";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  useAccount,
  useBalance,
  useNetwork,
  useSigner,
  useSwitchNetwork,
} from "wagmi";
import Spinner from "@ui/Spinner/Spinner";
import CurrencyInputPanel from "@components/CurrencyInputPanel";
import SwitchCurrencyInput from "@components/SwitchCurrencyInput";
import SwapRoute from "@components/SwapRoutes";
import RootLayout from "@layout/layout";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { toast } from "react-hot-toast";
import { ToastError, ToastWarning } from "@components/Toast";
import { trpc } from "@utils/trpc";
import { Skeleton } from "@ui/Skeleton";

interface ISwap {
  amountIn: string;
  fromToken: IToken;
  toToken: IToken;
  address: `0x${string}`;
}

export default function Swap() {
  const handleSwap = useMemo(() => new swap(), []);
  const tokenList = useAtomValue(tokenAtom);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [swapRoute, setSwapRoute] = useState<IRouteInfo[]>();
  const [amount, setAmount] = useState<string>();
  const [selectedRoute, setSelectedRoute] = useState<IRouteInfo>();
  const [fromToken, setFormToken] = useAtom(originToken);
  const [refRoute, setRefRoute] = useState<boolean>(false);
  const [toToken, setToToken] = useAtom(destinationToken);
  const { address } = useAccount();
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  const { data: fromTokenBalance } = useBalance({
    address: address,
    token:
      fromToken?.detail?.address.toLowerCase() ===
      "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLowerCase()
        ? undefined
        : (fromToken?.detail?.address as `0x${string}`),
    chainId: fromToken?.detail?.chainId,
    watch: true,
  });
  const { data: toTokenBalance } = useBalance({
    address: address,
    token:
      toToken?.detail?.address.toLowerCase() ===
      "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE".toLowerCase()
        ? undefined
        : (toToken?.detail?.address as `0x${string}`),
    chainId: toToken?.detail?.chainId,
    watch: true,
  });

  const { data: signer } = useSigner({
    chainId: chain?.id,
  });

  const insufficientBalance = Boolean(
    Number(fromTokenBalance?.formatted) < Number(amount)
  );

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (!amount || !fromToken || !toToken || !address) return;
      const convertedAmountIn = calculateNumberDecimalContract(
        amount,
        fromToken.detail?.decimals!
      );
      getRoute({ amountIn: convertedAmountIn, fromToken, toToken, address });
    }, 2000);

    return () => clearTimeout(delayDebounceFn);
  }, [amount, fromToken, toToken, address, refRoute]);

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
          title="Failed To Fetch Routes"
          dismiss={() => toast.dismiss(t.id)}
        />
      ));
    },
  });

  const getRoute = ({ amountIn, fromToken, toToken, address }: ISwap) => {
    mutation.mutate({
      fromToken: fromToken.detail,
      toToken: toToken.detail,
      amount: amountIn,
      address: address,
    });
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
      case "QuoteSimulationResult":
        handleSwap
          .executeRangoSwap(signer, {
            fromToken: fromToken.detail!,
            toToken: toToken.detail!,
            amount: convertedAmountIn,
            address: address,
          })
          .then((res) => {
            setIsLoading(false);
          })
          .catch((e) => {
            setIsLoading(false);
          });
        break;
      case "lifiRoute":
        handleSwap
          .executeLifiSwap(signer, response as lifiRoute)
          .then((res) => {
            setIsLoading(false);
          })
          .catch((e) => {
            setIsLoading(false);
          });
        break;
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

  return (
    <RootLayout pageName="Swap">
      <Container customStyle="h-full flex items-center justify-center">
        <Flex customStyle="max-w-lg" alignItems="center" direction="column">
          <h1 className="my-5 mx-3 text-4xl font-bold text-wheat-500">SWAP</h1>
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
            amount={selectedRoute ? selectedRoute.amountOut : ""}
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
                    !amount || !fromToken || !toToken || !address ? false : true
                  }
                  duration={1000000}
                  colors="#aaa"
                  size={15}
                  trailColor="rgba(0,0,0,0)"
                  strokeWidth={2}
                  onComplete={() => {
                    setRefRoute(!refRoute);
                    return { shouldRepeat: true };
                  }}
                />
              </SwapRoute>
            )
          )}
          {isLoading ? (
            <Button disable={true} width="half" intent="disablePrimary">
              <Flex width="fit" justifyContent="center" alignItems="center">
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
                : "Swap"}
            </Button>
          )}
        </Flex>
      </Container>
    </RootLayout>
  );
}
