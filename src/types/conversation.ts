import {
  Conversation as DefaultConversation
} from "@grammyjs/conversations/out/conversation";

import { Context } from "./context";

export type Conversation = DefaultConversation<Context>;
