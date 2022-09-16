import { Bot, session } from "grammy";
import { limit as rateLimit } from "@grammyjs/ratelimiter";
import { apiThrottler } from "@grammyjs/transformer-throttler";
import { conversations, createConversation } from "@grammyjs/conversations";

import { Context } from "./types";
import { config } from "./config";
import {
  updatesLogger,
  setupLogger,
  setupLocalContext
} from "./middlewares";
import {
  startFeature
} from './features';
import {
  startCallbacks,
  confirmCallbacks
} from "./keyboards/callbacks";
import { handleError } from "./helpers/error-handler";
import { newsletter } from "./scenes/newsletter";

export const bot = new Bot<Context>(config.BOT_TOKEN);

// Middlewares

bot.api.config.use(apiThrottler());

if (config.isDev) {
  bot.use(updatesLogger());
}

bot.use(rateLimit());
bot.use(setupLocalContext());
bot.use(setupLogger());

bot.use(session({ initial: () => ({}) }));
bot.use(conversations());

bot.use(createConversation(newsletter));

// Handlers

bot.use(startFeature);

bot.use(startCallbacks);
bot.use(confirmCallbacks);

if (config.isDev) {
  bot.catch(handleError);
}
