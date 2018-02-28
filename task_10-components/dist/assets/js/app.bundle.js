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

var _Component = __webpack_require__(7);

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Component).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findCity = undefined;

var _config = __webpack_require__(2);

var _Api = __webpack_require__(9);

var _render = __webpack_require__(3);

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
  var loader = document.querySelector('.loader');
  loader.classList.add('none');
  /* 
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
  /*
  pushUrl(city); */
  var loader = document.querySelector('.loader');
  loader.classList.remove('none');

  (0, _Api.getWeather)("/daily?city=" + city + "&units=" + _config.data.units).then(function (city) {
    if (city) {
      loader.classList.add('none');
      (0, _render.renderCity)(city);
    }
    return city;
  }).catch(setError);
}

exports.findCity = findCity;

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
  mainDOM: document.querySelector(".wrapper"),
  titleDOM: document.querySelector(".description"),
  unitsDOM: document.querySelector("#units"),
  periodDOM: document.querySelector("#period"),
  historyDOM: document.querySelector(".history"),
  favoritesDOM: document.querySelector(".favorites"),
  buttonHistoryClear: document.querySelector("#history-clear"),
  buttonFavoritesClear: document.querySelector("#favorites-clear")
};

var data = {
  city: parsedUrl.searchParams.get("city"),

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

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderCity = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _config = __webpack_require__(2);

var _localStorage = __webpack_require__(10);

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

__webpack_require__(43);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Render = function () {
  function Render() {
    _classCallCheck(this, Render);

    this.host = document.createElement('main');
    this.host.id = "main";
  }

  _createClass(Render, [{
    key: "meth",
    value: function meth() {
      console.log('222');
    }
  }, {
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
    contentWrapper.insertAdjacentHTML("beforeend", "\n        <div class=\"content__values\">\n          <p>\n            <span class=\"caption__number\">" + city.data[i].temp + "</span> " + _config.data.unitsDisplay + "\n            <p class=\"caption__title\">avg. temp.</p> \n          </p>\n          <object data=\"assets/media/" + city.data[i].weather.icon + ".svg\" type=\"\">\n          </object>\n          <p class=\"caption__title\">" + city.data[i].weather.description + "</p> \n        </div>\n        <p class=\"date\">" + city.data[i].datetime.split("-").reverse().join(".") + "\n        </p>  \n        <p>max. temp.: " + city.data[i].max_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>min. temp.: " + city.data[i].min_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>feels like, max: " + city.data[i].app_max_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>feels like, min: " + city.data[i].app_min_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>wind: " + city.data[i].wind_spd + " m/s</p>\n        <p>precipitation: " + city.data[i].pop + " %</p>\n      ");
    documentFragment.appendChild(contentWrapper);
  }

  wrapperElement.appendChild(documentFragment);
  mainElement.appendChild(wrapperElement);
}

exports.renderCity = renderCity;
exports.default = Render;

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

var _app = __webpack_require__(0);

var _LocationSearch = __webpack_require__(8);

var _LocationSearch2 = _interopRequireDefault(_LocationSearch);

var _render = __webpack_require__(3);

var _render2 = _interopRequireDefault(_render);

var _Filter = __webpack_require__(50);

var _Filter2 = _interopRequireDefault(_Filter);

var _Footer = __webpack_require__(45);

var _Footer2 = _interopRequireDefault(_Footer);

var _Search = __webpack_require__(1);

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
      city: new URLSearchParams(window.location.search).get("city") || "",
      period: 1,
      isLoaded: true
    };

    _this.host = host;

    _this.locationElement = new _LocationSearch2.default({
      city: _this.state.city,
      onSubmit: _this.onSearchSubmit
    });

    console.log(_this.host);
    console.log(_this.props);

    _this.onSearchSubmit = _this.onSearchSubmit.bind(_this);
    _this.filterElement = new _Filter2.default({
      period: _this.state.period,
      onSubmit: _this.onSearchSubmit
    });
    _this.mainElement = new _render2.default();
    _this.footerElement = new _Footer2.default();
    return _this;
  }

  _createClass(App, [{
    key: "onSearchSubmit",
    value: function onSearchSubmit(city) {
      this.updateState({ city: city });
      (0, _Search.findCity)(city);
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          city = _state.city,
          period = _state.period;


      return [this.locationElement.update({ city: city, onSubmit: this.onSearchSubmit }), this.filterElement.update({ period: period, onSubmit: this.onSearchSubmit }), this.mainElement.render(), this.footerElement.update()];
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

var _app = __webpack_require__(0);

var _Search = __webpack_require__(1);

__webpack_require__(44);

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
            if (!city.length) {
                this.updateState({ isValid: false });
            } else {
                this.props.onSubmit(city);
                console.log(this.props);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var isValid = this.state.isValid;
            var city = this.props.city;


            return "\n            <div class=\"loader none\">\n                <object data=\"assets/media/loader.svg\"></object>\n            </div>\n            <h1 class=\"title\">Weather-app</h1>\n            <form class=" + (isValid ? '"weather-form"' : '"weather-form --invalid"') + ">\n                <div class=\"search\">\n                    <input name=\"search\" required class=\"search-weather\" value=\"" + city + "\">\n                    <button class=\"weather-search-submit\">Search</button>.\n                </div>\n            </form>\n        ";
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

var BASE_URL = 'https://api.weatherbit.io/v2.0/forecast';
var KEY = 'c6976a4c4e05421f9b4eaee7a311f0dc';

var getWeather = function getWeather(url) {
  return fetch('' + BASE_URL + url + '&key=' + KEY).then(function (response) {
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearLocalStorage = exports.showHistory = exports.pushHistory = undefined;

var _config = __webpack_require__(2);

var _Search = __webpack_require__(1);

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
        (0, _Search.findCity)(target.innerHTML);
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

module.exports = __webpack_require__.p + "./assets/media/a01d.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a02d.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a03d.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a04d.svg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a05d.svg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c01d.svg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c02d.svg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c03d.svg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c04d.svg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d01d.svg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d02d.svg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d03d.svg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/f01d.svg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r01d.svg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r02d.svg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r03d.svg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r04d.svg";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r05d.svg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r06d.svg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s01d.svg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s02d.svg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s03d.svg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s04d.svg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s05d.svg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s06d.svg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t01d.svg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t02d.svg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t03d.svg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t04d.svg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t05d.svg";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t06d.svg";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t07d.svg";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/u00d.svg";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/loader.svg";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        _classCallCheck(this, Footer);

        var _this = _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).call(this));

        _this.host = document.createElement('footer');
        return _this;
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return "\n            <p>\n                2017 \n                <span>\u2022</span> \n                icons taken from flaticon.com, animated svg taken from amcharts.com (IPL), \n                weather data brign by weatherbit.io API \n                <span>\u2022</span> \n                made by Alex Nelin\n            </p>\n        ";
        }
    }]);

    return Footer;
}(_app.Component);

exports.default = Footer;

/***/ }),
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Filter = function (_Component) {
    _inherits(Filter, _Component);

    function Filter(props) {
        _classCallCheck(this, Filter);

        var _this = _possibleConstructorReturn(this, (Filter.__proto__ || Object.getPrototypeOf(Filter)).call(this, props));

        _this.props = props;
        _this.handleSubmit = _this.handleSubmit.bind(_this);

        _this.host = document.createElement('div');
        _this.host.classList.add('filter');

        _this.host.addEventListener('change', _this.handleSubmit);

        return _this;
    }

    _createClass(Filter, [{
        key: 'handleSubmit',
        value: function handleSubmit(e) {
            var period = 1;

            console.log('changed');
            console.log(this.props);
        }
    }, {
        key: 'render',
        value: function render() {
            var period = this.props.period;


            return '\n        <div class="filter__box">\n            <label for="period">period:</label>\n            <select name="period" id="period">\n                <option value="1">Today</option>\n                <option value="2">2 days</option>\n                <option value="4">4 days</option>\n                <option value="7">One week</option>\n                <option value="14">Two weeks</option>\n            </select>\n        </div>\n        ';
        }
    }]);

    return Filter;
}(_app.Component);

exports.default = Filter;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDIwYzY4MzY0YmIyNTdkMmVjZjEiLCJ3ZWJwYWNrOi8vLy4vZGVmYXVsdC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9hcHAuc2FzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9kZWZhdWx0L0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvY2F0aW9uU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2MwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2QwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2YwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDdkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdTAwZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2xvYWRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaWx0ZXIuanMiXSwibmFtZXMiOlsiZGVmYXVsdCIsInNldEVycm9yIiwiZXJyb3IiLCJsb2FkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZmluZENpdHkiLCJjaXR5IiwicmVtb3ZlIiwidW5pdHMiLCJ0aGVuIiwiY2F0Y2giLCJwYXJzZWRVcmwiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkYXRhRE9NIiwibWFpbkRPTSIsInRpdGxlRE9NIiwidW5pdHNET00iLCJwZXJpb2RET00iLCJoaXN0b3J5RE9NIiwiZmF2b3JpdGVzRE9NIiwiYnV0dG9uSGlzdG9yeUNsZWFyIiwiYnV0dG9uRmF2b3JpdGVzQ2xlYXIiLCJkYXRhIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwidW5pdHNEaXNwbGF5IiwicGVyaW9kIiwiaGlzdG9yeU9iaiIsImZhdm9yaXRlT2JqIiwiUmVuZGVyIiwiaG9zdCIsImNyZWF0ZUVsZW1lbnQiLCJpZCIsImlubmVySFRNTCIsInJlbmRlckNpdHkiLCJtYWluRWxlbWVudCIsImdldEVsZW1lbnRCeUlkIiwid3JhcHBlckVsZW1lbnQiLCJkb2N1bWVudEZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsIm1haW5XcmFwcGVyIiwiaSIsImNvbnRlbnRXcmFwcGVyIiwiY2xhc3NOYW1lIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwidGVtcCIsIndlYXRoZXIiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJkYXRldGltZSIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJtYXhfdGVtcCIsIm1pbl90ZW1wIiwiYXBwX21heF90ZW1wIiwiYXBwX21pbl90ZW1wIiwid2luZF9zcGQiLCJwb3AiLCJhcHBlbmRDaGlsZCIsImFwcGwiLCJ1cGRhdGUiLCJBcHAiLCJzdGF0ZSIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImlzTG9hZGVkIiwibG9jYXRpb25FbGVtZW50Iiwib25TdWJtaXQiLCJvblNlYXJjaFN1Ym1pdCIsInByb3BzIiwiYmluZCIsImZpbHRlckVsZW1lbnQiLCJmb290ZXJFbGVtZW50IiwidXBkYXRlU3RhdGUiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJuZXh0U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJfcmVuZGVyIiwibmV4dFByb3BzIiwiY2hpbGRyZW4iLCJBcnJheSIsImlzQXJyYXkiLCJhcHBlbmQiLCJMb2NhdGlvblNlYXJjaCIsImlzVmFsaWQiLCJoYW5kbGVTdWJtaXQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsInRyaW0iLCJsZW5ndGgiLCJCQVNFX1VSTCIsIktFWSIsImdldFdlYXRoZXIiLCJmZXRjaCIsInVybCIsInJlc3BvbnNlIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc29sdmUiLCJqc29uIiwiY2xlYXJMb2NhbFN0b3JhZ2UiLCJET00iLCJrZXkiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwicHVzaEhpc3RvcnkiLCJzdG9yYWdlT2JqZWN0IiwiY3NzQ2xhc3MiLCJsb2NhbFN0b3JhZ2VLZXkiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiaW5kZXhPZiIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2hvd0hpc3RvcnkiLCJtYXAiLCJoeXN0b3J5SXRlbSIsIm9uY2xpY2siLCJldmVudCIsInRhZ05hbWUiLCJGb290ZXIiLCJGaWx0ZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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Ozs7OztrQkFHVXdHLE0iLCJmaWxlIjoiLi9hc3NldHMvanMvYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGQyMGM2ODM2NGJiMjU3ZDJlY2YxIiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVmYXVsdC9hcHAuanMiLCJpbXBvcnQgeyBwYXJzZWRVcmwsIGRhdGFET00sIGRhdGEgfSBmcm9tIFwiLi4vYXNzZXRzL2pzL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vQXBpXCI7XHJcbmltcG9ydCB7IHJlbmRlckNpdHkgfSBmcm9tIFwiLi4vYXNzZXRzL2pzL3JlbmRlclwiO1xyXG4vKmltcG9ydCB7IHB1c2hIaXN0b3J5LCBzaG93SGlzdG9yeSwgY2xlYXJMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjsqL1xyXG5cclxuLy9wdXNoIGN1cnJlbnQgY2l0eSB0byBVUkxcclxuLyogZnVuY3Rpb24gcHVzaFVybChjaXR5KSB7XHJcbiAgbGV0IHVybCA9IGBpbmRleC5odG1sP2NpdHk9JHtjaXR5fWA7XHJcbiAgaGlzdG9yeS5wdXNoU3RhdGUoY2l0eSwgbnVsbCwgdXJsKTtcclxuICBsZXQgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgZ2V0VXJsKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVybCgpe1xyXG4gIHdpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmKGV2ZW50LnN0YXRlICE9PSBudWxsKXtcclxuICAgICAgZmluZENpdHkoZXZlbnQuc3RhdGUpO1xyXG4gICAgfVxyXG4gIH07XHJcbn0gKi9cclxuXHJcbmZ1bmN0aW9uIHNldEVycm9yKGVycm9yKXtcclxuICBsZXQgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xyXG4gIGxvYWRlci5jbGFzc0xpc3QuYWRkKCdub25lJyk7XHJcbiAgLyogXHJcbiAgaWYgKGVycm9yLnN0YXR1cyA9PT0gMjA0KSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYENpdHkgbm90IGZvdW5kLiBQbGVhc2UsIHRyeSBhZ2Fpbi5gXHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDApIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgU2VhcmNoIGZpZWxkIGlzIGVtcHR5LiBQbGVhc2UsIGVudGVyIGNpdHkgbmFtZWBcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGAke2Vycm9yLnN0YXR1c1RleHR9YCk7XHJcbiAgfSAqL1xyXG4gIGNvbnNvbGUubG9nKGVycm9yLnN0YXR1cylcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZENpdHkoY2l0eSkge1xyXG4gIC8qXHJcbiAgcHVzaFVybChjaXR5KTsgKi9cclxuICBsZXQgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xyXG4gIGxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XHJcblxyXG4gIGdldFdlYXRoZXIoYC9kYWlseT9jaXR5PSR7Y2l0eX0mdW5pdHM9JHtkYXRhLnVuaXRzfWApXHJcbiAgICAudGhlbihmdW5jdGlvbihjaXR5KXtcclxuICAgICAgaWYgKGNpdHkpIHtcclxuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xyXG4gICAgICAgIHJlbmRlckNpdHkoY2l0eSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNpdHk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHNldEVycm9yKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZmluZENpdHkgfTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2VhcmNoLmpzIiwiLy9nZXQgY3VycmVudCB1cmxcclxubGV0IHBhcnNlZFVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cclxuLy9vYmplY3Qgd2l0aCBET00gZWxlbWVudHNcclxuY29uc3QgZGF0YURPTSA9IHtcclxuICBtYWluRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIiksXHJcbiAgdGl0bGVET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIiksXHJcbiAgdW5pdHNET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdW5pdHNcIiksXHJcbiAgcGVyaW9kRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BlcmlvZFwiKSxcclxuICBoaXN0b3J5RE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpc3RvcnlcIiksXHJcbiAgZmF2b3JpdGVzRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlc1wiKSxcclxuICBidXR0b25IaXN0b3J5Q2xlYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGlzdG9yeS1jbGVhclwiKSxcclxuICBidXR0b25GYXZvcml0ZXNDbGVhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmYXZvcml0ZXMtY2xlYXJcIiksXHJcbn07XHJcblxyXG5sZXQgZGF0YSA9IHtcclxuICBjaXR5OiBwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmdldChcImNpdHlcIiksXHJcblxyXG4gIHVuaXRzOiBcIk1cIixcclxuICB1bml0c0Rpc3BsYXk6IFwiQ1wiLFxyXG4gIHBlcmlvZDogMSxcclxuICAvL2xvY2Fsc3RvcmFnZSBvYmplY3RzXHJcbiAgaGlzdG9yeU9iajoge1xyXG4gICAgY2l0eTogW11cclxuICB9LFxyXG4gIGZhdm9yaXRlT2JqOiB7XHJcbiAgICBjaXR5OiBbXVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHBhcnNlZFVybCwgZGF0YURPTSwgZGF0YSB9O1xyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb25maWcuanMiLCJpbXBvcnQge3BhcnNlZFVybCwgZGF0YURPTSwgZGF0YX0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7cHVzaEhpc3RvcnksIHNob3dIaXN0b3J5fSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwNWQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9jMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9jMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9jMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9jMDRkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvZDAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvZDAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvZDAzZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2YwMWQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDVkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDZkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczA1ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczA2ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwNWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwNmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwN2Quc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy91MDBkLnN2Z1wiO1xyXG5cclxuY2xhc3MgUmVuZGVye1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICB0aGlzLmhvc3QuaWQgPSBcIm1haW5cIjtcclxuXHJcbiAgfVxyXG5cclxuICBtZXRoKCl7XHJcbiAgICBjb25zb2xlLmxvZygnMjIyJylcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuaG9zdC5pbm5lckhUTUwgPSBgYFxyXG4gICAgcmV0dXJuIHRoaXMuaG9zdFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qIGZ1bmN0aW9uIGFkZEZhdm9yaXRlQnV0dG9uKGJvZHkpIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgQ3VycmVudCBjaXR5OiAke2JvZHkuY2l0eV9uYW1lfSBcclxuICAgICAgICA8aW1nIGlkPVwiZmF2b3JpdGVzXCIgc3JjPVwiYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nXCI+XHJcbiAgICAgICAgYFxyXG4gICAgKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zhdm9yaXRlc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHB1c2hIaXN0b3J5KFxyXG4gICAgICAgIGRhdGFET00uZmF2b3JpdGVzRE9NLFxyXG4gICAgICAgIGRhdGEuZmF2b3JpdGVPYmosXHJcbiAgICAgICAgXCJmYXZvcml0ZS1pdGVtXCIsXHJcbiAgICAgICAgXCJmYXZvcml0ZXNcIlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfSAqL1xyXG5cclxuLy9yZW5kZXIgbWV0aG9kXHJcbmZ1bmN0aW9uIHJlbmRlckNpdHkoY2l0eSkge1xyXG4gIC8qIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpOyAqL1xyXG4gIC8qIGFkZEZhdm9yaXRlQnV0dG9uKGJvZHkpOyAqL1xyXG5cclxuICAvL2NyZWF0ZSBjb250YWluZXIgZm9yIGluc2VydGluZyBkYXRhIGZyb20gbG9vcFxyXG4gIFxyXG4gIGxldCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgbGV0IHdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd3JhcHBlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xyXG4gIFxyXG4gIGxldCBkb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gIGxldCBtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi13cmFwcGVyJyk7XHJcblxyXG4gIGZvciAobGV0IGk9MDsgaTxkYXRhLnBlcmlvZDsgaSsrKSB7XHJcbiAgICBsZXQgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudFdyYXBwZXIuY2xhc3NOYW1lID0gXCJjb250ZW50XCI7XHJcbiAgICBjb250ZW50V3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXHJcbiAgICAgIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9fdmFsdWVzXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXB0aW9uX19udW1iZXJcIj4ke2NpdHkuZGF0YVtpXS50ZW1wfTwvc3Bhbj4gJHtkYXRhLnVuaXRzRGlzcGxheX1cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXB0aW9uX190aXRsZVwiPmF2Zy4gdGVtcC48L3A+IFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPG9iamVjdCBkYXRhPVwiYXNzZXRzL21lZGlhLyR7Y2l0eS5kYXRhW2ldLndlYXRoZXIuaWNvbn0uc3ZnXCIgdHlwZT1cIlwiPlxyXG4gICAgICAgICAgPC9vYmplY3Q+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNhcHRpb25fX3RpdGxlXCI+JHtjaXR5LmRhdGFbaV0ud2VhdGhlci5kZXNjcmlwdGlvbn08L3A+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPiR7Y2l0eS5kYXRhW2ldLmRhdGV0aW1lXHJcbiAgICAgICAgICAuc3BsaXQoXCItXCIpXHJcbiAgICAgICAgICAucmV2ZXJzZSgpXHJcbiAgICAgICAgICAuam9pbihcIi5cIil9XHJcbiAgICAgICAgPC9wPiAgXHJcbiAgICAgICAgPHA+bWF4LiB0ZW1wLjogJHtjaXR5LmRhdGFbaV0ubWF4X3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgIDxwPm1pbi4gdGVtcC46ICR7Y2l0eS5kYXRhW2ldLm1pbl90ZW1wfSAke2RhdGEudW5pdHNEaXNwbGF5fTwvcD5cclxuICAgICAgICA8cD5mZWVscyBsaWtlLCBtYXg6ICR7Y2l0eS5kYXRhW2ldLmFwcF9tYXhfdGVtcH0gJHtkYXRhLnVuaXRzRGlzcGxheX08L3A+XHJcbiAgICAgICAgPHA+ZmVlbHMgbGlrZSwgbWluOiAke2NpdHkuZGF0YVtpXS5hcHBfbWluX3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgIDxwPndpbmQ6ICR7Y2l0eS5kYXRhW2ldLndpbmRfc3BkfSBtL3M8L3A+XHJcbiAgICAgICAgPHA+cHJlY2lwaXRhdGlvbjogJHtjaXR5LmRhdGFbaV0ucG9wfSAlPC9wPlxyXG4gICAgICBgXHJcbiAgICApO1xyXG4gICAgZG9jdW1lbnRGcmFnbWVudC5hcHBlbmRDaGlsZChjb250ZW50V3JhcHBlcik7XHJcbiAgfVxyXG5cclxuICBcclxuICBcclxuICB3cmFwcGVyRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudEZyYWdtZW50KTtcclxuICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZCh3cmFwcGVyRWxlbWVudCk7XHJcbiAgXHJcblxyXG5cclxuICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVyQ2l0eX07XHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlcjtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9yZW5kZXIuanMiLCJpbXBvcnQgXCIuL2Fzc2V0cy9zYXNzL2FwcC5zYXNzXCI7XHJcbmltcG9ydCBBcHAgZnJvbSBcIi4vY29tcG9uZW50cy9BcHBcIjtcclxuXHJcbmxldCBhcHBsID0gbmV3IEFwcCh7IGhvc3Q6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyl9KTtcclxuYXBwbC51cGRhdGUoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zYXNzL2FwcC5zYXNzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi9kZWZhdWx0L2FwcFwiO1xyXG5pbXBvcnQgTG9jYXRpb25TZWFyY2ggZnJvbSBcIi4vTG9jYXRpb25TZWFyY2hcIjtcclxuaW1wb3J0IFJlbmRlciBmcm9tIFwiLi4vYXNzZXRzL2pzL3JlbmRlclwiO1xyXG5cclxuaW1wb3J0IEZpbHRlciBmcm9tIFwiLi9GaWx0ZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IHsgZmluZENpdHkgfSBmcm9tIFwiLi9TZWFyY2hcIjtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoeyBob3N0IH0pIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY2l0eTogbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoXCJjaXR5XCIpIHx8IFwiXCIsXHJcbiAgICAgIHBlcmlvZDogMSxcclxuICAgICAgaXNMb2FkZWQ6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5ob3N0ID0gaG9zdDtcclxuXHJcbiAgICB0aGlzLmxvY2F0aW9uRWxlbWVudCA9IG5ldyBMb2NhdGlvblNlYXJjaCh7XHJcbiAgICAgIGNpdHk6IHRoaXMuc3RhdGUuY2l0eSxcclxuICAgICAgb25TdWJtaXQ6IHRoaXMub25TZWFyY2hTdWJtaXRcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMuaG9zdCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuXHJcbiAgICB0aGlzLm9uU2VhcmNoU3VibWl0ID0gdGhpcy5vblNlYXJjaFN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy5maWx0ZXJFbGVtZW50ID0gbmV3IEZpbHRlcih7XHJcbiAgICAgIHBlcmlvZDogdGhpcy5zdGF0ZS5wZXJpb2QsXHJcbiAgICAgIG9uU3VibWl0OiB0aGlzLm9uU2VhcmNoU3VibWl0XHJcbiAgICB9KTtcclxuICAgIHRoaXMubWFpbkVsZW1lbnQgPSBuZXcgUmVuZGVyKCk7XHJcbiAgICB0aGlzLmZvb3RlckVsZW1lbnQgPSBuZXcgRm9vdGVyKCk7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIG9uU2VhcmNoU3VibWl0KGNpdHkpIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoeyBjaXR5IH0pO1xyXG4gICAgZmluZENpdHkoY2l0eSk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGNpdHkscGVyaW9kIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuXHJcbiAgICByZXR1cm4gW1xyXG4gICAgICB0aGlzLmxvY2F0aW9uRWxlbWVudC51cGRhdGUoeyBjaXR5LCBvblN1Ym1pdDogdGhpcy5vblNlYXJjaFN1Ym1pdCB9KSxcclxuICAgICAgdGhpcy5maWx0ZXJFbGVtZW50LnVwZGF0ZSh7IHBlcmlvZCwgb25TdWJtaXQ6IHRoaXMub25TZWFyY2hTdWJtaXQgfSksXHJcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQucmVuZGVyKCksXHJcbiAgICAgIHRoaXMuZm9vdGVyRWxlbWVudC51cGRhdGUoKVxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BcHAuanMiLCJjbGFzcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgdGhpcy5wcm9wcyA9IHByb3BzIHx8IHt9O1xyXG4gICAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgXHJcbiAgICAgIHRoaXMuaG9zdCA9IG51bGw7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB1cGRhdGVTdGF0ZShuZXh0U3RhdGUpIHtcclxuICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIG5leHRTdGF0ZSk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcigpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgdXBkYXRlKG5leHRQcm9wcykge1xyXG4gICAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBfcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMucmVuZGVyKCk7XHJcbiAgXHJcbiAgICAgIHRoaXMuaG9zdC5pbm5lckhUTUwgPSAnJztcclxuICBcclxuICAgICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aGlzLmhvc3QuaW5uZXJIVE1MID0gY2hpbGRyZW47XHJcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcclxuICAgICAgICB0aGlzLmhvc3QuYXBwZW5kKC4uLmNoaWxkcmVuKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmhvc3QuYXBwZW5kKGNoaWxkcmVuKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmhvc3QpO1xyXG4gICAgICByZXR1cm4gdGhpcy5ob3N0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7fVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XHJcbiAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVmYXVsdC9Db21wb25lbnQuanMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vZGVmYXVsdC9hcHBcIlxyXG5pbXBvcnQgeyBmaW5kQ2l0eSB9IGZyb20gXCIuL1NlYXJjaFwiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1wiO1xyXG5cclxuY2xhc3MgTG9jYXRpb25TZWFyY2ggZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNWYWxpZCA6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbi13cmFwcGVyJyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGNpdHkgPSBlLnRhcmdldC5lbGVtZW50cy5zZWFyY2gudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlmKCFjaXR5Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe2lzVmFsaWQ6IGZhbHNlfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN1Ym1pdChjaXR5KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7aXNWYWxpZH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIGNvbnN0IHtjaXR5fSA9IHRoaXMucHJvcHM7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRlciBub25lXCI+XHJcbiAgICAgICAgICAgICAgICA8b2JqZWN0IGRhdGE9XCJhc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1wiPjwvb2JqZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5XZWF0aGVyLWFwcDwvaDE+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPSR7aXNWYWxpZCA/ICdcIndlYXRoZXItZm9ybVwiJyA6ICdcIndlYXRoZXItZm9ybSAtLWludmFsaWRcIid9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwic2VhcmNoXCIgcmVxdWlyZWQgY2xhc3M9XCJzZWFyY2gtd2VhdGhlclwiIHZhbHVlPVwiJHtjaXR5fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJ3ZWF0aGVyLXNlYXJjaC1zdWJtaXRcIj5TZWFyY2g8L2J1dHRvbj4uXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uU2VhcmNoXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Mb2NhdGlvblNlYXJjaC5qcyIsIlxyXG5jb25zdCBCQVNFX1VSTCA9ICdodHRwczovL2FwaS53ZWF0aGVyYml0LmlvL3YyLjAvZm9yZWNhc3QnO1xyXG5jb25zdCBLRVkgPSAnYzY5NzZhNGM0ZTA1NDIxZjliNGVhZWU3YTMxMWYwZGMnO1xyXG5cclxuY29uc3QgZ2V0V2VhdGhlciA9IHVybCA9PiBmZXRjaChgJHtCQVNFX1VSTH0ke3VybH0ma2V5PSR7S0VZfWApXHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSlcclxuICAgIH1cclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpXHJcbiAgfSlcclxuICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gIH0pIFxyXG4gIFxyXG5leHBvcnQge2dldFdlYXRoZXJ9OyAgXHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0FwaS5qcyIsImltcG9ydCB7cGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHtmaW5kQ2l0eX0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoXCI7XHJcblxyXG4vKmNsZWFyIGxvY2Fsc3RvcmFnZSBkYXRhKi9cclxuZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2UoRE9NLCBrZXkpIHtcclxuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gIERPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIERPTS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgYHRoZXJlIGFyZSBubyAke2tleX0geWV0YCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHB1c2hIaXN0b3J5KERPTSwgc3RvcmFnZU9iamVjdCwgY3NzQ2xhc3MsIGxvY2FsU3RvcmFnZUtleSkge1xyXG4gICAgaWYgKFxyXG4gICAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc1wiKSAmJlxyXG4gICAgICBsb2NhbFN0b3JhZ2VLZXkgPT09IFwiZmF2b3JpdGVzXCIgJiZcclxuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZhdm9yaXRlc1wiKSkuY2l0eS5pbmRleE9mKGRhdGEuY2l0eSkgIT1cclxuICAgICAgICAtMVxyXG4gICAgKSB7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzdG9yYWdlT2JqZWN0LmNpdHkucHVzaChkYXRhLmNpdHkpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHN0b3JhZ2VPYmplY3QpKTtcclxuICAgICAgc2hvd0hpc3RvcnkoRE9NLCBzdG9yYWdlT2JqZWN0LCBjc3NDbGFzcyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG93SGlzdG9yeShET00sIHN0b3JhZ2VPYmplY3QsIGNzc0NsYXNzKSB7XHJcbiAgICBET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgIGlmIChzdG9yYWdlT2JqZWN0KSB7XHJcblxyXG4gICAgICBzdG9yYWdlT2JqZWN0LmNpdHkubWFwKGkgPT4ge1xyXG4gICAgICAgIERPTS5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIixgPGxpIGNsYXNzPVwiJHtjc3NDbGFzc31cIj4ke2l9PC9saT5gKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBsZXQgaHlzdG9yeUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lkZWJhcicpO1xyXG5cclxuICAgICAgaHlzdG9yeUl0ZW0ub25jbGljayA9IGV2ZW50ID0+IHtcclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIGlmICh0YXJnZXQgJiYgdGFyZ2V0LnRhZ05hbWUgPT09ICdMSScpe1xyXG4gICAgICAgICAgZGF0YS5jaXR5ID0gdGFyZ2V0LmlubmVySFRNTDtcclxuICAgICAgICAgIGZpbmRDaXR5KHRhcmdldC5pbm5lckhUTUwpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgIH07XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IHtwdXNoSGlzdG9yeSwgc2hvd0hpc3RvcnksIGNsZWFyTG9jYWxTdG9yYWdlfVxyXG5cclxuICBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvbG9jYWxTdG9yYWdlLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZDAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZDAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZDAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZjAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9mMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjA2ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDZkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczA2ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDZkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA2ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDZkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA3ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDdkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdTAwZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy91MDBkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2xvYWRlci5zdmdcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi9kZWZhdWx0L2FwcFwiXHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgMjAxNyBcclxuICAgICAgICAgICAgICAgIDxzcGFuPuKAojwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICBpY29ucyB0YWtlbiBmcm9tIGZsYXRpY29uLmNvbSwgYW5pbWF0ZWQgc3ZnIHRha2VuIGZyb20gYW1jaGFydHMuY29tIChJUEwpLCBcclxuICAgICAgICAgICAgICAgIHdlYXRoZXIgZGF0YSBicmlnbiBieSB3ZWF0aGVyYml0LmlvIEFQSSBcclxuICAgICAgICAgICAgICAgIDxzcGFuPuKAojwvc3Bhbj4gXHJcbiAgICAgICAgICAgICAgICBtYWRlIGJ5IEFsZXggTmVsaW5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgIGA7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiLi4vZGVmYXVsdC9hcHBcIlxyXG5cclxuY2xhc3MgRmlsdGVyIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoJ2ZpbHRlcicpO1xyXG4gICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoZSl7XHJcbiAgICAgICAgY29uc3QgcGVyaW9kID0gMTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICBjb25zdCB7IHBlcmlvZCB9ID0gdGhpcy5wcm9wcztcclxuICAgIFxyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9fYm94XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwZXJpb2RcIj5wZXJpb2Q6PC9sYWJlbD5cclxuICAgICAgICAgICAgPHNlbGVjdCBuYW1lPVwicGVyaW9kXCIgaWQ9XCJwZXJpb2RcIj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIxXCI+VG9kYXk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCIyXCI+MiBkYXlzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiNFwiPjQgZGF5czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj5PbmUgd2Vlazwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjE0XCI+VHdvIHdlZWtzPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGBcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRmlsdGVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==