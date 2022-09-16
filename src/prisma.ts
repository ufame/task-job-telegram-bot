import { PrismaClient } from "@prisma/client";
import { logger } from "./logger";

const parseParameters = (parameters: string): unknown[] => {
  try {
    return JSON.parse(parameters);
  } catch {
    return [];
  }
};

export const prisma = new PrismaClient({
  log: [
    {
      emit: "event",
      level: "query",
    },
    {
      emit: "event",
      level: "error",
    },
    {
      emit: "event",
      level: "info",
    },
    {
      emit: "event",
      level: "warn",
    },
  ],
});

prisma.$on("query", (e: any) => {
  const parameters = parseParameters(
    e.params.replace(
      /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.?\d* UTC/g,
      (date: any) => `"${date}"`
    )
  );
  const query = e.query.replace(
    /(\?|\$\d+)/g,
    (match: any, param: any, offset: number, string: string) => {
      const parameter = JSON.stringify(parameters.shift());
      const previousChar = string.charAt(offset - 1);

      return (previousChar === "," ? " " : "") + parameter;
    }
  );

  logger.debug({
    msg: "database query",
    query,
    duration: e.duration,
  });
});

prisma.$on("error", (e: any) => {
  logger.error({
    msg: "database error",
    target: e.target,
    message: e.message,
  });
});

prisma.$on("info", (e: any) => {
  logger.info({
    msg: "database info",
    target: e.target,
    message: e.message,
  });
});

prisma.$on("warn", (e: any) => {
  logger.warn({
    msg: "database warning",
    target: e.target,
    message: e.message,
  });
});
