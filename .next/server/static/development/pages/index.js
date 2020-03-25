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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Home/Main.js":
/*!*********************************!*\
  !*** ./components/Home/Main.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals_Register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globals/Register */ "./components/globals/Register.js");
/* harmony import */ var _globals_Login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../globals/Login */ "./components/globals/Login.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\Home\\Main.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





function Main() {
  const {
    0: registerModalVisible,
    1: showRegisterModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const showRegisterModalHandler = () => showRegisterModal(!registerModalVisible);

  const {
    0: loginModalVisible,
    1: showLoginModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const showLoginModalHandler = () => showLoginModal(!loginModalVisible);

  return __jsx("section", {
    className: "jsx-4192841466" + " " + "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, registerModalVisible && __jsx(_globals_Register__WEBPACK_IMPORTED_MODULE_3__["default"], {
    showRegisterModalHandler: showRegisterModalHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }), loginModalVisible && __jsx(_globals_Login__WEBPACK_IMPORTED_MODULE_4__["default"], {
    showLoginModalHandler: showLoginModalHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-4192841466" + " " + "main__content-panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "jsx-4192841466" + " " + "main__primary-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "infoplus"), __jsx("div", {
    className: "jsx-4192841466" + " " + "main__bullets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, __jsx(BulletTitle, {
    title: "Simplu",
    icon: "check",
    i: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 21
    }
  }), __jsx(BulletTitle, {
    title: "Rapid",
    icon: "bolt",
    i: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }), __jsx(BulletTitle, {
    title: "Intuitiv",
    icon: "lightbulb",
    i: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "jsx-4192841466" + " " + "main__buttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-4192841466" + " " + "main__button-sign-in",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, __jsx(Button, {
    type: "button--primary-ix",
    title: "Logheaza-te",
    icon: "sign-in-alt",
    link: "",
    onClick: showLoginModalHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 25
    }
  }), __jsx("p", {
    onClick: showRegisterModalHandler,
    className: "jsx-4192841466" + " " + "main__button-make-account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 25
    }
  }, "Nu ai cont? ", __jsx("a", {
    href: "#",
    className: "jsx-4192841466",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 41
    }
  }, "Fa-ti unul!"))), __jsx(Button, {
    type: "button--secondary-ix",
    title: "Vezi mai multe",
    icon: "ellipsis-h",
    link: "/informatii",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }))), __jsx(Wave, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4192841466",
    __self: this
  }, ".main.jsx-4192841466{width:100%;min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--text-primary);-webkit-transition:color 300ms ease;transition:color 300ms ease;}.main__content-panel.jsx-4192841466{text-align:center;position:relative;z-index:10;color:var(--text-primary);-webkit-transition:color 300ms ease;transition:color 300ms ease;}.main__primary-heading.jsx-4192841466{font-size:var(--font-larger);font-weight:800;}.main__bullets.jsx-4192841466{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin:0 0 80px;}.main__bullet.jsx-4192841466{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 30px;}.main__buttons.jsx-4192841466{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}@media screen and (max-width:520px){.main__content-panel.jsx-4192841466{margin:70px 30px;}.main__primary-heading.jsx-4192841466{font-size:var(--font-large);}.main__bullets.jsx-4192841466{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;padding-right:20px;}.main__buttons.jsx-4192841466{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin-bottom:40px;}.main__button-sign-in.jsx-4192841466{margin-bottom:40px;}}.main__button-make-account.jsx-4192841466{margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEhvbWVcXE1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0R3QixBQUdnQyxBQVVPLEFBUVcsQUFLaEIsQUFRQSxBQUtBLEFBTVEsQUFJVyxBQUlSLEFBT0UsQUFPSCxBQUtQLFdBcEVDLEtBcUVyQixDQTNCSSxDQWhDa0IsQ0FzRGxCLFNBL0RhLEFBNkNiLENBNUJnQixPQVBMLFNBUWYsRUFQOEIsMEJBQ0UsQ0FVTCxBQVFULEFBS2UsSUFxQk4sVUF6QjNCLGNBOUIyQixBQWdERyxtQ0FwQzlCLGtDQTRDNEIsRUFsQ0wsT0EyQlEsaUJBZC9CLElBbEN1QixpRUFzQlUsT0FrQ04sZ0JBUEEsR0FRdkIsRUF4RDBCLGNBaUQxQixZQWhENEIsZ0VBQ2hDLEtBb0JvQixnQkFDcEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcSG9tZVxcTWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuLi9nbG9iYWxzL1JlZ2lzdGVyXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi4vZ2xvYmFscy9Mb2dpblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xyXG4gICAgY29uc3QgW3JlZ2lzdGVyTW9kYWxWaXNpYmxlLCBzaG93UmVnaXN0ZXJNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBzaG93UmVnaXN0ZXJNb2RhbEhhbmRsZXIgPSAoKSA9PlxyXG4gICAgICAgIHNob3dSZWdpc3Rlck1vZGFsKCFyZWdpc3Rlck1vZGFsVmlzaWJsZSk7XHJcblxyXG4gICAgY29uc3QgW2xvZ2luTW9kYWxWaXNpYmxlLCBzaG93TG9naW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBzaG93TG9naW5Nb2RhbEhhbmRsZXIgPSAoKSA9PiBzaG93TG9naW5Nb2RhbCghbG9naW5Nb2RhbFZpc2libGUpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgICB7cmVnaXN0ZXJNb2RhbFZpc2libGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyIHNob3dSZWdpc3Rlck1vZGFsSGFuZGxlcj17c2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7bG9naW5Nb2RhbFZpc2libGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPExvZ2luIHNob3dMb2dpbk1vZGFsSGFuZGxlcj17c2hvd0xvZ2luTW9kYWxIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fX2NvbnRlbnQtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYWluX19wcmltYXJ5LWhlYWRpbmdcIj5pbmZvcGx1czwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fX2J1bGxldHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnVsbGV0VGl0bGUgdGl0bGU9XCJTaW1wbHVcIiBpY29uPVwiY2hlY2tcIiBpPVwiMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1bGxldFRpdGxlIHRpdGxlPVwiUmFwaWRcIiBpY29uPVwiYm9sdFwiIGk9XCIyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnVsbGV0VGl0bGUgdGl0bGU9XCJJbnR1aXRpdlwiIGljb249XCJsaWdodGJ1bGJcIiBpPVwiM1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fYnV0dG9uLXNpZ24taW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvbi0tcHJpbWFyeS1peFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkxvZ2hlYXphLXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJzaWduLWluLWFsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dMb2dpbk1vZGFsSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dSZWdpc3Rlck1vZGFsSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5fX2J1dHRvbi1tYWtlLWFjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdSBhaSBjb250PyA8YSBocmVmPVwiI1wiPkZhLXRpIHVudWwhPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uLS1zZWNvbmRhcnktaXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlZlemkgbWFpIG11bHRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImVsbGlwc2lzLWhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL2luZm9ybWF0aWlcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxXYXZlIC8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5tYWluIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9fY29udGVudC1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19wcmltYXJ5LWhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1sYXJnZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2J1bGxldHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCA4MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19idWxsZXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fY29udGVudC1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNzBweCAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5fX3ByaW1hcnktaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1sYXJnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fYnVsbGV0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19idXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fYnV0dG9uLXNpZ24taW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9fYnV0dG9uLW1ha2UtYWNjb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1bGxldFRpdGxlKHsgdGl0bGUsIGljb24sIGkgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fX2J1bGxldFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fX2ljb24tYnViYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17aWNvbn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtYWluX19idWxsZXQtaWNvbi0tJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1haW5fX3RlcnRpYXJ5LWhlYWRpbmdcIj57dGl0bGV9PC9oMz5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5tYWluX190ZXJ0aWFyeS1oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9faWNvbi1idWJibGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9fYnVsbGV0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggMjBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgubWFpbl9fYnVsbGV0LWljb24tLTEsIC5tYWluX19idWxsZXQtaWNvbi0tMiwgLm1haW5fX2J1bGxldC1pY29uLS0zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLm1haW5fX2J1bGxldC1pY29uLS0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLm1haW5fX2J1bGxldC1pY29uLS0yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgubWFpbl9fYnVsbGV0LWljb24tLTMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXRlcnRpYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fYnVsbGV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdXR0b24oeyB0eXBlLCB0aXRsZSwgaWNvbiwgbGluaywgb25DbGljayA9IG51bGwgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayBocmVmPXtsaW5rfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3R5cGV9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtpY29ufSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBXYXZlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDUlXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTkwMCAyODBcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluX19zdmdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTS0yLjc1NDY3IDcxLjEwM0MtMi43NTQ2NyA3MS4xMDMgNzgzLjUzMyAtODguNTM2IDEyMDQuMjQgNzEuMTAzQzE2MjQuOTQgMjMwLjc0MiAxOTE3LjI1IDU3LjMyMyAxOTE3LjI1IDU3LjMyM1Y0ODAuMDAzSC0yLjc1NDY3VjcxLjEwM1pcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ1JVwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE5MjAgMjgwXCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFpbl9fc3ZnXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGcgb3BhY2l0eT1cIjAuMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTE4OS4zNyAxNTcuMTcyQzEyMTEuNCAxNTMuMjggMTIyNi4xMSAxMzIuMjY1IDEyMjIuMjIgMTEwLjIzM0MxMjE4LjMzIDg4LjIwMDcgMTE5Ny4zMSA3My40OTUyIDExNzUuMjggNzcuMzg3MkMxMTUzLjI1IDgxLjI3OTEgMTEzOC41NCAxMDIuMjk1IDExNDIuNDMgMTI0LjMyN0MxMTQ2LjMyIDE0Ni4zNTkgMTE2Ny4zNCAxNjEuMDY0IDExODkuMzcgMTU3LjE3MlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAyOS4xMiAyNjcuNzU1QzEwNTEuMTUgMjYzLjg2MyAxMDY1Ljg2IDI0Mi44NDggMTA2MS45NyAyMjAuODE2QzEwNTguMDcgMTk4Ljc4NCAxMDM3LjA2IDE4NC4wNzggMTAxNS4wMyAxODcuOTdDOTkyLjk5NSAxOTEuODYyIDk3OC4yODkgMjEyLjg3OCA5ODIuMTgxIDIzNC45MUM5ODYuMDczIDI1Ni45NDIgMTAwNy4wOSAyNzEuNjQ3IDEwMjkuMTIgMjY3Ljc1NVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNODU0LjE5OSAxNDEuNDQ1TDk1MC41MiAxMTcuNDlMOTIzLjI5NSAyMTIuNzAxTDg1NC4xOTkgMTQxLjQ0NVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTc5NC44MyAyMzguNDMxTDE4NjYuMjMgMzA3LjQ1N0wxNzcxLjAxIDMzNC44MzZMMTc5NC44MyAyMzguNDMxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNzk0LjgzIDIzOC40MzFMMTg2Ni4yMyAzMDcuNDU3TDE3NzEuMDEgMzM0LjgzNkwxNzk0LjgzIDIzOC40MzFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1OTUuNjEgMjUwLjk5MUwxNTc0Ljk4IDMyMy4xMkwxNjQ3LjExIDM0My43NDZMMTY2Ny43NCAyNzEuNjE2TDE1OTUuNjEgMjUwLjk5MVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQ3Ni43IDI4MS4wNDdMMTQwNC41NiAzMDEuNzg4TDE0MjUuMzEgMzczLjkyNEwxNDk3LjQ0IDM1My4xODJMMTQ3Ni43IDI4MS4wNDdaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTExMjEuMTQgMzA4LjgzOUwxMTU2LjYxIDQwMS42TDEwNTguNzQgMzg2LjEwNkwxMTIxLjE0IDMwOC44MzlaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyMjguMDIgMjcwLjgyNEwxMjk0LjI3IDMwNi4wNDdMMTMyOS41IDIzOS43OTVMMTI2My4yNCAyMDQuNTcxTDEyMjguMDIgMjcwLjgyNFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTczNi42NSAyMjUuMDQ0QzE3NTguNjkgMjIxLjE1MiAxNzczLjM5IDIwMC4xMzcgMTc2OS41IDE3OC4xMDVDMTc2NS42MSAxNTYuMDczIDE3NDQuNTkgMTQxLjM2NyAxNzIyLjU2IDE0NS4yNTlDMTcwMC41MyAxNDkuMTUxIDE2ODUuODIgMTcwLjE2NyAxNjg5LjcyIDE5Mi4xOTlDMTY5My42MSAyMTQuMjMxIDE3MTQuNjIgMjI4LjkzNiAxNzM2LjY1IDIyNS4wNDRaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1MDAuNTQgMjI4LjE1NkMxNTIyLjU3IDIyNC4yNjQgMTUzNy4yOCAyMDMuMjQ5IDE1MzMuMzggMTgxLjIxN0MxNTI5LjQ5IDE1OS4xODUgMTUwOC40OCAxNDQuNDc5IDE0ODYuNDQgMTQ4LjM3MUMxNDY0LjQxIDE1Mi4yNjMgMTQ0OS43MSAxNzMuMjc5IDE0NTMuNiAxOTUuMzExQzE0NTcuNDkgMjE3LjM0MyAxNDc4LjUxIDIzMi4wNDggMTUwMC41NCAyMjguMTU2WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04NjQuNDAyIDMwNy45NTFMODUzLjk4NiAzODIuMjM4TDkyOC4yNzMgMzkyLjY1NUw5MzguNjkgMzE4LjM2N0w4NjQuNDAyIDMwNy45NTFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE4MzkuNDUgMTcxLjU3TDE5MzguNDUgMTc4LjY0MkwxODgzLjA3IDI2MC43MjdMMTgzOS40NSAxNzEuNTdaXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00NDQuMDk5IDI0NC42MDRDNDIyLjA2NyAyNDguNDk2IDQwNy4zNjEgMjY5LjUxMiA0MTEuMjUzIDI5MS41NDRDNDE1LjE0NSAzMTMuNTc2IDQzNi4xNjEgMzI4LjI4MSA0NTguMTkzIDMyNC4zODlDNDgwLjIyNSAzMjAuNDk4IDQ5NC45MyAyOTkuNDgyIDQ5MS4wMzggMjc3LjQ1QzQ4Ny4xNDYgMjU1LjQxOCA0NjYuMTMxIDI0MC43MTMgNDQ0LjA5OSAyNDQuNjA0WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk02MDQuMzUgMTM0LjAyMUM1ODIuMzE4IDEzNy45MTMgNTY3LjYxMiAxNTguOTI5IDU3MS41MDQgMTgwLjk2MUM1NzUuMzk2IDIwMi45OTMgNTk2LjQxMiAyMTcuNjk4IDYxOC40NDQgMjEzLjgwNkM2NDAuNDc2IDIwOS45MTUgNjU1LjE4MSAxODguODk5IDY1MS4yODkgMTY2Ljg2N0M2NDcuMzk3IDE0NC44MzUgNjI2LjM4MiAxMzAuMTMgNjA0LjM1IDEzNC4wMjFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTc3OS4yNzIgMjYwLjMzMkw2ODIuOTUxIDI4NC4yODdMNzEwLjE3NiAxODkuMDc2TDc3OS4yNzIgMjYwLjMzMlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzcuODYxNSAxNTAuNzg2TDU4LjQ4NjggNzguNjU2MkwtMTMuNjQyNyA1OC4wMzA5TC0zNC4yNjggMTMwLjE2TDM3Ljg2MTUgMTUwLjc4NlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTU2Ljc3MiAxMjAuNzNMMjI4LjkwNyA5OS45ODg1TDIwOC4xNjUgMjcuODUzMUwxMzYuMDMgNDguNTk0N0wxNTYuNzcyIDEyMC43M1pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTEyLjMzNSA5Mi45Mzc1TDQ3Ni44NjIgMC4xNzY1MTRMNTc0LjcyNyAxNS42NzA2TDUxMi4zMzUgOTIuOTM3NVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDA1LjQ1IDEzMC45NTNMMzM5LjE5OCA5NS43Mjk1TDMwMy45NzUgMTYxLjk4MkwzNzAuMjI3IDE5Ny4yMDVMNDA1LjQ1IDEzMC45NTNaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEzMi45MzMgMTczLjYyQzExMC45MDEgMTc3LjUxMiA5Ni4xOTUyIDE5OC41MjggMTAwLjA4NyAyMjAuNTZDMTAzLjk3OSAyNDIuNTkyIDEyNC45OTUgMjU3LjI5NyAxNDcuMDI3IDI1My40MDVDMTY5LjA1OSAyNDkuNTE0IDE4My43NjQgMjI4LjQ5OCAxNzkuODcyIDIwNi40NjZDMTc1Ljk4IDE4NC40MzQgMTU0Ljk2NSAxNjkuNzI5IDEzMi45MzMgMTczLjYyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk03NjkuMDY4IDkzLjgyNjFMNzc5LjQ4NSAxOS41Mzg1TDcwNS4xOTcgOS4xMjE2Nkw2OTQuNzgxIDgzLjQwOTJMNzY5LjA2OCA5My44MjYxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNzcuMDUzIDMzMS41MjZMMTg0LjQyOCAyOTUuODYzTDI2MS4zNjUgMjMzLjUyTDI3Ny4wNTMgMzMxLjUyNlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5fX3N2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYWluX19zdmc6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fc3ZnIGcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjNjI2MjYyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\Home\\\\Main.js */"));
}

function BulletTitle({
  title,
  icon,
  i
}) {
  return __jsx("div", {
    className: "jsx-2657388571" + " " + "main__bullet",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2657388571" + " " + "main__icon-bubble",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: icon,
    className: `main__bullet-icon--${i}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 17
    }
  })), __jsx("h3", {
    className: "jsx-2657388571" + " " + "main__tertiary-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 13
    }
  }, title), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2657388571",
    __self: this
  }, ".main__tertiary-heading.jsx-2657388571{font-weight:lighter;}.main__icon-bubble.jsx-2657388571{width:30px;height:30px;background-color:var(--background-quaternary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;border-radius:50%;margin-right:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.main__bullet.jsx-2657388571{margin:30px 20px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.main__bullet-icon--1,.main__bullet-icon--2,.main__bullet-icon--3{width:15px;height:15px;}.main__bullet-icon--1{color:var(--accent-primary);-webkit-transition:color 300ms ease;transition:color 300ms ease;}.main__bullet-icon--2{color:var(--accent-secondary);-webkit-transition:color 300ms ease;transition:color 300ms ease;}.main__bullet-icon--3{color:var(--accent-tertiary);-webkit-transition:color 300ms ease;transition:color 300ms ease;}@media screen and (max-width:520px){.main__bullet.jsx-2657388571{margin-left:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEhvbWVcXE1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0l3QixBQUd5QyxBQUlULEFBWVEsQUFLUixBQUtpQixBQUtFLEFBS0QsQUFLWCxXQXBDTixBQWlCQSxHQW9CWixLQXpCYSxDQWhCakIsR0FLa0QsQUFpQmxELEtBSWdDLENBVUEsQ0FMQSx1Q0F6QlcsdUJBcUIzQyxDQVZBLEFBb0JBLENBTEEsNkRBekJzQixrQkFDQSxrQkFDTCwwRUFDVSxtR0FDSiw2RkFDdkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcSG9tZVxcTWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuLi9nbG9iYWxzL1JlZ2lzdGVyXCI7XHJcbmltcG9ydCBMb2dpbiBmcm9tIFwiLi4vZ2xvYmFscy9Mb2dpblwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYWluKCkge1xyXG4gICAgY29uc3QgW3JlZ2lzdGVyTW9kYWxWaXNpYmxlLCBzaG93UmVnaXN0ZXJNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBzaG93UmVnaXN0ZXJNb2RhbEhhbmRsZXIgPSAoKSA9PlxyXG4gICAgICAgIHNob3dSZWdpc3Rlck1vZGFsKCFyZWdpc3Rlck1vZGFsVmlzaWJsZSk7XHJcblxyXG4gICAgY29uc3QgW2xvZ2luTW9kYWxWaXNpYmxlLCBzaG93TG9naW5Nb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBzaG93TG9naW5Nb2RhbEhhbmRsZXIgPSAoKSA9PiBzaG93TG9naW5Nb2RhbCghbG9naW5Nb2RhbFZpc2libGUpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgICAgICB7cmVnaXN0ZXJNb2RhbFZpc2libGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPFJlZ2lzdGVyIHNob3dSZWdpc3Rlck1vZGFsSGFuZGxlcj17c2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICB7bG9naW5Nb2RhbFZpc2libGUgJiYgKFxyXG4gICAgICAgICAgICAgICAgPExvZ2luIHNob3dMb2dpbk1vZGFsSGFuZGxlcj17c2hvd0xvZ2luTW9kYWxIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fX2NvbnRlbnQtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtYWluX19wcmltYXJ5LWhlYWRpbmdcIj5pbmZvcGx1czwvaDE+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fX2J1bGxldHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QnVsbGV0VGl0bGUgdGl0bGU9XCJTaW1wbHVcIiBpY29uPVwiY2hlY2tcIiBpPVwiMVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1bGxldFRpdGxlIHRpdGxlPVwiUmFwaWRcIiBpY29uPVwiYm9sdFwiIGk9XCIyXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnVsbGV0VGl0bGUgdGl0bGU9XCJJbnR1aXRpdlwiIGljb249XCJsaWdodGJ1bGJcIiBpPVwiM1wiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fYnV0dG9uc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fYnV0dG9uLXNpZ24taW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvbi0tcHJpbWFyeS1peFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkxvZ2hlYXphLXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJzaWduLWluLWFsdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dMb2dpbk1vZGFsSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dSZWdpc3Rlck1vZGFsSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5fX2J1dHRvbi1tYWtlLWFjY291bnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBOdSBhaSBjb250PyA8YSBocmVmPVwiI1wiPkZhLXRpIHVudWwhPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uLS1zZWNvbmRhcnktaXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlZlemkgbWFpIG11bHRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImVsbGlwc2lzLWhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL2luZm9ybWF0aWlcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxXYXZlIC8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5tYWluIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9fY29udGVudC1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19wcmltYXJ5LWhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1sYXJnZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2J1bGxldHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCA4MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19idWxsZXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fY29udGVudC1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNzBweCAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5fX3ByaW1hcnktaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1sYXJnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fYnVsbGV0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19idXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fYnV0dG9uLXNpZ24taW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9fYnV0dG9uLW1ha2UtYWNjb3VudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1bGxldFRpdGxlKHsgdGl0bGUsIGljb24sIGkgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fX2J1bGxldFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fX2ljb24tYnViYmxlXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj17aWNvbn1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BtYWluX19idWxsZXQtaWNvbi0tJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1haW5fX3RlcnRpYXJ5LWhlYWRpbmdcIj57dGl0bGV9PC9oMz5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5tYWluX190ZXJ0aWFyeS1oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9faWNvbi1idWJibGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9fYnVsbGV0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggMjBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgubWFpbl9fYnVsbGV0LWljb24tLTEsIC5tYWluX19idWxsZXQtaWNvbi0tMiwgLm1haW5fX2J1bGxldC1pY29uLS0zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLm1haW5fX2J1bGxldC1pY29uLS0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLm1haW5fX2J1bGxldC1pY29uLS0yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgubWFpbl9fYnVsbGV0LWljb24tLTMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXRlcnRpYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fYnVsbGV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdXR0b24oeyB0eXBlLCB0aXRsZSwgaWNvbiwgbGluaywgb25DbGljayA9IG51bGwgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayBocmVmPXtsaW5rfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3R5cGV9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtpY29ufSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBXYXZlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDUlXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTkwMCAyODBcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluX19zdmdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTS0yLjc1NDY3IDcxLjEwM0MtMi43NTQ2NyA3MS4xMDMgNzgzLjUzMyAtODguNTM2IDEyMDQuMjQgNzEuMTAzQzE2MjQuOTQgMjMwLjc0MiAxOTE3LjI1IDU3LjMyMyAxOTE3LjI1IDU3LjMyM1Y0ODAuMDAzSC0yLjc1NDY3VjcxLjEwM1pcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ1JVwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE5MjAgMjgwXCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFpbl9fc3ZnXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGcgb3BhY2l0eT1cIjAuMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTE4OS4zNyAxNTcuMTcyQzEyMTEuNCAxNTMuMjggMTIyNi4xMSAxMzIuMjY1IDEyMjIuMjIgMTEwLjIzM0MxMjE4LjMzIDg4LjIwMDcgMTE5Ny4zMSA3My40OTUyIDExNzUuMjggNzcuMzg3MkMxMTUzLjI1IDgxLjI3OTEgMTEzOC41NCAxMDIuMjk1IDExNDIuNDMgMTI0LjMyN0MxMTQ2LjMyIDE0Ni4zNTkgMTE2Ny4zNCAxNjEuMDY0IDExODkuMzcgMTU3LjE3MlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAyOS4xMiAyNjcuNzU1QzEwNTEuMTUgMjYzLjg2MyAxMDY1Ljg2IDI0Mi44NDggMTA2MS45NyAyMjAuODE2QzEwNTguMDcgMTk4Ljc4NCAxMDM3LjA2IDE4NC4wNzggMTAxNS4wMyAxODcuOTdDOTkyLjk5NSAxOTEuODYyIDk3OC4yODkgMjEyLjg3OCA5ODIuMTgxIDIzNC45MUM5ODYuMDczIDI1Ni45NDIgMTAwNy4wOSAyNzEuNjQ3IDEwMjkuMTIgMjY3Ljc1NVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNODU0LjE5OSAxNDEuNDQ1TDk1MC41MiAxMTcuNDlMOTIzLjI5NSAyMTIuNzAxTDg1NC4xOTkgMTQxLjQ0NVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTc5NC44MyAyMzguNDMxTDE4NjYuMjMgMzA3LjQ1N0wxNzcxLjAxIDMzNC44MzZMMTc5NC44MyAyMzguNDMxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNzk0LjgzIDIzOC40MzFMMTg2Ni4yMyAzMDcuNDU3TDE3NzEuMDEgMzM0LjgzNkwxNzk0LjgzIDIzOC40MzFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1OTUuNjEgMjUwLjk5MUwxNTc0Ljk4IDMyMy4xMkwxNjQ3LjExIDM0My43NDZMMTY2Ny43NCAyNzEuNjE2TDE1OTUuNjEgMjUwLjk5MVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQ3Ni43IDI4MS4wNDdMMTQwNC41NiAzMDEuNzg4TDE0MjUuMzEgMzczLjkyNEwxNDk3LjQ0IDM1My4xODJMMTQ3Ni43IDI4MS4wNDdaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTExMjEuMTQgMzA4LjgzOUwxMTU2LjYxIDQwMS42TDEwNTguNzQgMzg2LjEwNkwxMTIxLjE0IDMwOC44MzlaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyMjguMDIgMjcwLjgyNEwxMjk0LjI3IDMwNi4wNDdMMTMyOS41IDIzOS43OTVMMTI2My4yNCAyMDQuNTcxTDEyMjguMDIgMjcwLjgyNFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTczNi42NSAyMjUuMDQ0QzE3NTguNjkgMjIxLjE1MiAxNzczLjM5IDIwMC4xMzcgMTc2OS41IDE3OC4xMDVDMTc2NS42MSAxNTYuMDczIDE3NDQuNTkgMTQxLjM2NyAxNzIyLjU2IDE0NS4yNTlDMTcwMC41MyAxNDkuMTUxIDE2ODUuODIgMTcwLjE2NyAxNjg5LjcyIDE5Mi4xOTlDMTY5My42MSAyMTQuMjMxIDE3MTQuNjIgMjI4LjkzNiAxNzM2LjY1IDIyNS4wNDRaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1MDAuNTQgMjI4LjE1NkMxNTIyLjU3IDIyNC4yNjQgMTUzNy4yOCAyMDMuMjQ5IDE1MzMuMzggMTgxLjIxN0MxNTI5LjQ5IDE1OS4xODUgMTUwOC40OCAxNDQuNDc5IDE0ODYuNDQgMTQ4LjM3MUMxNDY0LjQxIDE1Mi4yNjMgMTQ0OS43MSAxNzMuMjc5IDE0NTMuNiAxOTUuMzExQzE0NTcuNDkgMjE3LjM0MyAxNDc4LjUxIDIzMi4wNDggMTUwMC41NCAyMjguMTU2WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04NjQuNDAyIDMwNy45NTFMODUzLjk4NiAzODIuMjM4TDkyOC4yNzMgMzkyLjY1NUw5MzguNjkgMzE4LjM2N0w4NjQuNDAyIDMwNy45NTFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE4MzkuNDUgMTcxLjU3TDE5MzguNDUgMTc4LjY0MkwxODgzLjA3IDI2MC43MjdMMTgzOS40NSAxNzEuNTdaXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00NDQuMDk5IDI0NC42MDRDNDIyLjA2NyAyNDguNDk2IDQwNy4zNjEgMjY5LjUxMiA0MTEuMjUzIDI5MS41NDRDNDE1LjE0NSAzMTMuNTc2IDQzNi4xNjEgMzI4LjI4MSA0NTguMTkzIDMyNC4zODlDNDgwLjIyNSAzMjAuNDk4IDQ5NC45MyAyOTkuNDgyIDQ5MS4wMzggMjc3LjQ1QzQ4Ny4xNDYgMjU1LjQxOCA0NjYuMTMxIDI0MC43MTMgNDQ0LjA5OSAyNDQuNjA0WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk02MDQuMzUgMTM0LjAyMUM1ODIuMzE4IDEzNy45MTMgNTY3LjYxMiAxNTguOTI5IDU3MS41MDQgMTgwLjk2MUM1NzUuMzk2IDIwMi45OTMgNTk2LjQxMiAyMTcuNjk4IDYxOC40NDQgMjEzLjgwNkM2NDAuNDc2IDIwOS45MTUgNjU1LjE4MSAxODguODk5IDY1MS4yODkgMTY2Ljg2N0M2NDcuMzk3IDE0NC44MzUgNjI2LjM4MiAxMzAuMTMgNjA0LjM1IDEzNC4wMjFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTc3OS4yNzIgMjYwLjMzMkw2ODIuOTUxIDI4NC4yODdMNzEwLjE3NiAxODkuMDc2TDc3OS4yNzIgMjYwLjMzMlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzcuODYxNSAxNTAuNzg2TDU4LjQ4NjggNzguNjU2MkwtMTMuNjQyNyA1OC4wMzA5TC0zNC4yNjggMTMwLjE2TDM3Ljg2MTUgMTUwLjc4NlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTU2Ljc3MiAxMjAuNzNMMjI4LjkwNyA5OS45ODg1TDIwOC4xNjUgMjcuODUzMUwxMzYuMDMgNDguNTk0N0wxNTYuNzcyIDEyMC43M1pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTEyLjMzNSA5Mi45Mzc1TDQ3Ni44NjIgMC4xNzY1MTRMNTc0LjcyNyAxNS42NzA2TDUxMi4zMzUgOTIuOTM3NVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDA1LjQ1IDEzMC45NTNMMzM5LjE5OCA5NS43Mjk1TDMwMy45NzUgMTYxLjk4MkwzNzAuMjI3IDE5Ny4yMDVMNDA1LjQ1IDEzMC45NTNaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEzMi45MzMgMTczLjYyQzExMC45MDEgMTc3LjUxMiA5Ni4xOTUyIDE5OC41MjggMTAwLjA4NyAyMjAuNTZDMTAzLjk3OSAyNDIuNTkyIDEyNC45OTUgMjU3LjI5NyAxNDcuMDI3IDI1My40MDVDMTY5LjA1OSAyNDkuNTE0IDE4My43NjQgMjI4LjQ5OCAxNzkuODcyIDIwNi40NjZDMTc1Ljk4IDE4NC40MzQgMTU0Ljk2NSAxNjkuNzI5IDEzMi45MzMgMTczLjYyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk03NjkuMDY4IDkzLjgyNjFMNzc5LjQ4NSAxOS41Mzg1TDcwNS4xOTcgOS4xMjE2Nkw2OTQuNzgxIDgzLjQwOTJMNzY5LjA2OCA5My44MjYxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNzcuMDUzIDMzMS41MjZMMTg0LjQyOCAyOTUuODYzTDI2MS4zNjUgMjMzLjUyTDI3Ny4wNTMgMzMxLjUyNlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5fX3N2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYWluX19zdmc6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fc3ZnIGcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjNjI2MjYyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\Home\\\\Main.js */"));
}

function Button({
  type,
  title,
  icon,
  link,
  onClick = null
}) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: type,
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }, title, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 17
    }
  })));
}

function Wave() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("svg", {
    width: "100%",
    height: "45%",
    viewBox: "0 0 1900 280",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "none",
    className: "jsx-3166235118" + " " + "main__svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: "M-2.75467 71.103C-2.75467 71.103 783.533 -88.536 1204.24 71.103C1624.94 230.742 1917.25 57.323 1917.25 57.323V480.003H-2.75467V71.103Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 17
    }
  })), __jsx("svg", {
    width: "100%",
    height: "45%",
    viewBox: "0 0 1920 280",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-3166235118" + " " + "main__svg",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }
  }, __jsx("g", {
    opacity: "0.1",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226,
      columnNumber: 17
    }
  }, __jsx("path", {
    d: "M1189.37 157.172C1211.4 153.28 1226.11 132.265 1222.22 110.233C1218.33 88.2007 1197.31 73.4952 1175.28 77.3872C1153.25 81.2791 1138.54 102.295 1142.43 124.327C1146.32 146.359 1167.34 161.064 1189.37 157.172Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1029.12 267.755C1051.15 263.863 1065.86 242.848 1061.97 220.816C1058.07 198.784 1037.06 184.078 1015.03 187.97C992.995 191.862 978.289 212.878 982.181 234.91C986.073 256.942 1007.09 271.647 1029.12 267.755Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M854.199 141.445L950.52 117.49L923.295 212.701L854.199 141.445Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1794.83 238.431L1866.23 307.457L1771.01 334.836L1794.83 238.431Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1794.83 238.431L1866.23 307.457L1771.01 334.836L1794.83 238.431Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1595.61 250.991L1574.98 323.12L1647.11 343.746L1667.74 271.616L1595.61 250.991Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1476.7 281.047L1404.56 301.788L1425.31 373.924L1497.44 353.182L1476.7 281.047Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1121.14 308.839L1156.61 401.6L1058.74 386.106L1121.14 308.839Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1228.02 270.824L1294.27 306.047L1329.5 239.795L1263.24 204.571L1228.02 270.824Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1736.65 225.044C1758.69 221.152 1773.39 200.137 1769.5 178.105C1765.61 156.073 1744.59 141.367 1722.56 145.259C1700.53 149.151 1685.82 170.167 1689.72 192.199C1693.61 214.231 1714.62 228.936 1736.65 225.044Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1500.54 228.156C1522.57 224.264 1537.28 203.249 1533.38 181.217C1529.49 159.185 1508.48 144.479 1486.44 148.371C1464.41 152.263 1449.71 173.279 1453.6 195.311C1457.49 217.343 1478.51 232.048 1500.54 228.156Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M864.402 307.951L853.986 382.238L928.273 392.655L938.69 318.367L864.402 307.951Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1839.45 171.57L1938.45 178.642L1883.07 260.727L1839.45 171.57Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M444.099 244.604C422.067 248.496 407.361 269.512 411.253 291.544C415.145 313.576 436.161 328.281 458.193 324.389C480.225 320.498 494.93 299.482 491.038 277.45C487.146 255.418 466.131 240.713 444.099 244.604Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M604.35 134.021C582.318 137.913 567.612 158.929 571.504 180.961C575.396 202.993 596.412 217.698 618.444 213.806C640.476 209.915 655.181 188.899 651.289 166.867C647.397 144.835 626.382 130.13 604.35 134.021Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M779.272 260.332L682.951 284.287L710.176 189.076L779.272 260.332Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M37.8615 150.786L58.4868 78.6562L-13.6427 58.0309L-34.268 130.16L37.8615 150.786Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M156.772 120.73L228.907 99.9885L208.165 27.8531L136.03 48.5947L156.772 120.73Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M512.335 92.9375L476.862 0.176514L574.727 15.6706L512.335 92.9375Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M405.45 130.953L339.198 95.7295L303.975 161.982L370.227 197.205L405.45 130.953Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M132.933 173.62C110.901 177.512 96.1952 198.528 100.087 220.56C103.979 242.592 124.995 257.297 147.027 253.405C169.059 249.514 183.764 228.498 179.872 206.466C175.98 184.434 154.965 169.729 132.933 173.62Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M769.068 93.8261L779.485 19.5385L705.197 9.12166L694.781 83.4092L769.068 93.8261Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M277.053 331.526L184.428 295.863L261.365 233.52L277.053 331.526Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 21
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3166235118",
    __self: this
  }, ".main__svg.jsx-3166235118{position:absolute;bottom:0;fill:var(--background-secondary);-webkit-transition:fill 300ms ease;transition:fill 300ms ease;}@media screen and (max-width:740px){.main__svg.jsx-3166235118:last-child{display:none;}}.main__svg.jsx-3166235118 g.jsx-3166235118{fill:#626262;-webkit-transition:fill 300ms ease;transition:fill 300ms ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEhvbWVcXE1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNlBpQixBQUcyQyxBQVFELEFBS0osYUFKYixBQUsyQixLQWJsQixTQUN3QixpQ0FDTixlQVkvQiwrQ0FYQSIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxIb21lXFxNYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4uL2dsb2JhbHMvUmVnaXN0ZXJcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuLi9nbG9iYWxzL0xvZ2luXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgICBjb25zdCBbcmVnaXN0ZXJNb2RhbFZpc2libGUsIHNob3dSZWdpc3Rlck1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHNob3dSZWdpc3Rlck1vZGFsSGFuZGxlciA9ICgpID0+XHJcbiAgICAgICAgc2hvd1JlZ2lzdGVyTW9kYWwoIXJlZ2lzdGVyTW9kYWxWaXNpYmxlKTtcclxuXHJcbiAgICBjb25zdCBbbG9naW5Nb2RhbFZpc2libGUsIHNob3dMb2dpbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHNob3dMb2dpbk1vZGFsSGFuZGxlciA9ICgpID0+IHNob3dMb2dpbk1vZGFsKCFsb2dpbk1vZGFsVmlzaWJsZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgICAgIHtyZWdpc3Rlck1vZGFsVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXIgc2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyPXtzaG93UmVnaXN0ZXJNb2RhbEhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtsb2dpbk1vZGFsVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TG9naW4gc2hvd0xvZ2luTW9kYWxIYW5kbGVyPXtzaG93TG9naW5Nb2RhbEhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fY29udGVudC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1haW5fX3ByaW1hcnktaGVhZGluZ1wiPmluZm9wbHVzPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fYnVsbGV0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdWxsZXRUaXRsZSB0aXRsZT1cIlNpbXBsdVwiIGljb249XCJjaGVja1wiIGk9XCIxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnVsbGV0VGl0bGUgdGl0bGU9XCJSYXBpZFwiIGljb249XCJib2x0XCIgaT1cIjJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdWxsZXRUaXRsZSB0aXRsZT1cIkludHVpdGl2XCIgaWNvbj1cImxpZ2h0YnVsYlwiIGk9XCIzXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19idXR0b24tc2lnbi1pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uLS1wcmltYXJ5LWl4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTG9naGVhemEtdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInNpZ24taW4tYWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd0xvZ2luTW9kYWxIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFpbl9fYnV0dG9uLW1ha2UtYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51IGFpIGNvbnQ/IDxhIGhyZWY9XCIjXCI+RmEtdGkgdW51bCE8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b24tLXNlY29uZGFyeS1peFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVmV6aSBtYWkgbXVsdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZWxsaXBzaXMtaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCIvaW5mb3JtYXRpaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFdhdmUgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLm1haW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19jb250ZW50LXBhbmVsIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX3ByaW1hcnktaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LWxhcmdlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9fYnVsbGV0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDgwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2J1bGxldCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9fYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19jb250ZW50LXBhbmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA3MHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fcHJpbWFyeS1oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LWxhcmdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19idWxsZXRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5fX2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19idXR0b24tc2lnbi1pbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19idXR0b24tbWFrZS1hY2NvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQnVsbGV0VGl0bGUoeyB0aXRsZSwgaWNvbiwgaSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fYnVsbGV0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9faWNvbi1idWJibGVcIj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1haW5fX2J1bGxldC1pY29uLS0ke2l9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWFpbl9fdGVydGlhcnktaGVhZGluZ1wiPnt0aXRsZX08L2gzPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLm1haW5fX3RlcnRpYXJ5LWhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19pY29uLWJ1YmJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19idWxsZXQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMzBweCAyMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5tYWluX19idWxsZXQtaWNvbi0tMSwgLm1haW5fX2J1bGxldC1pY29uLS0yLCAubWFpbl9fYnVsbGV0LWljb24tLTMpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgubWFpbl9fYnVsbGV0LWljb24tLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgubWFpbl9fYnVsbGV0LWljb24tLTIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5tYWluX19idWxsZXQtaWNvbi0tMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtdGVydGlhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19idWxsZXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1dHRvbih7IHR5cGUsIHRpdGxlLCBpY29uLCBsaW5rLCBvbkNsaWNrID0gbnVsbCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dHlwZX0gb25DbGljaz17b25DbGlja30+XHJcbiAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ljb259IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFdhdmUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NSVcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxOTAwIDI4MFwiXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5fX3N2Z1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNLTIuNzU0NjcgNzEuMTAzQy0yLjc1NDY3IDcxLjEwMyA3ODMuNTMzIC04OC41MzYgMTIwNC4yNCA3MS4xMDNDMTYyNC45NCAyMzAuNzQyIDE5MTcuMjUgNTcuMzIzIDE5MTcuMjUgNTcuMzIzVjQ4MC4wMDNILTIuNzU0NjdWNzEuMTAzWlwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDUlXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTkyMCAyODBcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluX19zdmdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZyBvcGFjaXR5PVwiMC4xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMTg5LjM3IDE1Ny4xNzJDMTIxMS40IDE1My4yOCAxMjI2LjExIDEzMi4yNjUgMTIyMi4yMiAxMTAuMjMzQzEyMTguMzMgODguMjAwNyAxMTk3LjMxIDczLjQ5NTIgMTE3NS4yOCA3Ny4zODcyQzExNTMuMjUgODEuMjc5MSAxMTM4LjU0IDEwMi4yOTUgMTE0Mi40MyAxMjQuMzI3QzExNDYuMzIgMTQ2LjM1OSAxMTY3LjM0IDE2MS4wNjQgMTE4OS4zNyAxNTcuMTcyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMDI5LjEyIDI2Ny43NTVDMTA1MS4xNSAyNjMuODYzIDEwNjUuODYgMjQyLjg0OCAxMDYxLjk3IDIyMC44MTZDMTA1OC4wNyAxOTguNzg0IDEwMzcuMDYgMTg0LjA3OCAxMDE1LjAzIDE4Ny45N0M5OTIuOTk1IDE5MS44NjIgOTc4LjI4OSAyMTIuODc4IDk4Mi4xODEgMjM0LjkxQzk4Ni4wNzMgMjU2Ljk0MiAxMDA3LjA5IDI3MS42NDcgMTAyOS4xMiAyNjcuNzU1WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04NTQuMTk5IDE0MS40NDVMOTUwLjUyIDExNy40OUw5MjMuMjk1IDIxMi43MDFMODU0LjE5OSAxNDEuNDQ1WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNzk0LjgzIDIzOC40MzFMMTg2Ni4yMyAzMDcuNDU3TDE3NzEuMDEgMzM0LjgzNkwxNzk0LjgzIDIzOC40MzFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE3OTQuODMgMjM4LjQzMUwxODY2LjIzIDMwNy40NTdMMTc3MS4wMSAzMzQuODM2TDE3OTQuODMgMjM4LjQzMVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTU5NS42MSAyNTAuOTkxTDE1NzQuOTggMzIzLjEyTDE2NDcuMTEgMzQzLjc0NkwxNjY3Ljc0IDI3MS42MTZMMTU5NS42MSAyNTAuOTkxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNDc2LjcgMjgxLjA0N0wxNDA0LjU2IDMwMS43ODhMMTQyNS4zMSAzNzMuOTI0TDE0OTcuNDQgMzUzLjE4MkwxNDc2LjcgMjgxLjA0N1pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTEyMS4xNCAzMDguODM5TDExNTYuNjEgNDAxLjZMMTA1OC43NCAzODYuMTA2TDExMjEuMTQgMzA4LjgzOVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIyOC4wMiAyNzAuODI0TDEyOTQuMjcgMzA2LjA0N0wxMzI5LjUgMjM5Ljc5NUwxMjYzLjI0IDIwNC41NzFMMTIyOC4wMiAyNzAuODI0WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNzM2LjY1IDIyNS4wNDRDMTc1OC42OSAyMjEuMTUyIDE3NzMuMzkgMjAwLjEzNyAxNzY5LjUgMTc4LjEwNUMxNzY1LjYxIDE1Ni4wNzMgMTc0NC41OSAxNDEuMzY3IDE3MjIuNTYgMTQ1LjI1OUMxNzAwLjUzIDE0OS4xNTEgMTY4NS44MiAxNzAuMTY3IDE2ODkuNzIgMTkyLjE5OUMxNjkzLjYxIDIxNC4yMzEgMTcxNC42MiAyMjguOTM2IDE3MzYuNjUgMjI1LjA0NFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUwMC41NCAyMjguMTU2QzE1MjIuNTcgMjI0LjI2NCAxNTM3LjI4IDIwMy4yNDkgMTUzMy4zOCAxODEuMjE3QzE1MjkuNDkgMTU5LjE4NSAxNTA4LjQ4IDE0NC40NzkgMTQ4Ni40NCAxNDguMzcxQzE0NjQuNDEgMTUyLjI2MyAxNDQ5LjcxIDE3My4yNzkgMTQ1My42IDE5NS4zMTFDMTQ1Ny40OSAyMTcuMzQzIDE0NzguNTEgMjMyLjA0OCAxNTAwLjU0IDIyOC4xNTZaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTg2NC40MDIgMzA3Ljk1MUw4NTMuOTg2IDM4Mi4yMzhMOTI4LjI3MyAzOTIuNjU1TDkzOC42OSAzMTguMzY3TDg2NC40MDIgMzA3Ljk1MVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTgzOS40NSAxNzEuNTdMMTkzOC40NSAxNzguNjQyTDE4ODMuMDcgMjYwLjcyN0wxODM5LjQ1IDE3MS41N1pcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQ0NC4wOTkgMjQ0LjYwNEM0MjIuMDY3IDI0OC40OTYgNDA3LjM2MSAyNjkuNTEyIDQxMS4yNTMgMjkxLjU0NEM0MTUuMTQ1IDMxMy41NzYgNDM2LjE2MSAzMjguMjgxIDQ1OC4xOTMgMzI0LjM4OUM0ODAuMjI1IDMyMC40OTggNDk0LjkzIDI5OS40ODIgNDkxLjAzOCAyNzcuNDVDNDg3LjE0NiAyNTUuNDE4IDQ2Ni4xMzEgMjQwLjcxMyA0NDQuMDk5IDI0NC42MDRaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTYwNC4zNSAxMzQuMDIxQzU4Mi4zMTggMTM3LjkxMyA1NjcuNjEyIDE1OC45MjkgNTcxLjUwNCAxODAuOTYxQzU3NS4zOTYgMjAyLjk5MyA1OTYuNDEyIDIxNy42OTggNjE4LjQ0NCAyMTMuODA2QzY0MC40NzYgMjA5LjkxNSA2NTUuMTgxIDE4OC44OTkgNjUxLjI4OSAxNjYuODY3QzY0Ny4zOTcgMTQ0LjgzNSA2MjYuMzgyIDEzMC4xMyA2MDQuMzUgMTM0LjAyMVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNzc5LjI3MiAyNjAuMzMyTDY4Mi45NTEgMjg0LjI4N0w3MTAuMTc2IDE4OS4wNzZMNzc5LjI3MiAyNjAuMzMyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zNy44NjE1IDE1MC43ODZMNTguNDg2OCA3OC42NTYyTC0xMy42NDI3IDU4LjAzMDlMLTM0LjI2OCAxMzAuMTZMMzcuODYxNSAxNTAuNzg2WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNTYuNzcyIDEyMC43M0wyMjguOTA3IDk5Ljk4ODVMMjA4LjE2NSAyNy44NTMxTDEzNi4wMyA0OC41OTQ3TDE1Ni43NzIgMTIwLjczWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01MTIuMzM1IDkyLjkzNzVMNDc2Ljg2MiAwLjE3NjUxNEw1NzQuNzI3IDE1LjY3MDZMNTEyLjMzNSA5Mi45Mzc1WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MDUuNDUgMTMwLjk1M0wzMzkuMTk4IDk1LjcyOTVMMzAzLjk3NSAxNjEuOTgyTDM3MC4yMjcgMTk3LjIwNUw0MDUuNDUgMTMwLjk1M1pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTMyLjkzMyAxNzMuNjJDMTEwLjkwMSAxNzcuNTEyIDk2LjE5NTIgMTk4LjUyOCAxMDAuMDg3IDIyMC41NkMxMDMuOTc5IDI0Mi41OTIgMTI0Ljk5NSAyNTcuMjk3IDE0Ny4wMjcgMjUzLjQwNUMxNjkuMDU5IDI0OS41MTQgMTgzLjc2NCAyMjguNDk4IDE3OS44NzIgMjA2LjQ2NkMxNzUuOTggMTg0LjQzNCAxNTQuOTY1IDE2OS43MjkgMTMyLjkzMyAxNzMuNjJaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTc2OS4wNjggOTMuODI2MUw3NzkuNDg1IDE5LjUzODVMNzA1LjE5NyA5LjEyMTY2TDY5NC43ODEgODMuNDA5Mkw3NjkuMDY4IDkzLjgyNjFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI3Ny4wNTMgMzMxLjUyNkwxODQuNDI4IDI5NS44NjNMMjYxLjM2NSAyMzMuNTJMMjc3LjA1MyAzMzEuNTI2WlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1haW5fX3N2ZzpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19zdmcgZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICM2MjYyNjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\Home\\\\Main.js */"));
}

/***/ }),

/***/ "./components/Home/Perks.js":
/*!**********************************!*\
  !*** ./components/Home/Perks.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Perks; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\Home\\Perks.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Perks() {
  return __jsx("section", {
    className: "jsx-77020266" + " " + "perks",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-77020266" + " " + "perks__heading-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }, __jsx("hr", {
    className: "jsx-77020266" + " " + "perks__hr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 17
    }
  }), __jsx("h1", {
    className: "jsx-77020266" + " " + "perks__heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, "De ce este mai bun infoplus?")), __jsx(PerkPanel, {
    title: "Vitez\u0103",
    icon: "bolt",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }, "infoplus a fost conceput cu eficien\u021B\u0103, accesibilitate \u0219i vitez\u0103 de \xEEnc\u0103rcare \xEEn considerare, pentru a conferi calculatoarelor \u0219colare deficitare o experien\u021B\u0103 pl\u0103cut\u0103."), __jsx(PerkPanel, {
    title: "Convenien\u021B\u0103",
    icon: "coffee",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }
  }, "Cu tr\u0103s\u0103turi f\u0103cute pentru a u\u0219uravia\u021Ba at\xE2t celui care pred\u0103, c\xE2t \u0219i a elevului, toate necesit\u0103\u021Bile cheiesunt la un click dep\u0103rtare, construite intuitiv."), __jsx(PerkPanel, {
    title: "Utilitate",
    icon: "tools",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, "Am creat pentru acest site utilit\u0103\u021Bi care chiar sunt dorite, \u0219i folositoare \xEEnvia\u021Ba real\u0103, cum ar fi: mod proiector, tem\u0103 \xEEntunecat\u0103, \u0219i altele."), __jsx(PerkPanel, {
    title: "Stabilitate",
    icon: "mountain",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, "Teama c\u0103 site-ul poate va fi offline temporar \u0219i nu vei mai putea accesa con-tul \u0219i probleme pe care trebuie s\u0103 lerezolvi, este inutil\u0103, deoarece acest site este online 24/7."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "77020266",
    __self: this
  }, ".perks.jsx-77020266{width:100%;height:auto;background-color:var(--background-secondary);color:var(--text-primary);-webkit-transition:color,background-color 300ms ease;transition:color,background-color 300ms ease;padding:100px 0;text-align:center;}.perks__heading-container.jsx-77020266{padding-bottom:100px;position:relative;}.perks__hr.jsx-77020266{width:100%;z-index:1;display:inline-block;position:absolute;left:0;}.perks__heading.jsx-77020266{padding:0 20px;margin-top:-20px;display:inline-block;z-index:2;background-color:var(--background-secondary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEhvbWVcXFBlcmtzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCaUIsQUFHb0MsQUFVVSxBQUtWLEFBUUksV0F0QkgsQUFlRixJQVFPLE1BYkMsQUFNRyxFQWZ3QixTQXVCeEIsT0FiekIsR0FNc0IsV0FRUixPQVBILEdBUXNDLElBUGpELENBakI4QiwwQkFDb0IsY0F3QlAsb0ZBdkJ2QixFQXdCRSxjQXZCQSxJQXdCdEIsY0F2QkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcSG9tZVxcUGVya3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcmtzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwZXJrc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcmtzX19oZWFkaW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInBlcmtzX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGVya3NfX2hlYWRpbmdcIj5EZSBjZSBlc3RlIG1haSBidW4gaW5mb3BsdXM/PC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8UGVya1BhbmVsIHRpdGxlPVwiVml0ZXrEg1wiIGljb249XCJib2x0XCI+XHJcbiAgICAgICAgICAgICAgICBpbmZvcGx1cyBhIGZvc3QgY29uY2VwdXQgY3UgZWZpY2llbsibxIMsIGFjY2VzaWJpbGl0YXRlIMiZaSB2aXRlesSDXHJcbiAgICAgICAgICAgICAgICBkZSDDrm5jxINyY2FyZSDDrm4gY29uc2lkZXJhcmUsIHBlbnRydSBhIGNvbmZlcmkgY2FsY3VsYXRvYXJlbG9yXHJcbiAgICAgICAgICAgICAgICDImWNvbGFyZSBkZWZpY2l0YXJlIG8gZXhwZXJpZW7Im8SDIHBsxINjdXTEgy5cclxuICAgICAgICAgICAgPC9QZXJrUGFuZWw+XHJcbiAgICAgICAgICAgIDxQZXJrUGFuZWwgdGl0bGU9XCJDb252ZW5pZW7Im8SDXCIgaWNvbj1cImNvZmZlZVwiPlxyXG4gICAgICAgICAgICAgICAgQ3UgdHLEg3PEg3R1cmkgZsSDY3V0ZSBwZW50cnUgYSB1yJl1cmF2aWHIm2EgYXTDonQgY2VsdWkgY2FyZSBwcmVkxIMsXHJcbiAgICAgICAgICAgICAgICBjw6J0IMiZaSBhIGVsZXZ1bHVpLCB0b2F0ZSBuZWNlc2l0xIPIm2lsZSBjaGVpZXN1bnQgbGEgdW4gY2xpY2tcclxuICAgICAgICAgICAgICAgIGRlcMSDcnRhcmUsIGNvbnN0cnVpdGUgaW50dWl0aXYuXHJcbiAgICAgICAgICAgIDwvUGVya1BhbmVsPlxyXG4gICAgICAgICAgICA8UGVya1BhbmVsIHRpdGxlPVwiVXRpbGl0YXRlXCIgaWNvbj1cInRvb2xzXCI+XHJcbiAgICAgICAgICAgICAgICBBbSBjcmVhdCBwZW50cnUgYWNlc3Qgc2l0ZSB1dGlsaXTEg8ibaSBjYXJlIGNoaWFyIHN1bnQgZG9yaXRlLCDImWlcclxuICAgICAgICAgICAgICAgIGZvbG9zaXRvYXJlIMOubnZpYcibYSByZWFsxIMsIGN1bSBhciBmaTogbW9kIHByb2llY3RvciwgdGVtxINcclxuICAgICAgICAgICAgICAgIMOubnR1bmVjYXTEgywgyJlpIGFsdGVsZS5cclxuICAgICAgICAgICAgPC9QZXJrUGFuZWw+XHJcbiAgICAgICAgICAgIDxQZXJrUGFuZWwgdGl0bGU9XCJTdGFiaWxpdGF0ZVwiIGljb249XCJtb3VudGFpblwiPlxyXG4gICAgICAgICAgICAgICAgVGVhbWEgY8SDIHNpdGUtdWwgcG9hdGUgdmEgZmkgb2ZmbGluZSB0ZW1wb3JhciDImWkgbnUgdmVpIG1haVxyXG4gICAgICAgICAgICAgICAgcHV0ZWEgYWNjZXNhIGNvbi10dWwgyJlpIHByb2JsZW1lIHBlIGNhcmUgdHJlYnVpZSBzxIMgbGVyZXpvbHZpLFxyXG4gICAgICAgICAgICAgICAgZXN0ZSBpbnV0aWzEgywgZGVvYXJlY2UgYWNlc3Qgc2l0ZSBlc3RlIG9ubGluZSAyNC83LlxyXG4gICAgICAgICAgICA8L1BlcmtQYW5lbD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLnBlcmtzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnBlcmtzX19oZWFkaW5nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnBlcmtzX19ociB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wZXJrc19faGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBlcmtQYW5lbCh7IHRpdGxlLCBpY29uLCBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVya3NfX3BlcmtcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJrX19pY29uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcmtfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ljb259IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwZXJrX190aXRsZVwiPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGVya19fZGVzY3JpcHRpb25cIj57Y2hpbGRyZW59PC9wPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnBlcmtzX19wZXJrIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNTBweCA4MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxN3B4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnBlcmtzX19wZXJrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5wZXJrX190aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucGVya3NfX3Blcmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucGVya19faWNvbi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucGVya19faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgucGVya19faWNvbiBzdmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC10ZXJ0aWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucGVya19fZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\Home\\\\Perks.js */"));
}

function PerkPanel({
  title,
  icon,
  children
}) {
  return __jsx("div", {
    className: "jsx-1107255600" + " " + "perks__perk",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1107255600" + " " + "perk__icon-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1107255600" + " " + "perk__icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 21
    }
  })), __jsx("h2", {
    className: "jsx-1107255600" + " " + "perk__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 17
    }
  }, title)), __jsx("p", {
    className: "jsx-1107255600" + " " + "perk__description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 13
    }
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1107255600",
    __self: this
  }, ".perks__perk.jsx-1107255600{max-width:30%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:50px 80px;}@media screen and (max-width:817px){.perks__perk.jsx-1107255600{max-width:100%;}}@media screen and (max-width:576px){.perk__title.jsx-1107255600{font-size:var(--font-small);}.perks__perk.jsx-1107255600{margin-left:30px;margin-right:30px;}}.perk__icon-title.jsx-1107255600{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:10px;margin-bottom:20px;border-bottom:2px solid var(--background-tertiary);}.perk__icon.jsx-1107255600{width:30px;height:30px;background-color:var(--background-quaternary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.perk__icon svg{width:15px;height:15px;color:var(--accent-tertiary);-webkit-transition:color 300ms ease;transition:color 300ms ease;}.perk__description.jsx-1107255600{text-align:left;color:var(--text-primary);-webkit-transition:color 300ms ease;transition:color 300ms ease;line-height:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEhvbWVcXFBlcmtzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGd0IsQUFHbUMsQUFRSyxBQU1hLEFBSVgsQUFNUixBQVNGLEFBV0EsQUFPSyxXQWpCSixBQVdBLEdBNUNRLENBUXBCLENBMkMwQixDQWpDSixNQWdCd0IsQUFXakIsS0EvQjdCLE9BS0EsT0FpQzRCLFVBTkEsaUJBWFcsS0FYcEIsZ0NBNkJGLFVBcERLLEFBOEMxQixPQU9BLGdDQWxCc0IsWUFYWSxNQVlqQixxQkFuQ0ksaUJBQ3JCLG9DQW1DMkIsbUNBWkgsb0JBQ0QsbUJBQ2dDLHlCQVdoQywwQkFWdkIsbUVBV0EiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcSG9tZVxcUGVya3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcmtzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwZXJrc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcmtzX19oZWFkaW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInBlcmtzX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGVya3NfX2hlYWRpbmdcIj5EZSBjZSBlc3RlIG1haSBidW4gaW5mb3BsdXM/PC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8UGVya1BhbmVsIHRpdGxlPVwiVml0ZXrEg1wiIGljb249XCJib2x0XCI+XHJcbiAgICAgICAgICAgICAgICBpbmZvcGx1cyBhIGZvc3QgY29uY2VwdXQgY3UgZWZpY2llbsibxIMsIGFjY2VzaWJpbGl0YXRlIMiZaSB2aXRlesSDXHJcbiAgICAgICAgICAgICAgICBkZSDDrm5jxINyY2FyZSDDrm4gY29uc2lkZXJhcmUsIHBlbnRydSBhIGNvbmZlcmkgY2FsY3VsYXRvYXJlbG9yXHJcbiAgICAgICAgICAgICAgICDImWNvbGFyZSBkZWZpY2l0YXJlIG8gZXhwZXJpZW7Im8SDIHBsxINjdXTEgy5cclxuICAgICAgICAgICAgPC9QZXJrUGFuZWw+XHJcbiAgICAgICAgICAgIDxQZXJrUGFuZWwgdGl0bGU9XCJDb252ZW5pZW7Im8SDXCIgaWNvbj1cImNvZmZlZVwiPlxyXG4gICAgICAgICAgICAgICAgQ3UgdHLEg3PEg3R1cmkgZsSDY3V0ZSBwZW50cnUgYSB1yJl1cmF2aWHIm2EgYXTDonQgY2VsdWkgY2FyZSBwcmVkxIMsXHJcbiAgICAgICAgICAgICAgICBjw6J0IMiZaSBhIGVsZXZ1bHVpLCB0b2F0ZSBuZWNlc2l0xIPIm2lsZSBjaGVpZXN1bnQgbGEgdW4gY2xpY2tcclxuICAgICAgICAgICAgICAgIGRlcMSDcnRhcmUsIGNvbnN0cnVpdGUgaW50dWl0aXYuXHJcbiAgICAgICAgICAgIDwvUGVya1BhbmVsPlxyXG4gICAgICAgICAgICA8UGVya1BhbmVsIHRpdGxlPVwiVXRpbGl0YXRlXCIgaWNvbj1cInRvb2xzXCI+XHJcbiAgICAgICAgICAgICAgICBBbSBjcmVhdCBwZW50cnUgYWNlc3Qgc2l0ZSB1dGlsaXTEg8ibaSBjYXJlIGNoaWFyIHN1bnQgZG9yaXRlLCDImWlcclxuICAgICAgICAgICAgICAgIGZvbG9zaXRvYXJlIMOubnZpYcibYSByZWFsxIMsIGN1bSBhciBmaTogbW9kIHByb2llY3RvciwgdGVtxINcclxuICAgICAgICAgICAgICAgIMOubnR1bmVjYXTEgywgyJlpIGFsdGVsZS5cclxuICAgICAgICAgICAgPC9QZXJrUGFuZWw+XHJcbiAgICAgICAgICAgIDxQZXJrUGFuZWwgdGl0bGU9XCJTdGFiaWxpdGF0ZVwiIGljb249XCJtb3VudGFpblwiPlxyXG4gICAgICAgICAgICAgICAgVGVhbWEgY8SDIHNpdGUtdWwgcG9hdGUgdmEgZmkgb2ZmbGluZSB0ZW1wb3JhciDImWkgbnUgdmVpIG1haVxyXG4gICAgICAgICAgICAgICAgcHV0ZWEgYWNjZXNhIGNvbi10dWwgyJlpIHByb2JsZW1lIHBlIGNhcmUgdHJlYnVpZSBzxIMgbGVyZXpvbHZpLFxyXG4gICAgICAgICAgICAgICAgZXN0ZSBpbnV0aWzEgywgZGVvYXJlY2UgYWNlc3Qgc2l0ZSBlc3RlIG9ubGluZSAyNC83LlxyXG4gICAgICAgICAgICA8L1BlcmtQYW5lbD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLnBlcmtzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnBlcmtzX19oZWFkaW5nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnBlcmtzX19ociB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wZXJrc19faGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBlcmtQYW5lbCh7IHRpdGxlLCBpY29uLCBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVya3NfX3BlcmtcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJrX19pY29uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcmtfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ljb259IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwZXJrX190aXRsZVwiPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGVya19fZGVzY3JpcHRpb25cIj57Y2hpbGRyZW59PC9wPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnBlcmtzX19wZXJrIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNTBweCA4MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxN3B4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnBlcmtzX19wZXJrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5wZXJrX190aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucGVya3NfX3Blcmsge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucGVya19faWNvbi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucGVya19faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgucGVya19faWNvbiBzdmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC10ZXJ0aWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucGVya19fZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\Home\\\\Perks.js */"));
}

/***/ }),

/***/ "./components/globals/Login.js":
/*!*************************************!*\
  !*** ./components/globals/Login.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_InputArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/InputArea */ "./components/utils/InputArea.js");
/* harmony import */ var _styles_formModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/formModal */ "./styles/formModal.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\globals\\Login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Login({
  showLoginModalHandler
}) {
  const {
    0: numeUtilizator,
    1: setNumeUtilizator
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: parola,
    1: setParola
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    onClick: showLoginModalHandler,
    className: "jsx-1299000937 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "overlay-darkener",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1299000937 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1299000937 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__title-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, __jsx(LoginModalWave, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 21
    }
  }), __jsx("h2", {
    className: "jsx-1299000937 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 21
    }
  }, "Logheaza-te")), __jsx("div", {
    className: "jsx-1299000937 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panels",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1299000937 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 21
    }
  }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "E-mail/Nume utilizator",
    inputType: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "jsx-1299000937 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 21
    }
  }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Parola",
    inputType: "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "jsx-1299000937 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__buttons-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: showLoginModalHandler,
    className: "jsx-1299000937 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "button--secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 25
    }
  }, "Renun\u021B\u0103"), __jsx("button", {
    className: "jsx-1299000937 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "button--primary-x",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 25
    }
  }, "Logare")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash,
    __self: this
  }, _styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1299000937",
    __self: this
  }, ".modal.jsx-1299000937{width:30%;}.modal__buttons-container.jsx-1299000937{margin-right:40px;}.modal__input-panel.jsx-1299000937{width:80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXExvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDd0IsQUFHK0IsQUFJUSxBQUlSLFVBUGQsQUFRQSxRQUpBIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXExvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElucHV0QXJlYSBmcm9tIFwiLi4vdXRpbHMvSW5wdXRBcmVhXCI7XHJcbmltcG9ydCBmb3JtTW9kYWwgZnJvbSBcIi4uLy4uL3N0eWxlcy9mb3JtTW9kYWxcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oeyBzaG93TG9naW5Nb2RhbEhhbmRsZXIgfSkge1xyXG4gICAgY29uc3QgW251bWVVdGlsaXphdG9yLCBzZXROdW1lVXRpbGl6YXRvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtwYXJvbGEsIHNldFBhcm9sYV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmxheS1kYXJrZW5lclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93TG9naW5Nb2RhbEhhbmRsZXJ9XHJcbiAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fdGl0bGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ2luTW9kYWxXYXZlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm1vZGFsX190aXRsZVwiPkxvZ2hlYXphLXRlPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faW5wdXQtcGFuZWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faW5wdXQtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFLW1haWwvTnVtZSB1dGlsaXphdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2lucHV0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFyZWEgdGl0bGU9XCJQYXJvbGFcIiBpbnB1dFR5cGU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2J1dHRvbnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi0tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dMb2dpbk1vZGFsSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVudW7Im8SDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi0tcHJpbWFyeS14XCI+TG9nYXJlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2Zvcm1Nb2RhbH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAubW9kYWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1vZGFsX19idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tb2RhbF9faW5wdXQtcGFuZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExvZ2luTW9kYWxXYXZlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjQ2IDE4NFwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsX193YXZlXCJcclxuICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMCAwTDY0NiA5LjUzNjc0ZS0wN1YxNTUuOTExQzY0NiAxNTUuOTExIDU4MC41OSAxNzkuMzkzIDQ2OC4yIDE4Mi42MkMzNTUuODEgMTg1Ljg0NyAyODUuMjY3IDE3MS40ODggMjA3LjEzIDE1NS45MTFDNDYuMDI3IDEyMy43OTMgMS45MDczNWUtMDYgMTU1LjkxMSAxLjkwNzM1ZS0wNiAxNTUuOTExTDAgMFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLWFjY2VudC1zZWNvbmRhcnkpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\Login.js */"));
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
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M0 0L646 9.53674e-07V155.911C646 155.911 580.59 179.393 468.2 182.62C355.81 185.847 285.267 171.488 207.13 155.911C46.027 123.793 1.90735e-06 155.911 1.90735e-06 155.911L0 0Z",
    fill: "var(--accent-secondary)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }));
}

/***/ }),

/***/ "./components/globals/Register.js":
/*!****************************************!*\
  !*** ./components/globals/Register.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_InputArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/InputArea */ "./components/utils/InputArea.js");
/* harmony import */ var _styles_formModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/formModal */ "./styles/formModal.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\globals\\Register.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Register({
  showRegisterModalHandler
}) {
  const {
    0: nume,
    1: setNume
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: prenume,
    1: setPrenume
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: judet,
    1: setJudet
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: numeUtilizator,
    1: setNumeUtilizator
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  const {
    0: parola,
    1: setParola
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("");
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    onClick: showRegisterModalHandler,
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "overlay-darkener",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__title-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }, __jsx(RegisterModalWave, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 21
    }
  }), __jsx("h2", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 21
    }
  }, "\xCEnregistreaz\u0103-te")), __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panels",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Nume",
    inputType: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 21
    }
  }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Prenume",
    inputType: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Jude\u021B",
    isSelect: true,
    optionValues: ["Alba", "Cluj", "Bistrita-Nasaud"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Profesie",
    isSelect: true,
    optionValues: ["Elev", "Profesor"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Nume Utilizator",
    inputType: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "E-mail",
    inputType: "text",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panel modal__input-panel--last",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Parola",
    inputType: "password",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 25
    }
  })), __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__buttons-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: showRegisterModalHandler,
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "button--secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 25
    }
  }, "Renun\u021B\u0103"), __jsx("button", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "button--primary-ix",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, "Creeaz\u0103")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash,
    __self: this
  }, _styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "502963944",
    __self: this
  }, ".modal.jsx-502963944{width:50%;}.modal__input-panel.jsx-502963944{width:40%;}.modal__buttons-container.jsx-502963944{margin-right:60px;}.modal__input-panel--last.jsx-502963944{width:85%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXFJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFd0IsQUFHK0IsQUFJQSxBQUlRLEFBSVIsVUFYZCxBQUlBLEFBUUEsUUFKQSIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxnbG9iYWxzXFxSZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbnB1dEFyZWEgZnJvbSBcIi4uL3V0aWxzL0lucHV0QXJlYVwiO1xyXG5pbXBvcnQgZm9ybU1vZGFsIGZyb20gXCIuLi8uLi9zdHlsZXMvZm9ybU1vZGFsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3Rlcih7IHNob3dSZWdpc3Rlck1vZGFsSGFuZGxlciB9KSB7XHJcbiAgICBjb25zdCBbbnVtZSwgc2V0TnVtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtwcmVudW1lLCBzZXRQcmVudW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2p1ZGV0LCBzZXRKdWRldF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtudW1lVXRpbGl6YXRvciwgc2V0TnVtZVV0aWxpemF0b3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Bhcm9sYSwgc2V0UGFyb2xhXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVybGF5LWRhcmtlbmVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dSZWdpc3Rlck1vZGFsSGFuZGxlcn1cclxuICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX190aXRsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmVnaXN0ZXJNb2RhbFdhdmUgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlXCI+w45ucmVnaXN0cmVhesSDLXRlPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faW5wdXQtcGFuZWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faW5wdXQtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QXJlYSB0aXRsZT1cIk51bWVcIiBpbnB1dFR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19pbnB1dC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBcmVhIHRpdGxlPVwiUHJlbnVtZVwiIGlucHV0VHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2lucHV0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiSnVkZcibXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25WYWx1ZXM9e1tcIkFsYmFcIiwgXCJDbHVqXCIsIFwiQmlzdHJpdGEtTmFzYXVkXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2lucHV0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJvZmVzaWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblZhbHVlcz17W1wiRWxldlwiLCBcIlByb2Zlc29yXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2lucHV0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFyZWEgdGl0bGU9XCJOdW1lIFV0aWxpemF0b3JcIiBpbnB1dFR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19pbnB1dC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBcmVhIHRpdGxlPVwiRS1tYWlsXCIgaW5wdXRUeXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faW5wdXQtcGFuZWwgbW9kYWxfX2lucHV0LXBhbmVsLS1sYXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFyZWEgdGl0bGU9XCJQYXJvbGFcIiBpbnB1dFR5cGU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2J1dHRvbnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi0tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dSZWdpc3Rlck1vZGFsSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVudW7Im8SDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi0tcHJpbWFyeS1peFwiPkNyZWVhesSDPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2Zvcm1Nb2RhbH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAubW9kYWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1vZGFsX19pbnB1dC1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubW9kYWxfX2J1dHRvbnMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1vZGFsX19pbnB1dC1wYW5lbC0tbGFzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmVnaXN0ZXJNb2RhbFdhdmUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2NDYgMTg0XCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWxfX3dhdmVcIlxyXG4gICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0wIDBMNjQ2IDkuNTM2NzRlLTA3VjE1NS45MTFDNjQ2IDE1NS45MTEgNTgwLjU5IDE3OS4zOTMgNDY4LjIgMTgyLjYyQzM1NS44MSAxODUuODQ3IDI4NS4yNjcgMTcxLjQ4OCAyMDcuMTMgMTU1LjkxMUM0Ni4wMjcgMTIzLjc5MyAxLjkwNzM1ZS0wNiAxNTUuOTExIDEuOTA3MzVlLTA2IDE1NS45MTFMMCAwWlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidmFyKC0tYWNjZW50LXByaW1hcnkpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\Register.js */"));
}

function RegisterModalWave() {
  return __jsx("svg", {
    viewBox: "0 0 646 184",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "modal__wave",
    preserveAspectRatio: "none",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M0 0L646 9.53674e-07V155.911C646 155.911 580.59 179.393 468.2 182.62C355.81 185.847 285.267 171.488 207.13 155.911C46.027 123.793 1.90735e-06 155.911 1.90735e-06 155.911L0 0Z",
    fill: "var(--accent-primary)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }));
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
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\utils\\InputArea.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;
function InputArea({
  title,
  inputType,
  isSelect = false,
  optionValues = []
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    className: "jsx-4045149523",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, title), isSelect ? __jsx("select", {
    className: "jsx-4045149523",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }
  }, optionValues.map((optionValue, i) => __jsx("option", {
    key: `optiune_${i}`,
    className: "jsx-4045149523",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 25
    }
  }, optionValue))) : __jsx("input", {
    type: inputType,
    className: "jsx-4045149523",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 17
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4045149523",
    __self: this
  }, "input.jsx-4045149523,select.jsx-4045149523{width:100%;height:45px;border-radius:50px;border:1px solid var(--background-quaternary);outline:0;padding-left:10px;color:var(--text-primary);background-color:transparent;}option.jsx-4045149523{background-color:var(--background-primary);}h3.jsx-4045149523{text-align:left;margin-bottom:10px;text-transform:uppercase;color:var(--text-primary);font-size:var(--font-smaller);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXHV0aWxzXFxJbnB1dEFyZWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0J3QixBQUlnQyxBQVdnQyxBQUkzQixXQWRKLEtBZU8sT0FkQSxZQWVNLE9BZHFCLENBU2xELGlCQU04QiwwQkFDSSxFQWZwQixVQUNRLGtCQUNRLEFBYzlCLDBCQWJpQyw2QkFDakMiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcdXRpbHNcXElucHV0QXJlYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0QXJlYSh7XHJcbiAgICB0aXRsZSxcclxuICAgIGlucHV0VHlwZSxcclxuICAgIGlzU2VsZWN0ID0gZmFsc2UsXHJcbiAgICBvcHRpb25WYWx1ZXMgPSBbXVxyXG59KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMz57dGl0bGV9PC9oMz5cclxuICAgICAgICAgICAge2lzU2VsZWN0ID8gKFxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICB7b3B0aW9uVmFsdWVzLm1hcCgob3B0aW9uVmFsdWUsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2BvcHRpdW5lXyR7aX1gfT57b3B0aW9uVmFsdWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPXtpbnB1dFR5cGV9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIGlucHV0LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dGxpbmU6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG9wdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\utils\\\\InputArea.js */"));
}

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Home/Main */ "./components/Home/Main.js");
/* harmony import */ var _components_Home_Perks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Home/Perks */ "./components/Home/Perks.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Home_Main__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }
  }), __jsx(_components_Home_Perks__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }));
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
const _defaultExport = new String("@-webkit-keyframes modalAnimation-jsx-2989297884{from{opacity:0;-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);}to{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}@keyframes modalAnimation-jsx-2989297884{from{opacity:0;-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);}to{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}.overlay-darkener.jsx-2989297884{width:100%;height:100%;position:fixed;background-color:rgba(0,0,0,0.8);z-index:50;}.modal.jsx-2989297884{max-height:80%;background-color:var(--background-primary);box-shadow:var(--box-shadow);overflow:auto;border-radius:10px;position:fixed;top:100px;left:0;right:0;z-index:98;margin:auto;-webkit-animation:modalAnimation-jsx-2989297884 300ms ease;animation:modalAnimation-jsx-2989297884 300ms ease;}.modal__title-container.jsx-2989297884{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:25%;}.modal__title.jsx-2989297884{position:absolute;z-index:99;margin-top:-10px;text-transform:uppercase;color:var(--text-button);}.modal__input-panels.jsx-2989297884{padding:30px 0;text-align:center;}.modal__input-panel.jsx-2989297884{display:inline-block;margin:20px 15px;}.modal__buttons-container.jsx-2989297884{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-top:30px;}.modal__wave{width:100%;height:100%;}@media screen and (max-width:756px){.modal.jsx-2989297884{width:90% !important;margin-top:-30px;}.modal__title.jsx-2989297884{text-align:center;}.modal__input-panel.jsx-2989297884{width:auto !important;margin-left:20px;margin-right:20px;display:block;}.modal__buttons-container.jsx-2989297884{margin-right:20px !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXHN0eWxlc1xcZm9ybU1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUl1QixBQUlBLEFBS0gsQUFRSSxBQWVGLEFBUUssQUFRSCxBQUtNLEFBS1IsQUFNRixBQU1jLEFBSUgsQUFHSSxBQU1PLFVBbEZELEFBSUosQ0FLaEIsQUF1REEsSUEvQytCLEFBK0J6QixHQVJQLEFBa0NYLEdBckJpQixBQWlCSSxDQU9BLENBbkVOLEFBdURuQixNQXhCcUIsQUEwQ2pCLElBbENKLEtBdEN3QyxBQTJDeEMsQUFpQkksQ0FPc0IsT0FwQ0csV0FxQ1AsQ0E3RFcsYUFObEIsQUErQmMsQUFxQ3pCLEdBaER1QixBQTBCRSxRQTdDN0IsS0FNa0IsT0FkZCxFQXVDSixLQXhCdUIsS0FuQm5CLGNBb0JlLGVBQ0wsVUFDSCxPQUNDLFFBQ0csV0FDQyxBQWlDSSxFQTFCRyxVQU5pQixJQWlDeEMsK0VBMUJlLFdBQ0EsV0FDZixLQVJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXHN0eWxlc1xcZm9ybU1vZGFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzc2BcclxuICAgIEBrZXlmcmFtZXMgbW9kYWxBbmltYXRpb24ge1xyXG4gICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0byB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAub3ZlcmxheS1kYXJrZW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgICAgei1pbmRleDogNTA7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxuICAgICAgICBvdmVyZmxvdzogYXV0bztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB0b3A6IDEwMHB4O1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgei1pbmRleDogOTg7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgIGFuaW1hdGlvbjogbW9kYWxBbmltYXRpb24gMzAwbXMgZWFzZTtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWxfX3RpdGxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMjUlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbF9fdGl0bGUge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsX19pbnB1dC1wYW5lbHMge1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsX19pbnB1dC1wYW5lbCB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbjogMjBweCAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbF9fYnV0dG9ucy1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIDpnbG9iYWwoLm1vZGFsX193YXZlKSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1NnB4KSB7XHJcbiAgICAgICAgLm1vZGFsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDkwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX190aXRsZSB7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19pbnB1dC1wYW5lbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubW9kYWxfX2J1dHRvbnMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5gO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\styles\\\\formModal.js */");

_defaultExport.__hash = "2989297884";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\plesa\Desktop\Proiecte Web\infoplus\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

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
//# sourceMappingURL=index.js.map