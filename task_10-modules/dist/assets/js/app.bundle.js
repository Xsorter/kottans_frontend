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

__webpack_require__(6);

__webpack_require__(7);

__webpack_require__(8);

__webpack_require__(9);

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
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/loader.svg";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/favorites-button.png";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a01d.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a02d.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a03d.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a04d.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/a05d.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c01d.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c02d.svg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/c03d.svg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d01d.svg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d02d.svg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/d03d.svg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/f01d.svg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r01d.svg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r02d.svg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r03d.svg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r04d.svg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r05d.svg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/r06d.svg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s01d.svg";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s02d.svg";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s03d.svg";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s04d.svg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s05d.svg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/s06d.svg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t01d.svg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t02d.svg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t03d.svg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t04d.svg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t05d.svg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t06d.svg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/t07d.svg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "./assets/media/u00d.svg";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWNiYWQwM2Y0N2FlNDNlZWUzZjIiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zYXNzL2FwcC5zYXNzIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9sb2FkZXIuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2EwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2MwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAyZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL2QwM2Quc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9mMDFkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3IwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDZkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvczA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3MwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDZkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAxZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwMmQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDNkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA0ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3QwNWQuc3ZnIiwid2VicGFjazovLy8uL2Fzc2V0cy9tZWRpYS9pY29ucy90MDZkLnN2ZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA3ZC5zdmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL21lZGlhL2ljb25zL3UwMGQuc3ZnIl0sIm5hbWVzIjpbInBhcnNlZFVybCIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImRhdGFET00iLCJmb3JtRE9NIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaW5wdXRET00iLCJtYWluRE9NIiwidGl0bGVET00iLCJ1bml0c0RPTSIsInBlcmlvZERPTSIsImhpc3RvcnlET00iLCJmYXZvcml0ZXNET00iLCJidXR0b25IaXN0b3J5Q2xlYXIiLCJidXR0b25GYXZvcml0ZXNDbGVhciIsImxvYWRlckRPTSIsImRhdGEiLCJjaXR5Iiwic2VhcmNoUGFyYW1zIiwiZ2V0Iiwic2VjcmV0S2V5IiwidW5pdHMiLCJ1bml0c0Rpc3BsYXkiLCJwZXJpb2QiLCJoaXN0b3J5T2JqIiwiZmF2b3JpdGVPYmoiLCJhZGRFdmVudExpc3RlbmVyIiwiaW5pdCIsImZpbmRDaXR5IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIkpTT04iLCJwYXJzZSIsInNob3dIaXN0b3J5Iiwib25jbGljayIsImV2ZW50IiwidGFyZ2V0IiwiY2xlYXJMb2NhbFN0b3JhZ2UiLCJvbmNoYW5nZSIsIm9wdGlvbnMiLCJzZWxlY3RlZEluZGV4IiwidmFsdWUiLCJlIiwicHJldmVudERlZmF1bHQiLCJwdXNoSGlzdG9yeSIsIkRPTSIsIm9iaiIsImNzc0NsYXNzIiwibG9jYWxTdG9yYWdlS2V5IiwiaW5kZXhPZiIsInB1c2giLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwiaW5uZXJIVE1MIiwibWFwIiwiaSIsImluc2VydEFkamFjZW50SFRNTCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJsZW5ndGgiLCJrZXkiLCJyZW1vdmVJdGVtIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUZhdm9yaXRlQnV0dG9uIiwiYm9keSIsImNpdHlfbmFtZSIsInB1c2hVcmwiLCJzdGF0ZSIsInRpdGxlIiwidXJsIiwiaGlzdG9yeSIsInB1c2hTdGF0ZSIsInJlbmRlckNpdHkiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0ZW1wIiwid2VhdGhlciIsImljb24iLCJkZXNjcmlwdGlvbiIsImRhdGV0aW1lIiwic3BsaXQiLCJyZXZlcnNlIiwiam9pbiIsIm1heF90ZW1wIiwibWluX3RlbXAiLCJhcHBfbWF4X3RlbXAiLCJhcHBfbWluX3RlbXAiLCJ3aW5kX3NwZCIsInBvcCIsInJlbW92ZSIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwianNvbiIsImNhdGNoIiwiZXJyb3IiXSwibWFwcGluZ3MiOiI7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QUNILFNBWkYsRUFhQ0gsSUFiRCxDQWFNLFVBQVMzQixJQUFULEVBQWU7QUFDakIsZ0JBQUdBLElBQUgsRUFBUTtBQUNKUSwyQkFBV1IsSUFBWDtBQUNIO0FBQ0QsbUJBQU9BLElBQVA7QUFDSCxTQWxCRCxFQW1CQytCLEtBbkJELENBbUJPLFVBQVNDLEtBQVQsRUFBZTtBQUNsQjlGLG9CQUFRYSxTQUFSLENBQWtCMEQsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLE1BQWhDO0FBQ0FiLG9CQUFRQyxHQUFSLENBQVlrQyxLQUFaO0FBQ0gsU0F0QkQ7QUF1Qkg7QUFFSixDQTVORCxJOzs7Ozs7QUNuREEseUM7Ozs7Ozs7Ozs7QUNBQSxxRTs7Ozs7O0FDQUEsK0U7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLG1FOzs7Ozs7QUNBQSxtRSIsImZpbGUiOiIuL2Fzc2V0cy9qcy9hcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYWNiYWQwM2Y0N2FlNDNlZWUzZjIiLCJpbXBvcnQgJy4vYXNzZXRzL3Nhc3MvYXBwLnNhc3MnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2xvYWRlci5zdmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nJztcclxuXHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2ljb25zL2EwMmQuc3ZnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDNkLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvYTA0ZC5zdmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2ljb25zL2EwNWQuc3ZnJztcclxuXHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvYzAxZC5zdmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2ljb25zL2MwMmQuc3ZnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy9jMDNkLnN2Zyc7XHJcblxyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2ljb25zL2QwMWQuc3ZnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy9kMDJkLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvZDAzZC5zdmcnO1xyXG5cclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy9mMDFkLnN2Zyc7XHJcblxyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2ljb25zL3IwMWQuc3ZnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDJkLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvcjAzZC5zdmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2ljb25zL3IwNGQuc3ZnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy9yMDVkLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvcjA2ZC5zdmcnO1xyXG5cclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDFkLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvczAyZC5zdmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2ljb25zL3MwM2Quc3ZnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy9zMDRkLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvczA1ZC5zdmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2ljb25zL3MwNmQuc3ZnJztcclxuXHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvdDAxZC5zdmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2ljb25zL3QwMmQuc3ZnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDNkLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA0ZC5zdmcnO1xyXG5pbXBvcnQgJy4vYXNzZXRzL21lZGlhL2ljb25zL3QwNWQuc3ZnJztcclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy90MDZkLnN2Zyc7XHJcbmltcG9ydCAnLi9hc3NldHMvbWVkaWEvaWNvbnMvdDA3ZC5zdmcnO1xyXG5cclxuaW1wb3J0ICcuL2Fzc2V0cy9tZWRpYS9pY29ucy91MDBkLnN2Zyc7XHJcblxyXG5cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuICogMjAxNy5XZWF0aGVyIGFwcGxpY2F0aW9uIGJ5IEFsZXggTmVsaW4gKlxyXG4gKiBCYXNlZCBvbiB3ZWF0aGVyYml0LmlvIEFQSSAgICAgICAgICAgICAqXHJcbiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4oZnVuY3Rpb24oKXtcclxuICAgICd1c2Ugc3RyaWN0J1xyXG5cclxuICAgIC8vZ2V0IGN1cnJlbnQgdXJsXHJcbiAgICBsZXQgcGFyc2VkVXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICBcclxuICAgIC8vb2JqZWN0IHdpdGggRE9NIGVsZW1lbnRzXHJcbiAgICBjb25zdCBkYXRhRE9NID0ge1xyXG4gICAgICAgIGZvcm1ET00gOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoRm9ybScpLFxyXG4gICAgICAgIGlucHV0RE9NIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpLFxyXG4gICAgICAgIG1haW5ET006IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLXdyYXBwZXInKSxcclxuICAgICAgICB0aXRsZURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tdGl0bGUnKSxcclxuICAgICAgICB1bml0c0RPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuaXRzJyksXHJcbiAgICAgICAgcGVyaW9kRE9NOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGVyaW9kJyksXHJcbiAgICAgICAgaGlzdG9yeURPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4taGlzdG9yeScpLFxyXG4gICAgICAgIGZhdm9yaXRlc0RPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tZmF2b3JpdGVzJyksXHJcbiAgICAgICAgYnV0dG9uSGlzdG9yeUNsZWFyOiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaGlzdG9yeUNsZWFyJyksXHJcbiAgICAgICAgYnV0dG9uRmF2b3JpdGVzQ2xlYXI6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXZvcml0ZXNDbGVhcicpLFxyXG4gICAgICAgIGxvYWRlckRPTTogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlci13cmFwcGVyJyksXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCBkYXRhID0ge1xyXG4gICAgICAgIGNpdHkgOiBwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmdldChcImNpdHlcIiksXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9hcGkga2V5XHJcbiAgICAgICAgc2VjcmV0S2V5IDogJ2M2OTc2YTRjNGUwNTQyMWY5YjRlYWVlN2EzMTFmMGRjJyxcclxuICAgICAgICB1bml0czogJ00nLFxyXG4gICAgICAgIHVuaXRzRGlzcGxheTogJ0MnLFxyXG4gICAgICAgIHBlcmlvZDogMSxcclxuXHJcbiAgICAgICAgLy9sb2NhbHN0b3JhZ2Ugb2JqZWN0c1xyXG4gICAgICAgIGhpc3RvcnlPYmo6IHsgXHJcbiAgICAgICAgICAgIGNpdHk6IFtdIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZmF2b3JpdGVPYmo6IHtcclxuICAgICAgICAgICAgY2l0eTogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCk9PntcclxuICAgICAgICBpbml0KCk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaW5pdCgpe1xyXG5cclxuICAgICAgICAvL3J1biBmZXRjaCBtZXRob2QsIHdlIGhhdmUgY2l0eSBpbiBVUkxcclxuICAgICAgICBpZihwYXJzZWRVcmwuc2VhcmNoUGFyYW1zLmdldChcImNpdHlcIikpe1xyXG4gICAgICAgICAgICBmaW5kQ2l0eShkYXRhLmNpdHkpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vZ2V0IHZhbHVlcyBmcm9tIGxvY2Fsc3RvcmFnZSwgaWYgYW55XHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hpc3RvcnknKSkge1xyXG4gICAgICAgICAgICBkYXRhLmhpc3RvcnlPYmogPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdoaXN0b3J5JykpO1xyXG4gICAgICAgICAgICBzaG93SGlzdG9yeShkYXRhRE9NLmhpc3RvcnlET00sIGRhdGEuaGlzdG9yeU9iaiwgJ2hpc3RvcnktaXRlbScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpIHtcclxuICAgICAgICAgICAgZGF0YS5mYXZvcml0ZU9iaiA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zhdm9yaXRlcycpKTtcclxuICAgICAgICAgICAgc2hvd0hpc3RvcnkoZGF0YURPTS5mYXZvcml0ZXNET00sIGRhdGEuZmF2b3JpdGVPYmosICdmYXZvcml0ZS1pdGVtJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkb2N1bWVudC5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICBpZih0YXJnZXQgJiYgdGFyZ2V0ID09PSBkYXRhRE9NLmJ1dHRvbkhpc3RvcnlDbGVhcil7XHJcbiAgICAgICAgICAgICAgICBjbGVhckxvY2FsU3RvcmFnZShkYXRhRE9NLmhpc3RvcnlET00sICdoaXN0b3J5JylcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGFyZ2V0ICYmIHRhcmdldCA9PT0gZGF0YURPTS5idXR0b25GYXZvcml0ZXNDbGVhcil7XHJcbiAgICAgICAgICAgICAgICBjbGVhckxvY2FsU3RvcmFnZShkYXRhRE9NLmZhdm9yaXRlc0RPTSwgJ2Zhdm9yaXRlcycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50Lm9uY2hhbmdlID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblxyXG4gICAgICAgICAgICBpZih0YXJnZXQgJiYgdGFyZ2V0ID09PSBkYXRhRE9NLnVuaXRzRE9NKXtcclxuICAgICAgICAgICAgICAgIGRhdGEudW5pdHMgPSBkYXRhRE9NLnVuaXRzRE9NLm9wdGlvbnNbZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VuaXRzJykuc2VsZWN0ZWRJbmRleF0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnVuaXRzRGlzcGxheSA9IGRhdGEudW5pdHMgPT09ICdNJyA/ICdDJyA6ICdGJzsgXHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLmNpdHkpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbmRDaXR5KGRhdGEuY2l0eSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRhcmdldCAmJiB0YXJnZXQgPT09IGRhdGFET00ucGVyaW9kRE9NKXtcclxuICAgICAgICAgICAgICAgIGRhdGEucGVyaW9kID0gK2RhdGFET00ucGVyaW9kRE9NLm9wdGlvbnNbZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BlcmlvZCcpLnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5jaXR5KXtcclxuICAgICAgICAgICAgICAgICAgICBmaW5kQ2l0eShkYXRhLmNpdHkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgZGF0YURPTS5mb3JtRE9NLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKT0+e1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGRhdGEuY2l0eSA9IGRhdGFET00uaW5wdXRET00udmFsdWU7XHJcbiAgICAgICAgICAgIGZpbmRDaXR5KGRhdGEuY2l0eSk7XHJcbiAgICAgICAgICAgIGlmKGRhdGEuY2l0eSl7XHJcbiAgICAgICAgICAgICAgICBwdXNoSGlzdG9yeShkYXRhRE9NLmhpc3RvcnlET00sIGRhdGEuaGlzdG9yeU9iaiwgJ2hpc3RvcnktaXRlbScsICdoaXN0b3J5Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vbG9jYWxzdG9yYWdlIG1ldGhvZHMgZm9yIGhpc3RvcnkgYW5kIGZhdm9yaXRlc1xyXG4gICAgZnVuY3Rpb24gcHVzaEhpc3RvcnkoRE9NLCBvYmosIGNzc0NsYXNzLCBsb2NhbFN0b3JhZ2VLZXkpe1xyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmYXZvcml0ZXMnKSAmJiBcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlS2V5ID09PSAnZmF2b3JpdGVzJyAmJiBcclxuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmF2b3JpdGVzJykpLmNpdHkuaW5kZXhPZihkYXRhLmNpdHkpICE9IC0xKXtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgb2JqLmNpdHkucHVzaChkYXRhLmNpdHkpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShsb2NhbFN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG4gICAgICAgICAgICBzaG93SGlzdG9yeShET00sIG9iaiwgY3NzQ2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBzaG93SGlzdG9yeShET00sIG9iaiwgY3NzQ2xhc3Mpe1xyXG4gICAgICAgIERPTS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBpZihvYmope1xyXG4gICAgICAgICAgICBvYmouY2l0eS5tYXAoKGkpPT57XHJcbiAgICAgICAgICAgICAgICBET00uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgPGxpIGNsYXNzPVwiJHtjc3NDbGFzc31cIj4ke2l9PC9saT5gKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0wOyBpPGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2Nzc0NsYXNzfWApLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC4ke2Nzc0NsYXNzfWApW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmNpdHkgPSB0aGlzLmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgICAgICBmaW5kQ2l0eSh0aGlzLmlubmVySFRNTCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qY3JlYXRlIGJ1dHRvbnMgdG8gY2xlYXIgbG9jYWxzdG9yYWdlIGRhdGEqLyBcclxuICAgIGZ1bmN0aW9uIGNsZWFyTG9jYWxTdG9yYWdlKERPTSwga2V5KXtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgICAgIERPTS5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBjb25zb2xlLmxvZyhET00pO1xyXG4gICAgICAgIERPTS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGB0aGVyZSBhcmUgbm8gJHtrZXl9IHlldGApXHJcbiAgICB9XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUZhdm9yaXRlQnV0dG9uIChib2R5KXtcclxuICAgICAgICBkYXRhRE9NLnRpdGxlRE9NLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgXHJcbiAgICAgICAgYEN1cnJlbnQgY2l0eTogJHtib2R5LmNpdHlfbmFtZX0gXHJcbiAgICAgICAgPGltZyBpZD1cImZhdm9yaXRlc1wiIHNyYz1cImFzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1wiPlxyXG4gICAgICAgIGApO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmYXZvcml0ZXMnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIHB1c2hIaXN0b3J5KGRhdGFET00uZmF2b3JpdGVzRE9NLCBkYXRhLmZhdm9yaXRlT2JqLCAnZmF2b3JpdGUtaXRlbScsICdmYXZvcml0ZXMnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL3B1c2ggY3VycmVudCBjaXR5IHRvIFVSTFxyXG4gICAgZnVuY3Rpb24gcHVzaFVybCAoY2l0eSl7XHJcbiAgICAgICAgbGV0IHN0YXRlID0ge307XHJcbiAgICAgICAgbGV0IHRpdGxlID0gY2l0eTtcclxuICAgICAgICBsZXQgdXJsID0gYGluZGV4Lmh0bWw/Y2l0eT0ke2NpdHl9YDtcclxuICAgICAgICBoaXN0b3J5LnB1c2hTdGF0ZShzdGF0ZSwgdGl0bGUsIHVybCk7XHJcbiAgICAgICAgbGV0IHBhcnNlZFVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL3JlbmRlciBtZXRob2RcclxuICAgIGZ1bmN0aW9uIHJlbmRlckNpdHkgKGJvZHkpe1xyXG4gICAgICAgIGRhdGFET00ubG9hZGVyRE9NLmNsYXNzTGlzdC5hZGQoJ25vbmUnKTtcclxuICAgICAgICBjcmVhdGVGYXZvcml0ZUJ1dHRvbihib2R5KTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7IGk8IGRhdGEucGVyaW9kOyBpKyspe1xyXG4gICAgICAgICAgICBkYXRhRE9NLm1haW5ET00uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLFxyXG5cclxuICAgICAgICAgICAgLy90ZW1wbGF0ZSB3aXRoIHdlYXRoZXIgZGF0YSBcclxuICAgICAgICAgICAgYDxkaXYgY2xhc3M9XCJtYWluLWNvbnRlbnQtYm94IG1haW4tY29udGVudC1ib3hfY291bnQtJHtpfVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tY29udGVudC1ib3hfdmFsdWVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnVtYmVyLWNhcHRpb25cIj4ke2JvZHkuZGF0YVtpXS50ZW1wfTwvc3Bhbj4gJHtkYXRhLnVuaXRzRGlzcGxheX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZS1jYXB0aW9uXCI+YXZnLiB0ZW1wLjwvcD4gXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxvYmplY3QgZGF0YT1cImFzc2V0cy9tZWRpYS8ke2JvZHkuZGF0YVtpXS53ZWF0aGVyLmljb259LnN2Z1wiIHR5cGU9XCJcIj48L29iamVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlLWNhcHRpb25cIj4ke2JvZHkuZGF0YVtpXS53ZWF0aGVyLmRlc2NyaXB0aW9ufTwvcD4gXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGF0ZVwiPiR7Ym9keS5kYXRhW2ldLmRhdGV0aW1lLnNwbGl0KCctJykucmV2ZXJzZSgpLmpvaW4oJy4nKX08L3A+IFxyXG4gICAgICAgICAgICAgICAgPHA+bWF4LiB0ZW1wLjogJHtib2R5LmRhdGFbaV0ubWF4X3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+bWluLiB0ZW1wLjogJHtib2R5LmRhdGFbaV0ubWluX3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+ZmVlbHMgbGlrZSwgbWF4OiAke2JvZHkuZGF0YVtpXS5hcHBfbWF4X3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+ZmVlbHMgbGlrZSwgbWluOiAke2JvZHkuZGF0YVtpXS5hcHBfbWluX3RlbXB9ICR7ZGF0YS51bml0c0Rpc3BsYXl9PC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+d2luZDogJHtib2R5LmRhdGFbaV0ud2luZF9zcGR9IG0vczwvcD5cclxuICAgICAgICAgICAgICAgIDxwPnByZWNpcGl0YXRpb246ICR7Ym9keS5kYXRhW2ldLnBvcH0gJTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIGApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgZnVuY3Rpb24gZmluZENpdHkgKGNpdHkpe1xyXG4gICAgICAgIGRhdGFET00ubWFpbkRPTS5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGRhdGFET00udGl0bGVET00uaW5uZXJIVE1MID0gXCJcIjtcclxuICAgICAgICBkYXRhRE9NLmxvYWRlckRPTS5jbGFzc0xpc3QucmVtb3ZlKCdub25lJyk7IC8vc2hvdyBsb2FkZXJcclxuICAgICAgICBwdXNoVXJsKGNpdHkpOyBcclxuICAgICAgICBcclxuICAgICAgICBmZXRjaChgaHR0cHM6Ly9hcGkud2VhdGhlcmJpdC5pby92Mi4wL2ZvcmVjYXN0L2RhaWx5P2NpdHk9JHtjaXR5fSZ1bml0cz0ke2RhdGEudW5pdHN9JmtleT0ke2RhdGEuc2VjcmV0S2V5fWApXHJcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgaWYocmVzcG9uc2Uuc3RhdHVzID09PSAyMDQpe1xyXG4gICAgICAgICAgICAgICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBDaXR5IG5vdCBmb3VuZC4gUGxlYXNlLCB0cnkgYWdhaW4uYCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDI5KXtcclxuICAgICAgICAgICAgICAgIGRhdGFET00udGl0bGVET00uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgQVBJIExpbWl0IHJlYWNoZWQgKDc1IHF1ZXJpZXMgcGVyIDEgaG91cilgKTtcclxuICAgICAgICAgICAgfWVsc2UgaWYocmVzcG9uc2Uuc3RhdHVzID09PSA0MDApe1xyXG4gICAgICAgICAgICAgICAgZGF0YURPTS50aXRsZURPTS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBTZWFyY2ggZmllbGQgaXMgZW1wdHkuIFBsZWFzZSwgZW50ZXIgY2l0eSBuYW1lYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KVxyXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uKGJvZHkpIHtcclxuICAgICAgICAgICAgaWYoYm9keSl7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJDaXR5KGJvZHkpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBib2R5O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAgICAgICAgZGF0YURPTS5sb2FkZXJET00uY2xhc3NMaXN0LmFkZCgnbm9uZScpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICB9KTsgXHJcbiAgICB9XHJcblxyXG59KSgpOyBcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FwcC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Fzcy9hcHAuc2Fzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9sb2FkZXIuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvbG9hZGVyLnN2Z1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9mYXZvcml0ZXMtYnV0dG9uLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2Zhdm9yaXRlcy1idXR0b24ucG5nXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcIi4vYXNzZXRzL21lZGlhL2EwMWQuc3ZnXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvbWVkaWEvaWNvbnMvYTAxZC5zdmdcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiLi9hc3NldHMvbWVkaWEvYTAyZC5zdmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9tZWRpYS9pY29ucy9hMDJkLnN2Z1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9hMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2EwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9hMDRkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2EwNGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9hMDVkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2EwNWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9jMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2MwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9jMDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2MwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9jMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2MwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9kMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2QwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9kMDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2QwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9kMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2QwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9mMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL2YwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDRkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwNGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDVkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwNWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9yMDZkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3IwNmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDRkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwNGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDVkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwNWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS9zMDZkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3MwNmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDFkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwMWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDJkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwMmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDNkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwM2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDRkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwNGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDVkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwNWQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDZkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwNmQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS90MDdkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3QwN2Quc3ZnXG4vLyBtb2R1bGUgaWQgPSAzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIuL2Fzc2V0cy9tZWRpYS91MDBkLnN2Z1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL21lZGlhL2ljb25zL3UwMGQuc3ZnXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9