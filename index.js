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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!**************************************!*\
  !*** ./src/Controller/Controller.js ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Controller = function () {\n    function Controller(modle) {\n        _classCallCheck(this, Controller);\n\n        this.modle = modle;\n    }\n\n    _createClass(Controller, [{\n        key: \"handleClick\",\n        value: function handleClick(e) {\n            var logEvnObject = {};\n            for (var i = 0; i < this.modle.eventNames.length; i++) {\n                logEvnObject[this.modle.eventNames[i]] = e.target[this.modle.eventNames[i]];\n            }\n            this.modle.addEvent(logEvnObject);\n        }\n    }]);\n\n    return Controller;\n}();\n\nexports.default = Controller;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvQ29udHJvbGxlci9Db250cm9sbGVyLmpzP2U5MTQiXSwic291cmNlc0NvbnRlbnQiOlsiXG5jbGFzcyBDb250cm9sbGVye1xuICAgIGNvbnN0cnVjdG9yKG1vZGxlKXtcbiAgICAgICAgdGhpcy5tb2RsZT1tb2RsZTtcbiAgICB9XG4gICAgaGFuZGxlQ2xpY2soZSl7XG4gICAgICAgY29uc3QgbG9nRXZuT2JqZWN0PSB7fTtcbiAgICAgICAgZm9yKGxldCBpPTA7aTx0aGlzLm1vZGxlLmV2ZW50TmFtZXMubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBsb2dFdm5PYmplY3RbdGhpcy5tb2RsZS5ldmVudE5hbWVzW2ldXT1lLnRhcmdldFt0aGlzLm1vZGxlLmV2ZW50TmFtZXNbaV1dO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubW9kbGUuYWRkRXZlbnQobG9nRXZuT2JqZWN0KTtcbiAgICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQ29udHJvbGxlcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL0NvbnRyb2xsZXIvQ29udHJvbGxlci5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBSUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!****************************!*\
  !*** ./src/Modle/Modle.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _Store = __webpack_require__(/*! ../Store/Store */ 2);\n\nvar _Store2 = _interopRequireDefault(_Store);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Modle = function () {\n    function Modle(deffered, eventNames, numOfClicks) {\n        _classCallCheck(this, Modle);\n\n        this.deffered = deffered;\n        this.numOfClicks = numOfClicks;\n        this.eventNames = eventNames;\n        this.store = new _Store2.default();\n        this.currentClick = this.store.get().length || 0;\n    }\n\n    _createClass(Modle, [{\n        key: 'addEvent',\n        value: function addEvent(eObj) {\n            if (this.currentClick >= this.numOfClicks) {\n                this.deffered(this.store.get());\n                this.currentClick = 0;\n                this.store.reset();\n            }\n            this.store.add(eObj);\n            this.currentClick++;\n        }\n    }]);\n\n    return Modle;\n}();\n\nexports.default = Modle;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvTW9kbGUvTW9kbGUuanM/YTc5NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU3RvcmUgZnJvbSAnLi4vU3RvcmUvU3RvcmUnO1xuXG5cbmNsYXNzIE1vZGxle1xuICAgIGNvbnN0cnVjdG9yKGRlZmZlcmVkLGV2ZW50TmFtZXMsIG51bU9mQ2xpY2tzKXtcbiAgICAgICAgdGhpcy5kZWZmZXJlZD1kZWZmZXJlZDtcbiAgICAgICAgdGhpcy5udW1PZkNsaWNrcz1udW1PZkNsaWNrcztcbiAgICAgICAgdGhpcy5ldmVudE5hbWVzPWV2ZW50TmFtZXM7XG4gICAgICAgIHRoaXMuc3RvcmU9IG5ldyBTdG9yZSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRDbGljaz10aGlzLnN0b3JlLmdldCgpLmxlbmd0aHx8MDtcbiAgICB9XG5cbiAgICBhZGRFdmVudChlT2JqKXtcbiAgICAgICAgaWYodGhpcy5jdXJyZW50Q2xpY2s+PXRoaXMubnVtT2ZDbGlja3Mpe1xuICAgICAgICAgICAgdGhpcy5kZWZmZXJlZCh0aGlzLnN0b3JlLmdldCgpKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudENsaWNrPTA7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLnJlc2V0KCk7IFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RvcmUuYWRkKGVPYmopO1xuICAgICAgICB0aGlzLmN1cnJlbnRDbGljaysrO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTW9kbGU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHNyYy9Nb2RsZS9Nb2RsZS5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBOzs7Ozs7O0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFHQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/* no static exports found */
/* all exports used */
/*!****************************!*\
  !*** ./src/Store/Store.js ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Store = function () {\n    function Store() {\n        _classCallCheck(this, Store);\n\n        localStorage.setItem('hotSpot', '[]');\n    }\n\n    _createClass(Store, [{\n        key: 'get',\n        value: function get() {\n            return JSON.parse(localStorage.getItem('hotSpot'));\n        }\n    }, {\n        key: 'add',\n        value: function add(data) {\n            var newData = [].concat(_toConsumableArray(this.get()), [data]);\n            localStorage.setItem('hotSpot', JSON.stringify(newData));\n        }\n    }, {\n        key: 'reset',\n        value: function reset() {\n            localStorage.setItem('hotSpot', '[]');\n        }\n    }]);\n\n    return Store;\n}();\n\nexports.default = Store;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvU3RvcmUvU3RvcmUuanM/ZmFkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTdG9yZXsgIFxuICAgIGNvbnN0cnVjdG9yKCl7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdob3RTcG90JywnW10nKTtcbiAgICB9XG4gICAgZ2V0KCl7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdob3RTcG90JykpO1xuICAgIH1cbiAgICBhZGQoZGF0YSl7XG4gICAgICAgIGNvbnN0IG5ld0RhdGE9IFsuLi50aGlzLmdldCgpLGRhdGFdO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaG90U3BvdCcsSlNPTi5zdHJpbmdpZnkobmV3RGF0YSkpO1xuICAgIH1cbiAgICByZXNldCgpe1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaG90U3BvdCcsJ1tdJyk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN0b3JlO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvU3RvcmUvU3RvcmUuanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQUlBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/* no static exports found */
/* all exports used */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _Modle = __webpack_require__(/*! ./Modle/Modle */ 1);\n\nvar _Modle2 = _interopRequireDefault(_Modle);\n\nvar _Controller = __webpack_require__(/*! ./Controller/Controller */ 0);\n\nvar _Controller2 = _interopRequireDefault(_Controller);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } } /**\n                                                                                                                                                           * @file index file\n                                                                                                                                                           * @author Karan Jariwala <karanjariwala@gmail.com>\n                                                                                                                                                           * @version 0.1\n                                                                                                                                                           */\n\nvar HotSpot =\n/**\n   * The HotSpot definition.\n   *\n   * @param {function} cb - Callback function\n   * @param {array} eventNames - Array of keys of javascript event object you want to log.\n   * @param {Number} numOfClicks - Number of clicks after which callback should get executed.\n   */\nfunction HotSpot(cb, eventNames, numOfClicks) {\n    _classCallCheck(this, HotSpot);\n\n    this.modle = new _Modle2.default(cb, eventNames, numOfClicks);\n    this.controller = new _Controller2.default(this.modle);\n};\n\nvar app = function app(cb, eventNames, numOfClicks) {\n    var hotSwapIns = new HotSpot(cb, eventNames, numOfClicks);\n    window.addEventListener(\"click\", function (e) {\n        hotSwapIns.controller.handleClick(e);\n    });\n};\n\n//app((data)=>console.log(data),['className', 'id','innerHTML'],3);\n\nexports.default = app;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBmaWxlIGluZGV4IGZpbGVcbiAqIEBhdXRob3IgS2FyYW4gSmFyaXdhbGEgPGthcmFuamFyaXdhbGFAZ21haWwuY29tPlxuICogQHZlcnNpb24gMC4xXG4gKi9cblxuXG5pbXBvcnQgTW9kbGUgZnJvbSAnLi9Nb2RsZS9Nb2RsZSc7XG5pbXBvcnQgQ29udHJvbGxlciBmcm9tICcuL0NvbnRyb2xsZXIvQ29udHJvbGxlcic7XG5cbmNsYXNzIEhvdFNwb3R7XG4vKipcbiAgICogVGhlIEhvdFNwb3QgZGVmaW5pdGlvbi5cbiAgICpcbiAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2IgLSBDYWxsYmFjayBmdW5jdGlvblxuICAgKiBAcGFyYW0ge2FycmF5fSBldmVudE5hbWVzIC0gQXJyYXkgb2Yga2V5cyBvZiBqYXZhc2NyaXB0IGV2ZW50IG9iamVjdCB5b3Ugd2FudCB0byBsb2cuXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBudW1PZkNsaWNrcyAtIE51bWJlciBvZiBjbGlja3MgYWZ0ZXIgd2hpY2ggY2FsbGJhY2sgc2hvdWxkIGdldCBleGVjdXRlZC5cbiAgICovXG4gICAgY29uc3RydWN0b3IoY2IsZXZlbnROYW1lcywgbnVtT2ZDbGlja3MgKXtcbiAgICAgICAgdGhpcy5tb2RsZT0gbmV3IE1vZGxlKGNiLGV2ZW50TmFtZXMsIG51bU9mQ2xpY2tzKTtcbiAgICAgICAgdGhpcy5jb250cm9sbGVyPSBuZXcgQ29udHJvbGxlcih0aGlzLm1vZGxlKTtcbiAgICB9XG59XG5jb25zdCBhcHAgPSAoY2IsZXZlbnROYW1lcywgbnVtT2ZDbGlja3MgKT0+e1xuICAgIGxldCBob3RTd2FwSW5zPSBuZXcgSG90U3BvdChjYixldmVudE5hbWVzLCBudW1PZkNsaWNrcyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLChlKT0+e2hvdFN3YXBJbnMuY29udHJvbGxlci5oYW5kbGVDbGljayhlKX0pfVxuXG5cbi8vYXBwKChkYXRhKT0+Y29uc29sZS5sb2coZGF0YSksWydjbGFzc05hbWUnLCAnaWQnLCdpbm5lckhUTUwnXSwzKTtcblxuZXhwb3J0IGRlZmF1bHQgYXBwO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL2luZGV4LmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFPQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQVRBOzs7Ozs7QUFVQTtBQUNBOzs7Ozs7O0FBT0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);