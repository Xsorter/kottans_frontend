import {parsedUrl, dataDOM, data} from "./config";

const BASE_URL = 'https://api.weatherbit.io/v2.0/forecast';
const getWeather = url => fetch(`${BASE_URL}${url}`)
  .then(response => {
    if (response.status !== 200) {
      return Promise.reject(response)
    }
    return Promise.resolve(response)
  })
  .then(response => {
    return response.json();
  })
  
export {getWeather};

