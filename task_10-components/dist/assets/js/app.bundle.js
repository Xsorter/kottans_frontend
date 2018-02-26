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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

var _localStorage = __webpack_require__(10);

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

__webpack_require__(43);

__webpack_require__(44);

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


function renderCity(city) {
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
    contentWrapper.insertAdjacentHTML("beforeend", "\n        <div class=\"content__values\">\n          <p>\n            <span class=\"caption__number\">" + city.data[i].temp + "</span> " + _config.data.unitsDisplay + "\n            <p class=\"caption__title\">avg. temp.</p> \n          </p>\n          <object data=\"assets/media/" + city.data[i].weather.icon + ".svg\" type=\"\">\n          </object>\n          <p class=\"caption__title\">" + city.data[i].weather.description + "</p> \n        </div>\n        <p class=\"date\">" + city.data[i].datetime.split("-").reverse().join(".") + "\n        </p> \n        <p>max. temp.: " + city.data[i].max_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>min. temp.: " + city.data[i].min_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>feels like, max: " + city.data[i].app_max_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>feels like, min: " + city.data[i].app_min_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>wind: " + city.data[i].wind_spd + " m/s</p>\n        <p>precipitation: " + city.data[i].pop + " %</p>\n      ");
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

var _Component = __webpack_require__(7);

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Component).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

var _App = __webpack_require__(6);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appl = new _App2.default({ host: document.getElementById('root') });
appl.update();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(2);

var _LocationSearch = __webpack_require__(8);

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
      city: new URLSearchParams(window.location.search).get("city") || ""
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
/* 7 */
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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(2);

var _Search = __webpack_require__(9);

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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findCity = undefined;

var _config = __webpack_require__(0);

var _Api = __webpack_require__(3);

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

  (0, _Api.getWeather)("/daily?city=" + city + "&units=" + _config.data.units + "&key=" + _config.data.secretKey).then(function (city) {
    if (city) {
      console.log('success');
      (0, _render.renderCity)(city);
    }
    return city;
  }).catch(setError);
}

exports.findCity = findCity;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearLocalStorage = exports.showHistory = exports.pushHistory = undefined;

var _config = __webpack_require__(0);

var _search = __webpack_require__(11);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findCity = undefined;

var _config = __webpack_require__(0);

var _Api = __webpack_require__(3);

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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a01d.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a02d.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a03d.svg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a04d.svg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a05d.svg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c01d.svg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c02d.svg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c03d.svg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c04d.svg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d01d.svg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d02d.svg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d03d.svg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/f01d.svg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r01d.svg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r02d.svg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r03d.svg";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r04d.svg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r05d.svg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r06d.svg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s01d.svg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s02d.svg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s03d.svg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s04d.svg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s05d.svg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s06d.svg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t01d.svg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t02d.svg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t03d.svg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t04d.svg";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t05d.svg";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t06d.svg";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t07d.svg";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/u00d.svg";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTY5MDdhNDEwZGI4MDk4Y2YyZDAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL2RlZmF1bHQvYXBwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9hcHAuc2FzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9kZWZhdWx0L0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvY2F0aW9uU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2MwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2QwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZjAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA2ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczA2ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA2ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwN2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy91MDBkLnN2ZyJdLCJuYW1lcyI6WyJwYXJzZWRVcmwiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkYXRhRE9NIiwiZm9ybURPTSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlucHV0RE9NIiwibWFpbkRPTSIsInRpdGxlRE9NIiwidW5pdHNET00iLCJwZXJpb2RET00iLCJoaXN0b3J5RE9NIiwiZmF2b3JpdGVzRE9NIiwiYnV0dG9uSGlzdG9yeUNsZWFyIiwiYnV0dG9uRmF2b3JpdGVzQ2xlYXIiLCJsb2FkZXJET00iLCJkYXRhIiwiY2l0eSIsInNlYXJjaFBhcmFtcyIsImdldCIsInNlY3JldEtleSIsInVuaXRzIiwidW5pdHNEaXNwbGF5IiwicGVyaW9kIiwiaGlzdG9yeU9iaiIsImZhdm9yaXRlT2JqIiwiUmVuZGVyIiwiaG9zdCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImlubmVySFRNTCIsInJlbmRlckNpdHkiLCJtYWluRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwid3JhcHBlckVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJkb2N1bWVudEZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsIm1haW5XcmFwcGVyIiwiaSIsImNvbnRlbnRXcmFwcGVyIiwiY2xhc3NOYW1lIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwidGVtcCIsIndlYXRoZXIiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJkYXRldGltZSIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJtYXhfdGVtcCIsIm1pbl90ZW1wIiwiYXBwX21heF90ZW1wIiwiYXBwX21pbl90ZW1wIiwid2luZF9zcGQiLCJwb3AiLCJhcHBlbmRDaGlsZCIsImRlZmF1bHQiLCJCQVNFX1VSTCIsImdldFdlYXRoZXIiLCJmZXRjaCIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsInN0YXR1cyIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNvbHZlIiwianNvbiIsImFwcGwiLCJ1cGRhdGUiLCJBcHAiLCJzdGF0ZSIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImxvY2F0aW9uRWxlbWVudCIsIm9uU3VibWl0Iiwib25TZWFyY2hTdWJtaXQiLCJjb25zb2xlIiwibG9nIiwiYmluZCIsInVwZGF0ZVN0YXRlIiwicmVuZGVyIiwiQ29tcG9uZW50IiwicHJvcHMiLCJuZXh0U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJfcmVuZGVyIiwibmV4dFByb3BzIiwiY2hpbGRyZW4iLCJBcnJheSIsImlzQXJyYXkiLCJhcHBlbmQiLCJMb2NhdGlvblNlYXJjaCIsImlzVmFsaWQiLCJoYW5kbGVTdWJtaXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsInRyaW0iLCJsZW5ndGgiLCJzZXRFcnJvciIsImVycm9yIiwiZmluZENpdHkiLCJjYXRjaCIsImNsZWFyTG9jYWxTdG9yYWdlIiwiRE9NIiwia2V5IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2hIaXN0b3J5Iiwic3RvcmFnZU9iamVjdCIsImNzc0NsYXNzIiwibG9jYWxTdG9yYWdlS2V5IiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImluZGV4T2YiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNob3dIaXN0b3J5IiwibWFwIiwiaHlzdG9yeUl0ZW0iLCJvbmNsaWNrIiwiZXZlbnQiLCJ0YWdOYW1lIiwiYm9keSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtB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UUFBYVcsVyxHQUFBQSxXO1FBQWFoQixpQixHQUFBQSxpQjs7Ozs7Ozs7Ozs7Ozs7QUM3Q3BDOztBQUNBOztBQUNBOztBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQWVBLFNBQVNKLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXdCO0FBQ3RCOzs7Ozs7Ozs7Ozs7OztBQWNEOztBQUVELFNBQVNDLFFBQVQsQ0FBa0I1RixJQUFsQixFQUF3QjtBQUN0Qjs7Ozs7QUFLQSx3Q0FBMEJBLElBQTFCLGVBQXdDLGFBQUtJLEtBQTdDLGFBQTBELGFBQUtELFNBQS9ELEVBQ0c0QyxJQURILENBQ1EsVUFBU3FFLElBQVQsRUFBYztBQUNsQixRQUFJQSxJQUFKLEVBQVU7QUFDUnJELGNBQVFDLEdBQVIsQ0FBWSxTQUFaO0FBQ0EsOEJBQVdvRCxJQUFYO0FBQ0Q7QUFDRCxXQUFPQSxJQUFQO0FBQ0QsR0FQSCxFQVFHdkIsS0FSSCxDQVFTSCxRQVJUO0FBU0Q7O1FBRVFFLFEsR0FBQUEsUTs7Ozs7O0FDdkRULG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUUiLCJmaWxlIjoiLi9hc3NldHMvanMvYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGE2OTA3YTQxMGRiODA5OGNmMmQwIiwiLy9nZXQgY3VycmVudCB1cmxcclxubGV0IHBhcnNlZFVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cclxuLy9vYmplY3Qgd2l0aCBET00gZWxlbWVudHNcclxuY29uc3QgZGF0YURPTSA9IHtcclxuICBmb3JtRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1mb3JtXCIpLFxyXG4gIGlucHV0RE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaFwiKSxcclxuICBtYWluRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIiksXHJcbiAgdGl0bGVET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIiksXHJcbiAgdW5pdHNET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdW5pdHNcIiksXHJcbiAgcGVyaW9kRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BlcmlvZFwiKSxcclxuICBoaXN0b3J5RE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpc3RvcnlcIiksXHJcbiAgZmF2b3JpdGVzRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlc1wiKSxcclxuICBidXR0b25IaXN0b3J5Q2xlYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGlzdG9yeS1jbGVhclwiKSxcclxuICBidXR0b25GYXZvcml0ZXNDbGVhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmYXZvcml0ZXMtY2xlYXJcIiksXHJcbiAgbG9hZGVyRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRlclwiKVxyXG59O1xyXG5cclxubGV0IGRhdGEgPSB7XHJcbiAgY2l0eTogcGFyc2VkVXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJjaXR5XCIpLFxyXG5cclxuICAvL2FwaSBrZXlcclxuICBzZWNyZXRLZXk6IFwiYzY5NzZhNGM0ZTA1NDIxZjliNGVhZWU3YTMxMWYwZGNcIixcclxuICB1bml0czogXCJNXCIsXHJcbiAgdW5pdHNEaXNwbGF5OiBcIkNcIixcclxuICBwZXJpb2Q6IDEsXHJcblxyXG4gIC8vbG9jYWxzdG9yYWdlIG9iamVjdHNcclxuICBoaXN0b3J5T2JqOiB7XHJcbiAgICBjaXR5OiBbXVxyXG4gIH0sXHJcbiAgZmF2b3JpdGVPYmo6IHtcclxuICAgIGNpdHk6IFtdXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgcGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhIH07XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsImltcG9ydCB7cGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHtwdXNoSGlzdG9yeSwgc2hvd0hpc3Rvcnl9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xyXG5cclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvYTAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvYTAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvYTAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvYTA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvYTA1ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2MwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2MwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2MwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2MwNGQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9kMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9kMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9kMDNkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvZjAxZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3IwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3IwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3IwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3IwNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3IwNWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3IwNmQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9zMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9zMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9zMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9zMDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9zMDVkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9zMDZkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvdDAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvdDAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvdDAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvdDA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvdDA1ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvdDA2ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvdDA3ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3UwMGQuc3ZnXCI7XHJcblxyXG5jbGFzcyBSZW5kZXJ7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIHRoaXMuaG9zdC5pZCA9IFwibWFpblwiO1xyXG5cclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuaG9zdC5pbm5lckhUTUwgPSBgYFxyXG4gICAgcmV0dXJuIHRoaXMuaG9zdFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qIGZ1bmN0aW9uIGFkZEZhdm9yaXRlQnV0dG9uKGJvZHkpIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgQ3VycmVudCBjaXR5OiAke2JvZHkuY2l0eV9uYW1lfSBcclxuICAgICAgICA8aW1nIGlkPVwiZmF2b3JpdGVzXCIgc3JjPVwiYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nXCI+XHJcbiAgICAgICAgYFxyXG4gICAgKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zhdm9yaXRlc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHB1c2hIaXN0b3J5KFxyXG4gICAgICAgIGRhdGFET00uZmF2b3JpdGVzRE9NLFxyXG4gICAgICAgIGRhdGEuZmF2b3JpdGVPYmosXHJcbiAgICAgICAgXCJmYXZvcml0ZS1pdGVtXCIsXHJcbiAgICAgICAgXCJmYXZvcml0ZXNcIlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfSAqL1xyXG5cclxuLy9yZW5kZXIgbWV0aG9kXHJcbmZ1bmN0aW9uIHJlbmRlckNpdHkoY2l0eSkge1xyXG4gIC8qIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpOyAqL1xyXG4gIC8qIGFkZEZhdm9yaXRlQnV0dG9uKGJvZHkpOyAqL1xyXG5cclxuICAvL2NyZWF0ZSBjb250YWluZXIgZm9yIGluc2VydGluZyBkYXRhIGZyb20gbG9vcFxyXG4gIFxyXG4gIGxldCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgbGV0IHdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd3JhcHBlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xyXG4gIFxyXG4gIGxldCBkb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gIGxldCBtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi13cmFwcGVyJyk7XHJcblxyXG4gIGZvciAobGV0IGk9MDsgaTxkYXRhLnBlcmlvZDsgaSsrKSB7XHJcbiAgICBsZXQgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudFdyYXBwZXIuY2xhc3NOYW1lID0gXCJjb250ZW50XCI7XHJcbiAgICBjb250ZW50V3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXHJcbiAgICAgIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9fdmFsdWVzXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXB0aW9uX19udW1iZXJcIj4ke2NpdHkuZGF0YVtpXS50ZW1wfTwvc3Bhbj4gJHtkYXRhLnVuaXRzRGlzcGxheX1cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXB0aW9uX190aXRsZVwiPmF2Zy4gdGVtcC48L3A+IFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPG9iamVjdCBkYXRhPVwiYXNzZXRzL21lZGlhLyR7Y2l0eS5kYXRhW2ldLndlYXRoZXIuaWNvbn0uc3ZnXCIgdHlwZT1cIlwiPlxyXG4gICAgICAgICAgPC9vYmplY3Q+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNhcHRpb25fX3RpdGxlXCI+JHtjaXR5LmRhdGFbaV0ud2VhdGhlci5kZXNjcmlwdGlvbn08L3A+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPiR7Y2l0eS5kYXRhW2ldLmRhdGV0aW1lXHJcbiAgICAgICAgICAuc3BsaXQoXCItXCIpXHJcbiAgICAgICAgICAucmV2ZXJzZSgpXHJcbiAgICAgICAgICAuam9pbihcIi5cIil9XHJcbiAgICAgICAgPC9wPiBcclxuICAgICAgICA8cD5tYXguIHRlbXAuOiAke2NpdHkuZGF0YVtpXS5tYXhfdGVtcH0gJHtkYXRhLnVuaXRzRGlzcGxheX08L3A+XHJcbiAgICAgICAgPHA+bWluLiB0ZW1wLjogJHtjaXR5LmRhdGFbaV0ubWluX3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgIDxwPmZlZWxzIGxpa2UsIG1heDogJHtjaXR5LmRhdGFbaV0uYXBwX21heF90ZW1wfSAke2RhdGEudW5pdHNEaXNwbGF5fTwvcD5cclxuICAgICAgICA8cD5mZWVscyBsaWtlLCBtaW46ICR7Y2l0eS5kYXRhW2ldLmFwcF9taW5fdGVtcH0gJHtkYXRhLnVuaXRzRGlzcGxheX08L3A+XHJcbiAgICAgICAgPHA+d2luZDogJHtjaXR5LmRhdGFbaV0ud2luZF9zcGR9IG0vczwvcD5cclxuICAgICAgICA8cD5wcmVjaXBpdGF0aW9uOiAke2NpdHkuZGF0YVtpXS5wb3B9ICU8L3A+XHJcbiAgICAgIGBcclxuICAgICk7XHJcbiAgICBkb2N1bWVudEZyYWdtZW50LmFwcGVuZENoaWxkKGNvbnRlbnRXcmFwcGVyKTtcclxuICB9XHJcblxyXG4gIFxyXG4gIFxyXG4gIHdyYXBwZXJFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50RnJhZ21lbnQpO1xyXG4gIG1haW5FbGVtZW50LmFwcGVuZENoaWxkKHdyYXBwZXJFbGVtZW50KTtcclxuICBcclxuXHJcblxyXG4gIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtyZW5kZXJDaXR5fTtcclxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3JlbmRlci5qcyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlZmF1bHQvYXBwLmpzIiwiXHJcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJiaXQuaW8vdjIuMC9mb3JlY2FzdCc7XHJcbmNvbnN0IGdldFdlYXRoZXIgPSB1cmwgPT4gZmV0Y2goYCR7QkFTRV9VUkx9JHt1cmx9YClcclxuICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSlcclxuICB9KVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgfSkgXHJcbiAgXHJcbmV4cG9ydCB7Z2V0V2VhdGhlcn07ICBcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQXBpLmpzIiwiaW1wb3J0IFwiLi9hc3NldHMvc2Fzcy9hcHAuc2Fzc1wiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudHMvQXBwXCI7XHJcblxyXG5sZXQgYXBwbCA9IG5ldyBBcHAoeyBob3N0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpfSk7XHJcbmFwcGwudXBkYXRlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Fzcy9hcHAuc2Fzc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vZGVmYXVsdC9hcHBcIjtcclxuaW1wb3J0IExvY2F0aW9uU2VhcmNoIGZyb20gXCIuL0xvY2F0aW9uU2VhcmNoXCI7XHJcbmltcG9ydCBSZW5kZXIgZnJvbSBcIi4uL2Fzc2V0cy9qcy9yZW5kZXJcIjtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoeyBob3N0IH0pIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY2l0eTogbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoXCJjaXR5XCIpIHx8IFwiXCJcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5ob3N0ID0gaG9zdDtcclxuXHJcbiAgICB0aGlzLmxvY2F0aW9uRWxlbWVudCA9IG5ldyBMb2NhdGlvblNlYXJjaCh7XHJcbiAgICAgIGNpdHk6IHRoaXMuc3RhdGUuY2l0eSxcclxuICAgICAgb25TdWJtaXQ6IHRoaXMub25TZWFyY2hTdWJtaXRcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuaG9zdCk7XHJcbiAgICB0aGlzLm9uU2VhcmNoU3VibWl0ID0gdGhpcy5vblNlYXJjaFN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5tYWluRWxlbWVudCA9IG5ldyBSZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIG9uU2VhcmNoU3VibWl0KGNpdHkpIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoeyBjaXR5IH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaXR5IH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIHRoaXMubG9jYXRpb25FbGVtZW50LnVwZGF0ZSh7IGNpdHksIG9uU3VibWl0OiB0aGlzLm9uU2VhcmNoU3VibWl0IH0pLFxyXG4gICAgICB0aGlzLm1haW5FbGVtZW50LnJlbmRlcigpXHJcbiAgICBdO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXBwO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FwcC5qcyIsImNsYXNzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICB0aGlzLnByb3BzID0gcHJvcHMgfHwge307XHJcbiAgICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICBcclxuICAgICAgdGhpcy5ob3N0ID0gbnVsbDtcclxuICAgIH1cclxuICBcclxuICAgIHVwZGF0ZVN0YXRlKG5leHRTdGF0ZSkge1xyXG4gICAgICB0aGlzLnN0YXRlID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5zdGF0ZSwgbmV4dFN0YXRlKTtcclxuICAgICAgdGhpcy5fcmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB1cGRhdGUobmV4dFByb3BzKSB7XHJcbiAgICAgIHRoaXMucHJvcHMgPSBuZXh0UHJvcHM7XHJcbiAgICAgIHJldHVybiB0aGlzLl9yZW5kZXIoKTtcclxuICAgIH1cclxuICBcclxuICAgIF9yZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5yZW5kZXIoKTtcclxuICBcclxuICAgICAgdGhpcy5ob3N0LmlubmVySFRNTCA9ICcnO1xyXG4gIFxyXG4gICAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIHRoaXMuaG9zdC5pbm5lckhUTUwgPSBjaGlsZHJlbjtcclxuICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGNoaWxkcmVuKSkge1xyXG4gICAgICAgIHRoaXMuaG9zdC5hcHBlbmQoLi4uY2hpbGRyZW4pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaG9zdC5hcHBlbmQoY2hpbGRyZW4pO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuaG9zdCk7XHJcbiAgICAgIHJldHVybiB0aGlzLmhvc3Q7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHt9XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcclxuICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZWZhdWx0L0NvbXBvbmVudC5qcyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi9kZWZhdWx0L2FwcFwiXHJcbmltcG9ydCB7IGZpbmRDaXR5IH0gZnJvbSBcIi4vU2VhcmNoXCI7XHJcblxyXG5jbGFzcyBMb2NhdGlvblNlYXJjaCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBpc1ZhbGlkIDogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcblxyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uLXdyYXBwZXInKTtcclxuICAgICAgICB0aGlzLmhvc3QuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZVN1Ym1pdChlKXtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgY2l0eSA9IGUudGFyZ2V0LmVsZW1lbnRzLnNlYXJjaC52YWx1ZS50cmltKCk7XHJcblxyXG4gICAgICAgIGZpbmRDaXR5KGNpdHkpO1xyXG5cclxuICAgICAgICBpZighY2l0eS5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtpc1ZhbGlkOiBmYWxzZX0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TdWJtaXQoY2l0eSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtpc1ZhbGlkfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge2NpdHl9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPldlYXRoZXItYXBwPC9oMT5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9JHtpc1ZhbGlkID8gJ1wid2VhdGhlci1mb3JtXCInIDogJ1wid2VhdGhlci1mb3JtIC0taW52YWxpZFwiJ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJzZWFyY2hcIiByZXF1aXJlZCBjbGFzcz1cInNlYXJjaC13ZWF0aGVyXCIgdmFsdWU9XCIke2NpdHl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIndlYXRoZXItc2VhcmNoLXN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPi5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25TZWFyY2hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xvY2F0aW9uU2VhcmNoLmpzIiwiaW1wb3J0IHsgcGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhIH0gZnJvbSBcIi4uL2Fzc2V0cy9qcy9jb25maWdcIjtcclxuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuL0FwaVwiO1xyXG5pbXBvcnQgeyByZW5kZXJDaXR5IH0gZnJvbSBcIi4uL2Fzc2V0cy9qcy9yZW5kZXJcIjtcclxuLyppbXBvcnQgeyBwdXNoSGlzdG9yeSwgc2hvd0hpc3RvcnksIGNsZWFyTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7Ki9cclxuXHJcbi8vcHVzaCBjdXJyZW50IGNpdHkgdG8gVVJMXHJcbi8qIGZ1bmN0aW9uIHB1c2hVcmwoY2l0eSkge1xyXG4gIGxldCB1cmwgPSBgaW5kZXguaHRtbD9jaXR5PSR7Y2l0eX1gO1xyXG4gIGhpc3RvcnkucHVzaFN0YXRlKGNpdHksIG51bGwsIHVybCk7XHJcbiAgbGV0IHBhcnNlZFVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gIGdldFVybCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVcmwoKXtcclxuICB3aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZihldmVudC5zdGF0ZSAhPT0gbnVsbCl7XHJcbiAgICAgIGZpbmRDaXR5KGV2ZW50LnN0YXRlKTtcclxuICAgIH1cclxuICB9O1xyXG59ICovXHJcblxyXG5mdW5jdGlvbiBzZXRFcnJvcihlcnJvcil7XHJcbiAgLyogZGF0YURPTS5sb2FkZXJET00uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XHJcbiAgaWYgKGVycm9yLnN0YXR1cyA9PT0gMjA0KSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYENpdHkgbm90IGZvdW5kLiBQbGVhc2UsIHRyeSBhZ2Fpbi5gXHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDApIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgU2VhcmNoIGZpZWxkIGlzIGVtcHR5LiBQbGVhc2UsIGVudGVyIGNpdHkgbmFtZWBcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGAke2Vycm9yLnN0YXR1c1RleHR9YCk7XHJcbiAgfSAqL1xyXG4gIGNvbnNvbGUubG9nKGVycm9yLnN0YXR1cylcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZENpdHkoY2l0eSkge1xyXG4gIC8qIGRhdGFET00ubWFpbkRPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGRhdGFET00udGl0bGVET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICBkYXRhRE9NLmxvYWRlckRPTS5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTsgLy9zaG93IGxvYWRlclxyXG4gIHB1c2hVcmwoY2l0eSk7ICovXHJcblxyXG4gIGdldFdlYXRoZXIoYC9kYWlseT9jaXR5PSR7Y2l0eX0mdW5pdHM9JHtkYXRhLnVuaXRzfSZrZXk9JHtkYXRhLnNlY3JldEtleX1gKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24oY2l0eSl7XHJcbiAgICAgIGlmIChjaXR5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcclxuICAgICAgICByZW5kZXJDaXR5KGNpdHkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBjaXR5O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChzZXRFcnJvcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGZpbmRDaXR5IH07XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1NlYXJjaC5qcyIsImltcG9ydCB7cGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHtmaW5kQ2l0eX0gZnJvbSBcIi4vc2VhcmNoXCI7XHJcblxyXG4vKmNsZWFyIGxvY2Fsc3RvcmFnZSBkYXRhKi9cclxuZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2UoRE9NLCBrZXkpIHtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gIERPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIERPTS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYHRoZXJlIGFyZSBubyAke2tleX0geWV0YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHB1c2hIaXN0b3J5KERPTSwgc3RvcmFnZU9iamVjdCwgY3NzQ2xhc3MsIGxvY2FsU3RvcmFnZUtleSkge1xyXG4gICAgaWYgKFxyXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc1wiKSAmJlxyXG4gICAgICBsb2NhbFN0b3JhZ2VLZXkgPT09IFwiZmF2b3JpdGVzXCIgJiZcclxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc1wiKSkuY2l0eS5pbmRleE9mKGRhdGEuY2l0eSkgIT1cclxuICAgICAgICAtMVxyXG4gICAgKSB7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdG9yYWdlT2JqZWN0LmNpdHkucHVzaChkYXRhLmNpdHkpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VPYmplY3QpKTtcclxuICAgICAgc2hvd0hpc3RvcnkoRE9NLCBzdG9yYWdlT2JqZWN0LCBjc3NDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG93SGlzdG9yeShET00sIHN0b3JhZ2VPYmplY3QsIGNzc0NsYXNzKSB7XHJcbiAgICBET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGlmIChzdG9yYWdlT2JqZWN0KSB7XHJcblxyXG4gICAgICBzdG9yYWdlT2JqZWN0LmNpdHkubWFwKGkgPT4ge1xyXG4gICAgICAgIERPTS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIixgPGxpIGNsYXNzPVwiJHtjc3NDbGFzc31cIj4ke2l9PC9saT5gKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBsZXQgaHlzdG9yeUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG5cclxuICAgICAgaHlzdG9yeUl0ZW0ub25jbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnRhZ05hbWUgPT09ICdMSScpe1xyXG4gICAgICAgICAgZGF0YS5jaXR5ID0gdGFyZ2V0LmlubmVySFRNTDtcclxuICAgICAgICAgIGZpbmRDaXR5KHRhcmdldC5pbm5lckhUTUwpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgIH07XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IHtwdXNoSGlzdG9yeSwgc2hvd0hpc3RvcnksIGNsZWFyTG9jYWxTdG9yYWdlfVxyXG5cclxuICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvbG9jYWxTdG9yYWdlLmpzIiwiaW1wb3J0IHsgcGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhIH0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9BcGlcIjtcclxuaW1wb3J0IHsgcmVuZGVyQ2l0eSB9IGZyb20gXCIuL3JlbmRlclwiO1xyXG4vKmltcG9ydCB7IHB1c2hIaXN0b3J5LCBzaG93SGlzdG9yeSwgY2xlYXJMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjsqL1xyXG5cclxuLy9wdXNoIGN1cnJlbnQgY2l0eSB0byBVUkxcclxuLyogZnVuY3Rpb24gcHVzaFVybChjaXR5KSB7XHJcbiAgbGV0IHVybCA9IGBpbmRleC5odG1sP2NpdHk9JHtjaXR5fWA7XHJcbiAgaGlzdG9yeS5wdXNoU3RhdGUoY2l0eSwgbnVsbCwgdXJsKTtcclxuICBsZXQgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgZ2V0VXJsKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVybCgpe1xyXG4gIHdpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmKGV2ZW50LnN0YXRlICE9PSBudWxsKXtcclxuICAgICAgZmluZENpdHkoZXZlbnQuc3RhdGUpO1xyXG4gICAgfVxyXG4gIH07XHJcbn0gKi9cclxuXHJcbmZ1bmN0aW9uIHNldEVycm9yKGVycm9yKXtcclxuICAvKiBkYXRhRE9NLmxvYWRlckRPTS5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcclxuICBpZiAoZXJyb3Iuc3RhdHVzID09PSAyMDQpIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgQ2l0eSBub3QgZm91bmQuIFBsZWFzZSwgdHJ5IGFnYWluLmBcclxuICAgICk7XHJcbiAgfSBlbHNlIGlmIChlcnJvci5zdGF0dXMgPT09IDQwMCkge1xyXG4gICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgIGBTZWFyY2ggZmllbGQgaXMgZW1wdHkuIFBsZWFzZSwgZW50ZXIgY2l0eSBuYW1lYFxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYCR7ZXJyb3Iuc3RhdHVzVGV4dH1gKTtcclxuICB9ICovXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRDaXR5KGNpdHkpIHtcclxuICAvKiBkYXRhRE9NLm1haW5ET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICBkYXRhRE9NLnRpdGxlRE9NLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgZGF0YURPTS5sb2FkZXJET00uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7IC8vc2hvdyBsb2FkZXJcclxuICBwdXNoVXJsKGNpdHkpOyAqL1xyXG5cclxuICBnZXRXZWF0aGVyKGAvZGFpbHk/Y2l0eT0ke2NpdHl9JnVuaXRzPSR7ZGF0YS51bml0c30ma2V5PSR7ZGF0YS5zZWNyZXRLZXl9YClcclxuICAgIC50aGVuKGZ1bmN0aW9uKGJvZHkpe1xyXG4gICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyk7XHJcbiAgICAgICAgcmVuZGVyQ2l0eShib2R5KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYm9keTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goc2V0RXJyb3IpO1xyXG59XHJcblxyXG5leHBvcnQgeyBmaW5kQ2l0eSB9O1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3NlYXJjaC5qcyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2YwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZjAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwN2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA3ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3UwMGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdTAwZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=