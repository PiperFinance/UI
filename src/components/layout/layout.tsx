import ToastContainer from "@components/ToastContainer";
import WalletConnect from "@components/WalletConnect";
import { useSingUp } from "@hooks/useSingup";
import { sidebar, userToken } from "@store/store";
import Container from "@ui/Container/Container";
import Flex from "@ui/Flex/Flex";
import { useAtom } from "jotai";
import Head from "next/head";
import { FC, ReactNode, useEffect } from "react";
import { useAccount, useSignMessage } from "wagmi";
import Sidebar from "./Sidebar/Sidebar";

const RootLayout: FC<{ children: ReactNode; pageName: string }> = ({
  children,
  pageName,
}) => {
  const [, setSidebar] = useAtom(sidebar);

  const [currentUserTokenFromAtom, setUserToken] = useAtom(userToken);

  const { address, isConnected, status } = useAccount();

  const { mutate } = useSingUp();

  const { signMessage } = useSignMessage({
    message: address,
    onSuccess(data) {
      mutate({ wallet: address, signedMsg: data });
    },
  });

  useEffect(() => {
    const currentUserToken = localStorage.getItem("accessToken");
    if (!address || !isConnected || currentUserToken) return;
    signMessage();
  }, [status]);

  return (
    <Flex
      overflow="hidden"
      customStyle="h-screen bg-gray-123"
      onClick={(e) => setSidebar(false)}
    >
      <Head>
        <title>{`${pageName} |  Piper Finance`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ToastContainer />
      <Sidebar />
      <Flex direction="column" customStyle="h-screen" overflow="hidden">
        <Container>
          <Flex justifyContent="mdBetween" alignItems={"center"}>
            {/* <Bars3Icon
              className="w-8 text-wheat-300 cursor-pointer block lg:hidden"
              onClick={(e) => {
                e.stopPropagation();
                setSidebar(true);
              }}
            /> */}
            <WalletConnect />
          </Flex>
        </Container>
        <Flex overflow="yAuto">{children}</Flex>
      </Flex>
    </Flex>
  );
};

export default RootLayout;
