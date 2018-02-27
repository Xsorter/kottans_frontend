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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Component = __webpack_require__(8);

Object.defineProperty(exports, 'Component', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Component).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    contentWrapper.insertAdjacentHTML("beforeend", "\n        <div class=\"content__values\">\n          <p>\n            <span class=\"caption__number\">" + city.data[i].temp + "</span> " + _config.data.unitsDisplay + "\n            <p class=\"caption__title\">avg. temp.</p> \n          </p>\n          <object data=\"assets/media/" + city.data[i].weather.icon + ".svg\" type=\"\">\n          </object>\n          <p class=\"caption__title\">" + city.data[i].weather.description + "</p> \n        </div>\n        <p class=\"date\">" + city.data[i].datetime.split("-").reverse().join(".") + "\n        </p> \n        <p>max. temp.: " + city.data[i].max_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>min. temp.: " + city.data[i].min_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>feels like, max: " + city.data[i].app_max_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>feels like, min: " + city.data[i].app_min_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>wind: " + city.data[i].wind_spd + " m/s</p>\n        <p>precipitation: " + city.data[i].pop + " %</p>\n      ");
    documentFragment.appendChild(contentWrapper);
  }

  wrapperElement.appendChild(documentFragment);
  mainElement.appendChild(wrapperElement);
}

exports.renderCity = renderCity;
exports.default = Render;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findCity = undefined;

var _config = __webpack_require__(0);

var _Api = __webpack_require__(4);

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
/* 4 */
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(6);

var _App = __webpack_require__(7);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appl = new _App2.default({ host: document.getElementById('root') });
appl.update();

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(1);

var _LocationSearch = __webpack_require__(9);

var _LocationSearch2 = _interopRequireDefault(_LocationSearch);

var _render = __webpack_require__(2);

var _render2 = _interopRequireDefault(_render);

var _Footer = __webpack_require__(45);

var _Footer2 = _interopRequireDefault(_Footer);

var _Search = __webpack_require__(3);

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
      isLoaded: true
    };

    _this.host = host;

    _this.locationElement = new _LocationSearch2.default({
      city: _this.state.city,
      onSubmit: _this.onSearchSubmit
    });

    console.log(_this.host);
    _this.onSearchSubmit = _this.onSearchSubmit.bind(_this);
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
      var city = this.state.city;


      return [this.locationElement.update({ city: city, onSubmit: this.onSearchSubmit }), this.mainElement.render(), this.footerElement.update()];
    }
  }]);

  return App;
}(_app.Component);

exports.default = App;

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(1);

var _Search = __webpack_require__(3);

__webpack_require__(50);

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
            }
        }
    }, {
        key: "render",
        value: function render() {
            var isValid = this.state.isValid;
            var city = this.props.city;

            console.log(this.props);

            return "\n            <div class=\"loader none\">\n                <object data=\"assets/media/loader.svg\"></object>\n            </div>\n            <h1 class=\"title\">Weather-app</h1>\n            <form class=" + (isValid ? '"weather-form"' : '"weather-form --invalid"') + ">\n                <div class=\"search\">\n                    <input name=\"search\" required class=\"search-weather\" value=\"" + city + "\">\n                    <button class=\"weather-search-submit\">Search</button>.\n                </div>\n            </form>\n        ";
        }
    }]);

    return LocationSearch;
}(_app.Component);

exports.default = LocationSearch;

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

var _Api = __webpack_require__(4);

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

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(1);

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

module.exports = __webpack_require__.p + "./assets/media/loader.svg";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTBiZWIyNzg4ODlkNmQ5NTlhZjkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9kZWZhdWx0L2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvcmVuZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovLy8uL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Fzcy9hcHAuc2FzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9kZWZhdWx0L0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvY2F0aW9uU2VhcmNoLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2MwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDRkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2QwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZjAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA2ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczA2ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwMWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDJkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAzZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwNGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDVkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA2ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwN2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy91MDBkLnN2ZyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2ZyJdLCJuYW1lcyI6WyJwYXJzZWRVcmwiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkYXRhRE9NIiwibWFpbkRPTSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRpdGxlRE9NIiwidW5pdHNET00iLCJwZXJpb2RET00iLCJoaXN0b3J5RE9NIiwiZmF2b3JpdGVzRE9NIiwiYnV0dG9uSGlzdG9yeUNsZWFyIiwiYnV0dG9uRmF2b3JpdGVzQ2xlYXIiLCJkYXRhIiwiY2l0eSIsInNlYXJjaFBhcmFtcyIsImdldCIsInVuaXRzIiwidW5pdHNEaXNwbGF5IiwicGVyaW9kIiwiaGlzdG9yeU9iaiIsImZhdm9yaXRlT2JqIiwiZGVmYXVsdCIsIlJlbmRlciIsImhvc3QiLCJjcmVhdGVFbGVtZW50IiwiaWQiLCJjb25zb2xlIiwibG9nIiwiaW5uZXJIVE1MIiwicmVuZGVyQ2l0eSIsIm1haW5FbGVtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ3cmFwcGVyRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImRvY3VtZW50RnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwibWFpbldyYXBwZXIiLCJpIiwiY29udGVudFdyYXBwZXIiLCJjbGFzc05hbWUiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ0ZW1wIiwid2VhdGhlciIsImljb24iLCJkZXNjcmlwdGlvbiIsImRhdGV0aW1lIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsIm1heF90ZW1wIiwibWluX3RlbXAiLCJhcHBfbWF4X3RlbXAiLCJhcHBfbWluX3RlbXAiLCJ3aW5kX3NwZCIsInBvcCIsImFwcGVuZENoaWxkIiwic2V0RXJyb3IiLCJlcnJvciIsImxvYWRlciIsInN0YXR1cyIsImZpbmRDaXR5IiwicmVtb3ZlIiwidGhlbiIsImNhdGNoIiwiQkFTRV9VUkwiLCJLRVkiLCJnZXRXZWF0aGVyIiwiZmV0Y2giLCJ1cmwiLCJyZXNwb25zZSIsIlByb21pc2UiLCJyZWplY3QiLCJyZXNvbHZlIiwianNvbiIsImFwcGwiLCJ1cGRhdGUiLCJBcHAiLCJzdGF0ZSIsIlVSTFNlYXJjaFBhcmFtcyIsInNlYXJjaCIsImlzTG9hZGVkIiwibG9jYXRpb25FbGVtZW50Iiwib25TdWJtaXQiLCJvblNlYXJjaFN1Ym1pdCIsImJpbmQiLCJmb290ZXJFbGVtZW50IiwidXBkYXRlU3RhdGUiLCJyZW5kZXIiLCJDb21wb25lbnQiLCJwcm9wcyIsIm5leHRTdGF0ZSIsIk9iamVjdCIsImFzc2lnbiIsIl9yZW5kZXIiLCJuZXh0UHJvcHMiLCJjaGlsZHJlbiIsIkFycmF5IiwiaXNBcnJheSIsImFwcGVuZCIsIkxvY2F0aW9uU2VhcmNoIiwiaXNWYWxpZCIsImhhbmRsZVN1Ym1pdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJlbGVtZW50cyIsInZhbHVlIiwidHJpbSIsImxlbmd0aCIsImNsZWFyTG9jYWxTdG9yYWdlIiwiRE9NIiwia2V5IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2hIaXN0b3J5Iiwic3RvcmFnZU9iamVjdCIsImNzc0NsYXNzIiwibG9jYWxTdG9yYWdlS2V5IiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImluZGV4T2YiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNob3dIaXN0b3J5IiwibWFwIiwiaHlzdG9yeUl0ZW0iLCJvbmNsaWNrIiwiZXZlbnQiLCJ0YWdOYW1lIiwic2VjcmV0S2V5IiwiYm9keSIsIkZvb3RlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0EsSUFBSUEsWUFBWSxJQUFJQyxHQUFKLENBQVFDLE9BQU9DLFFBQVAsQ0FBZ0JDLElBQXhCLENBQWhCOztBQUVBO0FBQ0EsSUFBTUMsVUFBVTtBQUNkQyxXQUFTQyxTQUFTQyxhQUFULENBQXVCLFVBQXZCLENBREs7QUFFZEMsWUFBVUYsU0FBU0MsYUFBVCxDQUF1QixjQUF2QixDQUZJO0FBR2RFLFlBQVVILFNBQVNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FISTtBQUlkRyxhQUFXSixTQUFTQyxhQUFULENBQXVCLFNBQXZCLENBSkc7QUFLZEksY0FBWUwsU0FBU0MsYUFBVCxDQUF1QixVQUF2QixDQUxFO0FBTWRLLGdCQUFjTixTQUFTQyxhQUFULENBQXVCLFlBQXZCLENBTkE7QUFPZE0sc0JBQW9CUCxTQUFTQyxhQUFULENBQXVCLGdCQUF2QixDQVBOO0FBUWRPLHdCQUFzQlIsU0FBU0MsYUFBVCxDQUF1QixrQkFBdkI7QUFSUixDQUFoQjs7QUFXQSxJQUFJUSxPQUFPO0FBQ1RDLFFBQU1qQixVQUFVa0IsWUFBVixDQUF1QkMsR0FBdkIsQ0FBMkIsTUFBM0IsQ0FERzs7QUFHVEMsU0FBTyxHQUhFO0FBSVRDLGdCQUFjLEdBSkw7QUFLVEMsVUFBUSxDQUxDO0FBTVQ7QUFDQUMsY0FBWTtBQUNWTixVQUFNO0FBREksR0FQSDtBQVVUTyxlQUFhO0FBQ1hQLFVBQU07QUFESztBQVZKLENBQVg7O1FBZVNqQixTLEdBQUFBLFM7UUFBV0ssTyxHQUFBQSxPO1FBQVNXLEksR0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhDQzlCcEJTLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQVQ7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7SUFFTUMsTTtBQUNKLG9CQUFhO0FBQUE7O0FBQ1gsU0FBS0MsSUFBTCxHQUFZcEIsU0FBU3FCLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBWjtBQUNBLFNBQUtELElBQUwsQ0FBVUUsRUFBVixHQUFlLE1BQWY7QUFFRDs7OzsyQkFFSztBQUNKQyxjQUFRQyxHQUFSLENBQVksS0FBWjtBQUNEOzs7NkJBRVE7QUFDUCxXQUFLSixJQUFMLENBQVVLLFNBQVY7QUFDQSxhQUFPLEtBQUtMLElBQVo7QUFDRDs7Ozs7O0FBSUg7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTs7O0FBQ0EsU0FBU00sVUFBVCxDQUFvQmhCLElBQXBCLEVBQTBCO0FBQ3hCO0FBQ0E7O0FBRUE7O0FBRUEsTUFBSWlCLGNBQWMzQixTQUFTNEIsY0FBVCxDQUF3QixNQUF4QixDQUFsQjtBQUNBLE1BQUlDLGlCQUFpQjdCLFNBQVNxQixhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0FRLGlCQUFlQyxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixTQUE3Qjs7QUFFQSxNQUFJQyxtQkFBbUJoQyxTQUFTaUMsc0JBQVQsRUFBdkI7QUFDQSxNQUFJQyxjQUFjbEMsU0FBU0MsYUFBVCxDQUF1QixtQkFBdkIsQ0FBbEI7O0FBRUEsT0FBSyxJQUFJa0MsSUFBRSxDQUFYLEVBQWNBLElBQUUsYUFBS3BCLE1BQXJCLEVBQTZCb0IsR0FBN0IsRUFBa0M7QUFDaEMsUUFBSUMsaUJBQWlCcEMsU0FBU3FCLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckI7QUFDQWUsbUJBQWVDLFNBQWYsR0FBMkIsU0FBM0I7QUFDQUQsbUJBQWVFLGtCQUFmLENBQWtDLFdBQWxDLDZHQUl3QzVCLEtBQUtELElBQUwsQ0FBVTBCLENBQVYsRUFBYUksSUFKckQsZ0JBSW9FLGFBQUt6QixZQUp6RSx5SEFPbUNKLEtBQUtELElBQUwsQ0FBVTBCLENBQVYsRUFBYUssT0FBYixDQUFxQkMsSUFQeEQsc0ZBU2tDL0IsS0FBS0QsSUFBTCxDQUFVMEIsQ0FBVixFQUFhSyxPQUFiLENBQXFCRSxXQVR2RCx5REFXc0JoQyxLQUFLRCxJQUFMLENBQVUwQixDQUFWLEVBQWFRLFFBQWIsQ0FDZkMsS0FEZSxDQUNULEdBRFMsRUFFZkMsT0FGZSxHQUdmQyxJQUhlLENBR1YsR0FIVSxDQVh0QixnREFnQnFCcEMsS0FBS0QsSUFBTCxDQUFVMEIsQ0FBVixFQUFhWSxRQWhCbEMsU0FnQjhDLGFBQUtqQyxZQWhCbkQscUNBaUJxQkosS0FBS0QsSUFBTCxDQUFVMEIsQ0FBVixFQUFhYSxRQWpCbEMsU0FpQjhDLGFBQUtsQyxZQWpCbkQsMENBa0IwQkosS0FBS0QsSUFBTCxDQUFVMEIsQ0FBVixFQUFhYyxZQWxCdkMsU0FrQnVELGFBQUtuQyxZQWxCNUQsMENBbUIwQkosS0FBS0QsSUFBTCxDQUFVMEIsQ0FBVixFQUFhZSxZQW5CdkMsU0FtQnVELGFBQUtwQyxZQW5CNUQsK0JBb0JlSixLQUFLRCxJQUFMLENBQVUwQixDQUFWLEVBQWFnQixRQXBCNUIsNENBcUJ3QnpDLEtBQUtELElBQUwsQ0FBVTBCLENBQVYsRUFBYWlCLEdBckJyQztBQXdCQXBCLHFCQUFpQnFCLFdBQWpCLENBQTZCakIsY0FBN0I7QUFDRDs7QUFJRFAsaUJBQWV3QixXQUFmLENBQTJCckIsZ0JBQTNCO0FBQ0FMLGNBQVkwQixXQUFaLENBQXdCeEIsY0FBeEI7QUFNRDs7UUFFT0gsVSxHQUFBQSxVO2tCQUNPUCxNOzs7Ozs7Ozs7Ozs7OztBQ3hJZjs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQSxTQUFTbUMsUUFBVCxDQUFrQkMsS0FBbEIsRUFBd0I7QUFDdEIsTUFBSUMsU0FBU3hELFNBQVNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBYjtBQUNBdUQsU0FBTzFCLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLE1BQXJCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBY0FSLFVBQVFDLEdBQVIsQ0FBWStCLE1BQU1FLE1BQWxCO0FBQ0Q7O0FBRUQsU0FBU0MsUUFBVCxDQUFrQmhELElBQWxCLEVBQXdCO0FBQ3RCOztBQUVBLE1BQUk4QyxTQUFTeEQsU0FBU0MsYUFBVCxDQUF1QixTQUF2QixDQUFiO0FBQ0F1RCxTQUFPMUIsU0FBUCxDQUFpQjZCLE1BQWpCLENBQXdCLE1BQXhCOztBQUVBLHdDQUEwQmpELElBQTFCLGVBQXdDLGFBQUtHLEtBQTdDLEVBQ0crQyxJQURILENBQ1EsVUFBU2xELElBQVQsRUFBYztBQUNsQixRQUFJQSxJQUFKLEVBQVU7QUFDUjhDLGFBQU8xQixTQUFQLENBQWlCQyxHQUFqQixDQUFxQixNQUFyQjtBQUNBLDhCQUFXckIsSUFBWDtBQUNEO0FBQ0QsV0FBT0EsSUFBUDtBQUNELEdBUEgsRUFRR21ELEtBUkgsQ0FRU1AsUUFSVDtBQVNEOztRQUVRSSxRLEdBQUFBLFE7Ozs7Ozs7Ozs7Ozs7QUN6RFQsSUFBTUksV0FBVyx5Q0FBakI7QUFDQSxJQUFNQyxNQUFNLGtDQUFaOztBQUVBLElBQU1DLGFBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQU9DLFdBQVNILFFBQVQsR0FBb0JJLEdBQXBCLGFBQStCSCxHQUEvQixFQUN2QkgsSUFEdUIsQ0FDbEIsb0JBQVk7QUFDaEIsUUFBSU8sU0FBU1YsTUFBVCxLQUFvQixHQUF4QixFQUE2QjtBQUMzQixhQUFPVyxRQUFRQyxNQUFSLENBQWVGLFFBQWYsQ0FBUDtBQUNEO0FBQ0QsV0FBT0MsUUFBUUUsT0FBUixDQUFnQkgsUUFBaEIsQ0FBUDtBQUNELEdBTnVCLEVBT3ZCUCxJQVB1QixDQU9sQixvQkFBWTtBQUNoQixXQUFPTyxTQUFTSSxJQUFULEVBQVA7QUFDRCxHQVR1QixDQUFQO0FBQUEsQ0FBbkI7O1FBV1FQLFUsR0FBQUEsVTs7Ozs7Ozs7O0FDZlI7O0FBQ0E7Ozs7OztBQUVBLElBQUlRLE9BQU8sa0JBQVEsRUFBRXBELE1BQU1wQixTQUFTNEIsY0FBVCxDQUF3QixNQUF4QixDQUFSLEVBQVIsQ0FBWDtBQUNBNEMsS0FBS0MsTUFBTCxHOzs7Ozs7QUNKQSx5Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7SUFFTUMsRzs7O0FBQ0oscUJBQXNCO0FBQUEsUUFBUnRELElBQVEsUUFBUkEsSUFBUTs7QUFBQTs7QUFBQTs7QUFHcEIsVUFBS3VELEtBQUwsR0FBYTtBQUNYakUsWUFBTSxJQUFJa0UsZUFBSixDQUFvQmpGLE9BQU9DLFFBQVAsQ0FBZ0JpRixNQUFwQyxFQUE0Q2pFLEdBQTVDLENBQWdELE1BQWhELEtBQTJELEVBRHREO0FBRVhrRSxnQkFBVTtBQUZDLEtBQWI7O0FBS0EsVUFBSzFELElBQUwsR0FBWUEsSUFBWjs7QUFFQSxVQUFLMkQsZUFBTCxHQUF1Qiw2QkFBbUI7QUFDeENyRSxZQUFNLE1BQUtpRSxLQUFMLENBQVdqRSxJQUR1QjtBQUV4Q3NFLGdCQUFVLE1BQUtDO0FBRnlCLEtBQW5CLENBQXZCOztBQUtBMUQsWUFBUUMsR0FBUixDQUFZLE1BQUtKLElBQWpCO0FBQ0EsVUFBSzZELGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFDQSxVQUFLdkQsV0FBTCxHQUFtQixzQkFBbkI7QUFDQSxVQUFLd0QsYUFBTCxHQUFxQixzQkFBckI7QUFsQm9CO0FBbUJyQjs7OzttQ0FFY3pFLEksRUFBTTtBQUNuQixXQUFLMEUsV0FBTCxDQUFpQixFQUFFMUUsVUFBRixFQUFqQjtBQUNBLDRCQUFTQSxJQUFUO0FBQ0Q7Ozs2QkFFUTtBQUFBLFVBQ0NBLElBREQsR0FDVSxLQUFLaUUsS0FEZixDQUNDakUsSUFERDs7O0FBR1AsYUFBTyxDQUNMLEtBQUtxRSxlQUFMLENBQXFCTixNQUFyQixDQUE0QixFQUFFL0QsVUFBRixFQUFRc0UsVUFBVSxLQUFLQyxjQUF2QixFQUE1QixDQURLLEVBRUwsS0FBS3RELFdBQUwsQ0FBaUIwRCxNQUFqQixFQUZLLEVBR0wsS0FBS0YsYUFBTCxDQUFtQlYsTUFBbkIsRUFISyxDQUFQO0FBS0Q7Ozs7OztrQkFHWUMsRzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQzVDVFksUztBQUNGLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQ2pCLFNBQUtBLEtBQUwsR0FBYUEsU0FBUyxFQUF0QjtBQUNBLFNBQUtaLEtBQUwsR0FBYSxFQUFiOztBQUVBLFNBQUt2RCxJQUFMLEdBQVksSUFBWjtBQUNEOzs7O2dDQUVXb0UsUyxFQUFXO0FBQ3JCLFdBQUtiLEtBQUwsR0FBYWMsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0IsS0FBS2YsS0FBdkIsRUFBOEJhLFNBQTlCLENBQWI7QUFDQSxXQUFLRyxPQUFMO0FBQ0Q7OzsyQkFFTUMsUyxFQUFXO0FBQ2hCLFdBQUtMLEtBQUwsR0FBYUssU0FBYjtBQUNBLGFBQU8sS0FBS0QsT0FBTCxFQUFQO0FBQ0Q7Ozs4QkFFUztBQUNSLFVBQU1FLFdBQVcsS0FBS1IsTUFBTCxFQUFqQjs7QUFFQSxXQUFLakUsSUFBTCxDQUFVSyxTQUFWLEdBQXNCLEVBQXRCOztBQUVBLFVBQUksT0FBT29FLFFBQVAsS0FBb0IsUUFBeEIsRUFBa0M7QUFDaEMsYUFBS3pFLElBQUwsQ0FBVUssU0FBVixHQUFzQm9FLFFBQXRCO0FBQ0QsT0FGRCxNQUVPLElBQUlDLE1BQU1DLE9BQU4sQ0FBY0YsUUFBZCxDQUFKLEVBQTZCO0FBQUE7O0FBQ2xDLHNCQUFLekUsSUFBTCxFQUFVNEUsTUFBVixpQ0FBb0JILFFBQXBCO0FBQ0QsT0FGTSxNQUVBO0FBQ0wsYUFBS3pFLElBQUwsQ0FBVTRFLE1BQVYsQ0FBaUJILFFBQWpCO0FBQ0Q7O0FBRUR0RSxjQUFRQyxHQUFSLENBQVksS0FBS0osSUFBakI7QUFDQSxhQUFPLEtBQUtBLElBQVo7QUFDRDs7OzZCQUVRLENBQUU7Ozs7OztrQkFHRWtFLFM7Ozs7Ozs7Ozs7Ozs7OztBQ3RDakI7O0FBQ0E7O0FBQ0E7Ozs7Ozs7O0lBRU1XLGM7OztBQUNGLDRCQUFZVixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0lBQ1RBLEtBRFM7O0FBR2YsY0FBS1osS0FBTCxHQUFhO0FBQ1R1QixxQkFBVTtBQURELFNBQWI7QUFHQSxjQUFLWCxLQUFMLEdBQWFBLEtBQWI7O0FBRUEsY0FBS1ksWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCakIsSUFBbEIsT0FBcEI7O0FBRUEsY0FBSzlELElBQUwsR0FBWXBCLFNBQVNxQixhQUFULENBQXVCLFFBQXZCLENBQVo7QUFDQSxjQUFLRCxJQUFMLENBQVVVLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLGtCQUF4QjtBQUNBLGNBQUtYLElBQUwsQ0FBVWdGLGdCQUFWLENBQTJCLFFBQTNCLEVBQXFDLE1BQUtELFlBQTFDO0FBWmU7QUFhbEI7Ozs7cUNBRVlFLEMsRUFBRTtBQUNYQSxjQUFFQyxjQUFGO0FBQ0EsZ0JBQU01RixPQUFPMkYsRUFBRUUsTUFBRixDQUFTQyxRQUFULENBQWtCM0IsTUFBbEIsQ0FBeUI0QixLQUF6QixDQUErQkMsSUFBL0IsRUFBYjtBQUNBLGdCQUFHLENBQUNoRyxLQUFLaUcsTUFBVCxFQUFnQjtBQUNaLHFCQUFLdkIsV0FBTCxDQUFpQixFQUFDYyxTQUFTLEtBQVYsRUFBakI7QUFDSCxhQUZELE1BRUs7QUFDRCxxQkFBS1gsS0FBTCxDQUFXUCxRQUFYLENBQW9CdEUsSUFBcEI7QUFDSDtBQUNKOzs7aUNBRVE7QUFBQSxnQkFDRXdGLE9BREYsR0FDYSxLQUFLdkIsS0FEbEIsQ0FDRXVCLE9BREY7QUFBQSxnQkFFRXhGLElBRkYsR0FFVSxLQUFLNkUsS0FGZixDQUVFN0UsSUFGRjs7QUFHTGEsb0JBQVFDLEdBQVIsQ0FBWSxLQUFLK0QsS0FBakI7O0FBRUEsc09BS2tCVyxVQUFVLGdCQUFWLEdBQTZCLDBCQUwvQyx5SUFPMEV4RixJQVAxRTtBQWFIOzs7Ozs7a0JBS1V1RixjOzs7Ozs7Ozs7Ozs7OztBQ3JEZjs7QUFDQTs7QUFFQTtBQUNBLFNBQVNXLGlCQUFULENBQTJCQyxHQUEzQixFQUFnQ0MsR0FBaEMsRUFBcUM7QUFDbkNDLGVBQWFDLFVBQWIsQ0FBd0JGLEdBQXhCO0FBQ0FELE1BQUlwRixTQUFKLEdBQWdCLEVBQWhCO0FBQ0FvRixNQUFJdkUsa0JBQUosQ0FBdUIsV0FBdkIsb0JBQW9Ed0UsR0FBcEQ7QUFDRDs7QUFFRCxTQUFTRyxXQUFULENBQXFCSixHQUFyQixFQUEwQkssYUFBMUIsRUFBeUNDLFFBQXpDLEVBQW1EQyxlQUFuRCxFQUFvRTtBQUNoRSxNQUNFTCxhQUFhTSxPQUFiLENBQXFCLFdBQXJCLEtBQ0FELG9CQUFvQixXQURwQixJQUVBRSxLQUFLQyxLQUFMLENBQVdSLGFBQWFNLE9BQWIsQ0FBcUIsV0FBckIsQ0FBWCxFQUE4QzNHLElBQTlDLENBQW1EOEcsT0FBbkQsQ0FBMkQsYUFBSzlHLElBQWhFLEtBQ0UsQ0FBQyxDQUpMLEVBS0UsQ0FDRCxDQU5ELE1BTU87QUFDTHdHLGtCQUFjeEcsSUFBZCxDQUFtQitHLElBQW5CLENBQXdCLGFBQUsvRyxJQUE3QjtBQUNBcUcsaUJBQWFXLE9BQWIsQ0FBcUJOLGVBQXJCLEVBQXNDRSxLQUFLSyxTQUFMLENBQWVULGFBQWYsQ0FBdEM7QUFDQVUsZ0JBQVlmLEdBQVosRUFBaUJLLGFBQWpCLEVBQWdDQyxRQUFoQztBQUNEO0FBQ0Y7O0FBRUQsU0FBU1MsV0FBVCxDQUFxQmYsR0FBckIsRUFBMEJLLGFBQTFCLEVBQXlDQyxRQUF6QyxFQUFtRDtBQUNqRE4sTUFBSXBGLFNBQUosR0FBZ0IsRUFBaEI7QUFDQSxNQUFJeUYsYUFBSixFQUFtQjs7QUFFakJBLGtCQUFjeEcsSUFBZCxDQUFtQm1ILEdBQW5CLENBQXVCLGFBQUs7QUFDMUJoQixVQUFJdkUsa0JBQUosQ0FBdUIsV0FBdkIsbUJBQWlENkUsUUFBakQsV0FBOERoRixDQUE5RDtBQUNELEtBRkQ7O0FBSUEsUUFBSTJGLGNBQWM5SCxTQUFTQyxhQUFULENBQXVCLFVBQXZCLENBQWxCOztBQUVBNkgsZ0JBQVlDLE9BQVosR0FBc0IsaUJBQVM7QUFDN0IsVUFBSXhCLFNBQVN5QixNQUFNekIsTUFBbkI7QUFDQSxVQUFJQSxVQUFVQSxPQUFPMEIsT0FBUCxLQUFtQixJQUFqQyxFQUFzQztBQUNwQyxxQkFBS3ZILElBQUwsR0FBWTZGLE9BQU85RSxTQUFuQjtBQUNBLDhCQUFTOEUsT0FBTzlFLFNBQWhCO0FBQ0Q7QUFDRixLQU5EO0FBUUQ7QUFDRjs7UUFFT3dGLFcsR0FBQUEsVztRQUFhVyxXLEdBQUFBLFc7UUFBYWhCLGlCLEdBQUFBLGlCOzs7Ozs7Ozs7Ozs7OztBQzdDcEM7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUEsU0FBU3RELFFBQVQsQ0FBa0JDLEtBQWxCLEVBQXdCO0FBQ3RCOzs7Ozs7Ozs7Ozs7OztBQWNEOztBQUVELFNBQVNHLFFBQVQsQ0FBa0JoRCxJQUFsQixFQUF3QjtBQUN0Qjs7Ozs7QUFLQSx3Q0FBMEJBLElBQTFCLGVBQXdDLGFBQUtHLEtBQTdDLGFBQTBELGFBQUtxSCxTQUEvRCxFQUNHdEUsSUFESCxDQUNRLFVBQVN1RSxJQUFULEVBQWM7QUFDbEIsUUFBSUEsSUFBSixFQUFVO0FBQ1I1RyxjQUFRQyxHQUFSLENBQVksU0FBWjtBQUNBLDhCQUFXMkcsSUFBWDtBQUNEO0FBQ0QsV0FBT0EsSUFBUDtBQUNELEdBUEgsRUFRR3RFLEtBUkgsQ0FRU1AsUUFSVDtBQVNEOztRQUVRSSxRLEdBQUFBLFE7Ozs7OztBQ3ZEVCxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7SUFFTTBFLE07OztBQUNGLHNCQUFhO0FBQUE7O0FBQUE7O0FBR1QsY0FBS2hILElBQUwsR0FBWXBCLFNBQVNxQixhQUFULENBQXVCLFFBQXZCLENBQVo7QUFIUztBQUlaOzs7O2lDQUVPO0FBQ0o7QUFVSDs7Ozs7O2tCQUdVK0csTTs7Ozs7Ozs7OztBQ3ZCZixxRSIsImZpbGUiOiIuL2Fzc2V0cy9qcy9hcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTBiZWIyNzg4ODlkNmQ5NTlhZjkiLCIvL2dldCBjdXJyZW50IHVybFxyXG5sZXQgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcblxyXG4vL29iamVjdCB3aXRoIERPTSBlbGVtZW50c1xyXG5jb25zdCBkYXRhRE9NID0ge1xyXG4gIG1haW5ET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud3JhcHBlclwiKSxcclxuICB0aXRsZURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKSxcclxuICB1bml0c0RPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN1bml0c1wiKSxcclxuICBwZXJpb2RET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjcGVyaW9kXCIpLFxyXG4gIGhpc3RvcnlET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlzdG9yeVwiKSxcclxuICBmYXZvcml0ZXNET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmF2b3JpdGVzXCIpLFxyXG4gIGJ1dHRvbkhpc3RvcnlDbGVhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNoaXN0b3J5LWNsZWFyXCIpLFxyXG4gIGJ1dHRvbkZhdm9yaXRlc0NsZWFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zhdm9yaXRlcy1jbGVhclwiKSxcclxufTtcclxuXHJcbmxldCBkYXRhID0ge1xyXG4gIGNpdHk6IHBhcnNlZFVybC5zZWFyY2hQYXJhbXMuZ2V0KFwiY2l0eVwiKSxcclxuXHJcbiAgdW5pdHM6IFwiTVwiLFxyXG4gIHVuaXRzRGlzcGxheTogXCJDXCIsXHJcbiAgcGVyaW9kOiAxLFxyXG4gIC8vbG9jYWxzdG9yYWdlIG9iamVjdHNcclxuICBoaXN0b3J5T2JqOiB7XHJcbiAgICBjaXR5OiBbXVxyXG4gIH0sXHJcbiAgZmF2b3JpdGVPYmo6IHtcclxuICAgIGNpdHk6IFtdXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgcGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhIH07XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsImV4cG9ydCB7IGRlZmF1bHQgYXMgQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnQnO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlZmF1bHQvYXBwLmpzIiwiaW1wb3J0IHtwYXJzZWRVcmwsIGRhdGFET00sIGRhdGF9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQge3B1c2hIaXN0b3J5LCBzaG93SGlzdG9yeX0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9hMDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9hMDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9hMDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9hMDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9hMDVkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvYzAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvYzAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvYzAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvYzA0ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2QwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2QwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL2QwM2Quc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy9mMDFkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvcjAxZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvcjAyZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvcjAzZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvcjA0ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvcjA1ZC5zdmdcIjtcclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvcjA2ZC5zdmdcIjtcclxuXHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3MwMWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3MwMmQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3MwM2Quc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3MwNGQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3MwNWQuc3ZnXCI7XHJcbmltcG9ydCBcIi4uL21lZGlhL2ljb25zL3MwNmQuc3ZnXCI7XHJcblxyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy90MDFkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy90MDJkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy90MDNkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy90MDRkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy90MDVkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy90MDZkLnN2Z1wiO1xyXG5pbXBvcnQgXCIuLi9tZWRpYS9pY29ucy90MDdkLnN2Z1wiO1xyXG5cclxuaW1wb3J0IFwiLi4vbWVkaWEvaWNvbnMvdTAwZC5zdmdcIjtcclxuXHJcbmNsYXNzIFJlbmRlcntcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xyXG4gICAgdGhpcy5ob3N0LmlkID0gXCJtYWluXCI7XHJcblxyXG4gIH1cclxuXHJcbiAgbWV0aCgpe1xyXG4gICAgY29uc29sZS5sb2coJzIyMicpXHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICB0aGlzLmhvc3QuaW5uZXJIVE1MID0gYGBcclxuICAgIHJldHVybiB0aGlzLmhvc3RcclxuICB9XHJcblxyXG59XHJcblxyXG4vKiBmdW5jdGlvbiBhZGRGYXZvcml0ZUJ1dHRvbihib2R5KSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYEN1cnJlbnQgY2l0eTogJHtib2R5LmNpdHlfbmFtZX0gXHJcbiAgICAgICAgPGltZyBpZD1cImZhdm9yaXRlc1wiIHNyYz1cImFzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1wiPlxyXG4gICAgICAgIGBcclxuICAgICk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmYXZvcml0ZXNcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICBwdXNoSGlzdG9yeShcclxuICAgICAgICBkYXRhRE9NLmZhdm9yaXRlc0RPTSxcclxuICAgICAgICBkYXRhLmZhdm9yaXRlT2JqLFxyXG4gICAgICAgIFwiZmF2b3JpdGUtaXRlbVwiLFxyXG4gICAgICAgIFwiZmF2b3JpdGVzXCJcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH0gKi9cclxuXHJcbi8vcmVuZGVyIG1ldGhvZFxyXG5mdW5jdGlvbiByZW5kZXJDaXR5KGNpdHkpIHtcclxuICAvKiBkYXRhRE9NLmxvYWRlckRPTS5jbGFzc0xpc3QuYWRkKFwibm9uZVwiKTsgKi9cclxuICAvKiBhZGRGYXZvcml0ZUJ1dHRvbihib2R5KTsgKi9cclxuXHJcbiAgLy9jcmVhdGUgY29udGFpbmVyIGZvciBpbnNlcnRpbmcgZGF0YSBmcm9tIGxvb3BcclxuICBcclxuICBsZXQgbWFpbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpO1xyXG4gIGxldCB3cmFwcGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gIHdyYXBwZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3dyYXBwZXInKTtcclxuICBcclxuICBsZXQgZG9jdW1lbnRGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICBsZXQgbWFpbldyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24td3JhcHBlcicpO1xyXG5cclxuICBmb3IgKGxldCBpPTA7IGk8ZGF0YS5wZXJpb2Q7IGkrKykge1xyXG4gICAgbGV0IGNvbnRlbnRXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRlbnRXcmFwcGVyLmNsYXNzTmFtZSA9IFwiY29udGVudFwiO1xyXG4gICAgY29udGVudFdyYXBwZXIuaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIFxyXG4gICAgICBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfX3ZhbHVlc1wiPlxyXG4gICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY2FwdGlvbl9fbnVtYmVyXCI+JHtjaXR5LmRhdGFbaV0udGVtcH08L3NwYW4+ICR7ZGF0YS51bml0c0Rpc3BsYXl9XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FwdGlvbl9fdGl0bGVcIj5hdmcuIHRlbXAuPC9wPiBcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxvYmplY3QgZGF0YT1cImFzc2V0cy9tZWRpYS8ke2NpdHkuZGF0YVtpXS53ZWF0aGVyLmljb259LnN2Z1wiIHR5cGU9XCJcIj5cclxuICAgICAgICAgIDwvb2JqZWN0PlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJjYXB0aW9uX190aXRsZVwiPiR7Y2l0eS5kYXRhW2ldLndlYXRoZXIuZGVzY3JpcHRpb259PC9wPiBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzcz1cImRhdGVcIj4ke2NpdHkuZGF0YVtpXS5kYXRldGltZVxyXG4gICAgICAgICAgLnNwbGl0KFwiLVwiKVxyXG4gICAgICAgICAgLnJldmVyc2UoKVxyXG4gICAgICAgICAgLmpvaW4oXCIuXCIpfVxyXG4gICAgICAgIDwvcD4gXHJcbiAgICAgICAgPHA+bWF4LiB0ZW1wLjogJHtjaXR5LmRhdGFbaV0ubWF4X3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgIDxwPm1pbi4gdGVtcC46ICR7Y2l0eS5kYXRhW2ldLm1pbl90ZW1wfSAke2RhdGEudW5pdHNEaXNwbGF5fTwvcD5cclxuICAgICAgICA8cD5mZWVscyBsaWtlLCBtYXg6ICR7Y2l0eS5kYXRhW2ldLmFwcF9tYXhfdGVtcH0gJHtkYXRhLnVuaXRzRGlzcGxheX08L3A+XHJcbiAgICAgICAgPHA+ZmVlbHMgbGlrZSwgbWluOiAke2NpdHkuZGF0YVtpXS5hcHBfbWluX3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgIDxwPndpbmQ6ICR7Y2l0eS5kYXRhW2ldLndpbmRfc3BkfSBtL3M8L3A+XHJcbiAgICAgICAgPHA+cHJlY2lwaXRhdGlvbjogJHtjaXR5LmRhdGFbaV0ucG9wfSAlPC9wPlxyXG4gICAgICBgXHJcbiAgICApO1xyXG4gICAgZG9jdW1lbnRGcmFnbWVudC5hcHBlbmRDaGlsZChjb250ZW50V3JhcHBlcik7XHJcbiAgfVxyXG5cclxuICBcclxuICBcclxuICB3cmFwcGVyRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudEZyYWdtZW50KTtcclxuICBtYWluRWxlbWVudC5hcHBlbmRDaGlsZCh3cmFwcGVyRWxlbWVudCk7XHJcbiAgXHJcblxyXG5cclxuICBcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7cmVuZGVyQ2l0eX07XHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlcjtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9yZW5kZXIuanMiLCJpbXBvcnQgeyBwYXJzZWRVcmwsIGRhdGFET00sIGRhdGEgfSBmcm9tIFwiLi4vYXNzZXRzL2pzL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vQXBpXCI7XHJcbmltcG9ydCB7IHJlbmRlckNpdHkgfSBmcm9tIFwiLi4vYXNzZXRzL2pzL3JlbmRlclwiO1xyXG4vKmltcG9ydCB7IHB1c2hIaXN0b3J5LCBzaG93SGlzdG9yeSwgY2xlYXJMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjsqL1xyXG5cclxuLy9wdXNoIGN1cnJlbnQgY2l0eSB0byBVUkxcclxuLyogZnVuY3Rpb24gcHVzaFVybChjaXR5KSB7XHJcbiAgbGV0IHVybCA9IGBpbmRleC5odG1sP2NpdHk9JHtjaXR5fWA7XHJcbiAgaGlzdG9yeS5wdXNoU3RhdGUoY2l0eSwgbnVsbCwgdXJsKTtcclxuICBsZXQgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgZ2V0VXJsKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFVybCgpe1xyXG4gIHdpbmRvdy5vbnBvcHN0YXRlID0gZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGlmKGV2ZW50LnN0YXRlICE9PSBudWxsKXtcclxuICAgICAgZmluZENpdHkoZXZlbnQuc3RhdGUpO1xyXG4gICAgfVxyXG4gIH07XHJcbn0gKi9cclxuXHJcbmZ1bmN0aW9uIHNldEVycm9yKGVycm9yKXtcclxuICBsZXQgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xyXG4gIGxvYWRlci5jbGFzc0xpc3QuYWRkKCdub25lJyk7XHJcbiAgLyogXHJcbiAgaWYgKGVycm9yLnN0YXR1cyA9PT0gMjA0KSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYENpdHkgbm90IGZvdW5kLiBQbGVhc2UsIHRyeSBhZ2Fpbi5gXHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDApIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgU2VhcmNoIGZpZWxkIGlzIGVtcHR5LiBQbGVhc2UsIGVudGVyIGNpdHkgbmFtZWBcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGAke2Vycm9yLnN0YXR1c1RleHR9YCk7XHJcbiAgfSAqL1xyXG4gIGNvbnNvbGUubG9nKGVycm9yLnN0YXR1cylcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZENpdHkoY2l0eSkge1xyXG4gIC8qXHJcbiAgcHVzaFVybChjaXR5KTsgKi9cclxuICBsZXQgbG9hZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlcicpO1xyXG4gIGxvYWRlci5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7XHJcblxyXG4gIGdldFdlYXRoZXIoYC9kYWlseT9jaXR5PSR7Y2l0eX0mdW5pdHM9JHtkYXRhLnVuaXRzfWApXHJcbiAgICAudGhlbihmdW5jdGlvbihjaXR5KXtcclxuICAgICAgaWYgKGNpdHkpIHtcclxuICAgICAgICBsb2FkZXIuY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xyXG4gICAgICAgIHJlbmRlckNpdHkoY2l0eSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGNpdHk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHNldEVycm9yKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZmluZENpdHkgfTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvU2VhcmNoLmpzIiwiXHJcbmNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vYXBpLndlYXRoZXJiaXQuaW8vdjIuMC9mb3JlY2FzdCc7XHJcbmNvbnN0IEtFWSA9ICdjNjk3NmE0YzRlMDU0MjFmOWI0ZWFlZTdhMzExZjBkYyc7XHJcblxyXG5jb25zdCBnZXRXZWF0aGVyID0gdXJsID0+IGZldGNoKGAke0JBU0VfVVJMfSR7dXJsfSZrZXk9JHtLRVl9YClcclxuICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICBpZiAocmVzcG9uc2Uuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KHJlc3BvbnNlKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZXNwb25zZSlcclxuICB9KVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgfSkgXHJcbiAgXHJcbmV4cG9ydCB7Z2V0V2VhdGhlcn07ICBcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQXBpLmpzIiwiaW1wb3J0IFwiLi9hc3NldHMvc2Fzcy9hcHAuc2Fzc1wiO1xyXG5pbXBvcnQgQXBwIGZyb20gXCIuL2NvbXBvbmVudHMvQXBwXCI7XHJcblxyXG5sZXQgYXBwbCA9IG5ldyBBcHAoeyBob3N0OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpfSk7XHJcbmFwcGwudXBkYXRlKCk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Fzcy9hcHAuc2Fzc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi4vZGVmYXVsdC9hcHBcIjtcclxuaW1wb3J0IExvY2F0aW9uU2VhcmNoIGZyb20gXCIuL0xvY2F0aW9uU2VhcmNoXCI7XHJcbmltcG9ydCBSZW5kZXIgZnJvbSBcIi4uL2Fzc2V0cy9qcy9yZW5kZXJcIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IHsgZmluZENpdHkgfSBmcm9tIFwiLi9TZWFyY2hcIjtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IoeyBob3N0IH0pIHtcclxuICAgIHN1cGVyKCk7XHJcblxyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgY2l0eTogbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKS5nZXQoXCJjaXR5XCIpIHx8IFwiXCIsXHJcbiAgICAgIGlzTG9hZGVkOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaG9zdCA9IGhvc3Q7XHJcblxyXG4gICAgdGhpcy5sb2NhdGlvbkVsZW1lbnQgPSBuZXcgTG9jYXRpb25TZWFyY2goe1xyXG4gICAgICBjaXR5OiB0aGlzLnN0YXRlLmNpdHksXHJcbiAgICAgIG9uU3VibWl0OiB0aGlzLm9uU2VhcmNoU3VibWl0XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmhvc3QpO1xyXG4gICAgdGhpcy5vblNlYXJjaFN1Ym1pdCA9IHRoaXMub25TZWFyY2hTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgIHRoaXMubWFpbkVsZW1lbnQgPSBuZXcgUmVuZGVyKCk7XHJcbiAgICB0aGlzLmZvb3RlckVsZW1lbnQgPSBuZXcgRm9vdGVyKCk7XHJcbiAgfVxyXG5cclxuICBvblNlYXJjaFN1Ym1pdChjaXR5KSB7XHJcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHsgY2l0eSB9KTtcclxuICAgIGZpbmRDaXR5KGNpdHkpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgeyBjaXR5IH0gPSB0aGlzLnN0YXRlO1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgIHRoaXMubG9jYXRpb25FbGVtZW50LnVwZGF0ZSh7IGNpdHksIG9uU3VibWl0OiB0aGlzLm9uU2VhcmNoU3VibWl0IH0pLFxyXG4gICAgICB0aGlzLm1haW5FbGVtZW50LnJlbmRlcigpLFxyXG4gICAgICB0aGlzLmZvb3RlckVsZW1lbnQudXBkYXRlKClcclxuICAgIF07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHA7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQXBwLmpzIiwiY2xhc3MgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgIHRoaXMucHJvcHMgPSBwcm9wcyB8fCB7fTtcclxuICAgICAgdGhpcy5zdGF0ZSA9IHt9O1xyXG4gIFxyXG4gICAgICB0aGlzLmhvc3QgPSBudWxsO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgdXBkYXRlU3RhdGUobmV4dFN0YXRlKSB7XHJcbiAgICAgIHRoaXMuc3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnN0YXRlLCBuZXh0U3RhdGUpO1xyXG4gICAgICB0aGlzLl9yZW5kZXIoKTtcclxuICAgIH1cclxuICBcclxuICAgIHVwZGF0ZShuZXh0UHJvcHMpIHtcclxuICAgICAgdGhpcy5wcm9wcyA9IG5leHRQcm9wcztcclxuICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcigpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgX3JlbmRlcigpIHtcclxuICAgICAgY29uc3QgY2hpbGRyZW4gPSB0aGlzLnJlbmRlcigpO1xyXG4gIFxyXG4gICAgICB0aGlzLmhvc3QuaW5uZXJIVE1MID0gJyc7XHJcbiAgXHJcbiAgICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgdGhpcy5ob3N0LmlubmVySFRNTCA9IGNoaWxkcmVuO1xyXG4gICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGRyZW4pKSB7XHJcbiAgICAgICAgdGhpcy5ob3N0LmFwcGVuZCguLi5jaGlsZHJlbik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ob3N0LmFwcGVuZChjaGlsZHJlbik7XHJcbiAgICAgIH1cclxuICBcclxuICAgICAgY29uc29sZS5sb2codGhpcy5ob3N0KTtcclxuICAgICAgcmV0dXJuIHRoaXMuaG9zdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmVuZGVyKCkge31cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xyXG4gIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlZmF1bHQvQ29tcG9uZW50LmpzIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uL2RlZmF1bHQvYXBwXCJcclxuaW1wb3J0IHsgZmluZENpdHkgfSBmcm9tIFwiLi9TZWFyY2hcIjtcclxuaW1wb3J0IFwiLi4vYXNzZXRzL21lZGlhL2xvYWRlci5zdmdcIjtcclxuXHJcbmNsYXNzIExvY2F0aW9uU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcclxuXHJcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24td3JhcHBlcicpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlU3VibWl0KGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBjaXR5ID0gZS50YXJnZXQuZWxlbWVudHMuc2VhcmNoLnZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZighY2l0eS5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtpc1ZhbGlkOiBmYWxzZX0pXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TdWJtaXQoY2l0eSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHtpc1ZhbGlkfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3Qge2NpdHl9ID0gdGhpcy5wcm9wcztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByb3BzKTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9hZGVyIG5vbmVcIj5cclxuICAgICAgICAgICAgICAgIDxvYmplY3QgZGF0YT1cImFzc2V0cy9tZWRpYS9sb2FkZXIuc3ZnXCI+PC9vYmplY3Q+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3M9XCJ0aXRsZVwiPldlYXRoZXItYXBwPC9oMT5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9JHtpc1ZhbGlkID8gJ1wid2VhdGhlci1mb3JtXCInIDogJ1wid2VhdGhlci1mb3JtIC0taW52YWxpZFwiJ30+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IG5hbWU9XCJzZWFyY2hcIiByZXF1aXJlZCBjbGFzcz1cInNlYXJjaC13ZWF0aGVyXCIgdmFsdWU9XCIke2NpdHl9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIndlYXRoZXItc2VhcmNoLXN1Ym1pdFwiPlNlYXJjaDwvYnV0dG9uPi5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgYDtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25TZWFyY2hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xvY2F0aW9uU2VhcmNoLmpzIiwiaW1wb3J0IHtwYXJzZWRVcmwsIGRhdGFET00sIGRhdGF9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQge2ZpbmRDaXR5fSBmcm9tIFwiLi9zZWFyY2hcIjtcclxuXHJcbi8qY2xlYXIgbG9jYWxzdG9yYWdlIGRhdGEqL1xyXG5mdW5jdGlvbiBjbGVhckxvY2FsU3RvcmFnZShET00sIGtleSkge1xyXG4gIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgRE9NLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgRE9NLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgdGhlcmUgYXJlIG5vICR7a2V5fSB5ZXRgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcHVzaEhpc3RvcnkoRE9NLCBzdG9yYWdlT2JqZWN0LCBjc3NDbGFzcywgbG9jYWxTdG9yYWdlS2V5KSB7XHJcbiAgICBpZiAoXHJcbiAgICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2b3JpdGVzXCIpICYmXHJcbiAgICAgIGxvY2FsU3RvcmFnZUtleSA9PT0gXCJmYXZvcml0ZXNcIiAmJlxyXG4gICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmF2b3JpdGVzXCIpKS5jaXR5LmluZGV4T2YoZGF0YS5jaXR5KSAhPVxyXG4gICAgICAgIC0xXHJcbiAgICApIHtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN0b3JhZ2VPYmplY3QuY2l0eS5wdXNoKGRhdGEuY2l0eSk7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZU9iamVjdCkpO1xyXG4gICAgICBzaG93SGlzdG9yeShET00sIHN0b3JhZ2VPYmplY3QsIGNzc0NsYXNzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHNob3dIaXN0b3J5KERPTSwgc3RvcmFnZU9iamVjdCwgY3NzQ2xhc3MpIHtcclxuICAgIERPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgaWYgKHN0b3JhZ2VPYmplY3QpIHtcclxuXHJcbiAgICAgIHN0b3JhZ2VPYmplY3QuY2l0eS5tYXAoaSA9PiB7XHJcbiAgICAgICAgRE9NLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLGA8bGkgY2xhc3M9XCIke2Nzc0NsYXNzfVwiPiR7aX08L2xpPmApO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGxldCBoeXN0b3J5SXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlYmFyJyk7XHJcblxyXG4gICAgICBoeXN0b3J5SXRlbS5vbmNsaWNrID0gZXZlbnQgPT4ge1xyXG4gICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgaWYgKHRhcmdldCAmJiB0YXJnZXQudGFnTmFtZSA9PT0gJ0xJJyl7XHJcbiAgICAgICAgICBkYXRhLmNpdHkgPSB0YXJnZXQuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgZmluZENpdHkodGFyZ2V0LmlubmVySFRNTCk7XHJcbiAgICAgICAgfSBcclxuICAgICAgfTtcclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBleHBvcnQge3B1c2hIaXN0b3J5LCBzaG93SGlzdG9yeSwgY2xlYXJMb2NhbFN0b3JhZ2V9XHJcblxyXG4gIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9sb2NhbFN0b3JhZ2UuanMiLCJpbXBvcnQgeyBwYXJzZWRVcmwsIGRhdGFET00sIGRhdGEgfSBmcm9tIFwiLi9jb25maWdcIjtcclxuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0FwaVwiO1xyXG5pbXBvcnQgeyByZW5kZXJDaXR5IH0gZnJvbSBcIi4vcmVuZGVyXCI7XHJcbi8qaW1wb3J0IHsgcHVzaEhpc3RvcnksIHNob3dIaXN0b3J5LCBjbGVhckxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiOyovXHJcblxyXG4vL3B1c2ggY3VycmVudCBjaXR5IHRvIFVSTFxyXG4vKiBmdW5jdGlvbiBwdXNoVXJsKGNpdHkpIHtcclxuICBsZXQgdXJsID0gYGluZGV4Lmh0bWw/Y2l0eT0ke2NpdHl9YDtcclxuICBoaXN0b3J5LnB1c2hTdGF0ZShjaXR5LCBudWxsLCB1cmwpO1xyXG4gIGxldCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICBnZXRVcmwoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXJsKCl7XHJcbiAgd2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYoZXZlbnQuc3RhdGUgIT09IG51bGwpe1xyXG4gICAgICBmaW5kQ2l0eShldmVudC5zdGF0ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxufSAqL1xyXG5cclxuZnVuY3Rpb24gc2V0RXJyb3IoZXJyb3Ipe1xyXG4gIC8qIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xyXG4gIGlmIChlcnJvci5zdGF0dXMgPT09IDIwNCkge1xyXG4gICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgIGBDaXR5IG5vdCBmb3VuZC4gUGxlYXNlLCB0cnkgYWdhaW4uYFxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYFNlYXJjaCBmaWVsZCBpcyBlbXB0eS4gUGxlYXNlLCBlbnRlciBjaXR5IG5hbWVgXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgJHtlcnJvci5zdGF0dXNUZXh0fWApO1xyXG4gIH0gKi9cclxufVxyXG5cclxuZnVuY3Rpb24gZmluZENpdHkoY2l0eSkge1xyXG4gIC8qIGRhdGFET00ubWFpbkRPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGRhdGFET00udGl0bGVET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICBkYXRhRE9NLmxvYWRlckRPTS5jbGFzc0xpc3QucmVtb3ZlKFwibm9uZVwiKTsgLy9zaG93IGxvYWRlclxyXG4gIHB1c2hVcmwoY2l0eSk7ICovXHJcblxyXG4gIGdldFdlYXRoZXIoYC9kYWlseT9jaXR5PSR7Y2l0eX0mdW5pdHM9JHtkYXRhLnVuaXRzfSZrZXk9JHtkYXRhLnNlY3JldEtleX1gKVxyXG4gICAgLnRoZW4oZnVuY3Rpb24oYm9keSl7XHJcbiAgICAgIGlmIChib2R5KSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnKTtcclxuICAgICAgICByZW5kZXJDaXR5KGJvZHkpO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBib2R5O1xyXG4gICAgfSlcclxuICAgIC5jYXRjaChzZXRFcnJvcik7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGZpbmRDaXR5IH07XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvc2VhcmNoLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYzA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZDAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZDAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZDAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvZjAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9mMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvcjA2ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDZkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvczA2ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDZkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDAxZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDFkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDAzZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDNkLnN2Z1xuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA0ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDRkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA2ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDZkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdDA3ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDdkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvdTAwZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy91MDBkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4uL2RlZmF1bHQvYXBwXCJcclxuXHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAyMDE3IFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+4oCiPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIGljb25zIHRha2VuIGZyb20gZmxhdGljb24uY29tLCBhbmltYXRlZCBzdmcgdGFrZW4gZnJvbSBhbWNoYXJ0cy5jb20gKElQTCksIFxyXG4gICAgICAgICAgICAgICAgd2VhdGhlciBkYXRhIGJyaWduIGJ5IHdlYXRoZXJiaXQuaW8gQVBJIFxyXG4gICAgICAgICAgICAgICAgPHNwYW4+4oCiPC9zcGFuPiBcclxuICAgICAgICAgICAgICAgIG1hZGUgYnkgQWxleCBOZWxpblxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgYDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2xvYWRlci5zdmdcbi8vIG1vZHVsZSBpZCA9IDUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=