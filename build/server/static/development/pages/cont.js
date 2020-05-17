module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Account/Details.js":
/*!***************************************!*\
  !*** ./components/Account/Details.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AccountDetails; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\Account\\Details.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function AccountDetails() {
  return __jsx("div", {
    className: "jsx-3150517838" + " " + "details-account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-3150517838" + " " + "details-account__category",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3150517838" + " " + "details-account__row details-account__row--category",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 17
    }
  }, "Nume"), __jsx("div", {
    className: "jsx-3150517838" + " " + "details-account__row details-account__row--category",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, "Prenume"), __jsx("div", {
    className: "jsx-3150517838" + " " + "details-account__row details-account__row--category",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, "E-Mail"), __jsx("div", {
    className: "jsx-3150517838" + " " + "details-account__row details-account__row--category",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, "Telefon"), __jsx("div", {
    className: "jsx-3150517838" + " " + "details-account__row details-account__row--category",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "Regiune")), __jsx("div", {
    className: "jsx-3150517838" + " " + "details-account__info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3150517838" + " " + "details-account__row details-account__row--info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, "John"), __jsx("div", {
    className: "jsx-3150517838" + " " + "details-account__row details-account__row--info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "Doe"), __jsx("div", {
    className: "jsx-3150517838" + " " + "details-account__row details-account__row--info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }, "johndoe@longexample.com"), __jsx("div", {
    className: "jsx-3150517838" + " " + "details-account__row details-account__row--info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, "+0007123456789"), __jsx("div", {
    className: "jsx-3150517838" + " " + "details-account__row details-account__row--info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "USA")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3150517838",
    __self: this
  }, ".details-account.jsx-3150517838{width:70%;margin:30px auto 150px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:var(--background-primary);box-shadow:var(--box-shadow);color:var(--text-primary);-webkit-transform:color,background-color 300ms ease;-ms-transform:color,background-color 300ms ease;transform:color,background-color 300ms ease;-webkit-animation:comeIn-jsx-3150517838 300ms ease;animation:comeIn-jsx-3150517838 300ms ease;}.details-account__category.jsx-3150517838,.details-account__info.jsx-3150517838{width:50%;height:100%;}.details-account__category.jsx-3150517838{font-weight:bold;}.details-account__row.jsx-3150517838{width:100%;padding:30px 40px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-x:overlay;}.details-account__row.jsx-3150517838:nth-child(odd){background-color:var(--background-secondary);}@media screen and (max-width:768px){.details-account.jsx-3150517838{width:90%;}}@-webkit-keyframes comeIn-jsx-3150517838{from{-webkit-transform:translateX(15px);-ms-transform:translateX(15px);transform:translateX(15px);opacity:0;}to{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}}@keyframes comeIn-jsx-3150517838{from{-webkit-transform:translateX(15px);-ms-transform:translateX(15px);transform:translateX(15px);opacity:0;}to{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEFjY291bnRcXERldGFpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUN3QixBQUcrQixBQVlBLEFBS08sQUFJTixBQVFrQyxBQUsvQixBQU1pQixBQUlILFVBM0NMLEFBWVgsQUFzQlosQ0Fia0IsTUFKdEIsS0FKQSxPQVNpQixJQXJCQSxZQTRCakIsdUNBZWtCLFNBSkEsQ0FLZCxTQXRCbUIsQUFrQm5CLElBdkMyQywyQ0FDZCw2QkFDSCxpQkFvQlAsU0FuQjBCLFVBb0JqRCxzSUFuQmdDLDhGQUNoQyIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxBY2NvdW50XFxEZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3VudERldGFpbHMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1hY2NvdW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1hY2NvdW50X19jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWFjY291bnRfX3JvdyBkZXRhaWxzLWFjY291bnRfX3Jvdy0tY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBOdW1lXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1hY2NvdW50X19yb3cgZGV0YWlscy1hY2NvdW50X19yb3ctLWNhdGVnb3J5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgUHJlbnVtZVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtYWNjb3VudF9fcm93IGRldGFpbHMtYWNjb3VudF9fcm93LS1jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEUtTWFpbFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtYWNjb3VudF9fcm93IGRldGFpbHMtYWNjb3VudF9fcm93LS1jYXRlZ29yeVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIFRlbGVmb25cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWFjY291bnRfX3JvdyBkZXRhaWxzLWFjY291bnRfX3Jvdy0tY2F0ZWdvcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICBSZWdpdW5lXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1hY2NvdW50X19pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtYWNjb3VudF9fcm93IGRldGFpbHMtYWNjb3VudF9fcm93LS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSm9oblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtYWNjb3VudF9fcm93IGRldGFpbHMtYWNjb3VudF9fcm93LS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRG9lXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy1hY2NvdW50X19yb3cgZGV0YWlscy1hY2NvdW50X19yb3ctLWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICBqb2huZG9lQGxvbmdleGFtcGxlLmNvbVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbHMtYWNjb3VudF9fcm93IGRldGFpbHMtYWNjb3VudF9fcm93LS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgKzAwMDcxMjM0NTY3ODlcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLWFjY291bnRfX3JvdyBkZXRhaWxzLWFjY291bnRfX3Jvdy0taW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIFVTQVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuZGV0YWlscy1hY2NvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvIDE1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBjb21lSW4gMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZGV0YWlscy1hY2NvdW50X19jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIC5kZXRhaWxzLWFjY291bnRfX2luZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kZXRhaWxzLWFjY291bnRfX2NhdGVnb3J5IHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZGV0YWlscy1hY2NvdW50X19yb3cge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggNDBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogb3ZlcmxheTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZGV0YWlscy1hY2NvdW50X19yb3c6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5kZXRhaWxzLWFjY291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGNvbWVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\Account\\\\Details.js */"));
}

/***/ }),

/***/ "./components/Account/ExercisesDetails.js":
/*!************************************************!*\
  !*** ./components/Account/ExercisesDetails.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExercisesDetails; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\Account\\ExercisesDetails.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ExercisesDetails() {
  return __jsx("div", {
    className: "jsx-1338933671" + " " + "exercises-account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx(SolvedExercises, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx(UnsolvedExercises, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1338933671",
    __self: this
  }, ".exercises-account.jsx-1338933671{width:70%;height:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin:30px auto 150px;-webkit-animation:comeIn-jsx-1338933671 300ms ease;animation:comeIn-jsx-1338933671 300ms ease;}@media screen and (max-width:930px){.exercises-account.jsx-1338933671{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}}@media screen and (max-width:768px){.exercises-account.jsx-1338933671{width:90%;}}@-webkit-keyframes comeIn-jsx-1338933671{from{-webkit-transform:translateX(15px);-ms-transform:translateX(15px);transform:translateX(15px);opacity:0;}to{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}}@keyframes comeIn-jsx-1338933671{from{-webkit-transform:translateX(15px);-ms-transform:translateX(15px);transform:translateX(15px);opacity:0;}to{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEFjY291bnRcXEV4ZXJjaXNlc0RldGFpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUXdCLEFBRytCLEFBVWdCLEFBTVosQUFNaUIsQUFJSCxVQXpCaEIsQUFnQlosWUFmYSx3REFTYixNQWdCYyxTQUpBLENBS2QsRUF6QjhCLE9BcUI5Qiw0R0FwQnVCLHVCQUNLLDhGQUNoQyIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxBY2NvdW50XFxFeGVyY2lzZXNEZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhlcmNpc2VzRGV0YWlscygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGVyY2lzZXMtYWNjb3VudFwiPlxyXG4gICAgICAgICAgICA8U29sdmVkRXhlcmNpc2VzIC8+XHJcbiAgICAgICAgICAgIDxVbnNvbHZlZEV4ZXJjaXNlcyAvPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmV4ZXJjaXNlcy1hY2NvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggYXV0byAxNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGNvbWVJbiAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmV4ZXJjaXNlcy1hY2NvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZXhlcmNpc2VzLWFjY291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGNvbWVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBFeGVyY2lzZXNQYW5lbCh7IHRpdGxlLCBhbW91bnRPZkV4ZXJjaXNlcywgY2hpbGRyZW4sIHNvbHZlZFN0YXRlIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGVyY2lzZXMtYWNjb3VudF9fcGFuZWxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGVyY2lzZXMtYWNjb3VudF9fdGl0bGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZXhlcmNpc2VzLWFjY291bnRfX2V4ZXJjaXNlcy10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJleHRlcm5hbC1saW5rLWFsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImV4ZXJjaXNlcy1hY2NvdW50X19pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxoM1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGV4ZXJjaXNlcy1hY2NvdW50X19leGVyY2lzZXMtYW1vdW50IGV4ZXJjaXNlcy1hbW91bnQtLSR7c29sdmVkU3RhdGV9YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7YW1vdW50T2ZFeGVyY2lzZXN9XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJleGVyY2lzZXMtYWNjb3VudF9fZGV0YWlsc1wiPntjaGlsZHJlbn08L3VsPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuZXhlcmNpc2VzLWFjY291bnRfX3BhbmVsIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDUlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZXhlcmNpc2VzLWFjY291bnRfX3RpdGxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZXhlcmNpc2VzLWFjY291bnRfX2V4ZXJjaXNlcy10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLmV4ZXJjaXNlcy1hY2NvdW50X19pY29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5leGVyY2lzZXMtYWNjb3VudF9fZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxN3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5leGVyY2lzZXMtYW1vdW50LS1zb2x2ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmV4ZXJjaXNlcy1hbW91bnQtLXVuc29sdmVkIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTMwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuZXhlcmNpc2VzLWFjY291bnRfX3BhbmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTb2x2ZWRFeGVyY2lzZXMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxFeGVyY2lzZXNQYW5lbFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJSZXpvbHZhdGVcIlxyXG4gICAgICAgICAgICAgICAgYW1vdW50T2ZFeGVyY2lzZXM9ezQ3MH1cclxuICAgICAgICAgICAgICAgIHNvbHZlZFN0YXRlPVwic29sdmVkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIFVsdGltYSBwcm9ibGVtYSByZXpvbHZhdGE6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVuZGVybGluZWRcIj4yNyBkZWNlbWJyaWU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIENlYSBtYWkgYWN0aXZhIHBlcmlvYWRhOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDEgaWFudWFyaWUgLSAyNyBmZWJydWFyaWVcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIENlbCBtYWkgcmlkaWNhdCBncmFkIGRlIGRpZmljdWx0YXRlIGFsIHVuZWkgcHJvYmxlbWVcclxuICAgICAgICAgICAgICAgICAgICByZXpvbHZhdGU6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVuZGVybGluZWQgdHlwZS0tY2hhbGxlbmdpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgUFJPVk9DQVRPUlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvRXhlcmNpc2VzUGFuZWw+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGkgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFVuc29sdmVkRXhlcmNpc2VzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8RXhlcmNpc2VzUGFuZWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiTmVyZXpvbHZhdGVcIlxyXG4gICAgICAgICAgICAgICAgYW1vdW50T2ZFeGVyY2lzZXM9ezI5MX1cclxuICAgICAgICAgICAgICAgIHNvbHZlZFN0YXRlPVwidW5zb2x2ZWRcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgVWx0aW1hIHByb2JsZW1hIG5lcmV6b2x2YXRhOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkXCI+MjcgZGVjZW1icmllPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICBDZWwgbWFpIHJpZGljYXQgZ3JhZCBkZSBkaWZpY3VsdGF0ZSBhbCB1bmVpIHByb2JsZW1lXHJcbiAgICAgICAgICAgICAgICAgICAgbmVyZXpvbHZhdGU6e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVuZGVybGluZWQgdHlwZS0taGFyZFwiPkRJRklDSUw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L0V4ZXJjaXNlc1BhbmVsPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxpIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\Account\\\\ExercisesDetails.js */"));
}

function ExercisesPanel({
  title,
  amountOfExercises,
  children,
  solvedState
}) {
  return __jsx("div", {
    className: "jsx-600897928" + " " + "exercises-account__panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-600897928" + " " + "exercises-account__title-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-600897928" + " " + "exercises-account__exercises-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, title, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "external-link-alt",
    className: "exercises-account__icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  })), __jsx("h3", {
    className: "jsx-600897928" + " " + `exercises-account__exercises-amount exercises-amount--${solvedState}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, amountOfExercises)), __jsx("hr", {
    className: "jsx-600897928",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx("ul", {
    className: "jsx-600897928" + " " + "exercises-account__details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "600897928",
    __self: this
  }, ".exercises-account__panel.jsx-600897928{width:45%;min-height:100%;background-color:var(--background-secondary);border-radius:20px;padding:45px;color:var(--text-primary);}.exercises-account__title-container.jsx-600897928{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:15px;}.exercises-account__exercises-title.jsx-600897928{cursor:pointer;}.exercises-account__icon{height:12px;margin-left:10px;vertical-align:initial;}.exercises-account__details.jsx-600897928{padding-left:17px;}.exercises-amount--solved.jsx-600897928{color:var(--accent-primary);}.exercises-amount--unsolved.jsx-600897928{color:var(--accent-secondary);}@media screen and (max-width:930px){.exercises-account__panel.jsx-600897928{width:100%;margin-bottom:50px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEFjY291bnRcXEV4ZXJjaXNlc0RldGFpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0V3QixBQUcrQixBQVNHLEFBTUUsQUFJSCxBQU1NLEFBSVUsQUFJRSxBQUtmLFVBckNDLENBc0NPLENBbkJOLEdBSnJCLEdBVUEsUUF4QmlELEVBNEJqRCxDQVQyQixDQWEzQixBQU1JLHNCQWxCSixtQkFuQnVCLEdBT1csZ0JBTmpCLGFBQ2EsMEJBQzlCLDREQUt1QixtQkFDdkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcQWNjb3VudFxcRXhlcmNpc2VzRGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4ZXJjaXNlc0RldGFpbHMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhlcmNpc2VzLWFjY291bnRcIj5cclxuICAgICAgICAgICAgPFNvbHZlZEV4ZXJjaXNlcyAvPlxyXG4gICAgICAgICAgICA8VW5zb2x2ZWRFeGVyY2lzZXMgLz5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5leGVyY2lzZXMtYWNjb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBjb21lSW4gMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5leGVyY2lzZXMtYWNjb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmV4ZXJjaXNlcy1hY2NvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBjb21lSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRXhlcmNpc2VzUGFuZWwoeyB0aXRsZSwgYW1vdW50T2ZFeGVyY2lzZXMsIGNoaWxkcmVuLCBzb2x2ZWRTdGF0ZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhlcmNpc2VzLWFjY291bnRfX3BhbmVsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhlcmNpc2VzLWFjY291bnRfX3RpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImV4ZXJjaXNlcy1hY2NvdW50X19leGVyY2lzZXMtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZXh0ZXJuYWwtbGluay1hbHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleGVyY2lzZXMtYWNjb3VudF9faWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDNcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BleGVyY2lzZXMtYWNjb3VudF9fZXhlcmNpc2VzLWFtb3VudCBleGVyY2lzZXMtYW1vdW50LS0ke3NvbHZlZFN0YXRlfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2Ftb3VudE9mRXhlcmNpc2VzfVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZXhlcmNpc2VzLWFjY291bnRfX2RldGFpbHNcIj57Y2hpbGRyZW59PC91bD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmV4ZXJjaXNlcy1hY2NvdW50X19wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmV4ZXJjaXNlcy1hY2NvdW50X190aXRsZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmV4ZXJjaXNlcy1hY2NvdW50X19leGVyY2lzZXMtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5leGVyY2lzZXMtYWNjb3VudF9faWNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZXhlcmNpc2VzLWFjY291bnRfX2RldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZXhlcmNpc2VzLWFtb3VudC0tc29sdmVkIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5leGVyY2lzZXMtYW1vdW50LS11bnNvbHZlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmV4ZXJjaXNlcy1hY2NvdW50X19wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU29sdmVkRXhlcmNpc2VzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8RXhlcmNpc2VzUGFuZWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiUmV6b2x2YXRlXCJcclxuICAgICAgICAgICAgICAgIGFtb3VudE9mRXhlcmNpc2VzPXs0NzB9XHJcbiAgICAgICAgICAgICAgICBzb2x2ZWRTdGF0ZT1cInNvbHZlZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICBVbHRpbWEgcHJvYmxlbWEgcmV6b2x2YXRhOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkXCI+MjcgZGVjZW1icmllPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICBDZWEgbWFpIGFjdGl2YSBwZXJpb2FkYTp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidW5kZXJsaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxIGlhbnVhcmllIC0gMjcgZmVicnVhcmllXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICBDZWwgbWFpIHJpZGljYXQgZ3JhZCBkZSBkaWZpY3VsdGF0ZSBhbCB1bmVpIHByb2JsZW1lXHJcbiAgICAgICAgICAgICAgICAgICAgcmV6b2x2YXRlOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkIHR5cGUtLWNoYWxsZW5naW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBST1ZPQ0FUT1JcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L0V4ZXJjaXNlc1BhbmVsPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxpIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBVbnNvbHZlZEV4ZXJjaXNlcygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEV4ZXJjaXNlc1BhbmVsXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIk5lcmV6b2x2YXRlXCJcclxuICAgICAgICAgICAgICAgIGFtb3VudE9mRXhlcmNpc2VzPXsyOTF9XHJcbiAgICAgICAgICAgICAgICBzb2x2ZWRTdGF0ZT1cInVuc29sdmVkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIFVsdGltYSBwcm9ibGVtYSBuZXJlem9sdmF0YTp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidW5kZXJsaW5lZFwiPjI3IGRlY2VtYnJpZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2VsIG1haSByaWRpY2F0IGdyYWQgZGUgZGlmaWN1bHRhdGUgYWwgdW5laSBwcm9ibGVtZVxyXG4gICAgICAgICAgICAgICAgICAgIG5lcmV6b2x2YXRlOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkIHR5cGUtLWhhcmRcIj5ESUZJQ0lMPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9FeGVyY2lzZXNQYW5lbD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaSBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\Account\\\\ExercisesDetails.js */"));
}

function SolvedExercises() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(ExercisesPanel, {
    title: "Rezolvate",
    amountOfExercises: 470,
    solvedState: "solved",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-1768816821",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 17
    }
  }, "Ultima problema rezolvata:", " ", __jsx("span", {
    className: "jsx-1768816821" + " " + "underlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 21
    }
  }, "27 decembrie")), __jsx("li", {
    className: "jsx-1768816821",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 17
    }
  }, "Cea mai activa perioada:", " ", __jsx("span", {
    className: "jsx-1768816821" + " " + "underlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 21
    }
  }, "1 ianuarie - 27 februarie")), __jsx("li", {
    className: "jsx-1768816821",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 17
    }
  }, "Cel mai ridicat grad de dificultate al unei probleme rezolvate:", " ", __jsx("span", {
    className: "jsx-1768816821" + " " + "underlined type--challenging",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 21
    }
  }, "PROVOCATOR"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1768816821",
    __self: this
  }, "li.jsx-1768816821{padding:15px 0;}li.jsx-1768816821 span.jsx-1768816821{font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEFjY291bnRcXEV4ZXJjaXNlc0RldGFpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkl3QixBQUdvQyxBQUlFLGVBSHJCLEVBSUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcQWNjb3VudFxcRXhlcmNpc2VzRGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4ZXJjaXNlc0RldGFpbHMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhlcmNpc2VzLWFjY291bnRcIj5cclxuICAgICAgICAgICAgPFNvbHZlZEV4ZXJjaXNlcyAvPlxyXG4gICAgICAgICAgICA8VW5zb2x2ZWRFeGVyY2lzZXMgLz5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5leGVyY2lzZXMtYWNjb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBjb21lSW4gMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5leGVyY2lzZXMtYWNjb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmV4ZXJjaXNlcy1hY2NvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBjb21lSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRXhlcmNpc2VzUGFuZWwoeyB0aXRsZSwgYW1vdW50T2ZFeGVyY2lzZXMsIGNoaWxkcmVuLCBzb2x2ZWRTdGF0ZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhlcmNpc2VzLWFjY291bnRfX3BhbmVsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhlcmNpc2VzLWFjY291bnRfX3RpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImV4ZXJjaXNlcy1hY2NvdW50X19leGVyY2lzZXMtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZXh0ZXJuYWwtbGluay1hbHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleGVyY2lzZXMtYWNjb3VudF9faWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDNcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BleGVyY2lzZXMtYWNjb3VudF9fZXhlcmNpc2VzLWFtb3VudCBleGVyY2lzZXMtYW1vdW50LS0ke3NvbHZlZFN0YXRlfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2Ftb3VudE9mRXhlcmNpc2VzfVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZXhlcmNpc2VzLWFjY291bnRfX2RldGFpbHNcIj57Y2hpbGRyZW59PC91bD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmV4ZXJjaXNlcy1hY2NvdW50X19wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmV4ZXJjaXNlcy1hY2NvdW50X190aXRsZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmV4ZXJjaXNlcy1hY2NvdW50X19leGVyY2lzZXMtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5leGVyY2lzZXMtYWNjb3VudF9faWNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZXhlcmNpc2VzLWFjY291bnRfX2RldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZXhlcmNpc2VzLWFtb3VudC0tc29sdmVkIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5leGVyY2lzZXMtYW1vdW50LS11bnNvbHZlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmV4ZXJjaXNlcy1hY2NvdW50X19wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU29sdmVkRXhlcmNpc2VzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8RXhlcmNpc2VzUGFuZWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiUmV6b2x2YXRlXCJcclxuICAgICAgICAgICAgICAgIGFtb3VudE9mRXhlcmNpc2VzPXs0NzB9XHJcbiAgICAgICAgICAgICAgICBzb2x2ZWRTdGF0ZT1cInNvbHZlZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICBVbHRpbWEgcHJvYmxlbWEgcmV6b2x2YXRhOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkXCI+MjcgZGVjZW1icmllPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICBDZWEgbWFpIGFjdGl2YSBwZXJpb2FkYTp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidW5kZXJsaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxIGlhbnVhcmllIC0gMjcgZmVicnVhcmllXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICBDZWwgbWFpIHJpZGljYXQgZ3JhZCBkZSBkaWZpY3VsdGF0ZSBhbCB1bmVpIHByb2JsZW1lXHJcbiAgICAgICAgICAgICAgICAgICAgcmV6b2x2YXRlOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkIHR5cGUtLWNoYWxsZW5naW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBST1ZPQ0FUT1JcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L0V4ZXJjaXNlc1BhbmVsPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxpIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBVbnNvbHZlZEV4ZXJjaXNlcygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEV4ZXJjaXNlc1BhbmVsXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIk5lcmV6b2x2YXRlXCJcclxuICAgICAgICAgICAgICAgIGFtb3VudE9mRXhlcmNpc2VzPXsyOTF9XHJcbiAgICAgICAgICAgICAgICBzb2x2ZWRTdGF0ZT1cInVuc29sdmVkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIFVsdGltYSBwcm9ibGVtYSBuZXJlem9sdmF0YTp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidW5kZXJsaW5lZFwiPjI3IGRlY2VtYnJpZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2VsIG1haSByaWRpY2F0IGdyYWQgZGUgZGlmaWN1bHRhdGUgYWwgdW5laSBwcm9ibGVtZVxyXG4gICAgICAgICAgICAgICAgICAgIG5lcmV6b2x2YXRlOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkIHR5cGUtLWhhcmRcIj5ESUZJQ0lMPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9FeGVyY2lzZXNQYW5lbD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaSBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\Account\\\\ExercisesDetails.js */"));
}

function UnsolvedExercises() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(ExercisesPanel, {
    title: "Nerezolvate",
    amountOfExercises: 291,
    solvedState: "unsolved",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 13
    }
  }, __jsx("li", {
    className: "jsx-1768816821",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 17
    }
  }, "Ultima problema nerezolvata:", " ", __jsx("span", {
    className: "jsx-1768816821" + " " + "underlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 21
    }
  }, "27 decembrie")), __jsx("li", {
    className: "jsx-1768816821",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 17
    }
  }, "Cel mai ridicat grad de dificultate al unei probleme nerezolvate:", " ", __jsx("span", {
    className: "jsx-1768816821" + " " + "underlined type--hard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 21
    }
  }, "DIFICIL"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1768816821",
    __self: this
  }, "li.jsx-1768816821{padding:15px 0;}li.jsx-1768816821 span.jsx-1768816821{font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEFjY291bnRcXEV4ZXJjaXNlc0RldGFpbHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEt3QixBQUdvQyxBQUlFLGVBSHJCLEVBSUEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcQWNjb3VudFxcRXhlcmNpc2VzRGV0YWlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4ZXJjaXNlc0RldGFpbHMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhlcmNpc2VzLWFjY291bnRcIj5cclxuICAgICAgICAgICAgPFNvbHZlZEV4ZXJjaXNlcyAvPlxyXG4gICAgICAgICAgICA8VW5zb2x2ZWRFeGVyY2lzZXMgLz5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5leGVyY2lzZXMtYWNjb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMTUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBjb21lSW4gMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MzBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5leGVyY2lzZXMtYWNjb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmV4ZXJjaXNlcy1hY2NvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBjb21lSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRXhlcmNpc2VzUGFuZWwoeyB0aXRsZSwgYW1vdW50T2ZFeGVyY2lzZXMsIGNoaWxkcmVuLCBzb2x2ZWRTdGF0ZSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhlcmNpc2VzLWFjY291bnRfX3BhbmVsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhlcmNpc2VzLWFjY291bnRfX3RpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImV4ZXJjaXNlcy1hY2NvdW50X19leGVyY2lzZXMtdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZXh0ZXJuYWwtbGluay1hbHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJleGVyY2lzZXMtYWNjb3VudF9faWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDNcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BleGVyY2lzZXMtYWNjb3VudF9fZXhlcmNpc2VzLWFtb3VudCBleGVyY2lzZXMtYW1vdW50LS0ke3NvbHZlZFN0YXRlfWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2Ftb3VudE9mRXhlcmNpc2VzfVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZXhlcmNpc2VzLWFjY291bnRfX2RldGFpbHNcIj57Y2hpbGRyZW59PC91bD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmV4ZXJjaXNlcy1hY2NvdW50X19wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQ1JTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmV4ZXJjaXNlcy1hY2NvdW50X190aXRsZS1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmV4ZXJjaXNlcy1hY2NvdW50X19leGVyY2lzZXMtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5leGVyY2lzZXMtYWNjb3VudF9faWNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogaW5pdGlhbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZXhlcmNpc2VzLWFjY291bnRfX2RldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTdweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZXhlcmNpc2VzLWFtb3VudC0tc29sdmVkIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5leGVyY2lzZXMtYW1vdW50LS11bnNvbHZlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkzMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmV4ZXJjaXNlcy1hY2NvdW50X19wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU29sdmVkRXhlcmNpc2VzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8RXhlcmNpc2VzUGFuZWxcclxuICAgICAgICAgICAgICAgIHRpdGxlPVwiUmV6b2x2YXRlXCJcclxuICAgICAgICAgICAgICAgIGFtb3VudE9mRXhlcmNpc2VzPXs0NzB9XHJcbiAgICAgICAgICAgICAgICBzb2x2ZWRTdGF0ZT1cInNvbHZlZFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICBVbHRpbWEgcHJvYmxlbWEgcmV6b2x2YXRhOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkXCI+MjcgZGVjZW1icmllPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICBDZWEgbWFpIGFjdGl2YSBwZXJpb2FkYTp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidW5kZXJsaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAxIGlhbnVhcmllIC0gMjcgZmVicnVhcmllXHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICBDZWwgbWFpIHJpZGljYXQgZ3JhZCBkZSBkaWZpY3VsdGF0ZSBhbCB1bmVpIHByb2JsZW1lXHJcbiAgICAgICAgICAgICAgICAgICAgcmV6b2x2YXRlOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkIHR5cGUtLWNoYWxsZW5naW5nXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBST1ZPQ0FUT1JcclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L0V4ZXJjaXNlc1BhbmVsPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxpIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBVbnNvbHZlZEV4ZXJjaXNlcygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEV4ZXJjaXNlc1BhbmVsXHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIk5lcmV6b2x2YXRlXCJcclxuICAgICAgICAgICAgICAgIGFtb3VudE9mRXhlcmNpc2VzPXsyOTF9XHJcbiAgICAgICAgICAgICAgICBzb2x2ZWRTdGF0ZT1cInVuc29sdmVkXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgIFVsdGltYSBwcm9ibGVtYSBuZXJlem9sdmF0YTp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidW5kZXJsaW5lZFwiPjI3IGRlY2VtYnJpZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgQ2VsIG1haSByaWRpY2F0IGdyYWQgZGUgZGlmaWN1bHRhdGUgYWwgdW5laSBwcm9ibGVtZVxyXG4gICAgICAgICAgICAgICAgICAgIG5lcmV6b2x2YXRlOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ1bmRlcmxpbmVkIHR5cGUtLWhhcmRcIj5ESUZJQ0lMPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9FeGVyY2lzZXNQYW5lbD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaSBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\Account\\\\ExercisesDetails.js */"));
}

/***/ }),

/***/ "./components/Account/Progress.js":
/*!****************************************!*\
  !*** ./components/Account/Progress.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProgressDetails; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\Account\\Progress.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function ProgressDetails() {
  return __jsx("h1", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, "Reintoarce-te inapoi la mine cand adaug date pe faza de back-end. CHART.JS");
}

/***/ }),

/***/ "./pages/cont.js":
/*!***********************!*\
  !*** ./pages/cont.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cont; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Account_Details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Account/Details */ "./components/Account/Details.js");
/* harmony import */ var _components_Account_ExercisesDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Account/ExercisesDetails */ "./components/Account/ExercisesDetails.js");
/* harmony import */ var _components_Account_Progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Account/Progress */ "./components/Account/Progress.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\pages\\cont.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Cont() {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    isTabelActive: true,
    isExercisesActive: false,
    isProgressActive: false
  });

  const changeCategory = category => setState({
    isTabelActive: category === "isTabelActive",
    isExercisesActive: category === "isExercisesActive",
    isProgressActive: category === "isProgressActive"
  });

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", {
    className: "jsx-1384639595" + " " + "details-account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, "Detalii cont"), __jsx(HeaderOptionsDetails, {
    parentState: state,
    changeCategory: changeCategory,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }), state.isTabelActive && __jsx(_components_Account_Details__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 37
    }
  }), state.isExercisesActive && __jsx(_components_Account_ExercisesDetails__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 41
    }
  }), state.isProgressActive && __jsx(_components_Account_Progress__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 40
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1384639595",
    __self: this
  }, ".details-account.jsx-1384639595{text-align:center;margin:120px 0;color:var(--text-primary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXHBhZ2VzXFxjb250LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCd0IsQUFHdUMsa0JBQ0gsZUFDVywwQkFDOUIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xccGFnZXNcXGNvbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQWNjb3VudERldGFpbHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvQWNjb3VudC9EZXRhaWxzXCI7XHJcbmltcG9ydCBFeGVyY2lzZXNEZXRhaWxzIGZyb20gXCIuLi9jb21wb25lbnRzL0FjY291bnQvRXhlcmNpc2VzRGV0YWlsc1wiO1xyXG5pbXBvcnQgUHJvZ3Jlc3NEZXRhaWxzIGZyb20gXCIuLi9jb21wb25lbnRzL0FjY291bnQvUHJvZ3Jlc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnQoKSB7XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBpc1RhYmVsQWN0aXZlOiB0cnVlLFxyXG4gICAgICAgIGlzRXhlcmNpc2VzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICBpc1Byb2dyZXNzQWN0aXZlOiBmYWxzZSxcclxuICAgIH0pO1xyXG4gICAgY29uc3QgY2hhbmdlQ2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+XHJcbiAgICAgICAgc2V0U3RhdGUoe1xyXG4gICAgICAgICAgICBpc1RhYmVsQWN0aXZlOiBjYXRlZ29yeSA9PT0gXCJpc1RhYmVsQWN0aXZlXCIsXHJcbiAgICAgICAgICAgIGlzRXhlcmNpc2VzQWN0aXZlOiBjYXRlZ29yeSA9PT0gXCJpc0V4ZXJjaXNlc0FjdGl2ZVwiLFxyXG4gICAgICAgICAgICBpc1Byb2dyZXNzQWN0aXZlOiBjYXRlZ29yeSA9PT0gXCJpc1Byb2dyZXNzQWN0aXZlXCIsXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZGV0YWlscy1hY2NvdW50XCI+RGV0YWxpaSBjb250PC9oMT5cclxuICAgICAgICAgICAgPEhlYWRlck9wdGlvbnNEZXRhaWxzIHBhcmVudFN0YXRlPXtzdGF0ZX0gY2hhbmdlQ2F0ZWdvcnk9e2NoYW5nZUNhdGVnb3J5fSAvPlxyXG5cclxuICAgICAgICAgICAge3N0YXRlLmlzVGFiZWxBY3RpdmUgJiYgPEFjY291bnREZXRhaWxzIC8+fVxyXG4gICAgICAgICAgICB7c3RhdGUuaXNFeGVyY2lzZXNBY3RpdmUgJiYgPEV4ZXJjaXNlc0RldGFpbHMgLz59XHJcbiAgICAgICAgICAgIHtzdGF0ZS5pc1Byb2dyZXNzQWN0aXZlICYmIDxQcm9ncmVzc0RldGFpbHMgLz59XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuZGV0YWlscy1hY2NvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMjBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBIZWFkZXJPcHRpb25zRGV0YWlscyh7IHBhcmVudFN0YXRlLCBjaGFuZ2VDYXRlZ29yeSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLW9wdGlvbnNcIj5cclxuICAgICAgICAgICAge1tcclxuICAgICAgICAgICAgICAgIHsgZGV0YWlsOiBcIlRhYmVsXCIsIGFsaWFzOiBcIkNvbnRcIiB9LFxyXG4gICAgICAgICAgICAgICAgeyBkZXRhaWw6IFwiRXhlcmNpc2VzXCIsIGFsaWFzOiBcIkV4ZXJjaXRpaVwiIH0sXHJcbiAgICAgICAgICAgICAgICB7IGRldGFpbDogXCJQcm9ncmVzc1wiLCBhbGlhczogXCJQcm9ncmVzXCIgfSxcclxuICAgICAgICAgICAgXS5tYXAoKHsgZGV0YWlsLCBhbGlhcyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8aDNcclxuICAgICAgICAgICAgICAgICAgICBrZXk9e2BkZXRhaWxfJHtkZXRhaWx9YH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXItb3B0aW9uc19faDMgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50U3RhdGVbYGlzJHtkZXRhaWx9QWN0aXZlYF0gPyBcImhlYWRlci1vcHRpb25zX19oMy0tYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlQ2F0ZWdvcnkoYGlzJHtkZXRhaWx9QWN0aXZlYCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2FsaWFzfVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDxociAvPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1vcHRpb25zIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLW9wdGlvbnNfX2gzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA0MHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAwcHggc29saWQgdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGNvbG9yLCBvcGFjaXR5LCB0cmFuc2Zvcm07XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXItb3B0aW9uc19faDM6aG92ZXI6bm90KC5oZWFkZXItb3B0aW9uc19faDMtLWFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXItb3B0aW9uc19faDMtLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItb3B0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXItb3B0aW9uc19faDMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\pages\\\\cont.js */"));
}

function HeaderOptionsDetails({
  parentState,
  changeCategory
}) {
  return __jsx("div", {
    className: "jsx-3878314756" + " " + "header-options",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }, [{
    detail: "Tabel",
    alias: "Cont"
  }, {
    detail: "Exercises",
    alias: "Exercitii"
  }, {
    detail: "Progress",
    alias: "Progres"
  }].map(({
    detail,
    alias
  }) => __jsx("h3", {
    key: `detail_${detail}`,
    onClick: () => changeCategory(`is${detail}Active`),
    className: "jsx-3878314756" + " " + `header-options__h3 ${parentState[`is${detail}Active`] ? "header-options__h3--active" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, alias)), __jsx("hr", {
    className: "jsx-3878314756",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3878314756",
    __self: this
  }, ".header-options.jsx-3878314756{width:70%;margin:auto;}.header-options__h3.jsx-3878314756{display:inline-block;padding:0 40px 10px;margin-right:20px;color:var(--text-primary);opacity:0.7;border-bottom:0px solid var(--accent-primary);-webkit-transition-property:color,opacity,-webkit-transform;-webkit-transition-property:color,opacity,transform;transition-property:color,opacity,transform;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-timing-function:ease;transition-timing-function:ease;cursor:pointer;}.header-options__h3.jsx-3878314756:hover.jsx-3878314756:not(.header-options__h3--active){opacity:1;-webkit-transform:translateY(-5px);-ms-transform:translateY(-5px);transform:translateY(-5px);}.header-options__h3--active.jsx-3878314756{border-bottom-width:3px;opacity:1;margin-bottom:-2px;}hr.jsx-3878314756{margin-top:0;}@media screen and (max-width:768px){.header-options.jsx-3878314756{width:90%;}.header-options__h3.jsx-3878314756{font-size:var(--font-smaller);padding-left:10px;padding-right:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXHBhZ2VzXFxjb250LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBEd0IsQUFHK0IsQUFLVyxBQWFYLEFBS2MsQUFNWCxBQUtDLEFBR29CLFVBcEN0QixBQWtCZSxBQWdCM0IsR0FMSixRQXhCd0IsQ0FKeEIsRUFzQmMsTUFjWSxJQWJILE9BbEJELE9BZ0NLLEtBYjNCLE1BbEI4QixRQWdDMUIsa0JBL0JZLFlBQ2tDLE1BVWxELHdDQVRrRCw0SkFDcEIsNERBQ00sd0VBQ2pCLGVBQ25CIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXHBhZ2VzXFxjb250LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEFjY291bnREZXRhaWxzIGZyb20gXCIuLi9jb21wb25lbnRzL0FjY291bnQvRGV0YWlsc1wiO1xyXG5pbXBvcnQgRXhlcmNpc2VzRGV0YWlscyBmcm9tIFwiLi4vY29tcG9uZW50cy9BY2NvdW50L0V4ZXJjaXNlc0RldGFpbHNcIjtcclxuaW1wb3J0IFByb2dyZXNzRGV0YWlscyBmcm9tIFwiLi4vY29tcG9uZW50cy9BY2NvdW50L1Byb2dyZXNzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250KCkge1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgaXNUYWJlbEFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICBpc0V4ZXJjaXNlc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgaXNQcm9ncmVzc0FjdGl2ZTogZmFsc2UsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGNoYW5nZUNhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PlxyXG4gICAgICAgIHNldFN0YXRlKHtcclxuICAgICAgICAgICAgaXNUYWJlbEFjdGl2ZTogY2F0ZWdvcnkgPT09IFwiaXNUYWJlbEFjdGl2ZVwiLFxyXG4gICAgICAgICAgICBpc0V4ZXJjaXNlc0FjdGl2ZTogY2F0ZWdvcnkgPT09IFwiaXNFeGVyY2lzZXNBY3RpdmVcIixcclxuICAgICAgICAgICAgaXNQcm9ncmVzc0FjdGl2ZTogY2F0ZWdvcnkgPT09IFwiaXNQcm9ncmVzc0FjdGl2ZVwiLFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImRldGFpbHMtYWNjb3VudFwiPkRldGFsaWkgY29udDwvaDE+XHJcbiAgICAgICAgICAgIDxIZWFkZXJPcHRpb25zRGV0YWlscyBwYXJlbnRTdGF0ZT17c3RhdGV9IGNoYW5nZUNhdGVnb3J5PXtjaGFuZ2VDYXRlZ29yeX0gLz5cclxuXHJcbiAgICAgICAgICAgIHtzdGF0ZS5pc1RhYmVsQWN0aXZlICYmIDxBY2NvdW50RGV0YWlscyAvPn1cclxuICAgICAgICAgICAge3N0YXRlLmlzRXhlcmNpc2VzQWN0aXZlICYmIDxFeGVyY2lzZXNEZXRhaWxzIC8+fVxyXG4gICAgICAgICAgICB7c3RhdGUuaXNQcm9ncmVzc0FjdGl2ZSAmJiA8UHJvZ3Jlc3NEZXRhaWxzIC8+fVxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmRldGFpbHMtYWNjb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTIwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSGVhZGVyT3B0aW9uc0RldGFpbHMoeyBwYXJlbnRTdGF0ZSwgY2hhbmdlQ2F0ZWdvcnkgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1vcHRpb25zXCI+XHJcbiAgICAgICAgICAgIHtbXHJcbiAgICAgICAgICAgICAgICB7IGRldGFpbDogXCJUYWJlbFwiLCBhbGlhczogXCJDb250XCIgfSxcclxuICAgICAgICAgICAgICAgIHsgZGV0YWlsOiBcIkV4ZXJjaXNlc1wiLCBhbGlhczogXCJFeGVyY2l0aWlcIiB9LFxyXG4gICAgICAgICAgICAgICAgeyBkZXRhaWw6IFwiUHJvZ3Jlc3NcIiwgYWxpYXM6IFwiUHJvZ3Jlc1wiIH0sXHJcbiAgICAgICAgICAgIF0ubWFwKCh7IGRldGFpbCwgYWxpYXMgfSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGgzXHJcbiAgICAgICAgICAgICAgICAgICAga2V5PXtgZGV0YWlsXyR7ZGV0YWlsfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGVhZGVyLW9wdGlvbnNfX2gzICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudFN0YXRlW2BpcyR7ZGV0YWlsfUFjdGl2ZWBdID8gXCJoZWFkZXItb3B0aW9uc19faDMtLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZUNhdGVnb3J5KGBpcyR7ZGV0YWlsfUFjdGl2ZWApfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHthbGlhc31cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXItb3B0aW9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1vcHRpb25zX19oMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNDBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjc7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMHB4IHNvbGlkIHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgb3BhY2l0eSwgdHJhbnNmb3JtO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLW9wdGlvbnNfX2gzOmhvdmVyOm5vdCguaGVhZGVyLW9wdGlvbnNfX2gzLS1hY3RpdmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLW9wdGlvbnNfX2gzLS1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0ycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLW9wdGlvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLW9wdGlvbnNfX2gzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\pages\\\\cont.js */"));
}

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/cont.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\plesa\Desktop\Proiecte Web\infoplus\pages\cont.js */"./pages/cont.js");


/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=cont.js.map