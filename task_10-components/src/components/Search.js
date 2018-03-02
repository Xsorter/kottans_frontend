import { getWeather } from "./Api";
import { renderCity } from "./RenderWeather";

function setError(error) {
  let loader = document.querySelector(".loader");
  loader.classList.add("none");
  let host = document.getElementById("main");

  if (error.status === 204) {
    host.insertAdjacentHTML(
      "beforeend",
      `<p class="error">City not found. Please, try again.</p>`
    );
  } else if (error.status === 400) {
    host.insertAdjacentHTML(
      "beforeend",
      `<p class="error">Search field is empty. Please, enter city name</p>`
    );
  } else {
    host.insertAdjacentHTML(
      "beforeend",
      `<p class="error">${error.statusText}</p>`
    );
  }
}

function findCity(city, period, units) {
  let loader = document.querySelector(".loader");
  loader.classList.remove("none");

  getWeather(`/daily?city=${city}&units=${units}&days=${period}`)
    .then(function(city) {
      if (city) {
        loader.classList.add("none");
        renderCity(city, units);
      }
      return city;
    })
    .catch(setError); 
}

export { findCity };

