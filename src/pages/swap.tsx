import { allTokens, balancesList, updateTokenListAtom } from "@store/store";
import Swap from "@views/Swap";
import { useAtom, useAtomValue } from "jotai";

export default function SwapPage() {
  const [, setTokens] = useAtom(allTokens);
  const { tokensList } = useAtomValue(updateTokenListAtom);
  setTokens(tokensList);
  return <Swap />;
}
