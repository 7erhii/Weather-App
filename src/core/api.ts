// Core
import axios from "axios";

const apiKey: string = "fe83e732c1de1a1158a11fa7a041f62e";

export const axiosInstance = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
  params: {
    appid: apiKey,
  },
});
