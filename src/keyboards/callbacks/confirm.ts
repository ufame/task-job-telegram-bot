import { Composer } from "grammy";

import { Context } from "../../types";
import { logHandle } from "../../helpers/logging";

export const composer = new Composer<Context>();

composer.callbackQuery('confirmQuery', logHandle('callbackQuery: confirm'), async ctx => {
  await ctx.conversation.enter('newsletter');
  await ctx.deleteMessage();
});

composer.callbackQuery('declineQuery', logHandle('callbackQuery: decline'), async ctx => {
  await ctx.reply('Рассылка отменена');
  await ctx.deleteMessage();
});
