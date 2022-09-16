import type { PrismaClient } from "@prisma/client";

export const createService = (prisma: PrismaClient) =>
  Object.assign(prisma.user, {
    findByTelegramId: (
      telegramId: number
    ) => {
      return prisma.user.findUnique({
        where: {
          telegramId: telegramId
        }
      });
    },

    upsertByTelegramId: (telegramId: number) => {
      return prisma.user.upsert({
        where: {
          telegramId,
        },
        create: {
          telegramId,
        },
        update: {},
      });
    },

    updateByTelegramId: (telegramId: number) => {
      return prisma.user.update({
        where: {
          telegramId,
        },
        data: {},
      });
    },
  });
