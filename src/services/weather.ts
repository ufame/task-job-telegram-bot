import axios from "axios";

import { config } from "../config";

const WEATHER_RESPONSE_URL = `http://api.weatherapi.com/v1/current.json?key=${config.WEATHER_API_KEY}&q=${config.WEATHER_CITY}&aqi=no`;

export const getFormatedWeather = async (): Promise<string> => {
  const res = await axios.get(WEATHER_RESPONSE_URL);

  if (res.status !== 200) {
    return 'Неудалось получить информацию о погоде';
  }

  let formatedData = `Погода в ${config.WEATHER_CITY}:\n`;
  formatedData += `Температура воздуха: ${res.data.current.temp_c}\n`;
  formatedData += `Скорость ветра (км\ч): ${res.data.current.wind_kph}\n`;
  formatedData += `Давление: ${res.data.current.pressure_mb} миллиметров ртутного столба`;

  return formatedData;
};
