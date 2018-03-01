import {parsedUrl, dataDOM, data} from "./config";
import {pushHistory, showHistory} from "./localStorage";

import "../media/icons/a01d.svg";
import "../media/icons/a02d.svg";
import "../media/icons/a03d.svg";
import "../media/icons/a04d.svg";
import "../media/icons/a05d.svg";

import "../media/icons/c01d.svg";
import "../media/icons/c02d.svg";
import "../media/icons/c03d.svg";
import "../media/icons/c04d.svg";

import "../media/icons/d01d.svg";
import "../media/icons/d02d.svg";
import "../media/icons/d03d.svg";

import "../media/icons/f01d.svg";

import "../media/icons/r01d.svg";
import "../media/icons/r02d.svg";
import "../media/icons/r03d.svg";
import "../media/icons/r04d.svg";
import "../media/icons/r05d.svg";
import "../media/icons/r06d.svg";

import "../media/icons/s01d.svg";
import "../media/icons/s02d.svg";
import "../media/icons/s03d.svg";
import "../media/icons/s04d.svg";
import "../media/icons/s05d.svg";
import "../media/icons/s06d.svg";

import "../media/icons/t01d.svg";
import "../media/icons/t02d.svg";
import "../media/icons/t03d.svg";
import "../media/icons/t04d.svg";
import "../media/icons/t05d.svg";
import "../media/icons/t06d.svg";
import "../media/icons/t07d.svg";

import "../media/icons/u00d.svg";

class Render{
  constructor(){
    this.host = document.createElement('main');
    this.host.id = "main";

  }

  meth(){
    console.log('222')
  }

  render() {
    this.host.innerHTML = ``
    return this.host
  }

}

/* function addFavoriteButton(body) {
    dataDOM.titleDOM.insertAdjacentHTML(
      "beforeend",
      `Current city: ${body.city_name} 
        <img id="favorites" src="assets/media/favorites-button.png">
        `
    );

    document.querySelector("#favorites").addEventListener("click", function() {
      pushHistory(
        dataDOM.favoritesDOM,
        data.favoriteObj,
        "favorite-item",
        "favorites"
      );
    });
  } */

//render method
function renderCity(city) {
  /* dataDOM.loaderDOM.classList.add("none"); */
  /* addFavoriteButton(body); */

  //create container for inserting data from loop
  
  let mainElement = document.getElementById('main');
  let wrapperElement = document.createElement('div');
  wrapperElement.classList.add('wrapper');
  
  let documentFragment = document.createDocumentFragment();
  let mainWrapper = document.querySelector('.location-wrapper');

  for (let i=0; i<city.data.length; i++) {
    let contentWrapper = document.createElement("div");
    contentWrapper.className = "content";
    contentWrapper.insertAdjacentHTML("beforeend", 
      `
        <div class="content__values">
          <p>
            <span class="caption__number">${city.data[i].temp}</span> ${data.unitsDisplay}
            <p class="caption__title">avg. temp.</p> 
          </p>
          <object data="assets/media/${city.data[i].weather.icon}.svg" type="">
          </object>
          <p class="caption__title">${city.data[i].weather.description}</p> 
        </div>
        <p class="date">${city.data[i].datetime
          .split("-")
          .reverse()
          .join(".")}
        </p>  
        <p>max. temp.: ${city.data[i].max_temp} ${data.unitsDisplay}</p>
        <p>min. temp.: ${city.data[i].min_temp} ${data.unitsDisplay}</p>
        <p>feels like, max: ${city.data[i].app_max_temp} ${data.unitsDisplay}</p>
        <p>feels like, min: ${city.data[i].app_min_temp} ${data.unitsDisplay}</p>
        <p>wind: ${city.data[i].wind_spd} m/s</p>
        <p>precipitation: ${city.data[i].pop} %</p>
      `
    );
    documentFragment.appendChild(contentWrapper);
  }

  
  
  wrapperElement.appendChild(documentFragment);
  mainElement.appendChild(wrapperElement);
  


  

}

export {renderCity};
export default Render;

