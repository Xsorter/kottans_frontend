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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(1);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var appl = new _App2.default();
var appT = appl.render();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _LocationSearch = __webpack_require__(3);

var _LocationSearch2 = _interopRequireDefault(_LocationSearch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.locationElement = new _LocationSearch2.default();
    this.rootElement = document.getElementById('root');
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      this.rootElement.appendChild(this.locationElement.render());
    }
  }]);

  return App;
}();

exports.default = App;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Search = __webpack_require__(13);

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
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findCity = undefined;

var _config = __webpack_require__(8);

var _Api = __webpack_require__(10);

var _render = __webpack_require__(11);

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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderCity = undefined;

var _config = __webpack_require__(8);

var _localStorage = __webpack_require__(12);

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
  var documentFragment = document.createDocumentFragment();
  var mainWrapper = document.querySelector('.location-wrapper');

  for (var i = 0; i < _config.data.period; i++) {
    var contentWrapper = document.createElement("div");
    contentWrapper.className = "content";
    contentWrapper.insertAdjacentHTML("beforeend", "\n        <div class=\"content__values\">\n          <p>\n            <span class=\"caption__number\">" + body.data[i].temp + "</span> " + _config.data.unitsDisplay + "\n            <p class=\"caption__title\">avg. temp.</p> \n          </p>\n          <object data=\"assets/media/" + body.data[i].weather.icon + ".svg\" type=\"\">\n          </object>\n          <p class=\"caption__title\">" + body.data[i].weather.description + "</p> \n        </div>\n        <p class=\"date\">" + body.data[i].datetime.split("-").reverse().join(".") + "\n        </p> \n        <p>max. temp.: " + body.data[i].max_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>min. temp.: " + body.data[i].min_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>feels like, max: " + body.data[i].app_max_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>feels like, min: " + body.data[i].app_min_temp + " " + _config.data.unitsDisplay + "</p>\n        <p>wind: " + body.data[i].wind_spd + " m/s</p>\n        <p>precipitation: " + body.data[i].pop + " %</p>\n      ");
    documentFragment.appendChild(contentWrapper);
  }

  mainWrapper.appendChild(documentFragment);
}

exports.renderCity = renderCity;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clearLocalStorage = exports.showHistory = exports.pushHistory = undefined;

var _config = __webpack_require__(8);

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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findCity = undefined;

var _config = __webpack_require__(8);

var _Api = __webpack_require__(10);

var _render = __webpack_require__(11);

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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTVmMjM2NDM0MDZkZGFhNTI4NDkiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zYXNzL2FwcC5zYXNzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBwLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTG9jYXRpb25TZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvc2VhcmNoLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9yZW5kZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1NlYXJjaC5qcyJdLCJuYW1lcyI6WyJhcHBsIiwiYXBwVCIsInJlbmRlciIsIkFwcCIsImxvY2F0aW9uRWxlbWVudCIsInJvb3RFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFwcGVuZENoaWxkIiwiTG9jYXRpb25TZWFyY2giLCJzdGF0ZSIsImlzVmFsaWQiLCJoYW5kbGVTdWJtaXQiLCJiaW5kIiwiaG9zdCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwibmV4dFN0YXRlIiwiT2JqZWN0IiwiYXNzaWduIiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2l0eSIsInRhcmdldCIsImVsZW1lbnRzIiwic2VhcmNoIiwidmFsdWUiLCJ0cmltIiwibGVuZ3RoIiwidXBkYXRlU3RhdGUiLCJpbm5lckhUTUwiLCJwYXJzZWRVcmwiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkYXRhRE9NIiwiZm9ybURPTSIsInF1ZXJ5U2VsZWN0b3IiLCJpbnB1dERPTSIsIm1haW5ET00iLCJ0aXRsZURPTSIsInVuaXRzRE9NIiwicGVyaW9kRE9NIiwiaGlzdG9yeURPTSIsImZhdm9yaXRlc0RPTSIsImJ1dHRvbkhpc3RvcnlDbGVhciIsImJ1dHRvbkZhdm9yaXRlc0NsZWFyIiwibG9hZGVyRE9NIiwiZGF0YSIsInNlYXJjaFBhcmFtcyIsImdldCIsInNlY3JldEtleSIsInVuaXRzIiwidW5pdHNEaXNwbGF5IiwicGVyaW9kIiwiaGlzdG9yeU9iaiIsImZhdm9yaXRlT2JqIiwic2V0RXJyb3IiLCJlcnJvciIsImZpbmRDaXR5IiwidGhlbiIsImJvZHkiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJCQVNFX1VSTCIsImdldFdlYXRoZXIiLCJmZXRjaCIsInVybCIsInJlc3BvbnNlIiwic3RhdHVzIiwiUHJvbWlzZSIsInJlamVjdCIsInJlc29sdmUiLCJqc29uIiwicmVuZGVyQ2l0eSIsImRvY3VtZW50RnJhZ21lbnQiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwibWFpbldyYXBwZXIiLCJpIiwiY29udGVudFdyYXBwZXIiLCJjbGFzc05hbWUiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJ0ZW1wIiwid2VhdGhlciIsImljb24iLCJkZXNjcmlwdGlvbiIsImRhdGV0aW1lIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsIm1heF90ZW1wIiwibWluX3RlbXAiLCJhcHBfbWF4X3RlbXAiLCJhcHBfbWluX3RlbXAiLCJ3aW5kX3NwZCIsInBvcCIsImNsZWFyTG9jYWxTdG9yYWdlIiwiRE9NIiwia2V5IiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsInB1c2hIaXN0b3J5Iiwic3RvcmFnZU9iamVjdCIsImNzc0NsYXNzIiwibG9jYWxTdG9yYWdlS2V5IiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsImluZGV4T2YiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInNob3dIaXN0b3J5IiwibWFwIiwiaHlzdG9yeUl0ZW0iLCJvbmNsaWNrIiwiZXZlbnQiLCJ0YWdOYW1lIl0sIm1hcHBpbmdzIjoi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Ozs7Ozs7OztBQWVBLFNBQVN4QyxRQUFULENBQWtCQyxLQUFsQixFQUF3QjtBQUN0Qjs7Ozs7Ozs7Ozs7Ozs7QUFjQUksVUFBUUMsR0FBUixDQUFZTCxNQUFNWSxNQUFsQjtBQUNEOztBQUVELFNBQVNYLFFBQVQsQ0FBa0J0QyxJQUFsQixFQUF3QjtBQUN0Qjs7Ozs7QUFLQSx3Q0FBMEJBLElBQTFCLGVBQXdDLGFBQUsrQixLQUE3QyxhQUEwRCxhQUFLRCxTQUEvRCxFQUNHUyxJQURILENBQ1EsVUFBU0MsSUFBVCxFQUFjO0FBQ2xCLFFBQUlBLElBQUosRUFBVTtBQUNSQyxjQUFRQyxHQUFSLENBQVksU0FBWjtBQUNBLDhCQUFXRixJQUFYO0FBQ0Q7QUFDRCxXQUFPQSxJQUFQO0FBQ0QsR0FQSCxFQVFHRyxLQVJILENBUVNQLFFBUlQ7QUFTRDs7UUFFUUUsUSxHQUFBQSxRIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL2FwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAxNWYyMzY0MzQwNmRkYWE1Mjg0OSIsImltcG9ydCBcIi4vYXNzZXRzL3Nhc3MvYXBwLnNhc3NcIjtcclxuaW1wb3J0IEFwcCBmcm9tIFwiLi9jb21wb25lbnRzL0FwcFwiO1xyXG5cclxuXHJcbmxldCBhcHBsID0gbmV3IEFwcDtcclxubGV0IGFwcFQgPSBhcHBsLnJlbmRlcigpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3Nhc3MvYXBwLnNhc3Ncbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IExvY2F0aW9uU2VhcmNoIGZyb20gXCIuL0xvY2F0aW9uU2VhcmNoXCI7XHJcblxyXG5jbGFzcyBBcHB7XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMubG9jYXRpb25FbGVtZW50ID0gbmV3IExvY2F0aW9uU2VhcmNoKCk7XHJcbiAgICB0aGlzLnJvb3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpe1xyXG4gICAgdGhpcy5yb290RWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLmxvY2F0aW9uRWxlbWVudC5yZW5kZXIoKSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBcHBcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQXBwLmpzIiwiaW1wb3J0IHsgZmluZENpdHkgfSBmcm9tIFwiLi9TZWFyY2hcIjtcclxuXHJcbmNsYXNzIExvY2F0aW9uU2VhcmNoIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcclxuICAgICAgICB0aGlzLmhvc3QuY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24td3JhcHBlcicpO1xyXG4gICAgICAgIHRoaXMuaG9zdC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLmhhbmRsZVN1Ym1pdCk7XHJcbiAgICB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgdXBkYXRlU3RhdGUobmV4dFN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIG5leHRTdGF0ZSk7XHJcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVTdWJtaXQoZSl7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IGNpdHkgPSBlLnRhcmdldC5lbGVtZW50cy5zZWFyY2gudmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGZpbmRDaXR5KGNpdHkpO1xyXG5cclxuICAgICAgICBpZighY2l0eS5sZW5ndGgpe1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVN0YXRlKHtpc1ZhbGlkOiBmYWxzZX0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7aXNWYWxpZH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgICAgIHRoaXMuaG9zdC5pbm5lckhUTUwgPSBgXHJcbiAgICAgICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+V2VhdGhlci1hcHA8L2gxPlxyXG4gICAgICAgICAgICA8Zm9ybSBjbGFzcz0ke2lzVmFsaWQgPyAnXCJ3ZWF0aGVyLWZvcm1cIicgOiAnXCJ3ZWF0aGVyLWZvcm0gLS1pbnZhbGlkXCInfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbmFtZT1cInNlYXJjaFwiIHJlcXVpcmVkIGNsYXNzPVwic2VhcmNoLXdlYXRoZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwid2VhdGhlci1zZWFyY2gtc3VibWl0XCI+U2VhcmNoPC9idXR0b24+LlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICBgO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5ob3N0XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25TZWFyY2hcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0xvY2F0aW9uU2VhcmNoLmpzIiwiLy9nZXQgY3VycmVudCB1cmxcclxubGV0IHBhcnNlZFVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG5cclxuLy9vYmplY3Qgd2l0aCBET00gZWxlbWVudHNcclxuY29uc3QgZGF0YURPTSA9IHtcclxuICBmb3JtRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaC1mb3JtXCIpLFxyXG4gIGlucHV0RE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NlYXJjaFwiKSxcclxuICBtYWluRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndyYXBwZXJcIiksXHJcbiAgdGl0bGVET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVzY3JpcHRpb25cIiksXHJcbiAgdW5pdHNET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdW5pdHNcIiksXHJcbiAgcGVyaW9kRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3BlcmlvZFwiKSxcclxuICBoaXN0b3J5RE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpc3RvcnlcIiksXHJcbiAgZmF2b3JpdGVzRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZhdm9yaXRlc1wiKSxcclxuICBidXR0b25IaXN0b3J5Q2xlYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjaGlzdG9yeS1jbGVhclwiKSxcclxuICBidXR0b25GYXZvcml0ZXNDbGVhcjogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmYXZvcml0ZXMtY2xlYXJcIiksXHJcbiAgbG9hZGVyRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvYWRlclwiKVxyXG59O1xyXG5cclxubGV0IGRhdGEgPSB7XHJcbiAgY2l0eTogcGFyc2VkVXJsLnNlYXJjaFBhcmFtcy5nZXQoXCJjaXR5XCIpLFxyXG5cclxuICAvL2FwaSBrZXlcclxuICBzZWNyZXRLZXk6IFwiYzY5NzZhNGM0ZTA1NDIxZjliNGVhZWU3YTMxMWYwZGNcIixcclxuICB1bml0czogXCJNXCIsXHJcbiAgdW5pdHNEaXNwbGF5OiBcIkNcIixcclxuICBwZXJpb2Q6IDEsXHJcblxyXG4gIC8vbG9jYWxzdG9yYWdlIG9iamVjdHNcclxuICBoaXN0b3J5T2JqOiB7XHJcbiAgICBjaXR5OiBbXVxyXG4gIH0sXHJcbiAgZmF2b3JpdGVPYmo6IHtcclxuICAgIGNpdHk6IFtdXHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgcGFyc2VkVXJsLCBkYXRhRE9NLCBkYXRhIH07XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2NvbmZpZy5qcyIsImltcG9ydCB7IHBhcnNlZFVybCwgZGF0YURPTSwgZGF0YSB9IGZyb20gXCIuL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvQXBpXCI7XHJcbmltcG9ydCB7IHJlbmRlckNpdHkgfSBmcm9tIFwiLi9yZW5kZXJcIjtcclxuLyppbXBvcnQgeyBwdXNoSGlzdG9yeSwgc2hvd0hpc3RvcnksIGNsZWFyTG9jYWxTdG9yYWdlIH0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7Ki9cclxuXHJcbi8vcHVzaCBjdXJyZW50IGNpdHkgdG8gVVJMXHJcbi8qIGZ1bmN0aW9uIHB1c2hVcmwoY2l0eSkge1xyXG4gIGxldCB1cmwgPSBgaW5kZXguaHRtbD9jaXR5PSR7Y2l0eX1gO1xyXG4gIGhpc3RvcnkucHVzaFN0YXRlKGNpdHksIG51bGwsIHVybCk7XHJcbiAgbGV0IHBhcnNlZFVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gIGdldFVybCgpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRVcmwoKXtcclxuICB3aW5kb3cub25wb3BzdGF0ZSA9IGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBpZihldmVudC5zdGF0ZSAhPT0gbnVsbCl7XHJcbiAgICAgIGZpbmRDaXR5KGV2ZW50LnN0YXRlKTtcclxuICAgIH1cclxuICB9O1xyXG59ICovXHJcblxyXG5mdW5jdGlvbiBzZXRFcnJvcihlcnJvcil7XHJcbiAgLyogZGF0YURPTS5sb2FkZXJET00uY2xhc3NMaXN0LmFkZChcIm5vbmVcIik7XHJcbiAgaWYgKGVycm9yLnN0YXR1cyA9PT0gMjA0KSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYENpdHkgbm90IGZvdW5kLiBQbGVhc2UsIHRyeSBhZ2Fpbi5gXHJcbiAgICApO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDApIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgU2VhcmNoIGZpZWxkIGlzIGVtcHR5LiBQbGVhc2UsIGVudGVyIGNpdHkgbmFtZWBcclxuICAgICk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGAke2Vycm9yLnN0YXR1c1RleHR9YCk7XHJcbiAgfSAqL1xyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kQ2l0eShjaXR5KSB7XHJcbiAgLyogZGF0YURPTS5tYWluRE9NLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgZGF0YURPTS50aXRsZURPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5yZW1vdmUoXCJub25lXCIpOyAvL3Nob3cgbG9hZGVyXHJcbiAgcHVzaFVybChjaXR5KTsgKi9cclxuXHJcbiAgZ2V0V2VhdGhlcihgL2RhaWx5P2NpdHk9JHtjaXR5fSZ1bml0cz0ke2RhdGEudW5pdHN9JmtleT0ke2RhdGEuc2VjcmV0S2V5fWApXHJcbiAgICAudGhlbihmdW5jdGlvbihib2R5KXtcclxuICAgICAgaWYgKGJvZHkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnc3VjY2VzcycpO1xyXG4gICAgICAgIHJlbmRlckNpdHkoYm9keSk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKHNldEVycm9yKTtcclxufVxyXG5cclxuZXhwb3J0IHsgZmluZENpdHkgfTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9zZWFyY2guanMiLCJcclxuY29uc3QgQkFTRV9VUkwgPSAnaHR0cHM6Ly9hcGkud2VhdGhlcmJpdC5pby92Mi4wL2ZvcmVjYXN0JztcclxuY29uc3QgZ2V0V2VhdGhlciA9IHVybCA9PiBmZXRjaChgJHtCQVNFX1VSTH0ke3VybH1gKVxyXG4gIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgIGlmIChyZXNwb25zZS5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QocmVzcG9uc2UpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKVxyXG4gIH0pXHJcbiAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICB9KSBcclxuICBcclxuZXhwb3J0IHtnZXRXZWF0aGVyfTsgIFxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9BcGkuanMiLCJpbXBvcnQge3BhcnNlZFVybCwgZGF0YURPTSwgZGF0YX0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7cHVzaEhpc3RvcnksIHNob3dIaXN0b3J5fSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2VcIjtcclxuXHJcbi8qIGZ1bmN0aW9uIGFkZEZhdm9yaXRlQnV0dG9uKGJvZHkpIHtcclxuICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFxyXG4gICAgICBcImJlZm9yZWVuZFwiLFxyXG4gICAgICBgQ3VycmVudCBjaXR5OiAke2JvZHkuY2l0eV9uYW1lfSBcclxuICAgICAgICA8aW1nIGlkPVwiZmF2b3JpdGVzXCIgc3JjPVwiYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nXCI+XHJcbiAgICAgICAgYFxyXG4gICAgKTtcclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zhdm9yaXRlc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHB1c2hIaXN0b3J5KFxyXG4gICAgICAgIGRhdGFET00uZmF2b3JpdGVzRE9NLFxyXG4gICAgICAgIGRhdGEuZmF2b3JpdGVPYmosXHJcbiAgICAgICAgXCJmYXZvcml0ZS1pdGVtXCIsXHJcbiAgICAgICAgXCJmYXZvcml0ZXNcIlxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfSAqL1xyXG5cclxuLy9yZW5kZXIgbWV0aG9kXHJcbmZ1bmN0aW9uIHJlbmRlckNpdHkoYm9keSkge1xyXG4gIC8qIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpOyAqL1xyXG4gIC8qIGFkZEZhdm9yaXRlQnV0dG9uKGJvZHkpOyAqL1xyXG5cclxuICAvL2NyZWF0ZSBjb250YWluZXIgZm9yIGluc2VydGluZyBkYXRhIGZyb20gbG9vcFxyXG4gIGxldCBkb2N1bWVudEZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gIGxldCBtYWluV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbi13cmFwcGVyJyk7XHJcblxyXG4gIGZvciAobGV0IGk9MDsgaTxkYXRhLnBlcmlvZDsgaSsrKSB7XHJcbiAgICBsZXQgY29udGVudFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGVudFdyYXBwZXIuY2xhc3NOYW1lID0gXCJjb250ZW50XCI7XHJcbiAgICBjb250ZW50V3JhcHBlci5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXHJcbiAgICAgIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudF9fdmFsdWVzXCI+XHJcbiAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXB0aW9uX19udW1iZXJcIj4ke2JvZHkuZGF0YVtpXS50ZW1wfTwvc3Bhbj4gJHtkYXRhLnVuaXRzRGlzcGxheX1cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXB0aW9uX190aXRsZVwiPmF2Zy4gdGVtcC48L3A+IFxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPG9iamVjdCBkYXRhPVwiYXNzZXRzL21lZGlhLyR7Ym9keS5kYXRhW2ldLndlYXRoZXIuaWNvbn0uc3ZnXCIgdHlwZT1cIlwiPlxyXG4gICAgICAgICAgPC9vYmplY3Q+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cImNhcHRpb25fX3RpdGxlXCI+JHtib2R5LmRhdGFbaV0ud2VhdGhlci5kZXNjcmlwdGlvbn08L3A+IFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPiR7Ym9keS5kYXRhW2ldLmRhdGV0aW1lXHJcbiAgICAgICAgICAuc3BsaXQoXCItXCIpXHJcbiAgICAgICAgICAucmV2ZXJzZSgpXHJcbiAgICAgICAgICAuam9pbihcIi5cIil9XHJcbiAgICAgICAgPC9wPiBcclxuICAgICAgICA8cD5tYXguIHRlbXAuOiAke2JvZHkuZGF0YVtpXS5tYXhfdGVtcH0gJHtkYXRhLnVuaXRzRGlzcGxheX08L3A+XHJcbiAgICAgICAgPHA+bWluLiB0ZW1wLjogJHtib2R5LmRhdGFbaV0ubWluX3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgIDxwPmZlZWxzIGxpa2UsIG1heDogJHtib2R5LmRhdGFbaV0uYXBwX21heF90ZW1wfSAke2RhdGEudW5pdHNEaXNwbGF5fTwvcD5cclxuICAgICAgICA8cD5mZWVscyBsaWtlLCBtaW46ICR7Ym9keS5kYXRhW2ldLmFwcF9taW5fdGVtcH0gJHtkYXRhLnVuaXRzRGlzcGxheX08L3A+XHJcbiAgICAgICAgPHA+d2luZDogJHtib2R5LmRhdGFbaV0ud2luZF9zcGR9IG0vczwvcD5cclxuICAgICAgICA8cD5wcmVjaXBpdGF0aW9uOiAke2JvZHkuZGF0YVtpXS5wb3B9ICU8L3A+XHJcbiAgICAgIGBcclxuICAgICk7XHJcbiAgICBkb2N1bWVudEZyYWdtZW50LmFwcGVuZENoaWxkKGNvbnRlbnRXcmFwcGVyKTtcclxuICB9XHJcblxyXG4gIG1haW5XcmFwcGVyLmFwcGVuZENoaWxkKGRvY3VtZW50RnJhZ21lbnQpO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IHtyZW5kZXJDaXR5fTtcclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9yZW5kZXIuanMiLCJpbXBvcnQge3BhcnNlZFVybCwgZGF0YURPTSwgZGF0YX0gZnJvbSBcIi4vY29uZmlnXCI7XHJcbmltcG9ydCB7ZmluZENpdHl9IGZyb20gXCIuL3NlYXJjaFwiO1xyXG5cclxuLypjbGVhciBsb2NhbHN0b3JhZ2UgZGF0YSovXHJcbmZ1bmN0aW9uIGNsZWFyTG9jYWxTdG9yYWdlKERPTSwga2V5KSB7XHJcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICBET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICBET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsIGB0aGVyZSBhcmUgbm8gJHtrZXl9IHlldGApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwdXNoSGlzdG9yeShET00sIHN0b3JhZ2VPYmplY3QsIGNzc0NsYXNzLCBsb2NhbFN0b3JhZ2VLZXkpIHtcclxuICAgIGlmIChcclxuICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNcIikgJiZcclxuICAgICAgbG9jYWxTdG9yYWdlS2V5ID09PSBcImZhdm9yaXRlc1wiICYmXHJcbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmYXZvcml0ZXNcIikpLmNpdHkuaW5kZXhPZihkYXRhLmNpdHkpICE9XHJcbiAgICAgICAgLTFcclxuICAgICkge1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3RvcmFnZU9iamVjdC5jaXR5LnB1c2goZGF0YS5jaXR5KTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShzdG9yYWdlT2JqZWN0KSk7XHJcbiAgICAgIHNob3dIaXN0b3J5KERPTSwgc3RvcmFnZU9iamVjdCwgY3NzQ2xhc3MpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2hvd0hpc3RvcnkoRE9NLCBzdG9yYWdlT2JqZWN0LCBjc3NDbGFzcykge1xyXG4gICAgRE9NLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICBpZiAoc3RvcmFnZU9iamVjdCkge1xyXG5cclxuICAgICAgc3RvcmFnZU9iamVjdC5jaXR5Lm1hcChpID0+IHtcclxuICAgICAgICBET00uaW5zZXJ0QWRqYWNlbnRIVE1MKFwiYmVmb3JlZW5kXCIsYDxsaSBjbGFzcz1cIiR7Y3NzQ2xhc3N9XCI+JHtpfTwvbGk+YCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgbGV0IGh5c3RvcnlJdGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcclxuXHJcbiAgICAgIGh5c3RvcnlJdGVtLm9uY2xpY2sgPSBldmVudCA9PiB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICBpZiAodGFyZ2V0ICYmIHRhcmdldC50YWdOYW1lID09PSAnTEknKXtcclxuICAgICAgICAgIGRhdGEuY2l0eSA9IHRhcmdldC5pbm5lckhUTUw7XHJcbiAgICAgICAgICBmaW5kQ2l0eSh0YXJnZXQuaW5uZXJIVE1MKTtcclxuICAgICAgICB9IFxyXG4gICAgICB9O1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cG9ydCB7cHVzaEhpc3RvcnksIHNob3dIaXN0b3J5LCBjbGVhckxvY2FsU3RvcmFnZX1cclxuXHJcbiAgXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2xvY2FsU3RvcmFnZS5qcyIsImltcG9ydCB7IHBhcnNlZFVybCwgZGF0YURPTSwgZGF0YSB9IGZyb20gXCIuLi9hc3NldHMvanMvY29uZmlnXCI7XHJcbmltcG9ydCB7IGdldFdlYXRoZXIgfSBmcm9tIFwiLi9BcGlcIjtcclxuaW1wb3J0IHsgcmVuZGVyQ2l0eSB9IGZyb20gXCIuLi9hc3NldHMvanMvcmVuZGVyXCI7XHJcbi8qaW1wb3J0IHsgcHVzaEhpc3RvcnksIHNob3dIaXN0b3J5LCBjbGVhckxvY2FsU3RvcmFnZSB9IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiOyovXHJcblxyXG4vL3B1c2ggY3VycmVudCBjaXR5IHRvIFVSTFxyXG4vKiBmdW5jdGlvbiBwdXNoVXJsKGNpdHkpIHtcclxuICBsZXQgdXJsID0gYGluZGV4Lmh0bWw/Y2l0eT0ke2NpdHl9YDtcclxuICBoaXN0b3J5LnB1c2hTdGF0ZShjaXR5LCBudWxsLCB1cmwpO1xyXG4gIGxldCBwYXJzZWRVcmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICBnZXRVcmwoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VXJsKCl7XHJcbiAgd2luZG93Lm9ucG9wc3RhdGUgPSBmdW5jdGlvbihldmVudCkge1xyXG4gICAgaWYoZXZlbnQuc3RhdGUgIT09IG51bGwpe1xyXG4gICAgICBmaW5kQ2l0eShldmVudC5zdGF0ZSk7XHJcbiAgICB9XHJcbiAgfTtcclxufSAqL1xyXG5cclxuZnVuY3Rpb24gc2V0RXJyb3IoZXJyb3Ipe1xyXG4gIC8qIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5hZGQoXCJub25lXCIpO1xyXG4gIGlmIChlcnJvci5zdGF0dXMgPT09IDIwNCkge1xyXG4gICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoXHJcbiAgICAgIFwiYmVmb3JlZW5kXCIsXHJcbiAgICAgIGBDaXR5IG5vdCBmb3VuZC4gUGxlYXNlLCB0cnkgYWdhaW4uYFxyXG4gICAgKTtcclxuICB9IGVsc2UgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAwKSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcclxuICAgICAgXCJiZWZvcmVlbmRcIixcclxuICAgICAgYFNlYXJjaCBmaWVsZCBpcyBlbXB0eS4gUGxlYXNlLCBlbnRlciBjaXR5IG5hbWVgXHJcbiAgICApO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBgJHtlcnJvci5zdGF0dXNUZXh0fWApO1xyXG4gIH0gKi9cclxuICBjb25zb2xlLmxvZyhlcnJvci5zdGF0dXMpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRDaXR5KGNpdHkpIHtcclxuICAvKiBkYXRhRE9NLm1haW5ET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICBkYXRhRE9NLnRpdGxlRE9NLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgZGF0YURPTS5sb2FkZXJET00uY2xhc3NMaXN0LnJlbW92ZShcIm5vbmVcIik7IC8vc2hvdyBsb2FkZXJcclxuICBwdXNoVXJsKGNpdHkpOyAqL1xyXG5cclxuICBnZXRXZWF0aGVyKGAvZGFpbHk/Y2l0eT0ke2NpdHl9JnVuaXRzPSR7ZGF0YS51bml0c30ma2V5PSR7ZGF0YS5zZWNyZXRLZXl9YClcclxuICAgIC50aGVuKGZ1bmN0aW9uKGJvZHkpe1xyXG4gICAgICBpZiAoYm9keSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJyk7XHJcbiAgICAgICAgcmVuZGVyQ2l0eShib2R5KTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYm9keTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goc2V0RXJyb3IpO1xyXG59XHJcblxyXG5leHBvcnQgeyBmaW5kQ2l0eSB9O1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9TZWFyY2guanMiXSwic291cmNlUm9vdCI6IiJ9