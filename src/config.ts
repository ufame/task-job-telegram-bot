import "dotenv/config";
import {
  cleanEnv,
  str
} from "envalid";

export const config = cleanEnv(process.env, {
  NODE_ENV: str({ choices: ["development", "production"] }),
  LOG_LEVEL: str({
    choices: ["trace", "debug", "info", "warn", "error", "fatal", "silent"],
  }),
  DATABASE_URL: str(),
  BOT_TOKEN: str(),
  WEATHER_API_KEY: str(),
  WEATHER_CITY: str()
});
