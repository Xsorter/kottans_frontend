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

var _config = __webpack_require__(2);

var _api = __webpack_require__(42);

var _render = __webpack_require__(43);

var _localStorage = __webpack_require__(44);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

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

__webpack_require__(36);

__webpack_require__(37);

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
      (0, _localStorage.showHistory)(_config.dataDOM.historyDOM, _config.data.historyObj, "history-item");
    }
    if (localStorage.getItem("favorites")) {
      _config.data.favoriteObj = JSON.parse(localStorage.getItem("favorites"));
      (0, _localStorage.showHistory)(_config.dataDOM.favoritesDOM, _config.data.favoriteObj, "favorite-item");
    }

    document.onclick = function (event) {
      var target = event.target;

      if (target && target === _config.dataDOM.buttonHistoryClear) {
        (0, _localStorage.clearLocalStorage)(_config.dataDOM.historyDOM, "history");
      }

      if (target && target === _config.dataDOM.buttonFavoritesClear) {
        (0, _localStorage.clearLocalStorage)(_config.dataDOM.favoritesDOM, "favorites");
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
        (0, _localStorage.pushHistory)(_config.dataDOM.historyDOM, _config.data.historyObj, "history-item", "history");
      }
      return false;
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

  function findCity(city) {
    _config.dataDOM.mainDOM.innerHTML = "";
    _config.dataDOM.titleDOM.innerHTML = "";
    _config.dataDOM.loaderDOM.classList.remove("none"); //show loader
    pushUrl(city);

    (0, _api.getWeather)("/daily?city=" + city + "&units=" + _config.data.units + "&key=" + _config.data.secretKey).then(function (body) {
      if (body) {
        (0, _render.renderCity)(body);
      };
      return body;
    }).catch(function (error) {
      _config.dataDOM.loaderDOM.classList.add('none');
      if (error.status === 204) {
        _config.dataDOM.titleDOM.insertAdjacentHTML('beforeend', "City not found. Please, try again.");
      } else if (error.status === 400) {
        _config.dataDOM.titleDOM.insertAdjacentHTML('beforeend', "Search field is empty. Please, enter city name");
      } else {
        _config.dataDOM.titleDOM.insertAdjacentHTML('beforeend', "" + error.statusText);
      }
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

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/loader.svg";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/favorites-button.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a01d.svg";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a02d.svg";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a03d.svg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a04d.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a05d.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c01d.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c02d.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c03d.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c04d.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d01d.svg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d02d.svg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d03d.svg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/f01d.svg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r01d.svg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r02d.svg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r03d.svg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r04d.svg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r05d.svg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r06d.svg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s01d.svg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s02d.svg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s03d.svg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s04d.svg";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s05d.svg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s06d.svg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t01d.svg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t02d.svg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t03d.svg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t04d.svg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t05d.svg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t06d.svg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t07d.svg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/u00d.svg";

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWeather = undefined;

var _config = __webpack_require__(2);

var BASE_URL = 'https://api.weatherbit.io/v2.0/forecast';
var getWeather = function getWeather(url) {
  return fetch("" + BASE_URL + url).then(function (response) {
    if (response.status !== 200) {
      return Promise.reject(response);
    }
    return Promise.resolve(response);
  }).then(function (response) {
    return response.json();
  });
};

exports.getWeather = getWeather;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderCity = undefined;

var _config = __webpack_require__(2);

var _localStorage = __webpack_require__(44);

/*TODO move somewhere else i guess*/
function createFavoriteButton(body) {
  _config.dataDOM.titleDOM.insertAdjacentHTML("beforeend", "Current city: " + body.city_name + " \n        <img id=\"favorites\" src=\"assets/media/favorites-button.png\">\n        ");

  document.querySelector("#favorites").addEventListener("click", function () {
    (0, _localStorage.pushHistory)(_config.dataDOM.favoritesDOM, _config.data.favoriteObj, "favorite-item", "favorites");
  });
}

//render method
//todo - refactor don't do DOM operations in loop!
function renderCity(body) {
  _config.dataDOM.loaderDOM.classList.add("none");
  createFavoriteButton(body);

  for (var i = 0; i < _config.data.period; i++) {
    _config.dataDOM.mainDOM.insertAdjacentHTML("beforeend",

    //template with weather data
    "<div class=\"main-content-box main-content-box_count-" + i + "\">\n                <div class=\"main-content-box_values\">\n                    <p>\n                        <span class=\"number-caption\">" + body.data[i].temp + "</span> " + _config.data.unitsDisplay + "\n                        <p class=\"title-caption\">avg. temp.</p> \n                    </p>\n                    <object data=\"assets/media/" + body.data[i].weather.icon + ".svg\" type=\"\"></object>\n                    <p class=\"title-caption\">" + body.data[i].weather.description + "</p> \n                </div>\n                <p class=\"date\">" + body.data[i].datetime.split("-").reverse().join(".") + "</p> \n                <p>max. temp.: " + body.data[i].max_temp + " " + _config.data.unitsDisplay + "</p>\n                <p>min. temp.: " + body.data[i].min_temp + " " + _config.data.unitsDisplay + "</p>\n                <p>feels like, max: " + body.data[i].app_max_temp + " " + _config.data.unitsDisplay + "</p>\n                <p>feels like, min: " + body.data[i].app_min_temp + " " + _config.data.unitsDisplay + "</p>\n                <p>wind: " + body.data[i].wind_spd + " m/s</p>\n                <p>precipitation: " + body.data[i].pop + " %</p>\n            </div>\n            ");
  }
}

exports.renderCity = renderCity;

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearLocalStorage = exports.showHistory = exports.pushHistory = undefined;

var _config = __webpack_require__(2);

/*create buttons to clear localstorage data*/
function clearLocalStorage(DOM, key) {
  localStorage.removeItem(key);
  DOM.innerHTML = "";
  DOM.insertAdjacentHTML("beforeend", "there are no " + key + " yet");
}

//localstorage methods for history and favorites
//TODO refactor
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

exports.pushHistory = pushHistory;
exports.showHistory = showHistory;
exports.clearLocalStorage = clearLocalStorage;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWFiYjFhMTFkMjBlMjdlMDI4NTQiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zYXNzL2FwcC5zYXNzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2xvYWRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2MwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2MwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2QwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9mMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDZkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDZkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDZkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA3ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3UwMGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbG9jYWxTdG9yYWdlLmpzIl0sIm5hbWVzIjpbIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJpbml0Iiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwiZmluZENpdHkiLCJjaXR5IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImhpc3RvcnlPYmoiLCJKU09OIiwicGFyc2UiLCJoaXN0b3J5RE9NIiwiZmF2b3JpdGVPYmoiLCJmYXZvcml0ZXNET00iLCJkb2N1bWVudCIsIm9uY2xpY2siLCJ0YXJnZXQiLCJldmVudCIsImJ1dHRvbkhpc3RvcnlDbGVhciIsImJ1dHRvbkZhdm9yaXRlc0NsZWFyIiwib25jaGFuZ2UiLCJ1bml0c0RPTSIsInVuaXRzIiwib3B0aW9ucyIsInF1ZXJ5U2VsZWN0b3IiLCJzZWxlY3RlZEluZGV4IiwidmFsdWUiLCJ1bml0c0Rpc3BsYXkiLCJwZXJpb2RET00iLCJwZXJpb2QiLCJmb3JtRE9NIiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXRET00iLCJwdXNoVXJsIiwic3RhdGUiLCJ0aXRsZSIsInVybCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJwYXJzZWRVcmwiLCJVUkwiLCJsb2NhdGlvbiIsImhyZWYiLCJtYWluRE9NIiwiaW5uZXJIVE1MIiwidGl0bGVET00iLCJsb2FkZXJET00iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzZWNyZXRLZXkiLCJ0aGVuIiwiYm9keSIsImNhdGNoIiwiZXJyb3IiLCJhZGQiLCJzdGF0dXMiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJzdGF0dXNUZXh0IiwiZGF0YURPTSIsImRhdGEiLCJCQVNFX1VSTCIsImdldFdlYXRoZXIiLCJmZXRjaCIsInJlc3BvbnNlIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc29sdmUiLCJqc29uIiwiY3JlYXRlRmF2b3JpdGVCdXR0b24iLCJjaXR5X25hbWUiLCJyZW5kZXJDaXR5IiwiaSIsInRlbXAiLCJ3ZWF0aGVyIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiZGF0ZXRpbWUiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwibWF4X3RlbXAiLCJtaW5fdGVtcCIsImFwcF9tYXhfdGVtcCIsImFwcF9taW5fdGVtcCIsIndpbmRfc3BkIiwicG9wIiwiY2xlYXJMb2NhbFN0b3JhZ2UiLCJET00iLCJrZXkiLCJyZW1vdmVJdGVtIiwicHVzaEhpc3RvcnkiLCJvYmoiLCJjc3NDbGFzcyIsImxvY2FsU3RvcmFnZUtleSIsImluZGV4T2YiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNob3dIaXN0b3J5IiwibWFwIiwicXVlcnlTZWxlY3RvckFsbCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7O0FDN0RBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOzs7OztBQUtBLENBQUMsWUFBVztBQUNWOztBQUVBQSxTQUFPQyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFNO0FBQ3BDQztBQUNELEdBRkQ7O0FBSUEsV0FBU0EsSUFB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Z0JBQVQsT0FBOEJSLFFBQTlCLEVBQTBDUyxNQUZoRCxFQUdFOUIsR0FIRixFQUlFO0FBQ0ExRCxlQUNHdUYsZ0JBREgsT0FDd0JSLFFBRHhCLEVBRUdyQixDQUZILEVBRU14RSxnQkFGTixDQUV1QixPQUZ2QixFQUVnQyxZQUFXO0FBQ3ZDLHFCQUFLSyxJQUFMLEdBQVksS0FBS3dDLFNBQWpCO0FBQ0F6QyxpQkFBUyxLQUFLeUMsU0FBZDtBQUNELE9BTEg7QUFNRDtBQUNGO0FBQ0Y7O1FBRU84QyxXLEdBQUFBLFc7UUFBYVEsVyxHQUFBQSxXO1FBQWFaLGlCLEdBQUFBLGlCIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL2FwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA5YWJiMWExMWQyMGUyN2UwMjg1NCIsImltcG9ydCBcIi4vYXNzZXRzL3Nhc3MvYXBwLnNhc3NcIjtcclxuXHJcbmltcG9ydCB7cGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhfSBmcm9tIFwiLi9hc3NldHMvanMvY29uZmlnXCI7XHJcbmltcG9ydCB7Z2V0V2VhdGhlcn0gZnJvbSBcIi4vYXNzZXRzL2pzL2FwaVwiO1xyXG5pbXBvcnQge3JlbmRlckNpdHl9IGZyb20gXCIuL2Fzc2V0cy9qcy9yZW5kZXJcIjtcclxuaW1wb3J0IHtwdXNoSGlzdG9yeSwgc2hvd0hpc3RvcnksIGNsZWFyTG9jYWxTdG9yYWdlfSBmcm9tIFwiLi9hc3NldHMvanMvbG9jYWxTdG9yYWdlXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9sb2FkZXIuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYzA0ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2QwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2QwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2QwM2Quc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9mMDFkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA1ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA2ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwNWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwNmQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDVkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDZkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDdkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdTAwZC5zdmdcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogMjAxNy5XZWF0aGVyIGFwcGxpY2F0aW9uIGJ5IEFsZXggTmVsaW4gKlxyXG4gKiBCYXNlZCBvbiB3ZWF0aGVyYml0LmlvIEFQSSAgICAgICAgICAgICAqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICBpbml0KCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvL3J1biBmZXRjaCBtZXRob2QsIHdlIGhhdmUgY2l0eSBpbiBVUkxcclxuICAgIGlmIChwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmdldChcImNpdHlcIikpIHtcclxuICAgICAgZmluZENpdHkoZGF0YS5jaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2dldCB2YWx1ZXMgZnJvbSBsb2NhbHN0b3JhZ2UsIGlmIGFueVxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlzdG9yeVwiKSkge1xyXG4gICAgICBkYXRhLmhpc3RvcnlPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlzdG9yeVwiKSk7XHJcbiAgICAgIHNob3dIaXN0b3J5KGRhdGFET00uaGlzdG9yeURPTSwgZGF0YS5oaXN0b3J5T2JqLCBcImhpc3RvcnktaXRlbVwiKTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc1wiKSkge1xyXG4gICAgICBkYXRhLmZhdm9yaXRlT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc1wiKSk7XHJcbiAgICAgIHNob3dIaXN0b3J5KGRhdGFET00uZmF2b3JpdGVzRE9NLCBkYXRhLmZhdm9yaXRlT2JqLCBcImZhdm9yaXRlLWl0ZW1cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQub25jbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ID09PSBkYXRhRE9NLmJ1dHRvbkhpc3RvcnlDbGVhcikge1xyXG4gICAgICAgIGNsZWFyTG9jYWxTdG9yYWdlKGRhdGFET00uaGlzdG9yeURPTSwgXCJoaXN0b3J5XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCA9PT0gZGF0YURPTS5idXR0b25GYXZvcml0ZXNDbGVhcikge1xyXG4gICAgICAgIGNsZWFyTG9jYWxTdG9yYWdlKGRhdGFET00uZmF2b3JpdGVzRE9NLCBcImZhdm9yaXRlc1wiKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5vbmNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ID09PSBkYXRhRE9NLnVuaXRzRE9NKSB7XHJcbiAgICAgICAgZGF0YS51bml0cyA9XHJcbiAgICAgICAgICBkYXRhRE9NLnVuaXRzRE9NLm9wdGlvbnNbXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdW5pdHNcIikuc2VsZWN0ZWRJbmRleFxyXG4gICAgICAgICAgXS52YWx1ZTtcclxuICAgICAgICBkYXRhLnVuaXRzRGlzcGxheSA9IGRhdGEudW5pdHMgPT09IFwiTVwiID8gXCJDXCIgOiBcIkZcIjtcclxuICAgICAgICBpZiAoZGF0YS5jaXR5KSB7XHJcbiAgICAgICAgICBmaW5kQ2l0eShkYXRhLmNpdHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgPT09IGRhdGFET00ucGVyaW9kRE9NKSB7XHJcbiAgICAgICAgZGF0YS5wZXJpb2QgPSArZGF0YURPTS5wZXJpb2RET00ub3B0aW9uc1tcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVyaW9kXCIpLnNlbGVjdGVkSW5kZXhcclxuICAgICAgICBdLnZhbHVlO1xyXG4gICAgICAgIGlmIChkYXRhLmNpdHkpIHtcclxuICAgICAgICAgIGZpbmRDaXR5KGRhdGEuY2l0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFET00uZm9ybURPTS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGRhdGEuY2l0eSA9IGRhdGFET00uaW5wdXRET00udmFsdWU7XHJcbiAgICAgIGZpbmRDaXR5KGRhdGEuY2l0eSk7XHJcbiAgICAgIGlmIChkYXRhLmNpdHkpIHtcclxuICAgICAgICBwdXNoSGlzdG9yeShcclxuICAgICAgICAgIGRhdGFET00uaGlzdG9yeURPTSxcclxuICAgICAgICAgIGRhdGEuaGlzdG9yeU9iaixcclxuICAgICAgICAgIFwiaGlzdG9yeS1pdGVtXCIsXHJcbiAgICAgICAgICBcImhpc3RvcnlcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL3B1c2ggY3VycmVudCBjaXR5IHRvIFVSTFxyXG4gIGZ1bmN0aW9uIHB1c2hVcmwoY2l0eSkge1xyXG4gICAgbGV0IHN0YXRlID0ge307XHJcbiAgICBsZXQgdGl0bGUgPSBjaXR5O1xyXG4gICAgbGV0IHVybCA9IGBpbmRleC5odG1sP2NpdHk9JHtjaXR5fWA7XHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSwgdGl0bGUsIHVybCk7XHJcbiAgICBsZXQgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaW5kQ2l0eShjaXR5KSB7XHJcbiAgICBkYXRhRE9NLm1haW5ET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpOyAvL3Nob3cgbG9hZGVyXHJcbiAgICBwdXNoVXJsKGNpdHkpO1xyXG5cclxuICAgIGdldFdlYXRoZXIoYC9kYWlseT9jaXR5PSR7Y2l0eX0mdW5pdHM9JHtkYXRhLnVuaXRzfSZrZXk9JHtkYXRhLnNlY3JldEtleX1gKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24oYm9keSkge1xyXG4gICAgICAgIGlmKGJvZHkpe1xyXG4gICAgICAgICAgcmVuZGVyQ2l0eShib2R5KVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICB9KVxyXG5cclxuICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcclxuICAgICAgaWYoZXJyb3Iuc3RhdHVzID09PSAyMDQpe1xyXG4gICAgICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgQ2l0eSBub3QgZm91bmQuIFBsZWFzZSwgdHJ5IGFnYWluLmApO1xyXG4gICAgICB9ZWxzZSBpZihlcnJvci5zdGF0dXMgPT09IDQwMCl7XHJcbiAgICAgICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBTZWFyY2ggZmllbGQgaXMgZW1wdHkuIFBsZWFzZSwgZW50ZXIgY2l0eSBuYW1lYCk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgJHtlcnJvci5zdGF0dXNUZXh0fWApO1xyXG4gICAgICB9XHJcbiAgICB9KTsgXHJcbiAgfVxyXG5cclxufSkoKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Fzcy9hcHAuc2Fzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvL2dldCBjdXJyZW50IHVybFxyXG5sZXQgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblxyXG4vL29iamVjdCB3aXRoIERPTSBlbGVtZW50c1xyXG5jb25zdCBkYXRhRE9NID0ge1xyXG4gIGZvcm1ET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoRm9ybVwiKSxcclxuICBpbnB1dERPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hcIiksXHJcbiAgbWFpbkRPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXdyYXBwZXJcIiksXHJcbiAgdGl0bGVET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi10aXRsZVwiKSxcclxuICB1bml0c0RPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1bml0c1wiKSxcclxuICBwZXJpb2RET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVyaW9kXCIpLFxyXG4gIGhpc3RvcnlET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1oaXN0b3J5XCIpLFxyXG4gIGZhdm9yaXRlc0RPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWZhdm9yaXRlc1wiKSxcclxuICBidXR0b25IaXN0b3J5Q2xlYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGlzdG9yeUNsZWFyXCIpLFxyXG4gIGJ1dHRvbkZhdm9yaXRlc0NsZWFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zhdm9yaXRlc0NsZWFyXCIpLFxyXG4gIGxvYWRlckRPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkZXItd3JhcHBlclwiKVxyXG59O1xyXG5cclxubGV0IGRhdGEgPSB7XHJcbiAgY2l0eTogcGFyc2VkVXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJjaXR5XCIpLFxyXG5cclxuICAvL2FwaSBrZXlcclxuICBzZWNyZXRLZXk6IFwiYzY5NzZhNGM0ZTA1NDIxZjliNGVhZWU3YTMxMWYwZGNcIixcclxuICB1bml0czogXCJNXCIsXHJcbiAgdW5pdHNEaXNwbGF5OiBcIkNcIixcclxuICBwZXJpb2Q6IDEsXHJcblxyXG4gIC8vbG9jYWxzdG9yYWdlIG9iamVjdHNcclxuICBoaXN0b3J5T2JqOiB7XHJcbiAgICBjaXR5OiBbXVxyXG4gIH0sXHJcbiAgZmF2b3JpdGVPYmo6IHtcclxuICAgIGNpdHk6IFtdXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgcGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhIH07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb25maWcuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9sb2FkZXIuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9hMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2EwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9jMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2MwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9jMDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2MwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9jMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2MwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9jMDRkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2MwNGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9kMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2QwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9kMDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2QwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9kMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2QwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9mMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2YwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDRkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwNGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDVkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwNWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDZkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwNmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDRkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwNGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDVkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwNWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDZkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwNmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDRkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwNGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDVkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwNWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDZkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwNmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDdkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwN2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS91MDBkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3UwMGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge3BhcnNlZFVybCwgZGF0YURPTSwgZGF0YX0gZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwczovL2FwaS53ZWF0aGVyYml0LmlvL3YyLjAvZm9yZWNhc3QnO1xyXG5jb25zdCBnZXRXZWF0aGVyID0gdXJsID0+IGZldGNoKGAke0JBU0VfVVJMfSR7dXJsfWApXHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSlcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpXHJcbiAgfSlcclxuICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIH0pXHJcbiAgXHJcbmV4cG9ydCB7Z2V0V2VhdGhlcn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2FwaS5qcyIsImltcG9ydCB7cGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHtwdXNoSGlzdG9yeSwgc2hvd0hpc3Rvcnl9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xyXG5cclxuLypUT0RPIG1vdmUgc29tZXdoZXJlIGVsc2UgaSBndWVzcyovIFxyXG5mdW5jdGlvbiBjcmVhdGVGYXZvcml0ZUJ1dHRvbihib2R5KSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYEN1cnJlbnQgY2l0eTogJHtib2R5LmNpdHlfbmFtZX0gXHJcbiAgICAgICAgPGltZyBpZD1cImZhdm9yaXRlc1wiIHNyYz1cImFzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1wiPlxyXG4gICAgICAgIGBcclxuICAgICk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmYXZvcml0ZXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBwdXNoSGlzdG9yeShcclxuICAgICAgICBkYXRhRE9NLmZhdm9yaXRlc0RPTSxcclxuICAgICAgICBkYXRhLmZhdm9yaXRlT2JqLFxyXG4gICAgICAgIFwiZmF2b3JpdGUtaXRlbVwiLFxyXG4gICAgICAgIFwiZmF2b3JpdGVzXCJcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4vL3JlbmRlciBtZXRob2RcclxuLy90b2RvIC0gcmVmYWN0b3IgZG9uJ3QgZG8gRE9NIG9wZXJhdGlvbnMgaW4gbG9vcCFcclxuZnVuY3Rpb24gcmVuZGVyQ2l0eShib2R5KSB7XHJcbiAgZGF0YURPTS5sb2FkZXJET00uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XHJcbiAgY3JlYXRlRmF2b3JpdGVCdXR0b24oYm9keSk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5wZXJpb2Q7IGkrKykge1xyXG4gICAgZGF0YURPTS5tYWluRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuXHJcbiAgICAgIC8vdGVtcGxhdGUgd2l0aCB3ZWF0aGVyIGRhdGFcclxuICAgICAgYDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnQtYm94IG1haW4tY29udGVudC1ib3hfY291bnQtJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tY29udGVudC1ib3hfdmFsdWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnVtYmVyLWNhcHRpb25cIj4ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkuZGF0YVtpXS50ZW1wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH08L3NwYW4+ICR7ZGF0YS51bml0c0Rpc3BsYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGUtY2FwdGlvblwiPmF2Zy4gdGVtcC48L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8b2JqZWN0IGRhdGE9XCJhc3NldHMvbWVkaWEvJHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvZHkuZGF0YVtpXS53ZWF0aGVyLmljb25cclxuICAgICAgICAgICAgICAgICAgICB9LnN2Z1wiIHR5cGU9XCJcIj48L29iamVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlLWNhcHRpb25cIj4ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9keS5kYXRhW2ldLndlYXRoZXIuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICB9PC9wPiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkYXRlXCI+JHtib2R5LmRhdGFbaV0uZGF0ZXRpbWVcclxuICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiLVwiKVxyXG4gICAgICAgICAgICAgICAgICAucmV2ZXJzZSgpXHJcbiAgICAgICAgICAgICAgICAgIC5qb2luKFwiLlwiKX08L3A+IFxyXG4gICAgICAgICAgICAgICAgPHA+bWF4LiB0ZW1wLjogJHtib2R5LmRhdGFbaV0ubWF4X3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+bWluLiB0ZW1wLjogJHtib2R5LmRhdGFbaV0ubWluX3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+ZmVlbHMgbGlrZSwgbWF4OiAke2JvZHkuZGF0YVtpXS5hcHBfbWF4X3RlbXB9ICR7XHJcbiAgICAgICAgZGF0YS51bml0c0Rpc3BsYXlcclxuICAgICAgfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPmZlZWxzIGxpa2UsIG1pbjogJHtib2R5LmRhdGFbaV0uYXBwX21pbl90ZW1wfSAke1xyXG4gICAgICAgIGRhdGEudW5pdHNEaXNwbGF5XHJcbiAgICAgIH08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD53aW5kOiAke2JvZHkuZGF0YVtpXS53aW5kX3NwZH0gbS9zPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+cHJlY2lwaXRhdGlvbjogJHtib2R5LmRhdGFbaV0ucG9wfSAlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVyQ2l0eX07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9yZW5kZXIuanMiLCJpbXBvcnQge3BhcnNlZFVybCwgZGF0YURPTSwgZGF0YX0gZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG4vKmNyZWF0ZSBidXR0b25zIHRvIGNsZWFyIGxvY2Fsc3RvcmFnZSBkYXRhKi9cclxuZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2UoRE9NLCBrZXkpIHtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gIERPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIERPTS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYHRoZXJlIGFyZSBubyAke2tleX0geWV0YCk7XHJcbn1cclxuXHJcbi8vbG9jYWxzdG9yYWdlIG1ldGhvZHMgZm9yIGhpc3RvcnkgYW5kIGZhdm9yaXRlc1xyXG4vL1RPRE8gcmVmYWN0b3JcclxuZnVuY3Rpb24gcHVzaEhpc3RvcnkoRE9NLCBvYmosIGNzc0NsYXNzLCBsb2NhbFN0b3JhZ2VLZXkpIHtcclxuICAgIGlmIChcclxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNcIikgJiZcclxuICAgICAgbG9jYWxTdG9yYWdlS2V5ID09PSBcImZhdm9yaXRlc1wiICYmXHJcbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNcIikpLmNpdHkuaW5kZXhPZihkYXRhLmNpdHkpICE9XHJcbiAgICAgICAgLTFcclxuICAgICkge1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb2JqLmNpdHkucHVzaChkYXRhLmNpdHkpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG4gICAgICBzaG93SGlzdG9yeShET00sIG9iaiwgY3NzQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2hvd0hpc3RvcnkoRE9NLCBvYmosIGNzc0NsYXNzKSB7XHJcbiAgICBET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGlmIChvYmopIHtcclxuICAgICAgb2JqLmNpdHkubWFwKGkgPT4ge1xyXG4gICAgICAgIERPTS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICAgICAgYDxsaSBjbGFzcz1cIiR7Y3NzQ2xhc3N9XCI+JHtpfTwvbGk+YFxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBmb3IgKFxyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBpIDwgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLiR7Y3NzQ2xhc3N9YCkubGVuZ3RoO1xyXG4gICAgICAgIGkrK1xyXG4gICAgICApIHtcclxuICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2Nzc0NsYXNzfWApXHJcbiAgICAgICAgICBbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBkYXRhLmNpdHkgPSB0aGlzLmlubmVySFRNTDtcclxuICAgICAgICAgICAgZmluZENpdHkodGhpcy5pbm5lckhUTUwpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCB7cHVzaEhpc3RvcnksIHNob3dIaXN0b3J5LCBjbGVhckxvY2FsU3RvcmFnZX1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvbG9jYWxTdG9yYWdlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==