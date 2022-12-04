import allTokens from "@constants/tokenList.json";
import useTokenBalances from "@hooks/useTokenBalances";
import { useAtom } from "jotai";
import { tokenList } from "@store/store";
import { useEffect } from "react";

function ERC20Balance() {
  const [tokens, setTokens] = useAtom(tokenList);

  const fullTokenList = useTokenBalances(allTokens);

  useEffect(() => {
    setTokens(fullTokenList);
  }, [fullTokenList]);

  return <></>;
}
export default ERC20Balance;
