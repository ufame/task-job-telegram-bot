import { Middleware } from "grammy";

import { logger } from "../logger";
import { Context } from "../types";

export const middleware = (): Middleware<Context> => (ctx, next) => {
  logger.debug({
    msg: "update received",
    ...ctx.update,
  });
  return next();
};
