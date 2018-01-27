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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearLocalStorage = exports.showHistory = exports.pushHistory = undefined;

var _config = __webpack_require__(0);

var _search = __webpack_require__(4);

/*clear localstorage data*/
function clearLocalStorage(DOM, key) {
  localStorage.removeItem(key);
  DOM.innerHTML = "";
  DOM.insertAdjacentHTML("beforeend", "there are no " + key + " yet");
}

//localstorage methods for history and favorites
//TODO refactor
function pushHistory(DOM, storageObject, cssClass, localStorageKey) {
  if (localStorage.getItem("favorites") && localStorageKey === "favorites" && JSON.parse(localStorage.getItem("favorites")).city.indexOf(_config.data.city) != -1) {} else {
    storageObject.city.push(_config.data.city);
    localStorage.setItem(localStorageKey, JSON.stringify(storageObject));
    showHistory(DOM, storageObject, cssClass);
  }
}

function showHistory(DOM, storageObject, cssClass) {
  DOM.innerHTML = "";
  if (storageObject) {

    storageObject.city.map(function (i) {
      DOM.insertAdjacentHTML("beforeend", "<li class=\"" + cssClass + "\">" + i + "</li>");
    });

    var hystoryItem = document.querySelector('.main-sidebar');

    hystoryItem.onclick = function (event) {
      var target = event.target;
      if (target && target.tagName === 'LI') {
        _config.data.city = target.innerHTML;
        (0, _search.findCity)(target.innerHTML);
      }
    };
  }
}

exports.pushHistory = pushHistory;
exports.showHistory = showHistory;
exports.clearLocalStorage = clearLocalStorage;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getWeather = undefined;

var _config = __webpack_require__(0);

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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderCity = undefined;

var _config = __webpack_require__(0);

var _localStorage = __webpack_require__(1);

/*TODO move somewhere else i guess*/
function addFavoriteButton(body) {
  _config.dataDOM.titleDOM.insertAdjacentHTML("beforeend", "Current city: " + body.city_name + " \n        <img id=\"favorites\" src=\"assets/media/favorites-button.png\">\n        ");

  document.querySelector("#favorites").addEventListener("click", function () {
    (0, _localStorage.pushHistory)(_config.dataDOM.favoritesDOM, _config.data.favoriteObj, "favorite-item", "favorites");
  });
}

//render method
//todo - refactor don't do DOM operations in loop!
function renderCity(body) {
  _config.dataDOM.loaderDOM.classList.add("none");
  addFavoriteButton(body);

  for (var i = 0; i < _config.data.period; i++) {
    _config.dataDOM.mainDOM.insertAdjacentHTML("beforeend",

    //template with weather data
    "<div class=\"main-content-box main-content-box_count-" + i + "\">\n                <div class=\"main-content-box_values\">\n                    <p>\n                        <span class=\"number-caption\">" + body.data[i].temp + "</span> " + _config.data.unitsDisplay + "\n                        <p class=\"title-caption\">avg. temp.</p> \n                    </p>\n                    <object data=\"assets/media/" + body.data[i].weather.icon + ".svg\" type=\"\"></object>\n                    <p class=\"title-caption\">" + body.data[i].weather.description + "</p> \n                </div>\n                <p class=\"date\">" + body.data[i].datetime.split("-").reverse().join(".") + "</p> \n                <p>max. temp.: " + body.data[i].max_temp + " " + _config.data.unitsDisplay + "</p>\n                <p>min. temp.: " + body.data[i].min_temp + " " + _config.data.unitsDisplay + "</p>\n                <p>feels like, max: " + body.data[i].app_max_temp + " " + _config.data.unitsDisplay + "</p>\n                <p>feels like, min: " + body.data[i].app_min_temp + " " + _config.data.unitsDisplay + "</p>\n                <p>wind: " + body.data[i].wind_spd + " m/s</p>\n                <p>precipitation: " + body.data[i].pop + " %</p>\n            </div>\n            ");
  }
}

exports.renderCity = renderCity;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findCity = undefined;

var _config = __webpack_require__(0);

var _api = __webpack_require__(2);

var _render = __webpack_require__(3);

var _localStorage = __webpack_require__(1);

//push current city to URL
function pushUrl(city) {
  var url = "index.html?city=" + city;
  history.pushState(null, null, url);
  var parsedUrl = new URL(window.location.href);
}

function setError(error) {
  _config.dataDOM.loaderDOM.classList.add("none");
  if (error.status === 204) {
    _config.dataDOM.titleDOM.insertAdjacentHTML("beforeend", "City not found. Please, try again.");
  } else if (error.status === 400) {
    _config.dataDOM.titleDOM.insertAdjacentHTML("beforeend", "Search field is empty. Please, enter city name");
  } else {
    _config.dataDOM.titleDOM.insertAdjacentHTML("beforeend", "" + error.statusText);
  }
}

function findCity(city) {
  _config.dataDOM.mainDOM.innerHTML = "";
  _config.dataDOM.titleDOM.innerHTML = "";
  _config.dataDOM.loaderDOM.classList.remove("none"); //show loader
  pushUrl(city);

  (0, _api.getWeather)("/daily?city=" + city + "&units=" + _config.data.units + "&key=" + _config.data.secretKey).then(function (body) {
    if (body) {
      (0, _render.renderCity)(body);
    }
    return body;
  }).catch(setError);
}

exports.findCity = findCity;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

var _config = __webpack_require__(0);

var _api = __webpack_require__(2);

var _render = __webpack_require__(3);

var _localStorage = __webpack_require__(1);

var _search = __webpack_require__(4);

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

__webpack_require__(38);

__webpack_require__(39);

__webpack_require__(40);

__webpack_require__(41);

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
      (0, _search.findCity)(_config.data.city);
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
          (0, _search.findCity)(_config.data.city);
        }
      }

      if (target && target === _config.dataDOM.periodDOM) {
        _config.data.period = +_config.dataDOM.periodDOM.options[document.querySelector("#period").selectedIndex].value;
        if (_config.data.city) {
          (0, _search.findCity)(_config.data.city);
        }
      }
    };

    _config.dataDOM.formDOM.addEventListener("submit", function (e) {
      e.preventDefault();
      _config.data.city = _config.dataDOM.inputDOM.value;
      (0, _search.findCity)(_config.data.city);
      if (_config.data.city) {
        (0, _localStorage.pushHistory)(_config.dataDOM.historyDOM, _config.data.historyObj, "history-item", "history");
      }
      return false;
    });
  }

  //push current city to URL

})();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/loader.svg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/favorites-button.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a01d.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a02d.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a03d.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a04d.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a05d.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c01d.svg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c02d.svg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c03d.svg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c04d.svg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d01d.svg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d02d.svg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d03d.svg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/f01d.svg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r01d.svg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r02d.svg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r03d.svg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r04d.svg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r05d.svg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r06d.svg";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s01d.svg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s02d.svg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s03d.svg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s04d.svg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s05d.svg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s06d.svg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t01d.svg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t02d.svg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t03d.svg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t04d.svg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t05d.svg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t06d.svg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t07d.svg";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/u00d.svg";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYmY1ZWQ4M2FiMDBhZDlhZTVmZDIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9hcHAuc2FzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvZmF2b3JpdGVzLWJ1dHRvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2MwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2QwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2YwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDdkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdTAwZC5zdmciXSwibmFtZXMiOlsicGFyc2VkVXJsIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGF0YURPTSIsImZvcm1ET00iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dERPTSIsIm1haW5ET00iLCJ0aXRsZURPTSIsInVuaXRzRE9NIiwicGVyaW9kRE9NIiwiaGlzdG9yeURPTSIsImZhdm9yaXRlc0RPTSIsImJ1dHRvbkhpc3RvcnlDbGVhciIsImJ1dHRvbkZhdm9yaXRlc0NsZWFyIiwibG9hZGVyRE9NIiwiZGF0YSIsImNpdHkiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJzZWNyZXRLZXkiLCJ1bml0cyIsInVuaXRzRGlzcGxheSIsInBlcmlvZCIsImhpc3RvcnlPYmoiLCJmYXZvcml0ZU9iaiIsImNsZWFyTG9jYWxTdG9yYWdlIiwiRE9NIiwia2V5IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImlubmVySFRNTCIsImluc2VydEFkamFjZW50SFRNTCIsInB1c2hIaXN0b3J5Iiwic3RvcmFnZU9iamVjdCIsImNzc0NsYXNzIiwibG9jYWxTdG9yYWdlS2V5IiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImluZGV4T2YiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNob3dIaXN0b3J5IiwibWFwIiwiaSIsImh5c3RvcnlJdGVtIiwib25jbGljayIsInRhcmdldCIsImV2ZW50IiwidGFnTmFtZSIsIkJBU0VfVVJMIiwiZ2V0V2VhdGhlciIsImZldGNoIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc29sdmUiLCJqc29uIiwiYWRkRmF2b3JpdGVCdXR0b24iLCJib2R5IiwiY2l0eV9uYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlckNpdHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZW1wIiwid2VhdGhlciIsImljb24iLCJkZXNjcmlwdGlvbiIsImRhdGV0aW1lIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsIm1heF90ZW1wIiwibWluX3RlbXAiLCJhcHBfbWF4X3RlbXAiLCJhcHBfbWluX3RlbXAiLCJ3aW5kX3NwZCIsInBvcCIsInB1c2hVcmwiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwic2V0RXJyb3IiLCJlcnJvciIsInN0YXR1c1RleHQiLCJmaW5kQ2l0eSIsInJlbW92ZSIsImNhdGNoIiwiaW5pdCIsIm9uY2hhbmdlIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJ2YWx1ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0EsSUFBSUEsWUFBWSxJQUFJQyxHQUFKLENBQVFDLE9BQU9DLFFBQVAsQ0FBZ0JDLElBQXhCLENBQWhCOztBQUVBO0FBQ0EsSUFBTUMsVUFBVTtBQUNkQyxXQUFTQyxTQUFTQyxhQUFULENBQXVCLGFBQXZCLENBREs7QUFFZEMsWUFBVUYsU0FBU0MsYUFBVCxDQUF1QixTQUF2QixDQUZJO0FBR2RFLFdBQVNILFNBQVNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FISztBQUlkRyxZQUFVSixTQUFTQyxhQUFULENBQXVCLGFBQXZCLENBSkk7QUFLZEksWUFBVUwsU0FBU0MsYUFBVCxDQUF1QixRQUF2QixDQUxJO0FBTWRLLGFBQVdOLFNBQVND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O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL2FwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiZjVlZDgzYWIwMGFkOWFlNWZkMiIsIi8vZ2V0IGN1cnJlbnQgdXJsXHJcbmxldCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHJcbi8vb2JqZWN0IHdpdGggRE9NIGVsZW1lbnRzXHJcbmNvbnN0IGRhdGFET00gPSB7XHJcbiAgZm9ybURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hGb3JtXCIpLFxyXG4gIGlucHV0RE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaFwiKSxcclxuICBtYWluRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4td3JhcHBlclwiKSxcclxuICB0aXRsZURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXRpdGxlXCIpLFxyXG4gIHVuaXRzRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VuaXRzXCIpLFxyXG4gIHBlcmlvZERPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwZXJpb2RcIiksXHJcbiAgaGlzdG9yeURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWhpc3RvcnlcIiksXHJcbiAgZmF2b3JpdGVzRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW4tZmF2b3JpdGVzXCIpLFxyXG4gIGJ1dHRvbkhpc3RvcnlDbGVhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaXN0b3J5Q2xlYXJcIiksXHJcbiAgYnV0dG9uRmF2b3JpdGVzQ2xlYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmF2b3JpdGVzQ2xlYXJcIiksXHJcbiAgbG9hZGVyRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRlci13cmFwcGVyXCIpXHJcbn07XHJcblxyXG5sZXQgZGF0YSA9IHtcclxuICBjaXR5OiBwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmdldChcImNpdHlcIiksXHJcblxyXG4gIC8vYXBpIGtleVxyXG4gIHNlY3JldEtleTogXCJjNjk3NmE0YzRlMDU0MjFmOWI0ZWFlZTdhMzExZjBkY1wiLFxyXG4gIHVuaXRzOiBcIk1cIixcclxuICB1bml0c0Rpc3BsYXk6IFwiQ1wiLFxyXG4gIHBlcmlvZDogMSxcclxuXHJcbiAgLy9sb2NhbHN0b3JhZ2Ugb2JqZWN0c1xyXG4gIGhpc3RvcnlPYmo6IHtcclxuICAgIGNpdHk6IFtdXHJcbiAgfSxcclxuICBmYXZvcml0ZU9iajoge1xyXG4gICAgY2l0eTogW11cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBwYXJzZWRVcmwsIGRhdGFET00sIGRhdGEgfTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsImltcG9ydCB7cGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHtmaW5kQ2l0eX0gZnJvbSBcIi4vc2VhcmNoXCI7XHJcblxyXG4vKmNsZWFyIGxvY2Fsc3RvcmFnZSBkYXRhKi9cclxuZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2UoRE9NLCBrZXkpIHtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gIERPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIERPTS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYHRoZXJlIGFyZSBubyAke2tleX0geWV0YCk7XHJcbn1cclxuXHJcbi8vbG9jYWxzdG9yYWdlIG1ldGhvZHMgZm9yIGhpc3RvcnkgYW5kIGZhdm9yaXRlc1xyXG4vL1RPRE8gcmVmYWN0b3JcclxuZnVuY3Rpb24gcHVzaEhpc3RvcnkoRE9NLCBzdG9yYWdlT2JqZWN0LCBjc3NDbGFzcywgbG9jYWxTdG9yYWdlS2V5KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2b3JpdGVzXCIpICYmXHJcbiAgICAgIGxvY2FsU3RvcmFnZUtleSA9PT0gXCJmYXZvcml0ZXNcIiAmJlxyXG4gICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2b3JpdGVzXCIpKS5jaXR5LmluZGV4T2YoZGF0YS5jaXR5KSAhPVxyXG4gICAgICAgIC0xXHJcbiAgICApIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0b3JhZ2VPYmplY3QuY2l0eS5wdXNoKGRhdGEuY2l0eSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZU9iamVjdCkpO1xyXG4gICAgICBzaG93SGlzdG9yeShET00sIHN0b3JhZ2VPYmplY3QsIGNzc0NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dIaXN0b3J5KERPTSwgc3RvcmFnZU9iamVjdCwgY3NzQ2xhc3MpIHtcclxuICAgIERPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgaWYgKHN0b3JhZ2VPYmplY3QpIHtcclxuXHJcbiAgICAgIHN0b3JhZ2VPYmplY3QuY2l0eS5tYXAoaSA9PiB7XHJcbiAgICAgICAgRE9NLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLGA8bGkgY2xhc3M9XCIke2Nzc0NsYXNzfVwiPiR7aX08L2xpPmApO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGxldCBoeXN0b3J5SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXNpZGViYXInKTtcclxuXHJcbiAgICAgIGh5c3RvcnlJdGVtLm9uY2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC50YWdOYW1lID09PSAnTEknKXtcclxuICAgICAgICAgIGRhdGEuY2l0eSA9IHRhcmdldC5pbm5lckhUTUw7XHJcbiAgICAgICAgICBmaW5kQ2l0eSh0YXJnZXQuaW5uZXJIVE1MKTtcclxuICAgICAgICB9IFxyXG4gICAgICB9O1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCB7cHVzaEhpc3RvcnksIHNob3dIaXN0b3J5LCBjbGVhckxvY2FsU3RvcmFnZX1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvbG9jYWxTdG9yYWdlLmpzIiwiaW1wb3J0IHtwYXJzZWRVcmwsIGRhdGFET00sIGRhdGF9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmJpdC5pby92Mi4wL2ZvcmVjYXN0JztcclxuY29uc3QgZ2V0V2VhdGhlciA9IHVybCA9PiBmZXRjaChgJHtCQVNFX1VSTH0ke3VybH1gKVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKVxyXG4gIH0pXHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICB9KVxyXG4gIFxyXG5leHBvcnQge2dldFdlYXRoZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9hcGkuanMiLCJpbXBvcnQge3BhcnNlZFVybCwgZGF0YURPTSwgZGF0YX0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7cHVzaEhpc3RvcnksIHNob3dIaXN0b3J5fSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcclxuXHJcbi8qVE9ETyBtb3ZlIHNvbWV3aGVyZSBlbHNlIGkgZ3Vlc3MqLyBcclxuZnVuY3Rpb24gYWRkRmF2b3JpdGVCdXR0b24oYm9keSkge1xyXG4gICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgIGBDdXJyZW50IGNpdHk6ICR7Ym9keS5jaXR5X25hbWV9IFxyXG4gICAgICAgIDxpbWcgaWQ9XCJmYXZvcml0ZXNcIiBzcmM9XCJhc3NldHMvbWVkaWEvZmF2b3JpdGVzLWJ1dHRvbi5wbmdcIj5cclxuICAgICAgICBgXHJcbiAgICApO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmF2b3JpdGVzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgcHVzaEhpc3RvcnkoXHJcbiAgICAgICAgZGF0YURPTS5mYXZvcml0ZXNET00sXHJcbiAgICAgICAgZGF0YS5mYXZvcml0ZU9iaixcclxuICAgICAgICBcImZhdm9yaXRlLWl0ZW1cIixcclxuICAgICAgICBcImZhdm9yaXRlc1wiXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuLy9yZW5kZXIgbWV0aG9kXHJcbi8vdG9kbyAtIHJlZmFjdG9yIGRvbid0IGRvIERPTSBvcGVyYXRpb25zIGluIGxvb3AhXHJcbmZ1bmN0aW9uIHJlbmRlckNpdHkoYm9keSkge1xyXG4gIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xyXG4gIGFkZEZhdm9yaXRlQnV0dG9uKGJvZHkpO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEucGVyaW9kOyBpKyspIHtcclxuICAgIGRhdGFET00ubWFpbkRPTS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgIFwiYmVmb3JlZW5kXCIsXHJcblxyXG4gICAgICAvL3RlbXBsYXRlIHdpdGggd2VhdGhlciBkYXRhXHJcbiAgICAgIGA8ZGl2IGNsYXNzPVwibWFpbi1jb250ZW50LWJveCBtYWluLWNvbnRlbnQtYm94X2NvdW50LSR7aX1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnQtYm94X3ZhbHVlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm51bWJlci1jYXB0aW9uXCI+JHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib2R5LmRhdGFbaV0udGVtcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9PC9zcGFuPiAke2RhdGEudW5pdHNEaXNwbGF5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlLWNhcHRpb25cIj5hdmcuIHRlbXAuPC9wPiBcclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9iamVjdCBkYXRhPVwiYXNzZXRzL21lZGlhLyR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBib2R5LmRhdGFbaV0ud2VhdGhlci5pY29uXHJcbiAgICAgICAgICAgICAgICAgICAgfS5zdmdcIiB0eXBlPVwiXCI+PC9vYmplY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZS1jYXB0aW9uXCI+JHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvZHkuZGF0YVtpXS53ZWF0aGVyLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgfTwvcD4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPiR7Ym9keS5kYXRhW2ldLmRhdGV0aW1lXHJcbiAgICAgICAgICAgICAgICAgIC5zcGxpdChcIi1cIilcclxuICAgICAgICAgICAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgICAgICAgICAgICAuam9pbihcIi5cIil9PC9wPiBcclxuICAgICAgICAgICAgICAgIDxwPm1heC4gdGVtcC46ICR7Ym9keS5kYXRhW2ldLm1heF90ZW1wfSAke2RhdGEudW5pdHNEaXNwbGF5fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPm1pbi4gdGVtcC46ICR7Ym9keS5kYXRhW2ldLm1pbl90ZW1wfSAke2RhdGEudW5pdHNEaXNwbGF5fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPmZlZWxzIGxpa2UsIG1heDogJHtib2R5LmRhdGFbaV0uYXBwX21heF90ZW1wfSAke1xyXG4gICAgICAgIGRhdGEudW5pdHNEaXNwbGF5XHJcbiAgICAgIH08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5mZWVscyBsaWtlLCBtaW46ICR7Ym9keS5kYXRhW2ldLmFwcF9taW5fdGVtcH0gJHtcclxuICAgICAgICBkYXRhLnVuaXRzRGlzcGxheVxyXG4gICAgICB9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+d2luZDogJHtib2R5LmRhdGFbaV0ud2luZF9zcGR9IG0vczwvcD5cclxuICAgICAgICAgICAgICAgIDxwPnByZWNpcGl0YXRpb246ICR7Ym9keS5kYXRhW2ldLnBvcH0gJTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGBcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge3JlbmRlckNpdHl9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvcmVuZGVyLmpzIiwiaW1wb3J0IHsgcGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi9hcGlcIjtcclxuaW1wb3J0IHsgcmVuZGVyQ2l0eSB9IGZyb20gXCIuL3JlbmRlclwiO1xyXG5pbXBvcnQgeyBwdXNoSGlzdG9yeSwgc2hvd0hpc3RvcnksIGNsZWFyTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XHJcblxyXG4vL3B1c2ggY3VycmVudCBjaXR5IHRvIFVSTFxyXG5mdW5jdGlvbiBwdXNoVXJsKGNpdHkpIHtcclxuICBsZXQgdXJsID0gYGluZGV4Lmh0bWw/Y2l0eT0ke2NpdHl9YDtcclxuICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB1cmwpO1xyXG4gIGxldCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RXJyb3IoZXJyb3Ipe1xyXG4gIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xyXG4gIGlmIChlcnJvci5zdGF0dXMgPT09IDIwNCkge1xyXG4gICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgIGBDaXR5IG5vdCBmb3VuZC4gUGxlYXNlLCB0cnkgYWdhaW4uYFxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYFNlYXJjaCBmaWVsZCBpcyBlbXB0eS4gUGxlYXNlLCBlbnRlciBjaXR5IG5hbWVgXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgJHtlcnJvci5zdGF0dXNUZXh0fWApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZmluZENpdHkoY2l0eSkge1xyXG4gIGRhdGFET00ubWFpbkRPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGRhdGFET00udGl0bGVET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICBkYXRhRE9NLmxvYWRlckRPTS5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTsgLy9zaG93IGxvYWRlclxyXG4gIHB1c2hVcmwoY2l0eSk7XHJcblxyXG4gIGdldFdlYXRoZXIoYC9kYWlseT9jaXR5PSR7Y2l0eX0mdW5pdHM9JHtkYXRhLnVuaXRzfSZrZXk9JHtkYXRhLnNlY3JldEtleX1gKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24oYm9keSkge1xyXG4gICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgIHJlbmRlckNpdHkoYm9keSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHNldEVycm9yKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZmluZENpdHkgfTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9zZWFyY2guanMiLCJpbXBvcnQgXCIuL2Fzc2V0cy9zYXNzL2FwcC5zYXNzXCI7XHJcblxyXG5pbXBvcnQge3BhcnNlZFVybCwgZGF0YURPTSwgZGF0YX0gZnJvbSBcIi4vYXNzZXRzL2pzL2NvbmZpZ1wiO1xyXG5pbXBvcnQge2dldFdlYXRoZXJ9IGZyb20gXCIuL2Fzc2V0cy9qcy9hcGlcIjtcclxuaW1wb3J0IHtyZW5kZXJDaXR5fSBmcm9tIFwiLi9hc3NldHMvanMvcmVuZGVyXCI7XHJcbmltcG9ydCB7cHVzaEhpc3RvcnksIHNob3dIaXN0b3J5LCBjbGVhckxvY2FsU3RvcmFnZX0gZnJvbSBcIi4vYXNzZXRzL2pzL2xvY2FsU3RvcmFnZVwiO1xyXG5pbXBvcnQge2ZpbmRDaXR5fSBmcm9tIFwiLi9hc3NldHMvanMvc2VhcmNoXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9sb2FkZXIuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYzA0ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2QwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2QwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2QwM2Quc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9mMDFkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA1ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA2ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwNWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwNmQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDVkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDZkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDdkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdTAwZC5zdmdcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogMjAxNy5XZWF0aGVyIGFwcGxpY2F0aW9uIGJ5IEFsZXggTmVsaW4gKlxyXG4gKiBCYXNlZCBvbiB3ZWF0aGVyYml0LmlvIEFQSSAgICAgICAgICAgICAqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICBpbml0KCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvL3J1biBmZXRjaCBtZXRob2QsIHdlIGhhdmUgY2l0eSBpbiBVUkxcclxuICAgIGlmIChwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmdldChcImNpdHlcIikpIHtcclxuICAgICAgZmluZENpdHkoZGF0YS5jaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2dldCB2YWx1ZXMgZnJvbSBsb2NhbHN0b3JhZ2UsIGlmIGFueVxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlzdG9yeVwiKSkge1xyXG4gICAgICBkYXRhLmhpc3RvcnlPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlzdG9yeVwiKSk7XHJcbiAgICAgIHNob3dIaXN0b3J5KGRhdGFET00uaGlzdG9yeURPTSwgZGF0YS5oaXN0b3J5T2JqLCBcImhpc3RvcnktaXRlbVwiKTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc1wiKSkge1xyXG4gICAgICBkYXRhLmZhdm9yaXRlT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc1wiKSk7XHJcbiAgICAgIHNob3dIaXN0b3J5KGRhdGFET00uZmF2b3JpdGVzRE9NLCBkYXRhLmZhdm9yaXRlT2JqLCBcImZhdm9yaXRlLWl0ZW1cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQub25jbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ID09PSBkYXRhRE9NLmJ1dHRvbkhpc3RvcnlDbGVhcikge1xyXG4gICAgICAgIGNsZWFyTG9jYWxTdG9yYWdlKGRhdGFET00uaGlzdG9yeURPTSwgXCJoaXN0b3J5XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCA9PT0gZGF0YURPTS5idXR0b25GYXZvcml0ZXNDbGVhcikge1xyXG4gICAgICAgIGNsZWFyTG9jYWxTdG9yYWdlKGRhdGFET00uZmF2b3JpdGVzRE9NLCBcImZhdm9yaXRlc1wiKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5vbmNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ID09PSBkYXRhRE9NLnVuaXRzRE9NKSB7XHJcbiAgICAgICAgZGF0YS51bml0cyA9XHJcbiAgICAgICAgICBkYXRhRE9NLnVuaXRzRE9NLm9wdGlvbnNbXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdW5pdHNcIikuc2VsZWN0ZWRJbmRleFxyXG4gICAgICAgICAgXS52YWx1ZTtcclxuICAgICAgICBkYXRhLnVuaXRzRGlzcGxheSA9IGRhdGEudW5pdHMgPT09IFwiTVwiID8gXCJDXCIgOiBcIkZcIjtcclxuICAgICAgICBpZiAoZGF0YS5jaXR5KSB7XHJcbiAgICAgICAgICBmaW5kQ2l0eShkYXRhLmNpdHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgPT09IGRhdGFET00ucGVyaW9kRE9NKSB7XHJcbiAgICAgICAgZGF0YS5wZXJpb2QgPSArZGF0YURPTS5wZXJpb2RET00ub3B0aW9uc1tcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVyaW9kXCIpLnNlbGVjdGVkSW5kZXhcclxuICAgICAgICBdLnZhbHVlO1xyXG4gICAgICAgIGlmIChkYXRhLmNpdHkpIHtcclxuICAgICAgICAgIGZpbmRDaXR5KGRhdGEuY2l0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFET00uZm9ybURPTS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGRhdGEuY2l0eSA9IGRhdGFET00uaW5wdXRET00udmFsdWU7XHJcbiAgICAgIGZpbmRDaXR5KGRhdGEuY2l0eSk7XHJcbiAgICAgIGlmIChkYXRhLmNpdHkpIHtcclxuICAgICAgICBwdXNoSGlzdG9yeShcclxuICAgICAgICAgIGRhdGFET00uaGlzdG9yeURPTSxcclxuICAgICAgICAgIGRhdGEuaGlzdG9yeU9iaixcclxuICAgICAgICAgIFwiaGlzdG9yeS1pdGVtXCIsXHJcbiAgICAgICAgICBcImhpc3RvcnlcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL3B1c2ggY3VycmVudCBjaXR5IHRvIFVSTFxyXG4gIFxyXG5cclxufSkoKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Fzcy9hcHAuc2Fzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9sb2FkZXIuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZDAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZDAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZDAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZjAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9mMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjA2ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDZkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczA2ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDZkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA2ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDZkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA3ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDdkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdTAwZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy91MDBkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==