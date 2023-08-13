export type Coord = {
  lat: number;
  lon: number;
};

export type Temp = {
  temp: number;
  temp_max: number;
  temp_min: number;
  feels_like: number;
};

export type Wind = {
  speed: number;
  deg: number;
  gust: number;
};

export type CityInfo = {
  country: string;
  name: string;
  coord: Coord;
  sunrise: number;
  sunset: number;
};

export type WeatherInfo = {
  description: string;
  icon: string;
  temp: Temp;
  wind: Wind;
};

export type WeatherDataType = {
  city: CityInfo;
  info: WeatherInfo;
};

export type ErrorType = {
  cod: string;
  message: string;
};
