<h1 align="center">Test task - telegram bot 🤖</h1>

## Features

- Config loading and validation
- Logger
- Sessions
- Graceful shutdown
- Conversations (scenes)

## Usage

Clone this repo or generate new repo using this template via [link](https://github.com/ufame/test-task-tegram-bot.git)

```bash
git clone https://github.com/ufame/test-task-tegram-bot.git
```

## Launch

1.  Create environment variables file

```bash
cp .example.env .env
```

2.  Edit [environment variables](#environment-variables-reference) in `.env`

3.  Launch bot

    Development mode:

    ```bash
    # install dependencies
    npm i

    # run migrations
    npx prisma migrate deploy

    # run bot
    npm run dev
    ```

    Production mode:

    ```bash
    # install dependencies
    npm i --only=prod

    # run migrations
    npx prisma migrate deploy

    # build bot
    npm run build

    # run bot
    npm start
    ```

## Environment variables reference

| Variable            | Description                                                                                                                                               |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NODE_ENV | Node Environment (`development` or `production`) |
| LOG_LEVEL | Logging level (["trace", "debug", "info", "warn", "error", "fatal", "silent"]) |
| DATABASE_URL | Postgres database URL |
| BOT_TOKEN | Bot token taken from @BotFather |
| WEATHER_API_KEY | API Key taken from WeatherAPI |
| WEATHER_CITY | City to receive weather |

## Get API key from WeatherAPI

1. Register on [WeatherAPI (click)](https://www.weatherapi.com/)
2. Go to [My account (click)](https://www.weatherapi.com/my/)
3. Copy key from `API Key:` form
4. Paste key into `WEATHER_API_KEY` in you `.env`
