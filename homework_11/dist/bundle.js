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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interface_module__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculating_module__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_styles_css__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_styles_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_styles_css__);




Object(__WEBPACK_IMPORTED_MODULE_0__interface_module__["a" /* default */])();
let leftInput = document.getElementById('left-input'),
  rightInput = document.getElementById('right-input'),
  buttons = document.getElementsByClassName('btn-action'),
  result = document.getElementById('result'),
  i = 0;

for (i; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function (elem) {
    let left = leftInput.value,
      right = rightInput.value,
      action = elem.target.innerHTML;

    result.innerHTML = Object(__WEBPACK_IMPORTED_MODULE_1__calculating_module__["a" /* default */])(left, right, action);
  });
};

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function () {
  let main = document.createElement('div'),
    inputDiv = document.createElement('div'),
    leftInput = document.createElement('input'),
    rightInput = document.createElement('input'),
    result = document.createElement('p'),
    p = document.createElement('p'),
    buttonDiv = document.createElement('div'),
    buttonAction = ['+', '-', '*', '/'];

  leftInput.id = 'left-input';
  rightInput.id = 'right-input';
  result.id = 'result';
  p.innerHTML = '<span>Your result: </span>';

  for (let i = 0, l = buttonAction.length; i < l; i++) {
    let button = document.createElement('button');

    button.className = 'btn-action';
    button.innerHTML = buttonAction[i];
    buttonDiv.appendChild(button);
  };

  main.className = 'main';
  inputDiv.className = 'main-input';
  buttonDiv.className = 'main-button';

  inputDiv.appendChild(leftInput);
  inputDiv.appendChild(rightInput);
  main.appendChild(inputDiv);
  main.appendChild(p);
  main.appendChild(result);
  main.appendChild(buttonDiv);
  document.body.appendChild(main);
});;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function (a, b, action) {
  let result = 0;
  if (isNaN(a) || isNaN(b)) {
    result = 'Please enter a number';
    return result;
  } else if (action === '+') {
    result = parseFloat(a) + parseFloat(b);
    return result;
  } else if (action === '-') {
    result = parseFloat(a) - parseFloat(b);
    return result;
  } else if (action === '*') {
    result = parseFloat(a) * parseFloat(b);
    return result;
  } else if (action === '/') {
    result = parseFloat(a) / parseFloat(b);
    return result;
  }
});;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);