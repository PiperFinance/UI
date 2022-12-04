import LIFI, { Route } from "@lifi/sdk";
import { SocketQuote } from "@socket.tech/socket-v2-sdk";
import { destinationToken, IToken, originToken } from "@store/store";
import { Button } from "@ui/Button/Button";
import Container from "@ui/Container/Container";
import Flex from "@ui/Flex/Flex";
import { calculateNumberDecimalContract } from "@utils/bignumber";
import swap, { foundedRoutes } from "@utils/swap";
import { useAtom } from "jotai";
import React, { useEffect, useMemo, useState } from "react";
import { useAccount, useBalance, useSigner } from "wagmi";
import CurrencyInputPanel from "../components/CurrencyInputPanel";
import RootLayout from "../components/layout/layout";

type TSwap = {
  amountIn: string;
  fromToken: IToken;
  toToken: IToken;
  address: `0x${string}`;
};

export default function Swap() {
  const handleSwap = useMemo(() => new swap(), []);

  const [swapRoute, setSwapRoute] = useState<foundedRoutes>();
  const [amount, setAmount] = useState<string>("0");
  const [receive, setReceive] = useState<string>("0");
  const [fromToken, setFormToken] = useAtom(originToken);
  const [toToken, setToToken] = useAtom(destinationToken);
  const { address, isConnecting, isDisconnected } = useAccount();
  const { data: fromTokenBalance } = useBalance({
    address: address,
    token: fromToken?.address,
    chainId: fromToken?.chainId,
    watch: true,
  });
  const { data: toTokenBalance } = useBalance({
    address: address,
    token: toToken?.address,
    chainId: toToken?.chainId,
    watch: true,
  });

  const { data: signer, isError, isLoading } = useSigner();

  useEffect(() => {
    if (!amount || !fromToken || !toToken || !address) return;
    const convertedAmountIn = calculateNumberDecimalContract(
      amount,
      fromToken.decimals
    );

    getRoute({ amountIn: convertedAmountIn, fromToken, toToken, address });
  }, [amount, fromToken, toToken, address]);

  const getRoute = async ({ amountIn, fromToken, toToken, address }: TSwap) => {
    try {
      const routes = await handleSwap.getRoutes({
        fromToken: fromToken!,
        toToken: toToken!,
        amount: amountIn,
        address: address,
      });
      setSwapRoute(routes);
      console.log(routes);
    } catch (error) {
      console.log(error);
    }
  };

  const executeRoute = async () => {
    if (!swapRoute || swapRoute?.lifi.length === 0 || !signer) return;
    const lifi = new LIFI();
    try {
      const route = await lifi.executeRoute(signer, swapRoute.lifi[0]!);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <RootLayout pageName="Swap">
      <Container customStyle="h-full flex items-center justify-center">
        <Flex
          customStyle="max-w-lg"
          position="items-center"
          direction="flex-col"
        >
          <h1 className="my-5 mx-3 text-4xl font-bold text-wheat-500">SWAP</h1>
          <CurrencyInputPanel
            selectedCurrency={fromToken}
            setToken={setFormToken}
            currencyBalance={fromTokenBalance?.formatted}
            setAmount={setAmount}
            amount={amount}
          />
          <CurrencyInputPanel
            setAmount={() => {}}
            selectedCurrency={toToken}
            setToken={setToToken}
            currencyBalance={toTokenBalance?.formatted}
            amount={receive}
            disabled
          />
          <Button onClick={executeRoute} width="half">
            Swap
          </Button>
        </Flex>
      </Container>
    </RootLayout>
  );
}
