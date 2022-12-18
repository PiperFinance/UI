import { allTokens, balancesList, updateTokenListAtom } from "@store/store";
import { useAtom, useAtomValue } from "jotai";
import dynamic from "next/dynamic";

const Swap = dynamic(() => import("@views/Swap"));


export default function SwapPage() {
  const [, setTokens] = useAtom(allTokens);
  const { tokensList } = useAtomValue(updateTokenListAtom);
  setTokens(tokensList);
  return <Swap />;
}
