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

  //create container for inserting data from loop
  var documentFragment = document.createDocumentFragment();

  for (var i = 0; i < _config.data.period; i++) {
    var contentWrapper = document.createElement("div");
    contentWrapper.className = "content";
    contentWrapper.insertAdjacentHTML("beforeend", "\n        <div class=\"content__values\">\n          <p>\n            <span class=\"caption__number\">" + body.data[i].temp + "</span> " + _config.data.unitsDisplay + "\n            <p class=\"caption__title\">avg. temp.</p> \n          </p>\n          <object data=\"assets/media/" + body.data[i].weather.icon + ".svg\" type=\"\">\n          </object>\n          <p class=\"caption__title\">" + body.data[i].weather.description + "</p> \n        </div>\n        <p class=\"date\">" + body.data[i].datetime.split("-").reverse().join(".") + "\n        </p> \n        <p>max. temp.: " + body.data[i].max_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>min. temp.: " + body.data[i].min_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>feels like, max: " + body.data[i].app_max_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>feels like, min: " + body.data[i].app_min_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>wind: " + body.data[i].wind_spd + " m/s</p>\n        <p>precipitation: " + body.data[i].pop + " %</p>\n      ");
    documentFragment.appendChild(contentWrapper);
  }

  _config.dataDOM.mainDOM.appendChild(documentFragment);
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
    if (event.state !== null) {
      findCity(event.state);
    }
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
    //run fetch method, when there is city in URL
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGFkMjdlNjk5NjkxYmEwNzg0ZDIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbG9jYWxTdG9yYWdlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9hcHAuc2FzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvZmF2b3JpdGVzLWJ1dHRvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2MwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2QwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2YwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDdkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdTAwZC5zdmciXSwibmFtZXMiOlsicGFyc2VkVXJsIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiZGF0YURPTSIsImZvcm1ET00iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dERPTSIsIm1haW5ET00iLCJ0aXRsZURPTSIsInVuaXRzRE9NIiwicGVyaW9kRE9NIiwiaGlzdG9yeURPTSIsImZhdm9yaXRlc0RPTSIsImJ1dHRvbkhpc3RvcnlDbGVhciIsImJ1dHRvbkZhdm9yaXRlc0NsZWFyIiwibG9hZGVyRE9NIiwiZGF0YSIsImNpdHkiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJzZWNyZXRLZXkiLCJ1bml0cyIsInVuaXRzRGlzcGxheSIsInBlcmlvZCIsImhpc3RvcnlPYmoiLCJmYXZvcml0ZU9iaiIsImNsZWFyTG9jYWxTdG9yYWdlIiwiRE9NIiwia2V5IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImlubmVySFRNTCIsImluc2VydEFkamFjZW50SFRNTCIsInB1c2hIaXN0b3J5Iiwic3RvcmFnZU9iamVjdCIsImNzc0NsYXNzIiwibG9jYWxTdG9yYWdlS2V5IiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImluZGV4T2YiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNob3dIaXN0b3J5IiwibWFwIiwiaSIsImh5c3RvcnlJdGVtIiwib25jbGljayIsInRhcmdldCIsImV2ZW50IiwidGFnTmFtZSIsIkJBU0VfVVJMIiwiZ2V0V2VhdGhlciIsImZldGNoIiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc29sdmUiLCJqc29uIiwiYWRkRmF2b3JpdGVCdXR0b24iLCJib2R5IiwiY2l0eV9uYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbmRlckNpdHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJkb2N1bWVudEZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsImNvbnRlbnRXcmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRlbXAiLCJ3ZWF0aGVyIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiZGF0ZXRpbWUiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwibWF4X3RlbXAiLCJtaW5fdGVtcCIsImFwcF9tYXhfdGVtcCIsImFwcF9taW5fdGVtcCIsIndpbmRfc3BkIiwicG9wIiwiYXBwZW5kQ2hpbGQiLCJwdXNoVXJsIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsImdldFVybCIsIm9ucG9wc3RhdGUiLCJzdGF0ZSIsImZpbmRDaXR5Iiwic2V0RXJyb3IiLCJlcnJvciIsInN0YXR1c1RleHQiLCJyZW1vdmUiLCJjYXRjaCIsImluaXQiLCJvbmNoYW5nZSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidmFsdWUiLCJlIiwicHJldmVudERlZmF1bHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzdEQTtBQUNBLElBQUlBLFlBQVksSUFBSUMsR0FBSixDQUFRQyxPQUFPQyxRQUFQLENBQWdCQyxJQUF4QixDQUFoQjs7QUFFQTtBQUNBLElBQU1DLFVBQVU7QUFDZEMsV0FBU0MsU0FBU0MsYUFBVCxDQUF1QixjQUF2QixDQURLO0FBRWRDLFlBQVVGLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FGSTtBQUdk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SSxhQUFLekYsSUFBVCxFQUFlO0FBQ2IsZ0NBQVMsYUFBS0EsSUFBZDtBQUNEO0FBQ0Y7QUFDRixLQXRCRDs7QUF3QkEsb0JBQVFkLE9BQVIsQ0FBZ0IrRCxnQkFBaEIsQ0FBaUMsUUFBakMsRUFBMkMsYUFBSztBQUM5Q3lDLFFBQUVDLGNBQUY7QUFDQSxtQkFBSzNGLElBQUwsR0FBWSxnQkFBUVgsUUFBUixDQUFpQm9HLEtBQTdCO0FBQ0EsNEJBQVMsYUFBS3pGLElBQWQ7QUFDQSxVQUFJLGFBQUtBLElBQVQsRUFBZTtBQUNiLHVDQUNFLGdCQUFRTixVQURWLEVBRUUsYUFBS2EsVUFGUCxFQUdFLGNBSEYsRUFJRSxTQUpGO0FBTUQ7QUFDRCxhQUFPLEtBQVA7QUFDRCxLQWJEO0FBY0Q7QUFFRixDQTNFRCxJOzs7Ozs7QUN6REEseUM7Ozs7OztBQ0FBLHFFOzs7Ozs7QUNBQSwrRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRSIsImZpbGUiOiIuL2Fzc2V0cy9qcy9hcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGFkMjdlNjk5NjkxYmEwNzg0ZDIiLCIvL2dldCBjdXJyZW50IHVybFxyXG5sZXQgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblxyXG4vL29iamVjdCB3aXRoIERPTSBlbGVtZW50c1xyXG5jb25zdCBkYXRhRE9NID0ge1xyXG4gIGZvcm1ET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWZvcm1cIiksXHJcbiAgaW5wdXRET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoXCIpLFxyXG4gIG1haW5ET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKSxcclxuICB0aXRsZURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKSxcclxuICB1bml0c0RPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1bml0c1wiKSxcclxuICBwZXJpb2RET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVyaW9kXCIpLFxyXG4gIGhpc3RvcnlET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlzdG9yeVwiKSxcclxuICBmYXZvcml0ZXNET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGVzXCIpLFxyXG4gIGJ1dHRvbkhpc3RvcnlDbGVhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaXN0b3J5LWNsZWFyXCIpLFxyXG4gIGJ1dHRvbkZhdm9yaXRlc0NsZWFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zhdm9yaXRlcy1jbGVhclwiKSxcclxuICBsb2FkZXJET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGVyXCIpXHJcbn07XHJcblxyXG5sZXQgZGF0YSA9IHtcclxuICBjaXR5OiBwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmdldChcImNpdHlcIiksXHJcblxyXG4gIC8vYXBpIGtleVxyXG4gIHNlY3JldEtleTogXCJjNjk3NmE0YzRlMDU0MjFmOWI0ZWFlZTdhMzExZjBkY1wiLFxyXG4gIHVuaXRzOiBcIk1cIixcclxuICB1bml0c0Rpc3BsYXk6IFwiQ1wiLFxyXG4gIHBlcmlvZDogMSxcclxuXHJcbiAgLy9sb2NhbHN0b3JhZ2Ugb2JqZWN0c1xyXG4gIGhpc3RvcnlPYmo6IHtcclxuICAgIGNpdHk6IFtdXHJcbiAgfSxcclxuICBmYXZvcml0ZU9iajoge1xyXG4gICAgY2l0eTogW11cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBwYXJzZWRVcmwsIGRhdGFET00sIGRhdGEgfTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsImltcG9ydCB7cGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHtmaW5kQ2l0eX0gZnJvbSBcIi4vc2VhcmNoXCI7XHJcblxyXG4vKmNsZWFyIGxvY2Fsc3RvcmFnZSBkYXRhKi9cclxuZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2UoRE9NLCBrZXkpIHtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gIERPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIERPTS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYHRoZXJlIGFyZSBubyAke2tleX0geWV0YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHB1c2hIaXN0b3J5KERPTSwgc3RvcmFnZU9iamVjdCwgY3NzQ2xhc3MsIGxvY2FsU3RvcmFnZUtleSkge1xyXG4gICAgaWYgKFxyXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc1wiKSAmJlxyXG4gICAgICBsb2NhbFN0b3JhZ2VLZXkgPT09IFwiZmF2b3JpdGVzXCIgJiZcclxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc1wiKSkuY2l0eS5pbmRleE9mKGRhdGEuY2l0eSkgIT1cclxuICAgICAgICAtMVxyXG4gICAgKSB7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdG9yYWdlT2JqZWN0LmNpdHkucHVzaChkYXRhLmNpdHkpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VPYmplY3QpKTtcclxuICAgICAgc2hvd0hpc3RvcnkoRE9NLCBzdG9yYWdlT2JqZWN0LCBjc3NDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG93SGlzdG9yeShET00sIHN0b3JhZ2VPYmplY3QsIGNzc0NsYXNzKSB7XHJcbiAgICBET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGlmIChzdG9yYWdlT2JqZWN0KSB7XHJcblxyXG4gICAgICBzdG9yYWdlT2JqZWN0LmNpdHkubWFwKGkgPT4ge1xyXG4gICAgICAgIERPTS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIixgPGxpIGNsYXNzPVwiJHtjc3NDbGFzc31cIj4ke2l9PC9saT5gKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBsZXQgaHlzdG9yeUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG5cclxuICAgICAgaHlzdG9yeUl0ZW0ub25jbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnRhZ05hbWUgPT09ICdMSScpe1xyXG4gICAgICAgICAgZGF0YS5jaXR5ID0gdGFyZ2V0LmlubmVySFRNTDtcclxuICAgICAgICAgIGZpbmRDaXR5KHRhcmdldC5pbm5lckhUTUwpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgIH07XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IHtwdXNoSGlzdG9yeSwgc2hvd0hpc3RvcnksIGNsZWFyTG9jYWxTdG9yYWdlfVxyXG5cclxuICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvbG9jYWxTdG9yYWdlLmpzIiwiaW1wb3J0IHtwYXJzZWRVcmwsIGRhdGFET00sIGRhdGF9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5cclxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmJpdC5pby92Mi4wL2ZvcmVjYXN0JztcclxuY29uc3QgZ2V0V2VhdGhlciA9IHVybCA9PiBmZXRjaChgJHtCQVNFX1VSTH0ke3VybH1gKVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKVxyXG4gIH0pXHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICB9KVxyXG4gIFxyXG5leHBvcnQge2dldFdlYXRoZXJ9O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9hcGkuanMiLCJpbXBvcnQge3BhcnNlZFVybCwgZGF0YURPTSwgZGF0YX0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7cHVzaEhpc3RvcnksIHNob3dIaXN0b3J5fSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmZ1bmN0aW9uIGFkZEZhdm9yaXRlQnV0dG9uKGJvZHkpIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgQ3VycmVudCBjaXR5OiAke2JvZHkuY2l0eV9uYW1lfSBcclxuICAgICAgICA8aW1nIGlkPVwiZmF2b3JpdGVzXCIgc3JjPVwiYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nXCI+XHJcbiAgICAgICAgYFxyXG4gICAgKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zhdm9yaXRlc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHB1c2hIaXN0b3J5KFxyXG4gICAgICAgIGRhdGFET00uZmF2b3JpdGVzRE9NLFxyXG4gICAgICAgIGRhdGEuZmF2b3JpdGVPYmosXHJcbiAgICAgICAgXCJmYXZvcml0ZS1pdGVtXCIsXHJcbiAgICAgICAgXCJmYXZvcml0ZXNcIlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuLy9yZW5kZXIgbWV0aG9kXHJcbmZ1bmN0aW9uIHJlbmRlckNpdHkoYm9keSkge1xyXG4gIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xyXG4gIGFkZEZhdm9yaXRlQnV0dG9uKGJvZHkpO1xyXG5cclxuICAvL2NyZWF0ZSBjb250YWluZXIgZm9yIGluc2VydGluZyBkYXRhIGZyb20gbG9vcFxyXG4gIGxldCBkb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG5cclxuICBmb3IgKGxldCBpPTA7IGk8ZGF0YS5wZXJpb2Q7IGkrKykge1xyXG4gICAgbGV0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnRXcmFwcGVyLmNsYXNzTmFtZSA9IFwiY29udGVudFwiO1xyXG4gICAgY29udGVudFdyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIFxyXG4gICAgICBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfX3ZhbHVlc1wiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbl9fbnVtYmVyXCI+JHtib2R5LmRhdGFbaV0udGVtcH08L3NwYW4+ICR7ZGF0YS51bml0c0Rpc3BsYXl9XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FwdGlvbl9fdGl0bGVcIj5hdmcuIHRlbXAuPC9wPiBcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxvYmplY3QgZGF0YT1cImFzc2V0cy9tZWRpYS8ke2JvZHkuZGF0YVtpXS53ZWF0aGVyLmljb259LnN2Z1wiIHR5cGU9XCJcIj5cclxuICAgICAgICAgIDwvb2JqZWN0PlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjYXB0aW9uX190aXRsZVwiPiR7Ym9keS5kYXRhW2ldLndlYXRoZXIuZGVzY3JpcHRpb259PC9wPiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzcz1cImRhdGVcIj4ke2JvZHkuZGF0YVtpXS5kYXRldGltZVxyXG4gICAgICAgICAgLnNwbGl0KFwiLVwiKVxyXG4gICAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgICAgLmpvaW4oXCIuXCIpfVxyXG4gICAgICAgIDwvcD4gXHJcbiAgICAgICAgPHA+bWF4LiB0ZW1wLjogJHtib2R5LmRhdGFbaV0ubWF4X3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgIDxwPm1pbi4gdGVtcC46ICR7Ym9keS5kYXRhW2ldLm1pbl90ZW1wfSAke2RhdGEudW5pdHNEaXNwbGF5fTwvcD5cclxuICAgICAgICA8cD5mZWVscyBsaWtlLCBtYXg6ICR7Ym9keS5kYXRhW2ldLmFwcF9tYXhfdGVtcH0gJHtkYXRhLnVuaXRzRGlzcGxheX08L3A+XHJcbiAgICAgICAgPHA+ZmVlbHMgbGlrZSwgbWluOiAke2JvZHkuZGF0YVtpXS5hcHBfbWluX3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgIDxwPndpbmQ6ICR7Ym9keS5kYXRhW2ldLndpbmRfc3BkfSBtL3M8L3A+XHJcbiAgICAgICAgPHA+cHJlY2lwaXRhdGlvbjogJHtib2R5LmRhdGFbaV0ucG9wfSAlPC9wPlxyXG4gICAgICBgXHJcbiAgICApO1xyXG4gICAgZG9jdW1lbnRGcmFnbWVudC5hcHBlbmRDaGlsZChjb250ZW50V3JhcHBlcik7XHJcbiAgfVxyXG5cclxuICBkYXRhRE9NLm1haW5ET00uYXBwZW5kQ2hpbGQoZG9jdW1lbnRGcmFnbWVudCk7XHJcblxyXG59XHJcblxyXG5leHBvcnQge3JlbmRlckNpdHl9O1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3JlbmRlci5qcyIsImltcG9ydCB7IHBhcnNlZFVybCwgZGF0YURPTSwgZGF0YSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vYXBpXCI7XHJcbmltcG9ydCB7IHJlbmRlckNpdHkgfSBmcm9tIFwiLi9yZW5kZXJcIjtcclxuaW1wb3J0IHsgcHVzaEhpc3RvcnksIHNob3dIaXN0b3J5LCBjbGVhckxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xyXG5cclxuLy9wdXNoIGN1cnJlbnQgY2l0eSB0byBVUkxcclxuZnVuY3Rpb24gcHVzaFVybChjaXR5KSB7XHJcbiAgbGV0IHVybCA9IGBpbmRleC5odG1sP2NpdHk9JHtjaXR5fWA7XHJcbiAgaGlzdG9yeS5wdXNoU3RhdGUoY2l0eSwgbnVsbCwgdXJsKTtcclxuICBsZXQgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgZ2V0VXJsKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVybCgpe1xyXG4gIHdpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmKGV2ZW50LnN0YXRlICE9PSBudWxsKXtcclxuICAgICAgZmluZENpdHkoZXZlbnQuc3RhdGUpO1xyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldEVycm9yKGVycm9yKXtcclxuICBkYXRhRE9NLmxvYWRlckRPTS5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcclxuICBpZiAoZXJyb3Iuc3RhdHVzID09PSAyMDQpIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgQ2l0eSBub3QgZm91bmQuIFBsZWFzZSwgdHJ5IGFnYWluLmBcclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgIGBTZWFyY2ggZmllbGQgaXMgZW1wdHkuIFBsZWFzZSwgZW50ZXIgY2l0eSBuYW1lYFxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYCR7ZXJyb3Iuc3RhdHVzVGV4dH1gKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRDaXR5KGNpdHkpIHtcclxuICBkYXRhRE9NLm1haW5ET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICBkYXRhRE9NLnRpdGxlRE9NLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgZGF0YURPTS5sb2FkZXJET00uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7IC8vc2hvdyBsb2FkZXJcclxuICBwdXNoVXJsKGNpdHkpO1xyXG5cclxuICBnZXRXZWF0aGVyKGAvZGFpbHk/Y2l0eT0ke2NpdHl9JnVuaXRzPSR7ZGF0YS51bml0c30ma2V5PSR7ZGF0YS5zZWNyZXRLZXl9YClcclxuICAgIC50aGVuKGZ1bmN0aW9uKGJvZHkpIHtcclxuICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICByZW5kZXJDaXR5KGJvZHkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBib2R5O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChzZXRFcnJvcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGZpbmRDaXR5IH07XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvc2VhcmNoLmpzIiwiaW1wb3J0IFwiLi9hc3NldHMvc2Fzcy9hcHAuc2Fzc1wiO1xyXG5cclxuaW1wb3J0IHtwYXJzZWRVcmwsIGRhdGFET00sIGRhdGF9IGZyb20gXCIuL2Fzc2V0cy9qcy9jb25maWdcIjtcclxuaW1wb3J0IHtnZXRXZWF0aGVyfSBmcm9tIFwiLi9hc3NldHMvanMvYXBpXCI7XHJcbmltcG9ydCB7cmVuZGVyQ2l0eX0gZnJvbSBcIi4vYXNzZXRzL2pzL3JlbmRlclwiO1xyXG5pbXBvcnQge3B1c2hIaXN0b3J5LCBzaG93SGlzdG9yeSwgY2xlYXJMb2NhbFN0b3JhZ2V9IGZyb20gXCIuL2Fzc2V0cy9qcy9sb2NhbFN0b3JhZ2VcIjtcclxuaW1wb3J0IHtmaW5kQ2l0eX0gZnJvbSBcIi4vYXNzZXRzL2pzL3NlYXJjaFwiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA1ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2MwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2MwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2MwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL2MwNGQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDNkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvZjAxZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3IwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3IwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3IwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3IwNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3IwNWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3IwNmQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDVkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDZkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA1ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA2ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA3ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4vYXNzZXRzL21lZGlhL2ljb25zL3UwMGQuc3ZnXCI7XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAqIDIwMTcuV2VhdGhlciBhcHBsaWNhdGlvbiBieSBBbGV4IE5lbGluICpcclxuICogQmFzZWQgb24gd2VhdGhlcmJpdC5pbyBBUEkgICAgICAgICAgICAgKlxyXG4gKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuKGZ1bmN0aW9uKCkge1xyXG4gIFwidXNlIHN0cmljdFwiO1xyXG5cclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xyXG4gICAgaW5pdCgpO1xyXG4gIH0pO1xyXG5cclxuICBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgLy9ydW4gZmV0Y2ggbWV0aG9kLCB3aGVuIHRoZXJlIGlzIGNpdHkgaW4gVVJMXHJcbiAgICBpZiAocGFyc2VkVXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJjaXR5XCIpKSB7XHJcbiAgICAgIGZpbmRDaXR5KGRhdGEuY2l0eSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9nZXQgdmFsdWVzIGZyb20gbG9jYWxzdG9yYWdlLCBpZiBhbnlcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpc3RvcnlcIikpIHtcclxuICAgICAgZGF0YS5oaXN0b3J5T2JqID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImhpc3RvcnlcIikpO1xyXG4gICAgICBzaG93SGlzdG9yeShkYXRhRE9NLmhpc3RvcnlET00sIGRhdGEuaGlzdG9yeU9iaiwgXCJoaXN0b3J5LWl0ZW1cIik7XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNcIikpIHtcclxuICAgICAgZGF0YS5mYXZvcml0ZU9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNcIikpO1xyXG4gICAgICBzaG93SGlzdG9yeShkYXRhRE9NLmZhdm9yaXRlc0RPTSwgZGF0YS5mYXZvcml0ZU9iaiwgXCJmYXZvcml0ZS1pdGVtXCIpO1xyXG4gICAgfVxyXG4gXHJcbiAgICBkb2N1bWVudC5vbmNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgPT09IGRhdGFET00uYnV0dG9uSGlzdG9yeUNsZWFyKSB7XHJcbiAgICAgICAgY2xlYXJMb2NhbFN0b3JhZ2UoZGF0YURPTS5oaXN0b3J5RE9NLCBcImhpc3RvcnlcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0ID09PSBkYXRhRE9NLmJ1dHRvbkZhdm9yaXRlc0NsZWFyKSB7XHJcbiAgICAgICAgY2xlYXJMb2NhbFN0b3JhZ2UoZGF0YURPTS5mYXZvcml0ZXNET00sIFwiZmF2b3JpdGVzXCIpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGRvY3VtZW50Lm9uY2hhbmdlID0gZXZlbnQgPT4ge1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG5cclxuICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQgPT09IGRhdGFET00udW5pdHNET00pIHtcclxuICAgICAgICBkYXRhLnVuaXRzID1cclxuICAgICAgICAgIGRhdGFET00udW5pdHNET00ub3B0aW9uc1tcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1bml0c1wiKS5zZWxlY3RlZEluZGV4XHJcbiAgICAgICAgICBdLnZhbHVlO1xyXG4gICAgICAgIGRhdGEudW5pdHNEaXNwbGF5ID0gZGF0YS51bml0cyA9PT0gXCJNXCIgPyBcIkNcIiA6IFwiRlwiO1xyXG4gICAgICAgIGlmIChkYXRhLmNpdHkpIHtcclxuICAgICAgICAgIGZpbmRDaXR5KGRhdGEuY2l0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldCA9PT0gZGF0YURPTS5wZXJpb2RET00pIHtcclxuICAgICAgICBkYXRhLnBlcmlvZCA9ICtkYXRhRE9NLnBlcmlvZERPTS5vcHRpb25zW1xyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwZXJpb2RcIikuc2VsZWN0ZWRJbmRleFxyXG4gICAgICAgIF0udmFsdWU7XHJcbiAgICAgICAgaWYgKGRhdGEuY2l0eSkge1xyXG4gICAgICAgICAgZmluZENpdHkoZGF0YS5jaXR5KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZGF0YURPTS5mb3JtRE9NLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZSA9PiB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgZGF0YS5jaXR5ID0gZGF0YURPTS5pbnB1dERPTS52YWx1ZTtcclxuICAgICAgZmluZENpdHkoZGF0YS5jaXR5KTtcclxuICAgICAgaWYgKGRhdGEuY2l0eSkge1xyXG4gICAgICAgIHB1c2hIaXN0b3J5KFxyXG4gICAgICAgICAgZGF0YURPTS5oaXN0b3J5RE9NLFxyXG4gICAgICAgICAgZGF0YS5oaXN0b3J5T2JqLFxyXG4gICAgICAgICAgXCJoaXN0b3J5LWl0ZW1cIixcclxuICAgICAgICAgIFwiaGlzdG9yeVwiXHJcbiAgICAgICAgKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59KSgpO1xyXG5cclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3Nhc3MvYXBwLnNhc3Ncbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2xvYWRlci5zdmdcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZmF2b3JpdGVzLWJ1dHRvbi5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9hMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2EwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2YwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZjAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwN2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA3ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3UwMGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdTAwZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=