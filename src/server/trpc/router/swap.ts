import swap from '@utils/swap/swap';
import { IRouteInfo } from '@utils/swap/types';
import { z } from 'zod';
import { router, publicProcedure } from '../trpc';

const handleSwap = new swap();

const Token = z.object({
  address: z.string(),
  symbol: z.string(),
  decimals: z.number(),
  name: z.string(),
  chainId: z.number(),
  logoURI: z.string().optional(),
  coingeckoId: z.nullable(z.string()).optional(),
  tags: z.string().array().optional(),
  lifiId: z.nullable(z.string()).optional(),
  listedIn: z.string().array(),
  verify: z.boolean(),
  related: z.any().array().optional(),
});

export const swapRouter = router({
  routes: publicProcedure
    .input(
      z.object({
        fromToken: Token,
        toToken: Token,
        amount: z.string(),
        address: z.string(),
        slippage: z.number(),
      })
    )
    .mutation(async ({ input }): Promise<IRouteInfo[]> => {
      const routes = await handleSwap.getRoutes(input);
      return routes;
    }),
});
