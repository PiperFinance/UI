import { allTokens, balancesList, updateTokenListAtom } from "@store/store";
import Swap from "@views/Swap";
import { useAtom, useAtomValue } from "jotai";

export default function SwapPage() {
  const [, setTokens] = useAtom(allTokens);
  const [, setBalances] = useAtom(balancesList);
  const { tokensList, balances } = useAtomValue(updateTokenListAtom);
  setTokens(tokensList);
  setBalances(balances);
  return <Swap />;
}
