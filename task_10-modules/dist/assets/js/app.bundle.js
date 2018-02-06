/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _config = __webpack_require__(41);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(40);

__webpack_require__(12);

__webpack_require__(13);

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

__webpack_require__(17);

__webpack_require__(18);

__webpack_require__(19);

__webpack_require__(20);

__webpack_require__(21);

__webpack_require__(22);

__webpack_require__(23);

__webpack_require__(24);

__webpack_require__(25);

__webpack_require__(26);

__webpack_require__(27);

__webpack_require__(28);

__webpack_require__(29);

__webpack_require__(30);

__webpack_require__(31);

__webpack_require__(32);

__webpack_require__(33);

__webpack_require__(34);

__webpack_require__(35);

/******************************************
 * 2017.Weather application by Alex Nelin *
 * Based on weatherbit.io API             *
 ******************************************/

(function () {
  "use strict";

  window.addEventListener("load", function () {
    init();
  });

  function init() {
    //run fetch method, we have city in URL
    if (_config.parsedUrl.searchParams.get("city")) {
      findCity(_config.data.city);
    }

    //get values from localstorage, if any
    if (localStorage.getItem("history")) {
      _config.data.historyObj = JSON.parse(localStorage.getItem("history"));
      showHistory(_config.dataDOM.historyDOM, _config.data.historyObj, "history-item");
    }
    if (localStorage.getItem("favorites")) {
      _config.data.favoriteObj = JSON.parse(localStorage.getItem("favorites"));
      showHistory(_config.dataDOM.favoritesDOM, _config.data.favoriteObj, "favorite-item");
    }

    document.onclick = function (event) {
      var target = event.target;

      if (target && target === _config.dataDOM.buttonHistoryClear) {
        clearLocalStorage(_config.dataDOM.historyDOM, "history");
      }

      if (target && target === _config.dataDOM.buttonFavoritesClear) {
        clearLocalStorage(_config.dataDOM.favoritesDOM, "favorites");
      }
    };

    document.onchange = function (event) {
      var target = event.target;

      if (target && target === _config.dataDOM.unitsDOM) {
        _config.data.units = _config.dataDOM.unitsDOM.options[document.querySelector("#units").selectedIndex].value;
        _config.data.unitsDisplay = _config.data.units === "M" ? "C" : "F";
        if (_config.data.city) {
          findCity(_config.data.city);
        }
      }

      if (target && target === _config.dataDOM.periodDOM) {
        _config.data.period = +_config.dataDOM.periodDOM.options[document.querySelector("#period").selectedIndex].value;
        if (_config.data.city) {
          findCity(_config.data.city);
        }
      }
    };

    _config.dataDOM.formDOM.addEventListener("submit", function (e) {
      e.preventDefault();
      _config.data.city = _config.dataDOM.inputDOM.value;
      findCity(_config.data.city);
      if (_config.data.city) {
        pushHistory(_config.dataDOM.historyDOM, _config.data.historyObj, "history-item", "history");
      }
      return false;
    });
  }

  //localstorage methods for history and favorites
  function pushHistory(DOM, obj, cssClass, localStorageKey) {
    if (localStorage.getItem("favorites") && localStorageKey === "favorites" && JSON.parse(localStorage.getItem("favorites")).city.indexOf(_config.data.city) != -1) {} else {
      obj.city.push(_config.data.city);
      localStorage.setItem(localStorageKey, JSON.stringify(obj));
      showHistory(DOM, obj, cssClass);
    }
  }

  function showHistory(DOM, obj, cssClass) {
    DOM.innerHTML = "";
    if (obj) {
      obj.city.map(function (i) {
        DOM.insertAdjacentHTML("beforeend", "<li class=\"" + cssClass + "\">" + i + "</li>");
      });
      for (var i = 0; i < document.querySelectorAll("." + cssClass).length; i++) {
        document.querySelectorAll("." + cssClass)[i].addEventListener("click", function () {
          _config.data.city = this.innerHTML;
          findCity(this.innerHTML);
        });
      }
    }
  }

  /*create buttons to clear localstorage data*/

  function clearLocalStorage(DOM, key) {
    localStorage.removeItem(key);
    DOM.innerHTML = "";
    console.log(DOM);
    DOM.insertAdjacentHTML("beforeend", "there are no " + key + " yet");
  }

  function createFavoriteButton(body) {
    _config.dataDOM.titleDOM.insertAdjacentHTML("beforeend", "Current city: " + body.city_name + " \n        <img id=\"favorites\" src=\"assets/media/favorites-button.png\">\n        ");
    document.querySelector("#favorites").addEventListener("click", function () {
      pushHistory(_config.dataDOM.favoritesDOM, _config.data.favoriteObj, "favorite-item", "favorites");
    });
  }

  //push current city to URL
  function pushUrl(city) {
    var state = {};
    var title = city;
    var url = "index.html?city=" + city;
    history.pushState(state, title, url);
    var parsedUrl = new URL(window.location.href);
  }

  //render method
  function renderCity(body) {
    _config.dataDOM.loaderDOM.classList.add("none");
    createFavoriteButton(body);

    for (var i = 0; i < _config.data.period; i++) {
      _config.dataDOM.mainDOM.insertAdjacentHTML("beforeend",

      //template with weather data
      "<div class=\"main-content-box main-content-box_count-" + i + "\">\n                <div class=\"main-content-box_values\">\n                    <p>\n                        <span class=\"number-caption\">" + body.data[i].temp + "</span> " + _config.data.unitsDisplay + "\n                        <p class=\"title-caption\">avg. temp.</p> \n                    </p>\n                    <object data=\"assets/media/" + body.data[i].weather.icon + ".svg\" type=\"\"></object>\n                    <p class=\"title-caption\">" + body.data[i].weather.description + "</p> \n                </div>\n                <p class=\"date\">" + body.data[i].datetime.split("-").reverse().join(".") + "</p> \n                <p>max. temp.: " + body.data[i].max_temp + " " + _config.data.unitsDisplay + "</p>\n                <p>min. temp.: " + body.data[i].min_temp + " " + _config.data.unitsDisplay + "</p>\n                <p>feels like, max: " + body.data[i].app_max_temp + " " + _config.data.unitsDisplay + "</p>\n                <p>feels like, min: " + body.data[i].app_min_temp + " " + _config.data.unitsDisplay + "</p>\n                <p>wind: " + body.data[i].wind_spd + " m/s</p>\n                <p>precipitation: " + body.data[i].pop + " %</p>\n            </div>\n            ");
    }
  }

  function findCity(city) {
    _config.dataDOM.mainDOM.innerHTML = "";
    _config.dataDOM.titleDOM.innerHTML = "";
    _config.dataDOM.loaderDOM.classList.remove("none"); //show loader
    pushUrl(city);

    fetch("https://api.weatherbit.io/v2.0/forecast/daily?city=" + city + "&units=" + _config.data.units + "&key=" + _config.data.secretKey).then(function (response) {
      if (response.status === 204) {
        _config.dataDOM.titleDOM.insertAdjacentHTML("beforeend", "City not found. Please, try again.");
      } else if (response.status === 429) {
        _config.dataDOM.titleDOM.insertAdjacentHTML("beforeend", "API Limit reached (75 queries per 1 hour)");
      } else if (response.status === 400) {
        _config.dataDOM.titleDOM.insertAdjacentHTML("beforeend", "Search field is empty. Please, enter city name");
        return false;
      } else {
        return response.json();
      }
    }).then(function (body) {
      if (body) {
        renderCity(body);
      }
      return body;
    }).catch(function (error) {
      _config.dataDOM.loaderDOM.classList.add("none");
      console.log(error);
    });
  }
})();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/loader.svg";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/favorites-button.png";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a01d.svg";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a02d.svg";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a03d.svg";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a04d.svg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a05d.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c01d.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c02d.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c03d.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d01d.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d02d.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d03d.svg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/f01d.svg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r01d.svg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r02d.svg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r03d.svg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r04d.svg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r05d.svg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r06d.svg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s01d.svg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s02d.svg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s03d.svg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s04d.svg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s05d.svg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s06d.svg";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t01d.svg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t02d.svg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t03d.svg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t04d.svg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t05d.svg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t06d.svg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t07d.svg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/u00d.svg";

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c04d.svg";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//get current url
var parsedUrl = new URL(window.location.href);

//object with DOM elements
var dataDOM = {
  formDOM: document.querySelector("#searchForm"),
  inputDOM: document.querySelector("#search"),
  mainDOM: document.querySelector(".main-wrapper"),
  titleDOM: document.querySelector(".main-title"),
  unitsDOM: document.querySelector("#units"),
  periodDOM: document.querySelector("#period"),
  historyDOM: document.querySelector(".main-history"),
  favoritesDOM: document.querySelector(".main-favorites"),
  buttonHistoryClear: document.querySelector("#historyClear"),
  buttonFavoritesClear: document.querySelector("#favoritesClear"),
  loaderDOM: document.querySelector(".loader-wrapper")
};

var data = {
  city: parsedUrl.searchParams.get("city"),

  //api key
  secretKey: "c6976a4c4e05421f9b4eaee7a311f0dc",
  units: "M",
  unitsDisplay: "C",
  period: 1,

  //localstorage objects
  historyObj: {
    city: []
  },
  favoriteObj: {
    city: []
  }
};

exports.parsedUrl = parsedUrl;
exports.dataDOM = dataDOM;
exports.data = data;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWFkM2U5Yjk0MDViNTBlNDdhODMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zYXNzL2FwcC5zYXNzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9sb2FkZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2MwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2QwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9mMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDZkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDZkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDZkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA3ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3UwMGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29uZmlnLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0Iiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZmluZENpdHkiLCJjaXR5IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhpc3RvcnlPYmoiLCJKU09OIiwicGFyc2UiLCJzaG93SGlzdG9yeSIsImhpc3RvcnlET00iLCJmYXZvcml0ZU9iaiIsImZhdm9yaXRlc0RPTSIsImRvY3VtZW50Iiwib25jbGljayIsInRhcmdldCIsImV2ZW50IiwiYnV0dG9uSGlzdG9yeUNsZWFyIiwiY2xlYXJMb2NhbFN0b3JhZ2UiLCJidXR0b25GYXZvcml0ZXNDbGVhciIsIm9uY2hhbmdlIiwidW5pdHNET00iLCJ1bml0cyIsIm9wdGlvbnMiLCJxdWVyeVNlbGVjdG9yIiwic2VsZWN0ZWRJbmRleCIsInZhbHVlIiwidW5pdHNEaXNwbGF5IiwicGVyaW9kRE9NIiwicGVyaW9kIiwiZm9ybURPTSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0RE9NIiwicHVzaEhpc3RvcnkiLCJET00iLCJvYmoiLCJjc3NDbGFzcyIsImxvY2FsU3RvcmFnZUtleSIsImluZGV4T2YiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImlubmVySFRNTCIsIm1hcCIsImluc2VydEFkamFjZW50SFRNTCIsImkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwia2V5IiwicmVtb3ZlSXRlbSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVGYXZvcml0ZUJ1dHRvbiIsImJvZHkiLCJ0aXRsZURPTSIsImNpdHlfbmFtZSIsInB1c2hVcmwiLCJzdGF0ZSIsInRpdGxlIiwidXJsIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInBhcnNlZFVybCIsIlVSTCIsImxvY2F0aW9uIiwiaHJlZiIsInJlbmRlckNpdHkiLCJsb2FkZXJET00iLCJjbGFzc0xpc3QiLCJhZGQiLCJtYWluRE9NIiwiZGF0YSIsInRlbXAiLCJ3ZWF0aGVyIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiZGF0ZXRpbWUiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwibWF4X3RlbXAiLCJtaW5fdGVtcCIsImFwcF9tYXhfdGVtcCIsImFwcF9taW5fdGVtcCIsIndpbmRfc3BkIiwicG9wIiwicmVtb3ZlIiwiZmV0Y2giLCJzZWNyZXRLZXkiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJqc29uIiwiY2F0Y2giLCJlcnJvciIsImRhdGFET00iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQzdEQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQTs7Ozs7QUFLQSxDQUFDLFlBQVc7QUFDVjs7QUFFQUEsU0FBT0MsZ0JBQVAsQ0FBd0IsTUFBeEIsRUFBZ0MsWUFBTTtBQUNwQ0M7QUFDRCxHQUZEOztBQUlBLFdBQVNBLElBQVQsR0FBZ0I7QUFDZDtBQUNBLFFBQUksa0JBQVVDLFlBQVYsQ0FBdUJDLEdBQXZCLENBQTJCLE1BQTNCLENBQUosRUFBd0M7QUFDdENDLGVBQVMsYUFBS0MsSUFBZDtBQUNEOztBQUVEO0FBQ0EsUUFBSUMsYUFBYUMsT0FBYixDQUFxQixTQUFyQixDQUFKLEVBQXFDO0FBQ25DLG1CQUFLQyxVQUFMLEdBQWtCQyxL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QTtBQUNMLGVBQU84QyxTQUFTRSxJQUFULEVBQVA7QUFDRDtBQUNGLEtBekJILEVBMEJHSCxJQTFCSCxDQTBCUSxVQUFTcEMsSUFBVCxFQUFlO0FBQ25CLFVBQUlBLElBQUosRUFBVTtBQUNSYSxtQkFBV2IsSUFBWDtBQUNEO0FBQ0QsYUFBT0EsSUFBUDtBQUNELEtBL0JILEVBZ0NHd0MsS0FoQ0gsQ0FnQ1MsVUFBU0MsS0FBVCxFQUFnQjtBQUNyQixzQkFBUTNCLFNBQVIsQ0FBa0JDLFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQyxNQUFoQztBQUNBbkIsY0FBUUMsR0FBUixDQUFZMkMsS0FBWjtBQUNELEtBbkNIO0FBb0NEO0FBQ0YsQ0E3T0QsSTs7Ozs7O0FDckRBLHlDOzs7Ozs7QUNBQSxxRTs7Ozs7O0FDQUEsK0U7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7Ozs7QUNBQTtBQUNBLElBQUloQyxZQUFZLElBQUlDLEdBQUosQ0FBUW5FLE9BQU9vRSxRQUFQLENBQWdCQyxJQUF4QixDQUFoQjs7QUFFQTtBQUNBLElBQU04QixVQUFVO0FBQ2RsRSxXQUFTakIsU0FBU1csYUFBVCxDQUF1QixhQUF2QixDQURLO0FBRWRTLFlBQVVwQixTQUFTVyxhQUFULENBQXVCLFNBQXZCLENBRkk7QUFHZCtDLFdBQVMxRCxTQUFTVyxhQUFULENBQXVCLGVBQXZCLENBSEs7QUFJZCtCLFlBQVUxQyxTQUFTVyxhQUFULENBQXVCLGFBQXZCLENBSkk7QUFLZEgsWUFBVVIsU0FBU1csYUFBVCxDQUF1QixRQUF2QixDQUxJO0FBTWRJLGFBQVdmLFNBQVNXLGFBQVQsQ0FBdUIsU0FBdkIsQ0FORztBQU9kZCxjQUFZRyxTQUFTVyxhQUFULENBQXVCLGVBQXZCLENBUEU7QUFRZFosZ0JBQWNDLFNBQVNXLGFBQVQsQ0FBdUIsaUJBQXZCLENBUkE7QUFTZFAsc0JBQW9CSixTQUFTVyxhQUFULENBQXVCLGVBQXZCLENBVE47QUFVZEwsd0JBQXNCTixTQUFTVyxhQUFULENBQXVCLGlCQUF2QixDQVZSO0FBV2Q0QyxhQUFXdkQsU0FBU1csYUFBVCxDQUF1QixpQkFBdkI7QUFYRyxDQUFoQjs7QUFjQSxJQUFJZ0QsT0FBTztBQUNUckUsUUFBTTRELFVBQVUvRCxZQUFWLENBQXVCQyxHQUF2QixDQUEyQixNQUEzQixDQURHOztBQUdUO0FBQ0F3RixhQUFXLGtDQUpGO0FBS1RuRSxTQUFPLEdBTEU7QUFNVEssZ0JBQWMsR0FOTDtBQU9URSxVQUFRLENBUEM7O0FBU1Q7QUFDQXZCLGNBQVk7QUFDVkgsVUFBTTtBQURJLEdBVkg7QUFhVFEsZUFBYTtBQUNYUixVQUFNO0FBREs7QUFiSixDQUFYOztRQWtCUzRELFMsR0FBQUEsUztRQUFXaUMsTyxHQUFBQSxPO1FBQVN4QixJLEdBQUFBLEkiLCJmaWxlIjoiLi9hc3NldHMvanMvYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDVhZDNlOWI5NDA1YjUwZTQ3YTgzIiwiaW1wb3J0IFwiLi9hc3NldHMvc2Fzcy9hcHAuc2Fzc1wiO1xyXG5cclxuaW1wb3J0IHsgcGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhIH0gZnJvbSBcIi4vYXNzZXRzL2pzL2NvbmZpZ1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA1ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2MwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2MwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2MwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2MwNGQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDNkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvZjAxZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3IwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3IwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3IwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3IwNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3IwNWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3IwNmQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDVkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDZkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA1ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA2ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA3ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3UwMGQuc3ZnXCI7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIDIwMTcuV2VhdGhlciBhcHBsaWNhdGlvbiBieSBBbGV4IE5lbGluICpcclxuICogQmFzZWQgb24gd2VhdGhlcmJpdC5pbyBBUEkgICAgICAgICAgICAgKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgaW5pdCgpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgLy9ydW4gZmV0Y2ggbWV0aG9kLCB3ZSBoYXZlIGNpdHkgaW4gVVJMXHJcbiAgICBpZiAocGFyc2VkVXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJjaXR5XCIpKSB7XHJcbiAgICAgIGZpbmRDaXR5KGRhdGEuY2l0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXQgdmFsdWVzIGZyb20gbG9jYWxzdG9yYWdlLCBpZiBhbnlcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpc3RvcnlcIikpIHtcclxuICAgICAgZGF0YS5oaXN0b3J5T2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpc3RvcnlcIikpO1xyXG4gICAgICBzaG93SGlzdG9yeShkYXRhRE9NLmhpc3RvcnlET00sIGRhdGEuaGlzdG9yeU9iaiwgXCJoaXN0b3J5LWl0ZW1cIik7XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNcIikpIHtcclxuICAgICAgZGF0YS5mYXZvcml0ZU9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNcIikpO1xyXG4gICAgICBzaG93SGlzdG9yeShkYXRhRE9NLmZhdm9yaXRlc0RPTSwgZGF0YS5mYXZvcml0ZU9iaiwgXCJmYXZvcml0ZS1pdGVtXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50Lm9uY2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCA9PT0gZGF0YURPTS5idXR0b25IaXN0b3J5Q2xlYXIpIHtcclxuICAgICAgICBjbGVhckxvY2FsU3RvcmFnZShkYXRhRE9NLmhpc3RvcnlET00sIFwiaGlzdG9yeVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgPT09IGRhdGFET00uYnV0dG9uRmF2b3JpdGVzQ2xlYXIpIHtcclxuICAgICAgICBjbGVhckxvY2FsU3RvcmFnZShkYXRhRE9NLmZhdm9yaXRlc0RPTSwgXCJmYXZvcml0ZXNcIik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQub25jaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCA9PT0gZGF0YURPTS51bml0c0RPTSkge1xyXG4gICAgICAgIGRhdGEudW5pdHMgPVxyXG4gICAgICAgICAgZGF0YURPTS51bml0c0RPTS5vcHRpb25zW1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VuaXRzXCIpLnNlbGVjdGVkSW5kZXhcclxuICAgICAgICAgIF0udmFsdWU7XHJcbiAgICAgICAgZGF0YS51bml0c0Rpc3BsYXkgPSBkYXRhLnVuaXRzID09PSBcIk1cIiA/IFwiQ1wiIDogXCJGXCI7XHJcbiAgICAgICAgaWYgKGRhdGEuY2l0eSkge1xyXG4gICAgICAgICAgZmluZENpdHkoZGF0YS5jaXR5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ID09PSBkYXRhRE9NLnBlcmlvZERPTSkge1xyXG4gICAgICAgIGRhdGEucGVyaW9kID0gK2RhdGFET00ucGVyaW9kRE9NLm9wdGlvbnNbXHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BlcmlvZFwiKS5zZWxlY3RlZEluZGV4XHJcbiAgICAgICAgXS52YWx1ZTtcclxuICAgICAgICBpZiAoZGF0YS5jaXR5KSB7XHJcbiAgICAgICAgICBmaW5kQ2l0eShkYXRhLmNpdHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhRE9NLmZvcm1ET00uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBkYXRhLmNpdHkgPSBkYXRhRE9NLmlucHV0RE9NLnZhbHVlO1xyXG4gICAgICBmaW5kQ2l0eShkYXRhLmNpdHkpO1xyXG4gICAgICBpZiAoZGF0YS5jaXR5KSB7XHJcbiAgICAgICAgcHVzaEhpc3RvcnkoXHJcbiAgICAgICAgICBkYXRhRE9NLmhpc3RvcnlET00sXHJcbiAgICAgICAgICBkYXRhLmhpc3RvcnlPYmosXHJcbiAgICAgICAgICBcImhpc3RvcnktaXRlbVwiLFxyXG4gICAgICAgICAgXCJoaXN0b3J5XCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9sb2NhbHN0b3JhZ2UgbWV0aG9kcyBmb3IgaGlzdG9yeSBhbmQgZmF2b3JpdGVzXHJcbiAgZnVuY3Rpb24gcHVzaEhpc3RvcnkoRE9NLCBvYmosIGNzc0NsYXNzLCBsb2NhbFN0b3JhZ2VLZXkpIHtcclxuICAgIGlmIChcclxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNcIikgJiZcclxuICAgICAgbG9jYWxTdG9yYWdlS2V5ID09PSBcImZhdm9yaXRlc1wiICYmXHJcbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNcIikpLmNpdHkuaW5kZXhPZihkYXRhLmNpdHkpICE9XHJcbiAgICAgICAgLTFcclxuICAgICkge1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb2JqLmNpdHkucHVzaChkYXRhLmNpdHkpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG4gICAgICBzaG93SGlzdG9yeShET00sIG9iaiwgY3NzQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2hvd0hpc3RvcnkoRE9NLCBvYmosIGNzc0NsYXNzKSB7XHJcbiAgICBET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGlmIChvYmopIHtcclxuICAgICAgb2JqLmNpdHkubWFwKGkgPT4ge1xyXG4gICAgICAgIERPTS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICAgICAgYDxsaSBjbGFzcz1cIiR7Y3NzQ2xhc3N9XCI+JHtpfTwvbGk+YFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3IgKFxyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBpIDwgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y3NzQ2xhc3N9YCkubGVuZ3RoO1xyXG4gICAgICAgIGkrK1xyXG4gICAgICApIHtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2Nzc0NsYXNzfWApXHJcbiAgICAgICAgICBbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBkYXRhLmNpdHkgPSB0aGlzLmlubmVySFRNTDtcclxuICAgICAgICAgICAgZmluZENpdHkodGhpcy5pbm5lckhUTUwpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qY3JlYXRlIGJ1dHRvbnMgdG8gY2xlYXIgbG9jYWxzdG9yYWdlIGRhdGEqL1xyXG5cclxuICBmdW5jdGlvbiBjbGVhckxvY2FsU3RvcmFnZShET00sIGtleSkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgIERPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgY29uc29sZS5sb2coRE9NKTtcclxuICAgIERPTS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYHRoZXJlIGFyZSBubyAke2tleX0geWV0YCk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjcmVhdGVGYXZvcml0ZUJ1dHRvbihib2R5KSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYEN1cnJlbnQgY2l0eTogJHtib2R5LmNpdHlfbmFtZX0gXHJcbiAgICAgICAgPGltZyBpZD1cImZhdm9yaXRlc1wiIHNyYz1cImFzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1wiPlxyXG4gICAgICAgIGBcclxuICAgICk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zhdm9yaXRlc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHB1c2hIaXN0b3J5KFxyXG4gICAgICAgIGRhdGFET00uZmF2b3JpdGVzRE9NLFxyXG4gICAgICAgIGRhdGEuZmF2b3JpdGVPYmosXHJcbiAgICAgICAgXCJmYXZvcml0ZS1pdGVtXCIsXHJcbiAgICAgICAgXCJmYXZvcml0ZXNcIlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL3B1c2ggY3VycmVudCBjaXR5IHRvIFVSTFxyXG4gIGZ1bmN0aW9uIHB1c2hVcmwoY2l0eSkge1xyXG4gICAgbGV0IHN0YXRlID0ge307XHJcbiAgICBsZXQgdGl0bGUgPSBjaXR5O1xyXG4gICAgbGV0IHVybCA9IGBpbmRleC5odG1sP2NpdHk9JHtjaXR5fWA7XHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSwgdGl0bGUsIHVybCk7XHJcbiAgICBsZXQgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgfVxyXG5cclxuICAvL3JlbmRlciBtZXRob2RcclxuICBmdW5jdGlvbiByZW5kZXJDaXR5KGJvZHkpIHtcclxuICAgIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xyXG4gICAgY3JlYXRlRmF2b3JpdGVCdXR0b24oYm9keSk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnBlcmlvZDsgaSsrKSB7XHJcbiAgICAgIGRhdGFET00ubWFpbkRPTS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgXCJiZWZvcmVlbmRcIixcclxuXHJcbiAgICAgICAgLy90ZW1wbGF0ZSB3aXRoIHdlYXRoZXIgZGF0YVxyXG4gICAgICAgIGA8ZGl2IGNsYXNzPVwibWFpbi1jb250ZW50LWJveCBtYWluLWNvbnRlbnQtYm94X2NvdW50LSR7aX1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnQtYm94X3ZhbHVlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm51bWJlci1jYXB0aW9uXCI+JHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5LmRhdGFbaV0udGVtcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPiAke2RhdGEudW5pdHNEaXNwbGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlLWNhcHRpb25cIj5hdmcuIHRlbXAuPC9wPiBcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9iamVjdCBkYXRhPVwiYXNzZXRzL21lZGlhLyR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib2R5LmRhdGFbaV0ud2VhdGhlci5pY29uXHJcbiAgICAgICAgICAgICAgICAgICAgfS5zdmdcIiB0eXBlPVwiXCI+PC9vYmplY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZS1jYXB0aW9uXCI+JHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvZHkuZGF0YVtpXS53ZWF0aGVyLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgfTwvcD4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPiR7Ym9keS5kYXRhW2ldLmRhdGV0aW1lXHJcbiAgICAgICAgICAgICAgICAgIC5zcGxpdChcIi1cIilcclxuICAgICAgICAgICAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgICAgICAgICAgICAuam9pbihcIi5cIil9PC9wPiBcclxuICAgICAgICAgICAgICAgIDxwPm1heC4gdGVtcC46ICR7Ym9keS5kYXRhW2ldLm1heF90ZW1wfSAke2RhdGEudW5pdHNEaXNwbGF5fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPm1pbi4gdGVtcC46ICR7Ym9keS5kYXRhW2ldLm1pbl90ZW1wfSAke2RhdGEudW5pdHNEaXNwbGF5fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPmZlZWxzIGxpa2UsIG1heDogJHtib2R5LmRhdGFbaV0uYXBwX21heF90ZW1wfSAke1xyXG4gICAgICAgICAgZGF0YS51bml0c0Rpc3BsYXlcclxuICAgICAgICB9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+ZmVlbHMgbGlrZSwgbWluOiAke2JvZHkuZGF0YVtpXS5hcHBfbWluX3RlbXB9ICR7XHJcbiAgICAgICAgICBkYXRhLnVuaXRzRGlzcGxheVxyXG4gICAgICAgIH08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD53aW5kOiAke2JvZHkuZGF0YVtpXS53aW5kX3NwZH0gbS9zPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+cHJlY2lwaXRhdGlvbjogJHtib2R5LmRhdGFbaV0ucG9wfSAlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gZmluZENpdHkoY2l0eSkge1xyXG4gICAgZGF0YURPTS5tYWluRE9NLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBkYXRhRE9NLmxvYWRlckRPTS5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTsgLy9zaG93IGxvYWRlclxyXG4gICAgcHVzaFVybChjaXR5KTtcclxuXHJcbiAgICBmZXRjaChcclxuICAgICAgYGh0dHBzOi8vYXBpLndlYXRoZXJiaXQuaW8vdjIuMC9mb3JlY2FzdC9kYWlseT9jaXR5PSR7Y2l0eX0mdW5pdHM9JHtcclxuICAgICAgICBkYXRhLnVuaXRzXHJcbiAgICAgIH0ma2V5PSR7ZGF0YS5zZWNyZXRLZXl9YFxyXG4gICAgKVxyXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xyXG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwNCkge1xyXG4gICAgICAgICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgICAgICAgIGBDaXR5IG5vdCBmb3VuZC4gUGxlYXNlLCB0cnkgYWdhaW4uYFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDI5KSB7XHJcbiAgICAgICAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgICAgICAgYEFQSSBMaW1pdCByZWFjaGVkICg3NSBxdWVyaWVzIHBlciAxIGhvdXIpYFxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICAgICAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgICAgICAgYFNlYXJjaCBmaWVsZCBpcyBlbXB0eS4gUGxlYXNlLCBlbnRlciBjaXR5IG5hbWVgXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oZnVuY3Rpb24oYm9keSkge1xyXG4gICAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgICByZW5kZXJDaXR5KGJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYm9keTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XHJcbiAgICAgICAgZGF0YURPTS5sb2FkZXJET00uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9XHJcbn0pKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Fzcy9hcHAuc2Fzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9sb2FkZXIuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9hMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2EwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9jMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2MwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2YwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZjAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwN2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA3ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3UwMGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdTAwZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vZ2V0IGN1cnJlbnQgdXJsXHJcbmxldCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHJcbi8vb2JqZWN0IHdpdGggRE9NIGVsZW1lbnRzXHJcbmNvbnN0IGRhdGFET00gPSB7XHJcbiAgZm9ybURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hGb3JtXCIpLFxyXG4gIGlucHV0RE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaFwiKSxcclxuICBtYWluRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4td3JhcHBlclwiKSxcclxuICB0aXRsZURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXRpdGxlXCIpLFxyXG4gIHVuaXRzRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VuaXRzXCIpLFxyXG4gIHBlcmlvZERPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwZXJpb2RcIiksXHJcbiAgaGlzdG9yeURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWhpc3RvcnlcIiksXHJcbiAgZmF2b3JpdGVzRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tZmF2b3JpdGVzXCIpLFxyXG4gIGJ1dHRvbkhpc3RvcnlDbGVhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaXN0b3J5Q2xlYXJcIiksXHJcbiAgYnV0dG9uRmF2b3JpdGVzQ2xlYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmF2b3JpdGVzQ2xlYXJcIiksXHJcbiAgbG9hZGVyRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRlci13cmFwcGVyXCIpXHJcbn07XHJcblxyXG5sZXQgZGF0YSA9IHtcclxuICBjaXR5OiBwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmdldChcImNpdHlcIiksXHJcblxyXG4gIC8vYXBpIGtleVxyXG4gIHNlY3JldEtleTogXCJjNjk3NmE0YzRlMDU0MjFmOWI0ZWFlZTdhMzExZjBkY1wiLFxyXG4gIHVuaXRzOiBcIk1cIixcclxuICB1bml0c0Rpc3BsYXk6IFwiQ1wiLFxyXG4gIHBlcmlvZDogMSxcclxuXHJcbiAgLy9sb2NhbHN0b3JhZ2Ugb2JqZWN0c1xyXG4gIGhpc3RvcnlPYmo6IHtcclxuICAgIGNpdHk6IFtdXHJcbiAgfSxcclxuICBmYXZvcml0ZU9iajoge1xyXG4gICAgY2l0eTogW11cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBwYXJzZWRVcmwsIGRhdGFET00sIGRhdGEgfTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbmZpZy5qcyJdLCJzb3VyY2VSb290IjoiIn0=