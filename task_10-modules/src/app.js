import "./assets/sass/app.sass";

import {parsedUrl, dataDOM, data} from "./assets/js/config";
import {getWeather} from "./assets/js/api";
import {renderCity} from "./assets/js/render";
import {pushHistory, showHistory, clearLocalStorage} from "./assets/js/localStorage";
import {findCity} from "./assets/js/search";

import "./assets/media/loader.svg";
import "./assets/media/favorites-button.png";

import "./assets/media/icons/a01d.svg";
import "./assets/media/icons/a02d.svg";
import "./assets/media/icons/a03d.svg";
import "./assets/media/icons/a04d.svg";
import "./assets/media/icons/a05d.svg";

import "./assets/media/icons/c01d.svg";
import "./assets/media/icons/c02d.svg";
import "./assets/media/icons/c03d.svg";
import "./assets/media/icons/c04d.svg";

import "./assets/media/icons/d01d.svg";
import "./assets/media/icons/d02d.svg";
import "./assets/media/icons/d03d.svg";

import "./assets/media/icons/f01d.svg";

import "./assets/media/icons/r01d.svg";
import "./assets/media/icons/r02d.svg";
import "./assets/media/icons/r03d.svg";
import "./assets/media/icons/r04d.svg";
import "./assets/media/icons/r05d.svg";
import "./assets/media/icons/r06d.svg";

import "./assets/media/icons/s01d.svg";
import "./assets/media/icons/s02d.svg";
import "./assets/media/icons/s03d.svg";
import "./assets/media/icons/s04d.svg";
import "./assets/media/icons/s05d.svg";
import "./assets/media/icons/s06d.svg";

import "./assets/media/icons/t01d.svg";
import "./assets/media/icons/t02d.svg";
import "./assets/media/icons/t03d.svg";
import "./assets/media/icons/t04d.svg";
import "./assets/media/icons/t05d.svg";
import "./assets/media/icons/t06d.svg";
import "./assets/media/icons/t07d.svg";

import "./assets/media/icons/u00d.svg";

/******************************************
 * 2017.Weather application by Alex Nelin *
 * Based on weatherbit.io API             *
 ******************************************/

(function() {
  "use strict";

  window.addEventListener("load", () => {
    init();
  });

  function init() {
    //run fetch method, we have city in URL
    if (parsedUrl.searchParams.get("city")) {
      findCity(data.city);
    }

    //get values from localstorage, if any
    if (localStorage.getItem("history")) {
      data.historyObj = JSON.parse(localStorage.getItem("history"));
      showHistory(dataDOM.historyDOM, data.historyObj, "history-item");
    }
    if (localStorage.getItem("favorites")) {
      data.favoriteObj = JSON.parse(localStorage.getItem("favorites"));
      showHistory(dataDOM.favoritesDOM, data.favoriteObj, "favorite-item");
    }

    document.onclick = event => {
      let target = event.target;

      if (target && target === dataDOM.buttonHistoryClear) {
        clearLocalStorage(dataDOM.historyDOM, "history");
      }

      if (target && target === dataDOM.buttonFavoritesClear) {
        clearLocalStorage(dataDOM.favoritesDOM, "favorites");
      }
    };

    document.onchange = event => {
      let target = event.target;

      if (target && target === dataDOM.unitsDOM) {
        data.units =
          dataDOM.unitsDOM.options[
            document.querySelector("#units").selectedIndex
          ].value;
        data.unitsDisplay = data.units === "M" ? "C" : "F";
        if (data.city) {
          findCity(data.city);
        }
      }

      if (target && target === dataDOM.periodDOM) {
        data.period = +dataDOM.periodDOM.options[
          document.querySelector("#period").selectedIndex
        ].value;
        if (data.city) {
          findCity(data.city);
        }
      }
    };

    dataDOM.formDOM.addEventListener("submit", e => {
      e.preventDefault();
      data.city = dataDOM.inputDOM.value;
      findCity(data.city);
      if (data.city) {
        pushHistory(
          dataDOM.historyDOM,
          data.historyObj,
          "history-item",
          "history"
        );
      }
      return false;
    });
  }

  //push current city to URL
  

})();

