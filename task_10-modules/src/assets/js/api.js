const BASE_URL = 'https://api.weatherbit.io/v2.0/forecast';
const getWeather  = url = fetch(`${BASE_URL}${url}`).then(response => response.json());