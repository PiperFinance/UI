import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";
import { atomsWithQuery } from "jotai-tanstack-query";
import { allTokensInOrder } from "@hooks/useTokenBalances";

export interface IToken {
  address: `0x${string}`;
  symbol: string;
  decimals: number;
  name: string;
  chainId: number;
  logoURI: string;
  coingeckoId: string;
  balance?: string;
}

export const originToken = atomWithStorage<IToken | undefined>(
  "originToken",
  undefined
);
export const destinationToken = atomWithStorage<IToken | undefined>(
  "destinationToken",
  undefined
);

export const searchAtom = atom<string>("");

export const [tokens] = atomsWithQuery<IToken[]>(() => ({
  queryKey: ["tokenList"],
  queryFn: async () => {
    const res = await fetch(
      `https://raw.githubusercontent.com/PiperFinance/CD/main/tokens/outVerified/all_tokens.json`
    );
    // const tokenList = allTokensInOrder(await res.json());
    return res.json();
  },
}));

export const tokenAtom = atom((get) => {
  const search: string = get(searchAtom).toLowerCase();
  const allTokens: IToken[] = get(tokens);
  return allTokens.filter(
    (token: IToken) =>
      token.name.toLowerCase().includes(search) ||
      token.symbol.toLowerCase().includes(search) ||
      token.address.toLowerCase().includes(search)
  );
});
