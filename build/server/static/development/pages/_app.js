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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/_globals/AlertNotification.js":
/*!**************************************************!*\
  !*** ./components/_globals/AlertNotification.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AlertNotification; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_CheckmarkSolved__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/CheckmarkSolved */ "./components/utils/CheckmarkSolved.js");
/* harmony import */ var _utils_ErrorCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ErrorCircle */ "./components/utils/ErrorCircle.js");
/* harmony import */ var _OverlayDarkener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OverlayDarkener */ "./components/_globals/OverlayDarkener.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\_globals\\AlertNotification.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function AlertNotification({
  type,
  children,
  closeAlert,
  onClose = null
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_OverlayDarkener__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: onClose ? () => (onClose(), closeAlert()) : closeAlert,
    onKeyDown: e => (console.log(e.keyCode), e.keyCode === 13 && onClose ? () => (onClose(), closeAlert()) : closeAlert),
    className: "overlay-darkener--alert",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }), __jsx("div", {
    className: "jsx-4022834684" + " " + `alert alert--type-${type}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-4022834684" + " " + "alert__info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, type !== "error" ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    className: "jsx-4022834684",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, "Succes!"), __jsx(_utils_CheckmarkSolved__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    className: "jsx-4022834684",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, "Eroare!"), __jsx(_utils_ErrorCircle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  })), __jsx("p", {
    className: "jsx-4022834684",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, children)), __jsx("button", {
    onClick: onClose ? () => (onClose(), closeAlert()) : closeAlert,
    className: "jsx-4022834684" + " " + "alert__button button--tertiary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, "OK")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4022834684",
    __self: this
  }, ".alert.jsx-4022834684{max-width:50%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;max-height:180px;padding:30px 30px 20px;border-radius:20px;position:fixed;margin:auto;top:0;left:0;right:0;bottom:0;z-index:100;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:var(--text-button);box-shadow:var(--box-shadow);opacity:0;-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);-webkit-animation:comeIn-jsx-4022834684 300ms ease forwards;animation:comeIn-jsx-4022834684 300ms ease forwards;}.overlay-darkener--alert{z-index:99;}.alert__info.jsx-4022834684{margin-bottom:20px;}.alert--type-success.jsx-4022834684{background-color:var(--accent-success);}.alert--type-error.jsx-4022834684{background-color:var(--accent-failure-secondary);}.alert__button.jsx-4022834684{color:var(--text-button);-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin-right:0;margin-bottom:-10px;text-align:right;}.alert__button.jsx-4022834684:hover{color:var(--accent-quaternary);}h2.jsx-4022834684{display:inline-block;vertical-align:middle;}@media screen and (max-width:576px){.alert.jsx-4022834684{max-width:75%;}}@-webkit-keyframes comeIn-jsx-4022834684{from{-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:0;}80%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);opacity:0.8;}to{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}}@keyframes comeIn-jsx-4022834684{from{-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:0;}80%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);opacity:0.8;}to{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXEFsZXJ0Tm90aWZpY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Da0IsQUFHeUIsQUFzQkgsQUFJUSxBQUlvQixBQUlVLEFBSXhCLEFBUU0sQUFJVixBQU1MLEFBTU8sQUFJQyxBQUlILFdBL0N2QixHQXRCcUIsQUF3RG5CLEtBOUJGLEVBd0J3QixJQVpGLE1BUXRCLFFBaEJBLElBcUJBLE1BakJBLG9CQW9DYyxNQVJBLEdBSUUsQ0FLZCxLQXRFaUIsQ0E4RGpCLEtBSUEsT0E1QmUsSUFyQ1EsV0FzQ0gsWUFyQ0QsUUFzQ0YsV0FyQ0YsTUFzQ2pCLFNBckNjLFlBQ04sTUFDQyxPQUNDLFFBQ0MsU0FDRyxZQUNDLDBFQUNTLDhFQUNHLHlCQUNJLDZCQUNuQixVQUNXLDJFQUNnQixnSEFDdkMiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGVXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcQWxlcnROb3RpZmljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hlY2ttYXJrU29sdmVkIGZyb20gXCIuLi91dGlscy9DaGVja21hcmtTb2x2ZWRcIjtcclxuaW1wb3J0IEVycm9yQ2lyY2xlIGZyb20gXCIuLi91dGlscy9FcnJvckNpcmNsZVwiO1xyXG5pbXBvcnQgT3ZlcmxheURhcmtlbmVyIGZyb20gXCIuL092ZXJsYXlEYXJrZW5lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxlcnROb3RpZmljYXRpb24oeyB0eXBlLCBjaGlsZHJlbiwgY2xvc2VBbGVydCwgb25DbG9zZSA9IG51bGwgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8T3ZlcmxheURhcmtlbmVyXHJcbiAgICAgICAgb25DbGljaz17b25DbG9zZSA/ICgpID0+IChvbkNsb3NlKCksIGNsb3NlQWxlcnQoKSkgOiBjbG9zZUFsZXJ0fVxyXG4gICAgICAgIG9uS2V5RG93bj17KGUpID0+IChcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGUua2V5Q29kZSksIGUua2V5Q29kZSA9PT0gMTMgJiYgb25DbG9zZSA/ICgpID0+IChvbkNsb3NlKCksIGNsb3NlQWxlcnQoKSkgOiBjbG9zZUFsZXJ0XHJcbiAgICAgICAgKX1cclxuICAgICAgICBjbGFzc05hbWU9XCJvdmVybGF5LWRhcmtlbmVyLS1hbGVydFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWxlcnQgYWxlcnQtLXR5cGUtJHt0eXBlfWB9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnRfX2luZm9cIj5cclxuICAgICAgICAgIHt0eXBlICE9PSBcImVycm9yXCIgPyAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgPGgyPlN1Y2NlcyE8L2gyPlxyXG4gICAgICAgICAgICAgIDxDaGVja21hcmtTb2x2ZWQgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgIDxoMj5Fcm9hcmUhPC9oMj5cclxuICAgICAgICAgICAgICA8RXJyb3JDaXJjbGUgLz5cclxuICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPHA+e2NoaWxkcmVufTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhbGVydF9fYnV0dG9uIGJ1dHRvbi0tdGVydGlhcnlcIlxyXG4gICAgICAgICAgb25DbGljaz17b25DbG9zZSA/ICgpID0+IChvbkNsb3NlKCksIGNsb3NlQWxlcnQoKSkgOiBjbG9zZUFsZXJ0fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIE9LXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmFsZXJ0IHtcclxuICAgICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICAgIG1heC1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogMzBweCAzMHB4IDIwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1idXR0b24pO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBjb21lSW4gMzAwbXMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpnbG9iYWwoLm92ZXJsYXktZGFya2VuZXItLWFsZXJ0KSB7XHJcbiAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hbGVydF9faW5mbyB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFsZXJ0LS10eXBlLXN1Y2Nlc3Mge1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXN1Y2Nlc3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFsZXJ0LS10eXBlLWVycm9yIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1mYWlsdXJlLXNlY29uZGFyeSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWxlcnRfX2J1dHRvbiB7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1idXR0b24pO1xyXG4gICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmFsZXJ0X19idXR0b246aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1xdWF0ZXJuYXJ5KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgLmFsZXJ0IHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIGNvbWVJbiB7XHJcbiAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgODAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\AlertNotification.js */"));
}

/***/ }),

/***/ "./components/_globals/Contact.js":
/*!****************************************!*\
  !*** ./components/_globals/Contact.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Contact; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\_globals\\Contact.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Contact() {
  return __jsx("section", {
    className: "jsx-1965023881" + " " + "contact",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-1965023881" + " " + "contact__heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, "Vrei s\u0103 intri \xEEn contact cu noi?"), __jsx(ContactPanel, {
    title: "e-mail",
    icon: "envelope",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "jsx-1965023881",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, "samplemail@example.com"), __jsx("p", {
    className: "jsx-1965023881",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, "samplemail@example.com"), __jsx("p", {
    className: "jsx-1965023881",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 17
    }
  }, "samplemail@example.com")), __jsx(ContactPanel, {
    title: "telefon",
    icon: "phone",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx("p", {
    className: "jsx-1965023881",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, "+070xxx00000xxx0000"), __jsx("p", {
    className: "jsx-1965023881",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, "+070xxx00000xxx0000"), __jsx("p", {
    className: "jsx-1965023881",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, "+070xxx00000xxx0000")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1965023881",
    __self: this
  }, ".contact.jsx-1965023881{width:100%;padding:100px 0;background-color:var(--contact);color:var(--text-secondary);-webkit-transition:color,background-color 300ms ease;transition:color,background-color 300ms ease;text-align:center;}.contact__heading.jsx-1965023881{margin:0 10px 50px;}@media screen and (max-width:825px){.contact__heading.jsx-1965023881{font-size:var(--font-medium);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXENvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJ3QixBQUdnQyxBQVNRLEFBS2MsV0FiakIsUUFTcEIsUUFSb0MsRUFhaEMsOEJBWjRCLDRCQUNrQixrR0FDNUIsa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXENvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb250YWN0X19oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICBWcmVpIHPEgyBpbnRyaSDDrm4gY29udGFjdCBjdSBub2k/XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxDb250YWN0UGFuZWwgdGl0bGU9XCJlLW1haWxcIiBpY29uPVwiZW52ZWxvcGVcIj5cclxuICAgICAgICAgICAgICAgIDxwPnNhbXBsZW1haWxAZXhhbXBsZS5jb208L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5zYW1wbGVtYWlsQGV4YW1wbGUuY29tPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+c2FtcGxlbWFpbEBleGFtcGxlLmNvbTwvcD5cclxuICAgICAgICAgICAgPC9Db250YWN0UGFuZWw+XHJcbiAgICAgICAgICAgIDxDb250YWN0UGFuZWwgdGl0bGU9XCJ0ZWxlZm9uXCIgaWNvbj1cInBob25lXCI+XHJcbiAgICAgICAgICAgICAgICA8cD4rMDcweHh4MDAwMDB4eHgwMDAwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+KzA3MHh4eDAwMDAweHh4MDAwMDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiswNzB4eHgwMDAwMHh4eDAwMDA8L3A+XHJcbiAgICAgICAgICAgIDwvQ29udGFjdFBhbmVsPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGFjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdF9faGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWN0X19oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29udGFjdFBhbmVsKHsgdGl0bGUsIGljb24sIGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0X19jb250YWN0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9fcGFuZWwtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtpY29ufSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNvbnRhY3RfX3BhbmVsLWhlYWRpbmdcIj57dGl0bGUudG9VcHBlckNhc2UoKX08L2gzPlxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiY29udGFjdF9fcGFuZWwtaHJcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RfX3BhbmVsLWNvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX2NvbnRhY3QtcGFuZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWN0X19jb250YWN0LXBhbmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19wYW5lbC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19wYW5lbC1pY29uLFxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX3BhbmVsLWhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdF9fcGFuZWwtaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdF9fcGFuZWwtaHIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19jb250YWN0LXBhbmVsIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\Contact.js */"));
}

function ContactPanel({
  title,
  icon,
  children
}) {
  return __jsx("div", {
    className: "jsx-1566445729" + " " + "contact__contact-panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1566445729" + " " + "contact__panel-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  })), __jsx("h3", {
    className: "jsx-1566445729" + " " + "contact__panel-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, title.toUpperCase()), __jsx("hr", {
    className: "jsx-1566445729" + " " + "contact__panel-hr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1566445729" + " " + "contact__panel-content",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1566445729",
    __self: this
  }, ".contact__contact-panel{display:inline-block;min-width:30%;margin:50px;text-align:left;}@media screen and (max-width:825px){.contact__contact-panel{min-width:100%;margin:0;padding:50px;}}.contact__panel-icon{color:var(--accent-primary);}.contact__panel-icon,.contact__panel-heading{display:inline-block;margin-right:20px;vertical-align:middle;}.contact__panel-heading{-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}.contact__panel-hr{margin:20px 0;border:1px solid;}.contact__contact-panel p{color:var(--text-secondary);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin:2px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXENvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUQrQixBQUcwQyxBQVFGLEFBT1MsQUFLUCxBQU1GLEFBSUwsQUFLYyxjQUpYLENBdEJKLE1BUkMsQUFvQkksR0FYRCxJQU1yQixBQW9CdUIsR0FKdkIsSUE5QmdCLEVBU1osRUFXc0IsUUFuQk4sY0FvQnBCLEVBbkJBLDhCQXVCQSw0QkFVaUIsYUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGVXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcQ29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNvbnRhY3RfX2hlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIFZyZWkgc8SDIGludHJpIMOubiBjb250YWN0IGN1IG5vaT9cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPENvbnRhY3RQYW5lbCB0aXRsZT1cImUtbWFpbFwiIGljb249XCJlbnZlbG9wZVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+c2FtcGxlbWFpbEBleGFtcGxlLmNvbTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPnNhbXBsZW1haWxAZXhhbXBsZS5jb208L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5zYW1wbGVtYWlsQGV4YW1wbGUuY29tPC9wPlxyXG4gICAgICAgICAgICA8L0NvbnRhY3RQYW5lbD5cclxuICAgICAgICAgICAgPENvbnRhY3RQYW5lbCB0aXRsZT1cInRlbGVmb25cIiBpY29uPVwicGhvbmVcIj5cclxuICAgICAgICAgICAgICAgIDxwPiswNzB4eHgwMDAwMHh4eDAwMDA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4rMDcweHh4MDAwMDB4eHgwMDAwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+KzA3MHh4eDAwMDAweHh4MDAwMDwvcD5cclxuICAgICAgICAgICAgPC9Db250YWN0UGFuZWw+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250YWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCA1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3RfX2hlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtbWVkaXVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb250YWN0UGFuZWwoeyB0aXRsZSwgaWNvbiwgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RfX2NvbnRhY3QtcGFuZWxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0X19wYW5lbC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ljb259IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29udGFjdF9fcGFuZWwtaGVhZGluZ1wiPnt0aXRsZS50b1VwcGVyQ2FzZSgpfTwvaDM+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJjb250YWN0X19wYW5lbC1oclwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9fcGFuZWwtY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdF9fY29udGFjdC1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3RfX2NvbnRhY3QtcGFuZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX3BhbmVsLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX3BhbmVsLWljb24sXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdF9fcGFuZWwtaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19wYW5lbC1oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19wYW5lbC1ociB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX2NvbnRhY3QtcGFuZWwgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\Contact.js */"));
}

/***/ }),

/***/ "./components/_globals/DataPanel.js":
/*!******************************************!*\
  !*** ./components/_globals/DataPanel.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _OverlayDarkener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./OverlayDarkener */ "./components/_globals/OverlayDarkener.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\_globals\\DataPanel.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



/* harmony default export */ __webpack_exports__["default"] = (Object(react__WEBPACK_IMPORTED_MODULE_1__["memo"])(function DataPanel({
  children,
  onClick
}) {
  if (!children) return null;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_OverlayDarkener__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-697593156" + " " + "data-panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, __jsx("div", {
    onClick: onClick,
    className: "jsx-697593156" + " " + "data-panel__close-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "times",
    style: {
      width: "20px",
      height: "25px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  })), __jsx("hr", {
    className: "jsx-697593156",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }), children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "697593156",
    __self: this
  }, ".data-panel.jsx-697593156{border-radius:20px;position:fixed;max-height:70vh;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;overflow-y:auto;width:70%;top:70px;left:0;right:0;bottom:0;margin:auto;z-index:50;background-color:var(--background-primary);padding:20px;-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);opacity:0;color:var(--text-primary);-webkit-animation:slideIn-jsx-697593156 500ms ease forwards;animation:slideIn-jsx-697593156 500ms ease forwards;}.data-panel__close-button.jsx-697593156{width:100%;height:40px;color:var(--text-primary);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;-webkit-transition:color 300ms linear;transition:color 300ms linear;}.data-panel__close-button.jsx-697593156:hover{color:var(--accent-quaternary);}hr.jsx-697593156{margin-top:10px;margin-bottom:30px;}@media screen and (max-width:825px){.data-panel.jsx-697593156{width:80%;}}@-webkit-keyframes slideIn-jsx-697593156{to{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}@keyframes slideIn-jsx-697593156{to{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXERhdGFQYW5lbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQndCLEFBR3dDLEFBcUJSLEFBV29CLEFBSWYsQUFNRixBQU1BLFVBTGQsQUFNNEIsQ0EzQmhCLEtBZU8sR0FwQ0osSUFzQlcsUUFVOUIsR0EvQm9CLENBb0NwQixjQWRpQixDQXJCTSw0Q0ErQ25CLDBCQTlDZ0IsR0FxQk8sYUFwQmIsVUFDRCxTQUNGLE9BQ0MsUUFDQyxTQUNHLFlBQ0QsV0FDZ0Msb0JBY3hCLHVCQWJOLGFBQ2UseURBYWIsZUFDZSx3QkFicEIsVUFDZ0IsMEJBQ1ksUUFZMUMsd0dBWEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGVXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcRGF0YVBhbmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBPdmVybGF5RGFya2VuZXIgZnJvbSBcIi4vT3ZlcmxheURhcmtlbmVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZW1vKGZ1bmN0aW9uIERhdGFQYW5lbCh7IGNoaWxkcmVuLCBvbkNsaWNrIH0pIHtcclxuICAgIGlmICghY2hpbGRyZW4pIHJldHVybiBudWxsO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8T3ZlcmxheURhcmtlbmVyIG9uQ2xpY2s9e29uQ2xpY2t9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGF0YS1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYXRhLXBhbmVsX19jbG9zZS1idXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ0aW1lc1wiIHN0eWxlPXt7IHdpZHRoOiBcIjIwcHhcIiwgaGVpZ2h0OiBcIjI1cHhcIiB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuZGF0YS1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogNzB2aDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDUwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZUluIDUwMG1zIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRhdGEtcGFuZWxfX2Nsb3NlLWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kYXRhLXBhbmVsX19jbG9zZS1idXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcXVhdGVybmFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5kYXRhLXBhbmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzbGlkZUluIHtcclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn0pO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\DataPanel.js */"));
}));

/***/ }),

/***/ "./components/_globals/DropdownMenu.js":
/*!*********************************************!*\
  !*** ./components/_globals/DropdownMenu.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropdownMenu; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hooks_componentDidMount__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_hooks/componentDidMount */ "./components/_hooks/componentDidMount.js");
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/_app */ "./pages/_app.js");
/* harmony import */ var _utils_SearchExercise__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/SearchExercise */ "./components/utils/SearchExercise.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\_globals\\DropdownMenu.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






function DropdownMenu({
  isDropdownToggled
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3919748599" + " " + `dropdown-menu-header ${isDropdownToggled ? "dropdown-menu-header--active " : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx(DropdownMenuUl, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3919748599",
    __self: this
  }, ".dropdown-menu-header{width:220px;height:calc(100vh - 60px);position:fixed;right:0;bottom:0;background-color:var(--background-secondary);z-index:-1;box-shadow:-12px 13px 9px rgba(0,0,0,0.1);overflow-y:auto;padding-top:30px;-webkit-transform:translateX(230px) translateZ(0);-ms-transform:translateX(230px) translateZ(0);transform:translateX(230px) translateZ(0);-webkit-transition:color,background-color,-webkit-transform 300ms ease;-webkit-transition:color,background-color,transform 300ms ease;transition:color,background-color,transform 300ms ease;}.dropdown-menu-header--active{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXERyb3Bkb3duTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQitCLEFBR2lDLEFBZVksWUFkRSwwQkFDWCxlQUNQLFFBQ0MsU0FDb0MsY0FXakQsK0JBVmUsV0FDa0MsMENBQzdCLGdCQUNDLGlCQUN5QiwwSUFDZSw2TEFDN0QiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGVXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcRHJvcGRvd25NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgdXNlQ29tcG9uZW50RGlkTW91bnQgZnJvbSBcIi4uL19ob29rcy9jb21wb25lbnREaWRNb3VudFwiO1xyXG5pbXBvcnQgeyBMb2dnZWRJbkRhdGFDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL19hcHBcIjtcclxuaW1wb3J0IFNlYXJjaEV4ZXJjaXNlLCB7IFNlYXJjaElucHV0IH0gZnJvbSBcIi4uL3V0aWxzL1NlYXJjaEV4ZXJjaXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wZG93bk1lbnUoeyBpc0Ryb3Bkb3duVG9nZ2xlZCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duLW1lbnUtaGVhZGVyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEcm9wZG93blRvZ2dsZWQgPyBcImRyb3Bkb3duLW1lbnUtaGVhZGVyLS1hY3RpdmUgXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudVVsIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTEycHggMTNweCA5cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIzMHB4KSB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXItLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVVbCgpIHtcclxuICAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VDb250ZXh0KExvZ2dlZEluRGF0YUNvbnRleHQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX3VsXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoRXhlcmNpc2VcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFdpZHRoPVwiMTg1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxNXB4XCIsIHBhZGRpbmdMZWZ0OiBcIjE1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saVwiPkNhdXTEgyBleGVyY2nIm2l1PC9saT5cclxuICAgICAgICAgICAgICAgIDwvU2VhcmNoRXhlcmNpc2U+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVBY2NvcmRpb24gdGl0bGU9XCJFeGVyY2nIm2lpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aXRsZUxpOiBcIkNsYXNhIElYXCIsIGhyZWY6IFwiL2V4ZXJjaXRpaSNpeFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBYXCIsIGhyZWY6IFwiL2V4ZXJjaXRpaSN4XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aXRsZUxpOiBcIkNsYXNhIFhJXCIsIGhyZWY6IFwiL2V4ZXJjaXRpaSN4aVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51QWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51QWNjb3JkaW9uIHRpdGxlPVwiUmVzdXJzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBJWFwiLCBocmVmOiBcIi9yZXN1cnNlL2l4XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aXRsZUxpOiBcIkNsYXNhIFhcIiwgaHJlZjogXCIvcmVzdXJzZS94XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aXRsZUxpOiBcIkNsYXNhIFhJXCIsIGhyZWY6IFwiL3Jlc3Vyc2UveGlcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9faHJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFRoZW1lQ2hhbmdlckJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIj5Nb2QgcHJvaWVjdG9yPC9saT5cclxuICAgICAgICAgICAgICAgIHtpc0F1dGhlbnRpY2F0ZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9faHJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4ZXJjaXRpaS9jb21wdXNlLWRlLW1pbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saVwiPkNvbXB1bmUgZXhlcmNpyJtpdTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9faHIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX191bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCguZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGk6aG92ZXIsIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fc2Vjb25kYXJ5LWxpOmhvdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCguZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGk6aG92ZXI6OmJlZm9yZSwgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19zZWNvbmRhcnktbGk6aG92ZXI6OmJlZm9yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudUFjY29yZGlvbih7IHRpdGxlLCBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCBbaXNUb2dnbGVkLCB0b2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiB0b2dnbGUoIWlzVG9nZ2xlZCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19vcHRpb24tZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RvZ2dsZURyb3Bkb3dufSBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saVwiPlxyXG4gICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJhbmdsZS1kb3duXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIjJBMkEyQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcGRvd24tbWVudS1oZWFkZXJfX2ljb24gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNUb2dnbGVkID8gXCJkcm9wZG93bi1tZW51LWhlYWRlcl9faWNvbi0tYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudCAke1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVG9nZ2xlZCA/IFwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQtLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudC11bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbi5tYXAoKHsgdGl0bGVMaSA9IFwiXCIsIGhyZWYgPSBcIlwiIH0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0ga2V5PXtgY2hpbGRfbGluay0ke2l9LSR7aHJlZn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19zZWNvbmRhcnktbGlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YGNoaWxkX2xpLSR7aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZUxpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX3NlY29uZGFyeS1saSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQtdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19vcHRpb24tZHJvcGRvd24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50LS1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9faWNvbi0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVGhlbWVDaGFuZ2VyQnV0dG9uKCkge1xyXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcImRhcmtcIik7XHJcbiAgICB1c2VDb21wb25lbnREaWRNb3VudCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGhlbWUod2luZG93Ll9fVEhFTUUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuX19USEVNRSA9IHdpbmRvdy5fX1RIRU1FID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSA9IGB0aGVtZS0ke3dpbmRvdy5fX1RIRU1FfWA7XHJcblxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCB3aW5kb3cuX19USEVNRSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaGVtZSh3aW5kb3cuX19USEVNRSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBUZW1hIHt0aGVtZSA9PT0gXCJkYXJrXCIgPyBcIsOObnR1bmVjYXTEg1wiIDogXCJMdW1pbm9hc8SDXCJ9XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\DropdownMenu.js */"));
}

function DropdownMenuUl() {
  const {
    isAuthenticated
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_5__["LoggedInDataContext"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("ul", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(_utils_SearchExercise__WEBPACK_IMPORTED_MODULE_6__["default"], {
    inputWidth: "185px",
    style: {
      marginBottom: "15px",
      paddingLeft: "15px"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__main-li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 21
    }
  }, "Caut\u0103 exerci\u021Biu")), __jsx("hr", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__hr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx(DropdownMenuAccordion, {
    title: "Exerci\u021Bii",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, [{
    titleLi: "Clasa IX",
    href: "/exercitii#ix"
  }, {
    titleLi: "Clasa X",
    href: "/exercitii#x"
  }, {
    titleLi: "Clasa XI",
    href: "/exercitii#xi"
  }]), __jsx("hr", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__hr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }), __jsx(DropdownMenuAccordion, {
    title: "Resurse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, [{
    titleLi: "Clasa IX",
    href: "/resurse/ix"
  }, {
    titleLi: "Clasa X",
    href: "/resurse/x"
  }, {
    titleLi: "Clasa XI",
    href: "/resurse/xi"
  }]), __jsx("hr", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__hr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 17
    }
  }), __jsx(ThemeChangerButton, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 17
    }
  }), __jsx("hr", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__hr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }), __jsx("li", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__main-li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, "Mod proiector"), isAuthenticated && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("hr", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__hr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/exercitii/compuse-de-mine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 25
    }
  }, __jsx("li", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__main-li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 29
    }
  }, "Compune exerci\u021Biu")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1946800395",
    __self: this
  }, ".dropdown-menu-header__hr.jsx-1946800395{width:85%;}.dropdown-menu-header__ul.jsx-1946800395{padding-top:0;padding-left:5px;list-style-type:none;}.dropdown-menu-header__main-li{font-weight:bold;font-size:var(--font-small);cursor:pointer;position:relative;padding:10px 0 10px 15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.dropdown-menu-header__main-li:hover,.dropdown-menu-header__secondary-li:hover{background-color:var(--background-primary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;}.dropdown-menu-header__main-li:hover::before,.dropdown-menu-header__secondary-li:hover::before{content:\"\";width:5px;height:100%;background-color:var(--accent-primary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;position:absolute;left:0;top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXERyb3Bkb3duTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrRndCLEFBRytCLEFBSUksQUFNRyxBQVMwQixBQUtoQyxVQXZCZixDQXdCYyxHQXBCTyxHQU1XLElBZWhCLFVBcEJTLEVBcUJrQixVQVBBLEVBUnhCLE9BTG5CLFFBTXNCLFlBZXFCLE1BZGQseUJBQ1IsMEJBTXJCLDZCQVFzQixrQkFDWCxPQUNELEtBZlYsQ0FnQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGVXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcRHJvcGRvd25NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgdXNlQ29tcG9uZW50RGlkTW91bnQgZnJvbSBcIi4uL19ob29rcy9jb21wb25lbnREaWRNb3VudFwiO1xyXG5pbXBvcnQgeyBMb2dnZWRJbkRhdGFDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL19hcHBcIjtcclxuaW1wb3J0IFNlYXJjaEV4ZXJjaXNlLCB7IFNlYXJjaElucHV0IH0gZnJvbSBcIi4uL3V0aWxzL1NlYXJjaEV4ZXJjaXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wZG93bk1lbnUoeyBpc0Ryb3Bkb3duVG9nZ2xlZCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duLW1lbnUtaGVhZGVyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEcm9wZG93blRvZ2dsZWQgPyBcImRyb3Bkb3duLW1lbnUtaGVhZGVyLS1hY3RpdmUgXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudVVsIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTEycHggMTNweCA5cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIzMHB4KSB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXItLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVVbCgpIHtcclxuICAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VDb250ZXh0KExvZ2dlZEluRGF0YUNvbnRleHQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX3VsXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoRXhlcmNpc2VcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFdpZHRoPVwiMTg1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxNXB4XCIsIHBhZGRpbmdMZWZ0OiBcIjE1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saVwiPkNhdXTEgyBleGVyY2nIm2l1PC9saT5cclxuICAgICAgICAgICAgICAgIDwvU2VhcmNoRXhlcmNpc2U+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVBY2NvcmRpb24gdGl0bGU9XCJFeGVyY2nIm2lpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aXRsZUxpOiBcIkNsYXNhIElYXCIsIGhyZWY6IFwiL2V4ZXJjaXRpaSNpeFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBYXCIsIGhyZWY6IFwiL2V4ZXJjaXRpaSN4XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aXRsZUxpOiBcIkNsYXNhIFhJXCIsIGhyZWY6IFwiL2V4ZXJjaXRpaSN4aVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51QWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51QWNjb3JkaW9uIHRpdGxlPVwiUmVzdXJzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBJWFwiLCBocmVmOiBcIi9yZXN1cnNlL2l4XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aXRsZUxpOiBcIkNsYXNhIFhcIiwgaHJlZjogXCIvcmVzdXJzZS94XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aXRsZUxpOiBcIkNsYXNhIFhJXCIsIGhyZWY6IFwiL3Jlc3Vyc2UveGlcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9faHJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFRoZW1lQ2hhbmdlckJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIj5Nb2QgcHJvaWVjdG9yPC9saT5cclxuICAgICAgICAgICAgICAgIHtpc0F1dGhlbnRpY2F0ZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9faHJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4ZXJjaXRpaS9jb21wdXNlLWRlLW1pbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saVwiPkNvbXB1bmUgZXhlcmNpyJtpdTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9faHIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX191bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCguZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGk6aG92ZXIsIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fc2Vjb25kYXJ5LWxpOmhvdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCguZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGk6aG92ZXI6OmJlZm9yZSwgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19zZWNvbmRhcnktbGk6aG92ZXI6OmJlZm9yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudUFjY29yZGlvbih7IHRpdGxlLCBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCBbaXNUb2dnbGVkLCB0b2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiB0b2dnbGUoIWlzVG9nZ2xlZCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19vcHRpb24tZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RvZ2dsZURyb3Bkb3dufSBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saVwiPlxyXG4gICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJhbmdsZS1kb3duXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIjJBMkEyQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcGRvd24tbWVudS1oZWFkZXJfX2ljb24gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNUb2dnbGVkID8gXCJkcm9wZG93bi1tZW51LWhlYWRlcl9faWNvbi0tYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudCAke1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVG9nZ2xlZCA/IFwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQtLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudC11bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbi5tYXAoKHsgdGl0bGVMaSA9IFwiXCIsIGhyZWYgPSBcIlwiIH0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0ga2V5PXtgY2hpbGRfbGluay0ke2l9LSR7aHJlZn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19zZWNvbmRhcnktbGlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YGNoaWxkX2xpLSR7aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZUxpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX3NlY29uZGFyeS1saSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQtdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19vcHRpb24tZHJvcGRvd24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50LS1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9faWNvbi0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVGhlbWVDaGFuZ2VyQnV0dG9uKCkge1xyXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcImRhcmtcIik7XHJcbiAgICB1c2VDb21wb25lbnREaWRNb3VudCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGhlbWUod2luZG93Ll9fVEhFTUUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuX19USEVNRSA9IHdpbmRvdy5fX1RIRU1FID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSA9IGB0aGVtZS0ke3dpbmRvdy5fX1RIRU1FfWA7XHJcblxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCB3aW5kb3cuX19USEVNRSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaGVtZSh3aW5kb3cuX19USEVNRSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBUZW1hIHt0aGVtZSA9PT0gXCJkYXJrXCIgPyBcIsOObnR1bmVjYXTEg1wiIDogXCJMdW1pbm9hc8SDXCJ9XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\DropdownMenu.js */"));
}

function DropdownMenuAccordion({
  title,
  children
}) {
  const {
    0: isToggled,
    1: toggle
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggleDropdown = () => toggle(!isToggled);

  return __jsx("div", {
    className: "jsx-3958027138" + " " + "dropdown-menu-header__option-dropdown",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 9
    }
  }, __jsx("li", {
    onClick: toggleDropdown,
    className: "jsx-3958027138" + " " + "dropdown-menu-header__main-li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, title, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "angle-down",
    color: "2A2A2A",
    className: `dropdown-menu-header__icon ${isToggled ? "dropdown-menu-header__icon--active" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-3958027138" + " " + `dropdown-menu-header__content ${isToggled ? "dropdown-menu-header__content--active" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "jsx-3958027138" + " " + "dropdown-menu-header__content-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  }, children.map(({
    titleLi = "",
    href = ""
  }, i) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: href,
    key: `child_link-${i}-${href}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 25
    }
  }, __jsx("li", {
    key: `child_li-${i}`,
    className: "jsx-3958027138" + " " + "dropdown-menu-header__secondary-li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 29
    }
  }, titleLi))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3958027138",
    __self: this
  }, ".dropdown-menu-header__secondary-li{padding:10px 0;font-size:var(--font-smaller);cursor:pointer;position:relative;padding-left:20px;}.dropdown-menu-header__content-ul{list-style-type:none;padding-left:0;}.dropdown-menu-header__option-dropdown{overflow:hidden;}.dropdown-menu-header__content{margin-left:20px;height:0;-webkit-transition:height 300ms ease;transition:height 300ms ease;}.dropdown-menu-header__content--active{height:140px;}.dropdown-menu-header__icon{margin-left:20px;-webkit-transition:-webkit-transform 300ms ease;-webkit-transition:transform 300ms ease;transition:transform 300ms ease;}.dropdown-menu-header__icon--active{-webkit-transform:rotateZ(180deg);-ms-transform:rotateZ(180deg);transform:rotateZ(180deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXERyb3Bkb3duTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SitCLEFBR29DLEFBUU0sQUFLTCxBQUlDLEFBTUosQUFJSSxBQUlTLGFBUDlCLEVBdkJrQyxDQWFsQyxDQUlhLEFBVXVCLElBbkJqQixLQVVjLFVBVGpDLFNBUm1CLGVBQ0csa0JBQ0EsWUE0QnRCLEVBWkEsSUFmQSx5Q0F3QkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGVXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcRHJvcGRvd25NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgdXNlQ29tcG9uZW50RGlkTW91bnQgZnJvbSBcIi4uL19ob29rcy9jb21wb25lbnREaWRNb3VudFwiO1xyXG5pbXBvcnQgeyBMb2dnZWRJbkRhdGFDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL19hcHBcIjtcclxuaW1wb3J0IFNlYXJjaEV4ZXJjaXNlLCB7IFNlYXJjaElucHV0IH0gZnJvbSBcIi4uL3V0aWxzL1NlYXJjaEV4ZXJjaXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wZG93bk1lbnUoeyBpc0Ryb3Bkb3duVG9nZ2xlZCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duLW1lbnUtaGVhZGVyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEcm9wZG93blRvZ2dsZWQgPyBcImRyb3Bkb3duLW1lbnUtaGVhZGVyLS1hY3RpdmUgXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudVVsIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTEycHggMTNweCA5cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIzMHB4KSB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXItLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVVbCgpIHtcclxuICAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VDb250ZXh0KExvZ2dlZEluRGF0YUNvbnRleHQpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX3VsXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoRXhlcmNpc2VcclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFdpZHRoPVwiMTg1cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxNXB4XCIsIHBhZGRpbmdMZWZ0OiBcIjE1cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saVwiPkNhdXTEgyBleGVyY2nIm2l1PC9saT5cclxuICAgICAgICAgICAgICAgIDwvU2VhcmNoRXhlcmNpc2U+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVBY2NvcmRpb24gdGl0bGU9XCJFeGVyY2nIm2lpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aXRsZUxpOiBcIkNsYXNhIElYXCIsIGhyZWY6IFwiL2V4ZXJjaXRpaSNpeFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBYXCIsIGhyZWY6IFwiL2V4ZXJjaXRpaSN4XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aXRsZUxpOiBcIkNsYXNhIFhJXCIsIGhyZWY6IFwiL2V4ZXJjaXRpaSN4aVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51QWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51QWNjb3JkaW9uIHRpdGxlPVwiUmVzdXJzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBJWFwiLCBocmVmOiBcIi9yZXN1cnNlL2l4XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aXRsZUxpOiBcIkNsYXNhIFhcIiwgaHJlZjogXCIvcmVzdXJzZS94XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aXRsZUxpOiBcIkNsYXNhIFhJXCIsIGhyZWY6IFwiL3Jlc3Vyc2UveGlcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9faHJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPFRoZW1lQ2hhbmdlckJ1dHRvbiAvPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIj5Nb2QgcHJvaWVjdG9yPC9saT5cclxuICAgICAgICAgICAgICAgIHtpc0F1dGhlbnRpY2F0ZWQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9faHJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2V4ZXJjaXRpaS9jb21wdXNlLWRlLW1pbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saVwiPkNvbXB1bmUgZXhlcmNpyJtpdTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9faHIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX191bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCguZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGk6aG92ZXIsIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fc2Vjb25kYXJ5LWxpOmhvdmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCguZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGk6aG92ZXI6OmJlZm9yZSwgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19zZWNvbmRhcnktbGk6aG92ZXI6OmJlZm9yZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudUFjY29yZGlvbih7IHRpdGxlLCBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCBbaXNUb2dnbGVkLCB0b2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiB0b2dnbGUoIWlzVG9nZ2xlZCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19vcHRpb24tZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPGxpIG9uQ2xpY2s9e3RvZ2dsZURyb3Bkb3dufSBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saVwiPlxyXG4gICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJhbmdsZS1kb3duXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIjJBMkEyQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcGRvd24tbWVudS1oZWFkZXJfX2ljb24gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNUb2dnbGVkID8gXCJkcm9wZG93bi1tZW51LWhlYWRlcl9faWNvbi0tYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudCAke1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVG9nZ2xlZCA/IFwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQtLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudC11bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbi5tYXAoKHsgdGl0bGVMaSA9IFwiXCIsIGhyZWYgPSBcIlwiIH0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aHJlZn0ga2V5PXtgY2hpbGRfbGluay0ke2l9LSR7aHJlZn1gfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19zZWNvbmRhcnktbGlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YGNoaWxkX2xpLSR7aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZUxpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX3NlY29uZGFyeS1saSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQtdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19vcHRpb24tZHJvcGRvd24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50LS1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTQwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9faWNvbi0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMTgwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVGhlbWVDaGFuZ2VyQnV0dG9uKCkge1xyXG4gICAgY29uc3QgW3RoZW1lLCBzZXRUaGVtZV0gPSB1c2VTdGF0ZShcImRhcmtcIik7XHJcbiAgICB1c2VDb21wb25lbnREaWRNb3VudCgoKSA9PiB7XHJcbiAgICAgICAgc2V0VGhlbWUod2luZG93Ll9fVEhFTUUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGlcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuX19USEVNRSA9IHdpbmRvdy5fX1RIRU1FID09PSBcImRhcmtcIiA/IFwibGlnaHRcIiA6IFwiZGFya1wiO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTmFtZSA9IGB0aGVtZS0ke3dpbmRvdy5fX1RIRU1FfWA7XHJcblxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCB3aW5kb3cuX19USEVNRSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaGVtZSh3aW5kb3cuX19USEVNRSk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICBUZW1hIHt0aGVtZSA9PT0gXCJkYXJrXCIgPyBcIsOObnR1bmVjYXTEg1wiIDogXCJMdW1pbm9hc8SDXCJ9XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\DropdownMenu.js */"));
}

function ThemeChangerButton() {
  const {
    0: theme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("dark");
  Object(_hooks_componentDidMount__WEBPACK_IMPORTED_MODULE_4__["default"])(() => {
    setTheme(window.__THEME);
  });
  return __jsx("li", {
    className: "dropdown-menu-header__main-li",
    onClick: () => {
      window.__THEME = window.__THEME === "dark" ? "light" : "dark";
      document.documentElement.className = `theme-${window.__THEME}`;
      localStorage.setItem("theme", window.__THEME);
      setTheme(window.__THEME);
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 9
    }
  }, "Tema ", theme === "dark" ? "Întunecată" : "Luminoasă");
}

/***/ }),

/***/ "./components/_globals/Footer.js":
/*!***************************************!*\
  !*** ./components/_globals/Footer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\_globals\\Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function Footer() {
  return __jsx("footer", {
    className: "jsx-3518460930" + " " + "footer",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3,
      columnNumber: 9
    }
  }, __jsx("h1", {
    className: "jsx-3518460930" + " " + "footer__heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }, "infoplus @ 2020"), __jsx("p", {
    className: "jsx-3518460930" + " " + "footer__more-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, "Toate drepturile rezervate."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3518460930",
    __self: this
  }, ".footer.jsx-3518460930{width:100%;color:var(--text-secondary);background-color:var(--footer);-webkit-transition:color,background-color 300ms ease;transition:color,background-color 300ms ease;text-align:center;padding:50px 10px;}.footer__heading.jsx-3518460930{margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXEZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNd0IsQUFHZ0MsQUFTUSxXQVJTLFFBU2hDLG9CQVJtQywrQkFDZSxrR0FDNUIsa0JBQ0Esa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXEZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvb3Rlcl9faGVhZGluZ1wiPmluZm9wbHVzIEAgMjAyMDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9fbW9yZS1pbmZvXCI+VG9hdGUgZHJlcHR1cmlsZSByZXplcnZhdGUuPC9wPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZm9vdGVyX19oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\Footer.js */"));
}

/***/ }),

/***/ "./components/_globals/Header.js":
/*!***************************************!*\
  !*** ./components/_globals/Header.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropdownMenu */ "./components/_globals/DropdownMenu.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _OverlayDarkener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./OverlayDarkener */ "./components/_globals/OverlayDarkener.js");
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/_app */ "./pages/_app.js");
/* harmony import */ var _utils_LogoutButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/LogoutButton */ "./components/utils/LogoutButton.js");
/* harmony import */ var _utils_SearchExercise__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/SearchExercise */ "./components/utils/SearchExercise.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\_globals\\Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;








function Header() {
  const {
    0: isDropdownToggled,
    1: toggleDropdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggleMenuDropdown = () => toggleDropdown(!isDropdownToggled);

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("header", {
    className: "jsx-3076026530" + " " + "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-3076026530" + " " + "header__site-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 21
    }
  }, __jsx(SiteLogo, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 25
    }
  }))), __jsx(IconsRightMenu, {
    isDropdownToggled: isDropdownToggled,
    toggleMenuDropdown: toggleMenuDropdown,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }), __jsx(_DropdownMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isDropdownToggled: isDropdownToggled,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3076026530",
    __self: this
  }, ".header{width:100%;height:60px;background-color:var(--background-secondary);box-shadow:var(--box-shadow);color:var(--text-primary);position:fixed;top:0;padding:0 40px;z-index:100;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:color,background-color 300ms ease;transition:color,background-color 300ms ease;}@media screen and (max-width:375px){.header{padding:0 15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQm1DLEFBR29DLEFBaUJRLFdBaEJQLElBaUJaLFFBaEI2Qyw2Q0FDaEIsNkJBQ0gsMEJBQ1gsZUFDVCxNQUNTLGVBQ0gsWUFDQywwRUFDTSw2RkFDVyxtSEFDZ0Isa0dBQ2xEIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tIFwiLi9Ecm9wZG93bk1lbnVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgT3ZlcmxheURhcmtlbmVyIGZyb20gXCIuL092ZXJsYXlEYXJrZW5lclwiO1xyXG5pbXBvcnQgeyBMb2dnZWRJbkRhdGFDb250ZXh0LCBTaG93TG9naW5Db250ZXh0IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL19hcHBcIjtcclxuaW1wb3J0IExvZ291dEJ1dHRvbiBmcm9tIFwiLi4vdXRpbHMvTG9nb3V0QnV0dG9uXCI7XHJcbmltcG9ydCBTZWFyY2hFeGVyY2lzZSBmcm9tIFwiLi4vdXRpbHMvU2VhcmNoRXhlcmNpc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIGNvbnN0IFtpc0Ryb3Bkb3duVG9nZ2xlZCwgdG9nZ2xlRHJvcGRvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdG9nZ2xlTWVudURyb3Bkb3duID0gKCkgPT4gdG9nZ2xlRHJvcGRvd24oIWlzRHJvcGRvd25Ub2dnbGVkKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19zaXRlLWxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpdGVMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8SWNvbnNSaWdodE1lbnVcclxuICAgICAgICAgICAgICAgICAgICBpc0Ryb3Bkb3duVG9nZ2xlZD17aXNEcm9wZG93blRvZ2dsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTWVudURyb3Bkb3duPXt0b2dnbGVNZW51RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudSBpc0Ryb3Bkb3duVG9nZ2xlZD17aXNEcm9wZG93blRvZ2dsZWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIHtpc0Ryb3Bkb3duVG9nZ2xlZCAmJiA8T3ZlcmxheURhcmtlbmVyIG9uQ2xpY2s9e3RvZ2dsZU1lbnVEcm9wZG93bn0gLz59XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJY29uc1JpZ2h0TWVudSh7IGlzRHJvcGRvd25Ub2dnbGVkLCB0b2dnbGVNZW51RHJvcGRvd24gfSkge1xyXG4gICAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoTG9nZ2VkSW5EYXRhQ29udGV4dCk7XHJcbiAgICBjb25zdCBzaG93TG9naW5Nb2RhbCA9IHVzZUNvbnRleHQoU2hvd0xvZ2luQ29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9faWNvbnMtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2J1dHRvbiBoZWFkZXJfX2J1dHRvbi0taGFzLXNlYXJjaC1leGVyY2lzZVwiPlxyXG4gICAgICAgICAgICAgICAgPFNlYXJjaEV4ZXJjaXNlIGlucHV0V2lkdGg9XCIyMTBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNlYXJjaFwiIGNsYXNzTmFtZT1cImhlYWRlcl9faWNvbiBoZWFkZXJfX2ljb24tLXNlYXJjaFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1NlYXJjaEV4ZXJjaXNlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2lzQXV0aGVudGljYXRlZCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidXNlclwiIGNsYXNzTmFtZT1cImhlYWRlcl9faWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TG9nb3V0QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyX19idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVGb3JJY29uPVwiaGVhZGVyX19pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fYnV0dG9uXCIgb25DbGljaz17c2hvd0xvZ2luTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNpZ24taW4tYWx0XCIgY2xhc3NOYW1lPVwiaGVhZGVyX19pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2J1dHRvbiBoZWFkZXJfX2J1dHRvbi0tbWVudVwiIG9uQ2xpY2s9e3RvZ2dsZU1lbnVEcm9wZG93bn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImJhcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhlYWRlcl9fbWVudS1pY29uICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRHJvcGRvd25Ub2dnbGVkID8gXCJoZWFkZXJfX21lbnUtaWNvbi0tYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlYWRlcl9fbWVudS10aXRsZVwiPk1FTklVPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9faWNvbnMtcmlnaHQsXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19idXR0b24tLW1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGxpbmVhcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19idXR0b246aG92ZXI6bm90KC5oZWFkZXJfX2J1dHRvbi0taGFzLXNlYXJjaC1leGVyY2lzZSksXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19pY29uLS1zZWFyY2g6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLmhlYWRlcl9faWNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgb3BhY2l0eSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLmhlYWRlcl9faWNvbiwgLmhlYWRlcl9fbWVudS1pY29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogdmFyKC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWljb24tLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXJfX2J1dHRvbi0taGFzLXNlYXJjaC1leGVyY2lzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTaXRlTG9nbygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB3aWR0aD1cIjU3XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNTdcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDU3IDU3XCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyX19zaXRlLWxvZ29cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjguNSA1N0M0NC4yNDAxIDU3IDU3IDQ0LjI0MDEgNTcgMjguNUM1NyAxMi43NTk5IDQ0LjI0MDEgMCAyOC41IDBDMTIuNzU5OSAwIDAgMTIuNzU5OSAwIDI4LjVDMCA0NC4yNDAxIDEyLjc1OTkgNTcgMjguNSA1N1pcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0yMS45NDY3IDIxLjUwNEMyMS4xNTczIDIxLjUwNCAyMC40ODUzIDIxLjIyNjcgMTkuOTMwNyAyMC42NzJDMTkuMzc2IDIwLjExNzMgMTkuMDk4NyAxOS40NDUzIDE5LjA5ODcgMTguNjU2QzE5LjA5ODcgMTcuODY2NyAxOS4zNzYgMTcuMTk0NyAxOS45MzA3IDE2LjY0QzIwLjQ4NTMgMTYuMDg1MyAyMS4xNTczIDE1LjgwOCAyMS45NDY3IDE1LjgwOEMyMi43MzYgMTUuODA4IDIzLjQwOCAxNi4wODUzIDIzLjk2MjcgMTYuNjRDMjQuNTE3MyAxNy4xOTQ3IDI0Ljc5NDcgMTcuODY2NyAyNC43OTQ3IDE4LjY1NkMyNC43OTQ3IDE5LjQ0NTMgMjQuNTE3MyAyMC4xMTczIDIzLjk2MjcgMjAuNjcyQzIzLjQwOCAyMS4yMjY3IDIyLjczNiAyMS41MDQgMjEuOTQ2NyAyMS41MDRaTTI0LjUzODcgMjMuMDcyVjQwSDE5LjM1NDdWMjMuMDcySDI0LjUzODdaTTM3LjEwNTcgMzYuMDY0SDMzLjEwNTdWMzAuNDk2SDI3LjUwNTdWMjYuNTI4SDMzLjEwNTdWMjEuMDg4SDM3LjEwNTdWMjYuNTI4SDQyLjY3MzdWMzAuNDk2SDM3LjEwNTdWMzYuMDY0WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidmFyKC0tdGV4dC1zZWNvbmRhcnkpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXJfX3NpdGUtbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\Header.js */")), isDropdownToggled && __jsx(_OverlayDarkener__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: toggleMenuDropdown,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 35
    }
  }));
}

function IconsRightMenu({
  isDropdownToggled,
  toggleMenuDropdown
}) {
  const {
    isAuthenticated
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_6__["LoggedInDataContext"]);
  const showLoginModal = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_6__["ShowLoginContext"]);
  return __jsx("div", {
    className: "jsx-920646316" + " " + "header__icons-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-920646316" + " " + "header__button header__button--has-search-exercise",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, __jsx(_utils_SearchExercise__WEBPACK_IMPORTED_MODULE_8__["default"], {
    inputWidth: "210px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "search",
    className: "header__icon header__icon--search",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }))), isAuthenticated ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/dashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-920646316" + " " + "header__button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "user",
    className: "header__icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 29
    }
  }))), __jsx(_utils_LogoutButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "icon",
    className: "header__button",
    classNameForIcon: "header__icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  })) : __jsx("div", {
    onClick: showLoginModal,
    className: "jsx-920646316" + " " + "header__button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "sign-in-alt",
    className: "header__icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  })), __jsx("div", {
    onClick: toggleMenuDropdown,
    className: "jsx-920646316" + " " + "header__button header__button--menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "bars",
    className: `header__menu-icon ${isDropdownToggled ? "header__menu-icon--active" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 17
    }
  }), __jsx("h4", {
    className: "jsx-920646316" + " " + "header__menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 17
    }
  }, "MENIU")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "920646316",
    __self: this
  }, ".header__icons-right,.header__button--menu{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header__button{margin:0 15px;cursor:pointer;-webkit-transition:opacity 300ms linear;transition:opacity 300ms linear;}.header__button:hover:not(.header__button--has-search-exercise),.header__icon--search:hover{opacity:0.5;}.header__menu-title{margin-left:10px;font-weight:800;}.header__icon{-webkit-transition-property:-webkit-transform,opacity !important;-webkit-transition-property:transform,opacity !important;transition-property:transform,opacity !important;}.header__icon,.header__menu-icon{fill:var(--background-quaternary);-webkit-transition:fill 300ms ease;transition:fill 300ms ease;width:25px !important;height:25px;}.header__menu-icon{-webkit-transition:-webkit-transform 300ms ease;-webkit-transition:transform 300ms ease;transition:transform 300ms ease;}.header__menu-icon--active{-webkit-transform:rotateZ(90deg);-ms-transform:rotateZ(90deg);transform:rotateZ(90deg);}@media screen and (max-width:576px){.header__button--has-search-exercise{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRitCLEFBSWtDLEFBS0MsQUFPRixBQUlLLEFBS2lDLEFBSWhCLEFBT0YsQUFJUCxBQUtSLFlBNUJyQixDQTZCSSxDQXBDZSxHQVdDLFlBVmdCLElBV3BDLENBUStCLHdDQXpCUixhQW9DdkIsU0FWMEIsS0FuQjFCLGlCQW9CZ0IsRUFLaEIsVUFKQSxxQ0EzQkEsSUFvQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGVXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gXCIuL0Ryb3Bkb3duTWVudVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBPdmVybGF5RGFya2VuZXIgZnJvbSBcIi4vT3ZlcmxheURhcmtlbmVyXCI7XHJcbmltcG9ydCB7IExvZ2dlZEluRGF0YUNvbnRleHQsIFNob3dMb2dpbkNvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvX2FwcFwiO1xyXG5pbXBvcnQgTG9nb3V0QnV0dG9uIGZyb20gXCIuLi91dGlscy9Mb2dvdXRCdXR0b25cIjtcclxuaW1wb3J0IFNlYXJjaEV4ZXJjaXNlIGZyb20gXCIuLi91dGlscy9TZWFyY2hFeGVyY2lzZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgY29uc3QgW2lzRHJvcGRvd25Ub2dnbGVkLCB0b2dnbGVEcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB0b2dnbGVNZW51RHJvcGRvd24gPSAoKSA9PiB0b2dnbGVEcm9wZG93bighaXNEcm9wZG93blRvZ2dsZWQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3NpdGUtbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2l0ZUxvZ28gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxJY29uc1JpZ2h0TWVudVxyXG4gICAgICAgICAgICAgICAgICAgIGlzRHJvcGRvd25Ub2dnbGVkPXtpc0Ryb3Bkb3duVG9nZ2xlZH1cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVNZW51RHJvcGRvd249e3RvZ2dsZU1lbnVEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51IGlzRHJvcGRvd25Ub2dnbGVkPXtpc0Ryb3Bkb3duVG9nZ2xlZH0gLz5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAge2lzRHJvcGRvd25Ub2dnbGVkICYmIDxPdmVybGF5RGFya2VuZXIgb25DbGljaz17dG9nZ2xlTWVudURyb3Bkb3dufSAvPn1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEljb25zUmlnaHRNZW51KHsgaXNEcm9wZG93blRvZ2dsZWQsIHRvZ2dsZU1lbnVEcm9wZG93biB9KSB7XHJcbiAgICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChMb2dnZWRJbkRhdGFDb250ZXh0KTtcclxuICAgIGNvbnN0IHNob3dMb2dpbk1vZGFsID0gdXNlQ29udGV4dChTaG93TG9naW5Db250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19pY29ucy1yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fYnV0dG9uIGhlYWRlcl9fYnV0dG9uLS1oYXMtc2VhcmNoLWV4ZXJjaXNlXCI+XHJcbiAgICAgICAgICAgICAgICA8U2VhcmNoRXhlcmNpc2UgaW5wdXRXaWR0aD1cIjIxMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwic2VhcmNoXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19pY29uIGhlYWRlcl9faWNvbi0tc2VhcmNoXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvU2VhcmNoRXhlcmNpc2U+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7aXNBdXRoZW50aWNhdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ1c2VyXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dvdXRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXJfX2J1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZUZvckljb249XCJoZWFkZXJfX2ljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19idXR0b25cIiBvbkNsaWNrPXtzaG93TG9naW5Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwic2lnbi1pbi1hbHRcIiBjbGFzc05hbWU9XCJoZWFkZXJfX2ljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fYnV0dG9uIGhlYWRlcl9fYnV0dG9uLS1tZW51XCIgb25DbGljaz17dG9nZ2xlTWVudURyb3Bkb3dufT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiYmFyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGVhZGVyX19tZW51LWljb24gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEcm9wZG93blRvZ2dsZWQgPyBcImhlYWRlcl9fbWVudS1pY29uLS1hY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaGVhZGVyX19tZW51LXRpdGxlXCI+TUVOSVU8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19pY29ucy1yaWdodCxcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX2J1dHRvbi0tbWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX2J1dHRvbjpob3Zlcjpub3QoLmhlYWRlcl9fYnV0dG9uLS1oYXMtc2VhcmNoLWV4ZXJjaXNlKSxcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX2ljb24tLXNlYXJjaDpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCguaGVhZGVyX19pY29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBvcGFjaXR5ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCguaGVhZGVyX19pY29uLCAuaGVhZGVyX19tZW51LWljb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtaWNvbi0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlcl9fYnV0dG9uLS1oYXMtc2VhcmNoLWV4ZXJjaXNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNpdGVMb2dvKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTdcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI1N1wiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTcgNTdcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXJfX3NpdGUtbG9nb1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0yOC41IDU3QzQ0LjI0MDEgNTcgNTcgNDQuMjQwMSA1NyAyOC41QzU3IDEyLjc1OTkgNDQuMjQwMSAwIDI4LjUgMEMxMi43NTk5IDAgMCAxMi43NTk5IDAgMjguNUMwIDQ0LjI0MDEgMTIuNzU5OSA1NyAyOC41IDU3WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidmFyKC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5KVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTIxLjk0NjcgMjEuNTA0QzIxLjE1NzMgMjEuNTA0IDIwLjQ4NTMgMjEuMjI2NyAxOS45MzA3IDIwLjY3MkMxOS4zNzYgMjAuMTE3MyAxOS4wOTg3IDE5LjQ0NTMgMTkuMDk4NyAxOC42NTZDMTkuMDk4NyAxNy44NjY3IDE5LjM3NiAxNy4xOTQ3IDE5LjkzMDcgMTYuNjRDMjAuNDg1MyAxNi4wODUzIDIxLjE1NzMgMTUuODA4IDIxLjk0NjcgMTUuODA4QzIyLjczNiAxNS44MDggMjMuNDA4IDE2LjA4NTMgMjMuOTYyNyAxNi42NEMyNC41MTczIDE3LjE5NDcgMjQuNzk0NyAxNy44NjY3IDI0Ljc5NDcgMTguNjU2QzI0Ljc5NDcgMTkuNDQ1MyAyNC41MTczIDIwLjExNzMgMjMuOTYyNyAyMC42NzJDMjMuNDA4IDIxLjIyNjcgMjIuNzM2IDIxLjUwNCAyMS45NDY3IDIxLjUwNFpNMjQuNTM4NyAyMy4wNzJWNDBIMTkuMzU0N1YyMy4wNzJIMjQuNTM4N1pNMzcuMTA1NyAzNi4wNjRIMzMuMTA1N1YzMC40OTZIMjcuNTA1N1YyNi41MjhIMzMuMTA1N1YyMS4wODhIMzcuMTA1N1YyNi41MjhINDIuNjczN1YzMC40OTZIMzcuMTA1N1YzNi4wNjRaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ2YXIoLS10ZXh0LXNlY29uZGFyeSlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlcl9fc2l0ZS1sb2dvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\Header.js */"));
}

function SiteLogo() {
  return __jsx("svg", {
    width: "57",
    height: "57",
    viewBox: "0 0 57 57",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-3674848814" + " " + "header__site-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M28.5 57C44.2401 57 57 44.2401 57 28.5C57 12.7599 44.2401 0 28.5 0C12.7599 0 0 12.7599 0 28.5C0 44.2401 12.7599 57 28.5 57Z",
    fill: "var(--background-quaternary)",
    className: "jsx-3674848814",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M21.9467 21.504C21.1573 21.504 20.4853 21.2267 19.9307 20.672C19.376 20.1173 19.0987 19.4453 19.0987 18.656C19.0987 17.8667 19.376 17.1947 19.9307 16.64C20.4853 16.0853 21.1573 15.808 21.9467 15.808C22.736 15.808 23.408 16.0853 23.9627 16.64C24.5173 17.1947 24.7947 17.8667 24.7947 18.656C24.7947 19.4453 24.5173 20.1173 23.9627 20.672C23.408 21.2267 22.736 21.504 21.9467 21.504ZM24.5387 23.072V40H19.3547V23.072H24.5387ZM37.1057 36.064H33.1057V30.496H27.5057V26.528H33.1057V21.088H37.1057V26.528H42.6737V30.496H37.1057V36.064Z",
    fill: "var(--text-secondary)",
    className: "jsx-3674848814",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3674848814",
    __self: this
  }, ".header__site-logo{width:35px;height:35px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzS2lCLEFBR29DLFdBQ0MsWUFDRyxlQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZVdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSBcIi4vRHJvcGRvd25NZW51XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE92ZXJsYXlEYXJrZW5lciBmcm9tIFwiLi9PdmVybGF5RGFya2VuZXJcIjtcclxuaW1wb3J0IHsgTG9nZ2VkSW5EYXRhQ29udGV4dCwgU2hvd0xvZ2luQ29udGV4dCB9IGZyb20gXCIuLi8uLi9wYWdlcy9fYXBwXCI7XHJcbmltcG9ydCBMb2dvdXRCdXR0b24gZnJvbSBcIi4uL3V0aWxzL0xvZ291dEJ1dHRvblwiO1xyXG5pbXBvcnQgU2VhcmNoRXhlcmNpc2UgZnJvbSBcIi4uL3V0aWxzL1NlYXJjaEV4ZXJjaXNlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBbaXNEcm9wZG93blRvZ2dsZWQsIHRvZ2dsZURyb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHRvZ2dsZU1lbnVEcm9wZG93biA9ICgpID0+IHRvZ2dsZURyb3Bkb3duKCFpc0Ryb3Bkb3duVG9nZ2xlZCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fc2l0ZS1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaXRlTG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPEljb25zUmlnaHRNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEcm9wZG93blRvZ2dsZWQ9e2lzRHJvcGRvd25Ub2dnbGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZU1lbnVEcm9wZG93bj17dG9nZ2xlTWVudURyb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgaXNEcm9wZG93blRvZ2dsZWQ9e2lzRHJvcGRvd25Ub2dnbGVkfSAvPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICB7aXNEcm9wZG93blRvZ2dsZWQgJiYgPE92ZXJsYXlEYXJrZW5lciBvbkNsaWNrPXt0b2dnbGVNZW51RHJvcGRvd259IC8+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSWNvbnNSaWdodE1lbnUoeyBpc0Ryb3Bkb3duVG9nZ2xlZCwgdG9nZ2xlTWVudURyb3Bkb3duIH0pIHtcclxuICAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VDb250ZXh0KExvZ2dlZEluRGF0YUNvbnRleHQpO1xyXG4gICAgY29uc3Qgc2hvd0xvZ2luTW9kYWwgPSB1c2VDb250ZXh0KFNob3dMb2dpbkNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2ljb25zLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19idXR0b24gaGVhZGVyX19idXR0b24tLWhhcy1zZWFyY2gtZXhlcmNpc2VcIj5cclxuICAgICAgICAgICAgICAgIDxTZWFyY2hFeGVyY2lzZSBpbnB1dFdpZHRoPVwiMjEwcHhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJoZWFkZXJfX2ljb24gaGVhZGVyX19pY29uLS1zZWFyY2hcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9TZWFyY2hFeGVyY2lzZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtpc0F1dGhlbnRpY2F0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInVzZXJcIiBjbGFzc05hbWU9XCJoZWFkZXJfX2ljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ291dEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlcl9fYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lRm9ySWNvbj1cImhlYWRlcl9faWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2J1dHRvblwiIG9uQ2xpY2s9e3Nob3dMb2dpbk1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzaWduLWluLWFsdFwiIGNsYXNzTmFtZT1cImhlYWRlcl9faWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19idXR0b24gaGVhZGVyX19idXR0b24tLW1lbnVcIiBvbkNsaWNrPXt0b2dnbGVNZW51RHJvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJiYXJzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXJfX21lbnUtaWNvbiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Ryb3Bkb3duVG9nZ2xlZCA/IFwiaGVhZGVyX19tZW51LWljb24tLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJoZWFkZXJfX21lbnUtdGl0bGVcIj5NRU5JVTwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX2ljb25zLXJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fYnV0dG9uLS1tZW51IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBsaW5lYXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fYnV0dG9uOmhvdmVyOm5vdCguaGVhZGVyX19idXR0b24tLWhhcy1zZWFyY2gtZXhlcmNpc2UpLFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9faWNvbi0tc2VhcmNoOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5oZWFkZXJfX2ljb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm0sIG9wYWNpdHkgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5oZWFkZXJfX2ljb24sIC5oZWFkZXJfX21lbnUtaWNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1pY29uLS1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWig5MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyX19idXR0b24tLWhhcy1zZWFyY2gtZXhlcmNpc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU2l0ZUxvZ28oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgd2lkdGg9XCI1N1wiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjU3XCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1NyA1N1wiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlcl9fc2l0ZS1sb2dvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTI4LjUgNTdDNDQuMjQwMSA1NyA1NyA0NC4yNDAxIDU3IDI4LjVDNTcgMTIuNzU5OSA0NC4yNDAxIDAgMjguNSAwQzEyLjc1OTkgMCAwIDEyLjc1OTkgMCAyOC41QzAgNDQuMjQwMSAxMi43NTk5IDU3IDI4LjUgNTdaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ2YXIoLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnkpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjEuOTQ2NyAyMS41MDRDMjEuMTU3MyAyMS41MDQgMjAuNDg1MyAyMS4yMjY3IDE5LjkzMDcgMjAuNjcyQzE5LjM3NiAyMC4xMTczIDE5LjA5ODcgMTkuNDQ1MyAxOS4wOTg3IDE4LjY1NkMxOS4wOTg3IDE3Ljg2NjcgMTkuMzc2IDE3LjE5NDcgMTkuOTMwNyAxNi42NEMyMC40ODUzIDE2LjA4NTMgMjEuMTU3MyAxNS44MDggMjEuOTQ2NyAxNS44MDhDMjIuNzM2IDE1LjgwOCAyMy40MDggMTYuMDg1MyAyMy45NjI3IDE2LjY0QzI0LjUxNzMgMTcuMTk0NyAyNC43OTQ3IDE3Ljg2NjcgMjQuNzk0NyAxOC42NTZDMjQuNzk0NyAxOS40NDUzIDI0LjUxNzMgMjAuMTE3MyAyMy45NjI3IDIwLjY3MkMyMy40MDggMjEuMjI2NyAyMi43MzYgMjEuNTA0IDIxLjk0NjcgMjEuNTA0Wk0yNC41Mzg3IDIzLjA3MlY0MEgxOS4zNTQ3VjIzLjA3MkgyNC41Mzg3Wk0zNy4xMDU3IDM2LjA2NEgzMy4xMDU3VjMwLjQ5NkgyNy41MDU3VjI2LjUyOEgzMy4xMDU3VjIxLjA4OEgzNy4xMDU3VjI2LjUyOEg0Mi42NzM3VjMwLjQ5NkgzNy4xMDU3VjM2LjA2NFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLXRleHQtc2Vjb25kYXJ5KVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyX19zaXRlLWxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\Header.js */"));
}

/***/ }),

/***/ "./components/_globals/Login.js":
/*!**************************************!*\
  !*** ./components/_globals/Login.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_formModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/formModal */ "./styles/formModal.js");
/* harmony import */ var _OverlayDarkener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OverlayDarkener */ "./components/_globals/OverlayDarkener.js");
/* harmony import */ var _utils_InputAreas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/InputAreas */ "./components/utils/InputAreas.js");
/* harmony import */ var _utils_inputAreaLoginData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/inputAreaLoginData */ "./components/utils/inputAreaLoginData.js");
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages/_app */ "./pages/_app.js");
/* harmony import */ var _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/lengthBoundariesForFields */ "./utils/lengthBoundariesForFields.js");
/* harmony import */ var _utils_submit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/submit */ "./utils/submit.js");
/* harmony import */ var _utils_genericReducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../utils/genericReducer */ "./components/utils/genericReducer.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\_globals\\Login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










function Login({
  cancelDisabled = false
}) {
  const {
    0: userDetails,
    1: setUserDetail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_utils_genericReducer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    username: "",
    password: ""
  });
  const {
    0: isSubmitDisabled,
    1: setSubmitDisabled
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: errorMessage,
    1: setErrorMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const showLoginModalHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_7__["LoginModalHandler"]);
  const {
    setAuthenticated
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_7__["LoggedInDataContext"]);
  const createAlert = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_7__["ShowAlertContext"]);
  const modalRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])();
  const submitLoginData = Object(react__WEBPACK_IMPORTED_MODULE_1__["useCallback"])(e => {
    e.preventDefault();
    console.log(e.target);
    setSubmitDisabled(true);
    Object(_utils_submit__WEBPACK_IMPORTED_MODULE_9__["default"])({
      to: "http://localhost:3000/api/login",
      fieldValues: userDetails,
      fieldOptions: {
        lengthBoundariesForEachField: _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_8__["loginBoundaries"]
      }
    }).then(({
      ok = false,
      error = "A apărut o eroare internă, vă rugam să ne scuzați."
    }) => {
      if (!ok) {
        createAlert({
          ofType: "error",
          saying: error
        });
        setSubmitDisabled(false);
        return;
      }

      createAlert({
        ofType: "success"
      });
      showLoginModalHandler();
      setAuthenticated(true);
    }).catch(error => {
      setSubmitDisabled(false);
      setTimeout(() => modalRef.current.scrollBy(0, modalRef.current.scrollHeight), 0);

      if (error === null || error === void 0 ? void 0 : error.fromFieldsValidity) {
        setErrorMessage(error.message);
        return;
      }

      setErrorMessage("A apărut o eroare internă, vă rugăm să ne scuzați.");
      console.error(error);
    });
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_OverlayDarkener__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: showLoginModalHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }
  }), __jsx("div", {
    ref: modalRef,
    className: "jsx-1371609477 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal modal--login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1371609477 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__title-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx(LoginModalWave, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 11
    }
  }), __jsx("h2", {
    className: "jsx-1371609477 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 11
    }
  }, "Logheaz\u0103-te")), __jsx("div", {
    className: "jsx-1371609477 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panels",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx("form", {
    onSubmit: submitLoginData,
    className: "jsx-1371609477 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx(_utils_InputAreas__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "modal__input-panel",
    inputAreaData: _utils_inputAreaLoginData__WEBPACK_IMPORTED_MODULE_6__["default"],
    onChange: ({
      target: {
        name,
        value
      }
    }) => setUserDetail({
      type: name,
      value
    }),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1371609477 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__buttons-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx("button", {
    type: "submit",
    disabled: isSubmitDisabled,
    onClick: submitLoginData,
    className: "jsx-1371609477 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "button--primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  }, "Logare"), !cancelDisabled && __jsx("button", {
    type: "button",
    onClick: showLoginModalHandler,
    className: "jsx-1371609477 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "button--tertiary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 17
    }
  }, "Renun\u021B\u0103"))), errorMessage && __jsx("p", {
    className: "jsx-1371609477 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "error-message",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 13
    }
  }, errorMessage, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "times-circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 30
    }
  }), " "))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash,
    __self: this
  }, _styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1371609477",
    __self: this
  }, ".modal.jsx-1371609477{width:50%;max-height:81%;}.modal__buttons-container.jsx-1371609477{margin-top:30px;}.modal--login .input-area{margin:30px 10px;}.modal--login .button--primary{background-color:var(--accent-primary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXExvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRGa0IsQUFHcUIsQUFLTSxBQUlDLEFBSXNCLFVBWnhCLE1BS2pCLENBSUEsUUFSQSxjQVlBIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXExvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQsIHVzZUNhbGxiYWNrLCB1c2VSZWR1Y2VyLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuaW1wb3J0IGZvcm1Nb2RhbCBmcm9tIFwiLi4vLi4vc3R5bGVzL2Zvcm1Nb2RhbFwiO1xyXG5pbXBvcnQgT3ZlcmxheURhcmtlbmVyIGZyb20gXCIuL092ZXJsYXlEYXJrZW5lclwiO1xyXG5pbXBvcnQgSW5wdXRBcmVhcyBmcm9tIFwiLi4vdXRpbHMvSW5wdXRBcmVhc1wiO1xyXG5pbXBvcnQgaW5wdXRBcmVhTG9naW5EYXRhIGZyb20gXCIuLi91dGlscy9pbnB1dEFyZWFMb2dpbkRhdGFcIjtcclxuXHJcbmltcG9ydCB7IExvZ2dlZEluRGF0YUNvbnRleHQsIExvZ2luTW9kYWxIYW5kbGVyLCBTaG93QWxlcnRDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL19hcHBcIjtcclxuaW1wb3J0IHsgbG9naW5Cb3VuZGFyaWVzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2xlbmd0aEJvdW5kYXJpZXNGb3JGaWVsZHNcIjtcclxuaW1wb3J0IHN1Ym1pdCBmcm9tIFwiLi4vLi4vdXRpbHMvc3VibWl0XCI7XHJcbmltcG9ydCBnZW5lcmljUmVkdWNlciBmcm9tIFwiLi4vdXRpbHMvZ2VuZXJpY1JlZHVjZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKHsgY2FuY2VsRGlzYWJsZWQgPSBmYWxzZSB9KSB7XHJcbiAgY29uc3QgW3VzZXJEZXRhaWxzLCBzZXRVc2VyRGV0YWlsXSA9IHVzZVJlZHVjZXIoZ2VuZXJpY1JlZHVjZXIsIHsgdXNlcm5hbWU6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xyXG5cclxuICBjb25zdCBbaXNTdWJtaXREaXNhYmxlZCwgc2V0U3VibWl0RGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IHNob3dMb2dpbk1vZGFsSGFuZGxlciA9IHVzZUNvbnRleHQoTG9naW5Nb2RhbEhhbmRsZXIpO1xyXG4gIGNvbnN0IHsgc2V0QXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChMb2dnZWRJbkRhdGFDb250ZXh0KTtcclxuICBjb25zdCBjcmVhdGVBbGVydCA9IHVzZUNvbnRleHQoU2hvd0FsZXJ0Q29udGV4dCk7XHJcblxyXG4gIGNvbnN0IG1vZGFsUmVmID0gdXNlUmVmKCk7XHJcblxyXG4gIGNvbnN0IHN1Ym1pdExvZ2luRGF0YSA9IHVzZUNhbGxiYWNrKChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldCk7XHJcbiAgICBzZXRTdWJtaXREaXNhYmxlZCh0cnVlKTtcclxuICAgIHN1Ym1pdCh7XHJcbiAgICAgIHRvOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvbG9naW5cIixcclxuICAgICAgZmllbGRWYWx1ZXM6IHVzZXJEZXRhaWxzLFxyXG4gICAgICBmaWVsZE9wdGlvbnM6IHsgbGVuZ3RoQm91bmRhcmllc0ZvckVhY2hGaWVsZDogbG9naW5Cb3VuZGFyaWVzIH0sXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigoeyBvayA9IGZhbHNlLCBlcnJvciA9IFwiQSBhcMSDcnV0IG8gZXJvYXJlIGludGVybsSDLCB2xIMgcnVnYW0gc8SDIG5lIHNjdXphyJtpLlwiIH0pID0+IHtcclxuICAgICAgICBpZiAoIW9rKSB7XHJcbiAgICAgICAgICBjcmVhdGVBbGVydCh7IG9mVHlwZTogXCJlcnJvclwiLCBzYXlpbmc6IGVycm9yIH0pO1xyXG4gICAgICAgICAgc2V0U3VibWl0RGlzYWJsZWQoZmFsc2UpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3JlYXRlQWxlcnQoeyBvZlR5cGU6IFwic3VjY2Vzc1wiIH0pO1xyXG4gICAgICAgIHNob3dMb2dpbk1vZGFsSGFuZGxlcigpO1xyXG4gICAgICAgIHNldEF1dGhlbnRpY2F0ZWQodHJ1ZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICBzZXRTdWJtaXREaXNhYmxlZChmYWxzZSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiBtb2RhbFJlZi5jdXJyZW50LnNjcm9sbEJ5KDAsIG1vZGFsUmVmLmN1cnJlbnQuc2Nyb2xsSGVpZ2h0KSwgMCk7XHJcblxyXG4gICAgICAgIGlmIChlcnJvcj8uZnJvbUZpZWxkc1ZhbGlkaXR5KSB7XHJcbiAgICAgICAgICBzZXRFcnJvck1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIkEgYXDEg3J1dCBvIGVyb2FyZSBpbnRlcm7EgywgdsSDIHJ1Z8SDbSBzxIMgbmUgc2N1emHIm2kuXCIpO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxPdmVybGF5RGFya2VuZXIgb25DbGljaz17c2hvd0xvZ2luTW9kYWxIYW5kbGVyfSAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsIG1vZGFsLS1sb2dpblwiIHJlZj17bW9kYWxSZWZ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPExvZ2luTW9kYWxXYXZlIC8+XHJcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlXCI+TG9naGVhesSDLXRlPC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19pbnB1dC1wYW5lbHNcIj5cclxuICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtzdWJtaXRMb2dpbkRhdGF9PlxyXG4gICAgICAgICAgICA8SW5wdXRBcmVhc1xyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsX19pbnB1dC1wYW5lbFwiXHJcbiAgICAgICAgICAgICAgaW5wdXRBcmVhRGF0YT17aW5wdXRBcmVhTG9naW5EYXRhfVxyXG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgbmFtZSwgdmFsdWUgfSB9KSA9PiBzZXRVc2VyRGV0YWlsKHsgdHlwZTogbmFtZSwgdmFsdWUgfSl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2J1dHRvbnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tLXByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ9e2lzU3VibWl0RGlzYWJsZWR9IG9uQ2xpY2s9e3N1Ym1pdExvZ2luRGF0YX0+XHJcbiAgICAgICAgICAgICAgICBMb2dhcmVcclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICB7IWNhbmNlbERpc2FibGVkICYmIChcclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLS10ZXJ0aWFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtzaG93TG9naW5Nb2RhbEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICBSZW51bsibxINcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAge2Vycm9yTWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlfSA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ0aW1lcy1jaXJjbGVcIiAvPntcIiBcIn1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2Zvcm1Nb2RhbH08L3N0eWxlPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLm1vZGFsIHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA4MSU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubW9kYWxfX2J1dHRvbnMtY29udGFpbmVyIHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Z2xvYmFsKC5tb2RhbC0tbG9naW4gLmlucHV0LWFyZWEpIHtcclxuICAgICAgICAgIG1hcmdpbjogMzBweCAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOmdsb2JhbCgubW9kYWwtLWxvZ2luIC5idXR0b24tLXByaW1hcnkpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExvZ2luTW9kYWxXYXZlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgNjQ2IDE4NFwiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgIGNsYXNzTmFtZT1cIm1vZGFsX193YXZlXCJcclxuICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMCAwTDY0NiA5LjUzNjc0ZS0wN1YxNTUuOTExQzY0NiAxNTUuOTExIDU4MC41OSAxNzkuMzkzIDQ2OC4yIDE4Mi42MkMzNTUuODEgMTg1Ljg0NyAyODUuMjY3IDE3MS40ODggMjA3LjEzIDE1NS45MTFDNDYuMDI3IDEyMy43OTMgMS45MDczNWUtMDYgMTU1LjkxMSAxLjkwNzM1ZS0wNiAxNTUuOTExTDAgMFpcIlxyXG4gICAgICAgIGZpbGw9XCJ2YXIoLS1hY2NlbnQtcHJpbWFyeSlcIlxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\Login.js */"));
}

function LoginModalWave() {
  return __jsx("svg", {
    viewBox: "0 0 646 184",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "modal__wave",
    preserveAspectRatio: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 5
    }
  }, __jsx("path", {
    d: "M0 0L646 9.53674e-07V155.911C646 155.911 580.59 179.393 468.2 182.62C355.81 185.847 285.267 171.488 207.13 155.911C46.027 123.793 1.90735e-06 155.911 1.90735e-06 155.911L0 0Z",
    fill: "var(--accent-primary)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./components/_globals/OverlayDarkener.js":
/*!************************************************!*\
  !*** ./components/_globals/OverlayDarkener.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OverlayDarkener; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\_globals\\OverlayDarkener.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function OverlayDarkener({
  onClick,
  className = ""
}) {
  return __jsx("div", {
    className: `overlay-darkener ${className}`,
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 2,
      columnNumber: 12
    }
  });
}

/***/ }),

/***/ "./components/_globals/RouteLoadingBar.js":
/*!************************************************!*\
  !*** ./components/_globals/RouteLoadingBar.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadingBar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\_globals\\RouteLoadingBar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function LoadingBar() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    id: "loading-bar",
    className: "jsx-1214275876",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1214275876",
    __self: this
  }, "#loading-bar.jsx-1214275876{position:fixed;top:0;z-index:200;background-color:var(--loading-bar);box-shadow:0px 0px 5px 0px var(--loading-bar);width:0%;opacity:0;display:none;height:3px;-webkit-transition:opacity 500ms linear;transition:opacity 500ms linear;}.loading-bar--is-loading.jsx-1214275876{display:block !important;-webkit-animation:loading-jsx-1214275876 10000ms ease forwards;animation:loading-jsx-1214275876 10000ms ease forwards;}.loading-bar--loaded.jsx-1214275876{display:block !important;-webkit-animation:finalizeLoading-jsx-1214275876 500ms ease forwards;animation:finalizeLoading-jsx-1214275876 500ms ease forwards;}@-webkit-keyframes finalizeLoading-jsx-1214275876{from{width:85%;opacity:1;}99.9%{width:100%;opacity:0;}100%{display:none;}}@keyframes finalizeLoading-jsx-1214275876{from{width:85%;opacity:1;}99.9%{width:100%;opacity:0;}100%{display:none;}}@-webkit-keyframes loading-jsx-1214275876{from{width:0%;opacity:1;}to{width:80%;opacity:1;}}@keyframes loading-jsx-1214275876{from{width:0%;opacity:1;}to{width:80%;opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXFJvdXRlTG9hZGluZ0Jhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJa0IsQUFHMEIsQUFhVSxBQUtBLEFBTWIsQUFJQyxBQUlFLEFBTUosQUFJQyxTQUhBLENBZEEsQUFrQkEsQ0FkQSxFQUlaLEVBaENNLElBdUNOLENBZEEsQUFrQkEsQ0ExQ1ksQUE0QlosSUFoQndDLEFBS00sUUFoQlYsb0NBQ1UsOENBQ3JDLFNBQ0MsVUFDRyxTQVFmLElBUGEsUUFZYixHQVhrQyx3RUFDbEMiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGVXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcUm91dGVMb2FkaW5nQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9hZGluZ0JhcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBpZD1cImxvYWRpbmctYmFyXCI+PC9kaXY+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAjbG9hZGluZy1iYXIge1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgei1pbmRleDogMjAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbG9hZGluZy1iYXIpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMHB4IHZhcigtLWxvYWRpbmctYmFyKTtcclxuICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgaGVpZ2h0OiAzcHg7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGxpbmVhcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2FkaW5nLWJhci0taXMtbG9hZGluZyB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jayAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBsb2FkaW5nIDEwMDAwbXMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5sb2FkaW5nLWJhci0tbG9hZGVkIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICBhbmltYXRpb246IGZpbmFsaXplTG9hZGluZyA1MDBtcyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGtleWZyYW1lcyBmaW5hbGl6ZUxvYWRpbmcge1xyXG4gICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA5OS45JSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgMTAwJSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIGxvYWRpbmcge1xyXG4gICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\RouteLoadingBar.js */"));
}

/***/ }),

/***/ "./components/_globals/reducers/index.js":
/*!***********************************************!*\
  !*** ./components/_globals/reducers/index.js ***!
  \***********************************************/
/*! exports provided: alertNotification */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alertNotification", function() { return alertNotification; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const alertNotification = {
  initialState: {
    isVisible: false,
    ofType: "success",
    saying: "Operațiunea a fost efectuată cu success!",
    onClose: null
  },

  reducer(state, action) {
    switch (action.ofType) {
      case "success":
        return _objectSpread({}, state, {
          isVisible: true,
          ofType: action.ofType,
          saying: "Operațiunea a fost efectuată cu success!",
          onClose: action.onClose || null
        });

      case "error":
        return _objectSpread({}, state, {
          isVisible: true,
          ofType: action.ofType,
          saying: action.saying,
          onClose: action.onClose || null
        });

      case "":
        return _objectSpread({}, state, {
          isVisible: false
        });

      default:
        throw new Error("Actiune invalida");
    }
  }

};

/***/ }),

/***/ "./components/_hooks/componentDidMount.js":
/*!************************************************!*\
  !*** ./components/_hooks/componentDidMount.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useComponentDidMount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useComponentDidMount(callback) {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(callback, []);
}

/***/ }),

/***/ "./components/utils/CheckmarkSolved.js":
/*!*********************************************!*\
  !*** ./components/utils/CheckmarkSolved.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckmarkSolved; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\utils\\CheckmarkSolved.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function CheckmarkSolved() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "check",
    className: "checkmark-solved",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3874989548",
    __self: this
  }, ".checkmark-solved{display:inline-block;background-color:var(--accent-primary);color:var(--text-button);padding:5px;border-radius:50%;width:22px !important;height:22px !important;margin-left:15px;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcdXRpbHNcXENoZWNrbWFya1NvbHZlZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNK0IsQUFHMEMscUJBQ2tCLHVDQUNkLHlCQUNiLFlBQ00sa0JBQ0ksc0JBQ0MsdUJBQ04saUJBQ0ssc0JBQzFCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcdXRpbHNcXENoZWNrbWFya1NvbHZlZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoZWNrbWFya1NvbHZlZCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiY2hlY2tcIiBjbGFzc05hbWU9XCJjaGVja21hcmstc29sdmVkXCIgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5jaGVja21hcmstc29sdmVkIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\utils\\\\CheckmarkSolved.js */"));
}

/***/ }),

/***/ "./components/utils/ErrorCircle.js":
/*!*****************************************!*\
  !*** ./components/utils/ErrorCircle.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ErrorCircle; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\utils\\ErrorCircle.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ErrorCircle({
  icon = "times-circle"
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: icon,
    className: "error-circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2106532325",
    __self: this
  }, ".error-circle{background-color:var(--accent-failure-primary);border-radius:50%;padding:5px;width:22px !important;height:22px !important;vertical-align:middle;margin:0 15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcdXRpbHNcXEVycm9yQ2lyY2xlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU0rQixBQUdvRSwrQ0FDN0Isa0JBQ04sWUFDVSxzQkFDQyx1QkFDRCxzQkFDUixjQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZVdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXHV0aWxzXFxFcnJvckNpcmNsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEVycm9yQ2lyY2xlKHsgaWNvbiA9IFwidGltZXMtY2lyY2xlXCIgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ljb259IGNsYXNzTmFtZT1cImVycm9yLWNpcmNsZVwiIC8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuZXJyb3ItY2lyY2xlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtZmFpbHVyZS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\utils\\\\ErrorCircle.js */"));
}

/***/ }),

/***/ "./components/utils/InputArea.js":
/*!***************************************!*\
  !*** ./components/utils/InputArea.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputArea; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\utils\\InputArea.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function InputArea({
  title,
  subtitle,
  children
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1288584074" + " " + "input-area",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "jsx-1288584074" + " " + "title-and-subtitle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 9
    }
  }, __jsx("h3", {
    className: "jsx-1288584074",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 11
    }
  }, title), subtitle && __jsx("p", {
    className: "jsx-1288584074",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 24
    }
  }, subtitle)), children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1288584074",
    __self: this
  }, "h3.jsx-1288584074{text-align:left;text-transform:uppercase;color:var(--text-primary);font-size:var(--font-smaller);}p.jsx-1288584074{color:var(--text-primary);max-width:400px;}.title-and-subtitle.jsx-1288584074{margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcdXRpbHNcXElucHV0QXJlYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFVa0IsQUFHMkIsQUFPVSxBQUtQLGdCQVhNLEdBWTNCLE9BTGtCLGVBTlUsQ0FPNUIseUJBTmdDLDhCQUNoQyIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZVdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXHV0aWxzXFxJbnB1dEFyZWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dEFyZWEoeyB0aXRsZSwgc3VidGl0bGUsIGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1hcmVhXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1hbmQtc3VidGl0bGVcIj5cclxuICAgICAgICAgIDxoMz57dGl0bGV9PC9oMz5cclxuICAgICAgICAgIHtzdWJ0aXRsZSAmJiA8cD57c3VidGl0bGV9PC9wPn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnRpdGxlLWFuZC1zdWJ0aXRsZSB7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\utils\\\\InputArea.js */"));
}

/***/ }),

/***/ "./components/utils/InputAreas.js":
/*!****************************************!*\
  !*** ./components/utils/InputAreas.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputAreas; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _InputArea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InputArea */ "./components/utils/InputArea.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\utils\\InputAreas.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }


function InputAreas({
  onChange,
  inputAreaData
}) {
  return inputAreaData.map(({
    title,
    subtitle = "",
    fieldName = "",
    isSelect = false,
    optionValues = [],
    inputProps = {}
  }, i) => __jsx(_InputArea__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: title,
    subtitle: subtitle,
    key: `input__${i}-fields`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, isSelect ? __jsx("select", {
    title: title,
    name: fieldName || title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 11
    }
  }, optionValues.map((optionValue, i) => __jsx("option", {
    key: `option_${i}-value_${optionValue}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 15
    }
  }, optionValue))) : __jsx("input", _extends({
    title: title,
    name: fieldName || title,
    onChange: onChange
  }, inputProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  }))));
}

/***/ }),

/***/ "./components/utils/LogoutButton.js":
/*!******************************************!*\
  !*** ./components/utils/LogoutButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogoutButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../pages/_app */ "./pages/_app.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\utils\\LogoutButton.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function LogoutButton({
  type,
  className,
  classNameForIcon
}) {
  const createAlert = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_1__["ShowAlertContext"]);
  const isAuthenticatedHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_1__["LoggedInDataContext"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  if (type === "anchor") return __jsx("a", {
    href: "#",
    onClick: () => logoutAndShowReults(createAlert, router, isAuthenticatedHandler),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Delogheaz\u0103-te");else if (type === "icon") return __jsx("div", {
    className: className,
    onClick: () => logoutAndShowReults(createAlert, router, isAuthenticatedHandler),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "sign-out-alt",
    className: classNameForIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }));else return __jsx("button", {
    className: "button--primary",
    onClick: () => logoutAndShowReults(createAlert, router, isAuthenticatedHandler),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, "Delogheaz\u0103-te");
}

function logoutAndShowReults(createAlert, router, isAuthenticatedHandler = null) {
  fetch("http://localhost:3000/api/logout", {
    method: "DELETE"
  }).then(r => r.json()).then(({
    ok,
    err = "A apărut o eroare internă, vă rugăm să ne scuzați."
  }) => {
    if (!ok) {
      createAlert({
        ofType: "error",
        saying: err
      });
      return;
    }

    createAlert({
      ofType: "success",
      onClose: () => router.pathname !== "/" && router.push("/")
    });
    if (isAuthenticatedHandler) isAuthenticatedHandler.setAuthenticated(false);
  });
}

/***/ }),

/***/ "./components/utils/SearchExercise.js":
/*!********************************************!*\
  !*** ./components/utils/SearchExercise.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SearchExercise; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/_app */ "./pages/_app.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\utils\\SearchExercise.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function SearchExercise({
  inputWidth,
  style = {},
  children = null
}) {
  const {
    0: needsSearch,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, needsSearch && __jsx(SearchInput, {
    inputWidth: inputWidth,
    style: style,
    setSearch: setSearch,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 23
    }
  }), __jsx("div", {
    onClick: () => setSearch(!needsSearch),
    className: "jsx-2379358916" + " " + "search-exercise__toggle-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, !needsSearch && children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2379358916",
    __self: this
  }, ".search--active{background-color:var(--background-secondary);-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);}@media screen and (max-width:825px){.header__button.jsx-2379358916{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcdXRpbHNcXFNlYXJjaEV4ZXJjaXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCa0IsQUFHd0QsQUFNOUIsYUFDZixnQ0FOcUIsMkVBQ3ZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcdXRpbHNcXFNlYXJjaEV4ZXJjaXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyB1c2VDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbmltcG9ydCB7IFNob3dBbGVydENvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvX2FwcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2VhcmNoRXhlcmNpc2UoeyBpbnB1dFdpZHRoLCBzdHlsZSA9IHt9LCBjaGlsZHJlbiA9IG51bGwgfSkge1xyXG4gIGNvbnN0IFtuZWVkc1NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAge25lZWRzU2VhcmNoICYmIDxTZWFyY2hJbnB1dCBpbnB1dFdpZHRoPXtpbnB1dFdpZHRofSBzdHlsZT17c3R5bGV9IHNldFNlYXJjaD17c2V0U2VhcmNofSAvPn1cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWV4ZXJjaXNlX190b2dnbGUtYnV0dG9uXCIgb25DbGljaz17KCkgPT4gc2V0U2VhcmNoKCFuZWVkc1NlYXJjaCl9PlxyXG4gICAgICAgIHshbmVlZHNTZWFyY2ggJiYgY2hpbGRyZW59XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIDpnbG9iYWwoLnNlYXJjaC0tYWN0aXZlKSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xyXG4gICAgICAgICAgLmhlYWRlcl9fYnV0dG9uIHtcclxuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNlYXJjaElucHV0KHsgaW5wdXRXaWR0aCwgc3R5bGUsIHNldFNlYXJjaCB9KSB7XHJcbiAgY29uc3QgW3NlYXJjaFRleHQsIHNldFNlYXJjaFRleHRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgY3JlYXRlQWxlcnQgPSB1c2VDb250ZXh0KFNob3dBbGVydENvbnRleHQpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8Zm9ybVxyXG4gICAgICAgIHN0eWxlPXtzdHlsZX1cclxuICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGlmICgvW15hLXpBLVowLTldL2cudGVzdChzZWFyY2hUZXh0KSkge1xyXG4gICAgICAgICAgICBjcmVhdGVBbGVydCh7XHJcbiAgICAgICAgICAgICAgb2ZUeXBlOiBcImVycm9yXCIsXHJcbiAgICAgICAgICAgICAgc2F5aW5nOiBcIk51bWVsZSBleGVyY2nIm2l1bHVpIHBvYXRlIHPEgyBjb27Im2luxIMgZG9hciBsaXRlcmUgyJlpIGNpZnJlLlwiLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJvdXRlci5wdXNoKGAvZXhlcmNpdGl1LyR7ZXNjYXBlKHNlYXJjaFRleHQpfWApO1xyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQ6IHsgdmFsdWUgfSB9KSA9PiBzZXRTZWFyY2hUZXh0KHZhbHVlKX1cclxuICAgICAgICAgIHZhbHVlPXtzZWFyY2hUZXh0fVxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIG1pbkxlbmd0aD17M31cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1pbnB1dF9fYW5pbWF0ZWRcIlxyXG4gICAgICAgICAgdGl0bGU9XCJOdW1lbGUgZXhlcmNpyJtpdWx1aSBwb2F0ZSBzxIMgY29uyJtpbsSDIGRvYXIgbGl0ZXJlIMiZaSBjaWZyZS5cIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJJbnRyb2R1IHRpdGx1bCB1bnVpIGV4ZXJjacibaXVcIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgIGljb249XCJ0aW1lc1wiXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2goKHByZXZpb3VzU2VhcmNoU3RhdGUpID0+ICFwcmV2aW91c1NlYXJjaFN0YXRlKX1cclxuICAgICAgICAgIGNvbG9yPVwidmFyKC0tdGV4dC1wcmltYXJ5KVwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2gtZXhlcmNpc2VfX2J1dHRvbi1jbG9zZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgQGtleWZyYW1lcyBzbGlkZVNlYXJjaElucHV0SW4ge1xyXG4gICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICB3aWR0aDogJHtpbnB1dFdpZHRofTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlYXJjaC1pbnB1dF9fYW5pbWF0ZWQge1xyXG4gICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZVNlYXJjaElucHV0SW4gNTAwbXMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuXHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlucHV0IHtcclxuICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgOmdsb2JhbCguc2VhcmNoLWV4ZXJjaXNlX19idXR0b24tY2xvc2UpIHtcclxuICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBhbmltYXRpb246IGZhZGVCdXR0b25JbiA1MDBtcyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBsaW5lYXI7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Z2xvYmFsKHN2Zy5zZWFyY2gtZXhlcmNpc2VfX2J1dHRvbi1jbG9zZTpob3Zlcikge1xyXG4gICAgICAgICAgb3BhY2l0eTogMC41O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQGtleWZyYW1lcyBmYWRlQnV0dG9uSW4ge1xyXG4gICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMjRweCwgOXB4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvPlxyXG4gICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\utils\\\\SearchExercise.js */"));
}

function SearchInput({
  inputWidth,
  style,
  setSearch
}) {
  const {
    0: searchText,
    1: setSearchText
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const createAlert = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_4__["ShowAlertContext"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("form", {
    style: style,
    onSubmit: e => {
      e.preventDefault();

      if (/[^a-zA-Z0-9]/g.test(searchText)) {
        createAlert({
          ofType: "error",
          saying: "Numele exercițiului poate să conțină doar litere și cifre."
        });
        return;
      }

      router.push(`/exercitiu/${escape(searchText)}`);
    },
    className: "jsx-235236453 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2241072111", [inputWidth]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, __jsx("input", {
    onChange: ({
      target: {
        value
      }
    }) => setSearchText(value),
    value: searchText,
    required: true,
    minLength: 3,
    title: "Numele exerci\u021Biului poate s\u0103 con\u021Bin\u0103 doar litere \u0219i cifre.",
    placeholder: "Introdu titlul unui exerci\u021Biu",
    className: "jsx-235236453 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2241072111", [inputWidth]]]) + " " + "search-input__animated",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 9
    }
  }), __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "times",
    onClick: () => setSearch(previousSearchState => !previousSearchState),
    color: "var(--text-primary)",
    className: "search-exercise__button-close",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2241072111",
    dynamic: [inputWidth],
    __self: this
  }, `@-webkit-keyframes slideSearchInputIn-__jsx-style-dynamic-selector{to{width:${inputWidth};}}@keyframes slideSearchInputIn-__jsx-style-dynamic-selector{to{width:${inputWidth};}}.search-input__animated.__jsx-style-dynamic-selector{-webkit-animation:slideSearchInputIn-__jsx-style-dynamic-selector 500ms ease forwards;animation:slideSearchInputIn-__jsx-style-dynamic-selector 500ms ease forwards;}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcdXRpbHNcXFNlYXJjaEV4ZXJjaXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFa0IsQUFJZ0QsQUFJWSxtQ0FIakQsaUlBSUYiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGVXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFx1dGlsc1xcU2VhcmNoRXhlcmNpc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgU2hvd0FsZXJ0Q29udGV4dCB9IGZyb20gXCIuLi8uLi9wYWdlcy9fYXBwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hFeGVyY2lzZSh7IGlucHV0V2lkdGgsIHN0eWxlID0ge30sIGNoaWxkcmVuID0gbnVsbCB9KSB7XHJcbiAgY29uc3QgW25lZWRzU2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bmVlZHNTZWFyY2ggJiYgPFNlYXJjaElucHV0IGlucHV0V2lkdGg9e2lucHV0V2lkdGh9IHN0eWxlPXtzdHlsZX0gc2V0U2VhcmNoPXtzZXRTZWFyY2h9IC8+fVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZXhlcmNpc2VfX3RvZ2dsZS1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2goIW5lZWRzU2VhcmNoKX0+XHJcbiAgICAgICAgeyFuZWVkc1NlYXJjaCAmJiBjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgOmdsb2JhbCguc2VhcmNoLS1hY3RpdmUpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyNXB4KSB7XHJcbiAgICAgICAgICAuaGVhZGVyX19idXR0b24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU2VhcmNoSW5wdXQoeyBpbnB1dFdpZHRoLCBzdHlsZSwgc2V0U2VhcmNoIH0pIHtcclxuICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBjcmVhdGVBbGVydCA9IHVzZUNvbnRleHQoU2hvd0FsZXJ0Q29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgaWYgKC9bXmEtekEtWjAtOV0vZy50ZXN0KHNlYXJjaFRleHQpKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUFsZXJ0KHtcclxuICAgICAgICAgICAgICBvZlR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICBzYXlpbmc6IFwiTnVtZWxlIGV4ZXJjacibaXVsdWkgcG9hdGUgc8SDIGNvbsibaW7EgyBkb2FyIGxpdGVyZSDImWkgY2lmcmUuXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcm91dGVyLnB1c2goYC9leGVyY2l0aXUvJHtlc2NhcGUoc2VhcmNoVGV4dCl9YCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldFNlYXJjaFRleHQodmFsdWUpfVxyXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgbWluTGVuZ3RoPXszfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0X19hbmltYXRlZFwiXHJcbiAgICAgICAgICB0aXRsZT1cIk51bWVsZSBleGVyY2nIm2l1bHVpIHBvYXRlIHPEgyBjb27Im2luxIMgZG9hciBsaXRlcmUgyJlpIGNpZnJlLlwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkludHJvZHUgdGl0bHVsIHVudWkgZXhlcmNpyJtpdVwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgaWNvbj1cInRpbWVzXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlYXJjaCgocHJldmlvdXNTZWFyY2hTdGF0ZSkgPT4gIXByZXZpb3VzU2VhcmNoU3RhdGUpfVxyXG4gICAgICAgICAgY29sb3I9XCJ2YXIoLS10ZXh0LXByaW1hcnkpXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1leGVyY2lzZV9fYnV0dG9uLWNsb3NlXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBAa2V5ZnJhbWVzIHNsaWRlU2VhcmNoSW5wdXRJbiB7XHJcbiAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAke2lucHV0V2lkdGh9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoLWlucHV0X19hbmltYXRlZCB7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNsaWRlU2VhcmNoSW5wdXRJbiA1MDBtcyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Z2xvYmFsKC5zZWFyY2gtZXhlcmNpc2VfX2J1dHRvbi1jbG9zZSkge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUJ1dHRvbkluIDUwMG1zIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGxpbmVhcjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpnbG9iYWwoc3ZnLnNlYXJjaC1leGVyY2lzZV9fYnV0dG9uLWNsb3NlOmhvdmVyKSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIGZhZGVCdXR0b25JbiB7XHJcbiAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yNHB4LCA5cHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXX0= */
/*@ sourceURL=C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\utils\\SearchExercise.js */`), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "235236453",
    __self: this
  }, "form.jsx-235236453{position:relative;}input.jsx-235236453{height:35px;width:0;}.search-exercise__button-close{opacity:0;position:absolute;-webkit-animation:fadeButtonIn-jsx-235236453 500ms ease forwards;animation:fadeButtonIn-jsx-235236453 500ms ease forwards;-webkit-transition:opacity 300ms linear;transition:opacity 300ms linear;cursor:pointer;}svg.search-exercise__button-close:hover{opacity:0.5;}@-webkit-keyframes fadeButtonIn-jsx-235236453{to{opacity:1;-webkit-transform:translate(-24px,9px);-ms-transform:translate(-24px,9px);transform:translate(-24px,9px);}}@keyframes fadeButtonIn-jsx-235236453{to{opacity:1;-webkit-transform:translate(-24px,9px);-ms-transform:translate(-24px,9px);transform:translate(-24px,9px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcdXRpbHNcXFNlYXJjaEV4ZXJjaXNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGa0IsQUFHNkIsQUFJTixBQUtGLEFBUUUsQUFLQSxVQVpNLEFBYWdCLEVBbEIxQixBQWFWLE1BakJBLEVBS0EsUUFLNkMsdUZBYTNDLG1DQVpnQyx3RUFDakIsZUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGVXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFx1dGlsc1xcU2VhcmNoRXhlcmNpc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IHVzZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgU2hvd0FsZXJ0Q29udGV4dCB9IGZyb20gXCIuLi8uLi9wYWdlcy9fYXBwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWFyY2hFeGVyY2lzZSh7IGlucHV0V2lkdGgsIHN0eWxlID0ge30sIGNoaWxkcmVuID0gbnVsbCB9KSB7XHJcbiAgY29uc3QgW25lZWRzU2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7bmVlZHNTZWFyY2ggJiYgPFNlYXJjaElucHV0IGlucHV0V2lkdGg9e2lucHV0V2lkdGh9IHN0eWxlPXtzdHlsZX0gc2V0U2VhcmNoPXtzZXRTZWFyY2h9IC8+fVxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtZXhlcmNpc2VfX3RvZ2dsZS1idXR0b25cIiBvbkNsaWNrPXsoKSA9PiBzZXRTZWFyY2goIW5lZWRzU2VhcmNoKX0+XHJcbiAgICAgICAgeyFuZWVkc1NlYXJjaCAmJiBjaGlsZHJlbn1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgOmdsb2JhbCguc2VhcmNoLS1hY3RpdmUpIHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyNXB4KSB7XHJcbiAgICAgICAgICAuaGVhZGVyX19idXR0b24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU2VhcmNoSW5wdXQoeyBpbnB1dFdpZHRoLCBzdHlsZSwgc2V0U2VhcmNoIH0pIHtcclxuICBjb25zdCBbc2VhcmNoVGV4dCwgc2V0U2VhcmNoVGV4dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBjcmVhdGVBbGVydCA9IHVzZUNvbnRleHQoU2hvd0FsZXJ0Q29udGV4dCk7XHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxmb3JtXHJcbiAgICAgICAgc3R5bGU9e3N0eWxlfVxyXG4gICAgICAgIG9uU3VibWl0PXsoZSkgPT4ge1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgaWYgKC9bXmEtekEtWjAtOV0vZy50ZXN0KHNlYXJjaFRleHQpKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUFsZXJ0KHtcclxuICAgICAgICAgICAgICBvZlR5cGU6IFwiZXJyb3JcIixcclxuICAgICAgICAgICAgICBzYXlpbmc6IFwiTnVtZWxlIGV4ZXJjacibaXVsdWkgcG9hdGUgc8SDIGNvbsibaW7EgyBkb2FyIGxpdGVyZSDImWkgY2lmcmUuXCIsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcm91dGVyLnB1c2goYC9leGVyY2l0aXUvJHtlc2NhcGUoc2VhcmNoVGV4dCl9YCk7XHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldFNlYXJjaFRleHQodmFsdWUpfVxyXG4gICAgICAgICAgdmFsdWU9e3NlYXJjaFRleHR9XHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgbWluTGVuZ3RoPXszfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoLWlucHV0X19hbmltYXRlZFwiXHJcbiAgICAgICAgICB0aXRsZT1cIk51bWVsZSBleGVyY2nIm2l1bHVpIHBvYXRlIHPEgyBjb27Im2luxIMgZG9hciBsaXRlcmUgyJlpIGNpZnJlLlwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkludHJvZHUgdGl0bHVsIHVudWkgZXhlcmNpyJtpdVwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgaWNvbj1cInRpbWVzXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFNlYXJjaCgocHJldmlvdXNTZWFyY2hTdGF0ZSkgPT4gIXByZXZpb3VzU2VhcmNoU3RhdGUpfVxyXG4gICAgICAgICAgY29sb3I9XCJ2YXIoLS10ZXh0LXByaW1hcnkpXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaC1leGVyY2lzZV9fYnV0dG9uLWNsb3NlXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICBAa2V5ZnJhbWVzIHNsaWRlU2VhcmNoSW5wdXRJbiB7XHJcbiAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAke2lucHV0V2lkdGh9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoLWlucHV0X19hbmltYXRlZCB7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNsaWRlU2VhcmNoSW5wdXRJbiA1MDBtcyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG5cclxuICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5wdXQge1xyXG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICA6Z2xvYmFsKC5zZWFyY2gtZXhlcmNpc2VfX2J1dHRvbi1jbG9zZSkge1xyXG4gICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUJ1dHRvbkluIDUwMG1zIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGxpbmVhcjtcclxuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDpnbG9iYWwoc3ZnLnNlYXJjaC1leGVyY2lzZV9fYnV0dG9uLWNsb3NlOmhvdmVyKSB7XHJcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBAa2V5ZnJhbWVzIGZhZGVCdXR0b25JbiB7XHJcbiAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0yNHB4LCA5cHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgYH08L3N0eWxlPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\utils\\\\SearchExercise.js */"));
}

/***/ }),

/***/ "./components/utils/genericReducer.js":
/*!********************************************!*\
  !*** ./components/utils/genericReducer.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return genericReducer; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function genericReducer(state, action) {
  return _objectSpread({}, state, {
    [action.type]: action.value
  });
}

/***/ }),

/***/ "./components/utils/inputAreaLoginData.js":
/*!************************************************!*\
  !*** ./components/utils/inputAreaLoginData.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/lengthBoundariesForFields */ "./utils/lengthBoundariesForFields.js");

/* harmony default export */ __webpack_exports__["default"] = ([{
  title: "E-mail / Nume utilizator",
  inputProps: {
    minLength: _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_0__["loginBoundaries"].username[0],
    maxLength: _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_0__["loginBoundaries"].username[1],
    required: true
  },
  fieldName: "username"
}, {
  title: "Parola",
  inputProps: {
    type: "password",
    minLength: _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_0__["loginBoundaries"].password[0],
    maxLength: _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_0__["loginBoundaries"].password[1],
    required: true
  },
  fieldName: "password"
}]);

/***/ }),

/***/ "./configs/icons.js":
/*!**************************!*\
  !*** ./configs/icons.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "@fortawesome/free-solid-svg-icons");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "@fortawesome/fontawesome-svg-core");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__);


const iconNames = ["faSearch", "faUser", "faBars", "faAngleDown", "faCheck", "faBolt", "faLightbulb", "faSignInAlt", "faSignOutAlt", "faEllipsisH", "faCoffee", "faTools", "faMountain", "faEnvelope", "faPhone", "faArrowRight", "faArrowLeft", "faExternalLinkAlt", "faFilter", "faClock", "faMemory", "faCodeBranch", "faUpload", "faTimesCircle", "faTimes", "faPlus", "faPen", "faTrash", "faCalendar"];
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"].add(iconNames.map(iconName => _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__[iconName]));
/* harmony default export */ __webpack_exports__["default"] = (_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"]);

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new Map();
var IntersectionObserver = false ? undefined : null;
var prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    var {
      pathname
    } = window.location;
    var {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    var resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      var isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) { var rewriteUrlForNextExport; }

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

exports.addBasePath = addBasePath;

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

exports.delBasePath = delBasePath;

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    // Static Data Cache
    this.sdc = {};

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && url_1.parse(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute(url_1.parse(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = url_1.parse(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign(Object.assign({}, data), {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeRegex = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return utils_1.loadGetInitialProps(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = mitt_1.default();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return Object.assign({
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  }, namedParameterizedRoute ? {
    namedRegex: `^${namedParameterizedRoute}(?:/)?$`
  } : {});
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: ThemeContext, ShowAlertContext, LoginModalHandler, ShowLoginContext, LoggedInDataContext, DataPanelContext, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAlertContext", function() { return ShowAlertContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModalHandler", function() { return LoginModalHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowLoginContext", function() { return ShowLoginContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInDataContext", function() { return LoggedInDataContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataPanelContext", function() { return DataPanelContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configs_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/icons */ "./configs/icons.js");
/* harmony import */ var _styles_mainStyling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/mainStyling */ "./styles/mainStyling.js");
/* harmony import */ var _components_globals_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/_globals/Header */ "./components/_globals/Header.js");
/* harmony import */ var _components_globals_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/_globals/Contact */ "./components/_globals/Contact.js");
/* harmony import */ var _components_globals_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/_globals/Footer */ "./components/_globals/Footer.js");
/* harmony import */ var _components_globals_AlertNotification__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/_globals/AlertNotification */ "./components/_globals/AlertNotification.js");
/* harmony import */ var _components_globals_RouteLoadingBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/_globals/RouteLoadingBar */ "./components/_globals/RouteLoadingBar.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_globals_Login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/_globals/Login */ "./components/_globals/Login.js");
/* harmony import */ var _components_globals_DataPanel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/_globals/DataPanel */ "./components/_globals/DataPanel.js");
/* harmony import */ var _components_globals_reducers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/_globals/reducers */ "./components/_globals/reducers/index.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\pages\\_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }














const ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(true),
      ShowAlertContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null),
      LoginModalHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null),
      ShowLoginContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null),
      LoggedInDataContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null),
      DataPanelContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on("routeChangeStart", loadingStart);
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on("routeChangeComplete", loadingFinish);
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on("routeChangeError", loadingFinish);
function App({
  Component,
  pageProps
}) {
  const {
    0: alert,
    1: createAlert
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(_components_globals_reducers__WEBPACK_IMPORTED_MODULE_13__["alertNotification"].reducer, _components_globals_reducers__WEBPACK_IMPORTED_MODULE_13__["alertNotification"].initialState);
  const {
    0: panelData,
    1: setPanelData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])((_, action) => action.value, "");
  const {
    0: isAuthenticated,
    1: setAuthenticated
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const {
    0: loginModalVisible,
    1: setLoginModalVisible
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const showLoginModal = () => setLoginModalVisible(!loginModalVisible);

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    // seteaza daca este autentificat bazat pe existenta cookie-ului pentru cand se viziteaza
    // site-ul, astfel, memorand faptul ca utilizatorul este logat
    // nu conteaza daca este sters cookie-ul de catre client pentru ca putem
    // verifica pe server daca este autentificat cu refreshToken-ul
    const cookies = document.cookie && Object(cookie__WEBPACK_IMPORTED_MODULE_10__["parse"])(document.cookie);
    if (!isAuthenticated && cookies && cookies["_accessToken"]) setAuthenticated(true);
  }, [isAuthenticated]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, Object(react__WEBPACK_IMPORTED_MODULE_1__["useMemo"])(() => alert.isVisible && __jsx(_components_globals_AlertNotification__WEBPACK_IMPORTED_MODULE_8__["default"], {
    type: alert.ofType,
    closeAlert: () => createAlert({
      ofType: ""
    }),
    onClose: alert.onClose,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, alert.saying), [alert.isVisible]), __jsx(_components_globals_RouteLoadingBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }
  }), __jsx(LoggedInDataContext.Provider, {
    value: {
      isAuthenticated,
      setAuthenticated
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 7
    }
  }, __jsx(ShowLoginContext.Provider, {
    value: showLoginModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx(ShowAlertContext.Provider, {
    value: createAlert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx(_components_globals_Header__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  })))), __jsx(LoggedInDataContext.Provider, {
    value: {
      isAuthenticated,
      setAuthenticated
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }
  }, __jsx(ShowAlertContext.Provider, {
    value: createAlert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, __jsx(LoginModalHandler.Provider, {
    value: showLoginModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 11
    }
  }, loginModalVisible && __jsx(_components_globals_Login__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 35
    }
  })))), __jsx(DataPanelContext.Provider, {
    value: setPanelData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }, __jsx(LoggedInDataContext.Provider, {
    value: {
      isAuthenticated,
      setAuthenticated
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, __jsx(ShowAlertContext.Provider, {
    value: createAlert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, __jsx(ShowLoginContext.Provider, {
    value: showLoginModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx(Component, _extends({}, pageProps, {
    className: `jsx-${_styles_mainStyling__WEBPACK_IMPORTED_MODULE_4__["default"].__hash}` + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  })))))), __jsx(_components_globals_DataPanel__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onClick: () => setPanelData(""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }
  }, panelData), __jsx(_components_globals_Contact__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 7
    }
  }), __jsx(_components_globals_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_mainStyling__WEBPACK_IMPORTED_MODULE_4__["default"].__hash,
    __self: this
  }, _styles_mainStyling__WEBPACK_IMPORTED_MODULE_4__["default"]));
}

function loadingStart() {
  const loadingBar = document.getElementById("loading-bar");
  loadingBar.classList.remove("loading-bar--loaded");
  loadingBar.classList.add("loading-bar--is-loading");
}

function loadingFinish() {
  const loadingBar = document.getElementById("loading-bar");
  loadingBar.classList.add("loading-bar--loaded");
  loadingBar.classList.remove("loading-bar--is-loading");
}

/***/ }),

/***/ "./styles/formModal.js":
/*!*****************************!*\
  !*** ./styles/formModal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _defaultExport = new String("@-webkit-keyframes modalAnimation{from{opacity:0;-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);}to{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}@keyframes modalAnimation{from{opacity:0;-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);}to{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}.modal{max-height:80%;background-color:var(--background-primary);box-shadow:var(--box-shadow);overflow-y:auto;border-radius:10px;position:fixed;top:100px;left:0;right:0;z-index:98;margin:auto;-webkit-animation:modalAnimation 300ms ease;animation:modalAnimation 300ms ease;}.modal__title-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:25%;}.modal__title{position:absolute;z-index:99;margin-top:-10px;text-transform:uppercase;color:var(--text-button);}.modal__buttons-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-flow:wrap row-reverse;-ms-flex-flow:wrap row-reverse;flex-flow:wrap row-reverse;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;margin-right:10px;}.modal__wave{width:100%;height:100%;}.modal .input-area input,.modal .input-area select{width:100%;height:40px;}.modal__input-panels{width:80%;margin:50px auto;}.error-message{margin-top:20px;}@media screen and (max-width:825px){.modal{width:80% !important;}.modal__input-panels{width:90%;}}@media screen and (max-width:425px){.modal__title{font-size:var(--font-smaller);}.modal__wave{height:125px;}.modal__buttons-container{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-right:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcc3R5bGVzXFxmb3JtTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRXlCLEFBSXVCLEFBSUEsQUFNQyxBQWVGLEFBUUssQUFRTCxBQU9GLEFBTUEsQUFLRCxBQUtNLEFBS1MsQUFJWCxBQU1vQixBQUlqQixBQUlVLFVBdEZLLEFBSUosQUF1RFgsQUFjakIsQ0F6QlksQUFNQSxFQTZCWixFQXpFMkMsQ0FzRC9DLEVBL0JlLEdBb0NYLEVBcEJKLEFBTUEsSUFLQSxFQTFCcUIsQ0E2Q2pCLGdCQTVDeUIsWUF4QkksYUF5QkosR0FYRixBQWdCSSxhQTdCWCxPQVBoQixFQWdDSixHQWtEdUIsSUExRUEsR0FabkIsUUF1RkEsUUExRWUsZUFDTCxVQUNILE9BQ0MsUUFDRyxLQXdCZ0IsTUF2QmYsQUFPTyxZQU5pQixnRkFDeEMsQ0FNZSxNQWdCTyxLQWZQLFdBQ2YsRUFlQSIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZVdlYlxcaW5mb3BsdXNcXHN0eWxlc1xcZm9ybU1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzcy5nbG9iYWxgXHJcbiAgICBAa2V5ZnJhbWVzIG1vZGFsQW5pbWF0aW9uIHtcclxuICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbCB7XHJcbiAgICAgICAgbWF4LWhlaWdodDogODAlO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDEwMHB4O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogOTg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGFuaW1hdGlvbjogbW9kYWxBbmltYXRpb24gMzAwbXMgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWxfX3RpdGxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbF9fdGl0bGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsX19idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWZsb3c6IHdyYXAgcm93LXJldmVyc2U7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWxfX3dhdmUge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWwgLmlucHV0LWFyZWEgaW5wdXQsXHJcbiAgICAubW9kYWwgLmlucHV0LWFyZWEgc2VsZWN0IHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsX19pbnB1dC1wYW5lbHMge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luOiA1MHB4IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLmVycm9yLW1lc3NhZ2Uge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODI1cHgpIHtcclxuICAgICAgICAubW9kYWwge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubW9kYWxfX2lucHV0LXBhbmVscyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgLm1vZGFsX190aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbGVyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tb2RhbF9fd2F2ZSB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTI1cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubW9kYWxfX2J1dHRvbnMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\styles\\\\formModal.js */");

_defaultExport.__hash = "800187523";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./styles/mainStyling.js":
/*!*******************************!*\
  !*** ./styles/mainStyling.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _defaultExport = new String("*{box-sizing:border-box;}html,body{margin:0;padding:0;font-family:\"Red Hat Display\",Arial,sans-serif;background-color:var(--background-primary);}h1,h2,h3,p{margin:0;padding:0;}h1,h2,h3{font-weight:800;}h1{font-size:var(--font-large);}h2{font-size:var(--font-medium);}h3{font-size:var(--font-small);}a{color:inherit;font-weight:800;}ul{margin:0;}hr{border-color:var(--background-tertiary);border-style:solid;}pre,code{background-color:var(--background-tertiary);border-radius:10px;color:var(--text-primary);}pre{padding:15px;}code{padding:5px;}.overlay-darkener{width:100%;height:100%;position:fixed;top:0;left:0;background-color:rgba(0,0,0,0.8);z-index:50;-webkit-animation:fadeIn 300ms ease forwards;animation:fadeIn 300ms ease forwards;}@-webkit-keyframes fadeIn{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}button{min-width:175px;height:45px;display:inline-block;box-shadow:var(--box-shadow);text-transform:uppercase;text-align:center;line-height:35px;border:none;font-family:\"Red Hat Display\";border-radius:50px;cursor:pointer;-webkit-transition-property:box-shadow,opacity,-webkit-transform;-webkit-transition-property:box-shadow,opacity,transform;transition-property:box-shadow,opacity,transform;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-timing-function:ease;transition-timing-function:ease;}button:disabled{opacity:0.2;}button:focus{outline:none;}button:hover{box-shadow:var(--box-shadow-active);}button:active{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}button svg{margin-left:10px;}input,textarea,select{width:100%;height:40px;border-radius:50px;border:1px solid var(--background-quaternary);outline:0;padding-left:10px;color:var(--text-primary);background-color:transparent;position:relative;}textarea{min-height:100px;min-height:100px;max-width:100%;resize:vertical;border-radius:10px;padding:10px;background-color:var(--background-secondary);}input:focus,select:focus,textarea:focus{border-color:var(--accent-secondary);}input:valid,input:focus:valid,select:valid,select:focus:valid,textarea:valid,textarea:focus:valid{border-color:var(--accent-primary);}option{background-color:var(--background-primary);}.input-area{margin-bottom:20px;}.error-message{color:var(--accent-quaternary);text-align:right;opacity:0;padding-left:20px;-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px);-webkit-animation:fadeFromRight 300ms ease forwards;animation:fadeFromRight 300ms ease forwards;}@-webkit-keyframes fadeFromRight{from{opacity:0;-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px);}to{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}}@keyframes fadeFromRight{from{opacity:0;-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px);}to{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}}.button--primary{background-color:var(--accent-primary);color:var(--text-button);height:40px;}.button--secondary{background-color:var(--background-quaternary);color:var(--accent-primary);height:40px;}.button--tertiary{background-color:transparent;box-shadow:none;font-weight:bold;-webkit-transition:300ms linear;transition:300ms linear;-webkit-transition-property:color,-webkit-transform;-webkit-transition-property:color,transform;transition-property:color,transform;color:var(--text-primary);min-width:130px;}.button--tertiary:hover{box-shadow:none;color:var(--accent-quaternary);}.underlined{-webkit-text-decoration:underline;text-decoration:underline;}.button--outline{background-color:transparent;color:var(--text-primary);border:1px solid var(--background-quaternary);border-radius:50px;box-shadow:none;width:150px;line-height:32px;height:35px;text-transform:initial;-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;}.button--outline:hover{box-shadow:none;background-color:var(--background-tertiary);}:root{--accent-primary:#56f55c;--accent-secondary:#3db8ff;--accent-tertiary:#ffcc00;--accent-quaternary:#e43dff;--accent-success:#a7f7ab;--accent-failure-primary:#ff5e5e;--accent-failure-secondary:#ffa9a9;--difficulty-1:var(--accent-primary);--difficulty-2:var(--accent-tertiary);--difficulty-3:var(--accent-secondary);--difficulty-4:var(--accent-quaternary);--text-button:#2a2a2a;--font-larger:5rem;--font-large:3rem;--font-medium:2rem;--font-small:1.3rem;--font-smaller:1rem;--contact:#2a2a2a;--footer:#1e1e1e;--box-shadow:0px 4px 15px rgba(0,0,0,0.09);--box-shadow-active:0 4px 15px 5px rgba(0,0,0,0.2);}html.theme-light{--background-primary:#fff;--background-secondary:#f5f5f5;--background-tertiary:#dadada;--background-quaternary:#2a2a2a;--text-primary:#2a2a2a;--text-secondary:#f1f1f1;--text-tertiary:#686868;--loading-bar:var(--accent-secondary);}html.theme-dark{--background-primary:#1e1e1e;--background-secondary:#2a2a2a;--background-tertiary:#434545;--background-quaternary:#404040;--text-primary:#f1f1f1;--text-secondary:#e6e6e6;--text-tertiary:#777777;--loading-bar:var(--accent-tertiary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcc3R5bGVzXFxtYWluU3R5bGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFeUIsQUFHMkIsQUFLYixBQVVBLEFBT08sQUFJWSxBQUdDLEFBR0QsQUFJZCxBQUtMLEFBSStCLEFBTUksQUFNL0IsQUFJRCxBQUlELEFBWUMsQUFHQSxBQUtJLEFBaUJKLEFBSUMsQUFHdUIsQUFJZCxBQUlMLEFBTU4sQUFZTSxBQVlvQixBQVNGLEFBSVEsQUFJeEIsQUFJWSxBQVVuQixBQUlBLEFBTTJCLEFBTU8sQUFNakIsQUFVYixBQUtVLEFBSUcsQUFhYixBQU1TLEFBNkJDLEFBYUcsU0FsUm5CLEFBVUEsQUEwQlosQ0FvQ0UsQUFHQSxBQWtHNkIsQUFJSCxDQXJIZCxBQTBEQSxDQTlEZCxBQXlDQSxDQTdDQSxBQWlEQSxDQXRFa0IsRUFkbEIsQUErRGMsQUE2SG1CLEFBc0JhLENBbkg5QyxBQWtCbUIsRUFqSWdDLEFBVW5ELEFBb0pBLEdBcEtBLENBa0VpQixBQTBESSxFQWtIUSxDQTZCSSxFQWpQakMsQUFNQSxBQXNEdUIsQ0F6RHZCLEFBMktrQixBQW1CVSxBQTZESyxDQW5QakMsQ0FtSW1CLEdBaENGLENBb0JqQixDQS9DQSxDQXNDQSxDQWhGUSxDQXlIbUIsQ0EvSU4sRUFnRjJCLENBbUNoRCxDQTdHcUIsQUFpQlosQ0FxSVUsQ0FQVyxDQWlCOUIsQ0ExQ1ksQ0FsRm1CLEFBa0RiLEVBcEVvQixDQTBLVixHQW5Cb0IsRUFnRGhCLENBbEdaLENBNUhwQixDQXlLQSxBQWtCQSxBQWdEZ0MsRUEvRU4sQ0F0SkUsQ0F5SWQsQ0FuRE8sQ0FuSXdCLFFBNEwvQixFQXhCZSxBQW1CN0IsRUF0RzJCLEFBeUIzQixBQStIOEIsTUExS2pCLEFBcUVFLEVBeURmLENBeUVrQyxDQS9JdEIsQ0F6RVosQ0FxT2tDLElBbkdoQyxDQWhIcUMsRUFxRVEsQ0FiM0IsR0E4RkMsRUFwSUQsQUEwRmxCLEdBK0R5QixHQTFPM0IsT0F3SDRCLEVBMkVXLENBb0VkLENBakRQLENBcElDLENBa01NLFNBekNVLEtBcEJyQixFQXBJQSxJQXNDaUIsQUFZL0IsQUFtSTJCLEdBYUEsR0E3RFIsRUFwSWEsY0F3SkssQ0FuQnZCLEVBZ0RZLEVBckdvQixDQWtIcEIsQ0E1Sk4sTUExRHBCLEFBMEp5QixHQXJJSixTQXNDckIsRUFnSndDLEdBWUQsS0FqTXRCLEFBd0pzQixDQW5CRSxjQXBJWSxlQXFMckQsRUFZQSxLQXpDd0MsY0EzQ1osZUEvQjVCLFNBMkV5QyxFQTNDdkIsVUF1QmxCLE1BdEJBLHFCQTJDMEMsd0NBRWxCLHNCQUVILFVBN0pPLFNBOEpSLGtCQUNDLG1CQUNDLGNBL0pZLE1BZ0taLG9CQUVGLGtCQUNELGlCQUM2QixXQW5LaEQsZ0NBb0t3RCxtREFDeEQiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGVXZWJcXGluZm9wbHVzXFxzdHlsZXNcXG1haW5TdHlsaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzcy5nbG9iYWxgXHJcbiAgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgaHRtbCxcclxuICBib2R5IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBmb250LWZhbWlseTogXCJSZWQgSGF0IERpc3BsYXlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMsXHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuXHJcbiAgaDEsXHJcbiAgaDIsXHJcbiAgaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1sYXJnZSk7XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1tZWRpdW0pO1xyXG4gIH1cclxuICBoMyB7XHJcbiAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xyXG4gIH1cclxuXHJcbiAgYSB7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5cclxuICBociB7XHJcbiAgICBib3JkZXItY29sb3I6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnkpO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICB9XHJcblxyXG4gIHByZSxcclxuICBjb2RlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtdGVydGlhcnkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gIH1cclxuXHJcbiAgcHJlIHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG5cclxuICBjb2RlIHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG4gIC5vdmVybGF5LWRhcmtlbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgIHotaW5kZXg6IDUwO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlSW4gMzAwbXMgZWFzZSBmb3J3YXJkcztcclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZmFkZUluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnV0dG9uIHtcclxuICAgIG1pbi13aWR0aDogMTc1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBcIlJlZCBIYXQgRGlzcGxheVwiO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJveC1zaGFkb3csIG9wYWNpdHksIHRyYW5zZm9ybTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDMwMG1zO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgfVxyXG5cclxuICBidXR0b246ZGlzYWJsZWQge1xyXG4gICAgb3BhY2l0eTogMC4yO1xyXG4gIH1cclxuXHJcbiAgYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgfVxyXG4gIGJ1dHRvbjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LWFjdGl2ZSk7XHJcbiAgfVxyXG5cclxuICBidXR0b246YWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XHJcbiAgfVxyXG5cclxuICBidXR0b24gc3ZnIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXQsXHJcbiAgdGV4dGFyZWEsXHJcbiAgc2VsZWN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSk7XHJcbiAgICBvdXRsaW5lOiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIHRleHRhcmVhIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICByZXNpemU6IHZlcnRpY2FsO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgfVxyXG5cclxuICBpbnB1dDpmb2N1cyxcclxuICBzZWxlY3Q6Zm9jdXMsXHJcbiAgdGV4dGFyZWE6Zm9jdXMge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcclxuICB9XHJcblxyXG4gIGlucHV0OnZhbGlkLFxyXG4gIGlucHV0OmZvY3VzOnZhbGlkLFxyXG4gIHNlbGVjdDp2YWxpZCxcclxuICBzZWxlY3Q6Zm9jdXM6dmFsaWQsXHJcbiAgdGV4dGFyZWE6dmFsaWQsXHJcbiAgdGV4dGFyZWE6Zm9jdXM6dmFsaWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgfVxyXG5cclxuICBvcHRpb24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1hcmVhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgfVxyXG5cclxuICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LXF1YXRlcm5hcnkpO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xyXG4gICAgYW5pbWF0aW9uOiBmYWRlRnJvbVJpZ2h0IDMwMG1zIGVhc2UgZm9yd2FyZHM7XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGZhZGVGcm9tUmlnaHQge1xyXG4gICAgZnJvbSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi0tcHJpbWFyeSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1idXR0b24pO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi0tc2Vjb25kYXJ5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSk7XHJcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi0tdGVydGlhcnkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0cmFuc2l0aW9uOiAzMDBtcyBsaW5lYXI7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBjb2xvciwgdHJhbnNmb3JtO1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICBtaW4td2lkdGg6IDEzMHB4O1xyXG4gIH1cclxuXHJcbiAgLmJ1dHRvbi0tdGVydGlhcnk6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcXVhdGVybmFyeSk7XHJcbiAgfVxyXG5cclxuICAudW5kZXJsaW5lZCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcblxyXG4gIC5idXR0b24tLW91dGxpbmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgfVxyXG5cclxuICAuYnV0dG9uLS1vdXRsaW5lOmhvdmVyIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxuICB9XHJcblxyXG4gIC8qIFRIRU1FUyAqL1xyXG4gIDpyb290IHtcclxuICAgIC0tYWNjZW50LXByaW1hcnk6ICM1NmY1NWM7XHJcbiAgICAtLWFjY2VudC1zZWNvbmRhcnk6ICMzZGI4ZmY7XHJcbiAgICAtLWFjY2VudC10ZXJ0aWFyeTogI2ZmY2MwMDtcclxuICAgIC0tYWNjZW50LXF1YXRlcm5hcnk6ICNlNDNkZmY7XHJcblxyXG4gICAgLS1hY2NlbnQtc3VjY2VzczogI2E3ZjdhYjtcclxuICAgIC0tYWNjZW50LWZhaWx1cmUtcHJpbWFyeTogI2ZmNWU1ZTtcclxuICAgIC0tYWNjZW50LWZhaWx1cmUtc2Vjb25kYXJ5OiAjZmZhOWE5O1xyXG5cclxuICAgIC0tZGlmZmljdWx0eS0xOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAtLWRpZmZpY3VsdHktMjogdmFyKC0tYWNjZW50LXRlcnRpYXJ5KTtcclxuICAgIC0tZGlmZmljdWx0eS0zOiB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcclxuICAgIC0tZGlmZmljdWx0eS00OiB2YXIoLS1hY2NlbnQtcXVhdGVybmFyeSk7XHJcblxyXG4gICAgLS10ZXh0LWJ1dHRvbjogIzJhMmEyYTtcclxuXHJcbiAgICAtLWZvbnQtbGFyZ2VyOiA1cmVtO1xyXG4gICAgLS1mb250LWxhcmdlOiAzcmVtO1xyXG4gICAgLS1mb250LW1lZGl1bTogMnJlbTtcclxuICAgIC0tZm9udC1zbWFsbDogMS4zcmVtO1xyXG4gICAgLS1mb250LXNtYWxsZXI6IDFyZW07XHJcblxyXG4gICAgLS1jb250YWN0OiAjMmEyYTJhO1xyXG4gICAgLS1mb290ZXI6ICMxZTFlMWU7XHJcbiAgICAtLWJveC1zaGFkb3c6IDBweCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xyXG4gICAgLS1ib3gtc2hhZG93LWFjdGl2ZTogMCA0cHggMTVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgaHRtbC50aGVtZS1saWdodCB7XHJcbiAgICAtLWJhY2tncm91bmQtcHJpbWFyeTogI2ZmZjtcclxuICAgIC0tYmFja2dyb3VuZC1zZWNvbmRhcnk6ICNmNWY1ZjU7XHJcbiAgICAtLWJhY2tncm91bmQtdGVydGlhcnk6ICNkYWRhZGE7XHJcbiAgICAtLWJhY2tncm91bmQtcXVhdGVybmFyeTogIzJhMmEyYTtcclxuXHJcbiAgICAtLXRleHQtcHJpbWFyeTogIzJhMmEyYTtcclxuICAgIC0tdGV4dC1zZWNvbmRhcnk6ICNmMWYxZjE7XHJcbiAgICAtLXRleHQtdGVydGlhcnk6ICM2ODY4Njg7XHJcblxyXG4gICAgLS1sb2FkaW5nLWJhcjogdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XHJcbiAgfVxyXG5cclxuICBodG1sLnRoZW1lLWRhcmsge1xyXG4gICAgLS1iYWNrZ3JvdW5kLXByaW1hcnk6ICMxZTFlMWU7XHJcbiAgICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5OiAjMmEyYTJhO1xyXG4gICAgLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5OiAjNDM0NTQ1O1xyXG4gICAgLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnk6ICM0MDQwNDA7XHJcblxyXG4gICAgLS10ZXh0LXByaW1hcnk6ICNmMWYxZjE7XHJcbiAgICAtLXRleHQtc2Vjb25kYXJ5OiAjZTZlNmU2O1xyXG4gICAgLS10ZXh0LXRlcnRpYXJ5OiAjNzc3Nzc3O1xyXG4gICAgLS1sb2FkaW5nLWJhcjogdmFyKC0tYWNjZW50LXRlcnRpYXJ5KTtcclxuICB9XHJcbmA7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\styles\\\\mainStyling.js */");

_defaultExport.__hash = "151316736";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./utils/checkFieldsValidity.js":
/*!**************************************!*\
  !*** ./utils/checkFieldsValidity.js ***!
  \**************************************/
/*! exports provided: default, thereAreEmptyFields, fieldValuesDontHaveProperLength */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkFieldsValidity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thereAreEmptyFields", function() { return thereAreEmptyFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fieldValuesDontHaveProperLength", function() { return fieldValuesDontHaveProperLength; });
/* harmony import */ var validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator/lib/isEmpty */ "validator/lib/isEmpty");
/* harmony import */ var validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator/lib/isEmail */ "validator/lib/isEmail");
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1__);


function checkFieldsValidity({
  fields,
  lengthBoundariesForEachField = {},
  customValidation = null,
  hasEmail = false
}) {
  if (thereAreEmptyFields(Object.values(fields))) return "Nu ai completat unul sau mai multe câmpuri.";else if (fieldValuesDontHaveProperLength(fields, lengthBoundariesForEachField)) return "Unul sau mai multe câmpuri nu se încadrează în numărul acceptat de caractere.";else if (customValidation && fieldsAreNotCustomValid(fields, customValidation)) return "Nu ați respectat formatul/formatele cerut/e.";else if (hasEmail && !validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1___default()(fields.email ? fields.email : fields.username)) return "E-mail-ul pe care l-ai introdus nu este valid.";
  return false;
}

function fieldsAreNotCustomValid(fields, {
  forFields = [],
  validator
}) {
  return !Object.entries(fields).some(([field, value], i) => forFields[i] === field && !validator.test(value));
}

function thereAreEmptyFields(fieldValues) {
  return fieldValues.some(fieldValue => validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(`${fieldValue}`));
} // lengthBoundariesForEachField { [fieldName]: [lower limit, upper limit]  }

function fieldValuesDontHaveProperLength(fields, lengthBoundariesForEachField = {}) {
  for (const field of Object.keys(lengthBoundariesForEachField)) {
    if (fields[field].length < lengthBoundariesForEachField[field][0] || fields[field].length > lengthBoundariesForEachField[field][1]) return true;
  }

  return false;
}

/***/ }),

/***/ "./utils/lengthBoundariesForFields.js":
/*!********************************************!*\
  !*** ./utils/lengthBoundariesForFields.js ***!
  \********************************************/
/*! exports provided: registerBoundaries, loginBoundaries, generalDataStepBoundaries, contentDataStepBoundaries, inputDataStepBoundaries, testsDataStepBoundaries */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBoundaries", function() { return registerBoundaries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginBoundaries", function() { return loginBoundaries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalDataStepBoundaries", function() { return generalDataStepBoundaries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentDataStepBoundaries", function() { return contentDataStepBoundaries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputDataStepBoundaries", function() { return inputDataStepBoundaries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testsDataStepBoundaries", function() { return testsDataStepBoundaries; });
const registerBoundaries = {
  name: [3, 128],
  surname: [3, 128],
  username: [5, 32],
  email: [5, 256],
  password: [8, 256]
};
const loginBoundaries = {
  username: [5, 32],
  password: [8, 256]
};
const generalDataStepBoundaries = {
  title: [3, 15],
  maxExecutionTime: [1, 2],
  maxMemory: [1, 4],
  source: [5, 128]
};
const contentDataStepBoundaries = {
  content: [10, 10000],
  hint: [5, 2000],
  mentions: [5, 5000],
  officialSolution: [10, 50000]
};
const inputDataStepBoundaries = {
  inputData: [1, 5000],
  outputData: [1, 5000],
  exampleInputData: [1, 5000],
  exampleOutputData: [1, 5000]
};
const testsDataStepBoundaries = {
  input: [1, 5000],
  expectedOutput: [1, 5000]
};

/***/ }),

/***/ "./utils/submit.js":
/*!*************************!*\
  !*** ./utils/submit.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return submit; });
/* harmony import */ var _checkFieldsValidity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkFieldsValidity */ "./utils/checkFieldsValidity.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function submit({
  to,
  fieldValues,
  fieldOptions
}) {
  const errorMessage = Object(_checkFieldsValidity__WEBPACK_IMPORTED_MODULE_0__["default"])(_objectSpread({
    fields: fieldValues
  }, fieldOptions));
  if (errorMessage) return Promise.reject({
    fromFieldsValidity: true,
    message: errorMessage
  });
  return fetch(to, {
    method: "POST",
    body: JSON.stringify(fieldValues)
  }).then(r => r.json());
}

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/fontawesome-svg-core");

/***/ }),

/***/ "@fortawesome/free-solid-svg-icons":
/*!****************************************************!*\
  !*** external "@fortawesome/free-solid-svg-icons" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/free-solid-svg-icons");

/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

/***/ }),

/***/ "cookie":
/*!*************************!*\
  !*** external "cookie" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

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

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "validator/lib/isEmail":
/*!****************************************!*\
  !*** external "validator/lib/isEmail" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isEmail");

/***/ }),

/***/ "validator/lib/isEmpty":
/*!****************************************!*\
  !*** external "validator/lib/isEmpty" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("validator/lib/isEmpty");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map