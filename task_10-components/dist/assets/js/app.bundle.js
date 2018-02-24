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

var appl = new _App2.default({ host: document.getElementById('root') });
appl.update();

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

var _app = __webpack_require__(47);

var _LocationSearch = __webpack_require__(6);

var _LocationSearch2 = _interopRequireDefault(_LocationSearch);

var _render = __webpack_require__(1);

var _render2 = _interopRequireDefault(_render);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App(_ref) {
    var host = _ref.host;

    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.state = {
      city: new URLSearchParams(window.location.search).get('city') || ''
    };

    _this.host = host;

    _this.locationElement = new _LocationSearch2.default({
      city: _this.state.city,
      onSubmit: _this.onSearchSubmit
    });

    console.log(_this.host);
    _this.onSearchSubmit = _this.onSearchSubmit.bind(_this);
    _this.mainElement = new _render2.default();
    return _this;
  }

  _createClass(App, [{
    key: "onSearchSubmit",
    value: function onSearchSubmit(city) {
      this.updateState({ city: city });
    }
  }, {
    key: "render",
    value: function render() {
      var city = this.state.city;


      return [this.locationElement.update({ city: city, onSubmit: this.onSearchSubmit }), this.mainElement.render()];
    }
  }]);

  return App;
}(_app.Component);

exports.default = App;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(47);

var _Search = __webpack_require__(7);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LocationSearch = function (_Component) {
    _inherits(LocationSearch, _Component);

    function LocationSearch(props) {
        _classCallCheck(this, LocationSearch);

        var _this = _possibleConstructorReturn(this, (LocationSearch.__proto__ || Object.getPrototypeOf(LocationSearch)).call(this, props));

        _this.state = {
            isValid: true
        };
        _this.props = props;

        _this.handleSubmit = _this.handleSubmit.bind(_this);

        _this.host = document.createElement('header');
        _this.host.classList.add('location-wrapper');
        _this.host.addEventListener('submit', _this.handleSubmit);
        return _this;
    }

    _createClass(LocationSearch, [{
        key: "handleSubmit",
        value: function handleSubmit(e) {
            e.preventDefault();
            var city = e.target.elements.search.value.trim();

            (0, _Search.findCity)(city);

            if (!city.length) {
                this.updateState({ isValid: false });
            } else {
                this.props.onSubmit(city);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var isValid = this.state.isValid;
            var city = this.props.city;

            console.log(this.props);

            return "\n            <h1 class=\"title\">Weather-app</h1>\n            <form class=" + (isValid ? '"weather-form"' : '"weather-form --invalid"') + ">\n                <div class=\"search\">\n                    <input name=\"search\" required class=\"search-weather\" value=\"" + city + "\">\n                    <button class=\"weather-search-submit\">Search</button>.\n                </div>\n            </form>\n        ";
        }
    }]);

    return LocationSearch;
}(_app.Component);

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

/***/ }),
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Component = __webpack_require__(48);

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Component).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
  function Component(props) {
    _classCallCheck(this, Component);

    this.props = props || {};
    this.state = {};

    this.host = null;
  }

  _createClass(Component, [{
    key: 'updateState',
    value: function updateState(nextState) {
      this.state = Object.assign({}, this.state, nextState);
      this._render();
    }
  }, {
    key: 'update',
    value: function update(nextProps) {
      this.props = nextProps;
      return this._render();
    }
  }, {
    key: '_render',
    value: function _render() {
      var children = this.render();

      this.host.innerHTML = '';

      if (typeof children === 'string') {
        this.host.innerHTML = children;
      } else if (Array.isArray(children)) {
        var _host;

        (_host = this.host).append.apply(_host, _toConsumableArray(children));
      } else {
        this.host.append(children);
      }

      console.log(this.host);
      return this.host;
    }
  }, {
    key: 'render',
    value: function render() {}
  }]);

  return Component;
}();

exports.default = Component;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMWIyZGE5MDZiMWVmYzZkNWI0ZGEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9hcHAuc2FzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvY2F0aW9uU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2MwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2QwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZjAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA2ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczA2ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA2ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwN2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy91MDBkLnN2ZyIsIndlYnBhY2s6Ly8vLi9kZWZhdWx0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9kZWZhdWx0L0NvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJwYXJzZWRVcmwiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkYXRhRE9NIiwiZm9ybURPTSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlucHV0RE9NIiwibWFpbkRPTSIsInRpdGxlRE9NIiwidW5pdHNET00iLCJwZXJpb2RET00iLCJoaXN0b3J5RE9NIiwiZmF2b3JpdGVzRE9NIiwiYnV0dG9uSGlzdG9yeUNsZWFyIiwiYnV0dG9uRmF2b3JpdGVzQ2xlYXIiLCJsb2FkZXJET00iLCJkYXRhIiwiY2l0eSIsInNlYXJjaFBhcmFtcyIsImdldCIsInNlY3JldEtleSIsInVuaXRzIiwidW5pdHNEaXNwbGF5IiwicGVyaW9kIiwiaGlzdG9yeU9iaiIsImZhdm9yaXRlT2JqIiwiUmVuZGVyIiwiaG9zdCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImlubmVySFRNTCIsInJlbmRlckNpdHkiLCJib2R5IiwibWFpbkVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIndyYXBwZXJFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZG9jdW1lbnRGcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJtYWluV3JhcHBlciIsImkiLCJjb250ZW50V3JhcHBlciIsImNsYXNzTmFtZSIsImluc2VydEFkamFjZW50SFRNTCIsInRlbXAiLCJ3ZWF0aGVyIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiZGF0ZXRpbWUiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwibWF4X3RlbXAiLCJtaW5fdGVtcCIsImFwcF9tYXhfdGVtcCIsImFwcF9taW5fdGVtcCIsIndpbmRfc3BkIiwicG9wIiwiYXBwZW5kQ2hpbGQiLCJCQVNFX1VSTCIsImdldFdlYXRoZXIiLCJmZXRjaCIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNvbHZlIiwianNvbiIsImFwcGwiLCJ1cGRhdGUiLCJBcHAiLCJzdGF0ZSIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImxvY2F0aW9uRWxlbWVudCIsIm9uU3VibWl0Iiwib25TZWFyY2hTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiYmluZCIsInVwZGF0ZVN0YXRlIiwicmVuZGVyIiwiTG9jYXRpb25TZWFyY2giLCJwcm9wcyIsImlzVmFsaWQiLCJoYW5kbGVTdWJtaXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsInRyaW0iLCJsZW5ndGgiLCJzZXRFcnJvciIsImVycm9yIiwiZmluZENpdHkiLCJjYXRjaCIsImNsZWFyTG9jYWxTdG9yYWdlIiwiRE9NIiwia2V5IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2hIaXN0b3J5Iiwic3RvcmFnZU9iamVjdCIsImNzc0NsYXNzIiwibG9jYWxTdG9yYWdlS2V5IiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImluZGV4T2YiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNob3dIaXN0b3J5IiwibWFwIiwiaHlzdG9yeUl0ZW0iLCJvbmNsaWNrIiwiZXZlbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdCIsIkNvbXBvbmVudCIsIm5leHRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsIl9yZW5kZXIiLCJuZXh0UHJvcHMiLCJjaGlsZHJlbiIsIkFycmF5IiwiaXNBcnJheSIsImFwcGVuZCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtB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L2pzL2FwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxYjJkYTkwNmIxZWZjNmQ1YjRkYSIsIi8vZ2V0IGN1cnJlbnQgdXJsXHJcbmxldCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuXHJcbi8vb2JqZWN0IHdpdGggRE9NIGVsZW1lbnRzXHJcbmNvbnN0IGRhdGFET00gPSB7XHJcbiAgZm9ybURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2gtZm9ybVwiKSxcclxuICBpbnB1dERPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNzZWFyY2hcIiksXHJcbiAgbWFpbkRPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53cmFwcGVyXCIpLFxyXG4gIHRpdGxlRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpLFxyXG4gIHVuaXRzRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VuaXRzXCIpLFxyXG4gIHBlcmlvZERPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNwZXJpb2RcIiksXHJcbiAgaGlzdG9yeURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaXN0b3J5XCIpLFxyXG4gIGZhdm9yaXRlc0RPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mYXZvcml0ZXNcIiksXHJcbiAgYnV0dG9uSGlzdG9yeUNsZWFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2hpc3RvcnktY2xlYXJcIiksXHJcbiAgYnV0dG9uRmF2b3JpdGVzQ2xlYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZmF2b3JpdGVzLWNsZWFyXCIpLFxyXG4gIGxvYWRlckRPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2FkZXJcIilcclxufTtcclxuXHJcbmxldCBkYXRhID0ge1xyXG4gIGNpdHk6IHBhcnNlZFVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiY2l0eVwiKSxcclxuXHJcbiAgLy9hcGkga2V5XHJcbiAgc2VjcmV0S2V5OiBcImM2OTc2YTRjNGUwNTQyMWY5YjRlYWVlN2EzMTFmMGRjXCIsXHJcbiAgdW5pdHM6IFwiTVwiLFxyXG4gIHVuaXRzRGlzcGxheTogXCJDXCIsXHJcbiAgcGVyaW9kOiAxLFxyXG5cclxuICAvL2xvY2Fsc3RvcmFnZSBvYmplY3RzXHJcbiAgaGlzdG9yeU9iajoge1xyXG4gICAgY2l0eTogW11cclxuICB9LFxyXG4gIGZhdm9yaXRlT2JqOiB7XHJcbiAgICBjaXR5OiBbXVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHBhcnNlZFVybCwgZGF0YURPTSwgZGF0YSB9O1xyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb25maWcuanMiLCJpbXBvcnQge3BhcnNlZFVybCwgZGF0YURPTSwgZGF0YX0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7cHVzaEhpc3RvcnksIHNob3dIaXN0b3J5fSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwNWQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9jMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9jMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9jMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9jMDRkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvZDAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvZDAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvZDAzZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2YwMWQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDVkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDZkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczA1ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczA2ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwNWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwNmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwN2Quc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy91MDBkLnN2Z1wiO1xyXG5cclxuY2xhc3MgUmVuZGVye1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICB0aGlzLmhvc3QuaWQgPSBcIm1haW5cIjtcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmhvc3QuaW5uZXJIVE1MID0gYGBcclxuICAgIHJldHVybiB0aGlzLmhvc3RcclxuICB9XHJcblxyXG59XHJcblxyXG4vKiBmdW5jdGlvbiBhZGRGYXZvcml0ZUJ1dHRvbihib2R5KSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYEN1cnJlbnQgY2l0eTogJHtib2R5LmNpdHlfbmFtZX0gXHJcbiAgICAgICAgPGltZyBpZD1cImZhdm9yaXRlc1wiIHNyYz1cImFzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1wiPlxyXG4gICAgICAgIGBcclxuICAgICk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmYXZvcml0ZXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBwdXNoSGlzdG9yeShcclxuICAgICAgICBkYXRhRE9NLmZhdm9yaXRlc0RPTSxcclxuICAgICAgICBkYXRhLmZhdm9yaXRlT2JqLFxyXG4gICAgICAgIFwiZmF2b3JpdGUtaXRlbVwiLFxyXG4gICAgICAgIFwiZmF2b3JpdGVzXCJcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH0gKi9cclxuXHJcbi8vcmVuZGVyIG1ldGhvZFxyXG5mdW5jdGlvbiByZW5kZXJDaXR5KGJvZHkpIHtcclxuICAvKiBkYXRhRE9NLmxvYWRlckRPTS5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTsgKi9cclxuICAvKiBhZGRGYXZvcml0ZUJ1dHRvbihib2R5KTsgKi9cclxuXHJcbiAgLy9jcmVhdGUgY29udGFpbmVyIGZvciBpbnNlcnRpbmcgZGF0YSBmcm9tIGxvb3BcclxuICBcclxuICBsZXQgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gIGxldCB3cmFwcGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdyYXBwZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcclxuICBcclxuICBsZXQgZG9jdW1lbnRGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICBsZXQgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24td3JhcHBlcicpO1xyXG5cclxuICBmb3IgKGxldCBpPTA7IGk8ZGF0YS5wZXJpb2Q7IGkrKykge1xyXG4gICAgbGV0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnRXcmFwcGVyLmNsYXNzTmFtZSA9IFwiY29udGVudFwiO1xyXG4gICAgY29udGVudFdyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIFxyXG4gICAgICBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfX3ZhbHVlc1wiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbl9fbnVtYmVyXCI+JHtib2R5LmRhdGFbaV0udGVtcH08L3NwYW4+ICR7ZGF0YS51bml0c0Rpc3BsYXl9XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FwdGlvbl9fdGl0bGVcIj5hdmcuIHRlbXAuPC9wPiBcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxvYmplY3QgZGF0YT1cImFzc2V0cy9tZWRpYS8ke2JvZHkuZGF0YVtpXS53ZWF0aGVyLmljb259LnN2Z1wiIHR5cGU9XCJcIj5cclxuICAgICAgICAgIDwvb2JqZWN0PlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjYXB0aW9uX190aXRsZVwiPiR7Ym9keS5kYXRhW2ldLndlYXRoZXIuZGVzY3JpcHRpb259PC9wPiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzcz1cImRhdGVcIj4ke2JvZHkuZGF0YVtpXS5kYXRldGltZVxyXG4gICAgICAgICAgLnNwbGl0KFwiLVwiKVxyXG4gICAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgICAgLmpvaW4oXCIuXCIpfVxyXG4gICAgICAgIDwvcD4gXHJcbiAgICAgICAgPHA+bWF4LiB0ZW1wLjogJHtib2R5LmRhdGFbaV0ubWF4X3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgIDxwPm1pbi4gdGVtcC46ICR7Ym9keS5kYXRhW2ldLm1pbl90ZW1wfSAke2RhdGEudW5pdHNEaXNwbGF5fTwvcD5cclxuICAgICAgICA8cD5mZWVscyBsaWtlLCBtYXg6ICR7Ym9keS5kYXRhW2ldLmFwcF9tYXhfdGVtcH0gJHtkYXRhLnVuaXRzRGlzcGxheX08L3A+XHJcbiAgICAgICAgPHA+ZmVlbHMgbGlrZSwgbWluOiAke2JvZHkuZGF0YVtpXS5hcHBfbWluX3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgIDxwPndpbmQ6ICR7Ym9keS5kYXRhW2ldLndpbmRfc3BkfSBtL3M8L3A+XHJcbiAgICAgICAgPHA+cHJlY2lwaXRhdGlvbjogJHtib2R5LmRhdGFbaV0ucG9wfSAlPC9wPlxyXG4gICAgICBgXHJcbiAgICApO1xyXG4gICAgZG9jdW1lbnRGcmFnbWVudC5hcHBlbmRDaGlsZChjb250ZW50V3JhcHBlcik7XHJcbiAgfVxyXG5cclxuICBcclxuICBcclxuICB3cmFwcGVyRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudEZyYWdtZW50KTtcclxuICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZCh3cmFwcGVyRWxlbWVudCk7XHJcbiAgXHJcblxyXG5cclxuICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVyQ2l0eX07XHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlcjtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9yZW5kZXIuanMiLCJcclxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmJpdC5pby92Mi4wL2ZvcmVjYXN0JztcclxuY29uc3QgZ2V0V2VhdGhlciA9IHVybCA9PiBmZXRjaChgJHtCQVNFX1VSTH0ke3VybH1gKVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKVxyXG4gIH0pXHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICB9KSBcclxuICBcclxuZXhwb3J0IHtnZXRXZWF0aGVyfTsgIFxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BcGkuanMiLCJpbXBvcnQgXCIuL2Fzc2V0cy9zYXNzL2FwcC5zYXNzXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIjtcclxuXHJcbmxldCBhcHBsID0gbmV3IEFwcCh7IGhvc3Q6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyl9KTtcclxuYXBwbC51cGRhdGUoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zYXNzL2FwcC5zYXNzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJy4uL2RlZmF1bHQvYXBwJztcclxuaW1wb3J0IExvY2F0aW9uU2VhcmNoIGZyb20gXCIuL0xvY2F0aW9uU2VhcmNoXCI7XHJcbmltcG9ydCBSZW5kZXIgZnJvbSBcIi4uL2Fzc2V0cy9qcy9yZW5kZXJcIjtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudHtcclxuICBjb25zdHJ1Y3Rvcigge2hvc3R9ICl7XHJcbiAgICBzdXBlcigpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIGNpdHk6IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCkuZ2V0KCdjaXR5JykgfHwgJydcclxuICAgIH07XHJcbiAgICBcclxuICAgIHRoaXMuaG9zdCA9IGhvc3Q7XHJcbiAgICBcclxuICAgIHRoaXMubG9jYXRpb25FbGVtZW50ID0gbmV3IExvY2F0aW9uU2VhcmNoKHtcclxuICAgICAgY2l0eTogdGhpcy5zdGF0ZS5jaXR5LFxyXG4gICAgICBvblN1Ym1pdDogdGhpcy5vblNlYXJjaFN1Ym1pdFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5ob3N0KTtcclxuICAgIHRoaXMub25TZWFyY2hTdWJtaXQgPSB0aGlzLm9uU2VhcmNoU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLm1haW5FbGVtZW50ID0gbmV3IFJlbmRlcigpO1xyXG4gIH1cclxuXHJcblxyXG4gIG9uU2VhcmNoU3VibWl0KGNpdHkpe1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7IGNpdHkgfSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKXtcclxuICAgIGNvbnN0IHtjaXR5fSA9IHRoaXMuc3RhdGU7XHJcbiAgIFxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgdGhpcy5sb2NhdGlvbkVsZW1lbnQudXBkYXRlKHsgY2l0eSwgb25TdWJtaXQ6IHRoaXMub25TZWFyY2hTdWJtaXQgfSksXHJcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQucmVuZGVyKClcclxuICAgIF07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FwcC5qcyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi9kZWZhdWx0L2FwcFwiXHJcbmltcG9ydCB7IGZpbmRDaXR5IH0gZnJvbSBcIi4vU2VhcmNoXCI7XHJcblxyXG5jbGFzcyBMb2NhdGlvblNlYXJjaCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1ZhbGlkIDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uLXdyYXBwZXInKTtcclxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgY2l0eSA9IGUudGFyZ2V0LmVsZW1lbnRzLnNlYXJjaC52YWx1ZS50cmltKCk7XHJcblxyXG4gICAgICAgIGZpbmRDaXR5KGNpdHkpO1xyXG5cclxuICAgICAgICBpZighY2l0eS5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtpc1ZhbGlkOiBmYWxzZX0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TdWJtaXQoY2l0eSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtpc1ZhbGlkfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge2NpdHl9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPldlYXRoZXItYXBwPC9oMT5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9JHtpc1ZhbGlkID8gJ1wid2VhdGhlci1mb3JtXCInIDogJ1wid2VhdGhlci1mb3JtIC0taW52YWxpZFwiJ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJzZWFyY2hcIiByZXF1aXJlZCBjbGFzcz1cInNlYXJjaC13ZWF0aGVyXCIgdmFsdWU9XCIke2NpdHl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIndlYXRoZXItc2VhcmNoLXN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPi5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25TZWFyY2hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xvY2F0aW9uU2VhcmNoLmpzIiwiaW1wb3J0IHsgcGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhIH0gZnJvbSBcIi4uL2Fzc2V0cy9qcy9jb25maWdcIjtcclxuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuL0FwaVwiO1xyXG5pbXBvcnQgeyByZW5kZXJDaXR5IH0gZnJvbSBcIi4uL2Fzc2V0cy9qcy9yZW5kZXJcIjtcclxuLyppbXBvcnQgeyBwdXNoSGlzdG9yeSwgc2hvd0hpc3RvcnksIGNsZWFyTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7Ki9cclxuXHJcbi8vcHVzaCBjdXJyZW50IGNpdHkgdG8gVVJMXHJcbi8qIGZ1bmN0aW9uIHB1c2hVcmwoY2l0eSkge1xyXG4gIGxldCB1cmwgPSBgaW5kZXguaHRtbD9jaXR5PSR7Y2l0eX1gO1xyXG4gIGhpc3RvcnkucHVzaFN0YXRlKGNpdHksIG51bGwsIHVybCk7XHJcbiAgbGV0IHBhcnNlZFVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gIGdldFVybCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVcmwoKXtcclxuICB3aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZihldmVudC5zdGF0ZSAhPT0gbnVsbCl7XHJcbiAgICAgIGZpbmRDaXR5KGV2ZW50LnN0YXRlKTtcclxuICAgIH1cclxuICB9O1xyXG59ICovXHJcblxyXG5mdW5jdGlvbiBzZXRFcnJvcihlcnJvcil7XHJcbiAgLyogZGF0YURPTS5sb2FkZXJET00uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XHJcbiAgaWYgKGVycm9yLnN0YXR1cyA9PT0gMjA0KSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYENpdHkgbm90IGZvdW5kLiBQbGVhc2UsIHRyeSBhZ2Fpbi5gXHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDApIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgU2VhcmNoIGZpZWxkIGlzIGVtcHR5LiBQbGVhc2UsIGVudGVyIGNpdHkgbmFtZWBcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGAke2Vycm9yLnN0YXR1c1RleHR9YCk7XHJcbiAgfSAqL1xyXG4gIGNvbnNvbGUubG9nKGVycm9yLnN0YXR1cylcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZENpdHkoY2l0eSkge1xyXG4gIC8qIGRhdGFET00ubWFpbkRPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGRhdGFET00udGl0bGVET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICBkYXRhRE9NLmxvYWRlckRPTS5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTsgLy9zaG93IGxvYWRlclxyXG4gIHB1c2hVcmwoY2l0eSk7ICovXHJcblxyXG4gIGdldFdlYXRoZXIoYC9kYWlseT9jaXR5PSR7Y2l0eX0mdW5pdHM9JHtkYXRhLnVuaXRzfSZrZXk9JHtkYXRhLnNlY3JldEtleX1gKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24oYm9keSl7XHJcbiAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcclxuICAgICAgICByZW5kZXJDaXR5KGJvZHkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBib2R5O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChzZXRFcnJvcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGZpbmRDaXR5IH07XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NlYXJjaC5qcyIsImltcG9ydCB7cGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHtmaW5kQ2l0eX0gZnJvbSBcIi4vc2VhcmNoXCI7XHJcblxyXG4vKmNsZWFyIGxvY2Fsc3RvcmFnZSBkYXRhKi9cclxuZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2UoRE9NLCBrZXkpIHtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gIERPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIERPTS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYHRoZXJlIGFyZSBubyAke2tleX0geWV0YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHB1c2hIaXN0b3J5KERPTSwgc3RvcmFnZU9iamVjdCwgY3NzQ2xhc3MsIGxvY2FsU3RvcmFnZUtleSkge1xyXG4gICAgaWYgKFxyXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc1wiKSAmJlxyXG4gICAgICBsb2NhbFN0b3JhZ2VLZXkgPT09IFwiZmF2b3JpdGVzXCIgJiZcclxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc1wiKSkuY2l0eS5pbmRleE9mKGRhdGEuY2l0eSkgIT1cclxuICAgICAgICAtMVxyXG4gICAgKSB7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdG9yYWdlT2JqZWN0LmNpdHkucHVzaChkYXRhLmNpdHkpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VPYmplY3QpKTtcclxuICAgICAgc2hvd0hpc3RvcnkoRE9NLCBzdG9yYWdlT2JqZWN0LCBjc3NDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG93SGlzdG9yeShET00sIHN0b3JhZ2VPYmplY3QsIGNzc0NsYXNzKSB7XHJcbiAgICBET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGlmIChzdG9yYWdlT2JqZWN0KSB7XHJcblxyXG4gICAgICBzdG9yYWdlT2JqZWN0LmNpdHkubWFwKGkgPT4ge1xyXG4gICAgICAgIERPTS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIixgPGxpIGNsYXNzPVwiJHtjc3NDbGFzc31cIj4ke2l9PC9saT5gKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBsZXQgaHlzdG9yeUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG5cclxuICAgICAgaHlzdG9yeUl0ZW0ub25jbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnRhZ05hbWUgPT09ICdMSScpe1xyXG4gICAgICAgICAgZGF0YS5jaXR5ID0gdGFyZ2V0LmlubmVySFRNTDtcclxuICAgICAgICAgIGZpbmRDaXR5KHRhcmdldC5pbm5lckhUTUwpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgIH07XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IHtwdXNoSGlzdG9yeSwgc2hvd0hpc3RvcnksIGNsZWFyTG9jYWxTdG9yYWdlfVxyXG5cclxuICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvbG9jYWxTdG9yYWdlLmpzIiwiaW1wb3J0IHsgcGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BcGlcIjtcclxuaW1wb3J0IHsgcmVuZGVyQ2l0eSB9IGZyb20gXCIuL3JlbmRlclwiO1xyXG4vKmltcG9ydCB7IHB1c2hIaXN0b3J5LCBzaG93SGlzdG9yeSwgY2xlYXJMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjsqL1xyXG5cclxuLy9wdXNoIGN1cnJlbnQgY2l0eSB0byBVUkxcclxuLyogZnVuY3Rpb24gcHVzaFVybChjaXR5KSB7XHJcbiAgbGV0IHVybCA9IGBpbmRleC5odG1sP2NpdHk9JHtjaXR5fWA7XHJcbiAgaGlzdG9yeS5wdXNoU3RhdGUoY2l0eSwgbnVsbCwgdXJsKTtcclxuICBsZXQgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgZ2V0VXJsKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVybCgpe1xyXG4gIHdpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmKGV2ZW50LnN0YXRlICE9PSBudWxsKXtcclxuICAgICAgZmluZENpdHkoZXZlbnQuc3RhdGUpO1xyXG4gICAgfVxyXG4gIH07XHJcbn0gKi9cclxuXHJcbmZ1bmN0aW9uIHNldEVycm9yKGVycm9yKXtcclxuICAvKiBkYXRhRE9NLmxvYWRlckRPTS5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcclxuICBpZiAoZXJyb3Iuc3RhdHVzID09PSAyMDQpIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgQ2l0eSBub3QgZm91bmQuIFBsZWFzZSwgdHJ5IGFnYWluLmBcclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgIGBTZWFyY2ggZmllbGQgaXMgZW1wdHkuIFBsZWFzZSwgZW50ZXIgY2l0eSBuYW1lYFxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYCR7ZXJyb3Iuc3RhdHVzVGV4dH1gKTtcclxuICB9ICovXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRDaXR5KGNpdHkpIHtcclxuICAvKiBkYXRhRE9NLm1haW5ET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICBkYXRhRE9NLnRpdGxlRE9NLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgZGF0YURPTS5sb2FkZXJET00uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7IC8vc2hvdyBsb2FkZXJcclxuICBwdXNoVXJsKGNpdHkpOyAqL1xyXG5cclxuICBnZXRXZWF0aGVyKGAvZGFpbHk/Y2l0eT0ke2NpdHl9JnVuaXRzPSR7ZGF0YS51bml0c30ma2V5PSR7ZGF0YS5zZWNyZXRLZXl9YClcclxuICAgIC50aGVuKGZ1bmN0aW9uKGJvZHkpe1xyXG4gICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyk7XHJcbiAgICAgICAgcmVuZGVyQ2l0eShib2R5KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYm9keTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goc2V0RXJyb3IpO1xyXG59XHJcblxyXG5leHBvcnQgeyBmaW5kQ2l0eSB9O1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3NlYXJjaC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2YwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZjAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwN2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA3ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3UwMGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdTAwZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlZmF1bHQvYXBwLmpzIiwiY2xhc3MgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHRoaXMucHJvcHMgPSBwcm9wcyB8fCB7fTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG4gIFxyXG4gICAgICB0aGlzLmhvc3QgPSBudWxsO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgdXBkYXRlU3RhdGUobmV4dFN0YXRlKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xyXG4gICAgICB0aGlzLl9yZW5kZXIoKTtcclxuICAgIH1cclxuICBcclxuICAgIHVwZGF0ZShuZXh0UHJvcHMpIHtcclxuICAgICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcclxuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcigpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgX3JlbmRlcigpIHtcclxuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLnJlbmRlcigpO1xyXG4gIFxyXG4gICAgICB0aGlzLmhvc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgXHJcbiAgICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdGhpcy5ob3N0LmlubmVySFRNTCA9IGNoaWxkcmVuO1xyXG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XHJcbiAgICAgICAgdGhpcy5ob3N0LmFwcGVuZCguLi5jaGlsZHJlbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ob3N0LmFwcGVuZChjaGlsZHJlbik7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgY29uc29sZS5sb2codGhpcy5ob3N0KTtcclxuICAgICAgcmV0dXJuIHRoaXMuaG9zdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge31cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xyXG4gIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlZmF1bHQvQ29tcG9uZW50LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==