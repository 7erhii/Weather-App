// Api
import { axiosInstance } from "./api";

// Types
import { ErrorType, WeatherDataType } from "./types";

// Utils
import {
  formatCurrentDate,
  formatTempByUnits,
  formatSpeedByUnits,
  getDayOfWeek,
} from "./utils";

// Сохраняем текущий город
let currentCityName = "Kyiv";

const setCurrentDateInfo = () => {
  const dayElement: HTMLElement = document.querySelector(".js-day-name");
  const dateElement: HTMLElement = document.querySelector(".js-day-date");
  const currentDate: Date = new Date();

  dayElement.innerHTML = formatCurrentDate(currentDate);
  dateElement.innerHTML = getDayOfWeek(currentDate);
};

const getUtilsValueFromSwitcher = (): string => {
  const switcher: HTMLInputElement =
    document.querySelector(".js-switcher-input");
  return switcher.checked ? "imperial" : "metric";
};
const getSpeedUtilsValueFromSwitcher = (): string => {
  const switcher: HTMLInputElement =
    document.querySelector(".js-switcher-input");
  return switcher.checked ? "imperial" : "metric";
};

const getWeatherByCity = async (
  cityValue: string
): Promise<WeatherDataType | ErrorType> => {
  try {
    const weekWeather = await axiosInstance.get("/forecast", {
      params: {
        q: cityValue,
        units: getUtilsValueFromSwitcher(),
      },
    });

    const dayWeather = await axiosInstance.get("/weather", {
      params: {
        q: cityValue,
        units: getUtilsValueFromSwitcher(),
      },
    });

    const { city } = weekWeather.data;
    const { main, wind, weather } = dayWeather.data;

    const formatData: WeatherDataType = {
      city: {
        country: city.country,
        name: city.name,
        coord: {
          lat: city.coord.lat,
          lon: city.coord.lon,
        },
        sunrise: city.sunrise,
        sunset: city.sunset,
      },
      info: {
        description: weather[0].description,
        icon: weather[0].icon,
        temp: {
          temp: main.temp,
          temp_max: main.temp_max,
          temp_min: main.temp_min,
          feels_like: main.feels_like,
        },
        wind: {
          speed: wind.speed,
          deg: wind.deg,
          gust: wind.gust,
        },
      },
    };

    currentCityName = formatData.city.name;

    return formatData;
  } catch (error) {
    return error.response.data;
  }
};

const renderWeatherData = (data: WeatherDataType) => {
  // Заполняем город
  const cityName = document.querySelector(".js-city-name");
  cityName.innerHTML = data.city.name + ", " + data.city.country;

  // Заполняем температуру
  const cityTemp = document.querySelector(".js-city-temp");

  const units = getUtilsValueFromSwitcher();
  cityTemp.innerHTML = formatTempByUnits(data.info.temp.temp, units);

  // Заполняем статус погоды
  const cityWeatherStatus = document.querySelector(".js-city-weather-status");
  cityWeatherStatus.innerHTML = data.info.description;

  // Заполняем скорость ветра 3 пункта
  const speedUnits = getSpeedUtilsValueFromSwitcher();

  const windSpeed = document.querySelector(".js-wind-speed");
  const windDirection = document.querySelector(".js-wind-direction");
  const windGust = document.querySelector(".js-wind-gust");

  windSpeed.innerHTML = formatSpeedByUnits(data.info.wind.speed, speedUnits);
  windDirection.innerHTML = String(data.info.wind.deg) + "\u00B0";
  windGust.innerHTML = formatSpeedByUnits(data.info.wind.gust, speedUnits);

  // Заполняем дополнительную информацию о температуре 4 блока
  const cityCurrentTemp = document.querySelector(".js-city-curr-temp");
  const cityMaxTemp = document.querySelector(".js-city-max-temp");
  const cityMinTemp = document.querySelector(".js-city-min-temp");
  const cityFellsTemp = document.querySelector(".js-city-fells-temp");

  cityCurrentTemp.innerHTML = formatTempByUnits(data.info.temp.temp, units);
  cityMaxTemp.innerHTML = formatTempByUnits(data.info.temp.temp_max, units);
  cityMinTemp.innerHTML = formatTempByUnits(data.info.temp.temp_min, units);
  cityFellsTemp.innerHTML = formatTempByUnits(data.info.temp.feels_like, units);

  // Добавляем иконку
  const weatherIcon: HTMLImageElement =
    document.querySelector(".js-weather-icon");
  weatherIcon.src = `https://openweathermap.org/img/wn/${data.info.icon}@2x.png`;
};

const getWeatherByCityName = async (cityValue: string) => {
  const searchInputErrorMessage: HTMLElement = document.querySelector(
    ".js-search-input-error-message"
  );

  if (cityValue) {
    searchInputErrorMessage.style.display = "none";

    const data = await getWeatherByCity(cityValue);

    if ("cod" in data && data.cod === "404") {
      searchInputErrorMessage.innerHTML = "city not found";
      searchInputErrorMessage.style.display = "block";
      return;
    }

    if ("info" in data && "city" in data) {
      renderWeatherData(data);
    }
  } else {
    searchInputErrorMessage.innerHTML = "please enter a city";
    searchInputErrorMessage.style.display = "block";
  }
};

const searchInitEvent = () => {
  const searchBtn: HTMLElement = document.querySelector(".js-search-button");
  const searchInput: HTMLInputElement =
    document.querySelector(".js-search-input");

  searchBtn.addEventListener("click", async () => {
    const cityValue = searchInput.value;
    await getWeatherByCityName(cityValue);
  });

  searchInput.addEventListener("keydown", async (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      const cityValue = searchInput.value;
      await getWeatherByCityName(cityValue);
    }
  });
};

const switcherInitEvent = () => {
  const switcher: HTMLInputElement =
    document.querySelector(".js-switcher-input");

  switcher.addEventListener("change", async () => {
    getWeatherByCityName(currentCityName);
  });
};

const initApp = () => {
  // Добавляем на страницу текущую дату
  setCurrentDateInfo();

  // Инициализируем событие поиска и клика на кнопку
  searchInitEvent();
  // Инициилизируем свитчер
  switcherInitEvent();

  // Вызывает функцию по умолчанию для города Киев
  getWeatherByCityName(currentCityName);
};

initApp();
