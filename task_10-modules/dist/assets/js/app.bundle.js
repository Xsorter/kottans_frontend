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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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

/*create buttons to clear localstorage data*/
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _config = __webpack_require__(0);

var _api = __webpack_require__(4);

var _render = __webpack_require__(5);

var _localStorage = __webpack_require__(1);

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

__webpack_require__(38);

__webpack_require__(39);

__webpack_require__(40);

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
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/loader.svg";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/favorites-button.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a01d.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a02d.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a03d.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a04d.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a05d.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c01d.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c02d.svg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c03d.svg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c04d.svg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d01d.svg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d02d.svg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d03d.svg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/f01d.svg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r01d.svg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r02d.svg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r03d.svg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r04d.svg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r05d.svg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r06d.svg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s01d.svg";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s02d.svg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s03d.svg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s04d.svg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s05d.svg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s06d.svg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t01d.svg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t02d.svg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t03d.svg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t04d.svg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t05d.svg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t06d.svg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t07d.svg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/u00d.svg";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDg3MDlmYTU4MmFhZDVkOWNjOTkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9hcHAuc2FzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBpLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2xvYWRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2MwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2MwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2QwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9mMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDZkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDZkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDZkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA3ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3UwMGQuc3ZnIl0sIm5hbWVzIjpbInBhcnNlZFVybCIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRhdGFET00iLCJmb3JtRE9NIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXRET00iLCJtYWluRE9NIiwidGl0bGVET00iLCJ1bml0c0RPTSIsInBlcmlvZERPTSIsImhpc3RvcnlET00iLCJmYXZvcml0ZXNET00iLCJidXR0b25IaXN0b3J5Q2xlYXIiLCJidXR0b25GYXZvcml0ZXNDbGVhciIsImxvYWRlckRPTSIsImRhdGEiLCJjaXR5Iiwic2VhcmNoUGFyYW1zIiwiZ2V0Iiwic2VjcmV0S2V5IiwidW5pdHMiLCJ1bml0c0Rpc3BsYXkiLCJwZXJpb2QiLCJoaXN0b3J5T2JqIiwiZmF2b3JpdGVPYmoiLCJjbGVhckxvY2FsU3RvcmFnZSIsIkRPTSIsImtleSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJpbm5lckhUTUwiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJwdXNoSGlzdG9yeSIsInN0b3JhZ2VPYmplY3QiLCJjc3NDbGFzcyIsImxvY2FsU3RvcmFnZUtleSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJpbmRleE9mIiwicHVzaCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzaG93SGlzdG9yeSIsIm1hcCIsImkiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImZpbmRDaXR5IiwiaW5pdCIsIm9uY2xpY2siLCJ0YXJnZXQiLCJldmVudCIsIm9uY2hhbmdlIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJ2YWx1ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1c2hVcmwiLCJzdGF0ZSIsInRpdGxlIiwidXJsIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImNsYXNzTGlzdCIsInJlbW92ZSIsInRoZW4iLCJib2R5IiwiY2F0Y2giLCJlcnJvciIsImFkZCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJCQVNFX1VSTCIsImdldFdlYXRoZXIiLCJmZXRjaCIsInJlc3BvbnNlIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc29sdmUiLCJqc29uIiwiYWRkRmF2b3JpdGVCdXR0b24iLCJjaXR5X25hbWUiLCJyZW5kZXJDaXR5IiwidGVtcCIsIndlYXRoZXIiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJkYXRldGltZSIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJtYXhfdGVtcCIsIm1pbl90ZW1wIiwiYXBwX21heF90ZW1wIiwiYXBwX21pbl90ZW1wIiwid2luZF9zcGQiLCJwb3AiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBLElBQUlBLFlBQVksSUFBSUMsR0FBSixDQUFRQyxPQUFPQyxRQUFQLENBQWdCQyxJQUF4QixDQUFoQjs7QUFFQTtBQUNBLElBQU1DLFVBQVU7QUFDZEMsV0FBU0MsU0FBU0MsYUFBVCxDQUF1QixhQUF2QixDQURLO0FBRWRDLFlBQVVGLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FGSTtBQUdkRSxXQUFTSCxTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBSEs7QUFJZEcsWUFBVUosU0FBU0MsYUFBVCxDQUF1QixhQUF2QixDQUpJO0FBS2RJLFlBQVVMLFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FMSTtBQU1kSyxhQUFXTixTQUFTQyxhQUFULENBQXVCLFNBQXZCLENBTkc7QUFP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QSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRSIsImZpbGUiOiIuL2Fzc2V0cy9qcy9hcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMik7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDg3MDlmYTU4MmFhZDVkOWNjOTkiLCIvL2dldCBjdXJyZW50IHVybFxyXG5sZXQgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblxyXG4vL29iamVjdCB3aXRoIERPTSBlbGVtZW50c1xyXG5jb25zdCBkYXRhRE9NID0ge1xyXG4gIGZvcm1ET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoRm9ybVwiKSxcclxuICBpbnB1dERPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hcIiksXHJcbiAgbWFpbkRPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLXdyYXBwZXJcIiksXHJcbiAgdGl0bGVET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi10aXRsZVwiKSxcclxuICB1bml0c0RPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1bml0c1wiKSxcclxuICBwZXJpb2RET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVyaW9kXCIpLFxyXG4gIGhpc3RvcnlET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpbi1oaXN0b3J5XCIpLFxyXG4gIGZhdm9yaXRlc0RPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluLWZhdm9yaXRlc1wiKSxcclxuICBidXR0b25IaXN0b3J5Q2xlYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGlzdG9yeUNsZWFyXCIpLFxyXG4gIGJ1dHRvbkZhdm9yaXRlc0NsZWFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zhdm9yaXRlc0NsZWFyXCIpLFxyXG4gIGxvYWRlckRPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkZXItd3JhcHBlclwiKVxyXG59O1xyXG5cclxubGV0IGRhdGEgPSB7XHJcbiAgY2l0eTogcGFyc2VkVXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJjaXR5XCIpLFxyXG5cclxuICAvL2FwaSBrZXlcclxuICBzZWNyZXRLZXk6IFwiYzY5NzZhNGM0ZTA1NDIxZjliNGVhZWU3YTMxMWYwZGNcIixcclxuICB1bml0czogXCJNXCIsXHJcbiAgdW5pdHNEaXNwbGF5OiBcIkNcIixcclxuICBwZXJpb2Q6IDEsXHJcblxyXG4gIC8vbG9jYWxzdG9yYWdlIG9iamVjdHNcclxuICBoaXN0b3J5T2JqOiB7XHJcbiAgICBjaXR5OiBbXVxyXG4gIH0sXHJcbiAgZmF2b3JpdGVPYmo6IHtcclxuICAgIGNpdHk6IFtdXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgcGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhIH07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb25maWcuanMiLCJpbXBvcnQge3BhcnNlZFVybCwgZGF0YURPTSwgZGF0YX0gZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG4vKmNyZWF0ZSBidXR0b25zIHRvIGNsZWFyIGxvY2Fsc3RvcmFnZSBkYXRhKi9cclxuZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2UoRE9NLCBrZXkpIHtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gIERPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIERPTS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYHRoZXJlIGFyZSBubyAke2tleX0geWV0YCk7XHJcbn1cclxuXHJcbi8vbG9jYWxzdG9yYWdlIG1ldGhvZHMgZm9yIGhpc3RvcnkgYW5kIGZhdm9yaXRlc1xyXG4vL1RPRE8gcmVmYWN0b3JcclxuZnVuY3Rpb24gcHVzaEhpc3RvcnkoRE9NLCBzdG9yYWdlT2JqZWN0LCBjc3NDbGFzcywgbG9jYWxTdG9yYWdlS2V5KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2b3JpdGVzXCIpICYmXHJcbiAgICAgIGxvY2FsU3RvcmFnZUtleSA9PT0gXCJmYXZvcml0ZXNcIiAmJlxyXG4gICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2b3JpdGVzXCIpKS5jaXR5LmluZGV4T2YoZGF0YS5jaXR5KSAhPVxyXG4gICAgICAgIC0xXHJcbiAgICApIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0b3JhZ2VPYmplY3QuY2l0eS5wdXNoKGRhdGEuY2l0eSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZU9iamVjdCkpO1xyXG4gICAgICBzaG93SGlzdG9yeShET00sIHN0b3JhZ2VPYmplY3QsIGNzc0NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dIaXN0b3J5KERPTSwgc3RvcmFnZU9iamVjdCwgY3NzQ2xhc3MpIHtcclxuICAgIERPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgaWYgKHN0b3JhZ2VPYmplY3QpIHtcclxuICAgICAgc3RvcmFnZU9iamVjdC5jaXR5Lm1hcChpID0+IHtcclxuICAgICAgICBET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgICAgIGA8bGkgY2xhc3M9XCIke2Nzc0NsYXNzfVwiPiR7aX08L2xpPmBcclxuICAgICAgICApO1xyXG4gICAgICB9KTtcclxuICAgICAgZm9yIChcclxuICAgICAgICBsZXQgaSA9IDA7XHJcbiAgICAgICAgaSA8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2Nzc0NsYXNzfWApLmxlbmd0aDtcclxuICAgICAgICBpKytcclxuICAgICAgKSB7XHJcbiAgICAgICAgZG9jdW1lbnRcclxuICAgICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKGAuJHtjc3NDbGFzc31gKVxyXG4gICAgICAgICAgW2ldLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgZGF0YS5jaXR5ID0gdGhpcy5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgIGZpbmRDaXR5KHRoaXMuaW5uZXJIVE1MKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQge3B1c2hIaXN0b3J5LCBzaG93SGlzdG9yeSwgY2xlYXJMb2NhbFN0b3JhZ2V9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2xvY2FsU3RvcmFnZS5qcyIsImltcG9ydCBcIi4vYXNzZXRzL3Nhc3MvYXBwLnNhc3NcIjtcclxuXHJcbmltcG9ydCB7cGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhfSBmcm9tIFwiLi9hc3NldHMvanMvY29uZmlnXCI7XHJcbmltcG9ydCB7Z2V0V2VhdGhlcn0gZnJvbSBcIi4vYXNzZXRzL2pzL2FwaVwiO1xyXG5pbXBvcnQge3JlbmRlckNpdHl9IGZyb20gXCIuL2Fzc2V0cy9qcy9yZW5kZXJcIjtcclxuaW1wb3J0IHtwdXNoSGlzdG9yeSwgc2hvd0hpc3RvcnksIGNsZWFyTG9jYWxTdG9yYWdlfSBmcm9tIFwiLi9hc3NldHMvanMvbG9jYWxTdG9yYWdlXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9sb2FkZXIuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYzA0ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2QwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2QwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2QwM2Quc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9mMDFkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA1ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA2ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwNWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwNmQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDVkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDZkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDdkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdTAwZC5zdmdcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogMjAxNy5XZWF0aGVyIGFwcGxpY2F0aW9uIGJ5IEFsZXggTmVsaW4gKlxyXG4gKiBCYXNlZCBvbiB3ZWF0aGVyYml0LmlvIEFQSSAgICAgICAgICAgICAqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICBpbml0KCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvL3J1biBmZXRjaCBtZXRob2QsIHdlIGhhdmUgY2l0eSBpbiBVUkxcclxuICAgIGlmIChwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmdldChcImNpdHlcIikpIHtcclxuICAgICAgZmluZENpdHkoZGF0YS5jaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2dldCB2YWx1ZXMgZnJvbSBsb2NhbHN0b3JhZ2UsIGlmIGFueVxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlzdG9yeVwiKSkge1xyXG4gICAgICBkYXRhLmhpc3RvcnlPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlzdG9yeVwiKSk7XHJcbiAgICAgIHNob3dIaXN0b3J5KGRhdGFET00uaGlzdG9yeURPTSwgZGF0YS5oaXN0b3J5T2JqLCBcImhpc3RvcnktaXRlbVwiKTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc1wiKSkge1xyXG4gICAgICBkYXRhLmZhdm9yaXRlT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc1wiKSk7XHJcbiAgICAgIHNob3dIaXN0b3J5KGRhdGFET00uZmF2b3JpdGVzRE9NLCBkYXRhLmZhdm9yaXRlT2JqLCBcImZhdm9yaXRlLWl0ZW1cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQub25jbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ID09PSBkYXRhRE9NLmJ1dHRvbkhpc3RvcnlDbGVhcikge1xyXG4gICAgICAgIGNsZWFyTG9jYWxTdG9yYWdlKGRhdGFET00uaGlzdG9yeURPTSwgXCJoaXN0b3J5XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCA9PT0gZGF0YURPTS5idXR0b25GYXZvcml0ZXNDbGVhcikge1xyXG4gICAgICAgIGNsZWFyTG9jYWxTdG9yYWdlKGRhdGFET00uZmF2b3JpdGVzRE9NLCBcImZhdm9yaXRlc1wiKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5vbmNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ID09PSBkYXRhRE9NLnVuaXRzRE9NKSB7XHJcbiAgICAgICAgZGF0YS51bml0cyA9XHJcbiAgICAgICAgICBkYXRhRE9NLnVuaXRzRE9NLm9wdGlvbnNbXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdW5pdHNcIikuc2VsZWN0ZWRJbmRleFxyXG4gICAgICAgICAgXS52YWx1ZTtcclxuICAgICAgICBkYXRhLnVuaXRzRGlzcGxheSA9IGRhdGEudW5pdHMgPT09IFwiTVwiID8gXCJDXCIgOiBcIkZcIjtcclxuICAgICAgICBpZiAoZGF0YS5jaXR5KSB7XHJcbiAgICAgICAgICBmaW5kQ2l0eShkYXRhLmNpdHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgPT09IGRhdGFET00ucGVyaW9kRE9NKSB7XHJcbiAgICAgICAgZGF0YS5wZXJpb2QgPSArZGF0YURPTS5wZXJpb2RET00ub3B0aW9uc1tcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVyaW9kXCIpLnNlbGVjdGVkSW5kZXhcclxuICAgICAgICBdLnZhbHVlO1xyXG4gICAgICAgIGlmIChkYXRhLmNpdHkpIHtcclxuICAgICAgICAgIGZpbmRDaXR5KGRhdGEuY2l0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFET00uZm9ybURPTS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGRhdGEuY2l0eSA9IGRhdGFET00uaW5wdXRET00udmFsdWU7XHJcbiAgICAgIGZpbmRDaXR5KGRhdGEuY2l0eSk7XHJcbiAgICAgIGlmIChkYXRhLmNpdHkpIHtcclxuICAgICAgICBwdXNoSGlzdG9yeShcclxuICAgICAgICAgIGRhdGFET00uaGlzdG9yeURPTSxcclxuICAgICAgICAgIGRhdGEuaGlzdG9yeU9iaixcclxuICAgICAgICAgIFwiaGlzdG9yeS1pdGVtXCIsXHJcbiAgICAgICAgICBcImhpc3RvcnlcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL3B1c2ggY3VycmVudCBjaXR5IHRvIFVSTFxyXG4gIGZ1bmN0aW9uIHB1c2hVcmwoY2l0eSkge1xyXG4gICAgbGV0IHN0YXRlID0ge307XHJcbiAgICBsZXQgdGl0bGUgPSBjaXR5O1xyXG4gICAgbGV0IHVybCA9IGBpbmRleC5odG1sP2NpdHk9JHtjaXR5fWA7XHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSwgdGl0bGUsIHVybCk7XHJcbiAgICBsZXQgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBmaW5kQ2l0eShjaXR5KSB7XHJcbiAgICBkYXRhRE9NLm1haW5ET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpOyAvL3Nob3cgbG9hZGVyXHJcbiAgICBwdXNoVXJsKGNpdHkpO1xyXG5cclxuICAgIGdldFdlYXRoZXIoYC9kYWlseT9jaXR5PSR7Y2l0eX0mdW5pdHM9JHtkYXRhLnVuaXRzfSZrZXk9JHtkYXRhLnNlY3JldEtleX1gKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24oYm9keSkge1xyXG4gICAgICAgIGlmKGJvZHkpe1xyXG4gICAgICAgICAgcmVuZGVyQ2l0eShib2R5KVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICB9KVxyXG5cclxuICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcil7XHJcbiAgICAgIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcclxuICAgICAgaWYoZXJyb3Iuc3RhdHVzID09PSAyMDQpe1xyXG4gICAgICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgQ2l0eSBub3QgZm91bmQuIFBsZWFzZSwgdHJ5IGFnYWluLmApO1xyXG4gICAgICB9ZWxzZSBpZihlcnJvci5zdGF0dXMgPT09IDQwMCl7XHJcbiAgICAgICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBTZWFyY2ggZmllbGQgaXMgZW1wdHkuIFBsZWFzZSwgZW50ZXIgY2l0eSBuYW1lYCk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgJHtlcnJvci5zdGF0dXNUZXh0fWApO1xyXG4gICAgICB9XHJcbiAgICB9KTsgXHJcbiAgfVxyXG5cclxufSkoKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Fzcy9hcHAuc2Fzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge3BhcnNlZFVybCwgZGF0YURPTSwgZGF0YX0gZnJvbSBcIi4vY29uZmlnXCI7XHJcblxyXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwczovL2FwaS53ZWF0aGVyYml0LmlvL3YyLjAvZm9yZWNhc3QnO1xyXG5jb25zdCBnZXRXZWF0aGVyID0gdXJsID0+IGZldGNoKGAke0JBU0VfVVJMfSR7dXJsfWApXHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSlcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpXHJcbiAgfSlcclxuICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIH0pXHJcbiAgXHJcbmV4cG9ydCB7Z2V0V2VhdGhlcn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2FwaS5qcyIsImltcG9ydCB7cGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHtwdXNoSGlzdG9yeSwgc2hvd0hpc3Rvcnl9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xyXG5cclxuLypUT0RPIG1vdmUgc29tZXdoZXJlIGVsc2UgaSBndWVzcyovIFxyXG5mdW5jdGlvbiBhZGRGYXZvcml0ZUJ1dHRvbihib2R5KSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYEN1cnJlbnQgY2l0eTogJHtib2R5LmNpdHlfbmFtZX0gXHJcbiAgICAgICAgPGltZyBpZD1cImZhdm9yaXRlc1wiIHNyYz1cImFzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1wiPlxyXG4gICAgICAgIGBcclxuICAgICk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmYXZvcml0ZXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBwdXNoSGlzdG9yeShcclxuICAgICAgICBkYXRhRE9NLmZhdm9yaXRlc0RPTSxcclxuICAgICAgICBkYXRhLmZhdm9yaXRlT2JqLFxyXG4gICAgICAgIFwiZmF2b3JpdGUtaXRlbVwiLFxyXG4gICAgICAgIFwiZmF2b3JpdGVzXCJcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcblxyXG4vL3JlbmRlciBtZXRob2RcclxuLy90b2RvIC0gcmVmYWN0b3IgZG9uJ3QgZG8gRE9NIG9wZXJhdGlvbnMgaW4gbG9vcCFcclxuZnVuY3Rpb24gcmVuZGVyQ2l0eShib2R5KSB7XHJcbiAgZGF0YURPTS5sb2FkZXJET00uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XHJcbiAgYWRkRmF2b3JpdGVCdXR0b24oYm9keSk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5wZXJpb2Q7IGkrKykge1xyXG4gICAgZGF0YURPTS5tYWluRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuXHJcbiAgICAgIC8vdGVtcGxhdGUgd2l0aCB3ZWF0aGVyIGRhdGFcclxuICAgICAgYDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnQtYm94IG1haW4tY29udGVudC1ib3hfY291bnQtJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tY29udGVudC1ib3hfdmFsdWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnVtYmVyLWNhcHRpb25cIj4ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkuZGF0YVtpXS50ZW1wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH08L3NwYW4+ICR7ZGF0YS51bml0c0Rpc3BsYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwidGl0bGUtY2FwdGlvblwiPmF2Zy4gdGVtcC48L3A+IFxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8b2JqZWN0IGRhdGE9XCJhc3NldHMvbWVkaWEvJHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvZHkuZGF0YVtpXS53ZWF0aGVyLmljb25cclxuICAgICAgICAgICAgICAgICAgICB9LnN2Z1wiIHR5cGU9XCJcIj48L29iamVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlLWNhcHRpb25cIj4ke1xyXG4gICAgICAgICAgICAgICAgICAgICAgYm9keS5kYXRhW2ldLndlYXRoZXIuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICB9PC9wPiBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkYXRlXCI+JHtib2R5LmRhdGFbaV0uZGF0ZXRpbWVcclxuICAgICAgICAgICAgICAgICAgLnNwbGl0KFwiLVwiKVxyXG4gICAgICAgICAgICAgICAgICAucmV2ZXJzZSgpXHJcbiAgICAgICAgICAgICAgICAgIC5qb2luKFwiLlwiKX08L3A+IFxyXG4gICAgICAgICAgICAgICAgPHA+bWF4LiB0ZW1wLjogJHtib2R5LmRhdGFbaV0ubWF4X3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+bWluLiB0ZW1wLjogJHtib2R5LmRhdGFbaV0ubWluX3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+ZmVlbHMgbGlrZSwgbWF4OiAke2JvZHkuZGF0YVtpXS5hcHBfbWF4X3RlbXB9ICR7XHJcbiAgICAgICAgZGF0YS51bml0c0Rpc3BsYXlcclxuICAgICAgfTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPmZlZWxzIGxpa2UsIG1pbjogJHtib2R5LmRhdGFbaV0uYXBwX21pbl90ZW1wfSAke1xyXG4gICAgICAgIGRhdGEudW5pdHNEaXNwbGF5XHJcbiAgICAgIH08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD53aW5kOiAke2JvZHkuZGF0YVtpXS53aW5kX3NwZH0gbS9zPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+cHJlY2lwaXRhdGlvbjogJHtib2R5LmRhdGFbaV0ucG9wfSAlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgYFxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVyQ2l0eX07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9yZW5kZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9sb2FkZXIuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9hMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2EwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9hMDRkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2EwNGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9hMDVkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2EwNWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9jMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2MwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9jMDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2MwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9jMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2MwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9jMDRkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2MwNGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9kMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2QwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9kMDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2QwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9kMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2QwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9mMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2YwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDRkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwNGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDVkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwNWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDZkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwNmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDRkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwNGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDVkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwNWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDZkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwNmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDRkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwNGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDVkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwNWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDZkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwNmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDdkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwN2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS91MDBkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3UwMGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9