const BASE_URL = "https://api.weatherbit.io/v2.0/forecast";
const KEY = "c6976a4c4e05421f9b4eaee7a311f0dc";

const getWeather = url =>
  fetch(`${BASE_URL}${url}&key=${KEY}`)
    .then(response => {
      if (response.status !== 200) {
        return Promise.reject(response);
      }
      return Promise.resolve(response);
    })
    .then(response => {
      return response.json();
    });

export { getWeather };
