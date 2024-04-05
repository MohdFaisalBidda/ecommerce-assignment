import { Prisma } from "@prisma/client";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const authRouter = createTRPCRouter({
  register: publicProcedure
    .input(z.object({ name: z.string(), email: z.string().email(), password: z.string().min(6) }))
    .mutation(async ({ input }) => {
      const existingUser = await db.user.findUnique({ where: { email: input.email } })
      if (existingUser) {
        throw new Error('User with this email already exists!')
      }

      await db.user.create<Prisma.UserCreateInput>({
        data: {
          name: input.name,
          email: input.email,
          password: input.password
        }
      })

      return { success: true }
    }),

  login: publicProcedure
    .input(z.object({ email: z.string(), password: z.string().min(6) }))
    .mutation(async ({ input }) => {
      const existingUser = await db.user.findUnique({ where: { email: input.email } })
      if (!existingUser || existingUser.password !== input.password) {
        throw new Error('Invalid email or password')
      }

      return { success: true }
    })

  // getLatest: publicProcedure.query(({ ctx }) => {
  //   return ctx.db.post.findFirst({
  //     orderBy: { createdAt: "desc" },
  //   });
  // }),
});
