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

/***/ "./components/globals/Contact.js":
/*!***************************************!*\
  !*** ./components/globals/Contact.js ***!
  \***************************************/
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
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\globals\\Contact.js";


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
  }, ".contact.jsx-1965023881{width:100%;padding:100px 0;background-color:var(--contact);color:var(--text-secondary);-webkit-transition:color,background-color 300ms ease;transition:color,background-color 300ms ease;text-align:center;}.contact__heading.jsx-1965023881{margin:0 10px 50px;}@media screen and (max-width:825px){.contact__heading.jsx-1965023881{font-size:var(--font-medium);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXENvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJ3QixBQUdnQyxBQVNRLEFBS2MsV0FiakIsUUFTcEIsUUFSb0MsRUFhaEMsOEJBWjRCLDRCQUNrQixrR0FDNUIsa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXENvbnRhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0KCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWN0XCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb250YWN0X19oZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICBWcmVpIHPEgyBpbnRyaSDDrm4gY29udGFjdCBjdSBub2k/XHJcbiAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgIDxDb250YWN0UGFuZWwgdGl0bGU9XCJlLW1haWxcIiBpY29uPVwiZW52ZWxvcGVcIj5cclxuICAgICAgICAgICAgICAgIDxwPnNhbXBsZW1haWxAZXhhbXBsZS5jb208L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5zYW1wbGVtYWlsQGV4YW1wbGUuY29tPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+c2FtcGxlbWFpbEBleGFtcGxlLmNvbTwvcD5cclxuICAgICAgICAgICAgPC9Db250YWN0UGFuZWw+XHJcbiAgICAgICAgICAgIDxDb250YWN0UGFuZWwgdGl0bGU9XCJ0ZWxlZm9uXCIgaWNvbj1cInBob25lXCI+XHJcbiAgICAgICAgICAgICAgICA8cD4rMDcweHh4MDAwMDB4eHgwMDAwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+KzA3MHh4eDAwMDAweHh4MDAwMDwvcD5cclxuICAgICAgICAgICAgICAgIDxwPiswNzB4eHgwMDAwMHh4eDAwMDA8L3A+XHJcbiAgICAgICAgICAgIDwvQ29udGFjdFBhbmVsPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29udGFjdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdF9faGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWN0X19oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LW1lZGl1bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29udGFjdFBhbmVsKHsgdGl0bGUsIGljb24sIGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0X19jb250YWN0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9fcGFuZWwtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtpY29ufSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNvbnRhY3RfX3BhbmVsLWhlYWRpbmdcIj57dGl0bGUudG9VcHBlckNhc2UoKX08L2gzPlxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiY29udGFjdF9fcGFuZWwtaHJcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RfX3BhbmVsLWNvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX2NvbnRhY3QtcGFuZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWN0X19jb250YWN0LXBhbmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19wYW5lbC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19wYW5lbC1pY29uLFxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX3BhbmVsLWhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdF9fcGFuZWwtaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdF9fcGFuZWwtaHIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19jb250YWN0LXBhbmVsIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\Contact.js */"));
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
  }, ".contact__contact-panel{display:inline-block;min-width:30%;margin:50px;text-align:left;}@media screen and (max-width:825px){.contact__contact-panel{min-width:100%;margin:0;padding:50px;}}.contact__panel-icon{color:var(--accent-primary);}.contact__panel-icon,.contact__panel-heading{display:inline-block;margin-right:20px;vertical-align:middle;}.contact__panel-heading{-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}.contact__panel-hr{margin:20px 0;border:1px solid;}.contact__contact-panel p{color:var(--text-secondary);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin:2px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXENvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUQrQixBQUcwQyxBQVFGLEFBT1MsQUFLUCxBQU1GLEFBSUwsQUFLYyxjQUpYLENBdEJKLE1BUkMsQUFvQkksR0FYRCxJQU1yQixBQW9CdUIsR0FKdkIsSUE5QmdCLEVBU1osRUFXc0IsUUFuQk4sY0FvQnBCLEVBbkJBLDhCQXVCQSw0QkFVaUIsYUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcZ2xvYmFsc1xcQ29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNvbnRhY3RfX2hlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIFZyZWkgc8SDIGludHJpIMOubiBjb250YWN0IGN1IG5vaT9cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPENvbnRhY3RQYW5lbCB0aXRsZT1cImUtbWFpbFwiIGljb249XCJlbnZlbG9wZVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+c2FtcGxlbWFpbEBleGFtcGxlLmNvbTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPnNhbXBsZW1haWxAZXhhbXBsZS5jb208L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5zYW1wbGVtYWlsQGV4YW1wbGUuY29tPC9wPlxyXG4gICAgICAgICAgICA8L0NvbnRhY3RQYW5lbD5cclxuICAgICAgICAgICAgPENvbnRhY3RQYW5lbCB0aXRsZT1cInRlbGVmb25cIiBpY29uPVwicGhvbmVcIj5cclxuICAgICAgICAgICAgICAgIDxwPiswNzB4eHgwMDAwMHh4eDAwMDA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4rMDcweHh4MDAwMDB4eHgwMDAwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+KzA3MHh4eDAwMDAweHh4MDAwMDwvcD5cclxuICAgICAgICAgICAgPC9Db250YWN0UGFuZWw+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250YWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCA1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3RfX2hlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtbWVkaXVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBDb250YWN0UGFuZWwoeyB0aXRsZSwgaWNvbiwgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RfX2NvbnRhY3QtcGFuZWxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0X19wYW5lbC1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ljb259IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiY29udGFjdF9fcGFuZWwtaGVhZGluZ1wiPnt0aXRsZS50b1VwcGVyQ2FzZSgpfTwvaDM+XHJcbiAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJjb250YWN0X19wYW5lbC1oclwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9fcGFuZWwtY29udGVudFwiPntjaGlsZHJlbn08L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdF9fY29udGFjdC1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMzAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhY3RfX2NvbnRhY3QtcGFuZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX3BhbmVsLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX3BhbmVsLWljb24sXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdF9fcGFuZWwtaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19wYW5lbC1oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19wYW5lbC1ociB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX2NvbnRhY3QtcGFuZWwgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\Contact.js */"));
}

/***/ }),

/***/ "./components/globals/DropdownMenu.js":
/*!********************************************!*\
  !*** ./components/globals/DropdownMenu.js ***!
  \********************************************/
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
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\globals\\DropdownMenu.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function DropdownMenu({
  isDropdownToggled
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-1709651375" + " " + `dropdown-menu-header ${isDropdownToggled ? "dropdown-menu-header--active " : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "jsx-1709651375" + " " + "dropdown-menu-header__ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/exercitii",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "jsx-1709651375" + " " + "dropdown-menu-header__main-li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }, "Exercitii")), __jsx("hr", {
    className: "jsx-1709651375" + " " + "dropdown-menu-header__hr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }), __jsx(DropdownMenuAccordion, {
    title: "Resurse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 21
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
    className: "jsx-1709651375" + " " + "dropdown-menu-header__hr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }), __jsx(ThemeConsumer, {
    Component: ThemeChangerButton,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }), __jsx("hr", {
    className: "jsx-1709651375" + " " + "dropdown-menu-header__hr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }), __jsx("li", {
    className: "jsx-1709651375" + " " + "dropdown-menu-header__main-li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, "Mod proiector"), __jsx("hr", {
    className: "jsx-1709651375" + " " + "dropdown-menu-header__hr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx("li", {
    className: "jsx-1709651375" + " " + "dropdown-menu-header__main-li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  }, "Detalii cont"))), __jsx(ThemeConsumer, {
    Component: ThemeStyleSheet,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1709651375",
    __self: this
  }, ".dropdown-menu-header{width:220px;height:calc(100vh - 60px);position:fixed;right:0;bottom:0;background-color:var(--background-secondary);z-index:-1;box-shadow:-12px 13px 9px rgba(0,0,0,0.1);overflow-y:auto;padding-top:30px;-webkit-transform:translateX(230px) translateZ(0);-ms-transform:translateX(230px) translateZ(0);transform:translateX(230px) translateZ(0);-webkit-transition:color,background-color, -webkit-transform 300ms ease;-webkit-transition:color,background-color, transform 300ms ease;transition:color,background-color, transform 300ms ease;}.dropdown-menu-header--active{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}.dropdown-menu-header__hr{width:85%;}.dropdown-menu-header__ul{padding-top:0;padding-left:5px;list-style-type:none;}.dropdown-menu-header__main-li{font-weight:bold;font-size:var(--font-small);cursor:pointer;position:relative;padding:10px 0 10px 15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.dropdown-menu-header__main-li:hover,.dropdown-menu-header__secondary-li:hover{background-color:var(--background-primary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;}.dropdown-menu-header__main-li:hover::before,.dropdown-menu-header__secondary-li:hover::before{content:\"\";width:5px;height:100%;background-color:var(--accent-primary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;position:absolute;left:0;top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXERyb3Bkb3duTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Q21DLEFBR3FDLEFBZ0JZLEFBSWQsQUFJSSxBQU1HLEFBVTBCLEFBTWhDLFVBekJmLENBMEJjLENBOUNnQixFQXdCVCxHQU1XLElBaUJoQixVQXRCUyxFQXVCa0IsS0EvQ3hCLEtBdUN3QixFQVR4QixPQUxuQixDQXhCWSxPQThCVSxDQTdCVCxTQUNvQyxFQTZDTixNQWhCZCxNQWpCN0IsbUJBa0JxQixZQTdCTixXQUNrQyxHQW1DakQsNkJBU3NCLFVBM0NGLFFBNENULE9BQ0QsQ0E1Q1csSUEyQnJCLENBa0JBLFlBNUM4QywwSUFFbEIsZ01BQzVCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXERyb3Bkb3duTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHsgbGlnaHQsIGRhcmsgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XHJcbmltcG9ydCB7IFRoZW1lQ29udGV4dCB9IGZyb20gXCIuLi8uLi9wYWdlcy9fYXBwXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEcm9wZG93bk1lbnUoeyBpc0Ryb3Bkb3duVG9nZ2xlZCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duLW1lbnUtaGVhZGVyICR7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEcm9wZG93blRvZ2dsZWQgPyBcImRyb3Bkb3duLW1lbnUtaGVhZGVyLS1hY3RpdmUgXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX191bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXhlcmNpdGlpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRXhlcmNpdGlpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9faHJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVBY2NvcmRpb24gdGl0bGU9XCJSZXN1cnNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlTGk6IFwiQ2xhc2EgSVhcIiwgaHJlZjogXCIvcmVzdXJzZS9peFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlTGk6IFwiQ2xhc2EgWFwiLCBocmVmOiBcIi9yZXN1cnNlL3hcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyB0aXRsZUxpOiBcIkNsYXNhIFhJXCIsIGhyZWY6IFwiL3Jlc3Vyc2UveGlcIiB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRoZW1lQ29uc3VtZXIgQ29tcG9uZW50PXtUaGVtZUNoYW5nZXJCdXR0b259IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1vZCBwcm9pZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9faHJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIERldGFsaWkgY29udFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8VGhlbWVDb25zdW1lciBDb21wb25lbnQ9e1RoZW1lU3R5bGVTaGVldH0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjBweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogLTEycHggMTNweCA5cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDIzMHB4KSB0cmFuc2xhdGVaKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciwgYmFja2dyb3VuZC1jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyLS1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fdWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGk6aG92ZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19zZWNvbmRhcnktbGk6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGk6aG92ZXI6OmJlZm9yZSxcclxuICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX3NlY29uZGFyeS1saTpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudUFjY29yZGlvbih7IHRpdGxlLCBjaGlsZHJlbiB9KSB7XHJcbiAgICBjb25zdCBbaXNUb2dnbGVkLCB0b2dnbGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKCkgPT4gdG9nZ2xlKCFpc1RvZ2dsZWQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fb3B0aW9uLWRyb3Bkb3duXCI+XHJcbiAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiYW5nbGUtZG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCIyQTJBMkFcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duLW1lbnUtaGVhZGVyX19pY29uICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVG9nZ2xlZCA/IFwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2ljb24tLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQgJHtcclxuICAgICAgICAgICAgICAgICAgICBpc1RvZ2dsZWQgPyBcImRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50LS1hY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQtdWxcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW4ubWFwKCh7IHRpdGxlTGksIGhyZWYgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmfSBrZXk9e2BjaGlsZF9saW5rLSR7aX0tJHtocmVmfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX3NlY29uZGFyeS1saVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgY2hpbGRfbGktJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlTGl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fc2Vjb25kYXJ5LWxpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudC11bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX29wdGlvbi1kcm9wZG93biB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQtLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2ljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19pY29uLS1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaGVtZUNvbnN1bWVyKHsgQ29tcG9uZW50IH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFRoZW1lQ29udGV4dC5Db25zdW1lcj5cclxuICAgICAgICAgICAgeyh7IGlzTGlnaHRUaGVtZSwgc2V0VGhlbWUgfSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICA8Q29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzTGlnaHRUaGVtZT17aXNMaWdodFRoZW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaGVtZT17c2V0VGhlbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPC9UaGVtZUNvbnRleHQuQ29uc3VtZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaGVtZVN0eWxlU2hlZXQoeyBpc0xpZ2h0VGhlbWUgfSkge1xyXG4gICAgY29uc3QgY3VycmVudFRoZW1lID0gaXNMaWdodFRoZW1lID8gbGlnaHQgOiBkYXJrO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAge2N1cnJlbnRUaGVtZX1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gVGhlbWVDaGFuZ2VyQnV0dG9uKHsgaXNMaWdodFRoZW1lLCBzZXRUaGVtZSB9KSB7XHJcbiAgICBjb25zdCBjaGFuZ2VUaGVtZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRUaGVtZSghaXNMaWdodFRoZW1lKTtcclxuICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0aGVtZVwiLCAhaXNMaWdodFRoZW1lID8gXCJsaWdodFwiIDogXCJkYXJrXCIpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpXCIgb25DbGljaz17Y2hhbmdlVGhlbWV9PlxyXG4gICAgICAgICAgICBUZW1hIHtpc0xpZ2h0VGhlbWUgPyBcIkludHVuZWNhdGFcIiA6IFwiTHVtaW5vYXNhXCJ9XHJcbiAgICAgICAgPC9saT5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\DropdownMenu.js */")));
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
      lineNumber: 114,
      columnNumber: 9
    }
  }, __jsx("li", {
    onClick: toggleDropdown,
    className: "jsx-3958027138" + " " + "dropdown-menu-header__main-li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 13
    }
  }, title, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "angle-down",
    color: "2A2A2A",
    className: `dropdown-menu-header__icon ${isToggled ? "dropdown-menu-header__icon--active" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 17
    }
  })), __jsx("div", {
    className: "jsx-3958027138" + " " + `dropdown-menu-header__content ${isToggled ? "dropdown-menu-header__content--active" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 13
    }
  }, __jsx("ul", {
    className: "jsx-3958027138" + " " + "dropdown-menu-header__content-ul",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 17
    }
  }, children.map(({
    titleLi,
    href
  }, i) => __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: href,
    key: `child_link-${i}-${href}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 25
    }
  }, __jsx("li", {
    key: `child_li-${i}`,
    className: "jsx-3958027138" + " " + "dropdown-menu-header__secondary-li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 29
    }
  }, titleLi))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3958027138",
    __self: this
  }, ".dropdown-menu-header__secondary-li{padding:10px 0;font-size:var(--font-smaller);cursor:pointer;position:relative;padding-left:20px;}.dropdown-menu-header__content-ul{list-style-type:none;padding-left:0;}.dropdown-menu-header__option-dropdown{overflow:hidden;}.dropdown-menu-header__content{margin-left:20px;height:0;-webkit-transition:height 300ms ease;transition:height 300ms ease;}.dropdown-menu-header__content--active{height:140px;}.dropdown-menu-header__icon{margin-left:20px;-webkit-transition:-webkit-transform 300ms ease;-webkit-transition:transform 300ms ease;transition:transform 300ms ease;}.dropdown-menu-header__icon--active{-webkit-transform:rotateZ(180deg);-ms-transform:rotateZ(180deg);transform:rotateZ(180deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXERyb3Bkb3duTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSitCLEFBR29DLEFBUU0sQUFLTCxBQUlDLEFBTUosQUFJSSxBQUlTLGFBUDlCLEVBdkJrQyxDQWFsQyxDQUlhLEFBVXVCLElBbkJqQixLQVVjLFVBVGpDLFNBUm1CLGVBQ0csa0JBQ0EsWUE0QnRCLEVBWkEsSUFmQSx5Q0F3QkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcZ2xvYmFsc1xcRHJvcGRvd25NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgeyBsaWdodCwgZGFyayB9IGZyb20gXCIuLi8uLi9zdHlsZXMvdGhlbWVcIjtcclxuaW1wb3J0IHsgVGhlbWVDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL19hcHBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3Bkb3duTWVudSh7IGlzRHJvcGRvd25Ub2dnbGVkIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcGRvd24tbWVudS1oZWFkZXIgJHtcclxuICAgICAgICAgICAgICAgICAgICBpc0Ryb3Bkb3duVG9nZ2xlZCA/IFwiZHJvcGRvd24tbWVudS1oZWFkZXItLWFjdGl2ZSBcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX3VsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9leGVyY2l0aWlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBFeGVyY2l0aWlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudUFjY29yZGlvbiB0aXRsZT1cIlJlc3Vyc2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBJWFwiLCBocmVmOiBcIi9yZXN1cnNlL2l4XCIgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgdGl0bGVMaTogXCJDbGFzYSBYXCIsIGhyZWY6IFwiL3Jlc3Vyc2UveFwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlTGk6IFwiQ2xhc2EgWElcIiwgaHJlZjogXCIvcmVzdXJzZS94aVwiIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgICAgICA8L0Ryb3Bkb3duTWVudUFjY29yZGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8VGhlbWVDb25zdW1lciBDb21wb25lbnQ9e1RoZW1lQ2hhbmdlckJ1dHRvbn0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgTW9kIHByb2llY3RvclxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgRGV0YWxpaSBjb250XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDxUaGVtZUNvbnN1bWVyIENvbXBvbmVudD17VGhlbWVTdHlsZVNoZWV0fSAvPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMTJweCAxM3B4IDlweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjMwcHgpIHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXItLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9faHIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODUlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX191bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDAgMTBweCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saTpob3ZlcixcclxuICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX3NlY29uZGFyeS1saTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saTpob3Zlcjo6YmVmb3JlLFxyXG4gICAgICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fc2Vjb25kYXJ5LWxpOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51QWNjb3JkaW9uKHsgdGl0bGUsIGNoaWxkcmVuIH0pIHtcclxuICAgIGNvbnN0IFtpc1RvZ2dsZWQsIHRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgdG9nZ2xlRHJvcGRvd24gPSAoKSA9PiB0b2dnbGUoIWlzVG9nZ2xlZCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19vcHRpb24tZHJvcGRvd25cIj5cclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJhbmdsZS1kb3duXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cIjJBMkEyQVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcGRvd24tbWVudS1oZWFkZXJfX2ljb24gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNUb2dnbGVkID8gXCJkcm9wZG93bi1tZW51LWhlYWRlcl9faWNvbi0tYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudCAke1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVG9nZ2xlZCA/IFwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQtLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudC11bFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbi5tYXAoKHsgdGl0bGVMaSwgaHJlZiB9LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IGtleT17YGNoaWxkX2xpbmstJHtpfS0ke2hyZWZ9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fc2Vjb25kYXJ5LWxpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2BjaGlsZF9saS0ke2l9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGl0bGVMaX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19zZWNvbmRhcnktbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50LXVsIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fb3B0aW9uLWRyb3Bkb3duIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudC0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2ljb24tLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRoZW1lQ29uc3VtZXIoeyBDb21wb25lbnQgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8VGhlbWVDb250ZXh0LkNvbnN1bWVyPlxyXG4gICAgICAgICAgICB7KHsgaXNMaWdodFRoZW1lLCBzZXRUaGVtZSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNMaWdodFRoZW1lPXtpc0xpZ2h0VGhlbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRoZW1lPXtzZXRUaGVtZX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA8L1RoZW1lQ29udGV4dC5Db25zdW1lcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFRoZW1lU3R5bGVTaGVldCh7IGlzTGlnaHRUaGVtZSB9KSB7XHJcbiAgICBjb25zdCBjdXJyZW50VGhlbWUgPSBpc0xpZ2h0VGhlbWUgPyBsaWdodCA6IGRhcms7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICB7Y3VycmVudFRoZW1lfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaGVtZUNoYW5nZXJCdXR0b24oeyBpc0xpZ2h0VGhlbWUsIHNldFRoZW1lIH0pIHtcclxuICAgIGNvbnN0IGNoYW5nZVRoZW1lID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRoZW1lKCFpc0xpZ2h0VGhlbWUpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsICFpc0xpZ2h0VGhlbWUgPyBcImxpZ2h0XCIgOiBcImRhcmtcIik7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIiBvbkNsaWNrPXtjaGFuZ2VUaGVtZX0+XHJcbiAgICAgICAgICAgIFRlbWEge2lzTGlnaHRUaGVtZSA/IFwiSW50dW5lY2F0YVwiIDogXCJMdW1pbm9hc2FcIn1cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\DropdownMenu.js */"));
}

function ThemeConsumer({
  Component
}) {
  return __jsx(_pages_app__WEBPACK_IMPORTED_MODULE_5__["ThemeContext"].Consumer, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
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
        lineNumber: 191,
        columnNumber: 21
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
      lineNumber: 216,
      columnNumber: 9
    }
  }, "Tema ", isLightTheme ? "Intunecata" : "Luminoasa");
}

/***/ }),

/***/ "./components/globals/Footer.js":
/*!**************************************!*\
  !*** ./components/globals/Footer.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\globals\\Footer.js";


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
  }, ".footer.jsx-3518460930{width:100%;color:var(--text-secondary);background-color:var(--footer);-webkit-transition:color,background-color 300ms ease;transition:color,background-color 300ms ease;text-align:center;padding:50px 10px;}.footer__heading.jsx-3518460930{margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXEZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNd0IsQUFHZ0MsQUFTUSxXQVJTLFFBU2hDLG9CQVJtQywrQkFDZSxrR0FDNUIsa0JBQ0Esa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXEZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImZvb3Rlcl9faGVhZGluZ1wiPmluZm9wbHVzIEAgMjAyMDwvaDE+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvb3Rlcl9fbW9yZS1pbmZvXCI+VG9hdGUgZHJlcHR1cmlsZSByZXplcnZhdGUuPC9wPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmZvb3RlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1mb290ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZm9vdGVyX19oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9mb290ZXI+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\Footer.js */"));
}

/***/ }),

/***/ "./components/globals/Header.js":
/*!**************************************!*\
  !*** ./components/globals/Header.js ***!
  \**************************************/
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
/* harmony import */ var _DropdownMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./DropdownMenu */ "./components/globals/DropdownMenu.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\globals\\Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function Header() {
  const {
    0: isDropdownToggled,
    1: toggleDropdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggleMenuDropdown = () => toggleDropdown(!isDropdownToggled);

  return __jsx("header", {
    className: "jsx-4043817128" + " " + "header",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-4043817128" + " " + "header__site-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx(SiteLogo, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }))), __jsx(IconsRightMenu, {
    isDropdownToggled: isDropdownToggled,
    toggleMenuDropdown: toggleMenuDropdown,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), __jsx(_DropdownMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isDropdownToggled: isDropdownToggled,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4043817128",
    __self: this
  }, ".header{width:100%;height:60px;background-color:var(--background-secondary);box-shadow:var(--box-shadow);color:var(--text-primary);position:fixed;top:0;padding:0 40px;z-index:100;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:color,background-color 300ms ease;transition:color,background-color 300ms ease;}@media screen and (max-width:375px){.header{padding:0 15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQitCLEFBR2dDLEFBaUJRLFdBaEJQLElBaUJaLFFBaEI2Qyw2Q0FDaEIsNkJBQ0gsMEJBQ1gsZUFDVCxNQUNTLGVBQ0gsWUFDQywwRUFDTSw2RkFDVyxtSEFDZ0Isa0dBQ2xEIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tIFwiLi9Ecm9wZG93bk1lbnVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgY29uc3QgW2lzRHJvcGRvd25Ub2dnbGVkLCB0b2dnbGVEcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB0b2dnbGVNZW51RHJvcGRvd24gPSAoKSA9PiB0b2dnbGVEcm9wZG93bighaXNEcm9wZG93blRvZ2dsZWQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19zaXRlLWxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICA8U2l0ZUxvZ28gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxJY29uc1JpZ2h0TWVudVxyXG4gICAgICAgICAgICAgICAgaXNEcm9wZG93blRvZ2dsZWQ9e2lzRHJvcGRvd25Ub2dnbGVkfVxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlTWVudURyb3Bkb3duPXt0b2dnbGVNZW51RHJvcGRvd259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgaXNEcm9wZG93blRvZ2dsZWQ9e2lzRHJvcGRvd25Ub2dnbGVkfSAvPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2hlYWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEljb25zUmlnaHRNZW51KHsgaXNEcm9wZG93blRvZ2dsZWQsIHRvZ2dsZU1lbnVEcm9wZG93biB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19pY29ucy1yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fc2VhcmNoLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwic2VhcmNoXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19pY29uXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3VzZXItYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidXNlclwiIGNsYXNzTmFtZT1cImhlYWRlcl9faWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX21lbnUtYnV0dG9uXCIgb25DbGljaz17dG9nZ2xlTWVudURyb3Bkb3dufT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiYmFyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGVhZGVyX19tZW51LWljb24gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEcm9wZG93blRvZ2dsZWQgPyBcImhlYWRlcl9fbWVudS1pY29uLS1hY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaGVhZGVyX19tZW51LXRpdGxlXCI+TUVOSVU8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19pY29ucy1yaWdodCxcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fc2VhcmNoLWJ1dHRvbixcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX3VzZXItYnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX2ljb24sXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1pY29uLS1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWig5MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNpdGVMb2dvKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTdcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI1N1wiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTcgNTdcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXJfX3NpdGUtbG9nb1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0yOC41IDU3QzQ0LjI0MDEgNTcgNTcgNDQuMjQwMSA1NyAyOC41QzU3IDEyLjc1OTkgNDQuMjQwMSAwIDI4LjUgMEMxMi43NTk5IDAgMCAxMi43NTk5IDAgMjguNUMwIDQ0LjI0MDEgMTIuNzU5OSA1NyAyOC41IDU3WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidmFyKC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5KVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTIxLjk0NjcgMjEuNTA0QzIxLjE1NzMgMjEuNTA0IDIwLjQ4NTMgMjEuMjI2NyAxOS45MzA3IDIwLjY3MkMxOS4zNzYgMjAuMTE3MyAxOS4wOTg3IDE5LjQ0NTMgMTkuMDk4NyAxOC42NTZDMTkuMDk4NyAxNy44NjY3IDE5LjM3NiAxNy4xOTQ3IDE5LjkzMDcgMTYuNjRDMjAuNDg1MyAxNi4wODUzIDIxLjE1NzMgMTUuODA4IDIxLjk0NjcgMTUuODA4QzIyLjczNiAxNS44MDggMjMuNDA4IDE2LjA4NTMgMjMuOTYyNyAxNi42NEMyNC41MTczIDE3LjE5NDcgMjQuNzk0NyAxNy44NjY3IDI0Ljc5NDcgMTguNjU2QzI0Ljc5NDcgMTkuNDQ1MyAyNC41MTczIDIwLjExNzMgMjMuOTYyNyAyMC42NzJDMjMuNDA4IDIxLjIyNjcgMjIuNzM2IDIxLjUwNCAyMS45NDY3IDIxLjUwNFpNMjQuNTM4NyAyMy4wNzJWNDBIMTkuMzU0N1YyMy4wNzJIMjQuNTM4N1pNMzcuMTA1NyAzNi4wNjRIMzMuMTA1N1YzMC40OTZIMjcuNTA1N1YyNi41MjhIMzMuMTA1N1YyMS4wODhIMzcuMTA1N1YyNi41MjhINDIuNjczN1YzMC40OTZIMzcuMTA1N1YzNi4wNjRaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ2YXIoLS10ZXh0LXNlY29uZGFyeSlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlcl9fc2l0ZS1sb2dvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\Header.js */"));
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
      lineNumber: 51,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-4128229347" + " " + "header__search-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "search",
    className: "header__icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/cont",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-4128229347" + " " + "header__user-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "user",
    className: "header__icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 21
    }
  }))), __jsx("div", {
    onClick: toggleMenuDropdown,
    className: "jsx-4128229347" + " " + "header__menu-button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "bars",
    className: `header__menu-icon ${isDropdownToggled ? "header__menu-icon--active" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }), __jsx("h4", {
    className: "jsx-4128229347" + " " + "header__menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 17
    }
  }, "MENIU")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4128229347",
    __self: this
  }, ".header__icons-right,.header__menu-button{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header__search-button,.header__user-button,.header__menu-button{margin:0 15px;cursor:pointer;}.header__menu-title{margin-left:10px;font-weight:800;}.header__icon,.header__menu-icon{fill:var(--background-quaternary);-webkit-transition:fill 300ms ease;transition:fill 300ms ease;width:25px !important;height:25px;}.header__menu-icon{-webkit-transition:-webkit-transform 300ms ease;-webkit-transition:transform 300ms ease;transition:transform 300ms ease;}.header__menu-icon--active{-webkit-transform:rotateZ(90deg);-ms-transform:rotateZ(90deg);transform:rotateZ(90deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRStCLEFBSWtDLEFBT0MsQUFLRyxBQU1pQixBQU9GLEFBSVAsY0FyQlYsR0FLQyxZQUpwQixJQUtBLENBSytCLHdDQWxCUixhQTZCdkIsU0FWMEIsc0JBQ1YsRUFLaEIsVUFKQSxxQ0FwQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcZ2xvYmFsc1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gXCIuL0Ryb3Bkb3duTWVudVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBbaXNEcm9wZG93blRvZ2dsZWQsIHRvZ2dsZURyb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHRvZ2dsZU1lbnVEcm9wZG93biA9ICgpID0+IHRvZ2dsZURyb3Bkb3duKCFpc0Ryb3Bkb3duVG9nZ2xlZCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3NpdGUtbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTaXRlTG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPEljb25zUmlnaHRNZW51XHJcbiAgICAgICAgICAgICAgICBpc0Ryb3Bkb3duVG9nZ2xlZD17aXNEcm9wZG93blRvZ2dsZWR9XHJcbiAgICAgICAgICAgICAgICB0b2dnbGVNZW51RHJvcGRvd249e3RvZ2dsZU1lbnVEcm9wZG93bn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPERyb3Bkb3duTWVudSBpc0Ryb3Bkb3duVG9nZ2xlZD17aXNEcm9wZG93blRvZ2dsZWR9IC8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSWNvbnNSaWdodE1lbnUoeyBpc0Ryb3Bkb3duVG9nZ2xlZCwgdG9nZ2xlTWVudURyb3Bkb3duIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2ljb25zLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19zZWFyY2gtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJoZWFkZXJfX2ljb25cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdXNlci1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ1c2VyXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fbWVudS1idXR0b25cIiBvbkNsaWNrPXt0b2dnbGVNZW51RHJvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJiYXJzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXJfX21lbnUtaWNvbiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Ryb3Bkb3duVG9nZ2xlZCA/IFwiaGVhZGVyX19tZW51LWljb24tLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJoZWFkZXJfX21lbnUtdGl0bGVcIj5NRU5JVTwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX2ljb25zLXJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19zZWFyY2gtYnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fdXNlci1idXR0b24sXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9faWNvbixcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogdmFyKC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWljb24tLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU2l0ZUxvZ28oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgd2lkdGg9XCI1N1wiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjU3XCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1NyA1N1wiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlcl9fc2l0ZS1sb2dvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTI4LjUgNTdDNDQuMjQwMSA1NyA1NyA0NC4yNDAxIDU3IDI4LjVDNTcgMTIuNzU5OSA0NC4yNDAxIDAgMjguNSAwQzEyLjc1OTkgMCAwIDEyLjc1OTkgMCAyOC41QzAgNDQuMjQwMSAxMi43NTk5IDU3IDI4LjUgNTdaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ2YXIoLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnkpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjEuOTQ2NyAyMS41MDRDMjEuMTU3MyAyMS41MDQgMjAuNDg1MyAyMS4yMjY3IDE5LjkzMDcgMjAuNjcyQzE5LjM3NiAyMC4xMTczIDE5LjA5ODcgMTkuNDQ1MyAxOS4wOTg3IDE4LjY1NkMxOS4wOTg3IDE3Ljg2NjcgMTkuMzc2IDE3LjE5NDcgMTkuOTMwNyAxNi42NEMyMC40ODUzIDE2LjA4NTMgMjEuMTU3MyAxNS44MDggMjEuOTQ2NyAxNS44MDhDMjIuNzM2IDE1LjgwOCAyMy40MDggMTYuMDg1MyAyMy45NjI3IDE2LjY0QzI0LjUxNzMgMTcuMTk0NyAyNC43OTQ3IDE3Ljg2NjcgMjQuNzk0NyAxOC42NTZDMjQuNzk0NyAxOS40NDUzIDI0LjUxNzMgMjAuMTE3MyAyMy45NjI3IDIwLjY3MkMyMy40MDggMjEuMjI2NyAyMi43MzYgMjEuNTA0IDIxLjk0NjcgMjEuNTA0Wk0yNC41Mzg3IDIzLjA3MlY0MEgxOS4zNTQ3VjIzLjA3MkgyNC41Mzg3Wk0zNy4xMDU3IDM2LjA2NEgzMy4xMDU3VjMwLjQ5NkgyNy41MDU3VjI2LjUyOEgzMy4xMDU3VjIxLjA4OEgzNy4xMDU3VjI2LjUyOEg0Mi42NzM3VjMwLjQ5NkgzNy4xMDU3VjM2LjA2NFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLXRleHQtc2Vjb25kYXJ5KVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyX19zaXRlLWxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\Header.js */"));
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
      lineNumber: 112,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M28.5 57C44.2401 57 57 44.2401 57 28.5C57 12.7599 44.2401 0 28.5 0C12.7599 0 0 12.7599 0 28.5C0 44.2401 12.7599 57 28.5 57Z",
    fill: "var(--background-quaternary)",
    className: "jsx-3674848814",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M21.9467 21.504C21.1573 21.504 20.4853 21.2267 19.9307 20.672C19.376 20.1173 19.0987 19.4453 19.0987 18.656C19.0987 17.8667 19.376 17.1947 19.9307 16.64C20.4853 16.0853 21.1573 15.808 21.9467 15.808C22.736 15.808 23.408 16.0853 23.9627 16.64C24.5173 17.1947 24.7947 17.8667 24.7947 18.656C24.7947 19.4453 24.5173 20.1173 23.9627 20.672C23.408 21.2267 22.736 21.504 21.9467 21.504ZM24.5387 23.072V40H19.3547V23.072H24.5387ZM37.1057 36.064H33.1057V30.496H27.5057V26.528H33.1057V21.088H37.1057V26.528H42.6737V30.496H37.1057V36.064Z",
    fill: "var(--text-secondary)",
    className: "jsx-3674848814",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3674848814",
    __self: this
  }, ".header__site-logo{width:35px;height:35px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSWlCLEFBR29DLFdBQ0MsWUFDRyxlQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxnbG9iYWxzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSBcIi4vRHJvcGRvd25NZW51XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIGNvbnN0IFtpc0Ryb3Bkb3duVG9nZ2xlZCwgdG9nZ2xlRHJvcGRvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdG9nZ2xlTWVudURyb3Bkb3duID0gKCkgPT4gdG9nZ2xlRHJvcGRvd24oIWlzRHJvcGRvd25Ub2dnbGVkKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fc2l0ZS1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNpdGVMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8SWNvbnNSaWdodE1lbnVcclxuICAgICAgICAgICAgICAgIGlzRHJvcGRvd25Ub2dnbGVkPXtpc0Ryb3Bkb3duVG9nZ2xlZH1cclxuICAgICAgICAgICAgICAgIHRvZ2dsZU1lbnVEcm9wZG93bj17dG9nZ2xlTWVudURyb3Bkb3dufVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25NZW51IGlzRHJvcGRvd25Ub2dnbGVkPXtpc0Ryb3Bkb3duVG9nZ2xlZH0gLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJY29uc1JpZ2h0TWVudSh7IGlzRHJvcGRvd25Ub2dnbGVkLCB0b2dnbGVNZW51RHJvcGRvd24gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9faWNvbnMtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3NlYXJjaC1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNlYXJjaFwiIGNsYXNzTmFtZT1cImhlYWRlcl9faWNvblwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX191c2VyLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInVzZXJcIiBjbGFzc05hbWU9XCJoZWFkZXJfX2ljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19tZW51LWJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZU1lbnVEcm9wZG93bn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImJhcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhlYWRlcl9fbWVudS1pY29uICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRHJvcGRvd25Ub2dnbGVkID8gXCJoZWFkZXJfX21lbnUtaWNvbi0tYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlYWRlcl9fbWVudS10aXRsZVwiPk1FTklVPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9faWNvbnMtcmlnaHQsXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX3NlYXJjaC1idXR0b24sXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX191c2VyLWJ1dHRvbixcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19pY29uLFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtaWNvbi0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTaXRlTG9nbygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB3aWR0aD1cIjU3XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNTdcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDU3IDU3XCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyX19zaXRlLWxvZ29cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjguNSA1N0M0NC4yNDAxIDU3IDU3IDQ0LjI0MDEgNTcgMjguNUM1NyAxMi43NTk5IDQ0LjI0MDEgMCAyOC41IDBDMTIuNzU5OSAwIDAgMTIuNzU5OSAwIDI4LjVDMCA0NC4yNDAxIDEyLjc1OTkgNTcgMjguNSA1N1pcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0yMS45NDY3IDIxLjUwNEMyMS4xNTczIDIxLjUwNCAyMC40ODUzIDIxLjIyNjcgMTkuOTMwNyAyMC42NzJDMTkuMzc2IDIwLjExNzMgMTkuMDk4NyAxOS40NDUzIDE5LjA5ODcgMTguNjU2QzE5LjA5ODcgMTcuODY2NyAxOS4zNzYgMTcuMTk0NyAxOS45MzA3IDE2LjY0QzIwLjQ4NTMgMTYuMDg1MyAyMS4xNTczIDE1LjgwOCAyMS45NDY3IDE1LjgwOEMyMi43MzYgMTUuODA4IDIzLjQwOCAxNi4wODUzIDIzLjk2MjcgMTYuNjRDMjQuNTE3MyAxNy4xOTQ3IDI0Ljc5NDcgMTcuODY2NyAyNC43OTQ3IDE4LjY1NkMyNC43OTQ3IDE5LjQ0NTMgMjQuNTE3MyAyMC4xMTczIDIzLjk2MjcgMjAuNjcyQzIzLjQwOCAyMS4yMjY3IDIyLjczNiAyMS41MDQgMjEuOTQ2NyAyMS41MDRaTTI0LjUzODcgMjMuMDcyVjQwSDE5LjM1NDdWMjMuMDcySDI0LjUzODdaTTM3LjEwNTcgMzYuMDY0SDMzLjEwNTdWMzAuNDk2SDI3LjUwNTdWMjYuNTI4SDMzLjEwNTdWMjEuMDg4SDM3LjEwNTdWMjYuNTI4SDQyLjY3MzdWMzAuNDk2SDM3LjEwNTdWMzYuMDY0WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidmFyKC0tdGV4dC1zZWNvbmRhcnkpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXJfX3NpdGUtbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\Header.js */"));
}

/***/ }),

/***/ "./components/globals/LoadingBar.js":
/*!******************************************!*\
  !*** ./components/globals/LoadingBar.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoadingBar; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\globals\\LoadingBar.js";


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
  }, ".loading-bar.jsx-1023741959{position:fixed;top:0;z-index:200;background-color:var(--accent-tertiary);box-shadow:0px 0px 5px 0px var(--accent-tertiary);width:0%;display:none;height:5px;-webkit-transition:opacity 500ms linear;transition:opacity 500ms linear;}.loading-bar--is-loading.jsx-1023741959{display:block;-webkit-animation:loading-jsx-1023741959 2000ms ease forwards;animation:loading-jsx-1023741959 2000ms ease forwards;}@-webkit-keyframes loading-jsx-1023741959{from{width:0%;}to{width:100%;}}@keyframes loading-jsx-1023741959{from{width:0%;}to{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXExvYWRpbmdCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSXdCLEFBR29DLEFBWUQsQUFNRCxBQUdFLFNBRmYsRUFHQSxHQVR1QyxDQVpqQyxNQUNNLFlBQzRCLHdDQUNVLGtEQUN6QyxPQVNiLEVBUmlCLGFBQ0YsV0FDcUIsd0VBQ3BDIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXExvYWRpbmdCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nQmFyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctYmFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5sb2FkaW5nLWJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRlcnRpYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggdmFyKC0tYWNjZW50LXRlcnRpYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGxpbmVhcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubG9hZGluZy1iYXItLWlzLWxvYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbG9hZGluZyAyMDAwbXMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGxvYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\LoadingBar.js */"));
}

/***/ }),

/***/ "./components/hooks/componentDidMount.js":
/*!***********************************************!*\
  !*** ./components/hooks/componentDidMount.js ***!
  \***********************************************/
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


const iconNames = ["faSearch", "faUser", "faBars", "faAngleDown", "faCheck", "faBolt", "faLightbulb", "faSignInAlt", "faEllipsisH", "faCoffee", "faTools", "faMountain", "faEnvelope", "faPhone", "faArrowRight", "faExternalLinkAlt", "faFilter"];
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"].add(iconNames.map(iconName => _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__[iconName]));
/* harmony default export */ __webpack_exports__["default"] = (_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"]);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

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

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
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

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

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
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
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


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

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

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback'];
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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

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

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

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

function addBasePath(path) {
  // variable is always a string
  const p = "";
  return path.indexOf(p) !== 0 ? p + path : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch(utils_1.formatWithValidation({
      // @ts-ignore __NEXT_DATA__
      pathname: `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`,
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


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
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
        this.changeState(method, url, addBasePath(as), options);
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
        this.changeState(method, url, addBasePath(as), options);

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

      Promise.all([this.pageLoader.prefetchData(url, asPath), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname))]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

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

    const decode = decodeURIComponent;
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
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
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
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
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
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
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
/*! exports provided: default, ThemeContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configs_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/icons */ "./configs/icons.js");
/* harmony import */ var _components_globals_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/globals/Header */ "./components/globals/Header.js");
/* harmony import */ var _components_globals_Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/globals/Contact */ "./components/globals/Contact.js");
/* harmony import */ var _components_globals_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/globals/Footer */ "./components/globals/Footer.js");
/* harmony import */ var _styles_mainStyling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/mainStyling */ "./styles/mainStyling.js");
/* harmony import */ var _components_hooks_componentDidMount__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/hooks/componentDidMount */ "./components/hooks/componentDidMount.js");
/* harmony import */ var _components_globals_LoadingBar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/globals/LoadingBar */ "./components/globals/LoadingBar.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\pages\\_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










const ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(true);
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
  Object(_components_hooks_componentDidMount__WEBPACK_IMPORTED_MODULE_8__["default"])(() => {
    const localTheme = window.localStorage.getItem("theme") || "light";
    setTheme(localTheme === "light");
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_globals_LoadingBar__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
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
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(_components_globals_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  })), __jsx(Component, _extends({}, pageProps, {
    className: `jsx-${_styles_mainStyling__WEBPACK_IMPORTED_MODULE_7__["default"].__hash}` + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  })), __jsx(_components_globals_Contact__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx(_components_globals_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_mainStyling__WEBPACK_IMPORTED_MODULE_7__["default"].__hash,
    __self: this
  }, _styles_mainStyling__WEBPACK_IMPORTED_MODULE_7__["default"]));
}


function loadingStart() {
  const loadingBar = document.querySelector(".loading-bar");
  loadingBar.classList.add("loading-bar--is-loading");
}

function loadingFinished() {
  const loadingBar = document.querySelector(".loading-bar");
  loadingBar.classList.remove("loading-bar--is-loading");
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
const _defaultExport = new String("*{box-sizing:border-box;}.theme-light{--background-primary:#fff;--background-secondary:#f1f1f1;--background-tertiary:#dadada;--background-quaternary:#2a2a2a;--text-primary:#2a2a2a;--text-secondary:#f1f1f1;--text-button:#2a2a2a;--accent-primary:#56f55c;--accent-secondary:#3db8ff;--accent-tertiary:#ffcc00;--accent-quaternary:#de16ff;--contact:#2a2a2a;--footer:#1e1e1e;--box-shadow:0px 4px 10px rgba(0,0,0,0.2);--box-shadow-active:0 4px 15px 5px rgba(0,0,0,0.2);}.theme-dark{--background-primary:#1e1e1e;--background-secondary:#2a2a2a;--background-tertiary:#434545;--background-quaternary:#404040;--text-primary:#f1f1f1;--text-secondary:#e6e6e6;--text-button:#2a2a2a;--accent-primary:#56f55c;--accent-secondary:#3db8ff;--accent-tertiary:#ffcc00;--contact:#3d3d3d;--footer:#1e1e1e;--box-shadow:0px 4px 10px rgba(0,0,0,0.2);--box-shadow-active:0 4px 15px 5px rgba(0,0,0,0.2);}html,body{margin:0;padding:0;font-family:\"Red Hat Display\",Arial,sans-serif;background-color:var(--background-primary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;}h1,h2,h3,p{margin:0;padding:0;}h1,h2,h3{font-weight:800;}h1{font-size:var(--font-large);}h2{font-size:var(--font-medium);}h3{font-size:var(--font-small);}a{color:inherit;font-weight:800;}ul{margin:0;}hr{border-color:var(--background-tertiary);border-style:solid;}button{width:170px;height:45px;display:inline-block;box-shadow:var(--box-shadow);text-transform:uppercase;text-align:center;line-height:35px;border:none;font-family:\"Red Hat Display\";border-radius:50px;cursor:pointer;-webkit-transition:box-shadow 300ms ease;transition:box-shadow 300ms ease;}button:focus{outline:none;}button:hover{box-shadow:var(--box-shadow-active);}button svg{margin-left:10px;}.button--primary-ix{background-color:var(--accent-primary);color:var(--text-button);height:40px;}.button--secondary-ix{background-color:var(--background-quaternary);color:var(--accent-primary);height:40px;}.button--primary-x{background-color:var(--accent-secondary);color:var(--text-button);height:40px;}.button--primary-xi{background-color:var(--accent-tertiary);color:var(--text-button);height:40px;}.button--secondary{background-color:transparent;box-shadow:none;font-weight:bold;-webkit-transition:color 300ms linear;transition:color 300ms linear;color:var(--text-primary);width:120px;}.button--secondary:hover{box-shadow:none;color:var(--accent-tertiary);}.underlined{-webkit-text-decoration:underline;text-decoration:underline;}.button--outline{background-color:transparent;color:var(--text-primary);border:1px solid var(--background-quaternary);border-radius:50px;box-shadow:none;width:150px;line-height:32px;height:35px;text-transform:initial;-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;}.button--outline:hover{background-color:var(--background-secondary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXHN0eWxlc1xcbWFpblN0eWxpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRXlCLEFBRytCLEFBSUksQUFxQkcsQUFxQnBCLEFBV0EsQUFPTyxBQUlZLEFBR0MsQUFHRCxBQUlkLEFBS0wsQUFJK0IsQUFLNUIsQUFlQyxBQUd1QixBQUluQixBQUlzQixBQU1PLEFBTUwsQUFNRCxBQU1YLEFBUWIsQUFLVSxBQUlHLEFBWWdCLFNBNUhuQyxBQVdBLEFBMEJkLEdBU2dCLENBZWhCLENBN0JvQixFQWRwQixBQXNGaUMsQ0FwQ2pDLEVBbkVxRCxBQVdyRCxHQTFEQSxFQTZGeUIsRUF6RlUsRUFnRW5DLEFBTUEsQ0FqRG1DLEFBOENuQyxBQXVFb0IsQUFpQlUsQ0FoRjlCLE1BK0JBLEdBUTZCLENBL0JOLEFBaURNLENBTkEsSUFwQ0ksQUFpRFosQUFRckIsQUFvQkEsQ0EvQ2dDLFNBb0NrQixFQTNKaEIsRUFtRmxDLENBOURrQyxBQWlJbEMsRUFYa0MsRUF6QmxCLENBa0JBLENBekYrQixBQW1GL0IsUUFwQ2EsQUE4QmIsRUFMaEIsQ0FrQkEsQ0FOQSxRQU5BLENBeEhvQyxHQXFCQSxTQXFFZCxFQWlFQyxRQWhIb0IsUUFnRHRCLEVBekZNLENBMEpQLEVBcklPLFFBb0hHLElBL0NkLEVBaUVBLE1BMUphLEdBcUJBLENBcUVLLEVBaUViLFFBbEJMLFNBbUJBLEVBM0pVLENBeUkxQixFQXBIMEIsTUFxRUgsQ0FrRUksWUExSkUsR0FxQkEsR0FpQjdCLEFBbURtQixLQWtFd0IsVUFqRU4sSUF6Rk4sR0FxQkEsd0JBcEJELEdBcUJBLHVCQXBCRSxHQXNCVixjQWtFdEIsRUFpRUEsRUFsSXFCLE9BckJDLFVBc0IyQixRQXJCNUIsaUJBQzRCLGlCQXFCUyx5QkFwQkEsMEJBcUIxRCx5QkFwQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcc3R5bGVzXFxtYWluU3R5bGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3MuZ2xvYmFsYFxyXG4gICAgKiB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuXHJcbiAgICAudGhlbWUtbGlnaHQge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1wcmltYXJ5OiAjZmZmO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1zZWNvbmRhcnk6ICNmMWYxZjE7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5OiAjZGFkYWRhO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5OiAjMmEyYTJhO1xyXG5cclxuICAgICAgICAtLXRleHQtcHJpbWFyeTogIzJhMmEyYTtcclxuICAgICAgICAtLXRleHQtc2Vjb25kYXJ5OiAjZjFmMWYxO1xyXG4gICAgICAgIC0tdGV4dC1idXR0b246ICMyYTJhMmE7XHJcblxyXG4gICAgICAgIC0tYWNjZW50LXByaW1hcnk6ICM1NmY1NWM7XHJcbiAgICAgICAgLS1hY2NlbnQtc2Vjb25kYXJ5OiAjM2RiOGZmO1xyXG4gICAgICAgIC0tYWNjZW50LXRlcnRpYXJ5OiAjZmZjYzAwO1xyXG4gICAgICAgIC0tYWNjZW50LXF1YXRlcm5hcnk6ICNkZTE2ZmY7XHJcblxyXG4gICAgICAgIC0tY29udGFjdDogIzJhMmEyYTtcclxuICAgICAgICAtLWZvb3RlcjogIzFlMWUxZTtcclxuICAgICAgICAtLWJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93LWFjdGl2ZTogMCA0cHggMTVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgfVxyXG5cclxuICAgIC50aGVtZS1kYXJrIHtcclxuICAgICAgICAtLWJhY2tncm91bmQtcHJpbWFyeTogIzFlMWUxZTtcclxuICAgICAgICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5OiAjMmEyYTJhO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC10ZXJ0aWFyeTogIzQzNDU0NTtcclxuICAgICAgICAtLWJhY2tncm91bmQtcXVhdGVybmFyeTogIzQwNDA0MDtcclxuXHJcbiAgICAgICAgLS10ZXh0LXByaW1hcnk6ICNmMWYxZjE7XHJcbiAgICAgICAgLS10ZXh0LXNlY29uZGFyeTogI2U2ZTZlNjtcclxuICAgICAgICAtLXRleHQtYnV0dG9uOiAjMmEyYTJhO1xyXG5cclxuICAgICAgICAtLWFjY2VudC1wcmltYXJ5OiAjNTZmNTVjO1xyXG4gICAgICAgIC0tYWNjZW50LXNlY29uZGFyeTogIzNkYjhmZjtcclxuICAgICAgICAtLWFjY2VudC10ZXJ0aWFyeTogI2ZmY2MwMDtcclxuXHJcbiAgICAgICAgLS1jb250YWN0OiAjM2QzZDNkO1xyXG4gICAgICAgIC0tZm9vdGVyOiAjMWUxZTFlO1xyXG4gICAgICAgIC0tYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAtLWJveC1zaGFkb3ctYWN0aXZlOiAwIDRweCAxNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB9XHJcblxyXG4gICAgaHRtbCxcclxuICAgIGJvZHkge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlJlZCBIYXQgRGlzcGxheVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICBoMSxcclxuICAgIGgyLFxyXG4gICAgaDMsXHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICBoMSxcclxuICAgIGgyLFxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1sYXJnZSk7XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LW1lZGl1bSk7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaHIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeSk7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxNzBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSZWQgSGF0IERpc3BsYXlcIjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDMwMG1zIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LWFjdGl2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHN2ZyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbi0tcHJpbWFyeS1peCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJ1dHRvbik7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24tLXNlY29uZGFyeS1peCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uLS1wcmltYXJ5LXgge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJ1dHRvbik7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24tLXByaW1hcnkteGkge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC10ZXJ0aWFyeSk7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYnV0dG9uKTtcclxuICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbi0tc2Vjb25kYXJ5IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGxpbmVhcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uLS1zZWNvbmRhcnk6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC10ZXJ0aWFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnVuZGVybGluZWQge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24tLW91dGxpbmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbi0tb3V0bGluZTpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgfVxyXG5gO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\styles\\\\mainStyling.js */");

_defaultExport.__hash = "278746058";
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
    --accent-quaternary: #DE16FF;

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
const light = new String(`:root{--background-primary:#fff;--background-secondary:#f9f9f9;--background-tertiary:#dadada;--background-quaternary:#2a2a2a;--text-primary:#2a2a2a;--text-secondary:#f1f1f1;--text-tertiary:#686868;${staticThemeVariables};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXHN0eWxlc1xcdGhlbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkIrQixBQUdtQywwQkFDSywrQkFDRCw4QkFDRSxnQ0FFVCx1QkFDRSx5QkFDRCx3QkFHN0IsNkJBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcc3R5bGVzXFx0aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcblxyXG5jb25zdCBzdGF0aWNUaGVtZVZhcmlhYmxlcyA9IGBcclxuICAgIC0tYWNjZW50LXByaW1hcnk6ICM1NmY1NWM7XHJcbiAgICAtLWFjY2VudC1zZWNvbmRhcnk6ICMzZGI4ZmY7XHJcbiAgICAtLWFjY2VudC10ZXJ0aWFyeTogI2ZmY2MwMDtcclxuICAgIC0tYWNjZW50LXF1YXRlcm5hcnk6ICNERTE2RkY7XHJcblxyXG4gICAgLS1kaWZmaWN1bHR5LTE6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgIC0tZGlmZmljdWx0eS0yOiB2YXIoLS1hY2NlbnQtdGVydGlhcnkpO1xyXG4gICAgLS1kaWZmaWN1bHR5LTM6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xyXG4gICAgLS1kaWZmaWN1bHR5LTQ6IHZhcigtLWFjY2VudC1xdWF0ZXJuYXJ5KTtcclxuXHJcbiAgICAtLXRleHQtYnV0dG9uOiAjMmEyYTJhO1xyXG5cclxuICAgIC0tZm9udC1sYXJnZXI6IDVyZW07XHJcbiAgICAtLWZvbnQtbGFyZ2U6IDNyZW07XHJcbiAgICAtLWZvbnQtbWVkaXVtOiAycmVtO1xyXG4gICAgLS1mb250LXNtYWxsOiAxLjNyZW07XHJcbiAgICAtLWZvbnQtc21hbGxlcjogMXJlbTtcclxuXHJcbiAgICAtLWNvbnRhY3Q6ICMyYTJhMmE7XHJcbiAgICAtLWZvb3RlcjogIzFlMWUxZTtcclxuICAgIC0tYm94LXNoYWRvdzogMHB4IDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XHJcbiAgICAtLWJveC1zaGFkb3ctYWN0aXZlOiAwIDRweCAxNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgbGlnaHQgPSBjc3MuZ2xvYmFsYFxyXG4gICAgOnJvb3Qge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1wcmltYXJ5OiAjZmZmO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1zZWNvbmRhcnk6ICNmOWY5Zjk7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5OiAjZGFkYWRhO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5OiAjMmEyYTJhO1xyXG5cclxuICAgICAgICAtLXRleHQtcHJpbWFyeTogIzJhMmEyYTtcclxuICAgICAgICAtLXRleHQtc2Vjb25kYXJ5OiAjZjFmMWYxO1xyXG4gICAgICAgIC0tdGV4dC10ZXJ0aWFyeTogIzY4Njg2ODtcclxuXHJcbiAgICAgICAgJHtzdGF0aWNUaGVtZVZhcmlhYmxlc31cclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXJrID0gY3NzLmdsb2JhbGBcclxuICAgIDpyb290IHtcclxuICAgICAgICAtLWJhY2tncm91bmQtcHJpbWFyeTogIzFlMWUxZTtcclxuICAgICAgICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5OiAjMmEyYTJhO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC10ZXJ0aWFyeTogIzQzNDU0NTtcclxuICAgICAgICAtLWJhY2tncm91bmQtcXVhdGVybmFyeTogIzQwNDA0MDtcclxuXHJcbiAgICAgICAgLS10ZXh0LXByaW1hcnk6ICNmMWYxZjE7XHJcbiAgICAgICAgLS10ZXh0LXNlY29uZGFyeTogI2U2ZTZlNjtcclxuICAgICAgICAtLXRleHQtdGVydGlhcnk6ICM3Nzc3Nzc7XHJcblxyXG4gICAgICAgICR7c3RhdGljVGhlbWVWYXJpYWJsZXN9XHJcbiAgICB9XHJcbmA7XHJcbiJdfQ== */
/*@ sourceURL=C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\styles\\theme.js */`);
light.__hash = "1973104918";
const dark = new String(`:root{--background-primary:#1e1e1e;--background-secondary:#2a2a2a;--background-tertiary:#434545;--background-quaternary:#404040;--text-primary:#f1f1f1;--text-secondary:#e6e6e6;--text-tertiary:#777777;${staticThemeVariables};}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXHN0eWxlc1xcdGhlbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEM4QixBQUdzQyw2QkFDRSwrQkFDRCw4QkFDRSxnQ0FFVCx1QkFDRSx5QkFDRCx3QkFHN0IsNkJBQUMiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcc3R5bGVzXFx0aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcblxyXG5jb25zdCBzdGF0aWNUaGVtZVZhcmlhYmxlcyA9IGBcclxuICAgIC0tYWNjZW50LXByaW1hcnk6ICM1NmY1NWM7XHJcbiAgICAtLWFjY2VudC1zZWNvbmRhcnk6ICMzZGI4ZmY7XHJcbiAgICAtLWFjY2VudC10ZXJ0aWFyeTogI2ZmY2MwMDtcclxuICAgIC0tYWNjZW50LXF1YXRlcm5hcnk6ICNERTE2RkY7XHJcblxyXG4gICAgLS1kaWZmaWN1bHR5LTE6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgIC0tZGlmZmljdWx0eS0yOiB2YXIoLS1hY2NlbnQtdGVydGlhcnkpO1xyXG4gICAgLS1kaWZmaWN1bHR5LTM6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xyXG4gICAgLS1kaWZmaWN1bHR5LTQ6IHZhcigtLWFjY2VudC1xdWF0ZXJuYXJ5KTtcclxuXHJcbiAgICAtLXRleHQtYnV0dG9uOiAjMmEyYTJhO1xyXG5cclxuICAgIC0tZm9udC1sYXJnZXI6IDVyZW07XHJcbiAgICAtLWZvbnQtbGFyZ2U6IDNyZW07XHJcbiAgICAtLWZvbnQtbWVkaXVtOiAycmVtO1xyXG4gICAgLS1mb250LXNtYWxsOiAxLjNyZW07XHJcbiAgICAtLWZvbnQtc21hbGxlcjogMXJlbTtcclxuXHJcbiAgICAtLWNvbnRhY3Q6ICMyYTJhMmE7XHJcbiAgICAtLWZvb3RlcjogIzFlMWUxZTtcclxuICAgIC0tYm94LXNoYWRvdzogMHB4IDRweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4wOSk7XHJcbiAgICAtLWJveC1zaGFkb3ctYWN0aXZlOiAwIDRweCAxNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgbGlnaHQgPSBjc3MuZ2xvYmFsYFxyXG4gICAgOnJvb3Qge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1wcmltYXJ5OiAjZmZmO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1zZWNvbmRhcnk6ICNmOWY5Zjk7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5OiAjZGFkYWRhO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5OiAjMmEyYTJhO1xyXG5cclxuICAgICAgICAtLXRleHQtcHJpbWFyeTogIzJhMmEyYTtcclxuICAgICAgICAtLXRleHQtc2Vjb25kYXJ5OiAjZjFmMWYxO1xyXG4gICAgICAgIC0tdGV4dC10ZXJ0aWFyeTogIzY4Njg2ODtcclxuXHJcbiAgICAgICAgJHtzdGF0aWNUaGVtZVZhcmlhYmxlc31cclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXJrID0gY3NzLmdsb2JhbGBcclxuICAgIDpyb290IHtcclxuICAgICAgICAtLWJhY2tncm91bmQtcHJpbWFyeTogIzFlMWUxZTtcclxuICAgICAgICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5OiAjMmEyYTJhO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC10ZXJ0aWFyeTogIzQzNDU0NTtcclxuICAgICAgICAtLWJhY2tncm91bmQtcXVhdGVybmFyeTogIzQwNDA0MDtcclxuXHJcbiAgICAgICAgLS10ZXh0LXByaW1hcnk6ICNmMWYxZjE7XHJcbiAgICAgICAgLS10ZXh0LXNlY29uZGFyeTogI2U2ZTZlNjtcclxuICAgICAgICAtLXRleHQtdGVydGlhcnk6ICM3Nzc3Nzc7XHJcblxyXG4gICAgICAgICR7c3RhdGljVGhlbWVWYXJpYWJsZXN9XHJcbiAgICB9XHJcbmA7XHJcbiJdfQ== */
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