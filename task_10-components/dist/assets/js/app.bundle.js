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

function findCity(city, period) {
  /*
  pushUrl(city); */
  var loader = document.querySelector('.loader');
  loader.classList.remove('none');

  console.log(period.value);

  (0, _Api.getWeather)("/daily?city=" + city + "&units=" + _config.data.units + "&days=" + period).then(function (city) {
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

  for (var i = 0; i < city.data.length; i++) {
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

var _Filter = __webpack_require__(45);

var _Filter2 = _interopRequireDefault(_Filter);

var _Footer = __webpack_require__(46);

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
    _this.onSearchSubmit = _this.onSearchSubmit.bind(_this);

    _this.locationElement = new _LocationSearch2.default({
      city: _this.state.city,
      period: _this.state.period,
      onSubmit: _this.onSearchSubmit
    });
    _this.filterElement = new _Filter2.default({
      city: _this.state.city,
      period: _this.state.period,
      onSubmit: _this.onSearchSubmit
    });
    _this.mainElement = new _render2.default();
    _this.footerElement = new _Footer2.default();

    console.log(_this.props);
    return _this;
  }

  _createClass(App, [{
    key: "onSearchSubmit",
    value: function onSearchSubmit(city, period) {
      this.updateState({ city: city, period: period });
      (0, _Search.findCity)(city, period);
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          city = _state.city,
          period = _state.period;


      console.log(period);
      console.log(city);
      console.log(this.state);

      return [this.locationElement.update({ city: city, period: period, onSubmit: this.onSearchSubmit }), this.filterElement.update({ city: city, period: period, onSubmit: this.onSearchSubmit }), this.mainElement.render(), this.footerElement.update()];
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
                this.props.onSubmit(city, this.props.period);
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
            var period = document.getElementById('period').value;

            this.props.onSubmit(this.props.city, period);

            console.log(period);
            console.log(this.props);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                city = _props.city,
                period = _props.period;


            return '\n        <div class="filter__box">\n            <label for="period">period:</label>\n            <select name="period" id="period" value=' + period + '>\n                <option value="1">Today</option>\n                <option value="2">2 days</option>\n                <option value="4">4 days</option>\n                <option value="7">One week</option>\n                <option value="14">Two weeks</option>\n            </select>\n        </div>\n        ';
        }
    }]);

    return Filter;
}(_app.Component);

exports.default = Filter;

/***/ }),
/* 46 */
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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjQwNTIwY2I1ZjdlZTMzNDUyYjgiLCJ3ZWJwYWNrOi8vLy4vZGVmYXVsdC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9hcHAuc2FzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9kZWZhdWx0L0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvY2F0aW9uU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2MwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2QwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2YwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDdkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdTAwZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2xvYWRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiXSwibmFtZXMiOlsiZGVmYXVsdCIsInNldEVycm9yIiwiZXJyb3IiLCJsb2FkZXIiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjbGFzc0xpc3QiLCJhZGQiLCJjb25zb2xlIiwibG9nIiwic3RhdHVzIiwiZmluZENpdHkiLCJjaXR5IiwicGVyaW9kIiwicmVtb3ZlIiwidmFsdWUiLCJ1bml0cyIsInRoZW4iLCJjYXRjaCIsInBhcnNlZFVybCIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRhdGFET00iLCJtYWluRE9NIiwidGl0bGVET00iLCJ1bml0c0RPTSIsInBlcmlvZERPTSIsImhpc3RvcnlET00iLCJmYXZvcml0ZXNET00iLCJidXR0b25IaXN0b3J5Q2xlYXIiLCJidXR0b25GYXZvcml0ZXNDbGVhciIsImRhdGEiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJ1bml0c0Rpc3BsYXkiLCJoaXN0b3J5T2JqIiwiZmF2b3JpdGVPYmoiLCJSZW5kZXIiLCJob3N0IiwiY3JlYXRlRWxlbWVudCIsImlkIiwiaW5uZXJIVE1MIiwicmVuZGVyQ2l0eSIsIm1haW5FbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3cmFwcGVyRWxlbWVudCIsImRvY3VtZW50RnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwibWFpbldyYXBwZXIiLCJpIiwibGVuZ3RoIiwiY29udGVudFdyYXBwZXIiLCJjbGFzc05hbWUiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ0ZW1wIiwid2VhdGhlciIsImljb24iLCJkZXNjcmlwdGlvbiIsImRhdGV0aW1lIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsIm1heF90ZW1wIiwibWluX3RlbXAiLCJhcHBfbWF4X3RlbXAiLCJhcHBfbWluX3RlbXAiLCJ3aW5kX3NwZCIsInBvcCIsImFwcGVuZENoaWxkIiwiYXBwbCIsInVwZGF0ZSIsIkFwcCIsInN0YXRlIiwiVVJMU2VhcmNoUGFyYW1zIiwic2VhcmNoIiwiaXNMb2FkZWQiLCJvblNlYXJjaFN1Ym1pdCIsImJpbmQiLCJsb2NhdGlvbkVsZW1lbnQiLCJvblN1Ym1pdCIsImZpbHRlckVsZW1lbnQiLCJmb290ZXJFbGVtZW50IiwicHJvcHMiLCJ1cGRhdGVTdGF0ZSIsInJlbmRlciIsIkNvbXBvbmVudCIsIm5leHRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsIl9yZW5kZXIiLCJuZXh0UHJvcHMiLCJjaGlsZHJlbiIsIkFycmF5IiwiaXNBcnJheSIsImFwcGVuZCIsIkxvY2F0aW9uU2VhcmNoIiwiaXNWYWxpZCIsImhhbmRsZVN1Ym1pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJlbGVtZW50cyIsInRyaW0iLCJCQVNFX1VSTCIsIktFWSIsImdldFdlYXRoZXIiLCJmZXRjaCIsInVybCIsInJlc3BvbnNlIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc29sdmUiLCJqc29uIiwiY2xlYXJMb2NhbFN0b3JhZ2UiLCJET00iLCJrZXkiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwicHVzaEhpc3RvcnkiLCJzdG9yYWdlT2JqZWN0IiwiY3NzQ2xhc3MiLCJsb2NhbFN0b3JhZ2VLZXkiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiaW5kZXhPZiIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2hvd0hpc3RvcnkiLCJtYXAiLCJoeXN0b3J5SXRlbSIsIm9uY2xpY2siLCJldmVudCIsInRhZ05hbWUiLCJGaWx0ZXIiLCJGb290ZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNB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O0FBQ0Y7O1FBRU84RSxXLEdBQUFBLFc7UUFBYVcsVyxHQUFBQSxXO1FBQWFoQixpQixHQUFBQSxpQjs7Ozs7O0FDN0NwQyxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxxRTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7O0lBRU1zQixNOzs7QUFDRixvQkFBWXRELEtBQVosRUFBa0I7QUFBQTs7QUFBQSxvSEFDUkEsS0FEUTs7QUFHZCxjQUFLQSxLQUFMLEdBQWFBLEtBQWI7O0FBRUEsY0FBS2UsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCcEIsSUFBbEIsT0FBcEI7QUFDQSxjQUFLdkMsSUFBTCxHQUFZcEMsU0FBU3FDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUNBLGNBQUtELElBQUwsQ0FBVWxDLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFFBQXhCOztBQUdBLGNBQUtpQyxJQUFMLENBQVU0RCxnQkFBVixDQUEyQixRQUEzQixFQUFxQyxNQUFLRCxZQUExQzs7QUFWYztBQWFqQjs7OztxQ0FFWUUsQyxFQUFFO0FBQ1gsZ0JBQU14RixTQUFTVCxTQUFTMEMsY0FBVCxDQUF3QixRQUF4QixFQUFrQy9CLEtBQWpEOztBQUVBLGlCQUFLcUUsS0FBTCxDQUFXSCxRQUFYLENBQW9CLEtBQUtHLEtBQUwsQ0FBV3hFLElBQS9CLEVBQXFDQyxNQUFyQzs7QUFFQUwsb0JBQVFDLEdBQVIsQ0FBWUksTUFBWjtBQUNBTCxvQkFBUUMsR0FBUixDQUFZLEtBQUsyRSxLQUFqQjtBQUNIOzs7aUNBRU87QUFBQSx5QkFDbUIsS0FBS0EsS0FEeEI7QUFBQSxnQkFDR3hFLElBREgsVUFDR0EsSUFESDtBQUFBLGdCQUNTQyxNQURULFVBQ1NBLE1BRFQ7OztBQUdKLGtLQUc4Q0EsTUFIOUM7QUFZSDs7Ozs7O2tCQUdVNkgsTTs7Ozs7Ozs7Ozs7Ozs7O0FDN0NmOzs7Ozs7OztJQUVNQyxNOzs7QUFDRixzQkFBYTtBQUFBOztBQUFBOztBQUdULGNBQUtuRyxJQUFMLEdBQVlwQyxTQUFTcUMsYUFBVCxDQUF1QixRQUF2QixDQUFaO0FBSFM7QUFJWjs7OztpQ0FFTztBQUNKO0FBVUg7Ozs7OztrQkFHVWtHLE0iLCJmaWxlIjoiLi9hc3NldHMvanMvYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDI0MDUyMGNiNWY3ZWUzMzQ1MmI4IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudCc7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVmYXVsdC9hcHAuanMiLCJpbXBvcnQgeyBwYXJzZWRVcmwsIGRhdGFET00sIGRhdGEgfSBmcm9tIFwiLi4vYXNzZXRzL2pzL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vQXBpXCI7XHJcbmltcG9ydCB7IHJlbmRlckNpdHkgfSBmcm9tIFwiLi4vYXNzZXRzL2pzL3JlbmRlclwiO1xyXG4vKmltcG9ydCB7IHB1c2hIaXN0b3J5LCBzaG93SGlzdG9yeSwgY2xlYXJMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjsqL1xyXG5cclxuLy9wdXNoIGN1cnJlbnQgY2l0eSB0byBVUkxcclxuLyogZnVuY3Rpb24gcHVzaFVybChjaXR5KSB7XHJcbiAgbGV0IHVybCA9IGBpbmRleC5odG1sP2NpdHk9JHtjaXR5fWA7XHJcbiAgaGlzdG9yeS5wdXNoU3RhdGUoY2l0eSwgbnVsbCwgdXJsKTtcclxuICBsZXQgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgZ2V0VXJsKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVybCgpe1xyXG4gIHdpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmKGV2ZW50LnN0YXRlICE9PSBudWxsKXtcclxuICAgICAgZmluZENpdHkoZXZlbnQuc3RhdGUpO1xyXG4gICAgfVxyXG4gIH07XHJcbn0gKi9cclxuXHJcbmZ1bmN0aW9uIHNldEVycm9yKGVycm9yKXtcclxuICBsZXQgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xyXG4gIGxvYWRlci5jbGFzc0xpc3QuYWRkKCdub25lJyk7XHJcbiAgLyogXHJcbiAgaWYgKGVycm9yLnN0YXR1cyA9PT0gMjA0KSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYENpdHkgbm90IGZvdW5kLiBQbGVhc2UsIHRyeSBhZ2Fpbi5gXHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDApIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgU2VhcmNoIGZpZWxkIGlzIGVtcHR5LiBQbGVhc2UsIGVudGVyIGNpdHkgbmFtZWBcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGAke2Vycm9yLnN0YXR1c1RleHR9YCk7XHJcbiAgfSAqL1xyXG4gIGNvbnNvbGUubG9nKGVycm9yLnN0YXR1cylcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZENpdHkoY2l0eSwgcGVyaW9kKSB7XHJcbiAgLypcclxuICBwdXNoVXJsKGNpdHkpOyAqL1xyXG4gIGxldCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9hZGVyJyk7XHJcbiAgbG9hZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ25vbmUnKTtcclxuXHJcblxyXG4gIGNvbnNvbGUubG9nKHBlcmlvZC52YWx1ZSk7XHJcblxyXG4gIGdldFdlYXRoZXIoYC9kYWlseT9jaXR5PSR7Y2l0eX0mdW5pdHM9JHtkYXRhLnVuaXRzfSZkYXlzPSR7cGVyaW9kfWApXHJcbiAgICAudGhlbihmdW5jdGlvbihjaXR5KXtcclxuICAgICAgaWYgKGNpdHkpIHtcclxuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xyXG4gICAgICAgIHJlbmRlckNpdHkoY2l0eSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNpdHk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHNldEVycm9yKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZmluZENpdHkgfTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2VhcmNoLmpzIiwiLy9nZXQgY3VycmVudCB1cmxcclxubGV0IHBhcnNlZFVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cclxuLy9vYmplY3Qgd2l0aCBET00gZWxlbWVudHNcclxuY29uc3QgZGF0YURPTSA9IHtcclxuICBtYWluRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIiksXHJcbiAgdGl0bGVET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIiksXHJcbiAgdW5pdHNET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdW5pdHNcIiksXHJcbiAgcGVyaW9kRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BlcmlvZFwiKSxcclxuICBoaXN0b3J5RE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpc3RvcnlcIiksXHJcbiAgZmF2b3JpdGVzRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlc1wiKSxcclxuICBidXR0b25IaXN0b3J5Q2xlYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGlzdG9yeS1jbGVhclwiKSxcclxuICBidXR0b25GYXZvcml0ZXNDbGVhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmYXZvcml0ZXMtY2xlYXJcIiksXHJcbn07XHJcblxyXG5sZXQgZGF0YSA9IHtcclxuICBjaXR5OiBwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmdldChcImNpdHlcIiksXHJcblxyXG4gIHVuaXRzOiBcIk1cIixcclxuICB1bml0c0Rpc3BsYXk6IFwiQ1wiLFxyXG4gIHBlcmlvZDogMSxcclxuICAvL2xvY2Fsc3RvcmFnZSBvYmplY3RzXHJcbiAgaGlzdG9yeU9iajoge1xyXG4gICAgY2l0eTogW11cclxuICB9LFxyXG4gIGZhdm9yaXRlT2JqOiB7XHJcbiAgICBjaXR5OiBbXVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IHBhcnNlZFVybCwgZGF0YURPTSwgZGF0YSB9O1xyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jb25maWcuanMiLCJpbXBvcnQge3BhcnNlZFVybCwgZGF0YURPTSwgZGF0YX0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7cHVzaEhpc3RvcnksIHNob3dIaXN0b3J5fSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcclxuXHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2EwNWQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9jMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9jMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9jMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9jMDRkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvZDAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvZDAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvZDAzZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2YwMWQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDVkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9yMDZkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczA1ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvczA2ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwNWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwNmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3QwN2Quc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy91MDBkLnN2Z1wiO1xyXG5cclxuY2xhc3MgUmVuZGVye1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdtYWluJyk7XHJcbiAgICB0aGlzLmhvc3QuaWQgPSBcIm1haW5cIjtcclxuXHJcbiAgfVxyXG5cclxuICBtZXRoKCl7XHJcbiAgICBjb25zb2xlLmxvZygnMjIyJylcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHRoaXMuaG9zdC5pbm5lckhUTUwgPSBgYFxyXG4gICAgcmV0dXJuIHRoaXMuaG9zdFxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi8qIGZ1bmN0aW9uIGFkZEZhdm9yaXRlQnV0dG9uKGJvZHkpIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgQ3VycmVudCBjaXR5OiAke2JvZHkuY2l0eV9uYW1lfSBcclxuICAgICAgICA8aW1nIGlkPVwiZmF2b3JpdGVzXCIgc3JjPVwiYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nXCI+XHJcbiAgICAgICAgYFxyXG4gICAgKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zhdm9yaXRlc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHB1c2hIaXN0b3J5KFxyXG4gICAgICAgIGRhdGFET00uZmF2b3JpdGVzRE9NLFxyXG4gICAgICAgIGRhdGEuZmF2b3JpdGVPYmosXHJcbiAgICAgICAgXCJmYXZvcml0ZS1pdGVtXCIsXHJcbiAgICAgICAgXCJmYXZvcml0ZXNcIlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfSAqL1xyXG5cclxuLy9yZW5kZXIgbWV0aG9kXHJcbmZ1bmN0aW9uIHJlbmRlckNpdHkoY2l0eSkge1xyXG4gIC8qIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpOyAqL1xyXG4gIC8qIGFkZEZhdm9yaXRlQnV0dG9uKGJvZHkpOyAqL1xyXG5cclxuICAvL2NyZWF0ZSBjb250YWluZXIgZm9yIGluc2VydGluZyBkYXRhIGZyb20gbG9vcFxyXG4gIFxyXG4gIGxldCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgbGV0IHdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd3JhcHBlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xyXG4gIFxyXG4gIGxldCBkb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gIGxldCBtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi13cmFwcGVyJyk7XHJcblxyXG4gIGZvciAobGV0IGk9MDsgaTxjaXR5LmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250ZW50V3JhcHBlci5jbGFzc05hbWUgPSBcImNvbnRlbnRcIjtcclxuICAgIGNvbnRlbnRXcmFwcGVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcclxuICAgICAgYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X192YWx1ZXNcIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcHRpb25fX251bWJlclwiPiR7Y2l0eS5kYXRhW2ldLnRlbXB9PC9zcGFuPiAke2RhdGEudW5pdHNEaXNwbGF5fVxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcHRpb25fX3RpdGxlXCI+YXZnLiB0ZW1wLjwvcD4gXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8b2JqZWN0IGRhdGE9XCJhc3NldHMvbWVkaWEvJHtjaXR5LmRhdGFbaV0ud2VhdGhlci5pY29ufS5zdmdcIiB0eXBlPVwiXCI+XHJcbiAgICAgICAgICA8L29iamVjdD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2FwdGlvbl9fdGl0bGVcIj4ke2NpdHkuZGF0YVtpXS53ZWF0aGVyLmRlc2NyaXB0aW9ufTwvcD4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJkYXRlXCI+JHtjaXR5LmRhdGFbaV0uZGF0ZXRpbWVcclxuICAgICAgICAgIC5zcGxpdChcIi1cIilcclxuICAgICAgICAgIC5yZXZlcnNlKClcclxuICAgICAgICAgIC5qb2luKFwiLlwiKX1cclxuICAgICAgICA8L3A+ICBcclxuICAgICAgICA8cD5tYXguIHRlbXAuOiAke2NpdHkuZGF0YVtpXS5tYXhfdGVtcH0gJHtkYXRhLnVuaXRzRGlzcGxheX08L3A+XHJcbiAgICAgICAgPHA+bWluLiB0ZW1wLjogJHtjaXR5LmRhdGFbaV0ubWluX3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgIDxwPmZlZWxzIGxpa2UsIG1heDogJHtjaXR5LmRhdGFbaV0uYXBwX21heF90ZW1wfSAke2RhdGEudW5pdHNEaXNwbGF5fTwvcD5cclxuICAgICAgICA8cD5mZWVscyBsaWtlLCBtaW46ICR7Y2l0eS5kYXRhW2ldLmFwcF9taW5fdGVtcH0gJHtkYXRhLnVuaXRzRGlzcGxheX08L3A+XHJcbiAgICAgICAgPHA+d2luZDogJHtjaXR5LmRhdGFbaV0ud2luZF9zcGR9IG0vczwvcD5cclxuICAgICAgICA8cD5wcmVjaXBpdGF0aW9uOiAke2NpdHkuZGF0YVtpXS5wb3B9ICU8L3A+XHJcbiAgICAgIGBcclxuICAgICk7XHJcbiAgICBkb2N1bWVudEZyYWdtZW50LmFwcGVuZENoaWxkKGNvbnRlbnRXcmFwcGVyKTtcclxuICB9XHJcblxyXG4gIFxyXG4gIFxyXG4gIHdyYXBwZXJFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50RnJhZ21lbnQpO1xyXG4gIG1haW5FbGVtZW50LmFwcGVuZENoaWxkKHdyYXBwZXJFbGVtZW50KTtcclxuICBcclxuXHJcblxyXG4gIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IHtyZW5kZXJDaXR5fTtcclxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL3JlbmRlci5qcyIsImltcG9ydCBcIi4vYXNzZXRzL3Nhc3MvYXBwLnNhc3NcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9jb21wb25lbnRzL0FwcFwiO1xyXG5cclxubGV0IGFwcGwgPSBuZXcgQXBwKHsgaG9zdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKX0pO1xyXG5hcHBsLnVwZGF0ZSgpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3Nhc3MvYXBwLnNhc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uL2RlZmF1bHQvYXBwXCI7XHJcbmltcG9ydCBMb2NhdGlvblNlYXJjaCBmcm9tIFwiLi9Mb2NhdGlvblNlYXJjaFwiO1xyXG5pbXBvcnQgUmVuZGVyIGZyb20gXCIuLi9hc3NldHMvanMvcmVuZGVyXCI7XHJcblxyXG5pbXBvcnQgRmlsdGVyIGZyb20gXCIuL0ZpbHRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgeyBmaW5kQ2l0eSB9IGZyb20gXCIuL1NlYXJjaFwiO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcih7IGhvc3QgfSkge1xyXG4gICAgc3VwZXIoKTtcclxuICAgIFxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY2l0eTogbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoXCJjaXR5XCIpIHx8IFwiXCIsXHJcbiAgICAgIHBlcmlvZDogMSxcclxuICAgICAgaXNMb2FkZWQ6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5ob3N0ID0gaG9zdDtcclxuICAgIHRoaXMub25TZWFyY2hTdWJtaXQgPSB0aGlzLm9uU2VhcmNoU3VibWl0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5sb2NhdGlvbkVsZW1lbnQgPSBuZXcgTG9jYXRpb25TZWFyY2goe1xyXG4gICAgICBjaXR5OiB0aGlzLnN0YXRlLmNpdHksXHJcbiAgICAgIHBlcmlvZDogdGhpcy5zdGF0ZS5wZXJpb2QsXHJcbiAgICAgIG9uU3VibWl0OiB0aGlzLm9uU2VhcmNoU3VibWl0XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZmlsdGVyRWxlbWVudCA9IG5ldyBGaWx0ZXIoe1xyXG4gICAgICBjaXR5OiB0aGlzLnN0YXRlLmNpdHksXHJcbiAgICAgIHBlcmlvZDogdGhpcy5zdGF0ZS5wZXJpb2QsXHJcbiAgICAgIG9uU3VibWl0OiB0aGlzLm9uU2VhcmNoU3VibWl0XHJcbiAgICB9KTtcclxuICAgIHRoaXMubWFpbkVsZW1lbnQgPSBuZXcgUmVuZGVyKCk7XHJcbiAgICB0aGlzLmZvb3RlckVsZW1lbnQgPSBuZXcgRm9vdGVyKCk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICBvblNlYXJjaFN1Ym1pdChjaXR5LCBwZXJpb2QpIHtcclxuICAgIHRoaXMudXBkYXRlU3RhdGUoeyBjaXR5LCBwZXJpb2QgfSk7XHJcbiAgICBmaW5kQ2l0eShjaXR5LCBwZXJpb2QpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaXR5LCBwZXJpb2QgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgY29uc29sZS5sb2cocGVyaW9kKTtcclxuICAgIGNvbnNvbGUubG9nKGNpdHkpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgdGhpcy5sb2NhdGlvbkVsZW1lbnQudXBkYXRlKHsgY2l0eSwgcGVyaW9kLCBvblN1Ym1pdDogdGhpcy5vblNlYXJjaFN1Ym1pdCB9KSxcclxuICAgICAgdGhpcy5maWx0ZXJFbGVtZW50LnVwZGF0ZSh7IGNpdHksIHBlcmlvZCwgb25TdWJtaXQ6IHRoaXMub25TZWFyY2hTdWJtaXQgfSksXHJcbiAgICAgIHRoaXMubWFpbkVsZW1lbnQucmVuZGVyKCksXHJcbiAgICAgIHRoaXMuZm9vdGVyRWxlbWVudC51cGRhdGUoKVxyXG4gICAgXTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFwcDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BcHAuanMiLCJjbGFzcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgdGhpcy5wcm9wcyA9IHByb3BzIHx8IHt9O1xyXG4gICAgICB0aGlzLnN0YXRlID0ge307XHJcbiAgXHJcbiAgICAgIHRoaXMuaG9zdCA9IG51bGw7XHJcbiAgICB9XHJcbiAgXHJcbiAgICB1cGRhdGVTdGF0ZShuZXh0U3RhdGUpIHtcclxuICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIG5leHRTdGF0ZSk7XHJcbiAgICAgIHRoaXMuX3JlbmRlcigpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgdXBkYXRlKG5leHRQcm9wcykge1xyXG4gICAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xyXG4gICAgICByZXR1cm4gdGhpcy5fcmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICBfcmVuZGVyKCkge1xyXG4gICAgICBjb25zdCBjaGlsZHJlbiA9IHRoaXMucmVuZGVyKCk7XHJcbiAgXHJcbiAgICAgIHRoaXMuaG9zdC5pbm5lckhUTUwgPSAnJztcclxuICBcclxuICAgICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICB0aGlzLmhvc3QuaW5uZXJIVE1MID0gY2hpbGRyZW47XHJcbiAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcclxuICAgICAgICB0aGlzLmhvc3QuYXBwZW5kKC4uLmNoaWxkcmVuKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmhvc3QuYXBwZW5kKGNoaWxkcmVuKTtcclxuICAgICAgfVxyXG4gIFxyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmhvc3QpO1xyXG4gICAgICByZXR1cm4gdGhpcy5ob3N0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICByZW5kZXIoKSB7fVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XHJcbiAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVmYXVsdC9Db21wb25lbnQuanMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vZGVmYXVsdC9hcHBcIlxyXG5pbXBvcnQgeyBmaW5kQ2l0eSB9IGZyb20gXCIuL1NlYXJjaFwiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1wiO1xyXG5cclxuY2xhc3MgTG9jYXRpb25TZWFyY2ggZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaXNWYWxpZCA6IHRydWVcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG5cclxuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdsb2NhdGlvbi13cmFwcGVyJyk7XHJcbiAgICAgICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGNpdHkgPSBlLnRhcmdldC5lbGVtZW50cy5zZWFyY2gudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlmKCFjaXR5Lmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU3RhdGUoe2lzVmFsaWQ6IGZhbHNlfSlcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblN1Ym1pdChjaXR5LCB0aGlzLnByb3BzLnBlcmlvZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJvcHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgY29uc3Qge2lzVmFsaWR9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCB7Y2l0eX0gPSB0aGlzLnByb3BzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2FkZXIgbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPG9iamVjdCBkYXRhPVwiYXNzZXRzL21lZGlhL2xvYWRlci5zdmdcIj48L29iamVjdD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+V2VhdGhlci1hcHA8L2gxPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz0ke2lzVmFsaWQgPyAnXCJ3ZWF0aGVyLWZvcm1cIicgOiAnXCJ3ZWF0aGVyLWZvcm0gLS1pbnZhbGlkXCInfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInNlYXJjaFwiIHJlcXVpcmVkIGNsYXNzPVwic2VhcmNoLXdlYXRoZXJcIiB2YWx1ZT1cIiR7Y2l0eX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwid2VhdGhlci1zZWFyY2gtc3VibWl0XCI+U2VhcmNoPC9idXR0b24+LlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICBgO1xyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhdGlvblNlYXJjaFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTG9jYXRpb25TZWFyY2guanMiLCJcclxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmJpdC5pby92Mi4wL2ZvcmVjYXN0JztcclxuY29uc3QgS0VZID0gJ2M2OTc2YTRjNGUwNTQyMWY5YjRlYWVlN2EzMTFmMGRjJztcclxuXHJcbmNvbnN0IGdldFdlYXRoZXIgPSB1cmwgPT4gZmV0Y2goYCR7QkFTRV9VUkx9JHt1cmx9JmtleT0ke0tFWX1gKVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKVxyXG4gIH0pXHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICB9KSBcclxuICBcclxuZXhwb3J0IHtnZXRXZWF0aGVyfTsgIFxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BcGkuanMiLCJpbXBvcnQge3BhcnNlZFVybCwgZGF0YURPTSwgZGF0YX0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7ZmluZENpdHl9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlYXJjaFwiO1xyXG5cclxuLypjbGVhciBsb2NhbHN0b3JhZ2UgZGF0YSovXHJcbmZ1bmN0aW9uIGNsZWFyTG9jYWxTdG9yYWdlKERPTSwga2V5KSB7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICBET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICBET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGB0aGVyZSBhcmUgbm8gJHtrZXl9IHlldGApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwdXNoSGlzdG9yeShET00sIHN0b3JhZ2VPYmplY3QsIGNzc0NsYXNzLCBsb2NhbFN0b3JhZ2VLZXkpIHtcclxuICAgIGlmIChcclxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNcIikgJiZcclxuICAgICAgbG9jYWxTdG9yYWdlS2V5ID09PSBcImZhdm9yaXRlc1wiICYmXHJcbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNcIikpLmNpdHkuaW5kZXhPZihkYXRhLmNpdHkpICE9XHJcbiAgICAgICAgLTFcclxuICAgICkge1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RvcmFnZU9iamVjdC5jaXR5LnB1c2goZGF0YS5jaXR5KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShzdG9yYWdlT2JqZWN0KSk7XHJcbiAgICAgIHNob3dIaXN0b3J5KERPTSwgc3RvcmFnZU9iamVjdCwgY3NzQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2hvd0hpc3RvcnkoRE9NLCBzdG9yYWdlT2JqZWN0LCBjc3NDbGFzcykge1xyXG4gICAgRE9NLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBpZiAoc3RvcmFnZU9iamVjdCkge1xyXG5cclxuICAgICAgc3RvcmFnZU9iamVjdC5jaXR5Lm1hcChpID0+IHtcclxuICAgICAgICBET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsYDxsaSBjbGFzcz1cIiR7Y3NzQ2xhc3N9XCI+JHtpfTwvbGk+YCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgbGV0IGh5c3RvcnlJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuXHJcbiAgICAgIGh5c3RvcnlJdGVtLm9uY2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC50YWdOYW1lID09PSAnTEknKXtcclxuICAgICAgICAgIGRhdGEuY2l0eSA9IHRhcmdldC5pbm5lckhUTUw7XHJcbiAgICAgICAgICBmaW5kQ2l0eSh0YXJnZXQuaW5uZXJIVE1MKTtcclxuICAgICAgICB9IFxyXG4gICAgICB9O1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCB7cHVzaEhpc3RvcnksIHNob3dIaXN0b3J5LCBjbGVhckxvY2FsU3RvcmFnZX1cclxuXHJcbiAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2xvY2FsU3RvcmFnZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2YwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZjAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwN2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA3ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3UwMGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdTAwZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2xvYWRlci5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9sb2FkZXIuc3ZnXG4vLyBtb2R1bGUgaWQgPSA0NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIi4uL2RlZmF1bHQvYXBwXCJcclxuXHJcbmNsYXNzIEZpbHRlciBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKCdmaWx0ZXInKTtcclxuICAgICAgICBcclxuICAgIFxyXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KGUpe1xyXG4gICAgICAgIGNvbnN0IHBlcmlvZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwZXJpb2QnKS52YWx1ZTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblN1Ym1pdCh0aGlzLnByb3BzLmNpdHksIHBlcmlvZCk7XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKHBlcmlvZCk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9wcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgY29uc3Qge2NpdHksIHBlcmlvZH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2JveFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicGVyaW9kXCI+cGVyaW9kOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInBlcmlvZFwiIGlkPVwicGVyaW9kXCIgdmFsdWU9JHtwZXJpb2R9PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjFcIj5Ub2RheTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjJcIj4yIGRheXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCI0XCI+NCBkYXlzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiN1wiPk9uZSB3ZWVrPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMTRcIj5Ud28gd2Vla3M8L29wdGlvbj5cclxuICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgYFxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9GaWx0ZXIuanMiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vZGVmYXVsdC9hcHBcIlxyXG5cclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDIwMTcgXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7igKI8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgaWNvbnMgdGFrZW4gZnJvbSBmbGF0aWNvbi5jb20sIGFuaW1hdGVkIHN2ZyB0YWtlbiBmcm9tIGFtY2hhcnRzLmNvbSAoSVBMKSwgXHJcbiAgICAgICAgICAgICAgICB3ZWF0aGVyIGRhdGEgYnJpZ24gYnkgd2VhdGhlcmJpdC5pbyBBUEkgXHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7igKI8L3NwYW4+IFxyXG4gICAgICAgICAgICAgICAgbWFkZSBieSBBbGV4IE5lbGluXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICBgO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Gb290ZXIuanMiXSwic291cmNlUm9vdCI6IiJ9