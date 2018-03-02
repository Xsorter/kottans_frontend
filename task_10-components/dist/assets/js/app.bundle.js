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

var _Api = __webpack_require__(9);

var _RenderWeather = __webpack_require__(51);

function setError(error) {
  var loader = document.querySelector(".loader");
  loader.classList.add("none");
  var host = document.getElementById("main");

  if (error.status === 204) {
    host.insertAdjacentHTML("beforeend", "<p class=\"error\">City not found. Please, try again.</p>");
  } else if (error.status === 400) {
    host.insertAdjacentHTML("beforeend", "<p class=\"error\">Search field is empty. Please, enter city name</p>");
  } else {
    host.insertAdjacentHTML("beforeend", "<p class=\"error\">" + error.statusText + "</p>");
  }
}

function findCity(city, period, units) {
  var loader = document.querySelector(".loader");
  loader.classList.remove("none");

  (0, _Api.getWeather)("/daily?city=" + city + "&units=" + units + "&days=" + period).then(function (city) {
    if (city) {
      loader.classList.add("none");
      (0, _RenderWeather.renderCity)(city, units);
    }
    return city;
  }).catch(setError);
}

exports.findCity = findCity;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

var _App = __webpack_require__(6);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appStart = new _App2.default({ host: document.getElementById('root') });
appStart.update();

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

var _RenderWeather = __webpack_require__(51);

var _RenderWeather2 = _interopRequireDefault(_RenderWeather);

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
      units: "M",
      isLoaded: true
    };

    _this.host = host;
    _this.onSearchSubmit = _this.onSearchSubmit.bind(_this);

    _this.locationElement = new _LocationSearch2.default({
      city: _this.state.city,
      period: _this.state.period,
      units: _this.state.units,
      onSubmit: _this.onSearchSubmit
    });
    _this.filterElement = new _Filter2.default({
      city: _this.state.city,
      period: _this.state.period,
      units: _this.state.units,
      onSubmit: _this.onSearchSubmit
    });
    _this.mainElement = new _RenderWeather2.default();
    _this.footerElement = new _Footer2.default();
    return _this;
  }

  _createClass(App, [{
    key: "onSearchSubmit",
    value: function onSearchSubmit(city, period, units) {
      this.updateState({ city: city, period: period, units: units });
      (0, _Search.findCity)(city, period, units);
      this.pushUrl(city);
    }
  }, {
    key: "pushUrl",
    value: function pushUrl(city) {
      var url = "index.html?city=" + city;
      history.pushState(city, null, url);
      var parsedUrl = new URL(window.location.href);
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          city = _state.city,
          period = _state.period,
          units = _state.units;


      return [this.locationElement.update({
        city: city,
        period: period,
        units: units,
        onSubmit: this.onSearchSubmit
      }), this.filterElement.update({
        city: city,
        period: period,
        units: units,
        onSubmit: this.onSearchSubmit
      }), this.mainElement.render(), this.footerElement.update()];
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
    key: "updateState",
    value: function updateState(nextState) {
      this.state = Object.assign({}, this.state, nextState);
      this._render();
    }
  }, {
    key: "update",
    value: function update(nextProps) {
      this.props = nextProps;
      return this._render();
    }
  }, {
    key: "_render",
    value: function _render() {
      var children = this.render();

      this.host.innerHTML = "";

      if (typeof children === "string") {
        this.host.innerHTML = children;
      } else if (Array.isArray(children)) {
        var _host;

        (_host = this.host).append.apply(_host, _toConsumableArray(children));
      } else {
        this.host.append(children);
      }

      return this.host;
    }
  }, {
    key: "render",
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

    _this.host = document.createElement("header");
    _this.host.classList.add("location-wrapper");
    _this.host.addEventListener("submit", _this.handleSubmit);
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
var BASE_URL = "https://api.weatherbit.io/v2.0/forecast";
var KEY = "c6976a4c4e05421f9b4eaee7a311f0dc";

var getWeather = function getWeather(url) {
  return fetch("" + BASE_URL + url + "&key=" + KEY).then(function (response) {
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
/* 10 */,
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
    _this.host = document.createElement("div");
    _this.host.classList.add("filter");

    _this.host.addEventListener("change", _this.handleSubmit);
    return _this;
  }

  _createClass(Filter, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      var period = document.getElementById("period").value;
      var units = document.getElementById("units").value;
      this.props.onSubmit(this.props.city, period, units);
    }
  }, {
    key: "render",
    value: function render() {
      var _props = this.props,
          city = _props.city,
          period = _props.period,
          units = _props.units;


      return "\n        <div class=\"filter__box\">\n            <label for=\"units\">units:</label>\n                <select name=\"units\" id=\"units\" value=" + units + ">\n                    <option " + (units === "M" ? "selected" : "") + " value=\"M\">Celcius</option>\n                    <option " + (units === "I" ? "selected" : "") + " value=\"I\">Fahrenheit</option>\n                </select>\n            </div>\n        <div class=\"filter__box\">\n            <label for=\"period\">period:</label>\n            <select name=\"period\" id=\"period\" value=" + period + ">\n                <option " + (period === "1" ? "selected" : "") + " value=\"1\">Today</option>\n                <option " + (period === "2" ? "selected" : "") + " value=\"2\">2 days</option>\n                <option " + (period === "4" ? "selected" : "") + " value=\"4\">4 days</option>\n                <option " + (period === "7" ? "selected" : "") + " value=\"7\">One week</option>\n                <option " + (period === "14" ? "selected" : "") + " value=\"14\">Two weeks</option>\n            </select>\n        </div>\n        ";
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

    _this.host = document.createElement("footer");
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
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderCity = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

var Main = function () {
  function Main() {
    _classCallCheck(this, Main);

    this.host = document.createElement('main');
    this.host.id = "main";
  }

  _createClass(Main, [{
    key: "render",
    value: function render() {
      this.host.innerHTML = "";
      return this.host;
    }
  }]);

  return Main;
}();

function renderCity(city, units) {

  var mainElement = document.getElementById('main');
  var wrapperElement = document.createElement('div');
  wrapperElement.classList.add('wrapper');

  var documentFragment = document.createDocumentFragment();
  var mainWrapper = document.querySelector('.location-wrapper');

  for (var i = 0; i < city.data.length; i++) {
    var contentWrapper = document.createElement("div");
    contentWrapper.className = "content";
    contentWrapper.insertAdjacentHTML("beforeend", "\n        <div class=\"content__values\">\n          <p>\n            <span class=\"caption__number\">" + city.data[i].temp + "</span> " + (units === 'I' ? 'F' : 'C') + "\n            <p class=\"caption__title\">avg. temp.</p> \n          </p>\n          <object data=\"assets/media/" + city.data[i].weather.icon + ".svg\" type=\"\">\n          </object>\n          <p class=\"caption__title\">" + city.data[i].weather.description + "</p> \n        </div>\n        <p class=\"date\">" + city.data[i].datetime.split("-").reverse().join(".") + "\n        </p>  \n        <p>max. temp.: " + city.data[i].max_temp + " " + (units === 'I' ? 'F' : 'C') + "</p>\n        <p>min. temp.: " + city.data[i].min_temp + " " + (units === 'I' ? 'F' : 'C') + "</p>\n        <p>feels like, max: " + city.data[i].app_max_temp + " " + (units === 'I' ? 'F' : 'C') + "</p>\n        <p>feels like, min: " + city.data[i].app_min_temp + " " + (units === 'I' ? 'F' : 'C') + "</p>\n        <p>wind: " + city.data[i].wind_spd + " m/s</p>\n        <p>precipitation: " + city.data[i].pop + " %</p>\n      ");
    documentFragment.appendChild(contentWrapper);
  }

  wrapperElement.appendChild(documentFragment);
  mainElement.appendChild(wrapperElement);
}

exports.renderCity = renderCity;
exports.default = Main;

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGFjNjM4MzFmNmE3MjNkYzEwMjciLCJ3ZWJwYWNrOi8vLy4vZGVmYXVsdC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zYXNzL2FwcC5zYXNzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL2RlZmF1bHQvQ29tcG9uZW50LmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9jYXRpb25TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9BcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2MwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2QwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2YwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA1ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwNmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDdkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdTAwZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2xvYWRlci5zdmciLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9GaWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZW5kZXJXZWF0aGVyLmpzIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJzZXRFcnJvciIsImVycm9yIiwibG9hZGVyIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIiwiaG9zdCIsImdldEVsZW1lbnRCeUlkIiwic3RhdHVzIiwiaW5zZXJ0QWRqYWNlbnRIVE1MIiwic3RhdHVzVGV4dCIsImZpbmRDaXR5IiwiY2l0eSIsInBlcmlvZCIsInVuaXRzIiwicmVtb3ZlIiwidGhlbiIsImNhdGNoIiwiYXBwU3RhcnQiLCJ1cGRhdGUiLCJBcHAiLCJzdGF0ZSIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiZ2V0IiwiaXNMb2FkZWQiLCJvblNlYXJjaFN1Ym1pdCIsImJpbmQiLCJsb2NhdGlvbkVsZW1lbnQiLCJvblN1Ym1pdCIsImZpbHRlckVsZW1lbnQiLCJtYWluRWxlbWVudCIsImZvb3RlckVsZW1lbnQiLCJ1cGRhdGVTdGF0ZSIsInB1c2hVcmwiLCJ1cmwiLCJoaXN0b3J5IiwicHVzaFN0YXRlIiwicGFyc2VkVXJsIiwiVVJMIiwiaHJlZiIsInJlbmRlciIsIkNvbXBvbmVudCIsInByb3BzIiwibmV4dFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiX3JlbmRlciIsIm5leHRQcm9wcyIsImNoaWxkcmVuIiwiaW5uZXJIVE1MIiwiQXJyYXkiLCJpc0FycmF5IiwiYXBwZW5kIiwiTG9jYXRpb25TZWFyY2giLCJpc1ZhbGlkIiwiaGFuZGxlU3VibWl0IiwiY3JlYXRlRWxlbWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJlbGVtZW50cyIsInZhbHVlIiwidHJpbSIsImxlbmd0aCIsIkJBU0VfVVJMIiwiS0VZIiwiZ2V0V2VhdGhlciIsImZldGNoIiwicmVzcG9uc2UiLCJQcm9taXNlIiwicmVqZWN0IiwicmVzb2x2ZSIsImpzb24iLCJGaWx0ZXIiLCJGb290ZXIiLCJNYWluIiwiaWQiLCJyZW5kZXJDaXR5Iiwid3JhcHBlckVsZW1lbnQiLCJkb2N1bWVudEZyYWdtZW50IiwiY3JlYXRlRG9jdW1lbnRGcmFnbWVudCIsIm1haW5XcmFwcGVyIiwiaSIsImRhdGEiLCJjb250ZW50V3JhcHBlciIsImNsYXNzTmFtZSIsInRlbXAiLCJ3ZWF0aGVyIiwiaWNvbiIsImRlc2NyaXB0aW9uIiwiZGF0ZXRpbWUiLCJzcGxpdCIsInJldmVyc2UiLCJqb2luIiwibWF4X3RlbXAiLCJtaW5fdGVtcCIsImFwcF9tYXhfdGVtcCIsImFwcF9taW5fdGVtcCIsIndpbmRfc3BkIiwicG9wIiwiYXBwZW5kQ2hpbGQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs4Q0M3RFNBLE87Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FUOztBQUNBOztBQUVBLFNBQVNDLFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXlCO0FBQ3ZCLE1BQUlDLFNBQVNDLFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBYjtBQUNBRixTQUFPRyxTQUFQLENBQWlCQyxHQUFqQixDQUFxQixNQUFyQjtBQUNBLE1BQUlD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ckYsS0FBSzJFLElBQUwsQ0FBVUQsQ0FBVixFQUFhWSxRQWhCbEMsVUFnQjhDcEYsVUFBUSxHQUFSLEdBQWMsR0FBZCxHQUFvQixHQWhCbEUsc0NBaUJxQkYsS0FBSzJFLElBQUwsQ0FBVUQsQ0FBVixFQUFhYSxRQWpCbEMsVUFpQjhDckYsVUFBUSxHQUFSLEdBQWMsR0FBZCxHQUFvQixHQWpCbEUsMkNBa0IwQkYsS0FBSzJFLElBQUwsQ0FBVUQsQ0FBVixFQUFhYyxZQWxCdkMsVUFrQnVEdEYsVUFBUSxHQUFSLEdBQWMsR0FBZCxHQUFvQixHQWxCM0UsMkNBbUIwQkYsS0FBSzJFLElBQUwsQ0FBVUQsQ0FBVixFQUFhZSxZQW5CdkMsVUFtQnVEdkYsVUFBUSxHQUFSLEdBQWMsR0FBZCxHQUFvQixHQW5CM0UsZ0NBb0JlRixLQUFLMkUsSUFBTCxDQUFVRCxDQUFWLEVBQWFnQixRQXBCNUIsNENBcUJ3QjFGLEtBQUsyRSxJQUFMLENBQVVELENBQVYsRUFBYWlCLEdBckJyQztBQXdCQXBCLHFCQUFpQnFCLFdBQWpCLENBQTZCaEIsY0FBN0I7QUFDRDs7QUFFRE4saUJBQWVzQixXQUFmLENBQTJCckIsZ0JBQTNCO0FBQ0FsRCxjQUFZdUUsV0FBWixDQUF3QnRCLGNBQXhCO0FBQ0Q7O1FBRU9ELFUsR0FBQUEsVTtrQkFDT0YsSSIsImZpbGUiOiIuL2Fzc2V0cy9qcy9hcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMGFjNjM4MzFmNmE3MjNkYzEwMjciLCJleHBvcnQgeyBkZWZhdWx0IGFzIENvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50JztcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVmYXVsdC9hcHAuanMiLCJpbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vQXBpXCI7XHJcbmltcG9ydCB7IHJlbmRlckNpdHkgfSBmcm9tIFwiLi9SZW5kZXJXZWF0aGVyXCI7XHJcblxyXG5mdW5jdGlvbiBzZXRFcnJvcihlcnJvcikge1xyXG4gIGxldCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRlclwiKTtcclxuICBsb2FkZXIuY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XHJcbiAgbGV0IGhvc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XHJcblxyXG4gIGlmIChlcnJvci5zdGF0dXMgPT09IDIwNCkge1xyXG4gICAgaG9zdC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgIGA8cCBjbGFzcz1cImVycm9yXCI+Q2l0eSBub3QgZm91bmQuIFBsZWFzZSwgdHJ5IGFnYWluLjwvcD5gXHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDApIHtcclxuICAgIGhvc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgPHAgY2xhc3M9XCJlcnJvclwiPlNlYXJjaCBmaWVsZCBpcyBlbXB0eS4gUGxlYXNlLCBlbnRlciBjaXR5IG5hbWU8L3A+YFxyXG4gICAgKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaG9zdC5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgIGA8cCBjbGFzcz1cImVycm9yXCI+JHtlcnJvci5zdGF0dXNUZXh0fTwvcD5gXHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZmluZENpdHkoY2l0eSwgcGVyaW9kLCB1bml0cykge1xyXG4gIGxldCBsb2FkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRlclwiKTtcclxuICBsb2FkZXIuY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7XHJcblxyXG4gIGdldFdlYXRoZXIoYC9kYWlseT9jaXR5PSR7Y2l0eX0mdW5pdHM9JHt1bml0c30mZGF5cz0ke3BlcmlvZH1gKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24oY2l0eSkge1xyXG4gICAgICBpZiAoY2l0eSkge1xyXG4gICAgICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTtcclxuICAgICAgICByZW5kZXJDaXR5KGNpdHksIHVuaXRzKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY2l0eTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goc2V0RXJyb3IpOyBcclxufVxyXG5cclxuZXhwb3J0IHsgZmluZENpdHkgfTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2VhcmNoLmpzIiwiaW1wb3J0IFwiLi9hc3NldHMvc2Fzcy9hcHAuc2Fzc1wiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudHMvQXBwXCI7XHJcblxyXG5sZXQgYXBwU3RhcnQgPSBuZXcgQXBwKHsgaG9zdDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKX0pO1xyXG5hcHBTdGFydC51cGRhdGUoKTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zYXNzL2FwcC5zYXNzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi9kZWZhdWx0L2FwcFwiO1xyXG5pbXBvcnQgTG9jYXRpb25TZWFyY2ggZnJvbSBcIi4vTG9jYXRpb25TZWFyY2hcIjtcclxuaW1wb3J0IE1haW4gZnJvbSBcIi4vUmVuZGVyV2VhdGhlclwiO1xyXG5pbXBvcnQgRmlsdGVyIGZyb20gXCIuL0ZpbHRlclwiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuL0Zvb3RlclwiO1xyXG5pbXBvcnQgeyBmaW5kQ2l0eSB9IGZyb20gXCIuL1NlYXJjaFwiO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcih7IGhvc3QgfSkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBjaXR5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpLmdldChcImNpdHlcIikgfHwgXCJcIixcclxuICAgICAgcGVyaW9kOiAxLFxyXG4gICAgICB1bml0czogXCJNXCIsXHJcbiAgICAgIGlzTG9hZGVkOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaG9zdCA9IGhvc3Q7XHJcbiAgICB0aGlzLm9uU2VhcmNoU3VibWl0ID0gdGhpcy5vblNlYXJjaFN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cclxuICAgIHRoaXMubG9jYXRpb25FbGVtZW50ID0gbmV3IExvY2F0aW9uU2VhcmNoKHtcclxuICAgICAgY2l0eTogdGhpcy5zdGF0ZS5jaXR5LFxyXG4gICAgICBwZXJpb2Q6IHRoaXMuc3RhdGUucGVyaW9kLFxyXG4gICAgICB1bml0czogdGhpcy5zdGF0ZS51bml0cyxcclxuICAgICAgb25TdWJtaXQ6IHRoaXMub25TZWFyY2hTdWJtaXRcclxuICAgIH0pO1xyXG4gICAgdGhpcy5maWx0ZXJFbGVtZW50ID0gbmV3IEZpbHRlcih7XHJcbiAgICAgIGNpdHk6IHRoaXMuc3RhdGUuY2l0eSxcclxuICAgICAgcGVyaW9kOiB0aGlzLnN0YXRlLnBlcmlvZCxcclxuICAgICAgdW5pdHM6IHRoaXMuc3RhdGUudW5pdHMsXHJcbiAgICAgIG9uU3VibWl0OiB0aGlzLm9uU2VhcmNoU3VibWl0XHJcbiAgICB9KTtcclxuICAgIHRoaXMubWFpbkVsZW1lbnQgPSBuZXcgTWFpbigpO1xyXG4gICAgdGhpcy5mb290ZXJFbGVtZW50ID0gbmV3IEZvb3RlcigpO1xyXG4gIH1cclxuXHJcbiAgb25TZWFyY2hTdWJtaXQoY2l0eSwgcGVyaW9kLCB1bml0cykge1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7IGNpdHksIHBlcmlvZCwgdW5pdHMgfSk7XHJcbiAgICBmaW5kQ2l0eShjaXR5LCBwZXJpb2QsIHVuaXRzKTtcclxuICAgIHRoaXMucHVzaFVybChjaXR5KTtcclxuICB9XHJcblxyXG4gIHB1c2hVcmwoY2l0eSkge1xyXG4gICAgbGV0IHVybCA9IGBpbmRleC5odG1sP2NpdHk9JHtjaXR5fWA7XHJcbiAgICBoaXN0b3J5LnB1c2hTdGF0ZShjaXR5LCBudWxsLCB1cmwpO1xyXG4gICAgbGV0IHBhcnNlZFVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaXR5LCBwZXJpb2QsIHVuaXRzIH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIHRoaXMubG9jYXRpb25FbGVtZW50LnVwZGF0ZSh7XHJcbiAgICAgICAgY2l0eSxcclxuICAgICAgICBwZXJpb2QsXHJcbiAgICAgICAgdW5pdHMsXHJcbiAgICAgICAgb25TdWJtaXQ6IHRoaXMub25TZWFyY2hTdWJtaXRcclxuICAgICAgfSksXHJcbiAgICAgIHRoaXMuZmlsdGVyRWxlbWVudC51cGRhdGUoe1xyXG4gICAgICAgIGNpdHksXHJcbiAgICAgICAgcGVyaW9kLFxyXG4gICAgICAgIHVuaXRzLFxyXG4gICAgICAgIG9uU3VibWl0OiB0aGlzLm9uU2VhcmNoU3VibWl0XHJcbiAgICAgIH0pLFxyXG4gICAgICB0aGlzLm1haW5FbGVtZW50LnJlbmRlcigpLFxyXG4gICAgICB0aGlzLmZvb3RlckVsZW1lbnQudXBkYXRlKClcclxuICAgIF07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQXBwLmpzIiwiY2xhc3MgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgdGhpcy5wcm9wcyA9IHByb3BzIHx8IHt9O1xyXG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG5cclxuICAgIHRoaXMuaG9zdCA9IG51bGw7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTdGF0ZShuZXh0U3RhdGUpIHtcclxuICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xyXG4gICAgdGhpcy5fcmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUobmV4dFByb3BzKSB7XHJcbiAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgX3JlbmRlcigpIHtcclxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5yZW5kZXIoKTtcclxuXHJcbiAgICB0aGlzLmhvc3QuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIHRoaXMuaG9zdC5pbm5lckhUTUwgPSBjaGlsZHJlbjtcclxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjaGlsZHJlbikpIHtcclxuICAgICAgdGhpcy5ob3N0LmFwcGVuZCguLi5jaGlsZHJlbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhvc3QuYXBwZW5kKGNoaWxkcmVuKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5ob3N0O1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge31cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9kZWZhdWx0L0NvbXBvbmVudC5qcyIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi9kZWZhdWx0L2FwcFwiO1xyXG5pbXBvcnQgeyBmaW5kQ2l0eSB9IGZyb20gXCIuL1NlYXJjaFwiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1wiO1xyXG5cclxuY2xhc3MgTG9jYXRpb25TZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgaXNWYWxpZDogdHJ1ZVxyXG4gICAgfTtcclxuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuXHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImhlYWRlclwiKTtcclxuICAgIHRoaXMuaG9zdC5jbGFzc0xpc3QuYWRkKFwibG9jYXRpb24td3JhcHBlclwiKTtcclxuICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIHRoaXMuaGFuZGxlU3VibWl0KTtcclxuICB9XHJcblxyXG4gIGhhbmRsZVN1Ym1pdChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBjaXR5ID0gZS50YXJnZXQuZWxlbWVudHMuc2VhcmNoLnZhbHVlLnRyaW0oKTtcclxuICAgIGlmICghY2l0eS5sZW5ndGgpIHtcclxuICAgICAgdGhpcy51cGRhdGVTdGF0ZSh7IGlzVmFsaWQ6IGZhbHNlIH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5wcm9wcy5vblN1Ym1pdChjaXR5LCB0aGlzLnByb3BzLnBlcmlvZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IGlzVmFsaWQgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCB7IGNpdHkgfSA9IHRoaXMucHJvcHM7XHJcblxyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvYWRlciBub25lXCI+XHJcbiAgICAgICAgICAgICAgICA8b2JqZWN0IGRhdGE9XCJhc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1wiPjwvb2JqZWN0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5XZWF0aGVyLWFwcDwvaDE+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPSR7XHJcbiAgICAgICAgICAgICAgaXNWYWxpZCA/ICdcIndlYXRoZXItZm9ybVwiJyA6ICdcIndlYXRoZXItZm9ybSAtLWludmFsaWRcIidcclxuICAgICAgICAgICAgfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInNlYXJjaFwiIHJlcXVpcmVkIGNsYXNzPVwic2VhcmNoLXdlYXRoZXJcIiB2YWx1ZT1cIiR7Y2l0eX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwid2VhdGhlci1zZWFyY2gtc3VibWl0XCI+U2VhcmNoPC9idXR0b24+LlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICBgO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25TZWFyY2g7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTG9jYXRpb25TZWFyY2guanMiLCJjb25zdCBCQVNFX1VSTCA9IFwiaHR0cHM6Ly9hcGkud2VhdGhlcmJpdC5pby92Mi4wL2ZvcmVjYXN0XCI7XHJcbmNvbnN0IEtFWSA9IFwiYzY5NzZhNGM0ZTA1NDIxZjliNGVhZWU3YTMxMWYwZGNcIjtcclxuXHJcbmNvbnN0IGdldFdlYXRoZXIgPSB1cmwgPT5cclxuICBmZXRjaChgJHtCQVNFX1VSTH0ke3VybH0ma2V5PSR7S0VZfWApXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChyZXNwb25zZSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSk7XHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSk7XHJcblxyXG5leHBvcnQgeyBnZXRXZWF0aGVyIH07XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQXBpLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZDAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZDAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZDAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZjAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9mMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjA2ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDZkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczA2ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDZkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA2ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDZkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA3ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDdkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdTAwZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy91MDBkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2xvYWRlci5zdmdcbi8vIG1vZHVsZSBpZCA9IDQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuLi9kZWZhdWx0L2FwcFwiO1xyXG5cclxuY2xhc3MgRmlsdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuXHJcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgdGhpcy5ob3N0LmNsYXNzTGlzdC5hZGQoXCJmaWx0ZXJcIik7XHJcblxyXG4gICAgdGhpcy5ob3N0LmFkZEV2ZW50TGlzdGVuZXIoXCJjaGFuZ2VcIiwgdGhpcy5oYW5kbGVTdWJtaXQpO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlU3VibWl0KGUpIHtcclxuICAgIGNvbnN0IHBlcmlvZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGVyaW9kXCIpLnZhbHVlO1xyXG4gICAgY29uc3QgdW5pdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInVuaXRzXCIpLnZhbHVlO1xyXG4gICAgdGhpcy5wcm9wcy5vblN1Ym1pdCh0aGlzLnByb3BzLmNpdHksIHBlcmlvZCwgdW5pdHMpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaXR5LCBwZXJpb2QsIHVuaXRzIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbHRlcl9fYm94XCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ1bml0c1wiPnVuaXRzOjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJ1bml0c1wiIGlkPVwidW5pdHNcIiB2YWx1ZT0ke3VuaXRzfT5cclxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICB1bml0cyA9PT0gXCJNXCIgPyBcInNlbGVjdGVkXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSB2YWx1ZT1cIk1cIj5DZWxjaXVzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgdW5pdHMgPT09IFwiSVwiID8gXCJzZWxlY3RlZFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0gdmFsdWU9XCJJXCI+RmFocmVuaGVpdDwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXJfX2JveFwiPlxyXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicGVyaW9kXCI+cGVyaW9kOjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDxzZWxlY3QgbmFtZT1cInBlcmlvZFwiIGlkPVwicGVyaW9kXCIgdmFsdWU9JHtwZXJpb2R9PlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiAke1xyXG4gICAgICAgICAgICAgICAgICBwZXJpb2QgPT09IFwiMVwiID8gXCJzZWxlY3RlZFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfSB2YWx1ZT1cIjFcIj5Ub2RheTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgPG9wdGlvbiAke1xyXG4gICAgICAgICAgICAgICAgICBwZXJpb2QgPT09IFwiMlwiID8gXCJzZWxlY3RlZFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfSB2YWx1ZT1cIjJcIj4yIGRheXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgIDxvcHRpb24gJHtcclxuICAgICAgICAgICAgICAgICAgcGVyaW9kID09PSBcIjRcIiA/IFwic2VsZWN0ZWRcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH0gdmFsdWU9XCI0XCI+NCBkYXlzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uICR7XHJcbiAgICAgICAgICAgICAgICAgIHBlcmlvZCA9PT0gXCI3XCIgPyBcInNlbGVjdGVkXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9IHZhbHVlPVwiN1wiPk9uZSB3ZWVrPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICA8b3B0aW9uICR7XHJcbiAgICAgICAgICAgICAgICAgIHBlcmlvZCA9PT0gXCIxNFwiID8gXCJzZWxlY3RlZFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfSB2YWx1ZT1cIjE0XCI+VHdvIHdlZWtzPC9vcHRpb24+XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIGA7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRmlsdGVyLmpzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uL2RlZmF1bHQvYXBwXCI7XHJcblxyXG5jbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9vdGVyXCIpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAyMDE3IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+4oCiPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIGljb25zIHRha2VuIGZyb20gZmxhdGljb24uY29tLCBhbmltYXRlZCBzdmcgdGFrZW4gZnJvbSBhbWNoYXJ0cy5jb20gKElQTCksIFxyXG4gICAgICAgICAgICAgICAgd2VhdGhlciBkYXRhIGJyaWduIGJ5IHdlYXRoZXJiaXQuaW8gQVBJIFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+4oCiPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIG1hZGUgYnkgQWxleCBOZWxpblxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgYDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9Gb290ZXIuanMiLCJpbXBvcnQgXCIuLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vYXNzZXRzL21lZGlhL2ljb25zL2EwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vYXNzZXRzL21lZGlhL2ljb25zL2EwNWQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vYXNzZXRzL21lZGlhL2ljb25zL2MwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvbWVkaWEvaWNvbnMvYzA0ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vYXNzZXRzL21lZGlhL2ljb25zL2QwM2Quc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9hc3NldHMvbWVkaWEvaWNvbnMvZjAxZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vYXNzZXRzL21lZGlhL2ljb25zL3IwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA1ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vYXNzZXRzL21lZGlhL2ljb25zL3IwNmQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9hc3NldHMvbWVkaWEvaWNvbnMvczAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vYXNzZXRzL21lZGlhL2ljb25zL3MwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvbWVkaWEvaWNvbnMvczA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vYXNzZXRzL21lZGlhL2ljb25zL3MwNWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDZkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vYXNzZXRzL21lZGlhL2ljb25zL3QwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vYXNzZXRzL21lZGlhL2ljb25zL3QwNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDVkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA2ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vYXNzZXRzL21lZGlhL2ljb25zL3QwN2Quc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9hc3NldHMvbWVkaWEvaWNvbnMvdTAwZC5zdmdcIjtcclxuXHJcbmNsYXNzIE1haW57XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcclxuICAgIHRoaXMuaG9zdC5pZCA9IFwibWFpblwiO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdGhpcy5ob3N0LmlubmVySFRNTCA9IGBgXHJcbiAgICByZXR1cm4gdGhpcy5ob3N0XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJDaXR5KGNpdHksIHVuaXRzKSB7XHJcblxyXG4gIGxldCBtYWluRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XHJcbiAgbGV0IHdyYXBwZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgd3JhcHBlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnd3JhcHBlcicpO1xyXG4gIFxyXG4gIGxldCBkb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gIGxldCBtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi13cmFwcGVyJyk7XHJcblxyXG4gIGZvciAobGV0IGk9MDsgaTxjaXR5LmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250ZW50V3JhcHBlci5jbGFzc05hbWUgPSBcImNvbnRlbnRcIjtcclxuICAgIGNvbnRlbnRXcmFwcGVyLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcclxuICAgICAgYFxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X192YWx1ZXNcIj5cclxuICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcHRpb25fX251bWJlclwiPiR7Y2l0eS5kYXRhW2ldLnRlbXB9PC9zcGFuPiAke3VuaXRzPT09J0knID8gJ0YnIDogJ0MnfVxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImNhcHRpb25fX3RpdGxlXCI+YXZnLiB0ZW1wLjwvcD4gXHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8b2JqZWN0IGRhdGE9XCJhc3NldHMvbWVkaWEvJHtjaXR5LmRhdGFbaV0ud2VhdGhlci5pY29ufS5zdmdcIiB0eXBlPVwiXCI+XHJcbiAgICAgICAgICA8L29iamVjdD5cclxuICAgICAgICAgIDxwIGNsYXNzPVwiY2FwdGlvbl9fdGl0bGVcIj4ke2NpdHkuZGF0YVtpXS53ZWF0aGVyLmRlc2NyaXB0aW9ufTwvcD4gXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJkYXRlXCI+JHtjaXR5LmRhdGFbaV0uZGF0ZXRpbWVcclxuICAgICAgICAgIC5zcGxpdChcIi1cIilcclxuICAgICAgICAgIC5yZXZlcnNlKClcclxuICAgICAgICAgIC5qb2luKFwiLlwiKX1cclxuICAgICAgICA8L3A+ICBcclxuICAgICAgICA8cD5tYXguIHRlbXAuOiAke2NpdHkuZGF0YVtpXS5tYXhfdGVtcH0gJHt1bml0cz09PSdJJyA/ICdGJyA6ICdDJ308L3A+XHJcbiAgICAgICAgPHA+bWluLiB0ZW1wLjogJHtjaXR5LmRhdGFbaV0ubWluX3RlbXB9ICR7dW5pdHM9PT0nSScgPyAnRicgOiAnQyd9PC9wPlxyXG4gICAgICAgIDxwPmZlZWxzIGxpa2UsIG1heDogJHtjaXR5LmRhdGFbaV0uYXBwX21heF90ZW1wfSAke3VuaXRzPT09J0knID8gJ0YnIDogJ0MnfTwvcD5cclxuICAgICAgICA8cD5mZWVscyBsaWtlLCBtaW46ICR7Y2l0eS5kYXRhW2ldLmFwcF9taW5fdGVtcH0gJHt1bml0cz09PSdJJyA/ICdGJyA6ICdDJ308L3A+XHJcbiAgICAgICAgPHA+d2luZDogJHtjaXR5LmRhdGFbaV0ud2luZF9zcGR9IG0vczwvcD5cclxuICAgICAgICA8cD5wcmVjaXBpdGF0aW9uOiAke2NpdHkuZGF0YVtpXS5wb3B9ICU8L3A+XHJcbiAgICAgIGBcclxuICAgICk7XHJcbiAgICBkb2N1bWVudEZyYWdtZW50LmFwcGVuZENoaWxkKGNvbnRlbnRXcmFwcGVyKTtcclxuICB9XHJcblxyXG4gIHdyYXBwZXJFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50RnJhZ21lbnQpO1xyXG4gIG1haW5FbGVtZW50LmFwcGVuZENoaWxkKHdyYXBwZXJFbGVtZW50KTtcclxufVxyXG5cclxuZXhwb3J0IHtyZW5kZXJDaXR5fTtcclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUmVuZGVyV2VhdGhlci5qcyJdLCJzb3VyY2VSb290IjoiIn0=