import { Context as DefaultContext } from "grammy";
import type { ConversationFlavor } from "@grammyjs/conversations";

import { LocalContext } from "../context";

export interface LocalContextFlavor {
  local: LocalContext;
}

export type Context = DefaultContext &
  ConversationFlavor &
  LocalContextFlavor;
