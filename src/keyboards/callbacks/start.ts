import { Composer } from "grammy";

import { Context } from "../../types";
import { logHandle } from "../../helpers/logging";
import {
  assetPythonArchive,
  assetPythonImage
} from "../../run";
import { confirmKeyboard } from "..";
import { getFormatedWeather } from "../../services/weather";

export const composer = new Composer<Context>();

composer.callbackQuery('weatherQuery', logHandle('callbackQuery: weather'), async ctx => {
  await ctx.replyWithChatAction("typing");

  const formatedWeather = await getFormatedWeather();

  await ctx.reply(formatedWeather);

  await ctx.answerCallbackQuery(); // remove loading animation
});

composer.callbackQuery('wantReadQuery', logHandle('callbackQuery: wantRead'), async ctx => {
  await ctx.replyWithChatAction("typing");

  await ctx.replyWithPhoto(assetPythonImage, {
    caption: 'Идеальный карманный справочник для быстрого ознакомления с особенностями работы разработчиков на Python.' +
      'Вы найдете море краткой информации о типах и операторах в Python, ' + 
      'именах специальных методов, встроенных функциях, исключениях и других часто используемых стандартных модулях.'
  });

  await ctx.replyWithDocument(assetPythonArchive);

  await ctx.answerCallbackQuery(); // remove loading animation
});

composer.callbackQuery('newsletterQuery', logHandle('callbackQuery: newsletter'), async ctx => {
  await ctx.reply('Вы выбрали рассылку всем пользователям. Вы уверены что хотите это сделать?', {
    reply_markup: confirmKeyboard
  });

  await ctx.answerCallbackQuery(); // remove loading animation
});
