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
exports.renderCity = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(0);

var _localStorage = __webpack_require__(8);

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

__webpack_require__(42);

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

  var mainElement = document.getElementById('main');
  var wrapperElement = document.createElement('div');
  wrapperElement.classList.add('wrapper');

  var documentFragment = document.createDocumentFragment();
  var mainWrapper = document.querySelector('.location-wrapper');

  for (var i = 0; i < _config.data.period; i++) {
    var contentWrapper = document.createElement("div");
    contentWrapper.className = "content";
    contentWrapper.insertAdjacentHTML("beforeend", "\n        <div class=\"content__values\">\n          <p>\n            <span class=\"caption__number\">" + body.data[i].temp + "</span> " + _config.data.unitsDisplay + "\n            <p class=\"caption__title\">avg. temp.</p> \n          </p>\n          <object data=\"assets/media/" + body.data[i].weather.icon + ".svg\" type=\"\">\n          </object>\n          <p class=\"caption__title\">" + body.data[i].weather.description + "</p> \n        </div>\n        <p class=\"date\">" + body.data[i].datetime.split("-").reverse().join(".") + "\n        </p> \n        <p>max. temp.: " + body.data[i].max_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>min. temp.: " + body.data[i].min_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>feels like, max: " + body.data[i].app_max_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>feels like, min: " + body.data[i].app_min_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>wind: " + body.data[i].wind_spd + " m/s</p>\n        <p>precipitation: " + body.data[i].pop + " %</p>\n      ");
    documentFragment.appendChild(contentWrapper);
  }

  wrapperElement.appendChild(documentFragment);
  mainElement.appendChild(wrapperElement);
}

exports.renderCity = renderCity;
exports.default = Render;

/***/ }),
/* 2 */
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

var _render = __webpack_require__(1);

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.state = {
      city: new URLSearchParams(window.location.search).get('city') || ''
    };

    this.locationElement = new _LocationSearch2.default({
      city: this.state.city,
      onSubmit: this.onSearchSubmit
    });

    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.mainElement = new _render2.default();
    this.host = document.getElementById('root');
  }

  _createClass(App, [{
    key: "updateState",
    value: function updateState(nextState) {
      this.state = Object.assign({}, this.state, nextState);
      this.render();
    }
  }, {
    key: "onSearchSubmit",
    value: function onSearchSubmit(city) {
      this.updateState({ city: city });
    }
  }, {
    key: "render",
    value: function render() {
      var city = this.state.city;

      this.host.innerHTML = '';

      this.host.appendChild(this.locationElement.update({
        city: city,
        onSubmit: this.onSearchSubmit
      }));

      this.host.appendChild(this.mainElement.render());
      return this.host;
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
    function LocationSearch(props) {
        _classCallCheck(this, LocationSearch);

        this.state = {
            isValid: true
        };
        this.props = props;

        this.handleSubmit = this.handleSubmit.bind(this);

        this.host = document.createElement('header');
        this.host.classList.add('location-wrapper');
        this.host.addEventListener('submit', this.handleSubmit);
    }

    _createClass(LocationSearch, [{
        key: 'update',
        value: function update(nextProps) {
            this.props = nextProps;
            return this.render();
            console.log(this.props);
        }
    }, {
        key: 'updateState',
        value: function updateState(nextState) {
            this.state = nextState;
            this.render();
        }
    }, {
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            e.preventDefault();
            var city = e.target.elements.search.value.trim();

            (0, _Search.findCity)(this.props.city);

            if (!city.length) {
                this.updateState({ isValid: false });
            } else {
                this.props.onSubmit(city);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var isValid = this.state.isValid;
            var city = this.props.city;

            console.log(this.props);

            this.host.innerHTML = '\n            <h1 class="title">Weather-app</h1>\n            <form class=' + (isValid ? '"weather-form"' : '"weather-form --invalid"') + '>\n                <div class="search">\n                    <input name="search" required class="search-weather" value="' + city + '">\n                    <button class="weather-search-submit">Search</button>.\n                </div>\n            </form>\n        ';

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

var _Api = __webpack_require__(2);

var _render = __webpack_require__(1);

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

var _Api = __webpack_require__(2);

var _render = __webpack_require__(1);

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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a01d.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a02d.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a03d.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a04d.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a05d.svg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c01d.svg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c02d.svg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c03d.svg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c04d.svg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d01d.svg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d02d.svg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d03d.svg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/f01d.svg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r01d.svg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r02d.svg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r03d.svg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r04d.svg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r05d.svg";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r06d.svg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s01d.svg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s02d.svg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s03d.svg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s04d.svg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s05d.svg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s06d.svg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t01d.svg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t02d.svg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t03d.svg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t04d.svg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t05d.svg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t06d.svg";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t07d.svg";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/u00d.svg";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWI0MDk1NGE3Zjg5ODQ0NjRkYWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9hcHAuc2FzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvY2F0aW9uU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2MwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2QwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZjAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA2ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczA2ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA2ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwN2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy91MDBkLnN2ZyJdLCJuYW1lcyI6WyJwYXJzZWRVcmwiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkYXRhRE9NIiwiZm9ybURPTSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlucHV0RE9NIiwibWFpbkRPTSIsInRpdGxlRE9NIiwidW5pdHNET00iLCJwZXJpb2RET00iLCJoaXN0b3J5RE9NIiwiZmF2b3JpdGVzRE9NIiwiYnV0dG9uSGlzdG9yeUNsZWFyIiwiYnV0dG9uRmF2b3JpdGVzQ2xlYXIiLCJsb2FkZXJET00iLCJkYXRhIiwiY2l0eSIsInNlYXJjaFBhcmFtcyIsImdldCIsInNlY3JldEtleSIsInVuaXRzIiwidW5pdHNEaXNwbGF5IiwicGVyaW9kIiwiaGlzdG9yeU9iaiIsImZhdm9yaXRlT2JqIiwiUmVuZGVyIiwiaG9zdCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImlubmVySFRNTCIsInJlbmRlckNpdHkiLCJib2R5IiwibWFpbkVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndyYXBwZXJFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZG9jdW1lbnRGcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJtYWluV3JhcHBlciIsImkiLCJjb250ZW50V3JhcHBlciIsImNsYXNzTmFtZSIsImluc2VydEFkamFjZW50SFRNTCIsInRlbXAiLCJ3ZWF0aGVyIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiZGF0ZXRpbWUiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwibWF4X3RlbXAiLCJtaW5fdGVtcCIsImFwcF9tYXhfdGVtcCIsImFwcF9taW5fdGVtcCIsIndpbmRfc3BkIiwicG9wIiwiYXBwZW5kQ2hpbGQiLCJCQVNFX1VSTCIsImdldFdlYXRoZXIiLCJmZXRjaCIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNvbHZlIiwianNvbiIsImFwcGwiLCJhcHBUIiwicmVuZGVyIiwiQXBwIiwic3RhdGUiLCJVUkxTZWFyY2hQYXJhbXMiLCJzZWFyY2giLCJsb2NhdGlvbkVsZW1lbnQiLCJvblN1Ym1pdCIsIm9uU2VhcmNoU3VibWl0IiwiYmluZCIsIm5leHRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsInVwZGF0ZVN0YXRlIiwidXBkYXRlIiwiTG9jYXRpb25TZWFyY2giLCJwcm9wcyIsImlzVmFsaWQiLCJoYW5kbGVTdWJtaXQiLCJhZGRFdmVudExpc3RlbmVyIiwibmV4dFByb3BzIiwiY29uc29sZSIsImxvZyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImVsZW1lbnRzIiwidmFsdWUiLCJ0cmltIiwibGVuZ3RoIiwic2V0RXJyb3IiLCJlcnJvciIsImZpbmRDaXR5IiwiY2F0Y2giLCJjbGVhckxvY2FsU3RvcmFnZSIsIkRPTSIsImtleSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJwdXNoSGlzdG9yeSIsInN0b3JhZ2VPYmplY3QiLCJjc3NDbGFzcyIsImxvY2FsU3RvcmFnZUtleSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJpbmRleE9mIiwicHVzaCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzaG93SGlzdG9yeSIsIm1hcCIsImh5c3RvcnlJdGVtIiwib25jbGljayIsImV2ZW50IiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0Es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RTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL2FwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxYjQwOTU0YTdmODk4NDQ2NGRhZSIsIi8vZ2V0IGN1cnJlbnQgdXJsXHJcbmxldCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHJcbi8vb2JqZWN0IHdpdGggRE9NIGVsZW1lbnRzXHJcbmNvbnN0IGRhdGFET00gPSB7XHJcbiAgZm9ybURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtZm9ybVwiKSxcclxuICBpbnB1dERPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hcIiksXHJcbiAgbWFpbkRPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpLFxyXG4gIHRpdGxlRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpLFxyXG4gIHVuaXRzRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VuaXRzXCIpLFxyXG4gIHBlcmlvZERPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwZXJpb2RcIiksXHJcbiAgaGlzdG9yeURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaXN0b3J5XCIpLFxyXG4gIGZhdm9yaXRlc0RPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXZvcml0ZXNcIiksXHJcbiAgYnV0dG9uSGlzdG9yeUNsZWFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hpc3RvcnktY2xlYXJcIiksXHJcbiAgYnV0dG9uRmF2b3JpdGVzQ2xlYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmF2b3JpdGVzLWNsZWFyXCIpLFxyXG4gIGxvYWRlckRPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkZXJcIilcclxufTtcclxuXHJcbmxldCBkYXRhID0ge1xyXG4gIGNpdHk6IHBhcnNlZFVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiY2l0eVwiKSxcclxuXHJcbiAgLy9hcGkga2V5XHJcbiAgc2VjcmV0S2V5OiBcImM2OTc2YTRjNGUwNTQyMWY5YjRlYWVlN2EzMTFmMGRjXCIsXHJcbiAgdW5pdHM6IFwiTVwiLFxyXG4gIHVuaXRzRGlzcGxheTogXCJDXCIsXHJcbiAgcGVyaW9kOiAxLFxyXG5cclxuICAvL2xvY2Fsc3RvcmFnZSBvYmplY3RzXHJcbiAgaGlzdG9yeU9iajoge1xyXG4gICAgY2l0eTogW11cclxuICB9LFxyXG4gIGZhdm9yaXRlT2JqOiB7XHJcbiAgICBjaXR5OiBbXVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHBhcnNlZFVybCwgZGF0YURPTSwgZGF0YSB9O1xyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb25maWcuanMiLCJpbXBvcnQge3BhcnNlZFVybCwgZGF0YURPTSwgZGF0YX0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7cHVzaEhpc3RvcnksIHNob3dIaXN0b3J5fSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwNWQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9jMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9jMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9jMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9jMDRkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvZDAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvZDAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvZDAzZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2YwMWQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDVkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDZkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczA1ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczA2ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwNWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwNmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwN2Quc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy91MDBkLnN2Z1wiO1xyXG5cclxuY2xhc3MgUmVuZGVye1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICB0aGlzLmhvc3QuaWQgPSBcIm1haW5cIjtcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmhvc3QuaW5uZXJIVE1MID0gYGBcclxuICAgIHJldHVybiB0aGlzLmhvc3RcclxuICB9XHJcblxyXG59XHJcblxyXG4vKiBmdW5jdGlvbiBhZGRGYXZvcml0ZUJ1dHRvbihib2R5KSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYEN1cnJlbnQgY2l0eTogJHtib2R5LmNpdHlfbmFtZX0gXHJcbiAgICAgICAgPGltZyBpZD1cImZhdm9yaXRlc1wiIHNyYz1cImFzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1wiPlxyXG4gICAgICAgIGBcclxuICAgICk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmYXZvcml0ZXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBwdXNoSGlzdG9yeShcclxuICAgICAgICBkYXRhRE9NLmZhdm9yaXRlc0RPTSxcclxuICAgICAgICBkYXRhLmZhdm9yaXRlT2JqLFxyXG4gICAgICAgIFwiZmF2b3JpdGUtaXRlbVwiLFxyXG4gICAgICAgIFwiZmF2b3JpdGVzXCJcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH0gKi9cclxuXHJcbi8vcmVuZGVyIG1ldGhvZFxyXG5mdW5jdGlvbiByZW5kZXJDaXR5KGJvZHkpIHtcclxuICAvKiBkYXRhRE9NLmxvYWRlckRPTS5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTsgKi9cclxuICAvKiBhZGRGYXZvcml0ZUJ1dHRvbihib2R5KTsgKi9cclxuXHJcbiAgLy9jcmVhdGUgY29udGFpbmVyIGZvciBpbnNlcnRpbmcgZGF0YSBmcm9tIGxvb3BcclxuICBcclxuICBsZXQgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gIGxldCB3cmFwcGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdyYXBwZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcclxuICBcclxuICBsZXQgZG9jdW1lbnRGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICBsZXQgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24td3JhcHBlcicpO1xyXG5cclxuICBmb3IgKGxldCBpPTA7IGk8ZGF0YS5wZXJpb2Q7IGkrKykge1xyXG4gICAgbGV0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnRXcmFwcGVyLmNsYXNzTmFtZSA9IFwiY29udGVudFwiO1xyXG4gICAgY29udGVudFdyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIFxyXG4gICAgICBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfX3ZhbHVlc1wiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbl9fbnVtYmVyXCI+JHtib2R5LmRhdGFbaV0udGVtcH08L3NwYW4+ICR7ZGF0YS51bml0c0Rpc3BsYXl9XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FwdGlvbl9fdGl0bGVcIj5hdmcuIHRlbXAuPC9wPiBcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxvYmplY3QgZGF0YT1cImFzc2V0cy9tZWRpYS8ke2JvZHkuZGF0YVtpXS53ZWF0aGVyLmljb259LnN2Z1wiIHR5cGU9XCJcIj5cclxuICAgICAgICAgIDwvb2JqZWN0PlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjYXB0aW9uX190aXRsZVwiPiR7Ym9keS5kYXRhW2ldLndlYXRoZXIuZGVzY3JpcHRpb259PC9wPiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzcz1cImRhdGVcIj4ke2JvZHkuZGF0YVtpXS5kYXRldGltZVxyXG4gICAgICAgICAgLnNwbGl0KFwiLVwiKVxyXG4gICAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgICAgLmpvaW4oXCIuXCIpfVxyXG4gICAgICAgIDwvcD4gXHJcbiAgICAgICAgPHA+bWF4LiB0ZW1wLjogJHtib2R5LmRhdGFbaV0ubWF4X3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgIDxwPm1pbi4gdGVtcC46ICR7Ym9keS5kYXRhW2ldLm1pbl90ZW1wfSAke2RhdGEudW5pdHNEaXNwbGF5fTwvcD5cclxuICAgICAgICA8cD5mZWVscyBsaWtlLCBtYXg6ICR7Ym9keS5kYXRhW2ldLmFwcF9tYXhfdGVtcH0gJHtkYXRhLnVuaXRzRGlzcGxheX08L3A+XHJcbiAgICAgICAgPHA+ZmVlbHMgbGlrZSwgbWluOiAke2JvZHkuZGF0YVtpXS5hcHBfbWluX3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgIDxwPndpbmQ6ICR7Ym9keS5kYXRhW2ldLndpbmRfc3BkfSBtL3M8L3A+XHJcbiAgICAgICAgPHA+cHJlY2lwaXRhdGlvbjogJHtib2R5LmRhdGFbaV0ucG9wfSAlPC9wPlxyXG4gICAgICBgXHJcbiAgICApO1xyXG4gICAgZG9jdW1lbnRGcmFnbWVudC5hcHBlbmRDaGlsZChjb250ZW50V3JhcHBlcik7XHJcbiAgfVxyXG5cclxuICBcclxuICBcclxuICB3cmFwcGVyRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudEZyYWdtZW50KTtcclxuICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZCh3cmFwcGVyRWxlbWVudCk7XHJcbiAgXHJcblxyXG5cclxuICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVyQ2l0eX07XHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlcjtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9yZW5kZXIuanMiLCJcclxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmJpdC5pby92Mi4wL2ZvcmVjYXN0JztcclxuY29uc3QgZ2V0V2VhdGhlciA9IHVybCA9PiBmZXRjaChgJHtCQVNFX1VSTH0ke3VybH1gKVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKVxyXG4gIH0pXHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICB9KSBcclxuICBcclxuZXhwb3J0IHtnZXRXZWF0aGVyfTsgIFxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BcGkuanMiLCJpbXBvcnQgXCIuL2Fzc2V0cy9zYXNzL2FwcC5zYXNzXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIjtcclxuXHJcblxyXG5sZXQgYXBwbCA9IG5ldyBBcHA7XHJcbmxldCBhcHBUID0gYXBwbC5yZW5kZXIoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zYXNzL2FwcC5zYXNzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBMb2NhdGlvblNlYXJjaCBmcm9tIFwiLi9Mb2NhdGlvblNlYXJjaFwiO1xyXG5pbXBvcnQgUmVuZGVyIGZyb20gXCIuLi9hc3NldHMvanMvcmVuZGVyXCI7XHJcblxyXG5jbGFzcyBBcHB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNpdHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCkuZ2V0KCdjaXR5JykgfHwgJydcclxuICAgIH07XHJcbiAgICBcclxuICAgIHRoaXMubG9jYXRpb25FbGVtZW50ID0gbmV3IExvY2F0aW9uU2VhcmNoKHtcclxuICAgICAgY2l0eTogdGhpcy5zdGF0ZS5jaXR5LFxyXG4gICAgICBvblN1Ym1pdDogdGhpcy5vblNlYXJjaFN1Ym1pdFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vblNlYXJjaFN1Ym1pdCA9IHRoaXMub25TZWFyY2hTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMubWFpbkVsZW1lbnQgPSBuZXcgUmVuZGVyKCk7XHJcbiAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xyXG4gIH1cclxuXHJcblxyXG4gIHVwZGF0ZVN0YXRlKG5leHRTdGF0ZSl7XHJcbiAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgbmV4dFN0YXRlKTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBvblNlYXJjaFN1Ym1pdChjaXR5KXtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoeyBjaXR5IH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCl7XHJcbiAgICBjb25zdCB7Y2l0eX0gPSB0aGlzLnN0YXRlO1xyXG4gICAgdGhpcy5ob3N0LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgIHRoaXMuaG9zdC5hcHBlbmRDaGlsZCh0aGlzLmxvY2F0aW9uRWxlbWVudC51cGRhdGUoe1xyXG4gICAgICBjaXR5LFxyXG4gICAgICBvblN1Ym1pdDogdGhpcy5vblNlYXJjaFN1Ym1pdFxyXG4gICAgfSkpO1xyXG5cclxuICAgIHRoaXMuaG9zdC5hcHBlbmRDaGlsZCh0aGlzLm1haW5FbGVtZW50LnJlbmRlcigpKTtcclxuICAgIHJldHVybiB0aGlzLmhvc3RcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQXBwLmpzIiwiaW1wb3J0IHsgZmluZENpdHkgfSBmcm9tIFwiLi9TZWFyY2hcIjtcclxuXHJcbmNsYXNzIExvY2F0aW9uU2VhcmNoIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNWYWxpZCA6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbi13cmFwcGVyJyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUobmV4dFByb3BzKXtcclxuICAgICAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVN0YXRlKG5leHRTdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGNpdHkgPSBlLnRhcmdldC5lbGVtZW50cy5zZWFyY2gudmFsdWUudHJpbSgpO1xyXG5cclxuICAgICAgICBmaW5kQ2l0eSh0aGlzLnByb3BzLmNpdHkpO1xyXG5cclxuICAgICAgICBpZighY2l0eS5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtpc1ZhbGlkOiBmYWxzZX0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TdWJtaXQoY2l0eSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtpc1ZhbGlkfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge2NpdHl9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgdGhpcy5ob3N0LmlubmVySFRNTCA9IGBcclxuICAgICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5XZWF0aGVyLWFwcDwvaDE+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPSR7aXNWYWxpZCA/ICdcIndlYXRoZXItZm9ybVwiJyA6ICdcIndlYXRoZXItZm9ybSAtLWludmFsaWRcIid9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic2VhcmNoXCIgcmVxdWlyZWQgY2xhc3M9XCJzZWFyY2gtd2VhdGhlclwiIHZhbHVlPVwiJHtjaXR5fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ3ZWF0aGVyLXNlYXJjaC1zdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj4uXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLmhvc3RcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvblNlYXJjaFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTG9jYXRpb25TZWFyY2guanMiLCJpbXBvcnQgeyBwYXJzZWRVcmwsIGRhdGFET00sIGRhdGEgfSBmcm9tIFwiLi4vYXNzZXRzL2pzL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vQXBpXCI7XHJcbmltcG9ydCB7IHJlbmRlckNpdHkgfSBmcm9tIFwiLi4vYXNzZXRzL2pzL3JlbmRlclwiO1xyXG4vKmltcG9ydCB7IHB1c2hIaXN0b3J5LCBzaG93SGlzdG9yeSwgY2xlYXJMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjsqL1xyXG5cclxuLy9wdXNoIGN1cnJlbnQgY2l0eSB0byBVUkxcclxuLyogZnVuY3Rpb24gcHVzaFVybChjaXR5KSB7XHJcbiAgbGV0IHVybCA9IGBpbmRleC5odG1sP2NpdHk9JHtjaXR5fWA7XHJcbiAgaGlzdG9yeS5wdXNoU3RhdGUoY2l0eSwgbnVsbCwgdXJsKTtcclxuICBsZXQgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgZ2V0VXJsKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVybCgpe1xyXG4gIHdpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmKGV2ZW50LnN0YXRlICE9PSBudWxsKXtcclxuICAgICAgZmluZENpdHkoZXZlbnQuc3RhdGUpO1xyXG4gICAgfVxyXG4gIH07XHJcbn0gKi9cclxuXHJcbmZ1bmN0aW9uIHNldEVycm9yKGVycm9yKXtcclxuICAvKiBkYXRhRE9NLmxvYWRlckRPTS5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcclxuICBpZiAoZXJyb3Iuc3RhdHVzID09PSAyMDQpIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgQ2l0eSBub3QgZm91bmQuIFBsZWFzZSwgdHJ5IGFnYWluLmBcclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgIGBTZWFyY2ggZmllbGQgaXMgZW1wdHkuIFBsZWFzZSwgZW50ZXIgY2l0eSBuYW1lYFxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYCR7ZXJyb3Iuc3RhdHVzVGV4dH1gKTtcclxuICB9ICovXHJcbiAgY29uc29sZS5sb2coZXJyb3Iuc3RhdHVzKVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kQ2l0eShjaXR5KSB7XHJcbiAgLyogZGF0YURPTS5tYWluRE9NLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgZGF0YURPTS50aXRsZURPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpOyAvL3Nob3cgbG9hZGVyXHJcbiAgcHVzaFVybChjaXR5KTsgKi9cclxuXHJcbiAgZ2V0V2VhdGhlcihgL2RhaWx5P2NpdHk9JHtjaXR5fSZ1bml0cz0ke2RhdGEudW5pdHN9JmtleT0ke2RhdGEuc2VjcmV0S2V5fWApXHJcbiAgICAudGhlbihmdW5jdGlvbihib2R5KXtcclxuICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xyXG4gICAgICAgIHJlbmRlckNpdHkoYm9keSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHNldEVycm9yKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZmluZENpdHkgfTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2VhcmNoLmpzIiwiaW1wb3J0IHtwYXJzZWRVcmwsIGRhdGFET00sIGRhdGF9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQge2ZpbmRDaXR5fSBmcm9tIFwiLi9zZWFyY2hcIjtcclxuXHJcbi8qY2xlYXIgbG9jYWxzdG9yYWdlIGRhdGEqL1xyXG5mdW5jdGlvbiBjbGVhckxvY2FsU3RvcmFnZShET00sIGtleSkge1xyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgRE9NLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgRE9NLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgdGhlcmUgYXJlIG5vICR7a2V5fSB5ZXRgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHVzaEhpc3RvcnkoRE9NLCBzdG9yYWdlT2JqZWN0LCBjc3NDbGFzcywgbG9jYWxTdG9yYWdlS2V5KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2b3JpdGVzXCIpICYmXHJcbiAgICAgIGxvY2FsU3RvcmFnZUtleSA9PT0gXCJmYXZvcml0ZXNcIiAmJlxyXG4gICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2b3JpdGVzXCIpKS5jaXR5LmluZGV4T2YoZGF0YS5jaXR5KSAhPVxyXG4gICAgICAgIC0xXHJcbiAgICApIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0b3JhZ2VPYmplY3QuY2l0eS5wdXNoKGRhdGEuY2l0eSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZU9iamVjdCkpO1xyXG4gICAgICBzaG93SGlzdG9yeShET00sIHN0b3JhZ2VPYmplY3QsIGNzc0NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dIaXN0b3J5KERPTSwgc3RvcmFnZU9iamVjdCwgY3NzQ2xhc3MpIHtcclxuICAgIERPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgaWYgKHN0b3JhZ2VPYmplY3QpIHtcclxuXHJcbiAgICAgIHN0b3JhZ2VPYmplY3QuY2l0eS5tYXAoaSA9PiB7XHJcbiAgICAgICAgRE9NLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLGA8bGkgY2xhc3M9XCIke2Nzc0NsYXNzfVwiPiR7aX08L2xpPmApO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGxldCBoeXN0b3J5SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcblxyXG4gICAgICBoeXN0b3J5SXRlbS5vbmNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQudGFnTmFtZSA9PT0gJ0xJJyl7XHJcbiAgICAgICAgICBkYXRhLmNpdHkgPSB0YXJnZXQuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgZmluZENpdHkodGFyZ2V0LmlubmVySFRNTCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgfTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQge3B1c2hIaXN0b3J5LCBzaG93SGlzdG9yeSwgY2xlYXJMb2NhbFN0b3JhZ2V9XHJcblxyXG4gIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9sb2NhbFN0b3JhZ2UuanMiLCJpbXBvcnQgeyBwYXJzZWRVcmwsIGRhdGFET00sIGRhdGEgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FwaVwiO1xyXG5pbXBvcnQgeyByZW5kZXJDaXR5IH0gZnJvbSBcIi4vcmVuZGVyXCI7XHJcbi8qaW1wb3J0IHsgcHVzaEhpc3RvcnksIHNob3dIaXN0b3J5LCBjbGVhckxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiOyovXHJcblxyXG4vL3B1c2ggY3VycmVudCBjaXR5IHRvIFVSTFxyXG4vKiBmdW5jdGlvbiBwdXNoVXJsKGNpdHkpIHtcclxuICBsZXQgdXJsID0gYGluZGV4Lmh0bWw/Y2l0eT0ke2NpdHl9YDtcclxuICBoaXN0b3J5LnB1c2hTdGF0ZShjaXR5LCBudWxsLCB1cmwpO1xyXG4gIGxldCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICBnZXRVcmwoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXJsKCl7XHJcbiAgd2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYoZXZlbnQuc3RhdGUgIT09IG51bGwpe1xyXG4gICAgICBmaW5kQ2l0eShldmVudC5zdGF0ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxufSAqL1xyXG5cclxuZnVuY3Rpb24gc2V0RXJyb3IoZXJyb3Ipe1xyXG4gIC8qIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xyXG4gIGlmIChlcnJvci5zdGF0dXMgPT09IDIwNCkge1xyXG4gICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgIGBDaXR5IG5vdCBmb3VuZC4gUGxlYXNlLCB0cnkgYWdhaW4uYFxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYFNlYXJjaCBmaWVsZCBpcyBlbXB0eS4gUGxlYXNlLCBlbnRlciBjaXR5IG5hbWVgXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgJHtlcnJvci5zdGF0dXNUZXh0fWApO1xyXG4gIH0gKi9cclxufVxyXG5cclxuZnVuY3Rpb24gZmluZENpdHkoY2l0eSkge1xyXG4gIC8qIGRhdGFET00ubWFpbkRPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGRhdGFET00udGl0bGVET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICBkYXRhRE9NLmxvYWRlckRPTS5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTsgLy9zaG93IGxvYWRlclxyXG4gIHB1c2hVcmwoY2l0eSk7ICovXHJcblxyXG4gIGdldFdlYXRoZXIoYC9kYWlseT9jaXR5PSR7Y2l0eX0mdW5pdHM9JHtkYXRhLnVuaXRzfSZrZXk9JHtkYXRhLnNlY3JldEtleX1gKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24oYm9keSl7XHJcbiAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcclxuICAgICAgICByZW5kZXJDaXR5KGJvZHkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBib2R5O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChzZXRFcnJvcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGZpbmRDaXR5IH07XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvc2VhcmNoLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZDAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZDAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZDAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZjAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9mMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjA2ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDZkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczA2ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDZkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA2ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDZkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA3ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDdkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdTAwZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy91MDBkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==