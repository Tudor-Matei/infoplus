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
/* harmony import */ var _utils_OverlayDarkener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/OverlayDarkener */ "./components/utils/OverlayDarkener.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\_globals\\AlertNotification.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function AlertNotification({
  type,
  children,
  alertToggleHandler
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_utils_OverlayDarkener__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: alertToggleHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-3012417670" + " " + `alert alert--type-${type}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3012417670" + " " + "alert__info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, type === 1 ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    className: "jsx-3012417670",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 29
    }
  }, "Succes!"), __jsx(_utils_CheckmarkSolved__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 29
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    className: "jsx-3012417670",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 29
    }
  }, "Eroare!"), __jsx(_utils_ErrorCircle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 29
    }
  })), __jsx("p", {
    className: "jsx-3012417670",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, children)), __jsx("button", {
    onClick: alertToggleHandler,
    className: "jsx-3012417670" + " " + "alert__button button--tertiary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "OK"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3012417670",
    __self: this
  }, ".alert.jsx-3012417670{max-width:50%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:30px 30px 20px;border-radius:20px;position:fixed;margin:auto;top:0;left:0;right:0;bottom:0;z-index:100;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:var(--text-button);box-shadow:var(--box-shadow);opacity:0;-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);-webkit-animation:comeIn-jsx-3012417670 300ms ease forwards;animation:comeIn-jsx-3012417670 300ms ease forwards;}.alert__info.jsx-3012417670{margin-bottom:20px;}.alert--type-1.jsx-3012417670{background-color:var(--accent-success);}.alert--type-0.jsx-3012417670{background-color:var(--accent-failure-secondary);}.alert__button.jsx-3012417670{color:var(--text-button);-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin-right:0;margin-bottom:-10px;}.alert__button.jsx-3012417670:hover{color:var(--accent-quaternary);}h2.jsx-3012417670{display:inline-block;vertical-align:middle;}@media screen and (max-width:576px){.alert.jsx-3012417670{max-width:75%;}}@-webkit-keyframes comeIn-jsx-3012417670{from{-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:0;}60%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);opacity:0.8;}to{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}}@keyframes comeIn-jsx-3012417670{from{-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:0;}60%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);opacity:0.8;}to{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxBbGVydE5vdGlmaWNhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQjRCLEFBR3VDLEFBcUJLLEFBSW9CLEFBSVUsQUFJeEIsQUFPTSxBQUlWLEFBTUgsQUFNTyxBQUlDLEFBSUgsY0EvREosQUFrRG5CLEtBN0JKLEVBdUIwQixJQVhGLE1BT3hCLFFBZkEsSUFvQkEsTUFoQkEsb0JBbUNrQixNQVJBLEdBSUUsQ0FLaEIsS0FoRXVCLENBd0R2QixLQUlBLE9BM0JlLFVBaENJLEtBaUNDLGNBaENMLE1BaUNuQixTQWhDZ0IsWUFDTixNQUNDLE9BQ0MsUUFDQyxTQUNHLFlBQ0MsMEVBQ1MsOEVBQ0cseUJBQ0ksNkJBQ25CLFVBQ1csMkVBQ2dCLGdIQUN6QyIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcQWxlcnROb3RpZmljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hlY2ttYXJrU29sdmVkIGZyb20gXCIuLi91dGlscy9DaGVja21hcmtTb2x2ZWRcIjtcclxuaW1wb3J0IEVycm9yQ2lyY2xlIGZyb20gXCIuLi91dGlscy9FcnJvckNpcmNsZVwiO1xyXG5pbXBvcnQgT3ZlcmxheURhcmtlbmVyIGZyb20gXCIuLi91dGlscy9PdmVybGF5RGFya2VuZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsZXJ0Tm90aWZpY2F0aW9uKHsgdHlwZSwgY2hpbGRyZW4sIGFsZXJ0VG9nZ2xlSGFuZGxlciB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxPdmVybGF5RGFya2VuZXIgb25DbGljaz17YWxlcnRUb2dnbGVIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0IGFsZXJ0LS10eXBlLSR7dHlwZX1gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnRfX2luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICB7dHlwZSA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5TdWNjZXMhPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja21hcmtTb2x2ZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Fcm9hcmUhPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFcnJvckNpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntjaGlsZHJlbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWxlcnRfX2J1dHRvbiBidXR0b24tLXRlcnRpYXJ5XCIgb25DbGljaz17YWxlcnRUb2dnbGVIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICBPS1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5hbGVydCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHggMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1idXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGNvbWVJbiAzMDBtcyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmFsZXJ0X19pbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5hbGVydC0tdHlwZS0xIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmFsZXJ0LS10eXBlLTAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtZmFpbHVyZS1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmFsZXJ0X19idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1idXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5hbGVydF9fYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1xdWF0ZXJuYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFsZXJ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzUlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGNvbWVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA2MCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\_globals\\\\AlertNotification.js */")));
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
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\_globals\\Contact.js";


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
  }, ".contact.jsx-1965023881{width:100%;padding:100px 0;background-color:var(--contact);color:var(--text-secondary);-webkit-transition:color,background-color 300ms ease;transition:color,background-color 300ms ease;text-align:center;}.contact__heading.jsx-1965023881{margin:0 10px 50px;}@media screen and (max-width:825px){.contact__heading.jsx-1965023881{font-size:var(--font-medium);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxDb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Cd0IsQUFHZ0MsQUFTUSxBQUtjLFdBYmpCLFFBU3BCLFFBUm9DLEVBYWhDLDhCQVo0Qiw0QkFDa0Isa0dBQzVCLGtCQUN0QiIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcQ29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNvbnRhY3RfX2hlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIFZyZWkgc8SDIGludHJpIMOubiBjb250YWN0IGN1IG5vaT9cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPENvbnRhY3RQYW5lbCB0aXRsZT1cImUtbWFpbFwiIGljb249XCJlbnZlbG9wZVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+c2FtcGxlbWFpbEBleGFtcGxlLmNvbTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPnNhbXBsZW1haWxAZXhhbXBsZS5jb208L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5zYW1wbGVtYWlsQGV4YW1wbGUuY29tPC9wPlxyXG4gICAgICAgICAgICA8L0NvbnRhY3RQYW5lbD5cclxuICAgICAgICAgICAgPENvbnRhY3RQYW5lbCB0aXRsZT1cInRlbGVmb25cIiBpY29uPVwicGhvbmVcIj5cclxuICAgICAgICAgICAgICAgIDxwPiswNzB4eHgwMDAwMHh4eDAwMDA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4rMDcweHh4MDAwMDB4eHgwMDAwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+KzA3MHh4eDAwMDAweHh4MDAwMDwvcD5cclxuICAgICAgICAgICAgPC9Db250YWN0UGFuZWw+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250YWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCA1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3RfX2hlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtbWVkaXVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb250YWN0UGFuZWwoeyB0aXRsZSwgaWNvbiwgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RfX2NvbnRhY3QtcGFuZWxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0X19wYW5lbC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ljb259IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29udGFjdF9fcGFuZWwtaGVhZGluZ1wiPnt0aXRsZS50b1VwcGVyQ2FzZSgpfTwvaDM+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJjb250YWN0X19wYW5lbC1oclwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9fcGFuZWwtY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdF9fY29udGFjdC1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3RfX2NvbnRhY3QtcGFuZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX3BhbmVsLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX3BhbmVsLWljb24sXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdF9fcGFuZWwtaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19wYW5lbC1oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19wYW5lbC1ociB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX2NvbnRhY3QtcGFuZWwgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\_globals\\\\Contact.js */"));
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
  }, ".contact__contact-panel{display:inline-block;min-width:30%;margin:50px;text-align:left;}@media screen and (max-width:825px){.contact__contact-panel{min-width:100%;margin:0;padding:50px;}}.contact__panel-icon{color:var(--accent-primary);}.contact__panel-icon,.contact__panel-heading{display:inline-block;margin-right:20px;vertical-align:middle;}.contact__panel-heading{-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}.contact__panel-hr{margin:20px 0;border:1px solid;}.contact__contact-panel p{color:var(--text-secondary);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin:2px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxDb250YWN0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFEK0IsQUFHMEMsQUFRRixBQU9TLEFBS1AsQUFNRixBQUlMLEFBS2MsY0FKWCxDQXRCSixNQVJDLEFBb0JJLEdBWEQsSUFNckIsQUFvQnVCLEdBSnZCLElBOUJnQixFQVNaLEVBV3NCLFFBbkJOLGNBb0JwQixFQW5CQSw4QkF1QkEsNEJBVWlCLGFBQ2pCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxDb250YWN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29udGFjdCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFjdFwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29udGFjdF9faGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgVnJlaSBzxIMgaW50cmkgw65uIGNvbnRhY3QgY3Ugbm9pP1xyXG4gICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICA8Q29udGFjdFBhbmVsIHRpdGxlPVwiZS1tYWlsXCIgaWNvbj1cImVudmVsb3BlXCI+XHJcbiAgICAgICAgICAgICAgICA8cD5zYW1wbGVtYWlsQGV4YW1wbGUuY29tPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+c2FtcGxlbWFpbEBleGFtcGxlLmNvbTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPnNhbXBsZW1haWxAZXhhbXBsZS5jb208L3A+XHJcbiAgICAgICAgICAgIDwvQ29udGFjdFBhbmVsPlxyXG4gICAgICAgICAgICA8Q29udGFjdFBhbmVsIHRpdGxlPVwidGVsZWZvblwiIGljb249XCJwaG9uZVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+KzA3MHh4eDAwMDAweHh4MDAwMDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiswNzB4eHgwMDAwMHh4eDAwMDA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4rMDcweHh4MDAwMDB4eHgwMDAwPC9wPlxyXG4gICAgICAgICAgICA8L0NvbnRhY3RQYW5lbD5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5jb250YWN0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbnRhY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX2hlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxMHB4IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODI1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuY29udGFjdF9faGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1tZWRpdW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIENvbnRhY3RQYW5lbCh7IHRpdGxlLCBpY29uLCBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9fY29udGFjdC1wYW5lbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RfX3BhbmVsLWljb25cIj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17aWNvbn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJjb250YWN0X19wYW5lbC1oZWFkaW5nXCI+e3RpdGxlLnRvVXBwZXJDYXNlKCl9PC9oMz5cclxuICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImNvbnRhY3RfX3BhbmVsLWhyXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0X19wYW5lbC1jb250ZW50XCI+e2NoaWxkcmVufTwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19jb250YWN0LXBhbmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODI1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuY29udGFjdF9fY29udGFjdC1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdF9fcGFuZWwtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdF9fcGFuZWwtaWNvbixcclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19wYW5lbC1oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX3BhbmVsLWhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX3BhbmVsLWhyIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdF9fY29udGFjdC1wYW5lbCBwIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAycHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\_globals\\\\Contact.js */"));
}

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
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.js");
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/_app */ "./pages/_app.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\_globals\\DropdownMenu.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function DropdownMenu({
  isDropdownToggled
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-3919748599" + " " + `dropdown-menu-header ${isDropdownToggled ? "dropdown-menu-header--active " : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx(DropdownMenuUl, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }), __jsx(ThemeConsumer, {
    Component: ThemeStyleSheet,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3919748599",
    __self: this
  }, ".dropdown-menu-header{width:220px;height:calc(100vh - 60px);position:fixed;right:0;bottom:0;background-color:var(--background-secondary);z-index:-1;box-shadow:-12px 13px 9px rgba(0,0,0,0.1);overflow-y:auto;padding-top:30px;-webkit-transform:translateX(230px) translateZ(0);-ms-transform:translateX(230px) translateZ(0);transform:translateX(230px) translateZ(0);-webkit-transition:color,background-color,-webkit-transform 300ms ease;-webkit-transition:color,background-color,transform 300ms ease;transition:color,background-color,transform 300ms ease;}.dropdown-menu-header--active{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxEcm9wZG93bk1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0IrQixBQUdpQyxBQWVZLFlBZEUsMEJBQ1gsZUFDUCxRQUNDLFNBQ29DLGNBV2pELCtCQVZlLFdBQ2tDLDBDQUM3QixnQkFDQyxpQkFDeUIsMElBQ2UsNkxBQzdEIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxEcm9wZG93bk1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCB7IGxpZ2h0LCBkYXJrIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy90aGVtZVwiO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvX2FwcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcGRvd25NZW51KHsgaXNEcm9wZG93blRvZ2dsZWQgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkcm9wZG93bi1tZW51LWhlYWRlciAke1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRHJvcGRvd25Ub2dnbGVkID8gXCJkcm9wZG93bi1tZW51LWhlYWRlci0tYWN0aXZlIFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVVbCAvPlxyXG4gICAgICAgICAgICAgICAgPFRoZW1lQ29uc3VtZXIgQ29tcG9uZW50PXtUaGVtZVN0eWxlU2hlZXR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTEycHggMTNweCA5cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIzMHB4KSB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXItLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVVbCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX191bFwiPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUFjY29yZGlvbiB0aXRsZT1cIkV4ZXJjaXRpaVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBJWFwiLCBocmVmOiBcIi9leGVyY2l0aWkvaXhcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlTGk6IFwiQ2xhc2EgWFwiLCBocmVmOiBcIi9leGVyY2l0aWkveFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBYSVwiLCBocmVmOiBcIi9leGVyY2l0aWkveGlcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9faHJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUFjY29yZGlvbiB0aXRsZT1cIlJlc3Vyc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICB7W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlTGk6IFwiQ2xhc2EgSVhcIiwgaHJlZjogXCIvcmVzdXJzZS9peFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBYXCIsIGhyZWY6IFwiL3Jlc3Vyc2UveFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBYSVwiLCBocmVmOiBcIi9yZXN1cnNlL3hpXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxUaGVtZUNvbnN1bWVyIENvbXBvbmVudD17VGhlbWVDaGFuZ2VyQnV0dG9ufSAvPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIj5Nb2QgcHJvaWVjdG9yPC9saT5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9faHJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIj5EZXRhbGlpIGNvbnQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5kcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpOmhvdmVyLCAuZHJvcGRvd24tbWVudS1oZWFkZXJfX3NlY29uZGFyeS1saTpob3Zlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpOmhvdmVyOjpiZWZvcmUsIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fc2Vjb25kYXJ5LWxpOmhvdmVyOjpiZWZvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVBY2NvcmRpb24oeyB0aXRsZSwgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgW2lzVG9nZ2xlZCwgdG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKCkgPT4gdG9nZ2xlKCFpc1RvZ2dsZWQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fb3B0aW9uLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0b2dnbGVEcm9wZG93bn0gY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIj5cclxuICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiYW5nbGUtZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIyQTJBMkFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duLW1lbnUtaGVhZGVyX19pY29uICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9nZ2xlZCA/IFwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2ljb24tLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQgJHtcclxuICAgICAgICAgICAgICAgICAgICBpc1RvZ2dsZWQgPyBcImRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50LS1hY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQtdWxcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW4ubWFwKCh7IHRpdGxlTGkgPSBcIlwiLCBocmVmID0gXCJcIiB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGtleT17YGNoaWxkX2xpbmstJHtpfS0ke2hyZWZ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fc2Vjb25kYXJ5LWxpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BjaGlsZF9saS0ke2l9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGVMaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19zZWNvbmRhcnktbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50LXVsIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fb3B0aW9uLWRyb3Bkb3duIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudC0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2ljb24tLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRoZW1lQ29uc3VtZXIoeyBDb21wb25lbnQgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGhlbWVDb250ZXh0LkNvbnN1bWVyPlxyXG4gICAgICAgICAgICB7KHsgaXNMaWdodFRoZW1lLCBzZXRUaGVtZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudCBpc0xpZ2h0VGhlbWU9e2lzTGlnaHRUaGVtZX0gc2V0VGhlbWU9e3NldFRoZW1lfSAvPjtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA8L1RoZW1lQ29udGV4dC5Db25zdW1lcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRoZW1lU3R5bGVTaGVldCh7IGlzTGlnaHRUaGVtZSB9KSB7XHJcbiAgICBjb25zdCBjdXJyZW50VGhlbWUgPSBpc0xpZ2h0VGhlbWUgPyBsaWdodCA6IGRhcms7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICB7Y3VycmVudFRoZW1lfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaGVtZUNoYW5nZXJCdXR0b24oeyBpc0xpZ2h0VGhlbWUsIHNldFRoZW1lIH0pIHtcclxuICAgIGNvbnN0IGNoYW5nZVRoZW1lID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRoZW1lKCFpc0xpZ2h0VGhlbWUpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsICFpc0xpZ2h0VGhlbWUgPyBcImxpZ2h0XCIgOiBcImRhcmtcIik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIiBvbkNsaWNrPXtjaGFuZ2VUaGVtZX0+XHJcbiAgICAgICAgICAgIFRlbWEge2lzTGlnaHRUaGVtZSA/IFwiSW50dW5lY2F0YVwiIDogXCJMdW1pbm9hc2FcIn1cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\_globals\\\\DropdownMenu.js */"));
}

function DropdownMenuUl() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("ul", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(DropdownMenuAccordion, {
    title: "Exercitii",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, [{
    titleLi: "Clasa IX",
    href: "/exercitii/ix"
  }, {
    titleLi: "Clasa X",
    href: "/exercitii/x"
  }, {
    titleLi: "Clasa XI",
    href: "/exercitii/xi"
  }]), __jsx("hr", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__hr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }), __jsx(DropdownMenuAccordion, {
    title: "Resurse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
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
      lineNumber: 62,
      columnNumber: 17
    }
  }), __jsx(ThemeConsumer, {
    Component: ThemeChangerButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }), __jsx("hr", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__hr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }), __jsx("li", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__main-li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, "Mod proiector"), __jsx("hr", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__hr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/dashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__main-li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 21
    }
  }, "Detalii cont"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1946800395",
    __self: this
  }, ".dropdown-menu-header__hr.jsx-1946800395{width:85%;}.dropdown-menu-header__ul.jsx-1946800395{padding-top:0;padding-left:5px;list-style-type:none;}.dropdown-menu-header__main-li{font-weight:bold;font-size:var(--font-small);cursor:pointer;position:relative;padding:10px 0 10px 15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.dropdown-menu-header__main-li:hover,.dropdown-menu-header__secondary-li:hover{background-color:var(--background-primary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;}.dropdown-menu-header__main-li:hover::before,.dropdown-menu-header__secondary-li:hover::before{content:\"\";width:5px;height:100%;background-color:var(--accent-primary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;position:absolute;left:0;top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxEcm9wZG93bk1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0V3QixBQUcrQixBQUlJLEFBTUcsQUFTMEIsQUFLaEMsVUF2QmYsQ0F3QmMsR0FwQk8sR0FNVyxJQWVoQixVQXBCUyxFQXFCa0IsVUFQQSxFQVJ4QixPQUxuQixRQU1zQixZQWVxQixNQWRkLHlCQUNSLDBCQU1yQiw2QkFRc0Isa0JBQ1gsT0FDRCxLQWZWLENBZ0JBIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxEcm9wZG93bk1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCB7IGxpZ2h0LCBkYXJrIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy90aGVtZVwiO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvX2FwcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcGRvd25NZW51KHsgaXNEcm9wZG93blRvZ2dsZWQgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkcm9wZG93bi1tZW51LWhlYWRlciAke1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRHJvcGRvd25Ub2dnbGVkID8gXCJkcm9wZG93bi1tZW51LWhlYWRlci0tYWN0aXZlIFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVVbCAvPlxyXG4gICAgICAgICAgICAgICAgPFRoZW1lQ29uc3VtZXIgQ29tcG9uZW50PXtUaGVtZVN0eWxlU2hlZXR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTEycHggMTNweCA5cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIzMHB4KSB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXItLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVVbCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX191bFwiPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUFjY29yZGlvbiB0aXRsZT1cIkV4ZXJjaXRpaVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBJWFwiLCBocmVmOiBcIi9leGVyY2l0aWkvaXhcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlTGk6IFwiQ2xhc2EgWFwiLCBocmVmOiBcIi9leGVyY2l0aWkveFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBYSVwiLCBocmVmOiBcIi9leGVyY2l0aWkveGlcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9faHJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUFjY29yZGlvbiB0aXRsZT1cIlJlc3Vyc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICB7W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlTGk6IFwiQ2xhc2EgSVhcIiwgaHJlZjogXCIvcmVzdXJzZS9peFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBYXCIsIGhyZWY6IFwiL3Jlc3Vyc2UveFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBYSVwiLCBocmVmOiBcIi9yZXN1cnNlL3hpXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxUaGVtZUNvbnN1bWVyIENvbXBvbmVudD17VGhlbWVDaGFuZ2VyQnV0dG9ufSAvPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIj5Nb2QgcHJvaWVjdG9yPC9saT5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9faHJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIj5EZXRhbGlpIGNvbnQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5kcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpOmhvdmVyLCAuZHJvcGRvd24tbWVudS1oZWFkZXJfX3NlY29uZGFyeS1saTpob3Zlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpOmhvdmVyOjpiZWZvcmUsIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fc2Vjb25kYXJ5LWxpOmhvdmVyOjpiZWZvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVBY2NvcmRpb24oeyB0aXRsZSwgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgW2lzVG9nZ2xlZCwgdG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKCkgPT4gdG9nZ2xlKCFpc1RvZ2dsZWQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fb3B0aW9uLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0b2dnbGVEcm9wZG93bn0gY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIj5cclxuICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiYW5nbGUtZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIyQTJBMkFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duLW1lbnUtaGVhZGVyX19pY29uICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9nZ2xlZCA/IFwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2ljb24tLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQgJHtcclxuICAgICAgICAgICAgICAgICAgICBpc1RvZ2dsZWQgPyBcImRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50LS1hY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQtdWxcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW4ubWFwKCh7IHRpdGxlTGkgPSBcIlwiLCBocmVmID0gXCJcIiB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGtleT17YGNoaWxkX2xpbmstJHtpfS0ke2hyZWZ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fc2Vjb25kYXJ5LWxpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BjaGlsZF9saS0ke2l9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGVMaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19zZWNvbmRhcnktbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50LXVsIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fb3B0aW9uLWRyb3Bkb3duIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudC0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2ljb24tLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRoZW1lQ29uc3VtZXIoeyBDb21wb25lbnQgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGhlbWVDb250ZXh0LkNvbnN1bWVyPlxyXG4gICAgICAgICAgICB7KHsgaXNMaWdodFRoZW1lLCBzZXRUaGVtZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudCBpc0xpZ2h0VGhlbWU9e2lzTGlnaHRUaGVtZX0gc2V0VGhlbWU9e3NldFRoZW1lfSAvPjtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA8L1RoZW1lQ29udGV4dC5Db25zdW1lcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRoZW1lU3R5bGVTaGVldCh7IGlzTGlnaHRUaGVtZSB9KSB7XHJcbiAgICBjb25zdCBjdXJyZW50VGhlbWUgPSBpc0xpZ2h0VGhlbWUgPyBsaWdodCA6IGRhcms7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICB7Y3VycmVudFRoZW1lfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaGVtZUNoYW5nZXJCdXR0b24oeyBpc0xpZ2h0VGhlbWUsIHNldFRoZW1lIH0pIHtcclxuICAgIGNvbnN0IGNoYW5nZVRoZW1lID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRoZW1lKCFpc0xpZ2h0VGhlbWUpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsICFpc0xpZ2h0VGhlbWUgPyBcImxpZ2h0XCIgOiBcImRhcmtcIik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIiBvbkNsaWNrPXtjaGFuZ2VUaGVtZX0+XHJcbiAgICAgICAgICAgIFRlbWEge2lzTGlnaHRUaGVtZSA/IFwiSW50dW5lY2F0YVwiIDogXCJMdW1pbm9hc2FcIn1cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\_globals\\\\DropdownMenu.js */"));
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
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx("li", {
    onClick: toggleDropdown,
    className: "jsx-3958027138" + " " + "dropdown-menu-header__main-li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 13
    }
  }, title, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "angle-down",
    color: "2A2A2A",
    className: `dropdown-menu-header__icon ${isToggled ? "dropdown-menu-header__icon--active" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-3958027138" + " " + `dropdown-menu-header__content ${isToggled ? "dropdown-menu-header__content--active" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "jsx-3958027138" + " " + "dropdown-menu-header__content-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
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
      lineNumber: 134,
      columnNumber: 25
    }
  }, __jsx("li", {
    key: `child_li-${i}`,
    className: "jsx-3958027138" + " " + "dropdown-menu-header__secondary-li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 29
    }
  }, titleLi))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3958027138",
    __self: this
  }, ".dropdown-menu-header__secondary-li{padding:10px 0;font-size:var(--font-smaller);cursor:pointer;position:relative;padding-left:20px;}.dropdown-menu-header__content-ul{list-style-type:none;padding-left:0;}.dropdown-menu-header__option-dropdown{overflow:hidden;}.dropdown-menu-header__content{margin-left:20px;height:0;-webkit-transition:height 300ms ease;transition:height 300ms ease;}.dropdown-menu-header__content--active{height:140px;}.dropdown-menu-header__icon{margin-left:20px;-webkit-transition:-webkit-transform 300ms ease;-webkit-transition:transform 300ms ease;transition:transform 300ms ease;}.dropdown-menu-header__icon--active{-webkit-transform:rotateZ(180deg);-ms-transform:rotateZ(180deg);transform:rotateZ(180deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxEcm9wZG93bk1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0orQixBQUdvQyxBQVFNLEFBS0wsQUFJQyxBQU1KLEFBSUksQUFJUyxhQVA5QixFQXZCa0MsQ0FhbEMsQ0FJYSxBQVV1QixJQW5CakIsS0FVYyxVQVRqQyxTQVJtQixlQUNHLGtCQUNBLFlBNEJ0QixFQVpBLElBZkEseUNBd0JBIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxEcm9wZG93bk1lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmltcG9ydCB7IGxpZ2h0LCBkYXJrIH0gZnJvbSBcIi4uLy4uL3N0eWxlcy90aGVtZVwiO1xyXG5pbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvX2FwcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcGRvd25NZW51KHsgaXNEcm9wZG93blRvZ2dsZWQgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkcm9wZG93bi1tZW51LWhlYWRlciAke1xyXG4gICAgICAgICAgICAgICAgICAgIGlzRHJvcGRvd25Ub2dnbGVkID8gXCJkcm9wZG93bi1tZW51LWhlYWRlci0tYWN0aXZlIFwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVVbCAvPlxyXG4gICAgICAgICAgICAgICAgPFRoZW1lQ29uc3VtZXIgQ29tcG9uZW50PXtUaGVtZVN0eWxlU2hlZXR9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTEycHggMTNweCA5cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIzMHB4KSB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLCB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXItLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVVbCgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX191bFwiPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUFjY29yZGlvbiB0aXRsZT1cIkV4ZXJjaXRpaVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBJWFwiLCBocmVmOiBcIi9leGVyY2l0aWkvaXhcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlTGk6IFwiQ2xhc2EgWFwiLCBocmVmOiBcIi9leGVyY2l0aWkveFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBYSVwiLCBocmVmOiBcIi9leGVyY2l0aWkveGlcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9faHJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUFjY29yZGlvbiB0aXRsZT1cIlJlc3Vyc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICB7W1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlTGk6IFwiQ2xhc2EgSVhcIiwgaHJlZjogXCIvcmVzdXJzZS9peFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBYXCIsIGhyZWY6IFwiL3Jlc3Vyc2UveFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBYSVwiLCBocmVmOiBcIi9yZXN1cnNlL3hpXCIgfSxcclxuICAgICAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxUaGVtZUNvbnN1bWVyIENvbXBvbmVudD17VGhlbWVDaGFuZ2VyQnV0dG9ufSAvPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIj5Nb2QgcHJvaWVjdG9yPC9saT5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9faHJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIj5EZXRhbGlpIGNvbnQ8L2xpPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5kcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpOmhvdmVyLCAuZHJvcGRvd24tbWVudS1oZWFkZXJfX3NlY29uZGFyeS1saTpob3Zlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpOmhvdmVyOjpiZWZvcmUsIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fc2Vjb25kYXJ5LWxpOmhvdmVyOjpiZWZvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVBY2NvcmRpb24oeyB0aXRsZSwgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgW2lzVG9nZ2xlZCwgdG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKCkgPT4gdG9nZ2xlKCFpc1RvZ2dsZWQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fb3B0aW9uLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgIDxsaSBvbkNsaWNrPXt0b2dnbGVEcm9wZG93bn0gY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIj5cclxuICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiYW5nbGUtZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIyQTJBMkFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duLW1lbnUtaGVhZGVyX19pY29uICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9nZ2xlZCA/IFwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2ljb24tLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQgJHtcclxuICAgICAgICAgICAgICAgICAgICBpc1RvZ2dsZWQgPyBcImRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50LS1hY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQtdWxcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW4ubWFwKCh7IHRpdGxlTGkgPSBcIlwiLCBocmVmID0gXCJcIiB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGtleT17YGNoaWxkX2xpbmstJHtpfS0ke2hyZWZ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fc2Vjb25kYXJ5LWxpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BjaGlsZF9saS0ke2l9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGVMaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19zZWNvbmRhcnktbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50LXVsIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fb3B0aW9uLWRyb3Bkb3duIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudC0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2ljb24tLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRoZW1lQ29uc3VtZXIoeyBDb21wb25lbnQgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGhlbWVDb250ZXh0LkNvbnN1bWVyPlxyXG4gICAgICAgICAgICB7KHsgaXNMaWdodFRoZW1lLCBzZXRUaGVtZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gPENvbXBvbmVudCBpc0xpZ2h0VGhlbWU9e2lzTGlnaHRUaGVtZX0gc2V0VGhlbWU9e3NldFRoZW1lfSAvPjtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA8L1RoZW1lQ29udGV4dC5Db25zdW1lcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRoZW1lU3R5bGVTaGVldCh7IGlzTGlnaHRUaGVtZSB9KSB7XHJcbiAgICBjb25zdCBjdXJyZW50VGhlbWUgPSBpc0xpZ2h0VGhlbWUgPyBsaWdodCA6IGRhcms7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICB7Y3VycmVudFRoZW1lfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaGVtZUNoYW5nZXJCdXR0b24oeyBpc0xpZ2h0VGhlbWUsIHNldFRoZW1lIH0pIHtcclxuICAgIGNvbnN0IGNoYW5nZVRoZW1lID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRoZW1lKCFpc0xpZ2h0VGhlbWUpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsICFpc0xpZ2h0VGhlbWUgPyBcImxpZ2h0XCIgOiBcImRhcmtcIik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIiBvbkNsaWNrPXtjaGFuZ2VUaGVtZX0+XHJcbiAgICAgICAgICAgIFRlbWEge2lzTGlnaHRUaGVtZSA/IFwiSW50dW5lY2F0YVwiIDogXCJMdW1pbm9hc2FcIn1cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\_globals\\\\DropdownMenu.js */"));
}

function ThemeConsumer({
  Component
}) {
  return __jsx(_pages_app__WEBPACK_IMPORTED_MODULE_5__["ThemeContext"].Consumer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 9
    }
  }, ({
    isLightTheme,
    setTheme
  }) => {
    return __jsx(Component, {
      isLightTheme: isLightTheme,
      setTheme: setTheme,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 24
      }
    });
  });
}

function ThemeStyleSheet({
  isLightTheme
}) {
  const currentTheme = isLightTheme ? _styles_theme__WEBPACK_IMPORTED_MODULE_4__["light"] : _styles_theme__WEBPACK_IMPORTED_MODULE_4__["dark"];
  return __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: currentTheme.__hash,
    __self: this
  }, currentTheme);
}

function ThemeChangerButton({
  isLightTheme,
  setTheme
}) {
  const changeTheme = () => {
    setTheme(!isLightTheme);
    window.localStorage.setItem("theme", !isLightTheme ? "light" : "dark");
  };

  return __jsx("li", {
    className: "dropdown-menu-header__main-li",
    onClick: changeTheme,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210,
      columnNumber: 9
    }
  }, "Tema ", isLightTheme ? "Intunecata" : "Luminoasa");
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
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\_globals\\Footer.js";


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
  }, ".footer.jsx-3518460930{width:100%;color:var(--text-secondary);background-color:var(--footer);-webkit-transition:color,background-color 300ms ease;transition:color,background-color 300ms ease;text-align:center;padding:50px 10px;}.footer__heading.jsx-3518460930{margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxGb290ZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTXdCLEFBR2dDLEFBU1EsV0FSUyxRQVNoQyxvQkFSbUMsK0JBQ2Usa0dBQzVCLGtCQUNBLGtCQUN0QiIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9vdGVyX19oZWFkaW5nXCI+aW5mb3BsdXMgQCAyMDIwPC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9vdGVyX19tb3JlLWluZm9cIj5Ub2F0ZSBkcmVwdHVyaWxlIHJlemVydmF0ZS48L3A+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWZvb3Rlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNTBweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5mb290ZXJfX2hlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Zvb3Rlcj5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\_globals\\\\Footer.js */"));
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
/* harmony import */ var _utils_OverlayDarkener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/OverlayDarkener */ "./components/utils/OverlayDarkener.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\_globals\\Header.js";


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
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-3076026530" + " " + "header__site-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }, __jsx(SiteLogo, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }))), __jsx(IconsRightMenu, {
    isDropdownToggled: isDropdownToggled,
    toggleMenuDropdown: toggleMenuDropdown,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), __jsx(_DropdownMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isDropdownToggled: isDropdownToggled,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3076026530",
    __self: this
  }, ".header{width:100%;height:60px;background-color:var(--background-secondary);box-shadow:var(--box-shadow);color:var(--text-primary);position:fixed;top:0;padding:0 40px;z-index:100;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:color,background-color 300ms ease;transition:color,background-color 300ms ease;}@media screen and (max-width:375px){.header{padding:0 15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJtQyxBQUdvQyxBQWlCUSxXQWhCUCxJQWlCWixRQWhCNkMsNkNBQ2hCLDZCQUNILDBCQUNYLGVBQ1QsTUFDUyxlQUNILFlBQ0MsMEVBQ00sNkZBQ1csbUhBQ2dCLGtHQUNsRCIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gXCIuL0Ryb3Bkb3duTWVudVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBPdmVybGF5RGFya2VuZXIgZnJvbSBcIi4uL3V0aWxzL092ZXJsYXlEYXJrZW5lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgY29uc3QgW2lzRHJvcGRvd25Ub2dnbGVkLCB0b2dnbGVEcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB0b2dnbGVNZW51RHJvcGRvd24gPSAoKSA9PiB0b2dnbGVEcm9wZG93bighaXNEcm9wZG93blRvZ2dsZWQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3NpdGUtbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2l0ZUxvZ28gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxJY29uc1JpZ2h0TWVudVxyXG4gICAgICAgICAgICAgICAgICAgIGlzRHJvcGRvd25Ub2dnbGVkPXtpc0Ryb3Bkb3duVG9nZ2xlZH1cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVNZW51RHJvcGRvd249e3RvZ2dsZU1lbnVEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51IGlzRHJvcGRvd25Ub2dnbGVkPXtpc0Ryb3Bkb3duVG9nZ2xlZH0gLz5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAge2lzRHJvcGRvd25Ub2dnbGVkICYmIDxPdmVybGF5RGFya2VuZXIgb25DbGljaz17dG9nZ2xlTWVudURyb3Bkb3dufSAvPn1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEljb25zUmlnaHRNZW51KHsgaXNEcm9wZG93blRvZ2dsZWQsIHRvZ2dsZU1lbnVEcm9wZG93biB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19pY29ucy1yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fc2VhcmNoLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwic2VhcmNoXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19pY29uXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdXNlci1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ1c2VyXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fbWVudS1idXR0b25cIiBvbkNsaWNrPXt0b2dnbGVNZW51RHJvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJiYXJzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXJfX21lbnUtaWNvbiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Ryb3Bkb3duVG9nZ2xlZCA/IFwiaGVhZGVyX19tZW51LWljb24tLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJoZWFkZXJfX21lbnUtdGl0bGVcIj5NRU5JVTwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX2ljb25zLXJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19zZWFyY2gtYnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fdXNlci1idXR0b24sXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9faWNvbixcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogdmFyKC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWljb24tLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU2l0ZUxvZ28oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgd2lkdGg9XCI1N1wiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjU3XCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1NyA1N1wiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlcl9fc2l0ZS1sb2dvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTI4LjUgNTdDNDQuMjQwMSA1NyA1NyA0NC4yNDAxIDU3IDI4LjVDNTcgMTIuNzU5OSA0NC4yNDAxIDAgMjguNSAwQzEyLjc1OTkgMCAwIDEyLjc1OTkgMCAyOC41QzAgNDQuMjQwMSAxMi43NTk5IDU3IDI4LjUgNTdaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ2YXIoLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnkpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjEuOTQ2NyAyMS41MDRDMjEuMTU3MyAyMS41MDQgMjAuNDg1MyAyMS4yMjY3IDE5LjkzMDcgMjAuNjcyQzE5LjM3NiAyMC4xMTczIDE5LjA5ODcgMTkuNDQ1MyAxOS4wOTg3IDE4LjY1NkMxOS4wOTg3IDE3Ljg2NjcgMTkuMzc2IDE3LjE5NDcgMTkuOTMwNyAxNi42NEMyMC40ODUzIDE2LjA4NTMgMjEuMTU3MyAxNS44MDggMjEuOTQ2NyAxNS44MDhDMjIuNzM2IDE1LjgwOCAyMy40MDggMTYuMDg1MyAyMy45NjI3IDE2LjY0QzI0LjUxNzMgMTcuMTk0NyAyNC43OTQ3IDE3Ljg2NjcgMjQuNzk0NyAxOC42NTZDMjQuNzk0NyAxOS40NDUzIDI0LjUxNzMgMjAuMTE3MyAyMy45NjI3IDIwLjY3MkMyMy40MDggMjEuMjI2NyAyMi43MzYgMjEuNTA0IDIxLjk0NjcgMjEuNTA0Wk0yNC41Mzg3IDIzLjA3MlY0MEgxOS4zNTQ3VjIzLjA3MkgyNC41Mzg3Wk0zNy4xMDU3IDM2LjA2NEgzMy4xMDU3VjMwLjQ5NkgyNy41MDU3VjI2LjUyOEgzMy4xMDU3VjIxLjA4OEgzNy4xMDU3VjI2LjUyOEg0Mi42NzM3VjMwLjQ5NkgzNy4xMDU3VjM2LjA2NFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLXRleHQtc2Vjb25kYXJ5KVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyX19zaXRlLWxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\_globals\\\\Header.js */")), isDropdownToggled && __jsx(_utils_OverlayDarkener__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: toggleMenuDropdown,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 35
    }
  }));
}

function IconsRightMenu({
  isDropdownToggled,
  toggleMenuDropdown
}) {
  return __jsx("div", {
    className: "jsx-4128229347" + " " + "header__icons-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-4128229347" + " " + "header__search-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "search",
    className: "header__icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/dashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-4128229347" + " " + "header__user-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "user",
    className: "header__icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }))), __jsx("div", {
    onClick: toggleMenuDropdown,
    className: "jsx-4128229347" + " " + "header__menu-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "bars",
    className: `header__menu-icon ${isDropdownToggled ? "header__menu-icon--active" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }), __jsx("h4", {
    className: "jsx-4128229347" + " " + "header__menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, "MENIU")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4128229347",
    __self: this
  }, ".header__icons-right,.header__menu-button{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header__search-button,.header__user-button,.header__menu-button{margin:0 15px;cursor:pointer;}.header__menu-title{margin-left:10px;font-weight:800;}.header__icon,.header__menu-icon{fill:var(--background-quaternary);-webkit-transition:fill 300ms ease;transition:fill 300ms ease;width:25px !important;height:25px;}.header__menu-icon{-webkit-transition:-webkit-transform 300ms ease;-webkit-transition:transform 300ms ease;transition:transform 300ms ease;}.header__menu-icon--active{-webkit-transform:rotateZ(90deg);-ms-transform:rotateZ(90deg);transform:rotateZ(90deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEUrQixBQUlrQyxBQU9DLEFBS0csQUFNaUIsQUFPRixBQUlQLGNBckJWLEdBS0MsWUFKcEIsSUFLQSxDQUsrQix3Q0FsQlIsYUE2QnZCLFNBVjBCLHNCQUNWLEVBS2hCLFVBSkEscUNBcEJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSBcIi4vRHJvcGRvd25NZW51XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE92ZXJsYXlEYXJrZW5lciBmcm9tIFwiLi4vdXRpbHMvT3ZlcmxheURhcmtlbmVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBbaXNEcm9wZG93blRvZ2dsZWQsIHRvZ2dsZURyb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHRvZ2dsZU1lbnVEcm9wZG93biA9ICgpID0+IHRvZ2dsZURyb3Bkb3duKCFpc0Ryb3Bkb3duVG9nZ2xlZCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fc2l0ZS1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaXRlTG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPEljb25zUmlnaHRNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEcm9wZG93blRvZ2dsZWQ9e2lzRHJvcGRvd25Ub2dnbGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZU1lbnVEcm9wZG93bj17dG9nZ2xlTWVudURyb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgaXNEcm9wZG93blRvZ2dsZWQ9e2lzRHJvcGRvd25Ub2dnbGVkfSAvPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICB7aXNEcm9wZG93blRvZ2dsZWQgJiYgPE92ZXJsYXlEYXJrZW5lciBvbkNsaWNrPXt0b2dnbGVNZW51RHJvcGRvd259IC8+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSWNvbnNSaWdodE1lbnUoeyBpc0Ryb3Bkb3duVG9nZ2xlZCwgdG9nZ2xlTWVudURyb3Bkb3duIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2ljb25zLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19zZWFyY2gtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJoZWFkZXJfX2ljb25cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX191c2VyLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInVzZXJcIiBjbGFzc05hbWU9XCJoZWFkZXJfX2ljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19tZW51LWJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZU1lbnVEcm9wZG93bn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImJhcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhlYWRlcl9fbWVudS1pY29uICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRHJvcGRvd25Ub2dnbGVkID8gXCJoZWFkZXJfX21lbnUtaWNvbi0tYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlYWRlcl9fbWVudS10aXRsZVwiPk1FTklVPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9faWNvbnMtcmlnaHQsXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX3NlYXJjaC1idXR0b24sXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX191c2VyLWJ1dHRvbixcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19pY29uLFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtaWNvbi0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTaXRlTG9nbygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB3aWR0aD1cIjU3XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNTdcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDU3IDU3XCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyX19zaXRlLWxvZ29cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjguNSA1N0M0NC4yNDAxIDU3IDU3IDQ0LjI0MDEgNTcgMjguNUM1NyAxMi43NTk5IDQ0LjI0MDEgMCAyOC41IDBDMTIuNzU5OSAwIDAgMTIuNzU5OSAwIDI4LjVDMCA0NC4yNDAxIDEyLjc1OTkgNTcgMjguNSA1N1pcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0yMS45NDY3IDIxLjUwNEMyMS4xNTczIDIxLjUwNCAyMC40ODUzIDIxLjIyNjcgMTkuOTMwNyAyMC42NzJDMTkuMzc2IDIwLjExNzMgMTkuMDk4NyAxOS40NDUzIDE5LjA5ODcgMTguNjU2QzE5LjA5ODcgMTcuODY2NyAxOS4zNzYgMTcuMTk0NyAxOS45MzA3IDE2LjY0QzIwLjQ4NTMgMTYuMDg1MyAyMS4xNTczIDE1LjgwOCAyMS45NDY3IDE1LjgwOEMyMi43MzYgMTUuODA4IDIzLjQwOCAxNi4wODUzIDIzLjk2MjcgMTYuNjRDMjQuNTE3MyAxNy4xOTQ3IDI0Ljc5NDcgMTcuODY2NyAyNC43OTQ3IDE4LjY1NkMyNC43OTQ3IDE5LjQ0NTMgMjQuNTE3MyAyMC4xMTczIDIzLjk2MjcgMjAuNjcyQzIzLjQwOCAyMS4yMjY3IDIyLjczNiAyMS41MDQgMjEuOTQ2NyAyMS41MDRaTTI0LjUzODcgMjMuMDcyVjQwSDE5LjM1NDdWMjMuMDcySDI0LjUzODdaTTM3LjEwNTcgMzYuMDY0SDMzLjEwNTdWMzAuNDk2SDI3LjUwNTdWMjYuNTI4SDMzLjEwNTdWMjEuMDg4SDM3LjEwNTdWMjYuNTI4SDQyLjY3MzdWMzAuNDk2SDM3LjEwNTdWMzYuMDY0WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidmFyKC0tdGV4dC1zZWNvbmRhcnkpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXJfX3NpdGUtbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\_globals\\\\Header.js */"));
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
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M28.5 57C44.2401 57 57 44.2401 57 28.5C57 12.7599 44.2401 0 28.5 0C12.7599 0 0 12.7599 0 28.5C0 44.2401 12.7599 57 28.5 57Z",
    fill: "var(--background-quaternary)",
    className: "jsx-3674848814",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M21.9467 21.504C21.1573 21.504 20.4853 21.2267 19.9307 20.672C19.376 20.1173 19.0987 19.4453 19.0987 18.656C19.0987 17.8667 19.376 17.1947 19.9307 16.64C20.4853 16.0853 21.1573 15.808 21.9467 15.808C22.736 15.808 23.408 16.0853 23.9627 16.64C24.5173 17.1947 24.7947 17.8667 24.7947 18.656C24.7947 19.4453 24.5173 20.1173 23.9627 20.672C23.408 21.2267 22.736 21.504 21.9467 21.504ZM24.5387 23.072V40H19.3547V23.072H24.5387ZM37.1057 36.064H33.1057V30.496H27.5057V26.528H33.1057V21.088H37.1057V26.528H42.6737V30.496H37.1057V36.064Z",
    fill: "var(--text-secondary)",
    className: "jsx-3674848814",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3674848814",
    __self: this
  }, ".header__site-logo{width:35px;height:35px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxIZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0lpQixBQUdvQyxXQUNDLFlBQ0csZUFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tIFwiLi9Ecm9wZG93bk1lbnVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgT3ZlcmxheURhcmtlbmVyIGZyb20gXCIuLi91dGlscy9PdmVybGF5RGFya2VuZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIGNvbnN0IFtpc0Ryb3Bkb3duVG9nZ2xlZCwgdG9nZ2xlRHJvcGRvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdG9nZ2xlTWVudURyb3Bkb3duID0gKCkgPT4gdG9nZ2xlRHJvcGRvd24oIWlzRHJvcGRvd25Ub2dnbGVkKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19zaXRlLWxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpdGVMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8SWNvbnNSaWdodE1lbnVcclxuICAgICAgICAgICAgICAgICAgICBpc0Ryb3Bkb3duVG9nZ2xlZD17aXNEcm9wZG93blRvZ2dsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTWVudURyb3Bkb3duPXt0b2dnbGVNZW51RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudSBpc0Ryb3Bkb3duVG9nZ2xlZD17aXNEcm9wZG93blRvZ2dsZWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIHtpc0Ryb3Bkb3duVG9nZ2xlZCAmJiA8T3ZlcmxheURhcmtlbmVyIG9uQ2xpY2s9e3RvZ2dsZU1lbnVEcm9wZG93bn0gLz59XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJY29uc1JpZ2h0TWVudSh7IGlzRHJvcGRvd25Ub2dnbGVkLCB0b2dnbGVNZW51RHJvcGRvd24gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9faWNvbnMtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3NlYXJjaC1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNlYXJjaFwiIGNsYXNzTmFtZT1cImhlYWRlcl9faWNvblwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3VzZXItYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidXNlclwiIGNsYXNzTmFtZT1cImhlYWRlcl9faWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX21lbnUtYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlTWVudURyb3Bkb3dufT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiYmFyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGVhZGVyX19tZW51LWljb24gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEcm9wZG93blRvZ2dsZWQgPyBcImhlYWRlcl9fbWVudS1pY29uLS1hY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaGVhZGVyX19tZW51LXRpdGxlXCI+TUVOSVU8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19pY29ucy1yaWdodCxcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fc2VhcmNoLWJ1dHRvbixcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX3VzZXItYnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX2ljb24sXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1pY29uLS1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWig5MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNpdGVMb2dvKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTdcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI1N1wiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTcgNTdcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXJfX3NpdGUtbG9nb1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0yOC41IDU3QzQ0LjI0MDEgNTcgNTcgNDQuMjQwMSA1NyAyOC41QzU3IDEyLjc1OTkgNDQuMjQwMSAwIDI4LjUgMEMxMi43NTk5IDAgMCAxMi43NTk5IDAgMjguNUMwIDQ0LjI0MDEgMTIuNzU5OSA1NyAyOC41IDU3WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidmFyKC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5KVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTIxLjk0NjcgMjEuNTA0QzIxLjE1NzMgMjEuNTA0IDIwLjQ4NTMgMjEuMjI2NyAxOS45MzA3IDIwLjY3MkMxOS4zNzYgMjAuMTE3MyAxOS4wOTg3IDE5LjQ0NTMgMTkuMDk4NyAxOC42NTZDMTkuMDk4NyAxNy44NjY3IDE5LjM3NiAxNy4xOTQ3IDE5LjkzMDcgMTYuNjRDMjAuNDg1MyAxNi4wODUzIDIxLjE1NzMgMTUuODA4IDIxLjk0NjcgMTUuODA4QzIyLjczNiAxNS44MDggMjMuNDA4IDE2LjA4NTMgMjMuOTYyNyAxNi42NEMyNC41MTczIDE3LjE5NDcgMjQuNzk0NyAxNy44NjY3IDI0Ljc5NDcgMTguNjU2QzI0Ljc5NDcgMTkuNDQ1MyAyNC41MTczIDIwLjExNzMgMjMuOTYyNyAyMC42NzJDMjMuNDA4IDIxLjIyNjcgMjIuNzM2IDIxLjUwNCAyMS45NDY3IDIxLjUwNFpNMjQuNTM4NyAyMy4wNzJWNDBIMTkuMzU0N1YyMy4wNzJIMjQuNTM4N1pNMzcuMTA1NyAzNi4wNjRIMzMuMTA1N1YzMC40OTZIMjcuNTA1N1YyNi41MjhIMzMuMTA1N1YyMS4wODhIMzcuMTA1N1YyNi41MjhINDIuNjczN1YzMC40OTZIMzcuMTA1N1YzNi4wNjRaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ2YXIoLS10ZXh0LXNlY29uZGFyeSlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlcl9fc2l0ZS1sb2dvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\_globals\\\\Header.js */"));
}

/***/ }),

/***/ "./components/_globals/LoadingBar.js":
/*!*******************************************!*\
  !*** ./components/_globals/LoadingBar.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadingBar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\_globals\\LoadingBar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function LoadingBar() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1023741959" + " " + "loading-bar",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1023741959",
    __self: this
  }, ".loading-bar.jsx-1023741959{position:fixed;top:0;z-index:200;background-color:var(--accent-tertiary);box-shadow:0px 0px 5px 0px var(--accent-tertiary);width:0%;display:none;height:5px;-webkit-transition:opacity 500ms linear;transition:opacity 500ms linear;}.loading-bar--is-loading.jsx-1023741959{display:block;-webkit-animation:loading-jsx-1023741959 2000ms ease forwards;animation:loading-jsx-1023741959 2000ms ease forwards;}@-webkit-keyframes loading-jsx-1023741959{from{width:0%;}to{width:100%;}}@keyframes loading-jsx-1023741959{from{width:0%;}to{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxMb2FkaW5nQmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUl3QixBQUdvQyxBQVlELEFBTUQsQUFHRSxTQUZmLEVBR0EsR0FUdUMsQ0FaakMsTUFDTSxZQUM0Qix3Q0FDVSxrREFDekMsT0FTYixFQVJpQixhQUNGLFdBQ3FCLHdFQUNwQyIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcTG9hZGluZ0Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvYWRpbmdCYXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGluZy1iYXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmxvYWRpbmctYmFyIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDIwMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtdGVydGlhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDBweCB2YXIoLS1hY2NlbnQtdGVydGlhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgNTAwbXMgbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5sb2FkaW5nLWJhci0taXMtbG9hZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBsb2FkaW5nIDIwMDBtcyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgbG9hZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\_globals\\\\LoadingBar.js */"));
}

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
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\utils\\CheckmarkSolved.js";


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
  }, ".checkmark-solved{display:inline-block;background-color:var(--accent-primary);color:var(--text-button);padding:5px;border-radius:50%;width:22px !important;height:22px !important;margin-left:15px;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXHV0aWxzXFxDaGVja21hcmtTb2x2ZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTStCLEFBRzBDLHFCQUNrQix1Q0FDZCx5QkFDYixZQUNNLGtCQUNJLHNCQUNDLHVCQUNOLGlCQUNLLHNCQUMxQiIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFx1dGlsc1xcQ2hlY2ttYXJrU29sdmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2ttYXJrU29sdmVkKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJjaGVja1wiIGNsYXNzTmFtZT1cImNoZWNrbWFyay1zb2x2ZWRcIiAvPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmNoZWNrbWFyay1zb2x2ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYnV0dG9uKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\utils\\\\CheckmarkSolved.js */"));
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
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\utils\\ErrorCircle.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ErrorCircle() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "times-circle",
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
  }, ".error-circle{background-color:var(--accent-failure-primary);border-radius:50%;padding:5px;width:22px !important;height:22px !important;vertical-align:middle;margin:0 15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXHV0aWxzXFxFcnJvckNpcmNsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNK0IsQUFHb0UsK0NBQzdCLGtCQUNOLFlBQ1Usc0JBQ0MsdUJBQ0Qsc0JBQ1IsY0FDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcdXRpbHNcXEVycm9yQ2lyY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3JDaXJjbGUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInRpbWVzLWNpcmNsZVwiIGNsYXNzTmFtZT1cImVycm9yLWNpcmNsZVwiIC8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuZXJyb3ItY2lyY2xlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtZmFpbHVyZS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\utils\\\\ErrorCircle.js */"));
}

/***/ }),

/***/ "./components/utils/OverlayDarkener.js":
/*!*********************************************!*\
  !*** ./components/utils/OverlayDarkener.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OverlayDarkener; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\utils\\OverlayDarkener.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
function OverlayDarkener({
  onClick
}) {
  return __jsx("div", {
    className: "overlay-darkener",
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


const iconNames = ["faSearch", "faUser", "faBars", "faAngleDown", "faCheck", "faBolt", "faLightbulb", "faSignInAlt", "faSignOutAlt", "faEllipsisH", "faCoffee", "faTools", "faMountain", "faEnvelope", "faPhone", "faArrowRight", "faArrowLeft", "faExternalLinkAlt", "faFilter", "faClock", "faMemory", "faCodeBranch", "faUpload", "faTimesCircle"];
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
/*! exports provided: default, ThemeContext, ShowAlertContext, LoggedInDataContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAlertContext", function() { return ShowAlertContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggedInDataContext", function() { return LoggedInDataContext; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_hooks_componentDidMount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/_hooks/componentDidMount */ "./components/_hooks/componentDidMount.js");
/* harmony import */ var _configs_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configs/icons */ "./configs/icons.js");
/* harmony import */ var _styles_mainStyling__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/mainStyling */ "./styles/mainStyling.js");
/* harmony import */ var _components_globals_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/_globals/Header */ "./components/_globals/Header.js");
/* harmony import */ var _components_globals_Contact__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/_globals/Contact */ "./components/_globals/Contact.js");
/* harmony import */ var _components_globals_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/_globals/Footer */ "./components/_globals/Footer.js");
/* harmony import */ var _components_globals_AlertNotification__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/_globals/AlertNotification */ "./components/_globals/AlertNotification.js");
/* harmony import */ var _components_globals_LoadingBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/_globals/LoadingBar */ "./components/_globals/LoadingBar.js");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! cookie */ "cookie");
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_12__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\pages\\_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











const ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(true);
const ShowAlertContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);
const LoggedInDataContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);


next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on("routeChangeStart", loadingStart);
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on("routeChangeComplete", loadingFinished);
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on("routeChangeError", loadingFinished);
function App({
  Component,
  pageProps
}) {
  const {
    0: isLightTheme,
    1: setTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true);
  Object(_components_hooks_componentDidMount__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    const localTheme = window.localStorage.getItem("theme") || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(localTheme === "light");
  });
  const {
    0: alert,
    1: modifyAlert
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    isVisible: false,
    props: {
      type: 1,
      children: ""
    }
  });
  const {
    0: isAuthenticated,
    1: setAuthenticatedTo
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  Object(_components_hooks_componentDidMount__WEBPACK_IMPORTED_MODULE_3__["default"])(() => {
    const accessTokenCookie = document.cookie && Object(cookie__WEBPACK_IMPORTED_MODULE_11__["parse"])(document.cookie);
    if (!isAuthenticated && accessTokenCookie["_accessToken"]) setAuthenticatedTo(true);
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, alert.isVisible && __jsx(_components_globals_AlertNotification__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: alert.props.type,
    alertToggleHandler: () => modifyAlert(_objectSpread({}, alert, {
      isVisible: false
    })),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, alert.props.children), __jsx(_components_globals_LoadingBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), __jsx(ThemeContext.Provider, {
    value: {
      isLightTheme,
      setTheme
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(_components_globals_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  })), __jsx(LoggedInDataContext.Provider, {
    value: {
      isAuthenticated,
      setAuthenticatedTo
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, __jsx(ShowAlertContext.Provider, {
    value: modifyAlert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx(Component, _extends({}, pageProps, {
    className: `jsx-${_styles_mainStyling__WEBPACK_IMPORTED_MODULE_5__["default"].__hash}` + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  })))), __jsx(_components_globals_Contact__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 13
    }
  }), __jsx(_components_globals_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_mainStyling__WEBPACK_IMPORTED_MODULE_5__["default"].__hash,
    __self: this
  }, _styles_mainStyling__WEBPACK_IMPORTED_MODULE_5__["default"]));
}


function loadingStart() {
  const loadingBar = document.querySelector(".loading-bar");
  loadingBar.classList.add("loading-bar--is-loading");
}

function loadingFinished() {
  const loadingBar = document.querySelector(".loading-bar");
  if (loadingBar) loadingBar.classList.remove("loading-bar--is-loading");
}

/***/ }),

/***/ "./styles/mainStyling.js":
/*!*******************************!*\
  !*** ./styles/mainStyling.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _defaultExport = new String("*{box-sizing:border-box;}html,body{margin:0;padding:0;font-family:\"Red Hat Display\",Arial,sans-serif;background-color:var(--background-primary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;}h1,h2,h3,p{margin:0;padding:0;}h1,h2,h3{font-weight:800;}h1{font-size:var(--font-large);}h2{font-size:var(--font-medium);}h3{font-size:var(--font-small);}a{color:inherit;font-weight:800;}ul{margin:0;}hr{border-color:var(--background-tertiary);border-style:solid;}.overlay-darkener{width:100%;height:100%;position:fixed;top:0;left:0;background-color:rgba(0,0,0,0.8);z-index:50;-webkit-animation:fadeIn 300ms ease forwards;animation:fadeIn 300ms ease forwards;}@-webkit-keyframes fadeIn{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}button{width:170px;height:45px;display:inline-block;box-shadow:var(--box-shadow);text-transform:uppercase;text-align:center;line-height:35px;border:none;font-family:\"Red Hat Display\";border-radius:50px;cursor:pointer;-webkit-transition-property:box-shadow,opacity;transition-property:box-shadow,opacity;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-timing-function:ease;transition-timing-function:ease;}button:disabled{opacity:0.2;}button:focus{outline:none;}button:hover{box-shadow:var(--box-shadow-active);}button svg{margin-left:10px;}.error-message{color:var(--accent-quaternary);text-align:right;opacity:0;padding-left:20px;-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px);-webkit-animation:fadeFromRight 300ms ease forwards;animation:fadeFromRight 300ms ease forwards;}@-webkit-keyframes fadeFromRight{from{opacity:0;-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px);}to{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}}@keyframes fadeFromRight{from{opacity:0;-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px);}to{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}}.button--primary{background-color:var(--accent-primary);color:var(--text-button);height:40px;}.button--secondary{background-color:var(--background-quaternary);color:var(--accent-primary);height:40px;}.button--tertiary{background-color:transparent;box-shadow:none;font-weight:bold;-webkit-transition:color 300ms linear;transition:color 300ms linear;color:var(--text-primary);width:auto;margin:0 25px;}.button--tertiary:hover{box-shadow:none;color:var(--accent-quaternary);}.underlined{-webkit-text-decoration:underline;text-decoration:underline;}.button--outline{background-color:transparent;color:var(--text-primary);border:1px solid var(--background-quaternary);border-radius:50px;box-shadow:none;width:150px;line-height:32px;height:35px;text-transform:initial;-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;}.button--outline:hover{box-shadow:none;background-color:var(--background-tertiary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXHN0eWxlc1xcbWFpblN0eWxpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRXlCLEFBRytCLEFBS2IsQUFXQSxBQU9PLEFBSVksQUFHQyxBQUdELEFBSWQsQUFLTCxBQUkrQixBQUs3QixBQVlHLEFBR0EsQUFLRixBQWlCQSxBQUlDLEFBR3VCLEFBSW5CLEFBSWMsQUFVakIsQUFJQSxBQU15QixBQU1PLEFBTWpCLEFBVWIsQUFLVSxBQUlHLEFBYWIsU0FqS04sQUFXQSxBQTBCZCxDQXFCSSxBQUdBLEFBK0MrQixBQUlILENBbEVoQixDQW9CQSxBQWlCaEIsQ0FJQSxDQXZEb0IsRUFkcEIsQUEwSG1DLEFBc0JhLENBcEVoRCxFQTdGcUQsQUFXckQsR0FqQkEsQ0FvRG1CLENBb0JNLElBN0N6QixBQU1BLENBSEEsQUF5R29CLEFBbUJVLENBcEg5QixDQWlFcUIsS0FSckIsRUExQ1UsQ0FzRW1CLENBN0VOLElBUVosQ0FtQnNCLEFBK0RaLENBUFcsQ0FpQmhDLENBMUNjLEdBakQwQixJQW9HVSxHQWxENUIsQ0ExRHRCLENBdUdBLEFBa0JBLEVBL0JrQyxFQWJsQixFQXJIK0IsUUFtRWxCLEFBd0RiLEVBeEJlLEFBbUIvQixRQXJFZSxFQTJFZixRQWJJLENBN0RxQyxJQWtCbkIsRUFpRkMsRUExQ25CLE1BMUd1QyxRQW9FdEIsR0FpRkQsVUFuQlUsSUE3RGQsRUFpRkEsVUFoRmtCLEVBaUZiLFFBcEJOLFNBcUJDLEVBcEJFLEVBakM4QixPQTVCekIsQ0FyQnZCLEFBdUcyQixJQXBCM0IsY0FwSUEsQUF1RW1CLEtBa0Z3QixVQWpGQyx1REEyQjVDLHFCQXVEQSxVQWpGOEIsNERBQ00sd0VBQ3BDIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXHN0eWxlc1xcbWFpblN0eWxpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NzLmdsb2JhbGBcclxuICAgICoge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcblxyXG4gICAgaHRtbCxcclxuICAgIGJvZHkge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJlZCBIYXQgRGlzcGxheVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICBoMSxcclxuICAgIGgyLFxyXG4gICAgaDMsXHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICBoMSxcclxuICAgIGgyLFxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1sYXJnZSk7XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LW1lZGl1bSk7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaHIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeSk7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIH1cclxuXHJcbiAgICAub3ZlcmxheS1kYXJrZW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgICAgei1pbmRleDogNTA7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gMzAwbXMgZWFzZSBmb3J3YXJkcztcclxuICAgIH1cclxuXHJcbiAgICBAa2V5ZnJhbWVzIGZhZGVJbiB7XHJcbiAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHtcclxuICAgICAgICB3aWR0aDogMTcwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUmVkIEhhdCBEaXNwbGF5XCI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYm94LXNoYWRvdywgb3BhY2l0eTtcclxuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzMDBtcztcclxuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b246ZGlzYWJsZWQge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuMjtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b246Zm9jdXMge1xyXG4gICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBidXR0b246aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3ctYWN0aXZlKTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24gc3ZnIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1xdWF0ZXJuYXJ5KTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlRnJvbVJpZ2h0IDMwMG1zIGVhc2UgZm9yd2FyZHM7XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyBmYWRlRnJvbVJpZ2h0IHtcclxuICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0byB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbi0tcHJpbWFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJ1dHRvbik7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24tLXNlY29uZGFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uLS10ZXJ0aWFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBsaW5lYXI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luOiAwIDI1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbi0tdGVydGlhcnk6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1xdWF0ZXJuYXJ5KTtcclxuICAgIH1cclxuXHJcbiAgICAudW5kZXJsaW5lZCB7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbi0tb3V0bGluZSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbi0tb3V0bGluZTpob3ZlciB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxuICAgIH1cclxuYDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\styles\\\\mainStyling.js */");

_defaultExport.__hash = "3593504357";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ "./styles/theme.js":
/*!*************************!*\
  !*** ./styles/theme.js ***!
  \*************************/
/*! exports provided: light, dark */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "light", function() { return light; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dark", function() { return dark; });
const staticThemeVariables = `
    --accent-primary: #56f55c;
    --accent-secondary: #3db8ff;
    --accent-tertiary: #ffcc00;
    --accent-quaternary: #e43dff;

    --accent-success: #a7f7ab;
    --accent-failure-primary: #ff5e5e;
    --accent-failure-secondary: #ffa9a9;

    --difficulty-1: var(--accent-primary);
    --difficulty-2: var(--accent-tertiary);
    --difficulty-3: var(--accent-secondary);
    --difficulty-4: var(--accent-quaternary);

    --text-button: #2a2a2a;

    --font-larger: 5rem;
    --font-large: 3rem;
    --font-medium: 2rem;
    --font-small: 1.3rem;
    --font-smaller: 1rem;

    --contact: #2a2a2a;
    --footer: #1e1e1e;
    --box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.09);
    --box-shadow-active: 0 4px 15px 5px rgba(0, 0, 0, 0.2);
`;
const light = new String(`:root{--background-primary:#fff;--background-secondary:#f5f5f5;--background-tertiary:#dadada;--background-quaternary:#2a2a2a;--text-primary:#2a2a2a;--text-secondary:#f1f1f1;--text-tertiary:#686868;${staticThemeVariables};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXHN0eWxlc1xcdGhlbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0IrQixBQUdtQywwQkFDSywrQkFDRCw4QkFDRSxnQ0FFVCx1QkFDRSx5QkFDRCx3QkFHN0IsNkJBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcc3R5bGVzXFx0aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcblxyXG5jb25zdCBzdGF0aWNUaGVtZVZhcmlhYmxlcyA9IGBcclxuICAgIC0tYWNjZW50LXByaW1hcnk6ICM1NmY1NWM7XHJcbiAgICAtLWFjY2VudC1zZWNvbmRhcnk6ICMzZGI4ZmY7XHJcbiAgICAtLWFjY2VudC10ZXJ0aWFyeTogI2ZmY2MwMDtcclxuICAgIC0tYWNjZW50LXF1YXRlcm5hcnk6ICNlNDNkZmY7XHJcblxyXG4gICAgLS1hY2NlbnQtc3VjY2VzczogI2E3ZjdhYjtcclxuICAgIC0tYWNjZW50LWZhaWx1cmUtcHJpbWFyeTogI2ZmNWU1ZTtcclxuICAgIC0tYWNjZW50LWZhaWx1cmUtc2Vjb25kYXJ5OiAjZmZhOWE5O1xyXG5cclxuICAgIC0tZGlmZmljdWx0eS0xOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAtLWRpZmZpY3VsdHktMjogdmFyKC0tYWNjZW50LXRlcnRpYXJ5KTtcclxuICAgIC0tZGlmZmljdWx0eS0zOiB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcclxuICAgIC0tZGlmZmljdWx0eS00OiB2YXIoLS1hY2NlbnQtcXVhdGVybmFyeSk7XHJcblxyXG4gICAgLS10ZXh0LWJ1dHRvbjogIzJhMmEyYTtcclxuXHJcbiAgICAtLWZvbnQtbGFyZ2VyOiA1cmVtO1xyXG4gICAgLS1mb250LWxhcmdlOiAzcmVtO1xyXG4gICAgLS1mb250LW1lZGl1bTogMnJlbTtcclxuICAgIC0tZm9udC1zbWFsbDogMS4zcmVtO1xyXG4gICAgLS1mb250LXNtYWxsZXI6IDFyZW07XHJcblxyXG4gICAgLS1jb250YWN0OiAjMmEyYTJhO1xyXG4gICAgLS1mb290ZXI6ICMxZTFlMWU7XHJcbiAgICAtLWJveC1zaGFkb3c6IDBweCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xyXG4gICAgLS1ib3gtc2hhZG93LWFjdGl2ZTogMCA0cHggMTVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpZ2h0ID0gY3NzLmdsb2JhbGBcclxuICAgIDpyb290IHtcclxuICAgICAgICAtLWJhY2tncm91bmQtcHJpbWFyeTogI2ZmZjtcclxuICAgICAgICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5OiAjZjVmNWY1O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC10ZXJ0aWFyeTogI2RhZGFkYTtcclxuICAgICAgICAtLWJhY2tncm91bmQtcXVhdGVybmFyeTogIzJhMmEyYTtcclxuXHJcbiAgICAgICAgLS10ZXh0LXByaW1hcnk6ICMyYTJhMmE7XHJcbiAgICAgICAgLS10ZXh0LXNlY29uZGFyeTogI2YxZjFmMTtcclxuICAgICAgICAtLXRleHQtdGVydGlhcnk6ICM2ODY4Njg7XHJcblxyXG4gICAgICAgICR7c3RhdGljVGhlbWVWYXJpYWJsZXN9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgZGFyayA9IGNzcy5nbG9iYWxgXHJcbiAgICA6cm9vdCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLXByaW1hcnk6ICMxZTFlMWU7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLXNlY29uZGFyeTogIzJhMmEyYTtcclxuICAgICAgICAtLWJhY2tncm91bmQtdGVydGlhcnk6ICM0MzQ1NDU7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnk6ICM0MDQwNDA7XHJcblxyXG4gICAgICAgIC0tdGV4dC1wcmltYXJ5OiAjZjFmMWYxO1xyXG4gICAgICAgIC0tdGV4dC1zZWNvbmRhcnk6ICNlNmU2ZTY7XHJcbiAgICAgICAgLS10ZXh0LXRlcnRpYXJ5OiAjNzc3Nzc3O1xyXG5cclxuICAgICAgICAke3N0YXRpY1RoZW1lVmFyaWFibGVzfVxyXG4gICAgfVxyXG5gO1xyXG4iXX0= */
/*@ sourceURL=C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\styles\\theme.js */`);
light.__hash = "4283881190";
const dark = new String(`:root{--background-primary:#1e1e1e;--background-secondary:#2a2a2a;--background-tertiary:#434545;--background-quaternary:#404040;--text-primary:#f1f1f1;--text-secondary:#e6e6e6;--text-tertiary:#777777;${staticThemeVariables};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXHN0eWxlc1xcdGhlbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEM4QixBQUdzQyw2QkFDRSwrQkFDRCw4QkFDRSxnQ0FFVCx1QkFDRSx5QkFDRCx3QkFHN0IsNkJBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcc3R5bGVzXFx0aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcblxyXG5jb25zdCBzdGF0aWNUaGVtZVZhcmlhYmxlcyA9IGBcclxuICAgIC0tYWNjZW50LXByaW1hcnk6ICM1NmY1NWM7XHJcbiAgICAtLWFjY2VudC1zZWNvbmRhcnk6ICMzZGI4ZmY7XHJcbiAgICAtLWFjY2VudC10ZXJ0aWFyeTogI2ZmY2MwMDtcclxuICAgIC0tYWNjZW50LXF1YXRlcm5hcnk6ICNlNDNkZmY7XHJcblxyXG4gICAgLS1hY2NlbnQtc3VjY2VzczogI2E3ZjdhYjtcclxuICAgIC0tYWNjZW50LWZhaWx1cmUtcHJpbWFyeTogI2ZmNWU1ZTtcclxuICAgIC0tYWNjZW50LWZhaWx1cmUtc2Vjb25kYXJ5OiAjZmZhOWE5O1xyXG5cclxuICAgIC0tZGlmZmljdWx0eS0xOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAtLWRpZmZpY3VsdHktMjogdmFyKC0tYWNjZW50LXRlcnRpYXJ5KTtcclxuICAgIC0tZGlmZmljdWx0eS0zOiB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcclxuICAgIC0tZGlmZmljdWx0eS00OiB2YXIoLS1hY2NlbnQtcXVhdGVybmFyeSk7XHJcblxyXG4gICAgLS10ZXh0LWJ1dHRvbjogIzJhMmEyYTtcclxuXHJcbiAgICAtLWZvbnQtbGFyZ2VyOiA1cmVtO1xyXG4gICAgLS1mb250LWxhcmdlOiAzcmVtO1xyXG4gICAgLS1mb250LW1lZGl1bTogMnJlbTtcclxuICAgIC0tZm9udC1zbWFsbDogMS4zcmVtO1xyXG4gICAgLS1mb250LXNtYWxsZXI6IDFyZW07XHJcblxyXG4gICAgLS1jb250YWN0OiAjMmEyYTJhO1xyXG4gICAgLS1mb290ZXI6ICMxZTFlMWU7XHJcbiAgICAtLWJveC1zaGFkb3c6IDBweCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xyXG4gICAgLS1ib3gtc2hhZG93LWFjdGl2ZTogMCA0cHggMTVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpZ2h0ID0gY3NzLmdsb2JhbGBcclxuICAgIDpyb290IHtcclxuICAgICAgICAtLWJhY2tncm91bmQtcHJpbWFyeTogI2ZmZjtcclxuICAgICAgICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5OiAjZjVmNWY1O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC10ZXJ0aWFyeTogI2RhZGFkYTtcclxuICAgICAgICAtLWJhY2tncm91bmQtcXVhdGVybmFyeTogIzJhMmEyYTtcclxuXHJcbiAgICAgICAgLS10ZXh0LXByaW1hcnk6ICMyYTJhMmE7XHJcbiAgICAgICAgLS10ZXh0LXNlY29uZGFyeTogI2YxZjFmMTtcclxuICAgICAgICAtLXRleHQtdGVydGlhcnk6ICM2ODY4Njg7XHJcblxyXG4gICAgICAgICR7c3RhdGljVGhlbWVWYXJpYWJsZXN9XHJcbiAgICB9XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgZGFyayA9IGNzcy5nbG9iYWxgXHJcbiAgICA6cm9vdCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLXByaW1hcnk6ICMxZTFlMWU7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLXNlY29uZGFyeTogIzJhMmEyYTtcclxuICAgICAgICAtLWJhY2tncm91bmQtdGVydGlhcnk6ICM0MzQ1NDU7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnk6ICM0MDQwNDA7XHJcblxyXG4gICAgICAgIC0tdGV4dC1wcmltYXJ5OiAjZjFmMWYxO1xyXG4gICAgICAgIC0tdGV4dC1zZWNvbmRhcnk6ICNlNmU2ZTY7XHJcbiAgICAgICAgLS10ZXh0LXRlcnRpYXJ5OiAjNzc3Nzc3O1xyXG5cclxuICAgICAgICAke3N0YXRpY1RoZW1lVmFyaWFibGVzfVxyXG4gICAgfVxyXG5gO1xyXG4iXX0= */
/*@ sourceURL=C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\styles\\theme.js */`);
dark.__hash = "3634251434";

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

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

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

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map