import { parsedUrl, dataDOM, data } from "../assets/js/config";
import { getWeather } from "./Api";
import { renderCity } from "../assets/js/render";
/*import { pushHistory, showHistory, clearLocalStorage } from "./localStorage";*/

//push current city to URL
/* function pushUrl(city) {
  let url = `index.html?city=${city}`;
  history.pushState(city, null, url);
  let parsedUrl = new URL(window.location.href);
  getUrl();
}

function getUrl(){
  window.onpopstate = function(event) {
    if(event.state !== null){
      findCity(event.state);
    }
  };
} */

function setError(error){
  let loader = document.querySelector('.loader');
  loader.classList.add('none');
  /* 
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
  } */
  console.log(error.status)
}

function findCity(city, period) {
  /*
  pushUrl(city); */
  let loader = document.querySelector('.loader');
  loader.classList.remove('none');


  console.log(period.value);

  getWeather(`/daily?city=${city}&units=${data.units}&days=${period}`)
    .then(function(city){
      if (city) {
        loader.classList.add('none');
        renderCity(city);
      }
      return city;
    })
    .catch(setError);
}

export { findCity };

