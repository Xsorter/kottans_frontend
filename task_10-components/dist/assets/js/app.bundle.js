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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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

var BASE_URL = 'https://api.weatherbit.io/v2.0/forecast';
var getWeather = function getWeather(url) {
  return fetch('' + BASE_URL + url).then(function (response) {
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderCity = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(0);

var _localStorage = __webpack_require__(8);

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

__webpack_require__(42);

__webpack_require__(43);

__webpack_require__(44);

__webpack_require__(45);

__webpack_require__(46);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Render = function () {
  function Render() {
    _classCallCheck(this, Render);

    this.host = document.createElement('main');
    this.host.id = "main";
  }

  _createClass(Render, [{
    key: "render",
    value: function render() {
      this.host.innerHTML = "";
      return this.host;
    }
  }]);

  return Render;
}();

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


function renderCity(body) {
  /* dataDOM.loaderDOM.classList.add("none"); */
  /* addFavoriteButton(body); */

  //create container for inserting data from loop

  var wrapperElement = document.getElementById('main');
  console.log(wrapperElement);

  var documentFragment = document.createDocumentFragment();
  var mainWrapper = document.querySelector('.location-wrapper');

  for (var i = 0; i < _config.data.period; i++) {
    var contentWrapper = document.createElement("div");
    contentWrapper.className = "content";
    contentWrapper.insertAdjacentHTML("beforeend", "\n        <div class=\"content__values\">\n          <p>\n            <span class=\"caption__number\">" + body.data[i].temp + "</span> " + _config.data.unitsDisplay + "\n            <p class=\"caption__title\">avg. temp.</p> \n          </p>\n          <object data=\"assets/media/" + body.data[i].weather.icon + ".svg\" type=\"\">\n          </object>\n          <p class=\"caption__title\">" + body.data[i].weather.description + "</p> \n        </div>\n        <p class=\"date\">" + body.data[i].datetime.split("-").reverse().join(".") + "\n        </p> \n        <p>max. temp.: " + body.data[i].max_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>min. temp.: " + body.data[i].min_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>feels like, max: " + body.data[i].app_max_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>feels like, min: " + body.data[i].app_min_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>wind: " + body.data[i].wind_spd + " m/s</p>\n        <p>precipitation: " + body.data[i].pop + " %</p>\n      ");
    documentFragment.appendChild(contentWrapper);
  }

  wrapperElement.appendChild(documentFragment);
}

exports.renderCity = renderCity;
exports.default = Render;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

var _App = __webpack_require__(5);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appl = new _App2.default();
var appT = appl.render();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LocationSearch = __webpack_require__(6);

var _LocationSearch2 = _interopRequireDefault(_LocationSearch);

var _render = __webpack_require__(2);

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.locationElement = new _LocationSearch2.default();
    this.mainElement = new _render2.default();

    this.rootElement = document.getElementById('root');
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      this.rootElement.appendChild(this.locationElement.render());
      this.rootElement.appendChild(this.mainElement.render());
    }
  }]);

  return App;
}();

exports.default = App;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Search = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocationSearch = function () {
    function LocationSearch() {
        _classCallCheck(this, LocationSearch);

        this.state = {
            isValid: true
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.host = document.createElement('header');
        this.host.classList.add('location-wrapper');
        this.host.addEventListener('submit', this.handleSubmit);
    }

    _createClass(LocationSearch, [{
        key: 'updateState',
        value: function updateState(nextState) {
            this.state = Object.assign({}, this.state, nextState);
            this.render();
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var city = e.target.elements.search.value.trim();
            (0, _Search.findCity)(city);

            if (!city.length) {
                this.updateState({ isValid: false });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var isValid = this.state.isValid;

            this.host.innerHTML = '\n            <h1 class="title">Weather-app</h1>\n            <form class=' + (isValid ? '"weather-form"' : '"weather-form --invalid"') + '>\n                <div class="search">\n                    <input name="search" required class="search-weather">\n                    <button class="weather-search-submit">Search</button>.\n                </div>\n            </form>\n        ';

            return this.host;
        }
    }]);

    return LocationSearch;
}();

exports.default = LocationSearch;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findCity = undefined;

var _config = __webpack_require__(0);

var _Api = __webpack_require__(1);

var _render = __webpack_require__(2);

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

function setError(error) {
  /* dataDOM.loaderDOM.classList.add("none");
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
  console.log(error.status);
}

function findCity(city) {
  /* dataDOM.mainDOM.innerHTML = "";
  dataDOM.titleDOM.innerHTML = "";
  dataDOM.loaderDOM.classList.remove("none"); //show loader
  pushUrl(city); */

  (0, _Api.getWeather)("/daily?city=" + city + "&units=" + _config.data.units + "&key=" + _config.data.secretKey).then(function (body) {
    if (body) {
      console.log('success');
      (0, _render.renderCity)(body);
    }
    return body;
  }).catch(setError);
}

exports.findCity = findCity;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearLocalStorage = exports.showHistory = exports.pushHistory = undefined;

var _config = __webpack_require__(0);

var _search = __webpack_require__(9);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findCity = undefined;

var _config = __webpack_require__(0);

var _Api = __webpack_require__(1);

var _render = __webpack_require__(2);

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

function setError(error) {
  /* dataDOM.loaderDOM.classList.add("none");
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
}

function findCity(city) {
  /* dataDOM.mainDOM.innerHTML = "";
  dataDOM.titleDOM.innerHTML = "";
  dataDOM.loaderDOM.classList.remove("none"); //show loader
  pushUrl(city); */

  (0, _Api.getWeather)("/daily?city=" + city + "&units=" + _config.data.units + "&key=" + _config.data.secretKey).then(function (body) {
    if (body) {
      console.log('success');
      (0, _render.renderCity)(body);
    }
    return body;
  }).catch(setError);
}

exports.findCity = findCity;

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a01d.svg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a02d.svg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a03d.svg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a04d.svg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a05d.svg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c01d.svg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c02d.svg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c03d.svg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c04d.svg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d01d.svg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d02d.svg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d03d.svg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/f01d.svg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r01d.svg";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r02d.svg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r03d.svg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r04d.svg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r05d.svg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r06d.svg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s01d.svg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s02d.svg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s03d.svg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s04d.svg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s05d.svg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s06d.svg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t01d.svg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t02d.svg";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t03d.svg";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t04d.svg";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t05d.svg";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t06d.svg";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t07d.svg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/u00d.svg";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWMxNDg3YTlmZjdhY2VkMWNmNDYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9hcHAuc2FzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvY2F0aW9uU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2MwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2QwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZjAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA2ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczA2ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA2ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwN2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy91MDBkLnN2ZyJdLCJuYW1lcyI6WyJwYXJzZWRVcmwiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkYXRhRE9NIiwiZm9ybURPTSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlucHV0RE9NIiwibWFpbkRPTSIsInRpdGxlRE9NIiwidW5pdHNET00iLCJwZXJpb2RET00iLCJoaXN0b3J5RE9NIiwiZmF2b3JpdGVzRE9NIiwiYnV0dG9uSGlzdG9yeUNsZWFyIiwiYnV0dG9uRmF2b3JpdGVzQ2xlYXIiLCJsb2FkZXJET00iLCJkYXRhIiwiY2l0eSIsInNlYXJjaFBhcmFtcyIsImdldCIsInNlY3JldEtleSIsInVuaXRzIiwidW5pdHNEaXNwbGF5IiwicGVyaW9kIiwiaGlzdG9yeU9iaiIsImZhdm9yaXRlT2JqIiwiQkFTRV9VUkwiLCJnZXRXZWF0aGVyIiwiZmV0Y2giLCJ1cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzb2x2ZSIsImpzb24iLCJSZW5kZXIiLCJob3N0IiwiY3JlYXRlRWxlbWVudCIsImlkIiwiaW5uZXJIVE1MIiwicmVuZGVyQ2l0eSIsImJvZHkiLCJ3cmFwcGVyRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwiY29uc29sZSIsImxvZyIsImRvY3VtZW50RnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwibWFpbldyYXBwZXIiLCJpIiwiY29udGVudFdyYXBwZXIiLCJjbGFzc05hbWUiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ0ZW1wIiwid2VhdGhlciIsImljb24iLCJkZXNjcmlwdGlvbiIsImRhdGV0aW1lIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsIm1heF90ZW1wIiwibWluX3RlbXAiLCJhcHBfbWF4X3RlbXAiLCJhcHBfbWluX3RlbXAiLCJ3aW5kX3NwZCIsInBvcCIsImFwcGVuZENoaWxkIiwiYXBwbCIsImFwcFQiLCJyZW5kZXIiLCJBcHAiLCJsb2NhdGlvbkVsZW1lbnQiLCJtYWluRWxlbWVudCIsInJvb3RFbGVtZW50IiwiTG9jYXRpb25TZWFyY2giLCJzdGF0ZSIsImlzVmFsaWQiLCJoYW5kbGVTdWJtaXQiLCJiaW5kIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5leHRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImVsZW1lbnRzIiwic2VhcmNoIiwidmFsdWUiLCJ0cmltIiwibGVuZ3RoIiwidXBkYXRlU3RhdGUiLCJzZXRFcnJvciIsImVycm9yIiwiZmluZENpdHkiLCJjYXRjaCIsImNsZWFyTG9jYWxTdG9yYWdlIiwiRE9NIiwia2V5IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2hIaXN0b3J5Iiwic3RvcmFnZU9iamVjdCIsImNzc0NsYXNzIiwibG9jYWxTdG9yYWdlS2V5IiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImluZGV4T2YiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNob3dIaXN0b3J5IiwibWFwIiwiaHlzdG9yeUl0ZW0iLCJvbmNsaWNrIiwiZXZlbnQiLCJ0YWdOYW1lIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFDQSxJ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QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRSIsImZpbGUiOiIuL2Fzc2V0cy9qcy9hcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYWMxNDg3YTlmZjdhY2VkMWNmNDYiLCIvL2dldCBjdXJyZW50IHVybFxyXG5sZXQgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblxyXG4vL29iamVjdCB3aXRoIERPTSBlbGVtZW50c1xyXG5jb25zdCBkYXRhRE9NID0ge1xyXG4gIGZvcm1ET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoLWZvcm1cIiksXHJcbiAgaW5wdXRET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc2VhcmNoXCIpLFxyXG4gIG1haW5ET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKSxcclxuICB0aXRsZURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKSxcclxuICB1bml0c0RPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1bml0c1wiKSxcclxuICBwZXJpb2RET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVyaW9kXCIpLFxyXG4gIGhpc3RvcnlET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlzdG9yeVwiKSxcclxuICBmYXZvcml0ZXNET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGVzXCIpLFxyXG4gIGJ1dHRvbkhpc3RvcnlDbGVhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaXN0b3J5LWNsZWFyXCIpLFxyXG4gIGJ1dHRvbkZhdm9yaXRlc0NsZWFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zhdm9yaXRlcy1jbGVhclwiKSxcclxuICBsb2FkZXJET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG9hZGVyXCIpXHJcbn07XHJcblxyXG5sZXQgZGF0YSA9IHtcclxuICBjaXR5OiBwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmdldChcImNpdHlcIiksXHJcblxyXG4gIC8vYXBpIGtleVxyXG4gIHNlY3JldEtleTogXCJjNjk3NmE0YzRlMDU0MjFmOWI0ZWFlZTdhMzExZjBkY1wiLFxyXG4gIHVuaXRzOiBcIk1cIixcclxuICB1bml0c0Rpc3BsYXk6IFwiQ1wiLFxyXG4gIHBlcmlvZDogMSxcclxuXHJcbiAgLy9sb2NhbHN0b3JhZ2Ugb2JqZWN0c1xyXG4gIGhpc3RvcnlPYmo6IHtcclxuICAgIGNpdHk6IFtdXHJcbiAgfSxcclxuICBmYXZvcml0ZU9iajoge1xyXG4gICAgY2l0eTogW11cclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBwYXJzZWRVcmwsIGRhdGFET00sIGRhdGEgfTtcclxuXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY29uZmlnLmpzIiwiXHJcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJiaXQuaW8vdjIuMC9mb3JlY2FzdCc7XHJcbmNvbnN0IGdldFdlYXRoZXIgPSB1cmwgPT4gZmV0Y2goYCR7QkFTRV9VUkx9JHt1cmx9YClcclxuICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSlcclxuICB9KVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgfSkgXHJcbiAgXHJcbmV4cG9ydCB7Z2V0V2VhdGhlcn07ICBcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQXBpLmpzIiwiaW1wb3J0IHtwYXJzZWRVcmwsIGRhdGFET00sIGRhdGF9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQge3B1c2hIaXN0b3J5LCBzaG93SGlzdG9yeX0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9hMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9hMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9hMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9hMDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9hMDVkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvYzAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvYzAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvYzAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvYzA0ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2QwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2QwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2QwM2Quc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9mMDFkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvcjAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvcjAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvcjAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvcjA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvcjA1ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvcjA2ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3MwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3MwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3MwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3MwNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3MwNWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3MwNmQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy90MDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy90MDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy90MDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy90MDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy90MDVkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy90MDZkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy90MDdkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvdTAwZC5zdmdcIjtcclxuXHJcbmNsYXNzIFJlbmRlcntcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgdGhpcy5ob3N0LmlkID0gXCJtYWluXCI7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5ob3N0LmlubmVySFRNTCA9IGBgXHJcbiAgICByZXR1cm4gdGhpcy5ob3N0XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLyogZnVuY3Rpb24gYWRkRmF2b3JpdGVCdXR0b24oYm9keSkge1xyXG4gICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgIGBDdXJyZW50IGNpdHk6ICR7Ym9keS5jaXR5X25hbWV9IFxyXG4gICAgICAgIDxpbWcgaWQ9XCJmYXZvcml0ZXNcIiBzcmM9XCJhc3NldHMvbWVkaWEvZmF2b3JpdGVzLWJ1dHRvbi5wbmdcIj5cclxuICAgICAgICBgXHJcbiAgICApO1xyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmF2b3JpdGVzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcclxuICAgICAgcHVzaEhpc3RvcnkoXHJcbiAgICAgICAgZGF0YURPTS5mYXZvcml0ZXNET00sXHJcbiAgICAgICAgZGF0YS5mYXZvcml0ZU9iaixcclxuICAgICAgICBcImZhdm9yaXRlLWl0ZW1cIixcclxuICAgICAgICBcImZhdm9yaXRlc1wiXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9ICovXHJcblxyXG4vL3JlbmRlciBtZXRob2RcclxuZnVuY3Rpb24gcmVuZGVyQ2l0eShib2R5KSB7XHJcbiAgLyogZGF0YURPTS5sb2FkZXJET00uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7ICovXHJcbiAgLyogYWRkRmF2b3JpdGVCdXR0b24oYm9keSk7ICovXHJcblxyXG4gIC8vY3JlYXRlIGNvbnRhaW5lciBmb3IgaW5zZXJ0aW5nIGRhdGEgZnJvbSBsb29wXHJcbiAgXHJcbiAgbGV0IHdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKTtcclxuICBjb25zb2xlLmxvZyh3cmFwcGVyRWxlbWVudCk7XHJcblxyXG4gIGxldCBkb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gIGxldCBtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi13cmFwcGVyJyk7XHJcblxyXG4gIGZvciAobGV0IGk9MDsgaTxkYXRhLnBlcmlvZDsgaSsrKSB7XHJcbiAgICBsZXQgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudFdyYXBwZXIuY2xhc3NOYW1lID0gXCJjb250ZW50XCI7XHJcbiAgICBjb250ZW50V3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXHJcbiAgICAgIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9fdmFsdWVzXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXB0aW9uX19udW1iZXJcIj4ke2JvZHkuZGF0YVtpXS50ZW1wfTwvc3Bhbj4gJHtkYXRhLnVuaXRzRGlzcGxheX1cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXB0aW9uX190aXRsZVwiPmF2Zy4gdGVtcC48L3A+IFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPG9iamVjdCBkYXRhPVwiYXNzZXRzL21lZGlhLyR7Ym9keS5kYXRhW2ldLndlYXRoZXIuaWNvbn0uc3ZnXCIgdHlwZT1cIlwiPlxyXG4gICAgICAgICAgPC9vYmplY3Q+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNhcHRpb25fX3RpdGxlXCI+JHtib2R5LmRhdGFbaV0ud2VhdGhlci5kZXNjcmlwdGlvbn08L3A+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPiR7Ym9keS5kYXRhW2ldLmRhdGV0aW1lXHJcbiAgICAgICAgICAuc3BsaXQoXCItXCIpXHJcbiAgICAgICAgICAucmV2ZXJzZSgpXHJcbiAgICAgICAgICAuam9pbihcIi5cIil9XHJcbiAgICAgICAgPC9wPiBcclxuICAgICAgICA8cD5tYXguIHRlbXAuOiAke2JvZHkuZGF0YVtpXS5tYXhfdGVtcH0gJHtkYXRhLnVuaXRzRGlzcGxheX08L3A+XHJcbiAgICAgICAgPHA+bWluLiB0ZW1wLjogJHtib2R5LmRhdGFbaV0ubWluX3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgIDxwPmZlZWxzIGxpa2UsIG1heDogJHtib2R5LmRhdGFbaV0uYXBwX21heF90ZW1wfSAke2RhdGEudW5pdHNEaXNwbGF5fTwvcD5cclxuICAgICAgICA8cD5mZWVscyBsaWtlLCBtaW46ICR7Ym9keS5kYXRhW2ldLmFwcF9taW5fdGVtcH0gJHtkYXRhLnVuaXRzRGlzcGxheX08L3A+XHJcbiAgICAgICAgPHA+d2luZDogJHtib2R5LmRhdGFbaV0ud2luZF9zcGR9IG0vczwvcD5cclxuICAgICAgICA8cD5wcmVjaXBpdGF0aW9uOiAke2JvZHkuZGF0YVtpXS5wb3B9ICU8L3A+XHJcbiAgICAgIGBcclxuICAgICk7XHJcbiAgICBkb2N1bWVudEZyYWdtZW50LmFwcGVuZENoaWxkKGNvbnRlbnRXcmFwcGVyKTtcclxuICB9XHJcblxyXG4gIFxyXG4gIFxyXG4gIHdyYXBwZXJFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50RnJhZ21lbnQpO1xyXG5cclxuXHJcbiAgXHJcblxyXG59XHJcblxyXG5leHBvcnQge3JlbmRlckNpdHl9O1xyXG5leHBvcnQgZGVmYXVsdCBSZW5kZXI7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvcmVuZGVyLmpzIiwiaW1wb3J0IFwiLi9hc3NldHMvc2Fzcy9hcHAuc2Fzc1wiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudHMvQXBwXCI7XHJcblxyXG5cclxubGV0IGFwcGwgPSBuZXcgQXBwO1xyXG5sZXQgYXBwVCA9IGFwcGwucmVuZGVyKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Fzcy9hcHAuc2Fzc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgTG9jYXRpb25TZWFyY2ggZnJvbSBcIi4vTG9jYXRpb25TZWFyY2hcIjtcclxuaW1wb3J0IFJlbmRlciBmcm9tIFwiLi4vYXNzZXRzL2pzL3JlbmRlclwiO1xyXG5cclxuY2xhc3MgQXBwe1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLmxvY2F0aW9uRWxlbWVudCA9IG5ldyBMb2NhdGlvblNlYXJjaCgpO1xyXG4gICAgdGhpcy5tYWluRWxlbWVudCA9IG5ldyBSZW5kZXIoKTtcclxuXHJcbiAgICB0aGlzLnJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgdGhpcy5yb290RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmxvY2F0aW9uRWxlbWVudC5yZW5kZXIoKSk7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50LmFwcGVuZENoaWxkKHRoaXMubWFpbkVsZW1lbnQucmVuZGVyKCkpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FwcC5qcyIsImltcG9ydCB7IGZpbmRDaXR5IH0gZnJvbSBcIi4vU2VhcmNoXCI7XHJcblxyXG5jbGFzcyBMb2NhdGlvblNlYXJjaCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1ZhbGlkIDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uLXdyYXBwZXInKTtcclxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIHVwZGF0ZVN0YXRlKG5leHRTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBjaXR5ID0gZS50YXJnZXQuZWxlbWVudHMuc2VhcmNoLnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBmaW5kQ2l0eShjaXR5KTtcclxuXHJcbiAgICAgICAgaWYoIWNpdHkubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7aXNWYWxpZDogZmFsc2V9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2lzVmFsaWR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICB0aGlzLmhvc3QuaW5uZXJIVE1MID0gYFxyXG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPldlYXRoZXItYXBwPC9oMT5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9JHtpc1ZhbGlkID8gJ1wid2VhdGhlci1mb3JtXCInIDogJ1wid2VhdGhlci1mb3JtIC0taW52YWxpZFwiJ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJzZWFyY2hcIiByZXF1aXJlZCBjbGFzcz1cInNlYXJjaC13ZWF0aGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIndlYXRoZXItc2VhcmNoLXN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPi5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaG9zdFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uU2VhcmNoXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Mb2NhdGlvblNlYXJjaC5qcyIsImltcG9ydCB7IHBhcnNlZFVybCwgZGF0YURPTSwgZGF0YSB9IGZyb20gXCIuLi9hc3NldHMvanMvY29uZmlnXCI7XHJcbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi9BcGlcIjtcclxuaW1wb3J0IHsgcmVuZGVyQ2l0eSB9IGZyb20gXCIuLi9hc3NldHMvanMvcmVuZGVyXCI7XHJcbi8qaW1wb3J0IHsgcHVzaEhpc3RvcnksIHNob3dIaXN0b3J5LCBjbGVhckxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiOyovXHJcblxyXG4vL3B1c2ggY3VycmVudCBjaXR5IHRvIFVSTFxyXG4vKiBmdW5jdGlvbiBwdXNoVXJsKGNpdHkpIHtcclxuICBsZXQgdXJsID0gYGluZGV4Lmh0bWw/Y2l0eT0ke2NpdHl9YDtcclxuICBoaXN0b3J5LnB1c2hTdGF0ZShjaXR5LCBudWxsLCB1cmwpO1xyXG4gIGxldCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICBnZXRVcmwoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXJsKCl7XHJcbiAgd2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYoZXZlbnQuc3RhdGUgIT09IG51bGwpe1xyXG4gICAgICBmaW5kQ2l0eShldmVudC5zdGF0ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxufSAqL1xyXG5cclxuZnVuY3Rpb24gc2V0RXJyb3IoZXJyb3Ipe1xyXG4gIC8qIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xyXG4gIGlmIChlcnJvci5zdGF0dXMgPT09IDIwNCkge1xyXG4gICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgIGBDaXR5IG5vdCBmb3VuZC4gUGxlYXNlLCB0cnkgYWdhaW4uYFxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYFNlYXJjaCBmaWVsZCBpcyBlbXB0eS4gUGxlYXNlLCBlbnRlciBjaXR5IG5hbWVgXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgJHtlcnJvci5zdGF0dXNUZXh0fWApO1xyXG4gIH0gKi9cclxuICBjb25zb2xlLmxvZyhlcnJvci5zdGF0dXMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRDaXR5KGNpdHkpIHtcclxuICAvKiBkYXRhRE9NLm1haW5ET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICBkYXRhRE9NLnRpdGxlRE9NLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgZGF0YURPTS5sb2FkZXJET00uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7IC8vc2hvdyBsb2FkZXJcclxuICBwdXNoVXJsKGNpdHkpOyAqL1xyXG5cclxuICBnZXRXZWF0aGVyKGAvZGFpbHk/Y2l0eT0ke2NpdHl9JnVuaXRzPSR7ZGF0YS51bml0c30ma2V5PSR7ZGF0YS5zZWNyZXRLZXl9YClcclxuICAgIC50aGVuKGZ1bmN0aW9uKGJvZHkpe1xyXG4gICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyk7XHJcbiAgICAgICAgcmVuZGVyQ2l0eShib2R5KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYm9keTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goc2V0RXJyb3IpO1xyXG59XHJcblxyXG5leHBvcnQgeyBmaW5kQ2l0eSB9O1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TZWFyY2guanMiLCJpbXBvcnQge3BhcnNlZFVybCwgZGF0YURPTSwgZGF0YX0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7ZmluZENpdHl9IGZyb20gXCIuL3NlYXJjaFwiO1xyXG5cclxuLypjbGVhciBsb2NhbHN0b3JhZ2UgZGF0YSovXHJcbmZ1bmN0aW9uIGNsZWFyTG9jYWxTdG9yYWdlKERPTSwga2V5KSB7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICBET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICBET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGB0aGVyZSBhcmUgbm8gJHtrZXl9IHlldGApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwdXNoSGlzdG9yeShET00sIHN0b3JhZ2VPYmplY3QsIGNzc0NsYXNzLCBsb2NhbFN0b3JhZ2VLZXkpIHtcclxuICAgIGlmIChcclxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNcIikgJiZcclxuICAgICAgbG9jYWxTdG9yYWdlS2V5ID09PSBcImZhdm9yaXRlc1wiICYmXHJcbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNcIikpLmNpdHkuaW5kZXhPZihkYXRhLmNpdHkpICE9XHJcbiAgICAgICAgLTFcclxuICAgICkge1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RvcmFnZU9iamVjdC5jaXR5LnB1c2goZGF0YS5jaXR5KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShzdG9yYWdlT2JqZWN0KSk7XHJcbiAgICAgIHNob3dIaXN0b3J5KERPTSwgc3RvcmFnZU9iamVjdCwgY3NzQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2hvd0hpc3RvcnkoRE9NLCBzdG9yYWdlT2JqZWN0LCBjc3NDbGFzcykge1xyXG4gICAgRE9NLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBpZiAoc3RvcmFnZU9iamVjdCkge1xyXG5cclxuICAgICAgc3RvcmFnZU9iamVjdC5jaXR5Lm1hcChpID0+IHtcclxuICAgICAgICBET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsYDxsaSBjbGFzcz1cIiR7Y3NzQ2xhc3N9XCI+JHtpfTwvbGk+YCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgbGV0IGh5c3RvcnlJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuXHJcbiAgICAgIGh5c3RvcnlJdGVtLm9uY2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC50YWdOYW1lID09PSAnTEknKXtcclxuICAgICAgICAgIGRhdGEuY2l0eSA9IHRhcmdldC5pbm5lckhUTUw7XHJcbiAgICAgICAgICBmaW5kQ2l0eSh0YXJnZXQuaW5uZXJIVE1MKTtcclxuICAgICAgICB9IFxyXG4gICAgICB9O1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCB7cHVzaEhpc3RvcnksIHNob3dIaXN0b3J5LCBjbGVhckxvY2FsU3RvcmFnZX1cclxuXHJcbiAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2xvY2FsU3RvcmFnZS5qcyIsImltcG9ydCB7IHBhcnNlZFVybCwgZGF0YURPTSwgZGF0YSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXBpXCI7XHJcbmltcG9ydCB7IHJlbmRlckNpdHkgfSBmcm9tIFwiLi9yZW5kZXJcIjtcclxuLyppbXBvcnQgeyBwdXNoSGlzdG9yeSwgc2hvd0hpc3RvcnksIGNsZWFyTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7Ki9cclxuXHJcbi8vcHVzaCBjdXJyZW50IGNpdHkgdG8gVVJMXHJcbi8qIGZ1bmN0aW9uIHB1c2hVcmwoY2l0eSkge1xyXG4gIGxldCB1cmwgPSBgaW5kZXguaHRtbD9jaXR5PSR7Y2l0eX1gO1xyXG4gIGhpc3RvcnkucHVzaFN0YXRlKGNpdHksIG51bGwsIHVybCk7XHJcbiAgbGV0IHBhcnNlZFVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gIGdldFVybCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVcmwoKXtcclxuICB3aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZihldmVudC5zdGF0ZSAhPT0gbnVsbCl7XHJcbiAgICAgIGZpbmRDaXR5KGV2ZW50LnN0YXRlKTtcclxuICAgIH1cclxuICB9O1xyXG59ICovXHJcblxyXG5mdW5jdGlvbiBzZXRFcnJvcihlcnJvcil7XHJcbiAgLyogZGF0YURPTS5sb2FkZXJET00uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XHJcbiAgaWYgKGVycm9yLnN0YXR1cyA9PT0gMjA0KSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYENpdHkgbm90IGZvdW5kLiBQbGVhc2UsIHRyeSBhZ2Fpbi5gXHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDApIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgU2VhcmNoIGZpZWxkIGlzIGVtcHR5LiBQbGVhc2UsIGVudGVyIGNpdHkgbmFtZWBcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGAke2Vycm9yLnN0YXR1c1RleHR9YCk7XHJcbiAgfSAqL1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kQ2l0eShjaXR5KSB7XHJcbiAgLyogZGF0YURPTS5tYWluRE9NLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgZGF0YURPTS50aXRsZURPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpOyAvL3Nob3cgbG9hZGVyXHJcbiAgcHVzaFVybChjaXR5KTsgKi9cclxuXHJcbiAgZ2V0V2VhdGhlcihgL2RhaWx5P2NpdHk9JHtjaXR5fSZ1bml0cz0ke2RhdGEudW5pdHN9JmtleT0ke2RhdGEuc2VjcmV0S2V5fWApXHJcbiAgICAudGhlbihmdW5jdGlvbihib2R5KXtcclxuICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xyXG4gICAgICAgIHJlbmRlckNpdHkoYm9keSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHNldEVycm9yKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZmluZENpdHkgfTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9zZWFyY2guanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9hMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2EwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9hMDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2EwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9hMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2EwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9hMDRkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2EwNGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9hMDVkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2EwNWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9jMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2MwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9jMDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2MwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9jMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2MwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9jMDRkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2MwNGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9kMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2QwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9kMDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2QwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9kMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2QwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9mMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2YwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDRkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwNGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDVkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwNWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDZkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwNmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDRkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwNGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDVkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwNWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDZkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwNmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDRkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwNGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDVkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwNWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDZkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwNmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDdkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwN2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSA0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS91MDBkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3UwMGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9