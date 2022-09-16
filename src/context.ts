import { AsyncLocalStorage } from "async_hooks";
import { Logger } from "pino";

// @ts-ignore
import type { User } from '@prisma/client';

export interface LocalContext {
  user?: User;
  logger?: Logger;
}

export const context = new AsyncLocalStorage<LocalContext>();
