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

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

__webpack_require__(10);

__webpack_require__(11);

__webpack_require__(40);

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

/******************************************
 * 2017.Weather application by Alex Nelin *
 * Based on weatherbit.io API             *
 ******************************************/

(function () {
    'use strict';

    //get current url

    var parsedUrl = new URL(window.location.href);

    //object with DOM elements
    var dataDOM = {
        formDOM: document.querySelector('#searchForm'),
        inputDOM: document.querySelector('#search'),
        mainDOM: document.querySelector('.main-wrapper'),
        titleDOM: document.querySelector('.main-title'),
        unitsDOM: document.querySelector('#units'),
        periodDOM: document.querySelector('#period'),
        historyDOM: document.querySelector('.main-history'),
        favoritesDOM: document.querySelector('.main-favorites'),
        buttonHistoryClear: document.querySelector('#historyClear'),
        buttonFavoritesClear: document.querySelector('#favoritesClear'),
        loaderDOM: document.querySelector('.loader-wrapper')
    };

    var data = {
        city: parsedUrl.searchParams.get("city"),

        //api key
        secretKey: 'c6976a4c4e05421f9b4eaee7a311f0dc',
        units: 'M',
        unitsDisplay: 'C',
        period: 1,

        //localstorage objects
        historyObj: {
            city: []
        },
        favoriteObj: {
            city: []
        }
    };

    window.addEventListener('load', function () {
        init();
    });

    function init() {

        //run fetch method, we have city in URL
        if (parsedUrl.searchParams.get("city")) {
            findCity(data.city);
        };

        //get values from localstorage, if any
        if (localStorage.getItem('history')) {
            data.historyObj = JSON.parse(localStorage.getItem('history'));
            showHistory(dataDOM.historyDOM, data.historyObj, 'history-item');
        }
        if (localStorage.getItem('favorites')) {
            data.favoriteObj = JSON.parse(localStorage.getItem('favorites'));
            showHistory(dataDOM.favoritesDOM, data.favoriteObj, 'favorite-item');
        }

        document.onclick = function (event) {
            var target = event.target;

            if (target && target === dataDOM.buttonHistoryClear) {
                clearLocalStorage(dataDOM.historyDOM, 'history');
            }

            if (target && target === dataDOM.buttonFavoritesClear) {
                clearLocalStorage(dataDOM.favoritesDOM, 'favorites');
            }
        };

        document.onchange = function (event) {
            var target = event.target;

            if (target && target === dataDOM.unitsDOM) {
                data.units = dataDOM.unitsDOM.options[document.querySelector('#units').selectedIndex].value;
                data.unitsDisplay = data.units === 'M' ? 'C' : 'F';
                if (data.city) {
                    findCity(data.city);
                }
            }

            if (target && target === dataDOM.periodDOM) {
                data.period = +dataDOM.periodDOM.options[document.querySelector('#period').selectedIndex].value;
                if (data.city) {
                    findCity(data.city);
                }
            }
        };

        dataDOM.formDOM.addEventListener('submit', function (e) {
            e.preventDefault();
            data.city = dataDOM.inputDOM.value;
            findCity(data.city);
            if (data.city) {
                pushHistory(dataDOM.historyDOM, data.historyObj, 'history-item', 'history');
            }
            return false;
        });
    }

    //localstorage methods for history and favorites
    function pushHistory(DOM, obj, cssClass, localStorageKey) {
        if (localStorage.getItem('favorites') && localStorageKey === 'favorites' && JSON.parse(localStorage.getItem('favorites')).city.indexOf(data.city) != -1) {} else {
            obj.city.push(data.city);
            localStorage.setItem(localStorageKey, JSON.stringify(obj));
            showHistory(DOM, obj, cssClass);
        }
    }

    function showHistory(DOM, obj, cssClass) {
        DOM.innerHTML = '';
        if (obj) {
            obj.city.map(function (i) {
                DOM.insertAdjacentHTML('beforeend', '<li class="' + cssClass + '">' + i + '</li>');
            });
            for (var i = 0; i < document.querySelectorAll('.' + cssClass).length; i++) {
                document.querySelectorAll('.' + cssClass)[i].addEventListener('click', function () {
                    data.city = this.innerHTML;
                    findCity(this.innerHTML);
                });
            }
        }
    }

    /*create buttons to clear localstorage data*/
    function clearLocalStorage(DOM, key) {
        localStorage.removeItem(key);
        DOM.innerHTML = '';
        console.log(DOM);
        DOM.insertAdjacentHTML('beforeend', 'there are no ' + key + ' yet');
    }

    function createFavoriteButton(body) {
        dataDOM.titleDOM.insertAdjacentHTML('beforeend', 'Current city: ' + body.city_name + ' \n        <img id="favorites" src="assets/media/favorites-button.png">\n        ');
        document.querySelector('#favorites').addEventListener('click', function () {
            pushHistory(dataDOM.favoritesDOM, data.favoriteObj, 'favorite-item', 'favorites');
        });
    }

    //push current city to URL
    function pushUrl(city) {
        var state = {};
        var title = city;
        var url = 'index.html?city=' + city;
        history.pushState(state, title, url);
        var parsedUrl = new URL(window.location.href);
    }

    //render method
    function renderCity(body) {
        dataDOM.loaderDOM.classList.add('none');
        createFavoriteButton(body);

        for (var i = 0; i < data.period; i++) {
            dataDOM.mainDOM.insertAdjacentHTML('beforeend',

            //template with weather data 
            '<div class="main-content-box main-content-box_count-' + i + '">\n                <div class="main-content-box_values">\n                    <p>\n                        <span class="number-caption">' + body.data[i].temp + '</span> ' + data.unitsDisplay + '\n                        <p class="title-caption">avg. temp.</p> \n                    </p>\n                    <object data="assets/media/' + body.data[i].weather.icon + '.svg" type=""></object>\n                    <p class="title-caption">' + body.data[i].weather.description + '</p> \n                </div>\n                <p class="date">' + body.data[i].datetime.split('-').reverse().join('.') + '</p> \n                <p>max. temp.: ' + body.data[i].max_temp + ' ' + data.unitsDisplay + '</p>\n                <p>min. temp.: ' + body.data[i].min_temp + ' ' + data.unitsDisplay + '</p>\n                <p>feels like, max: ' + body.data[i].app_max_temp + ' ' + data.unitsDisplay + '</p>\n                <p>feels like, min: ' + body.data[i].app_min_temp + ' ' + data.unitsDisplay + '</p>\n                <p>wind: ' + body.data[i].wind_spd + ' m/s</p>\n                <p>precipitation: ' + body.data[i].pop + ' %</p>\n            </div>\n            ');
        }
    }

    function findCity(city) {
        dataDOM.mainDOM.innerHTML = "";
        dataDOM.titleDOM.innerHTML = "";
        dataDOM.loaderDOM.classList.remove('none'); //show loader
        pushUrl(city);

        fetch('https://api.weatherbit.io/v2.0/forecast/daily?city=' + city + '&units=' + data.units + '&key=' + data.secretKey).then(function (response) {
            if (response.status === 204) {
                dataDOM.titleDOM.insertAdjacentHTML('beforeend', 'City not found. Please, try again.');
            } else if (response.status === 429) {
                dataDOM.titleDOM.insertAdjacentHTML('beforeend', 'API Limit reached (75 queries per 1 hour)');
            } else if (response.status === 400) {
                dataDOM.titleDOM.insertAdjacentHTML('beforeend', 'Search field is empty. Please, enter city name');
                return false;
            } else {
                return response.json();
            }
        }).then(function (body) {
            if (body) {
                renderCity(body);
            };
            return body;
        }).catch(function (error) {
            dataDOM.loaderDOM.classList.add('none');
            console.log(error);
        });
    }
})();

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/loader.svg";

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/favorites-button.png";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a01d.svg";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a02d.svg";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a03d.svg";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a04d.svg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a05d.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c01d.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c02d.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c03d.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d01d.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d02d.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d03d.svg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/f01d.svg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r01d.svg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r02d.svg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r03d.svg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r04d.svg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r05d.svg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r06d.svg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s01d.svg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s02d.svg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s03d.svg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s04d.svg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s05d.svg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s06d.svg";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t01d.svg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t02d.svg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t03d.svg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t04d.svg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t05d.svg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t06d.svg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t07d.svg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/u00d.svg";

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c04d.svg";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNmJhMGQ3MGNhZTU2MTdjMWZmYzMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zYXNzL2FwcC5zYXNzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9sb2FkZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2MwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2QwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9mMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDZkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDZkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDZkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA3ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3UwMGQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDRkLnN2ZyJdLCJuYW1lcyI6WyJwYXJzZWRVcmwiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJkYXRhRE9NIiwiZm9ybURPTSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlucHV0RE9NIiwibWFpbkRPTSIsInRpdGxlRE9NIiwidW5pdHNET00iLCJwZXJpb2RET00iLCJoaXN0b3J5RE9NIiwiZmF2b3JpdGVzRE9NIiwiYnV0dG9uSGlzdG9yeUNsZWFyIiwiYnV0dG9uRmF2b3JpdGVzQ2xlYXIiLCJsb2FkZXJET00iLCJkYXRhIiwiY2l0eSIsInNlYXJjaFBhcmFtcyIsImdldCIsInNlY3JldEtleSIsInVuaXRzIiwidW5pdHNEaXNwbGF5IiwicGVyaW9kIiwiaGlzdG9yeU9iaiIsImZhdm9yaXRlT2JqIiwiYWRkRXZlbnRMaXN0ZW5lciIsImluaXQiLCJmaW5kQ2l0eSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJzaG93SGlzdG9yeSIsIm9uY2xpY2siLCJldmVudCIsInRhcmdldCIsImNsZWFyTG9jYWxTdG9yYWdlIiwib25jaGFuZ2UiLCJvcHRpb25zIiwic2VsZWN0ZWRJbmRleCIsInZhbHVlIiwiZSIsInByZXZlbnREZWZhdWx0IiwicHVzaEhpc3RvcnkiLCJET00iLCJvYmoiLCJjc3NDbGFzcyIsImxvY2FsU3RvcmFnZUtleSIsImluZGV4T2YiLCJwdXNoIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImlubmVySFRNTCIsIm1hcCIsImkiLCJpbnNlcnRBZGphY2VudEhUTUwiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGVuZ3RoIiwia2V5IiwicmVtb3ZlSXRlbSIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVGYXZvcml0ZUJ1dHRvbiIsImJvZHkiLCJjaXR5X25hbWUiLCJwdXNoVXJsIiwic3RhdGUiLCJ0aXRsZSIsInVybCIsImhpc3RvcnkiLCJwdXNoU3RhdGUiLCJyZW5kZXJDaXR5IiwiY2xhc3NMaXN0IiwiYWRkIiwidGVtcCIsIndlYXRoZXIiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJkYXRldGltZSIsInNwbGl0IiwicmV2ZXJzZSIsImpvaW4iLCJtYXhfdGVtcCIsIm1pbl90ZW1wIiwiYXBwX21heF90ZW1wIiwiYXBwX21pbl90ZW1wIiwid2luZF9zcGQiLCJwb3AiLCJyZW1vdmUiLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsInN0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QUNILGFBSEssTUFHRDtBQUNELHVCQUFPb0MsU0FBU0UsSUFBVCxFQUFQO0FBQ0g7QUFDSCxTQVpGLEVBYUNILElBYkQsQ0FhTSxVQUFTM0IsSUFBVCxFQUFlO0FBQ2pCLGdCQUFHQSxJQUFILEVBQVE7QUFDSlEsMkJBQVdSLElBQVg7QUFDSDtBQUNELG1CQUFPQSxJQUFQO0FBQ0gsU0FsQkQsRUFtQkMrQixLQW5CRCxDQW1CTyxVQUFTQyxLQUFULEVBQWU7QUFDbEI5RixvQkFBUWEsU0FBUixDQUFrQjBELFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQyxNQUFoQztBQUNBYixvQkFBUUMsR0FBUixDQUFZa0MsS0FBWjtBQUNILFNBdEJEO0FBdUJIO0FBRUosQ0E1TkQsSTs7Ozs7O0FDcERBLHlDOzs7Ozs7QUNBQSxxRTs7Ozs7O0FDQUEsK0U7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7Ozs7OztBQ0FBLG1FIiwiZmlsZSI6Ii4vYXNzZXRzL2pzL2FwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA2YmEwZDcwY2FlNTYxN2MxZmZjMyIsImltcG9ydCAnLi9hc3NldHMvc2Fzcy9hcHAuc2Fzcyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvZmF2b3JpdGVzLWJ1dHRvbi5wbmcnO1xyXG5cclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDFkLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAyZC5zdmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2ljb25zL2EwM2Quc3ZnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDRkLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA1ZC5zdmcnO1xyXG5cclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDFkLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2ljb25zL2MwM2Quc3ZnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDRkLnN2Zyc7XHJcblxyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2ljb25zL2QwMWQuc3ZnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDJkLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAzZC5zdmcnO1xyXG5cclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy9mMDFkLnN2Zyc7XHJcblxyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2ljb25zL3IwMWQuc3ZnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDJkLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAzZC5zdmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2ljb25zL3IwNGQuc3ZnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDVkLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA2ZC5zdmcnO1xyXG5cclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDFkLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvczAyZC5zdmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2ljb25zL3MwM2Quc3ZnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDRkLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvczA1ZC5zdmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2ljb25zL3MwNmQuc3ZnJztcclxuXHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAxZC5zdmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2ljb25zL3QwMmQuc3ZnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDNkLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA0ZC5zdmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2ljb25zL3QwNWQuc3ZnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDZkLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA3ZC5zdmcnO1xyXG5cclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy91MDBkLnN2Zyc7XHJcblxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogMjAxNy5XZWF0aGVyIGFwcGxpY2F0aW9uIGJ5IEFsZXggTmVsaW4gKlxyXG4gKiBCYXNlZCBvbiB3ZWF0aGVyYml0LmlvIEFQSSAgICAgICAgICAgICAqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4oZnVuY3Rpb24oKXtcclxuICAgICd1c2Ugc3RyaWN0J1xyXG5cclxuICAgIC8vZ2V0IGN1cnJlbnQgdXJsXHJcbiAgICBsZXQgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICBcclxuICAgIC8vb2JqZWN0IHdpdGggRE9NIGVsZW1lbnRzXHJcbiAgICBjb25zdCBkYXRhRE9NID0ge1xyXG4gICAgICAgIGZvcm1ET00gOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoRm9ybScpLFxyXG4gICAgICAgIGlucHV0RE9NIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpLFxyXG4gICAgICAgIG1haW5ET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXdyYXBwZXInKSxcclxuICAgICAgICB0aXRsZURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tdGl0bGUnKSxcclxuICAgICAgICB1bml0c0RPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuaXRzJyksXHJcbiAgICAgICAgcGVyaW9kRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVyaW9kJyksXHJcbiAgICAgICAgaGlzdG9yeURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGlzdG9yeScpLFxyXG4gICAgICAgIGZhdm9yaXRlc0RPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZmF2b3JpdGVzJyksXHJcbiAgICAgICAgYnV0dG9uSGlzdG9yeUNsZWFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGlzdG9yeUNsZWFyJyksXHJcbiAgICAgICAgYnV0dG9uRmF2b3JpdGVzQ2xlYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXZvcml0ZXNDbGVhcicpLFxyXG4gICAgICAgIGxvYWRlckRPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlci13cmFwcGVyJyksXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgIGNpdHkgOiBwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmdldChcImNpdHlcIiksXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9hcGkga2V5XHJcbiAgICAgICAgc2VjcmV0S2V5IDogJ2M2OTc2YTRjNGUwNTQyMWY5YjRlYWVlN2EzMTFmMGRjJyxcclxuICAgICAgICB1bml0czogJ00nLFxyXG4gICAgICAgIHVuaXRzRGlzcGxheTogJ0MnLFxyXG4gICAgICAgIHBlcmlvZDogMSxcclxuXHJcbiAgICAgICAgLy9sb2NhbHN0b3JhZ2Ugb2JqZWN0c1xyXG4gICAgICAgIGhpc3RvcnlPYmo6IHsgXHJcbiAgICAgICAgICAgIGNpdHk6IFtdIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmF2b3JpdGVPYmo6IHtcclxuICAgICAgICAgICAgY2l0eTogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9PntcclxuICAgICAgICBpbml0KCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaW5pdCgpe1xyXG5cclxuICAgICAgICAvL3J1biBmZXRjaCBtZXRob2QsIHdlIGhhdmUgY2l0eSBpbiBVUkxcclxuICAgICAgICBpZihwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmdldChcImNpdHlcIikpe1xyXG4gICAgICAgICAgICBmaW5kQ2l0eShkYXRhLmNpdHkpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vZ2V0IHZhbHVlcyBmcm9tIGxvY2Fsc3RvcmFnZSwgaWYgYW55XHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpc3RvcnknKSkge1xyXG4gICAgICAgICAgICBkYXRhLmhpc3RvcnlPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaXN0b3J5JykpO1xyXG4gICAgICAgICAgICBzaG93SGlzdG9yeShkYXRhRE9NLmhpc3RvcnlET00sIGRhdGEuaGlzdG9yeU9iaiwgJ2hpc3RvcnktaXRlbScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpIHtcclxuICAgICAgICAgICAgZGF0YS5mYXZvcml0ZU9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlcycpKTtcclxuICAgICAgICAgICAgc2hvd0hpc3RvcnkoZGF0YURPTS5mYXZvcml0ZXNET00sIGRhdGEuZmF2b3JpdGVPYmosICdmYXZvcml0ZS1pdGVtJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICBpZih0YXJnZXQgJiYgdGFyZ2V0ID09PSBkYXRhRE9NLmJ1dHRvbkhpc3RvcnlDbGVhcil7XHJcbiAgICAgICAgICAgICAgICBjbGVhckxvY2FsU3RvcmFnZShkYXRhRE9NLmhpc3RvcnlET00sICdoaXN0b3J5JylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGFyZ2V0ICYmIHRhcmdldCA9PT0gZGF0YURPTS5idXR0b25GYXZvcml0ZXNDbGVhcil7XHJcbiAgICAgICAgICAgICAgICBjbGVhckxvY2FsU3RvcmFnZShkYXRhRE9NLmZhdm9yaXRlc0RPTSwgJ2Zhdm9yaXRlcycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50Lm9uY2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICBpZih0YXJnZXQgJiYgdGFyZ2V0ID09PSBkYXRhRE9NLnVuaXRzRE9NKXtcclxuICAgICAgICAgICAgICAgIGRhdGEudW5pdHMgPSBkYXRhRE9NLnVuaXRzRE9NLm9wdGlvbnNbZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuaXRzJykuc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnVuaXRzRGlzcGxheSA9IGRhdGEudW5pdHMgPT09ICdNJyA/ICdDJyA6ICdGJzsgXHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLmNpdHkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmRDaXR5KGRhdGEuY2l0eSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRhcmdldCAmJiB0YXJnZXQgPT09IGRhdGFET00ucGVyaW9kRE9NKXtcclxuICAgICAgICAgICAgICAgIGRhdGEucGVyaW9kID0gK2RhdGFET00ucGVyaW9kRE9NLm9wdGlvbnNbZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlcmlvZCcpLnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5jaXR5KXtcclxuICAgICAgICAgICAgICAgICAgICBmaW5kQ2l0eShkYXRhLmNpdHkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgZGF0YURPTS5mb3JtRE9NLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+e1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGRhdGEuY2l0eSA9IGRhdGFET00uaW5wdXRET00udmFsdWU7XHJcbiAgICAgICAgICAgIGZpbmRDaXR5KGRhdGEuY2l0eSk7XHJcbiAgICAgICAgICAgIGlmKGRhdGEuY2l0eSl7XHJcbiAgICAgICAgICAgICAgICBwdXNoSGlzdG9yeShkYXRhRE9NLmhpc3RvcnlET00sIGRhdGEuaGlzdG9yeU9iaiwgJ2hpc3RvcnktaXRlbScsICdoaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vbG9jYWxzdG9yYWdlIG1ldGhvZHMgZm9yIGhpc3RvcnkgYW5kIGZhdm9yaXRlc1xyXG4gICAgZnVuY3Rpb24gcHVzaEhpc3RvcnkoRE9NLCBvYmosIGNzc0NsYXNzLCBsb2NhbFN0b3JhZ2VLZXkpe1xyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSAmJiBcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlS2V5ID09PSAnZmF2b3JpdGVzJyAmJiBcclxuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpLmNpdHkuaW5kZXhPZihkYXRhLmNpdHkpICE9IC0xKXtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgb2JqLmNpdHkucHVzaChkYXRhLmNpdHkpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG4gICAgICAgICAgICBzaG93SGlzdG9yeShET00sIG9iaiwgY3NzQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93SGlzdG9yeShET00sIG9iaiwgY3NzQ2xhc3Mpe1xyXG4gICAgICAgIERPTS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBpZihvYmope1xyXG4gICAgICAgICAgICBvYmouY2l0eS5tYXAoKGkpPT57XHJcbiAgICAgICAgICAgICAgICBET00uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGxpIGNsYXNzPVwiJHtjc3NDbGFzc31cIj4ke2l9PC9saT5gKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2Nzc0NsYXNzfWApLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2Nzc0NsYXNzfWApW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNpdHkgPSB0aGlzLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgICAgICBmaW5kQ2l0eSh0aGlzLmlubmVySFRNTCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qY3JlYXRlIGJ1dHRvbnMgdG8gY2xlYXIgbG9jYWxzdG9yYWdlIGRhdGEqLyBcclxuICAgIGZ1bmN0aW9uIGNsZWFyTG9jYWxTdG9yYWdlKERPTSwga2V5KXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgICAgIERPTS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBjb25zb2xlLmxvZyhET00pO1xyXG4gICAgICAgIERPTS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGB0aGVyZSBhcmUgbm8gJHtrZXl9IHlldGApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZhdm9yaXRlQnV0dG9uIChib2R5KXtcclxuICAgICAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgXHJcbiAgICAgICAgYEN1cnJlbnQgY2l0eTogJHtib2R5LmNpdHlfbmFtZX0gXHJcbiAgICAgICAgPGltZyBpZD1cImZhdm9yaXRlc1wiIHNyYz1cImFzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1wiPlxyXG4gICAgICAgIGApO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXZvcml0ZXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHB1c2hIaXN0b3J5KGRhdGFET00uZmF2b3JpdGVzRE9NLCBkYXRhLmZhdm9yaXRlT2JqLCAnZmF2b3JpdGUtaXRlbScsICdmYXZvcml0ZXMnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL3B1c2ggY3VycmVudCBjaXR5IHRvIFVSTFxyXG4gICAgZnVuY3Rpb24gcHVzaFVybCAoY2l0eSl7XHJcbiAgICAgICAgbGV0IHN0YXRlID0ge307XHJcbiAgICAgICAgbGV0IHRpdGxlID0gY2l0eTtcclxuICAgICAgICBsZXQgdXJsID0gYGluZGV4Lmh0bWw/Y2l0eT0ke2NpdHl9YDtcclxuICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSwgdGl0bGUsIHVybCk7XHJcbiAgICAgICAgbGV0IHBhcnNlZFVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL3JlbmRlciBtZXRob2RcclxuICAgIGZ1bmN0aW9uIHJlbmRlckNpdHkgKGJvZHkpe1xyXG4gICAgICAgIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcclxuICAgICAgICBjcmVhdGVGYXZvcml0ZUJ1dHRvbihib2R5KTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8IGRhdGEucGVyaW9kOyBpKyspe1xyXG4gICAgICAgICAgICBkYXRhRE9NLm1haW5ET00uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLFxyXG5cclxuICAgICAgICAgICAgLy90ZW1wbGF0ZSB3aXRoIHdlYXRoZXIgZGF0YSBcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnQtYm94IG1haW4tY29udGVudC1ib3hfY291bnQtJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tY29udGVudC1ib3hfdmFsdWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnVtYmVyLWNhcHRpb25cIj4ke2JvZHkuZGF0YVtpXS50ZW1wfTwvc3Bhbj4gJHtkYXRhLnVuaXRzRGlzcGxheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZS1jYXB0aW9uXCI+YXZnLiB0ZW1wLjwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvYmplY3QgZGF0YT1cImFzc2V0cy9tZWRpYS8ke2JvZHkuZGF0YVtpXS53ZWF0aGVyLmljb259LnN2Z1wiIHR5cGU9XCJcIj48L29iamVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlLWNhcHRpb25cIj4ke2JvZHkuZGF0YVtpXS53ZWF0aGVyLmRlc2NyaXB0aW9ufTwvcD4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPiR7Ym9keS5kYXRhW2ldLmRhdGV0aW1lLnNwbGl0KCctJykucmV2ZXJzZSgpLmpvaW4oJy4nKX08L3A+IFxyXG4gICAgICAgICAgICAgICAgPHA+bWF4LiB0ZW1wLjogJHtib2R5LmRhdGFbaV0ubWF4X3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+bWluLiB0ZW1wLjogJHtib2R5LmRhdGFbaV0ubWluX3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+ZmVlbHMgbGlrZSwgbWF4OiAke2JvZHkuZGF0YVtpXS5hcHBfbWF4X3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+ZmVlbHMgbGlrZSwgbWluOiAke2JvZHkuZGF0YVtpXS5hcHBfbWluX3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+d2luZDogJHtib2R5LmRhdGFbaV0ud2luZF9zcGR9IG0vczwvcD5cclxuICAgICAgICAgICAgICAgIDxwPnByZWNpcGl0YXRpb246ICR7Ym9keS5kYXRhW2ldLnBvcH0gJTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZmluZENpdHkgKGNpdHkpe1xyXG4gICAgICAgIGRhdGFET00ubWFpbkRPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGRhdGFET00udGl0bGVET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBkYXRhRE9NLmxvYWRlckRPTS5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7IC8vc2hvdyBsb2FkZXJcclxuICAgICAgICBwdXNoVXJsKGNpdHkpOyBcclxuICAgICAgICBcclxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmJpdC5pby92Mi4wL2ZvcmVjYXN0L2RhaWx5P2NpdHk9JHtjaXR5fSZ1bml0cz0ke2RhdGEudW5pdHN9JmtleT0ke2RhdGEuc2VjcmV0S2V5fWApXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpe1xyXG4gICAgICAgICAgICAgICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBDaXR5IG5vdCBmb3VuZC4gUGxlYXNlLCB0cnkgYWdhaW4uYCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDI5KXtcclxuICAgICAgICAgICAgICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgQVBJIExpbWl0IHJlYWNoZWQgKDc1IHF1ZXJpZXMgcGVyIDEgaG91cilgKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApe1xyXG4gICAgICAgICAgICAgICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBTZWFyY2ggZmllbGQgaXMgZW1wdHkuIFBsZWFzZSwgZW50ZXIgY2l0eSBuYW1lYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGJvZHkpIHtcclxuICAgICAgICAgICAgaWYoYm9keSl7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJDaXR5KGJvZHkpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBib2R5O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAgICAgICAgZGF0YURPTS5sb2FkZXJET00uY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KTsgXHJcbiAgICB9XHJcblxyXG59KSgpOyBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Fzcy9hcHAuc2Fzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9sb2FkZXIuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9hMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2EwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTA1ZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDVkLnN2Z1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9jMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2MwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2QwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2YwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvZjAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3IwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3MwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvczA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwMmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAyZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwM2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAzZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA1ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwNmQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA2ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3QwN2Quc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA3ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL3UwMGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvdTAwZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2MwNGQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYzA0ZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=