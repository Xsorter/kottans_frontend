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
  formDOM: document.querySelector("#search-form"),
  inputDOM: document.querySelector("#search"),
  mainDOM: document.querySelector(".wrapper"),
  titleDOM: document.querySelector(".description"),
  unitsDOM: document.querySelector("#units"),
  periodDOM: document.querySelector("#period"),
  historyDOM: document.querySelector(".history"),
  favoritesDOM: document.querySelector(".favorites"),
  buttonHistoryClear: document.querySelector("#history-clear"),
  buttonFavoritesClear: document.querySelector("#favorites-clear"),
  loaderDOM: document.querySelector(".loader")
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

    var hystoryItem = document.querySelector('.sidebar');

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
    "<div class=\"content\">\n          <div class=\"content__values\">\n            <p>\n              <span class=\"caption__number\">" + body.data[i].temp + "</span> " + _config.data.unitsDisplay + "\n              <p class=\"caption__title\">avg. temp.</p> \n            </p>\n                    <object data=\"assets/media/" + body.data[i].weather.icon + ".svg\" type=\"\"></object>\n                    <p class=\"caption__title\">" + body.data[i].weather.description + "</p> \n                </div>\n                <p class=\"date\">" + body.data[i].datetime.split("-").reverse().join(".") + "</p> \n                <p>max. temp.: " + body.data[i].max_temp + " " + _config.data.unitsDisplay + "</p>\n                <p>min. temp.: " + body.data[i].min_temp + " " + _config.data.unitsDisplay + "</p>\n                <p>feels like, max: " + body.data[i].app_max_temp + " " + _config.data.unitsDisplay + "</p>\n                <p>feels like, min: " + body.data[i].app_min_temp + " " + _config.data.unitsDisplay + "</p>\n                <p>wind: " + body.data[i].wind_spd + " m/s</p>\n                <p>precipitation: " + body.data[i].pop + " %</p>\n            </div>\n            ");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTQ3N2FmOTIyYmI3ZTZiNmMwMzEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9hcHAuc2FzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvZmF2b3JpdGVzLWJ1dHRvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2MwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2QwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2YwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDdkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdTAwZC5zdmciXSwibmFtZXMiOlsicGFyc2VkVXJsIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGF0YURPTSIsImZvcm1ET00iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dERPTSIsIm1haW5ET00iLCJ0aXRsZURPTSIsInVuaXRzRE9NIiwicGVyaW9kRE9NIiwiaGlzdG9yeURPTSIsImZhdm9yaXRlc0RPTSIsImJ1dHRvbkhpc3RvcnlDbGVhciIsImJ1dHRvbkZhdm9yaXRlc0NsZWFyIiwibG9hZGVyRE9NIiwiZGF0YSIsImNpdHkiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJzZWNyZXRLZXkiLCJ1bml0cyIsInVuaXRzRGlzcGxheSIsInBlcmlvZCIsImhpc3RvcnlPYmoiLCJmYXZvcml0ZU9iaiIsImNsZWFyTG9jYWxTdG9yYWdlIiwiRE9NIiwia2V5IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImlubmVySFRNTCIsImluc2VydEFkamFjZW50SFRNTCIsInB1c2hIaXN0b3J5Iiwic3RvcmFnZU9iamVjdCIsImNzc0NsYXNzIiwibG9jYWxTdG9yYWdlS2V5IiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImluZGV4T2YiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNob3dIaXN0b3J5IiwibWFwIiwiaSIsImh5c3RvcnlJdGVtIiwib25jbGljayIsInRhcmdldCIsImV2ZW50IiwidGFnTmFtZSIsIkJBU0VfVVJMIiwiZ2V0V2VhdGhlciIsImZldGNoIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc29sdmUiLCJqc29uIiwiYWRkRmF2b3JpdGVCdXR0b24iLCJib2R5IiwiY2l0eV9uYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlckNpdHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZW1wIiwid2VhdGhlciIsImljb24iLCJkZXNjcmlwdGlvbiIsImRhdGV0aW1lIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsIm1heF90ZW1wIiwibWluX3RlbXAiLCJhcHBfbWF4X3RlbXAiLCJhcHBfbWluX3RlbXAiLCJ3aW5kX3NwZCIsInBvcCIsInB1c2hVcmwiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwic2V0RXJyb3IiLCJlcnJvciIsInN0YXR1c1RleHQiLCJmaW5kQ2l0eSIsInJlbW92ZSIsImNhdGNoIiwiaW5pdCIsIm9uY2hhbmdlIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJ2YWx1ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0EsSUFBSUEsWUFBWSxJQUFJQyxHQUFKLENBQVFDLE9BQU9DLFFBQVAsQ0FBZ0JDLElBQXhCLENBQWhCOztBQUVBO0FBQ0EsSUFBTUMsVUFBVTtBQUNkQyxXQUFTQyxTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBREs7QUFFZEMsWUFBVUYsU0FBU0MsYUFBVCxDQUF1QixTQUF2QixDQUZJO0FBR2RFLFdBQVNILFNBQVNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FISztBQUlkRyxZQUFVSixTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBSkk7QUFLZEksWUFBVUwsU0FBU0MsYUFBVCxDQUF1QixRQUF2QixDQUxJO0FBTWRLLGFBQVdOLFNBQVND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QSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRSIsImZpbGUiOiIuL2Fzc2V0cy9qcy9hcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTQ3N2FmOTIyYmI3ZTZiNmMwMzEiLCIvL2dldCBjdXJyZW50IHVybFxyXG5sZXQgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblxyXG4vL29iamVjdCB3aXRoIERPTSBlbGVtZW50c1xyXG5jb25zdCBkYXRhRE9NID0ge1xyXG4gIGZvcm1ET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWZvcm1cIiksXHJcbiAgaW5wdXRET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoXCIpLFxyXG4gIG1haW5ET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKSxcclxuICB0aXRsZURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKSxcclxuICB1bml0c0RPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1bml0c1wiKSxcclxuICBwZXJpb2RET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVyaW9kXCIpLFxyXG4gIGhpc3RvcnlET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlzdG9yeVwiKSxcclxuICBmYXZvcml0ZXNET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGVzXCIpLFxyXG4gIGJ1dHRvbkhpc3RvcnlDbGVhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaXN0b3J5LWNsZWFyXCIpLFxyXG4gIGJ1dHRvbkZhdm9yaXRlc0NsZWFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zhdm9yaXRlcy1jbGVhclwiKSxcclxuICBsb2FkZXJET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGVyXCIpXHJcbn07XHJcblxyXG5sZXQgZGF0YSA9IHtcclxuICBjaXR5OiBwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmdldChcImNpdHlcIiksXHJcblxyXG4gIC8vYXBpIGtleVxyXG4gIHNlY3JldEtleTogXCJjNjk3NmE0YzRlMDU0MjFmOWI0ZWFlZTdhMzExZjBkY1wiLFxyXG4gIHVuaXRzOiBcIk1cIixcclxuICB1bml0c0Rpc3BsYXk6IFwiQ1wiLFxyXG4gIHBlcmlvZDogMSxcclxuXHJcbiAgLy9sb2NhbHN0b3JhZ2Ugb2JqZWN0c1xyXG4gIGhpc3RvcnlPYmo6IHtcclxuICAgIGNpdHk6IFtdXHJcbiAgfSxcclxuICBmYXZvcml0ZU9iajoge1xyXG4gICAgY2l0eTogW11cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBwYXJzZWRVcmwsIGRhdGFET00sIGRhdGEgfTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsImltcG9ydCB7cGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHtmaW5kQ2l0eX0gZnJvbSBcIi4vc2VhcmNoXCI7XHJcblxyXG4vKmNsZWFyIGxvY2Fsc3RvcmFnZSBkYXRhKi9cclxuZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2UoRE9NLCBrZXkpIHtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gIERPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIERPTS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYHRoZXJlIGFyZSBubyAke2tleX0geWV0YCk7XHJcbn1cclxuXHJcbi8vbG9jYWxzdG9yYWdlIG1ldGhvZHMgZm9yIGhpc3RvcnkgYW5kIGZhdm9yaXRlc1xyXG4vL1RPRE8gcmVmYWN0b3JcclxuZnVuY3Rpb24gcHVzaEhpc3RvcnkoRE9NLCBzdG9yYWdlT2JqZWN0LCBjc3NDbGFzcywgbG9jYWxTdG9yYWdlS2V5KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2b3JpdGVzXCIpICYmXHJcbiAgICAgIGxvY2FsU3RvcmFnZUtleSA9PT0gXCJmYXZvcml0ZXNcIiAmJlxyXG4gICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2b3JpdGVzXCIpKS5jaXR5LmluZGV4T2YoZGF0YS5jaXR5KSAhPVxyXG4gICAgICAgIC0xXHJcbiAgICApIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0b3JhZ2VPYmplY3QuY2l0eS5wdXNoKGRhdGEuY2l0eSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZU9iamVjdCkpO1xyXG4gICAgICBzaG93SGlzdG9yeShET00sIHN0b3JhZ2VPYmplY3QsIGNzc0NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dIaXN0b3J5KERPTSwgc3RvcmFnZU9iamVjdCwgY3NzQ2xhc3MpIHtcclxuICAgIERPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgaWYgKHN0b3JhZ2VPYmplY3QpIHtcclxuXHJcbiAgICAgIHN0b3JhZ2VPYmplY3QuY2l0eS5tYXAoaSA9PiB7XHJcbiAgICAgICAgRE9NLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLGA8bGkgY2xhc3M9XCIke2Nzc0NsYXNzfVwiPiR7aX08L2xpPmApO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGxldCBoeXN0b3J5SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcblxyXG4gICAgICBoeXN0b3J5SXRlbS5vbmNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQudGFnTmFtZSA9PT0gJ0xJJyl7XHJcbiAgICAgICAgICBkYXRhLmNpdHkgPSB0YXJnZXQuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgZmluZENpdHkodGFyZ2V0LmlubmVySFRNTCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgfTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQge3B1c2hIaXN0b3J5LCBzaG93SGlzdG9yeSwgY2xlYXJMb2NhbFN0b3JhZ2V9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2xvY2FsU3RvcmFnZS5qcyIsImltcG9ydCB7cGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhfSBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJiaXQuaW8vdjIuMC9mb3JlY2FzdCc7XHJcbmNvbnN0IGdldFdlYXRoZXIgPSB1cmwgPT4gZmV0Y2goYCR7QkFTRV9VUkx9JHt1cmx9YClcclxuICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSlcclxuICB9KVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgfSlcclxuICBcclxuZXhwb3J0IHtnZXRXZWF0aGVyfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvYXBpLmpzIiwiaW1wb3J0IHtwYXJzZWRVcmwsIGRhdGFET00sIGRhdGF9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQge3B1c2hIaXN0b3J5LCBzaG93SGlzdG9yeX0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XHJcblxyXG4vKlRPRE8gbW92ZSBzb21ld2hlcmUgZWxzZSBpIGd1ZXNzKi8gXHJcbmZ1bmN0aW9uIGFkZEZhdm9yaXRlQnV0dG9uKGJvZHkpIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgQ3VycmVudCBjaXR5OiAke2JvZHkuY2l0eV9uYW1lfSBcclxuICAgICAgICA8aW1nIGlkPVwiZmF2b3JpdGVzXCIgc3JjPVwiYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nXCI+XHJcbiAgICAgICAgYFxyXG4gICAgKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zhdm9yaXRlc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHB1c2hIaXN0b3J5KFxyXG4gICAgICAgIGRhdGFET00uZmF2b3JpdGVzRE9NLFxyXG4gICAgICAgIGRhdGEuZmF2b3JpdGVPYmosXHJcbiAgICAgICAgXCJmYXZvcml0ZS1pdGVtXCIsXHJcbiAgICAgICAgXCJmYXZvcml0ZXNcIlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuXHJcbi8vcmVuZGVyIG1ldGhvZFxyXG4vL3RvZG8gLSByZWZhY3RvciBkb24ndCBkbyBET00gb3BlcmF0aW9ucyBpbiBsb29wIVxyXG5mdW5jdGlvbiByZW5kZXJDaXR5KGJvZHkpIHtcclxuICBkYXRhRE9NLmxvYWRlckRPTS5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcclxuICBhZGRGYXZvcml0ZUJ1dHRvbihib2R5KTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLnBlcmlvZDsgaSsrKSB7XHJcbiAgICBkYXRhRE9NLm1haW5ET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG5cclxuICAgICAgLy90ZW1wbGF0ZSB3aXRoIHdlYXRoZXIgZGF0YVxyXG4gICAgICBgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X192YWx1ZXNcIj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXB0aW9uX19udW1iZXJcIj4ke2JvZHkuZGF0YVtpXS50ZW1wfTwvc3Bhbj4gJHtkYXRhLnVuaXRzRGlzcGxheX1cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcHRpb25fX3RpdGxlXCI+YXZnLiB0ZW1wLjwvcD4gXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8b2JqZWN0IGRhdGE9XCJhc3NldHMvbWVkaWEvJHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvZHkuZGF0YVtpXS53ZWF0aGVyLmljb25cclxuICAgICAgICAgICAgICAgICAgICB9LnN2Z1wiIHR5cGU9XCJcIj48L29iamVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNhcHRpb25fX3RpdGxlXCI+JHtcclxuICAgICAgICAgICAgICAgICAgICAgIGJvZHkuZGF0YVtpXS53ZWF0aGVyLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgfTwvcD4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPiR7Ym9keS5kYXRhW2ldLmRhdGV0aW1lXHJcbiAgICAgICAgICAgICAgICAgIC5zcGxpdChcIi1cIilcclxuICAgICAgICAgICAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgICAgICAgICAgICAuam9pbihcIi5cIil9PC9wPiBcclxuICAgICAgICAgICAgICAgIDxwPm1heC4gdGVtcC46ICR7Ym9keS5kYXRhW2ldLm1heF90ZW1wfSAke2RhdGEudW5pdHNEaXNwbGF5fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPm1pbi4gdGVtcC46ICR7Ym9keS5kYXRhW2ldLm1pbl90ZW1wfSAke2RhdGEudW5pdHNEaXNwbGF5fTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPmZlZWxzIGxpa2UsIG1heDogJHtib2R5LmRhdGFbaV0uYXBwX21heF90ZW1wfSAke1xyXG4gICAgICAgIGRhdGEudW5pdHNEaXNwbGF5XHJcbiAgICAgIH08L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5mZWVscyBsaWtlLCBtaW46ICR7Ym9keS5kYXRhW2ldLmFwcF9taW5fdGVtcH0gJHtcclxuICAgICAgICBkYXRhLnVuaXRzRGlzcGxheVxyXG4gICAgICB9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+d2luZDogJHtib2R5LmRhdGFbaV0ud2luZF9zcGR9IG0vczwvcD5cclxuICAgICAgICAgICAgICAgIDxwPnByZWNpcGl0YXRpb246ICR7Ym9keS5kYXRhW2ldLnBvcH0gJTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGBcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge3JlbmRlckNpdHl9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvcmVuZGVyLmpzIiwiaW1wb3J0IHsgcGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi9hcGlcIjtcclxuaW1wb3J0IHsgcmVuZGVyQ2l0eSB9IGZyb20gXCIuL3JlbmRlclwiO1xyXG5pbXBvcnQgeyBwdXNoSGlzdG9yeSwgc2hvd0hpc3RvcnksIGNsZWFyTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XHJcblxyXG4vL3B1c2ggY3VycmVudCBjaXR5IHRvIFVSTFxyXG5mdW5jdGlvbiBwdXNoVXJsKGNpdHkpIHtcclxuICBsZXQgdXJsID0gYGluZGV4Lmh0bWw/Y2l0eT0ke2NpdHl9YDtcclxuICBoaXN0b3J5LnB1c2hTdGF0ZShudWxsLCBudWxsLCB1cmwpO1xyXG4gIGxldCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0RXJyb3IoZXJyb3Ipe1xyXG4gIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xyXG4gIGlmIChlcnJvci5zdGF0dXMgPT09IDIwNCkge1xyXG4gICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgIGBDaXR5IG5vdCBmb3VuZC4gUGxlYXNlLCB0cnkgYWdhaW4uYFxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYFNlYXJjaCBmaWVsZCBpcyBlbXB0eS4gUGxlYXNlLCBlbnRlciBjaXR5IG5hbWVgXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgJHtlcnJvci5zdGF0dXNUZXh0fWApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZmluZENpdHkoY2l0eSkge1xyXG4gIGRhdGFET00ubWFpbkRPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGRhdGFET00udGl0bGVET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICBkYXRhRE9NLmxvYWRlckRPTS5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTsgLy9zaG93IGxvYWRlclxyXG4gIHB1c2hVcmwoY2l0eSk7XHJcblxyXG4gIGdldFdlYXRoZXIoYC9kYWlseT9jaXR5PSR7Y2l0eX0mdW5pdHM9JHtkYXRhLnVuaXRzfSZrZXk9JHtkYXRhLnNlY3JldEtleX1gKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24oYm9keSkge1xyXG4gICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgIHJlbmRlckNpdHkoYm9keSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHNldEVycm9yKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZmluZENpdHkgfTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9zZWFyY2guanMiLCJpbXBvcnQgXCIuL2Fzc2V0cy9zYXNzL2FwcC5zYXNzXCI7XHJcblxyXG5pbXBvcnQge3BhcnNlZFVybCwgZGF0YURPTSwgZGF0YX0gZnJvbSBcIi4vYXNzZXRzL2pzL2NvbmZpZ1wiO1xyXG5pbXBvcnQge2dldFdlYXRoZXJ9IGZyb20gXCIuL2Fzc2V0cy9qcy9hcGlcIjtcclxuaW1wb3J0IHtyZW5kZXJDaXR5fSBmcm9tIFwiLi9hc3NldHMvanMvcmVuZGVyXCI7XHJcbmltcG9ydCB7cHVzaEhpc3RvcnksIHNob3dIaXN0b3J5LCBjbGVhckxvY2FsU3RvcmFnZX0gZnJvbSBcIi4vYXNzZXRzL2pzL2xvY2FsU3RvcmFnZVwiO1xyXG5pbXBvcnQge2ZpbmRDaXR5fSBmcm9tIFwiLi9hc3NldHMvanMvc2VhcmNoXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9sb2FkZXIuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYzA0ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2QwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2QwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2QwM2Quc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9mMDFkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA1ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA2ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwNWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3MwNmQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDVkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDZkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDdkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdTAwZC5zdmdcIjtcclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogMjAxNy5XZWF0aGVyIGFwcGxpY2F0aW9uIGJ5IEFsZXggTmVsaW4gKlxyXG4gKiBCYXNlZCBvbiB3ZWF0aGVyYml0LmlvIEFQSSAgICAgICAgICAgICAqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4oZnVuY3Rpb24oKSB7XHJcbiAgXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XHJcbiAgICBpbml0KCk7XHJcbiAgfSk7XHJcblxyXG4gIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAvL3J1biBmZXRjaCBtZXRob2QsIHdlIGhhdmUgY2l0eSBpbiBVUkxcclxuICAgIGlmIChwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmdldChcImNpdHlcIikpIHtcclxuICAgICAgZmluZENpdHkoZGF0YS5jaXR5KTtcclxuICAgIH1cclxuXHJcbiAgICAvL2dldCB2YWx1ZXMgZnJvbSBsb2NhbHN0b3JhZ2UsIGlmIGFueVxyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlzdG9yeVwiKSkge1xyXG4gICAgICBkYXRhLmhpc3RvcnlPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaGlzdG9yeVwiKSk7XHJcbiAgICAgIHNob3dIaXN0b3J5KGRhdGFET00uaGlzdG9yeURPTSwgZGF0YS5oaXN0b3J5T2JqLCBcImhpc3RvcnktaXRlbVwiKTtcclxuICAgIH1cclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc1wiKSkge1xyXG4gICAgICBkYXRhLmZhdm9yaXRlT2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc1wiKSk7XHJcbiAgICAgIHNob3dIaXN0b3J5KGRhdGFET00uZmF2b3JpdGVzRE9NLCBkYXRhLmZhdm9yaXRlT2JqLCBcImZhdm9yaXRlLWl0ZW1cIik7XHJcbiAgICB9XHJcblxyXG4gICAgZG9jdW1lbnQub25jbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ID09PSBkYXRhRE9NLmJ1dHRvbkhpc3RvcnlDbGVhcikge1xyXG4gICAgICAgIGNsZWFyTG9jYWxTdG9yYWdlKGRhdGFET00uaGlzdG9yeURPTSwgXCJoaXN0b3J5XCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCA9PT0gZGF0YURPTS5idXR0b25GYXZvcml0ZXNDbGVhcikge1xyXG4gICAgICAgIGNsZWFyTG9jYWxTdG9yYWdlKGRhdGFET00uZmF2b3JpdGVzRE9NLCBcImZhdm9yaXRlc1wiKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkb2N1bWVudC5vbmNoYW5nZSA9IGV2ZW50ID0+IHtcclxuICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHJcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ID09PSBkYXRhRE9NLnVuaXRzRE9NKSB7XHJcbiAgICAgICAgZGF0YS51bml0cyA9XHJcbiAgICAgICAgICBkYXRhRE9NLnVuaXRzRE9NLm9wdGlvbnNbXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdW5pdHNcIikuc2VsZWN0ZWRJbmRleFxyXG4gICAgICAgICAgXS52YWx1ZTtcclxuICAgICAgICBkYXRhLnVuaXRzRGlzcGxheSA9IGRhdGEudW5pdHMgPT09IFwiTVwiID8gXCJDXCIgOiBcIkZcIjtcclxuICAgICAgICBpZiAoZGF0YS5jaXR5KSB7XHJcbiAgICAgICAgICBmaW5kQ2l0eShkYXRhLmNpdHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgPT09IGRhdGFET00ucGVyaW9kRE9NKSB7XHJcbiAgICAgICAgZGF0YS5wZXJpb2QgPSArZGF0YURPTS5wZXJpb2RET00ub3B0aW9uc1tcclxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVyaW9kXCIpLnNlbGVjdGVkSW5kZXhcclxuICAgICAgICBdLnZhbHVlO1xyXG4gICAgICAgIGlmIChkYXRhLmNpdHkpIHtcclxuICAgICAgICAgIGZpbmRDaXR5KGRhdGEuY2l0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRhdGFET00uZm9ybURPTS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGUgPT4ge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGRhdGEuY2l0eSA9IGRhdGFET00uaW5wdXRET00udmFsdWU7XHJcbiAgICAgIGZpbmRDaXR5KGRhdGEuY2l0eSk7XHJcbiAgICAgIGlmIChkYXRhLmNpdHkpIHtcclxuICAgICAgICBwdXNoSGlzdG9yeShcclxuICAgICAgICAgIGRhdGFET00uaGlzdG9yeURPTSxcclxuICAgICAgICAgIGRhdGEuaGlzdG9yeU9iaixcclxuICAgICAgICAgIFwiaGlzdG9yeS1pdGVtXCIsXHJcbiAgICAgICAgICBcImhpc3RvcnlcIlxyXG4gICAgICAgICk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvL3B1c2ggY3VycmVudCBjaXR5IHRvIFVSTFxyXG4gIFxyXG5cclxufSkoKTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Fzcy9hcHAuc2Fzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9sb2FkZXIuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZDAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZDAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZDAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZjAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9mMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjA2ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDZkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczA2ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDZkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA2ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDZkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA3ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDdkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdTAwZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy91MDBkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==