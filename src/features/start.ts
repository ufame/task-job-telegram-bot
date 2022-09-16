import { Composer } from "grammy";

import { Context } from "../types";
import { logHandle } from "../helpers/logging";
import { startKeyboard } from "../keyboards";
import { usersService } from "../services";

export const composer = new Composer<Context>();

const feature = composer.chatType("private");

feature.command("start", logHandle("handle /start"), async ctx => {
  await ctx.replyWithChatAction("typing");

  await ctx.reply(
    "Здравствуйте. Нажмите на любую интересующую Вас кнопку", {
      reply_markup: startKeyboard
    }
  );

  const userId = ctx.from.id;
  await usersService.upsertByTelegramId(userId);
});
