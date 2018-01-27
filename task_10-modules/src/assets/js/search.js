import { parsedUrl, dataDOM, data } from "./config";
import { getWeather } from "./api";
import { renderCity } from "./render";
import { pushHistory, showHistory, clearLocalStorage } from "./localStorage";

//push current city to URL
function pushUrl(city) {
  let state = {};
  let title = city;
  let url = `index.html?city=${city}`;
  history.pushState(state, title, url);
  let parsedUrl = new URL(window.location.href);
}

function setError(error){
  dataDOM.loaderDOM.classList.add("none");
  if (error.status === 204) {
    dataDOM.titleDOM.insertAdjacentHTML(
      "beforeend",
      `City not found. Please, try again.`
    );
  } else if (error.status === 400) {
    dataDOM.titleDOM.insertAdjacentHTML(
      "beforeend",
      `Search field is empty. Please, enter city name`
    );
  } else {
    dataDOM.titleDOM.insertAdjacentHTML("beforeend", `${error.statusText}`);
  }
}

function findCity(city) {
  dataDOM.mainDOM.innerHTML = "";
  dataDOM.titleDOM.innerHTML = "";
  dataDOM.loaderDOM.classList.remove("none"); //show loader
  pushUrl(city);

  getWeather(`/daily?city=${city}&units=${data.units}&key=${data.secretKey}`)
    .then(function(body) {
      if (body) {
        renderCity(body);
      }
      return body;
    })
    .catch(setError);
}

export { findCity };

