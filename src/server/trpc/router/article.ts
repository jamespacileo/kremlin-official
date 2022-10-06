import { t } from "../trpc";
import { z } from "zod";

export const articleRouter = t.router({
  // single: t.procedure
  //   .input(z.object({ text: z.string().nullish() }).nullish())
  //   .query(({ input }) => {
  //     return {
  //       greeting: `Hello ${input?.text ?? "world"}`,
  //     };
  //   }),
  getRandom: t.procedure.query(({ ctx }) => {
    // return 1 random article
    return ctx.prisma.article.findMany({
      take: 1,
      orderBy: {
        createdAt: "desc",
      },
    });
  }),
  getArticle: t.procedure.input(z.string()).query(({ ctx, input }) => {
    // return article by id
    return ctx.prisma.article.findUnique({
      where: {
        slug: input,
      },
    });
  }),
  // getAll: t.procedure.query(({ ctx }) => {
  //   return ctx.prisma.example.findMany();
  // }),
});
