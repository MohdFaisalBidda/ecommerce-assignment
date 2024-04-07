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
                    // Set any initial values for the item if needed
                    // Assuming itemId is unique
                    User: { connect: { email: input.userId } },
                    // userId: input.userId,
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
                    // Set any initial values for the item if needed
                    // Assuming itemId is unique
                    User: { connect: { email: input.userId } },
                    // userId: input.userId,
                    itemId:input.itemId,
                    checked: false,
                    name: input.name
                },
            });
            return { success: true };
        })
});
