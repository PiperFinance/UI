import { router } from "../trpc";
import { swapRouter } from "./swap";

export const appRouter = router({
  swap: swapRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
