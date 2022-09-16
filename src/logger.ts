import pino, { Logger, LoggerOptions } from "pino";
import pretty from "pino-pretty";

import { config } from "./config";

const options: LoggerOptions = {
  level: config.LOG_LEVEL,
};

export let rawLogger = pino(options);

if (config.isDev) {
  rawLogger = pino(
    options,
    pretty({
      ignore: "pid,hostname",
      colorize: true,
      translateTime: true,
    })
  );
}

export const logger: Logger = new Proxy(rawLogger, {
  get(target, property, receiver) {
    return Reflect.get(target, property, receiver);
  },
});
