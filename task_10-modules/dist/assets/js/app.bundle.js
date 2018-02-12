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

function addFavoriteButton(body) {
  _config.dataDOM.titleDOM.insertAdjacentHTML("beforeend", "Current city: " + body.city_name + " \n        <img id=\"favorites\" src=\"assets/media/favorites-button.png\">\n        ");

  document.querySelector("#favorites").addEventListener("click", function () {
    (0, _localStorage.pushHistory)(_config.dataDOM.favoritesDOM, _config.data.favoriteObj, "favorite-item", "favorites");
  });
}

//render method
function renderCity(body) {
  _config.dataDOM.loaderDOM.classList.add("none");
  addFavoriteButton(body);

  for (var i = 0; i < _config.data.period; i++) {
    _config.dataDOM.mainDOM.insertAdjacentHTML("beforeend",

    //template with weather data
    "<div class=\"content\">\n          <div class=\"content__values\">\n            <p>\n              <span class=\"caption__number\">" + body.data[i].temp + "</span> " + _config.data.unitsDisplay + "\n              <p class=\"caption__title\">avg. temp.</p> \n            </p>\n            <object data=\"assets/media/" + body.data[i].weather.icon + ".svg\" type=\"\">\n            </object>\n            <p class=\"caption__title\">" + body.data[i].weather.description + "</p> \n          </div>\n          <p class=\"date\">" + body.data[i].datetime.split("-").reverse().join(".") + "\n          </p> \n          <p>max. temp.: " + body.data[i].max_temp + " " + _config.data.unitsDisplay + "</p>\n          <p>min. temp.: " + body.data[i].min_temp + " " + _config.data.unitsDisplay + "</p>\n          <p>feels like, max: " + body.data[i].app_max_temp + " " + _config.data.unitsDisplay + "</p>\n          <p>feels like, min: " + body.data[i].app_min_temp + " " + _config.data.unitsDisplay + "</p>\n          <p>wind: " + body.data[i].wind_spd + " m/s</p>\n          <p>precipitation: " + body.data[i].pop + " %</p>\n      </div>\n      ");
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
  history.pushState(city, null, url);
  var parsedUrl = new URL(window.location.href);
  getUrl();
}

function getUrl() {
  window.onpopstate = function (event) {
    findCity(event.state);
  };
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNWM4ODUwZTgxMGUxZTJiZjc3OTAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9hcHAuc2FzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvZmF2b3JpdGVzLWJ1dHRvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2MwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2QwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2YwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDdkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdTAwZC5zdmciXSwibmFtZXMiOlsicGFyc2VkVXJsIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGF0YURPTSIsImZvcm1ET00iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dERPTSIsIm1haW5ET00iLCJ0aXRsZURPTSIsInVuaXRzRE9NIiwicGVyaW9kRE9NIiwiaGlzdG9yeURPTSIsImZhdm9yaXRlc0RPTSIsImJ1dHRvbkhpc3RvcnlDbGVhciIsImJ1dHRvbkZhdm9yaXRlc0NsZWFyIiwibG9hZGVyRE9NIiwiZGF0YSIsImNpdHkiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJzZWNyZXRLZXkiLCJ1bml0cyIsInVuaXRzRGlzcGxheSIsInBlcmlvZCIsImhpc3RvcnlPYmoiLCJmYXZvcml0ZU9iaiIsImNsZWFyTG9jYWxTdG9yYWdlIiwiRE9NIiwia2V5IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImlubmVySFRNTCIsImluc2VydEFkamFjZW50SFRNTCIsInB1c2hIaXN0b3J5Iiwic3RvcmFnZU9iamVjdCIsImNzc0NsYXNzIiwibG9jYWxTdG9yYWdlS2V5IiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImluZGV4T2YiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNob3dIaXN0b3J5IiwibWFwIiwiaSIsImh5c3RvcnlJdGVtIiwib25jbGljayIsInRhcmdldCIsImV2ZW50IiwidGFnTmFtZSIsIkJBU0VfVVJMIiwiZ2V0V2VhdGhlciIsImZldGNoIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc29sdmUiLCJqc29uIiwiYWRkRmF2b3JpdGVCdXR0b24iLCJib2R5IiwiY2l0eV9uYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlckNpdHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZW1wIiwid2VhdGhlciIsImljb24iLCJkZXNjcmlwdGlvbiIsImRhdGV0aW1lIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsIm1heF90ZW1wIiwibWluX3RlbXAiLCJhcHBfbWF4X3RlbXAiLCJhcHBfbWluX3RlbXAiLCJ3aW5kX3NwZCIsInBvcCIsInB1c2hVcmwiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwiZ2V0VXJsIiwib25wb3BzdGF0ZSIsImZpbmRDaXR5Iiwic3RhdGUiLCJzZXRFcnJvciIsImVycm9yIiwic3RhdHVzVGV4dCIsInJlbW92ZSIsImNhdGNoIiwiaW5pdCIsIm9uY2hhbmdlIiwib3B0aW9ucyIsInNlbGVjdGVkSW5kZXgiLCJ2YWx1ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0EsSUFBSUEsWUFBWSxJQUFJQyxHQUFKLENBQVFDLE9BQU9DLFFBQVAsQ0FBZ0JDLElBQXhCLENBQWhCOztBQUVBO0FBQ0EsSUFBTUMsVUFBVTtBQUNkQyxXQUFTQyxTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBREs7QUFFZEMsWUFBVUYsU0FBU0MsYUFBVCxDQUF1QixTQUF2QixDQUZJO0FBR2RFLFdBQVNILFNBQVNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FISztBQUlkRyxZQUFVSixTQUFTQyxhQUFULENBQXVCLGNBQXZCLENBSkk7QUFLZEksWUFBVUwsU0FBU0MsYUFBVCxDQUF1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OztBQUdELENBOUVELEk7Ozs7OztBQ3pEQSx5Qzs7Ozs7O0FDQUEscUU7Ozs7OztBQ0FBLCtFOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL2FwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1Yzg4NTBlODEwZTFlMmJmNzc5MCIsIi8vZ2V0IGN1cnJlbnQgdXJsXHJcbmxldCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHJcbi8vb2JqZWN0IHdpdGggRE9NIGVsZW1lbnRzXHJcbmNvbnN0IGRhdGFET00gPSB7XHJcbiAgZm9ybURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtZm9ybVwiKSxcclxuICBpbnB1dERPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hcIiksXHJcbiAgbWFpbkRPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpLFxyXG4gIHRpdGxlRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpLFxyXG4gIHVuaXRzRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VuaXRzXCIpLFxyXG4gIHBlcmlvZERPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwZXJpb2RcIiksXHJcbiAgaGlzdG9yeURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaXN0b3J5XCIpLFxyXG4gIGZhdm9yaXRlc0RPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXZvcml0ZXNcIiksXHJcbiAgYnV0dG9uSGlzdG9yeUNsZWFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hpc3RvcnktY2xlYXJcIiksXHJcbiAgYnV0dG9uRmF2b3JpdGVzQ2xlYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmF2b3JpdGVzLWNsZWFyXCIpLFxyXG4gIGxvYWRlckRPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkZXJcIilcclxufTtcclxuXHJcbmxldCBkYXRhID0ge1xyXG4gIGNpdHk6IHBhcnNlZFVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiY2l0eVwiKSxcclxuXHJcbiAgLy9hcGkga2V5XHJcbiAgc2VjcmV0S2V5OiBcImM2OTc2YTRjNGUwNTQyMWY5YjRlYWVlN2EzMTFmMGRjXCIsXHJcbiAgdW5pdHM6IFwiTVwiLFxyXG4gIHVuaXRzRGlzcGxheTogXCJDXCIsXHJcbiAgcGVyaW9kOiAxLFxyXG5cclxuICAvL2xvY2Fsc3RvcmFnZSBvYmplY3RzXHJcbiAgaGlzdG9yeU9iajoge1xyXG4gICAgY2l0eTogW11cclxuICB9LFxyXG4gIGZhdm9yaXRlT2JqOiB7XHJcbiAgICBjaXR5OiBbXVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHBhcnNlZFVybCwgZGF0YURPTSwgZGF0YSB9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29uZmlnLmpzIiwiaW1wb3J0IHtwYXJzZWRVcmwsIGRhdGFET00sIGRhdGF9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQge2ZpbmRDaXR5fSBmcm9tIFwiLi9zZWFyY2hcIjtcclxuXHJcbi8qY2xlYXIgbG9jYWxzdG9yYWdlIGRhdGEqL1xyXG5mdW5jdGlvbiBjbGVhckxvY2FsU3RvcmFnZShET00sIGtleSkge1xyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgRE9NLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgRE9NLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgdGhlcmUgYXJlIG5vICR7a2V5fSB5ZXRgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHVzaEhpc3RvcnkoRE9NLCBzdG9yYWdlT2JqZWN0LCBjc3NDbGFzcywgbG9jYWxTdG9yYWdlS2V5KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2b3JpdGVzXCIpICYmXHJcbiAgICAgIGxvY2FsU3RvcmFnZUtleSA9PT0gXCJmYXZvcml0ZXNcIiAmJlxyXG4gICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2b3JpdGVzXCIpKS5jaXR5LmluZGV4T2YoZGF0YS5jaXR5KSAhPVxyXG4gICAgICAgIC0xXHJcbiAgICApIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0b3JhZ2VPYmplY3QuY2l0eS5wdXNoKGRhdGEuY2l0eSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZU9iamVjdCkpO1xyXG4gICAgICBzaG93SGlzdG9yeShET00sIHN0b3JhZ2VPYmplY3QsIGNzc0NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dIaXN0b3J5KERPTSwgc3RvcmFnZU9iamVjdCwgY3NzQ2xhc3MpIHtcclxuICAgIERPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgaWYgKHN0b3JhZ2VPYmplY3QpIHtcclxuXHJcbiAgICAgIHN0b3JhZ2VPYmplY3QuY2l0eS5tYXAoaSA9PiB7XHJcbiAgICAgICAgRE9NLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLGA8bGkgY2xhc3M9XCIke2Nzc0NsYXNzfVwiPiR7aX08L2xpPmApO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGxldCBoeXN0b3J5SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcblxyXG4gICAgICBoeXN0b3J5SXRlbS5vbmNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQudGFnTmFtZSA9PT0gJ0xJJyl7XHJcbiAgICAgICAgICBkYXRhLmNpdHkgPSB0YXJnZXQuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgZmluZENpdHkodGFyZ2V0LmlubmVySFRNTCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgfTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQge3B1c2hIaXN0b3J5LCBzaG93SGlzdG9yeSwgY2xlYXJMb2NhbFN0b3JhZ2V9XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2xvY2FsU3RvcmFnZS5qcyIsImltcG9ydCB7cGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhfSBmcm9tIFwiLi9jb25maWdcIjtcclxuXHJcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJiaXQuaW8vdjIuMC9mb3JlY2FzdCc7XHJcbmNvbnN0IGdldFdlYXRoZXIgPSB1cmwgPT4gZmV0Y2goYCR7QkFTRV9VUkx9JHt1cmx9YClcclxuICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSlcclxuICB9KVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgfSlcclxuICBcclxuZXhwb3J0IHtnZXRXZWF0aGVyfTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvYXBpLmpzIiwiaW1wb3J0IHtwYXJzZWRVcmwsIGRhdGFET00sIGRhdGF9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQge3B1c2hIaXN0b3J5LCBzaG93SGlzdG9yeX0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XHJcblxyXG5cclxuZnVuY3Rpb24gYWRkRmF2b3JpdGVCdXR0b24oYm9keSkge1xyXG4gICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgIGBDdXJyZW50IGNpdHk6ICR7Ym9keS5jaXR5X25hbWV9IFxyXG4gICAgICAgIDxpbWcgaWQ9XCJmYXZvcml0ZXNcIiBzcmM9XCJhc3NldHMvbWVkaWEvZmF2b3JpdGVzLWJ1dHRvbi5wbmdcIj5cclxuICAgICAgICBgXHJcbiAgICApO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmF2b3JpdGVzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgcHVzaEhpc3RvcnkoXHJcbiAgICAgICAgZGF0YURPTS5mYXZvcml0ZXNET00sXHJcbiAgICAgICAgZGF0YS5mYXZvcml0ZU9iaixcclxuICAgICAgICBcImZhdm9yaXRlLWl0ZW1cIixcclxuICAgICAgICBcImZhdm9yaXRlc1wiXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4vL3JlbmRlciBtZXRob2RcclxuZnVuY3Rpb24gcmVuZGVyQ2l0eShib2R5KSB7XHJcbiAgZGF0YURPTS5sb2FkZXJET00uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XHJcbiAgYWRkRmF2b3JpdGVCdXR0b24oYm9keSk7XHJcblxyXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5wZXJpb2Q7IGkrKykge1xyXG4gICAgZGF0YURPTS5tYWluRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuXHJcbiAgICAgIC8vdGVtcGxhdGUgd2l0aCB3ZWF0aGVyIGRhdGFcclxuICAgICAgYDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9fdmFsdWVzXCI+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbl9fbnVtYmVyXCI+JHtib2R5LmRhdGFbaV0udGVtcH08L3NwYW4+ICR7ZGF0YS51bml0c0Rpc3BsYXl9XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXB0aW9uX190aXRsZVwiPmF2Zy4gdGVtcC48L3A+IFxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxvYmplY3QgZGF0YT1cImFzc2V0cy9tZWRpYS8ke2JvZHkuZGF0YVtpXS53ZWF0aGVyLmljb259LnN2Z1wiIHR5cGU9XCJcIj5cclxuICAgICAgICAgICAgPC9vYmplY3Q+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FwdGlvbl9fdGl0bGVcIj4ke2JvZHkuZGF0YVtpXS53ZWF0aGVyLmRlc2NyaXB0aW9ufTwvcD4gXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPiR7Ym9keS5kYXRhW2ldLmRhdGV0aW1lXHJcbiAgICAgICAgICAgIC5zcGxpdChcIi1cIilcclxuICAgICAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgICAgICAuam9pbihcIi5cIil9XHJcbiAgICAgICAgICA8L3A+IFxyXG4gICAgICAgICAgPHA+bWF4LiB0ZW1wLjogJHtib2R5LmRhdGFbaV0ubWF4X3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgICAgPHA+bWluLiB0ZW1wLjogJHtib2R5LmRhdGFbaV0ubWluX3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgICAgPHA+ZmVlbHMgbGlrZSwgbWF4OiAke2JvZHkuZGF0YVtpXS5hcHBfbWF4X3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgICAgPHA+ZmVlbHMgbGlrZSwgbWluOiAke2JvZHkuZGF0YVtpXS5hcHBfbWluX3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgICAgPHA+d2luZDogJHtib2R5LmRhdGFbaV0ud2luZF9zcGR9IG0vczwvcD5cclxuICAgICAgICAgIDxwPnByZWNpcGl0YXRpb246ICR7Ym9keS5kYXRhW2ldLnBvcH0gJTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIGBcclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge3JlbmRlckNpdHl9O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvcmVuZGVyLmpzIiwiaW1wb3J0IHsgcGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi9hcGlcIjtcclxuaW1wb3J0IHsgcmVuZGVyQ2l0eSB9IGZyb20gXCIuL3JlbmRlclwiO1xyXG5pbXBvcnQgeyBwdXNoSGlzdG9yeSwgc2hvd0hpc3RvcnksIGNsZWFyTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XHJcblxyXG4vL3B1c2ggY3VycmVudCBjaXR5IHRvIFVSTFxyXG5mdW5jdGlvbiBwdXNoVXJsKGNpdHkpIHtcclxuICBsZXQgdXJsID0gYGluZGV4Lmh0bWw/Y2l0eT0ke2NpdHl9YDtcclxuICBoaXN0b3J5LnB1c2hTdGF0ZShjaXR5LCBudWxsLCB1cmwpO1xyXG4gIGxldCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICBnZXRVcmwoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXJsKCl7XHJcbiAgd2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgZmluZENpdHkoZXZlbnQuc3RhdGUpO1xyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEVycm9yKGVycm9yKXtcclxuICBkYXRhRE9NLmxvYWRlckRPTS5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcclxuICBpZiAoZXJyb3Iuc3RhdHVzID09PSAyMDQpIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgQ2l0eSBub3QgZm91bmQuIFBsZWFzZSwgdHJ5IGFnYWluLmBcclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgIGBTZWFyY2ggZmllbGQgaXMgZW1wdHkuIFBsZWFzZSwgZW50ZXIgY2l0eSBuYW1lYFxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYCR7ZXJyb3Iuc3RhdHVzVGV4dH1gKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRDaXR5KGNpdHkpIHtcclxuICBkYXRhRE9NLm1haW5ET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICBkYXRhRE9NLnRpdGxlRE9NLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgZGF0YURPTS5sb2FkZXJET00uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7IC8vc2hvdyBsb2FkZXJcclxuICBwdXNoVXJsKGNpdHkpO1xyXG5cclxuICBnZXRXZWF0aGVyKGAvZGFpbHk/Y2l0eT0ke2NpdHl9JnVuaXRzPSR7ZGF0YS51bml0c30ma2V5PSR7ZGF0YS5zZWNyZXRLZXl9YClcclxuICAgIC50aGVuKGZ1bmN0aW9uKGJvZHkpIHtcclxuICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICByZW5kZXJDaXR5KGJvZHkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBib2R5O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChzZXRFcnJvcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGZpbmRDaXR5IH07XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvc2VhcmNoLmpzIiwiaW1wb3J0IFwiLi9hc3NldHMvc2Fzcy9hcHAuc2Fzc1wiO1xyXG5cclxuaW1wb3J0IHtwYXJzZWRVcmwsIGRhdGFET00sIGRhdGF9IGZyb20gXCIuL2Fzc2V0cy9qcy9jb25maWdcIjtcclxuaW1wb3J0IHtnZXRXZWF0aGVyfSBmcm9tIFwiLi9hc3NldHMvanMvYXBpXCI7XHJcbmltcG9ydCB7cmVuZGVyQ2l0eX0gZnJvbSBcIi4vYXNzZXRzL2pzL3JlbmRlclwiO1xyXG5pbXBvcnQge3B1c2hIaXN0b3J5LCBzaG93SGlzdG9yeSwgY2xlYXJMb2NhbFN0b3JhZ2V9IGZyb20gXCIuL2Fzc2V0cy9qcy9sb2NhbFN0b3JhZ2VcIjtcclxuaW1wb3J0IHtmaW5kQ2l0eX0gZnJvbSBcIi4vYXNzZXRzL2pzL3NlYXJjaFwiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA1ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2MwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2MwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2MwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2MwNGQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDNkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvZjAxZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3IwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3IwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3IwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3IwNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3IwNWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3IwNmQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDVkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDZkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA1ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA2ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA3ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3UwMGQuc3ZnXCI7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIDIwMTcuV2VhdGhlciBhcHBsaWNhdGlvbiBieSBBbGV4IE5lbGluICpcclxuICogQmFzZWQgb24gd2VhdGhlcmJpdC5pbyBBUEkgICAgICAgICAgICAgKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgaW5pdCgpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgLy9ydW4gZmV0Y2ggbWV0aG9kLCB3ZSBoYXZlIGNpdHkgaW4gVVJMXHJcbiAgICBpZiAocGFyc2VkVXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJjaXR5XCIpKSB7XHJcbiAgICAgIGZpbmRDaXR5KGRhdGEuY2l0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXQgdmFsdWVzIGZyb20gbG9jYWxzdG9yYWdlLCBpZiBhbnlcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpc3RvcnlcIikpIHtcclxuICAgICAgZGF0YS5oaXN0b3J5T2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpc3RvcnlcIikpO1xyXG4gICAgICBzaG93SGlzdG9yeShkYXRhRE9NLmhpc3RvcnlET00sIGRhdGEuaGlzdG9yeU9iaiwgXCJoaXN0b3J5LWl0ZW1cIik7XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNcIikpIHtcclxuICAgICAgZGF0YS5mYXZvcml0ZU9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNcIikpO1xyXG4gICAgICBzaG93SGlzdG9yeShkYXRhRE9NLmZhdm9yaXRlc0RPTSwgZGF0YS5mYXZvcml0ZU9iaiwgXCJmYXZvcml0ZS1pdGVtXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGRvY3VtZW50Lm9uY2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCA9PT0gZGF0YURPTS5idXR0b25IaXN0b3J5Q2xlYXIpIHtcclxuICAgICAgICBjbGVhckxvY2FsU3RvcmFnZShkYXRhRE9NLmhpc3RvcnlET00sIFwiaGlzdG9yeVwiKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgPT09IGRhdGFET00uYnV0dG9uRmF2b3JpdGVzQ2xlYXIpIHtcclxuICAgICAgICBjbGVhckxvY2FsU3RvcmFnZShkYXRhRE9NLmZhdm9yaXRlc0RPTSwgXCJmYXZvcml0ZXNcIik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQub25jaGFuZ2UgPSBldmVudCA9PiB7XHJcbiAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCA9PT0gZGF0YURPTS51bml0c0RPTSkge1xyXG4gICAgICAgIGRhdGEudW5pdHMgPVxyXG4gICAgICAgICAgZGF0YURPTS51bml0c0RPTS5vcHRpb25zW1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VuaXRzXCIpLnNlbGVjdGVkSW5kZXhcclxuICAgICAgICAgIF0udmFsdWU7XHJcbiAgICAgICAgZGF0YS51bml0c0Rpc3BsYXkgPSBkYXRhLnVuaXRzID09PSBcIk1cIiA/IFwiQ1wiIDogXCJGXCI7XHJcbiAgICAgICAgaWYgKGRhdGEuY2l0eSkge1xyXG4gICAgICAgICAgZmluZENpdHkoZGF0YS5jaXR5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ID09PSBkYXRhRE9NLnBlcmlvZERPTSkge1xyXG4gICAgICAgIGRhdGEucGVyaW9kID0gK2RhdGFET00ucGVyaW9kRE9NLm9wdGlvbnNbXHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BlcmlvZFwiKS5zZWxlY3RlZEluZGV4XHJcbiAgICAgICAgXS52YWx1ZTtcclxuICAgICAgICBpZiAoZGF0YS5jaXR5KSB7XHJcbiAgICAgICAgICBmaW5kQ2l0eShkYXRhLmNpdHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBkYXRhRE9NLmZvcm1ET00uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBlID0+IHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICBkYXRhLmNpdHkgPSBkYXRhRE9NLmlucHV0RE9NLnZhbHVlO1xyXG4gICAgICBmaW5kQ2l0eShkYXRhLmNpdHkpO1xyXG4gICAgICBpZiAoZGF0YS5jaXR5KSB7XHJcbiAgICAgICAgcHVzaEhpc3RvcnkoXHJcbiAgICAgICAgICBkYXRhRE9NLmhpc3RvcnlET00sXHJcbiAgICAgICAgICBkYXRhLmhpc3RvcnlPYmosXHJcbiAgICAgICAgICBcImhpc3RvcnktaXRlbVwiLFxyXG4gICAgICAgICAgXCJoaXN0b3J5XCJcclxuICAgICAgICApO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLy9wdXNoIGN1cnJlbnQgY2l0eSB0byBVUkxcclxuICBcclxuXHJcbn0pKCk7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3Nhc3MvYXBwLnNhc3Ncbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2xvYWRlci5zdmdcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZmF2b3JpdGVzLWJ1dHRvbi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9hMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2EwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2YwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZjAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwN2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA3ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3UwMGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdTAwZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=