import { InlineKeyboard } from "grammy";

export const keyboard = new InlineKeyboard();

keyboard
  .text(
    'Уверен',
    'confirmQuery'
  ).row();

keyboard
  .text(
    'Отмена',
    'declineQuery'
  ).row();
