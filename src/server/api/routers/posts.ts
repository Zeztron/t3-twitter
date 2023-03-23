import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

const postsRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.post.findMany();
  }),
});

export default postsRouter;
