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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Component = __webpack_require__(5);

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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var URL_PARAM_REGEXP = /:\w+/g;

var toHtml = exports.toHtml = function toHtml(string) {
  var template = document.createElement('template');
  template.innerHTML = string.trim();

  return template.content;
};

var clearChildren = exports.clearChildren = function clearChildren(node) {
  node.innerHTML = '';
  return node;
};

var append = exports.append = function append(node, child) {
  if (Array.isArray(child)) {
    node.append.apply(node, _toConsumableArray(child));
  } else {
    node.append(child);
  }

  return node;
};

var isUrlParam = function isUrlParam(path) {
  return URL_PARAM_REGEXP.test(path);
};
var urlToRegExp = function urlToRegExp(url) {
  return RegExp('^' + url.replace(URL_PARAM_REGEXP, '(.*)') + '$');
};
var isEqualPaths = exports.isEqualPaths = function isEqualPaths(template, url) {
  return urlToRegExp(template).test(url);
};

var extractUrlParams = exports.extractUrlParams = function extractUrlParams(template, url) {
  var values = url.split('/');
  var params = {};

  if (!values) {
    return params;
  }

  return template.split('/').reduce(function (acc, param, index) {
    if (!isUrlParam(param)) {
      return acc;
    }
    //We need to remove ':' from param name
    acc[param.slice(1)] = values[index];

    return acc;
  }, params);
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _tools = __webpack_require__(1);

var _tools2 = _interopRequireDefault(_tools);

var _Router = __webpack_require__(4);

var _Router2 = _interopRequireDefault(_Router);

var _routes = __webpack_require__(6);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = new _Router2.default(_routes2.default);
var root = document.getElementById('root');
root.appendChild(router.host);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(0);

var _tools = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ANY_PATH = '*';

var Router = function (_Component) {
  _inherits(Router, _Component);

  function Router(routes) {
    _classCallCheck(this, Router);

    var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this));

    _this.state = {
      activeRoute: null,
      activeComponent: null,
      routes: routes
    };

    _this.host = document.createElement('div');

    _this.handleUrlChange = _this.handleUrlChange.bind(_this);
    _this.handleRedirect = _this.handleRedirect.bind(_this);

    window.addEventListener('hashchange', function () {
      return _this.handleUrlChange(_this.path);
    });

    _this.handleUrlChange(_this.path);
    console.log('test');

    return _this;
  }

  _createClass(Router, [{
    key: 'handleUrlChange',
    value: function handleUrlChange(url) {
      var _state = this.state,
          routes = _state.routes,
          activeRoute = _state.activeRoute;

      var nextRoute = routes.find(function (_ref) {
        var href = _ref.href;
        return (0, _tools.isEqualPaths)(href, url);
      });

      if (!nextRoute) {
        nextRoute = routes.find(function (_ref2) {
          var href = _ref2.href;
          return href === ANY_PATH;
        }); //looking for any route
      }

      if (nextRoute && activeRoute !== nextRoute) {
        if (!!nextRoute.redirectTo) {
          return this.handleRedirect(nextRoute.redirectTo);
        }

        if (!!nextRoute.onEnter) {
          return this.handleOnEnter(nextRoute, url);
        }

        this.applyRoute(nextRoute, url);
      }
    }
  }, {
    key: 'handleRedirect',
    value: function handleRedirect(url) {
      window.location.hash = url;
    }
  }, {
    key: 'handleOnEnter',
    value: function handleOnEnter(nextRoute, url) {
      var href = nextRoute.href;

      var params = (0, _tools.extractUrlParams)(href, url);
      nextRoute.onEnter(params, this.handleRedirect, nextRoute);
    }
  }, {
    key: 'applyRoute',
    value: function applyRoute(route, url) {
      var href = route.href,
          Component = route.component;
      var activeComponent = this.state.activeComponent;


      var componentInstance = new Component({
        params: (0, _tools.extractUrlParams)(href, this.path),
        replace: this.handleRedirect
      });

      if (activeComponent) {
        activeComponent.unmount();
      }

      this.updateState({
        activeRoute: route,
        activeComponent: componentInstance
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return this.state.activeComponent.update();
    }
  }, {
    key: 'path',
    get: function get() {
      return window.location.hash.slice(1);
    }
  }]);

  return Router;
}(_app.Component);

exports.default = Router;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _tools = __webpack_require__(1);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Component = function () {
  function Component(props) {
    _classCallCheck(this, Component);

    this.props = props || {};
    this.state = {};
    this.host = null;

    this.update = this.update.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  _createClass(Component, [{
    key: "_render",
    value: function _render() {
      var html = this.render();

      if (!html && this.host) {
        return this.host;
      }

      if (typeof html === 'string') {
        return (0, _tools.append)((0, _tools.clearChildren)(this.host), (0, _tools.toHtml)(html));
      } else {
        return (0, _tools.append)((0, _tools.clearChildren)(this.host), html);
      }
    }
  }, {
    key: "onBeforeUpdate",
    value: function onBeforeUpdate(nextProps) {}
  }, {
    key: "onBeforeUnmount",
    value: function onBeforeUnmount() {}
  }, {
    key: "unmount",
    value: function unmount() {
      this.onBeforeUnmount();
    }
  }, {
    key: "update",
    value: function update(nextProps) {
      this.onBeforeUpdate(nextProps);
      this.props = nextProps;
      return this._render();
    }
  }, {
    key: "updateState",
    value: function updateState(state) {
      var nextState = Object.assign({}, this.state, state);

      this.state = nextState;
      this._render();

      return nextState;
    }
  }, {
    key: "render",
    value: function render() {}
  }, {
    key: "name",
    get: function get() {
      return this.constructor.name;
    }
  }]);

  return Component;
}();

exports.default = Component;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Register = __webpack_require__(7);

var _Register2 = _interopRequireDefault(_Register);

var _Login = __webpack_require__(8);

var _Login2 = _interopRequireDefault(_Login);

var _PizzaList = __webpack_require__(9);

var _PizzaList2 = _interopRequireDefault(_PizzaList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = [{
    href: '/',
    component: _PizzaList2.default,
    onEnter: function onEnter(handleRedirect) {
        if (true) {
            window.location.hash = "/login";
        }
    }
}, {
    href: '/login',
    component: _Login2.default
}, {
    href: '/register',
    component: _Register2.default
}];

exports.default = routes;

/***/ }),
/* 7 */
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

var Register = function (_Component) {
  _inherits(Register, _Component);

  function Register(props) {
    _classCallCheck(this, Register);

    var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this, props));

    _this.host = document.createElement('div');
    return _this;
  }

  _createClass(Register, [{
    key: "render",
    value: function render() {
      return "\n        <div class=\"center-flex\">\n          <div class=\"register\">\n            <form>\n              <input type=\"text\" placeholder=\"Enter your name\">\n              <input type=\"email\" placeholder=\"Enter your email\">\n              <input type=\"text\" placeholder=\"Enter your password\">\n              <button class=\"button\">Register</button>\n            </form>\n            <a class=\"link\" href=\"#/login\">login</a>\n          </div>\n        </div>\n      ";
    }
  }]);

  return Register;
}(_app.Component);

exports.default = Register;

/***/ }),
/* 8 */
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

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this));

    _this.host = document.createElement('div');
    return _this;
  }

  _createClass(Login, [{
    key: "render",
    value: function render() {
      return "\n        <div class=\"center-flex\">\n          <div class=\"login\">\n            <form>\n              <input type=\"text\" placeholder=\"Enter your name\">\n              <input type=\"text\" placeholder=\"Enter your password\">\n              <button class=\"button\">login</button>\n            </form>\n            <a class=\"link\" href=\"#/register\">register</a>\n          </div>\n        </div>\n      ";
    }
  }]);

  return Login;
}(_app.Component);

exports.default = Login;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _app = __webpack_require__(0);

var _pizza_logo = __webpack_require__(10);

var _pizza_logo2 = _interopRequireDefault(_pizza_logo);

var _rucola = __webpack_require__(11);

var _rucola2 = _interopRequireDefault(_rucola);

var _ = __webpack_require__(12);

var _2 = _interopRequireDefault(_);

var _3 = __webpack_require__(13);

var _4 = _interopRequireDefault(_3);

var _5 = __webpack_require__(14);

var _6 = _interopRequireDefault(_5);

var _7 = __webpack_require__(15);

var _8 = _interopRequireDefault(_7);

var _9 = __webpack_require__(16);

var _10 = _interopRequireDefault(_9);

var _11 = __webpack_require__(17);

var _12 = _interopRequireDefault(_11);

var _13 = __webpack_require__(18);

var _14 = _interopRequireDefault(_13);

var _15 = __webpack_require__(19);

var _16 = _interopRequireDefault(_15);

var _17 = __webpack_require__(20);

var _18 = _interopRequireDefault(_17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PizzaList = function (_Component) {
    _inherits(PizzaList, _Component);

    function PizzaList() {
        _classCallCheck(this, PizzaList);

        var _this = _possibleConstructorReturn(this, (PizzaList.__proto__ || Object.getPrototypeOf(PizzaList)).call(this));

        _this.host = document.createElement('div');
        return _this;
    }

    _createClass(PizzaList, [{
        key: "render",
        value: function render() {
            return "\n        <header>\n            <div class=\"container\">\n                <div class=\"time\">\n                    <span>\n                        <i class=\"far fa-clock\"></i>\n                        <time datetime=\"00:00:00\" id=\"time\">00:00:00</time>\n                    </span>\n                </div>\n                <div class=\"logo\">\n                    <a href=\"#\">\n                        <img src=\"" + _pizza_logo2.default + "\" alt=\"pizza logo\">\n                    </a>\n                </div>\n                <div class=\"login\">\n                    <i class=\"fas fa-user\"></i>\n                    <a href=\"#\">login/signup</a>\n                </div>\n            </div>\n        </header>\n\n        <main>\n            <div class=\"buttons\">\n                <button class=\"button\" type=\"button\">\n                    <i class=\"fas fa-plus\"></i>\n                    Add new pizza\n                </button>\n            </div>\n\n            <div class=\"wrapper\">\n                <div class=\"pizza\">\n                    <img class=\"absolute\" src=\"" + _rucola2.default + "\" alt=\"rucola image\">\n                    <div class=\"pizza__image\">\n                        <img src=\"" + _2.default + "\" alt=\"pizza 1 image\">\n                    </div>\n                    <div class=\"pizza__text\">\n                        <div>\n                            <span>XX:XX:XX</span>\n                            <span>#1</span>\n                        </div> \n                        <div>\n                            <span><b>ETA:</b> <time datetime=\"01:00\">3 min</time></span>\n                            <span><b>$10.99</b></span>\n                        </div>      \n                    </div>\n                </div>\n                <div class=\"pizza\">\n                    <img class=\"absolute\" src=\"" + _rucola2.default + "\" alt=\"rucola image\">\n                    <div class=\"pizza__image\">\n                        <img src=\"" + _4.default + "\" alt=\"pizza 2 image\">\n                    </div>\n                    <div class=\"pizza__text\">\n                        <div>\n                            <span>XX:XX:XX</span>\n                            <span>#2</span>\n                        </div> \n                        <div>\n                            <span><b>ETA:</b> <time datetime=\"01:00\">1 min</time></span>\n                            <span><b>$14.99</b></span>\n                        </div>      \n                    </div>\n                </div>\n                <div class=\"pizza\">\n                    <img class=\"absolute\" src=\"" + _rucola2.default + "\" alt=\"rucola image\">    \n                    <div class=\"pizza__image\">\n                        <img src=\"" + _6.default + "\" alt=\"pizza 3 image\">\n                    </div>\n                    <div class=\"pizza__text\">\n                        <div>\n                            <span>XX:XX:XX</span>\n                            <span>#3</span>\n                        </div> \n                        <div>\n                            <span><b>ETA:</b> <time datetime=\"01:00\">5 min</time></span>\n                            <span><b>$10.99</b></span>\n                        </div>      \n                    </div>\n                </div>\n                \n                <div class=\"pizza\">\n                    <img class=\"absolute\" src=\"" + _rucola2.default + "\" alt=\"rucola image\">\n                    <div class=\"pizza__image\">\n                        <img src=\"" + _8.default + "\" alt=\"pizza 4 image\">\n                    </div>\n                    <div class=\"pizza__text\">\n                        <div>\n                            <span>XX:XX:XX</span>\n                            <span>#4</span>\n                        </div> \n                        <div>\n                            <span><b>ETA:</b> <time datetime=\"01:00\">10 min</time></span>\n                            <span><b>$8.99</b></span>\n                        </div>      \n                    </div>\n                </div>\n                <div class=\"pizza\">\n                    <img class=\"absolute\" src=\"" + _rucola2.default + "\" alt=\"rucola image\">\n                    <div class=\"pizza__image\">\n                        <img src=\"" + _10.default + "\" alt=\"pizza 5 image\">\n                    </div>\n                    <div class=\"pizza__text\">\n                        <div>\n                            <span>XX:XX:XX</span>\n                            <span>#5</span>\n                        </div> \n                        <div>\n                            <span><b>ETA:</b> <time datetime=\"01:00\">8 min</time></span>\n                            <span><b>$10.99</b></span>\n                        </div>      \n                    </div>\n                </div>\n                <div class=\"pizza\">\n                    <img class=\"absolute\" src=\"" + _rucola2.default + "\" alt=\"rucola image\">\n                    <div class=\"pizza__image\">\n                        <img src=\"" + _12.default + "\" alt=\"pizza 6 image\">\n                    </div>\n                    <div class=\"pizza__text\">\n                        <div>\n                            <span>XX:XX:XX</span>\n                            <span>#6</span>\n                        </div> \n                        <div>\n                            <span><b>ETA:</b> <time datetime=\"01:00\">7 min</time></span>\n                            <span><b>$10.00</b></span>\n                        </div>      \n                    </div>\n                </div>\n                \n                <div class=\"pizza\">\n                    <img class=\"absolute\" src=\"" + _rucola2.default + "\" alt=\"rucola image\">\n                    <div class=\"pizza__image\">\n                        <img src=\"" + _14.default + "\" alt=\"pizza 7 image\">\n                    </div>\n                    <div class=\"pizza__text\">\n                        <div>\n                            <span>XX:XX:XX</span>\n                            <span>#7</span>\n                        </div> \n                        <div>\n                            <span><b>ETA:</b> <time datetime=\"01:00\">2 min</time></span>\n                            <span><b>$12.99</b></span>\n                        </div>      \n                    </div>\n                </div>\n                <div class=\"pizza\">\n                    <img class=\"absolute\" src=\"" + _rucola2.default + "\" alt=\"rucola image\">\n                    <div class=\"pizza__image\">\n                        <img src=\"" + _16.default + "\" alt=\"pizza 8 image\">\n                    </div>\n                    <div class=\"pizza__text\">\n                        <div>\n                            <span>XX:XX:XX</span>\n                            <span>#8</span>\n                        </div> \n                        <div>\n                            <span><b>ETA:</b> <time datetime=\"01:00\">4 min</time></span>\n                            <span><b>$9.99</b></span>\n                        </div>      \n                    </div>\n                </div>\n                <div class=\"pizza\">\n                    <img class=\"absolute\" src=\"" + _rucola2.default + "\" alt=\"rucola image\">\n                    <div class=\"pizza__image\">\n                        <img src=\"" + _18.default + "\" alt=\"pizza 9 image\">\n                    </div>\n                    <div class=\"pizza__text\">\n                        <div>\n                            <span>XX:XX:XX</span>\n                            <span>#9</span>\n                        </div> \n                        <div>\n                            <span><b>ETA:</b> <time datetime=\"01:00\">2 min</time></span>\n                            <span><b>$11.99</b></span>\n                        </div>      \n                    </div>\n                </div>\n            </div>\n        </main>\n\n        <footer>\n            <div class=\"container\">\n                <span>\n                    Kottans, Kottans str, <a href=\"tel:5777887\">tel. 577-78-87</a> \n                </span>\n                <span>\n                    Pizza Manager &copy; 2018\n                </span>\n            </div>\n        </footer>\n      ";
        }
    }]);

    return PizzaList;
}(_app.Component);

exports.default = PizzaList;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/media/pizza_logo.png";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/media/rucola.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/media/1.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/media/2.png";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/media/3.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/media/4.png";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/media/5.png";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/media/6.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/media/7.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/media/8.png";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/media/9.png";

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTk5NTE2YjMyOTliMWI2ZjE0ZTciLCJ3ZWJwYWNrOi8vLy4vZGVmYXVsdC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvdG9vbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zYXNzL21haW4uc2FzcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9kZWZhdWx0L0NvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9yb3V0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9SZWdpc3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xvZ2luLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvUGl6emFMaXN0LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWcvcGl6emFfbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy9ydWNvbGEucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWcvMS5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy8yLnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nLzMucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWcvNC5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy81LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nLzYucG5nIiwid2VicGFjazovLy8uL2Fzc2V0cy9pbWcvNy5wbmciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2ltZy84LnBuZyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvaW1nLzkucG5nIl0sIm5hbWVzIjpbImRlZmF1bHQiLCJVUkxfUEFSQU1fUkVHRVhQIiwidG9IdG1sIiwidGVtcGxhdGUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJzdHJpbmciLCJ0cmltIiwiY29udGVudCIsImNsZWFyQ2hpbGRyZW4iLCJub2RlIiwiYXBwZW5kIiwiY2hpbGQiLCJBcnJheSIsImlzQXJyYXkiLCJpc1VybFBhcmFtIiwidGVzdCIsInBhdGgiLCJ1cmxUb1JlZ0V4cCIsIlJlZ0V4cCIsInVybCIsInJlcGxhY2UiLCJpc0VxdWFsUGF0aHMiLCJleHRyYWN0VXJsUGFyYW1zIiwidmFsdWVzIiwic3BsaXQiLCJwYXJhbXMiLCJyZWR1Y2UiLCJhY2MiLCJwYXJhbSIsImluZGV4Iiwic2xpY2UiLCJyb3V0ZXIiLCJyb290IiwiZ2V0RWxlbWVudEJ5SWQiLCJhcHBlbmRDaGlsZCIsImhvc3QiLCJBTllfUEFUSCIsIlJvdXRlciIsInJvdXRlcyIsInN0YXRlIiwiYWN0aXZlUm91dGUiLCJhY3RpdmVDb21wb25lbnQiLCJoYW5kbGVVcmxDaGFuZ2UiLCJiaW5kIiwiaGFuZGxlUmVkaXJlY3QiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyIsIm5leHRSb3V0ZSIsImZpbmQiLCJocmVmIiwicmVkaXJlY3RUbyIsIm9uRW50ZXIiLCJoYW5kbGVPbkVudGVyIiwiYXBwbHlSb3V0ZSIsImxvY2F0aW9uIiwiaGFzaCIsInJvdXRlIiwiQ29tcG9uZW50IiwiY29tcG9uZW50IiwiY29tcG9uZW50SW5zdGFuY2UiLCJ1bm1vdW50IiwidXBkYXRlU3RhdGUiLCJ1cGRhdGUiLCJwcm9wcyIsImh0bWwiLCJyZW5kZXIiLCJuZXh0UHJvcHMiLCJvbkJlZm9yZVVubW91bnQiLCJvbkJlZm9yZVVwZGF0ZSIsIl9yZW5kZXIiLCJuZXh0U3RhdGUiLCJPYmplY3QiLCJhc3NpZ24iLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJSZWdpc3RlciIsIkxvZ2luIiwiUGl6emFMaXN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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LElBQUwsR0FBWWpDLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBWjtBQUZZO0FBR2I7Ozs7aUNBRVE7QUFDUDtBQThMRDs7Ozs7O2tCQUdZNEUsUzs7Ozs7O0FDeE5qQix1RTs7Ozs7O0FDQUEsbUU7Ozs7OztBQ0FBLDhEOzs7Ozs7QUNBQSw4RDs7Ozs7O0FDQUEsOEQ7Ozs7OztBQ0FBLDhEOzs7Ozs7QUNBQSw4RDs7Ozs7O0FDQUEsOEQ7Ozs7OztBQ0FBLDhEOzs7Ozs7QUNBQSw4RDs7Ozs7O0FDQUEsOEQiLCJmaWxlIjoiLi9hc3NldHMvanMvYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDU5OTUxNmIzMjk5YjFiNmYxNGU3IiwiZXhwb3J0IHsgZGVmYXVsdCBhcyBDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudCc7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2RlZmF1bHQvYXBwLmpzIiwiY29uc3QgVVJMX1BBUkFNX1JFR0VYUCA9IC86XFx3Ky9nO1xyXG5cclxuZXhwb3J0IGNvbnN0IHRvSHRtbCA9IHN0cmluZyA9PiB7XHJcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XHJcbiAgICB0ZW1wbGF0ZS5pbm5lckhUTUwgPSBzdHJpbmcudHJpbSgpO1xyXG4gIFxyXG4gICAgcmV0dXJuIHRlbXBsYXRlLmNvbnRlbnQ7XHJcbn07XHJcbiAgXHJcbmV4cG9ydCBjb25zdCBjbGVhckNoaWxkcmVuID0gbm9kZSA9PiB7XHJcbiAgICBub2RlLmlubmVySFRNTCA9ICcnO1xyXG4gICAgcmV0dXJuIG5vZGU7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXBwZW5kID0gKG5vZGUsIGNoaWxkKSA9PiB7XHJcbiAgICBpZiAoQXJyYXkuaXNBcnJheShjaGlsZCkpIHtcclxuICAgICAgbm9kZS5hcHBlbmQoLi4uY2hpbGQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbm9kZS5hcHBlbmQoY2hpbGQpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIG5vZGU7XHJcbn07XHJcblxyXG5jb25zdCBpc1VybFBhcmFtID0gcGF0aCA9PiBVUkxfUEFSQU1fUkVHRVhQLnRlc3QocGF0aCk7XHJcbmNvbnN0IHVybFRvUmVnRXhwID0gdXJsID0+IFJlZ0V4cChgXiR7dXJsLnJlcGxhY2UoVVJMX1BBUkFNX1JFR0VYUCwgJyguKiknKX0kYCk7XHJcbmV4cG9ydCBjb25zdCBpc0VxdWFsUGF0aHMgPSAodGVtcGxhdGUsIHVybCkgPT4gdXJsVG9SZWdFeHAodGVtcGxhdGUpLnRlc3QodXJsKTtcclxuXHJcbmV4cG9ydCBjb25zdCBleHRyYWN0VXJsUGFyYW1zID0gKHRlbXBsYXRlLCB1cmwpID0+IHtcclxuICBjb25zdCB2YWx1ZXMgPSB1cmwuc3BsaXQoJy8nKTtcclxuICBjb25zdCBwYXJhbXMgPSB7fTtcclxuXHJcbiAgaWYgKCF2YWx1ZXMpIHtcclxuICAgIHJldHVybiBwYXJhbXM7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGVtcGxhdGUuc3BsaXQoJy8nKS5yZWR1Y2UoKGFjYywgcGFyYW0sIGluZGV4KSA9PiB7XHJcbiAgICBpZiAoIWlzVXJsUGFyYW0ocGFyYW0pKSB7XHJcbiAgICAgIHJldHVybiBhY2M7XHJcbiAgICB9XHJcbiAgICAvL1dlIG5lZWQgdG8gcmVtb3ZlICc6JyBmcm9tIHBhcmFtIG5hbWVcclxuICAgIGFjY1twYXJhbS5zbGljZSgxKV0gPSB2YWx1ZXNbaW5kZXhdO1xyXG5cclxuICAgIHJldHVybiBhY2M7XHJcbiAgfSwgcGFyYW1zKTtcclxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi91dGlscy90b29scy5qcyIsImltcG9ydCBcIi4vYXNzZXRzL3Nhc3MvbWFpbi5zYXNzXCI7XHJcbmltcG9ydCBjbGVhckNoaWxkcmVuIGZyb20gXCIuL3V0aWxzL3Rvb2xzXCJcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwiLi9jb21wb25lbnRzL1JvdXRlclwiO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gXCIuL3V0aWxzL3JvdXRlc1wiO1xyXG5cclxubGV0IHJvdXRlciA9IG5ldyBSb3V0ZXIocm91dGVzKTtcclxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XHJcbnJvb3QuYXBwZW5kQ2hpbGQocm91dGVyLmhvc3QpO1xyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zYXNzL21haW4uc2Fzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIi4uL2RlZmF1bHQvYXBwXCI7XHJcbmltcG9ydCB7IGlzVXJsUGFyYW0sIGlzRXF1YWxQYXRocywgZXh0cmFjdFVybFBhcmFtcyB9IGZyb20gJy4uL3V0aWxzL3Rvb2xzJztcclxuY29uc3QgQU5ZX1BBVEggPSAnKic7XHJcblxyXG5jbGFzcyBSb3V0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHJvdXRlcykge1xyXG4gICAgc3VwZXIoKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICBhY3RpdmVSb3V0ZTogbnVsbCxcclxuICAgICAgYWN0aXZlQ29tcG9uZW50OiBudWxsLFxyXG4gICAgICByb3V0ZXMsXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlVXJsQ2hhbmdlID0gdGhpcy5oYW5kbGVVcmxDaGFuZ2UuYmluZCh0aGlzKTtcclxuICAgIHRoaXMuaGFuZGxlUmVkaXJlY3QgPSB0aGlzLmhhbmRsZVJlZGlyZWN0LmJpbmQodGhpcyk7XHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCAoKSA9PlxyXG4gICAgICB0aGlzLmhhbmRsZVVybENoYW5nZSh0aGlzLnBhdGgpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlVXJsQ2hhbmdlKHRoaXMucGF0aCk7XHJcbiAgICBjb25zb2xlLmxvZygndGVzdCcpO1xyXG5cclxuICB9XHJcblxyXG4gIGdldCBwYXRoKCl7XHJcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhhc2guc2xpY2UoMSlcclxuICB9XHJcblxyXG4gIGhhbmRsZVVybENoYW5nZSh1cmwpe1xyXG4gICAgY29uc3QgeyByb3V0ZXMsIGFjdGl2ZVJvdXRlIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgbGV0IG5leHRSb3V0ZSA9IHJvdXRlcy5maW5kKCh7IGhyZWYgfSkgPT4gaXNFcXVhbFBhdGhzKGhyZWYsIHVybCkpO1xyXG5cclxuICAgIGlmICghbmV4dFJvdXRlKSB7XHJcbiAgICAgIG5leHRSb3V0ZSA9IHJvdXRlcy5maW5kKCh7IGhyZWYgfSkgPT4gaHJlZiA9PT0gQU5ZX1BBVEgpOyAvL2xvb2tpbmcgZm9yIGFueSByb3V0ZVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChuZXh0Um91dGUgJiYgYWN0aXZlUm91dGUgIT09IG5leHRSb3V0ZSkge1xyXG4gICAgICBpZiAoISFuZXh0Um91dGUucmVkaXJlY3RUbykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJlZGlyZWN0KG5leHRSb3V0ZS5yZWRpcmVjdFRvKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCEhbmV4dFJvdXRlLm9uRW50ZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5oYW5kbGVPbkVudGVyKG5leHRSb3V0ZSwgdXJsKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5hcHBseVJvdXRlKG5leHRSb3V0ZSwgdXJsKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBoYW5kbGVSZWRpcmVjdCh1cmwpIHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlT25FbnRlcihuZXh0Um91dGUsIHVybCkge1xyXG4gICAgY29uc3QgeyBocmVmIH0gPSBuZXh0Um91dGU7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBleHRyYWN0VXJsUGFyYW1zKGhyZWYsIHVybCk7XHJcbiAgICBuZXh0Um91dGUub25FbnRlcihwYXJhbXMsIHRoaXMuaGFuZGxlUmVkaXJlY3QsIG5leHRSb3V0ZSk7XHJcbiAgfVxyXG5cclxuICBhcHBseVJvdXRlKHJvdXRlLCB1cmwpIHtcclxuICAgIGNvbnN0IHsgaHJlZiwgY29tcG9uZW50OiBDb21wb25lbnQgfSA9IHJvdXRlO1xyXG4gICAgY29uc3QgeyBhY3RpdmVDb21wb25lbnQgfSA9IHRoaXMuc3RhdGU7XHJcblxyXG4gICAgY29uc3QgY29tcG9uZW50SW5zdGFuY2UgPSBuZXcgQ29tcG9uZW50KHtcclxuICAgICAgcGFyYW1zOiBleHRyYWN0VXJsUGFyYW1zKGhyZWYsIHRoaXMucGF0aCksXHJcbiAgICAgIHJlcGxhY2U6IHRoaXMuaGFuZGxlUmVkaXJlY3QsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoYWN0aXZlQ29tcG9uZW50KSB7XHJcbiAgICAgIGFjdGl2ZUNvbXBvbmVudC51bm1vdW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSh7XHJcbiAgICAgIGFjdGl2ZVJvdXRlOiByb3V0ZSxcclxuICAgICAgYWN0aXZlQ29tcG9uZW50OiBjb21wb25lbnRJbnN0YW5jZSxcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc3RhdGUuYWN0aXZlQ29tcG9uZW50LnVwZGF0ZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm91dGVyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL1JvdXRlci5qcyIsImltcG9ydCB7dG9IdG1sLGNsZWFyQ2hpbGRyZW4sYXBwZW5kfSBmcm9tIFwiLi4vdXRpbHMvdG9vbHNcIjtcclxuXHJcbmNsYXNzIENvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHRoaXMucHJvcHMgPSBwcm9wcyB8fCB7fTtcclxuICAgIHRoaXMuc3RhdGUgPSB7fTtcclxuICAgIHRoaXMuaG9zdCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xyXG4gICAgdGhpcy51cGRhdGVTdGF0ZSA9IHRoaXMudXBkYXRlU3RhdGUuYmluZCh0aGlzKTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxuICBfcmVuZGVyKCkge1xyXG4gICAgY29uc3QgaHRtbCA9IHRoaXMucmVuZGVyKCk7XHJcblxyXG4gICAgaWYgKCFodG1sICYmIHRoaXMuaG9zdCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5ob3N0O1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgaHRtbCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgcmV0dXJuIGFwcGVuZChjbGVhckNoaWxkcmVuKHRoaXMuaG9zdCksIHRvSHRtbChodG1sKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gYXBwZW5kKGNsZWFyQ2hpbGRyZW4odGhpcy5ob3N0KSwgaHRtbCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXQgbmFtZSgpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLm5hbWU7XHJcbiAgfVxyXG5cclxuICBvbkJlZm9yZVVwZGF0ZShuZXh0UHJvcHMpIHt9XHJcbiAgb25CZWZvcmVVbm1vdW50KCkge31cclxuXHJcbiAgdW5tb3VudCgpIHtcclxuICAgIHRoaXMub25CZWZvcmVVbm1vdW50KCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUobmV4dFByb3BzKSB7XHJcbiAgICB0aGlzLm9uQmVmb3JlVXBkYXRlKG5leHRQcm9wcyk7XHJcbiAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xyXG4gICAgcmV0dXJuIHRoaXMuX3JlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlU3RhdGUoc3RhdGUpIHtcclxuICAgIGNvbnN0IG5leHRTdGF0ZSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUsIHN0YXRlKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlID0gbmV4dFN0YXRlO1xyXG4gICAgdGhpcy5fcmVuZGVyKCk7XHJcblxyXG4gICAgcmV0dXJuIG5leHRTdGF0ZTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vZGVmYXVsdC9Db21wb25lbnQuanMiLCJpbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVnaXN0ZXJcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ2luXCI7XHJcbmltcG9ydCBQaXp6YUxpc3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGl6emFMaXN0XCI7XHJcblxyXG5jb25zdCByb3V0ZXMgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaHJlZjogJy8nLFxyXG4gICAgICAgIGNvbXBvbmVudDogUGl6emFMaXN0LFxyXG4gICAgICAgIG9uRW50ZXI6IGhhbmRsZVJlZGlyZWN0ID0+IHtcclxuICAgICAgICAgICAgaWYodHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9IFwiL2xvZ2luXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGhyZWY6ICcvbG9naW4nLFxyXG4gICAgICAgIGNvbXBvbmVudDogTG9naW5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaHJlZjogJy9yZWdpc3RlcicsXHJcbiAgICAgICAgY29tcG9uZW50OiBSZWdpc3RlclxyXG4gICAgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm91dGVzO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3V0aWxzL3JvdXRlcy5qcyIsImltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiLi4vZGVmYXVsdC9hcHBcIlxyXG5cclxuY2xhc3MgUmVnaXN0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIH1cclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyLWZsZXhcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWdpc3RlclwiPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbmFtZVwiPlxyXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgZW1haWxcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImxpbmtcIiBocmVmPVwiIy9sb2dpblwiPmxvZ2luPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IFJlZ2lzdGVyO1xyXG4gIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUmVnaXN0ZXIuanMiLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIi4uL2RlZmF1bHQvYXBwXCJcclxuXHJcblxyXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgdGhpcy5ob3N0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHJldHVybiBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlci1mbGV4XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5cIj5cclxuICAgICAgICAgICAgPGZvcm0+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIG5hbWVcIj5cclxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCI+bG9naW48L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8YSBjbGFzcz1cImxpbmtcIiBocmVmPVwiIy9yZWdpc3RlclwiPnJlZ2lzdGVyPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIGA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIGV4cG9ydCBkZWZhdWx0IExvZ2luO1xyXG4gIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvTG9naW4uanMiLCJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIi4uL2RlZmF1bHQvYXBwXCI7XHJcblxyXG5pbXBvcnQgbG9nbyBmcm9tIFwiLi4vYXNzZXRzL2ltZy9waXp6YV9sb2dvLnBuZ1wiO1xyXG5pbXBvcnQgcnVjb2xhIGZyb20gXCIuLi9hc3NldHMvaW1nL3J1Y29sYS5wbmdcIjtcclxuaW1wb3J0IHBpenphSW1nMSBmcm9tIFwiLi4vYXNzZXRzL2ltZy8xLnBuZ1wiO1xyXG5pbXBvcnQgcGl6emFJbWcyIGZyb20gXCIuLi9hc3NldHMvaW1nLzIucG5nXCI7XHJcbmltcG9ydCBwaXp6YUltZzMgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvMy5wbmdcIjtcclxuaW1wb3J0IHBpenphSW1nNCBmcm9tIFwiLi4vYXNzZXRzL2ltZy80LnBuZ1wiO1xyXG5pbXBvcnQgcGl6emFJbWc1IGZyb20gXCIuLi9hc3NldHMvaW1nLzUucG5nXCI7XHJcbmltcG9ydCBwaXp6YUltZzYgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvNi5wbmdcIjtcclxuaW1wb3J0IHBpenphSW1nNyBmcm9tIFwiLi4vYXNzZXRzL2ltZy83LnBuZ1wiO1xyXG5pbXBvcnQgcGl6emFJbWc4IGZyb20gXCIuLi9hc3NldHMvaW1nLzgucG5nXCI7XHJcbmltcG9ydCBwaXp6YUltZzkgZnJvbSBcIi4uL2Fzc2V0cy9pbWcvOS5wbmdcIjtcclxuXHJcblxyXG5cclxuY2xhc3MgUGl6emFMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBzdXBlcigpO1xyXG4gICAgICB0aGlzLmhvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIH1cclxuICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhciBmYS1jbG9ja1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHRpbWUgZGF0ZXRpbWU9XCIwMDowMDowMFwiIGlkPVwidGltZVwiPjAwOjAwOjAwPC90aW1lPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7bG9nb31cIiBhbHQ9XCJwaXp6YSBsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS11c2VyXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+bG9naW4vc2lnbnVwPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG5cclxuICAgICAgICA8bWFpbj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIiB0eXBlPVwiYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtcGx1c1wiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICBBZGQgbmV3IHBpenphXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImFic29sdXRlXCIgc3JjPVwiJHtydWNvbGF9XCIgYWx0PVwicnVjb2xhIGltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphX19pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cGl6emFJbWcxfVwiIGFsdD1cInBpenphIDEgaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGl6emFfX3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlhYOlhYOlhYPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IzE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxiPkVUQTo8L2I+IDx0aW1lIGRhdGV0aW1lPVwiMDE6MDBcIj4zIG1pbjwvdGltZT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48Yj4kMTAuOTk8L2I+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImFic29sdXRlXCIgc3JjPVwiJHtydWNvbGF9XCIgYWx0PVwicnVjb2xhIGltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphX19pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cGl6emFJbWcyfVwiIGFsdD1cInBpenphIDIgaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGl6emFfX3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlhYOlhYOlhYPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IzI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxiPkVUQTo8L2I+IDx0aW1lIGRhdGV0aW1lPVwiMDE6MDBcIj4xIG1pbjwvdGltZT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48Yj4kMTQuOTk8L2I+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImFic29sdXRlXCIgc3JjPVwiJHtydWNvbGF9XCIgYWx0PVwicnVjb2xhIGltYWdlXCI+ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaXp6YV9faW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3BpenphSW1nM31cIiBhbHQ9XCJwaXp6YSAzIGltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphX190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5YWDpYWDpYWDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiMzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48Yj5FVEE6PC9iPiA8dGltZSBkYXRldGltZT1cIjAxOjAwXCI+NSBtaW48L3RpbWU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGI+JDEwLjk5PC9iPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImFic29sdXRlXCIgc3JjPVwiJHtydWNvbGF9XCIgYWx0PVwicnVjb2xhIGltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphX19pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cGl6emFJbWc0fVwiIGFsdD1cInBpenphIDQgaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGl6emFfX3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlhYOlhYOlhYPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IzQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxiPkVUQTo8L2I+IDx0aW1lIGRhdGV0aW1lPVwiMDE6MDBcIj4xMCBtaW48L3RpbWU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGI+JDguOTk8L2I+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImFic29sdXRlXCIgc3JjPVwiJHtydWNvbGF9XCIgYWx0PVwicnVjb2xhIGltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphX19pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cGl6emFJbWc1fVwiIGFsdD1cInBpenphIDUgaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGl6emFfX3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlhYOlhYOlhYPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IzU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxiPkVUQTo8L2I+IDx0aW1lIGRhdGV0aW1lPVwiMDE6MDBcIj44IG1pbjwvdGltZT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48Yj4kMTAuOTk8L2I+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImFic29sdXRlXCIgc3JjPVwiJHtydWNvbGF9XCIgYWx0PVwicnVjb2xhIGltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphX19pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIiR7cGl6emFJbWc2fVwiIGFsdD1cInBpenphIDYgaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGl6emFfX3RleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlhYOlhYOlhYPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IzY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxiPkVUQTo8L2I+IDx0aW1lIGRhdGV0aW1lPVwiMDE6MDBcIj43IG1pbjwvdGltZT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48Yj4kMTAuMDA8L2I+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGl6emFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiYWJzb2x1dGVcIiBzcmM9XCIke3J1Y29sYX1cIiBhbHQ9XCJydWNvbGEgaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGl6emFfX2ltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwaXp6YUltZzd9XCIgYWx0PVwicGl6emEgNyBpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaXp6YV9fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+WFg6WFg6WFg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4jNzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGI+RVRBOjwvYj4gPHRpbWUgZGF0ZXRpbWU9XCIwMTowMFwiPjIgbWluPC90aW1lPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxiPiQxMi45OTwvYj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGl6emFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwiYWJzb2x1dGVcIiBzcmM9XCIke3J1Y29sYX1cIiBhbHQ9XCJydWNvbGEgaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicGl6emFfX2ltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwaXp6YUltZzh9XCIgYWx0PVwicGl6emEgOCBpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaXp6YV9fdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+WFg6WFg6WFg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4jODwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGI+RVRBOjwvYj4gPHRpbWUgZGF0ZXRpbWU9XCIwMTowMFwiPjQgbWluPC90aW1lPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxiPiQ5Ljk5PC9iPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaXp6YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJhYnNvbHV0ZVwiIHNyYz1cIiR7cnVjb2xhfVwiIGFsdD1cInJ1Y29sYSBpbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwaXp6YV9faW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3BpenphSW1nOX1cIiBhbHQ9XCJwaXp6YSA5IGltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBpenphX190ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5YWDpYWDpYWDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPiM5PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj48Yj5FVEE6PC9iPiA8dGltZSBkYXRldGltZT1cIjAxOjAwXCI+MiBtaW48L3RpbWU+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+PGI+JDExLjk5PC9iPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9tYWluPlxyXG5cclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICBLb3R0YW5zLCBLb3R0YW5zIHN0ciwgPGEgaHJlZj1cInRlbDo1Nzc3ODg3XCI+dGVsLiA1NzctNzgtODc8L2E+IFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgUGl6emEgTWFuYWdlciAmY29weTsgMjAxOFxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICAgYDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgUGl6emFMaXN0O1xyXG4gIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvUGl6emFMaXN0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL21lZGlhL3BpenphX2xvZ28ucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvaW1nL3BpenphX2xvZ28ucG5nXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvbWVkaWEvcnVjb2xhLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2ltZy9ydWNvbGEucG5nXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvbWVkaWEvMS5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9pbWcvMS5wbmdcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9tZWRpYS8yLnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2ltZy8yLnBuZ1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL21lZGlhLzMucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvaW1nLzMucG5nXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvbWVkaWEvNC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9pbWcvNC5wbmdcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9tZWRpYS81LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2ltZy81LnBuZ1xuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL21lZGlhLzYucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvaW1nLzYucG5nXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJhc3NldHMvbWVkaWEvNy5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9pbWcvNy5wbmdcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImFzc2V0cy9tZWRpYS84LnBuZ1wiO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL2ltZy84LnBuZ1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL21lZGlhLzkucG5nXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvaW1nLzkucG5nXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9