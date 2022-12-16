import useTokenBalances from "@hooks/useTokenBalances";
import { allTokens, balancesList, updateTokenListAtom } from "@store/store";
import { flattenObject } from "@utils/flattenObject";
import { atom, useAtom, useAtomValue } from "jotai";
import { useHydrateAtoms } from "jotai/utils";
import { InferGetServerSidePropsType } from "next";
import { useTransition } from "react";

function BackgroundFetch() {
  return <></>;
}
export default BackgroundFetch;
