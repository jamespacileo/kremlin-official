// src/server/router/index.ts
import { t } from "../trpc";
import { articleRouter } from "./article";

import { exampleRouter } from "./example";

export const appRouter = t.router({
  example: exampleRouter,
  article: articleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
