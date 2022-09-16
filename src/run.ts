import { bot } from "./bot";
import { prisma } from "./prisma";
import { logger } from "./logger";
import { handleGracefulShutdown } from "./helpers/graceful-shutdown";
import { InputFile } from "grammy";

// Graceful shutdown
prisma.$on("beforeExit", handleGracefulShutdown);

export const assetPythonImage = new InputFile('./assets/python.jpg');
export const assetPythonArchive = new InputFile('./assets/python.zip');

const run = async () => {
  bot.start({
    onStart: ({ username }) =>
      logger.info({
        msg: "bot running...",
        username,
      }),
  });
};

run();
