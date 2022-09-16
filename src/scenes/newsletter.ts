import { bot } from "../bot";
import { usersService } from "../services"
import {
  Conversation,
  Context
} from "../types"

export const newsletter = async (conversation: Conversation, ctx: Context) => {
  const users = await usersService.findMany({
    select: {
      telegramId: true
    }
  });

  if (!users) {
    return ctx.reply('В базе данных нет пользователей для рассылки');
  }

  await ctx.reply('Введите сообщение, которое хотите отправить всем пользователям.');

  const { msg: { text } } = await conversation.waitFor('message:text');

  for await (const user of users) {
    await bot.api.sendMessage(String(user.telegramId), text);
  }

  await ctx.reply('Всем пользователям успешно разослано ваше сообщение.');
}
