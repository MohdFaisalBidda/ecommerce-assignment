import { Prisma } from "@prisma/client";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { db } from "~/server/db";

export const itemRouter = createTRPCRouter({
    markItemChecked: publicProcedure
        .input(z.object({ userId: z.string(), itemId: z.number(), name: z.string() }))
        .mutation(async ({ input }) => {
            const item = await db.item.upsert({
                where: { id: input.itemId },
                update: { checked: true, User: { connect: { email: input.userId } } },
                create: {
                    User: { connect: { email: input.userId } },
                    itemId:input.itemId,
                    checked: true,
                    name: input.name
                },
            });
            return { success: true };
        }),

    markItemUnChecked: publicProcedure
        .input(z.object({ userId: z.string(), itemId: z.number(), name: z.string() }))
        .mutation(async ({ input }) => {
            const item = await db.item.upsert({
                where: { id: input.itemId },
                update: { checked: false, User: undefined },
                create: {
                    User: { connect: { email: input.userId } },
                    itemId:input.itemId,
                    checked: false,
                    name: input.name
                },
            });
            return { success: true };
        })
});
