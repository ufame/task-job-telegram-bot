import { InlineKeyboard } from "grammy";
import { config } from "../config";

export const keyboard = new InlineKeyboard();

keyboard
  .text(
    `Погода в ${config.WEATHER_CITY}`,
    'weatherQuery'
  ).row();

keyboard
  .text(
    'Хочу почитать!',
    'wantReadQuery'
  ).row();

keyboard
  .text(
    'Сделать рассылку',
    'newsletterQuery'
  ).row();
