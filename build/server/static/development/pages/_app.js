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

/***/ "./components/Home/Main.js":
/*!*********************************!*\
  !*** ./components/Home/Main.js ***!
  \*********************************/
/*! exports provided: RegisterModalHandler, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModalHandler", function() { return RegisterModalHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals_Register__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_globals/Register */ "./components/_globals/Register.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/_app */ "./pages/_app.js");
/* harmony import */ var _utils_LogoutButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/LogoutButton */ "./components/utils/LogoutButton.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\Home\\Main.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const RegisterModalHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);

function Main() {
  const {
    0: registerModalVisible,
    1: showRegisterModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const showRegisterModalHandler = () => showRegisterModal(!registerModalVisible);

  const showLoginModal = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_5__["ShowLoginContext"]);
  const {
    isAuthenticated
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_5__["LoggedInDataContext"]);
  return __jsx("section", {
    className: "jsx-1507461344" + " " + "main",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(RegisterModalHandler.Provider, {
    value: showRegisterModalHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, registerModalVisible && __jsx(_globals_Register__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 42
    }
  })), __jsx("div", {
    className: "jsx-1507461344" + " " + "main__content-panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, __jsx("h1", {
    className: "jsx-1507461344" + " " + "main__primary-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }, "infoplus"), __jsx("div", {
    className: "jsx-1507461344" + " " + "main__bullets",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }, __jsx(BulletTitle, {
    title: "Simplu",
    icon: "check",
    i: "1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 21
    }
  }), __jsx(BulletTitle, {
    title: "Rapid",
    icon: "bolt",
    i: "2",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 21
    }
  }), __jsx(BulletTitle, {
    title: "Intuitiv",
    icon: "lightbulb",
    i: "3",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  })), __jsx("div", {
    className: "jsx-1507461344" + " " + "main__buttons",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1507461344" + " " + "main__button-sign-in",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }, __jsx(Button, {
    type: "button--primary",
    title: !isAuthenticated ? "Logheaza-te" : "Către contul tău",
    icon: !isAuthenticated ? "sign-in-alt" : "arrow-right",
    link: !isAuthenticated ? "" : "/dashboard",
    onClick: !isAuthenticated ? showLoginModal : undefined,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }), __jsx("p", {
    className: "jsx-1507461344" + " " + "main__button-make-account",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, !isAuthenticated && "Nu ai cont? ", !isAuthenticated ? __jsx("a", {
    href: "#",
    onClick: showRegisterModalHandler,
    className: "jsx-1507461344",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  }, "Fa-ti unul!") : __jsx(_utils_LogoutButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    type: "anchor",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 33
    }
  }))), __jsx(Button, {
    type: "button--secondary",
    title: "Vezi mai multe",
    icon: "ellipsis-h",
    link: "/informatii",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }))), __jsx(Wave, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1507461344",
    __self: this
  }, ".main.jsx-1507461344{width:100%;min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--text-primary);-webkit-transition:color 300ms ease;transition:color 300ms ease;}.main__content-panel.jsx-1507461344{text-align:center;position:relative;z-index:10;color:var(--text-primary);-webkit-transition:color 300ms ease;transition:color 300ms ease;}.main__primary-heading.jsx-1507461344{font-size:var(--font-larger);font-weight:800;}.main__bullets.jsx-1507461344{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin:0 0 80px;}.main__bullet.jsx-1507461344{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 30px;}.main__buttons.jsx-1507461344{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}@media screen and (max-width:520px){.main__content-panel.jsx-1507461344{margin:70px 30px 10px;}.main__primary-heading.jsx-1507461344{font-size:var(--font-large);}.main__bullets.jsx-1507461344{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;margin-bottom:40px;}.main__buttons.jsx-1507461344{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin-bottom:40px;}.main__button-sign-in.jsx-1507461344{margin-bottom:40px;}}.main__button-make-account.jsx-1507461344{margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcSG9tZVxcTWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2RHdCLEFBR2dDLEFBVU8sQUFRVyxBQUtoQixBQVFBLEFBS0EsQUFNYSxBQUlNLEFBSVIsQUFPRSxBQU9ILEFBS1AsV0FwRUMsS0FxRXJCLEVBM0RzQixDQXNEbEIsR0F0QkEsTUF6Q2EsQUE2Q2IsQ0E1QmdCLE9BUEwsU0FRZixFQVA4QiwwQkFDRSxDQVVMLEFBUVQsQUFLZSxJQXFCTixVQXpCM0IsY0E5QjJCLEFBZ0RHLG1DQXBDOUIsa0NBNEM0QixFQWxDTCxPQTJCUSxpQkFkL0IsSUFsQ3VCLGlFQXNCVSxPQWtDTixnQkFQQSxHQVF2QixFQXhEMEIsY0FpRDFCLFlBaEQ0QixnRUFDaEMsS0FvQm9CLGdCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZVdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEhvbWVcXE1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi4vX2dsb2JhbHMvUmVnaXN0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IFNob3dMb2dpbkNvbnRleHQsIExvZ2dlZEluRGF0YUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvX2FwcFwiO1xyXG5pbXBvcnQgTG9nb3V0QnV0dG9uIGZyb20gXCIuLi91dGlscy9Mb2dvdXRCdXR0b25cIjtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyTW9kYWxIYW5kbGVyID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuZXhwb3J0IHsgUmVnaXN0ZXJNb2RhbEhhbmRsZXIgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgICBjb25zdCBbcmVnaXN0ZXJNb2RhbFZpc2libGUsIHNob3dSZWdpc3Rlck1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHNob3dSZWdpc3Rlck1vZGFsSGFuZGxlciA9ICgpID0+IHNob3dSZWdpc3Rlck1vZGFsKCFyZWdpc3Rlck1vZGFsVmlzaWJsZSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0xvZ2luTW9kYWwgPSB1c2VDb250ZXh0KFNob3dMb2dpbkNvbnRleHQpO1xyXG4gICAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoTG9nZ2VkSW5EYXRhQ29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgICAgIDxSZWdpc3Rlck1vZGFsSGFuZGxlci5Qcm92aWRlciB2YWx1ZT17c2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIHtyZWdpc3Rlck1vZGFsVmlzaWJsZSAmJiA8UmVnaXN0ZXIgLz59XHJcbiAgICAgICAgICAgIDwvUmVnaXN0ZXJNb2RhbEhhbmRsZXIuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fY29udGVudC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1haW5fX3ByaW1hcnktaGVhZGluZ1wiPmluZm9wbHVzPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fYnVsbGV0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdWxsZXRUaXRsZSB0aXRsZT1cIlNpbXBsdVwiIGljb249XCJjaGVja1wiIGk9XCIxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnVsbGV0VGl0bGUgdGl0bGU9XCJSYXBpZFwiIGljb249XCJib2x0XCIgaT1cIjJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdWxsZXRUaXRsZSB0aXRsZT1cIkludHVpdGl2XCIgaWNvbj1cImxpZ2h0YnVsYlwiIGk9XCIzXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19idXR0b24tc2lnbi1pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uLS1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXshaXNBdXRoZW50aWNhdGVkID8gXCJMb2doZWF6YS10ZVwiIDogXCJDxIN0cmUgY29udHVsIHTEg3VcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249eyFpc0F1dGhlbnRpY2F0ZWQgPyBcInNpZ24taW4tYWx0XCIgOiBcImFycm93LXJpZ2h0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rPXshaXNBdXRoZW50aWNhdGVkID8gXCJcIiA6IFwiL2Rhc2hib2FyZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IWlzQXV0aGVudGljYXRlZCA/IHNob3dMb2dpbk1vZGFsIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYWluX19idXR0b24tbWFrZS1hY2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWlzQXV0aGVudGljYXRlZCAmJiBcIk51IGFpIGNvbnQ/IFwifVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaXNBdXRoZW50aWNhdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17c2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmEtdGkgdW51bCFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvdXRCdXR0b24gdHlwZT1cImFuY2hvclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uLS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlZlemkgbWFpIG11bHRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImVsbGlwc2lzLWhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL2luZm9ybWF0aWlcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxXYXZlIC8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5tYWluIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9fY29udGVudC1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19wcmltYXJ5LWhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1sYXJnZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2J1bGxldHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCA4MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19idWxsZXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fY29udGVudC1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNzBweCAzMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fcHJpbWFyeS1oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LWxhcmdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19idWxsZXRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5fX2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19idXR0b24tc2lnbi1pbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19idXR0b24tbWFrZS1hY2NvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQnVsbGV0VGl0bGUoeyB0aXRsZSwgaWNvbiwgaSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fYnVsbGV0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9faWNvbi1idWJibGVcIj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17aWNvbn0gY2xhc3NOYW1lPXtgbWFpbl9fYnVsbGV0LWljb24tLSR7aX1gfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1haW5fX3RlcnRpYXJ5LWhlYWRpbmdcIj57dGl0bGV9PC9oMz5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5tYWluX190ZXJ0aWFyeS1oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9faWNvbi1idWJibGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9fYnVsbGV0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggMjBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgubWFpbl9fYnVsbGV0LWljb24tLTEsIC5tYWluX19idWxsZXQtaWNvbi0tMiwgLm1haW5fX2J1bGxldC1pY29uLS0zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLm1haW5fX2J1bGxldC1pY29uLS0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLm1haW5fX2J1bGxldC1pY29uLS0yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgubWFpbl9fYnVsbGV0LWljb24tLTMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXRlcnRpYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fYnVsbGV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdXR0b24oeyB0eXBlLCB0aXRsZSwgaWNvbiwgbGluaywgb25DbGljayA9IG51bGwgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayBocmVmPXtsaW5rfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3R5cGV9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtpY29ufSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBXYXZlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDUlXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTkwMCAyODBcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluX19zdmdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTS0yLjc1NDY3IDcxLjEwM0MtMi43NTQ2NyA3MS4xMDMgNzgzLjUzMyAtODguNTM2IDEyMDQuMjQgNzEuMTAzQzE2MjQuOTQgMjMwLjc0MiAxOTE3LjI1IDU3LjMyMyAxOTE3LjI1IDU3LjMyM1Y0ODAuMDAzSC0yLjc1NDY3VjcxLjEwM1pcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ1JVwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE5MjAgMjgwXCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFpbl9fc3ZnXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGcgb3BhY2l0eT1cIjAuMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTE4OS4zNyAxNTcuMTcyQzEyMTEuNCAxNTMuMjggMTIyNi4xMSAxMzIuMjY1IDEyMjIuMjIgMTEwLjIzM0MxMjE4LjMzIDg4LjIwMDcgMTE5Ny4zMSA3My40OTUyIDExNzUuMjggNzcuMzg3MkMxMTUzLjI1IDgxLjI3OTEgMTEzOC41NCAxMDIuMjk1IDExNDIuNDMgMTI0LjMyN0MxMTQ2LjMyIDE0Ni4zNTkgMTE2Ny4zNCAxNjEuMDY0IDExODkuMzcgMTU3LjE3MlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAyOS4xMiAyNjcuNzU1QzEwNTEuMTUgMjYzLjg2MyAxMDY1Ljg2IDI0Mi44NDggMTA2MS45NyAyMjAuODE2QzEwNTguMDcgMTk4Ljc4NCAxMDM3LjA2IDE4NC4wNzggMTAxNS4wMyAxODcuOTdDOTkyLjk5NSAxOTEuODYyIDk3OC4yODkgMjEyLjg3OCA5ODIuMTgxIDIzNC45MUM5ODYuMDczIDI1Ni45NDIgMTAwNy4wOSAyNzEuNjQ3IDEwMjkuMTIgMjY3Ljc1NVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNODU0LjE5OSAxNDEuNDQ1TDk1MC41MiAxMTcuNDlMOTIzLjI5NSAyMTIuNzAxTDg1NC4xOTkgMTQxLjQ0NVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTc5NC44MyAyMzguNDMxTDE4NjYuMjMgMzA3LjQ1N0wxNzcxLjAxIDMzNC44MzZMMTc5NC44MyAyMzguNDMxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNzk0LjgzIDIzOC40MzFMMTg2Ni4yMyAzMDcuNDU3TDE3NzEuMDEgMzM0LjgzNkwxNzk0LjgzIDIzOC40MzFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1OTUuNjEgMjUwLjk5MUwxNTc0Ljk4IDMyMy4xMkwxNjQ3LjExIDM0My43NDZMMTY2Ny43NCAyNzEuNjE2TDE1OTUuNjEgMjUwLjk5MVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQ3Ni43IDI4MS4wNDdMMTQwNC41NiAzMDEuNzg4TDE0MjUuMzEgMzczLjkyNEwxNDk3LjQ0IDM1My4xODJMMTQ3Ni43IDI4MS4wNDdaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTExMjEuMTQgMzA4LjgzOUwxMTU2LjYxIDQwMS42TDEwNTguNzQgMzg2LjEwNkwxMTIxLjE0IDMwOC44MzlaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyMjguMDIgMjcwLjgyNEwxMjk0LjI3IDMwNi4wNDdMMTMyOS41IDIzOS43OTVMMTI2My4yNCAyMDQuNTcxTDEyMjguMDIgMjcwLjgyNFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTczNi42NSAyMjUuMDQ0QzE3NTguNjkgMjIxLjE1MiAxNzczLjM5IDIwMC4xMzcgMTc2OS41IDE3OC4xMDVDMTc2NS42MSAxNTYuMDczIDE3NDQuNTkgMTQxLjM2NyAxNzIyLjU2IDE0NS4yNTlDMTcwMC41MyAxNDkuMTUxIDE2ODUuODIgMTcwLjE2NyAxNjg5LjcyIDE5Mi4xOTlDMTY5My42MSAyMTQuMjMxIDE3MTQuNjIgMjI4LjkzNiAxNzM2LjY1IDIyNS4wNDRaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1MDAuNTQgMjI4LjE1NkMxNTIyLjU3IDIyNC4yNjQgMTUzNy4yOCAyMDMuMjQ5IDE1MzMuMzggMTgxLjIxN0MxNTI5LjQ5IDE1OS4xODUgMTUwOC40OCAxNDQuNDc5IDE0ODYuNDQgMTQ4LjM3MUMxNDY0LjQxIDE1Mi4yNjMgMTQ0OS43MSAxNzMuMjc5IDE0NTMuNiAxOTUuMzExQzE0NTcuNDkgMjE3LjM0MyAxNDc4LjUxIDIzMi4wNDggMTUwMC41NCAyMjguMTU2WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04NjQuNDAyIDMwNy45NTFMODUzLjk4NiAzODIuMjM4TDkyOC4yNzMgMzkyLjY1NUw5MzguNjkgMzE4LjM2N0w4NjQuNDAyIDMwNy45NTFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE4MzkuNDUgMTcxLjU3TDE5MzguNDUgMTc4LjY0MkwxODgzLjA3IDI2MC43MjdMMTgzOS40NSAxNzEuNTdaXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00NDQuMDk5IDI0NC42MDRDNDIyLjA2NyAyNDguNDk2IDQwNy4zNjEgMjY5LjUxMiA0MTEuMjUzIDI5MS41NDRDNDE1LjE0NSAzMTMuNTc2IDQzNi4xNjEgMzI4LjI4MSA0NTguMTkzIDMyNC4zODlDNDgwLjIyNSAzMjAuNDk4IDQ5NC45MyAyOTkuNDgyIDQ5MS4wMzggMjc3LjQ1QzQ4Ny4xNDYgMjU1LjQxOCA0NjYuMTMxIDI0MC43MTMgNDQ0LjA5OSAyNDQuNjA0WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk02MDQuMzUgMTM0LjAyMUM1ODIuMzE4IDEzNy45MTMgNTY3LjYxMiAxNTguOTI5IDU3MS41MDQgMTgwLjk2MUM1NzUuMzk2IDIwMi45OTMgNTk2LjQxMiAyMTcuNjk4IDYxOC40NDQgMjEzLjgwNkM2NDAuNDc2IDIwOS45MTUgNjU1LjE4MSAxODguODk5IDY1MS4yODkgMTY2Ljg2N0M2NDcuMzk3IDE0NC44MzUgNjI2LjM4MiAxMzAuMTMgNjA0LjM1IDEzNC4wMjFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTc3OS4yNzIgMjYwLjMzMkw2ODIuOTUxIDI4NC4yODdMNzEwLjE3NiAxODkuMDc2TDc3OS4yNzIgMjYwLjMzMlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzcuODYxNSAxNTAuNzg2TDU4LjQ4NjggNzguNjU2MkwtMTMuNjQyNyA1OC4wMzA5TC0zNC4yNjggMTMwLjE2TDM3Ljg2MTUgMTUwLjc4NlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTU2Ljc3MiAxMjAuNzNMMjI4LjkwNyA5OS45ODg1TDIwOC4xNjUgMjcuODUzMUwxMzYuMDMgNDguNTk0N0wxNTYuNzcyIDEyMC43M1pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTEyLjMzNSA5Mi45Mzc1TDQ3Ni44NjIgMC4xNzY1MTRMNTc0LjcyNyAxNS42NzA2TDUxMi4zMzUgOTIuOTM3NVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDA1LjQ1IDEzMC45NTNMMzM5LjE5OCA5NS43Mjk1TDMwMy45NzUgMTYxLjk4MkwzNzAuMjI3IDE5Ny4yMDVMNDA1LjQ1IDEzMC45NTNaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEzMi45MzMgMTczLjYyQzExMC45MDEgMTc3LjUxMiA5Ni4xOTUyIDE5OC41MjggMTAwLjA4NyAyMjAuNTZDMTAzLjk3OSAyNDIuNTkyIDEyNC45OTUgMjU3LjI5NyAxNDcuMDI3IDI1My40MDVDMTY5LjA1OSAyNDkuNTE0IDE4My43NjQgMjI4LjQ5OCAxNzkuODcyIDIwNi40NjZDMTc1Ljk4IDE4NC40MzQgMTU0Ljk2NSAxNjkuNzI5IDEzMi45MzMgMTczLjYyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk03NjkuMDY4IDkzLjgyNjFMNzc5LjQ4NSAxOS41Mzg1TDcwNS4xOTcgOS4xMjE2Nkw2OTQuNzgxIDgzLjQwOTJMNzY5LjA2OCA5My44MjYxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNzcuMDUzIDMzMS41MjZMMTg0LjQyOCAyOTUuODYzTDI2MS4zNjUgMjMzLjUyTDI3Ny4wNTMgMzMxLjUyNlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5fX3N2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYWluX19zdmc6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fc3ZnIGcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjNjI2MjYyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\Home\\\\Main.js */"));
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
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-2657388571" + " " + "main__icon-bubble",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: icon,
    className: `main__bullet-icon--${i}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 17
    }
  })), __jsx("h3", {
    className: "jsx-2657388571" + " " + "main__tertiary-heading",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 13
    }
  }, title), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2657388571",
    __self: this
  }, ".main__tertiary-heading.jsx-2657388571{font-weight:lighter;}.main__icon-bubble.jsx-2657388571{width:30px;height:30px;background-color:var(--background-quaternary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;border-radius:50%;margin-right:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.main__bullet.jsx-2657388571{margin:30px 20px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.main__bullet-icon--1,.main__bullet-icon--2,.main__bullet-icon--3{width:15px;height:15px;}.main__bullet-icon--1{color:var(--accent-primary);-webkit-transition:color 300ms ease;transition:color 300ms ease;}.main__bullet-icon--2{color:var(--accent-secondary);-webkit-transition:color 300ms ease;transition:color 300ms ease;}.main__bullet-icon--3{color:var(--accent-tertiary);-webkit-transition:color 300ms ease;transition:color 300ms ease;}@media screen and (max-width:520px){.main__bullet.jsx-2657388571{margin-left:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcSG9tZVxcTWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSndCLEFBR3lDLEFBSVQsQUFZUSxBQUtSLEFBS2lCLEFBS0UsQUFLRCxBQUtYLFdBcENOLEFBaUJBLEdBb0JaLEtBekJhLENBaEJqQixHQUtrRCxBQWlCbEQsS0FJZ0MsQ0FVQSxDQUxBLHVDQXpCVyx1QkFxQjNDLENBVkEsQUFvQkEsQ0FMQSw2REF6QnNCLGtCQUNBLGtCQUNMLDBFQUNVLG1HQUNKLDZGQUN2QiIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZVdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEhvbWVcXE1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi4vX2dsb2JhbHMvUmVnaXN0ZXJcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5cclxuaW1wb3J0IHsgdXNlU3RhdGUsIGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmltcG9ydCB7IFNob3dMb2dpbkNvbnRleHQsIExvZ2dlZEluRGF0YUNvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvX2FwcFwiO1xyXG5pbXBvcnQgTG9nb3V0QnV0dG9uIGZyb20gXCIuLi91dGlscy9Mb2dvdXRCdXR0b25cIjtcclxuXHJcbmNvbnN0IFJlZ2lzdGVyTW9kYWxIYW5kbGVyID0gY3JlYXRlQ29udGV4dChudWxsKTtcclxuZXhwb3J0IHsgUmVnaXN0ZXJNb2RhbEhhbmRsZXIgfTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgICBjb25zdCBbcmVnaXN0ZXJNb2RhbFZpc2libGUsIHNob3dSZWdpc3Rlck1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHNob3dSZWdpc3Rlck1vZGFsSGFuZGxlciA9ICgpID0+IHNob3dSZWdpc3Rlck1vZGFsKCFyZWdpc3Rlck1vZGFsVmlzaWJsZSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0xvZ2luTW9kYWwgPSB1c2VDb250ZXh0KFNob3dMb2dpbkNvbnRleHQpO1xyXG4gICAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoTG9nZ2VkSW5EYXRhQ29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgICAgIDxSZWdpc3Rlck1vZGFsSGFuZGxlci5Qcm92aWRlciB2YWx1ZT17c2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgIHtyZWdpc3Rlck1vZGFsVmlzaWJsZSAmJiA8UmVnaXN0ZXIgLz59XHJcbiAgICAgICAgICAgIDwvUmVnaXN0ZXJNb2RhbEhhbmRsZXIuUHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fY29udGVudC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1haW5fX3ByaW1hcnktaGVhZGluZ1wiPmluZm9wbHVzPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fYnVsbGV0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdWxsZXRUaXRsZSB0aXRsZT1cIlNpbXBsdVwiIGljb249XCJjaGVja1wiIGk9XCIxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnVsbGV0VGl0bGUgdGl0bGU9XCJSYXBpZFwiIGljb249XCJib2x0XCIgaT1cIjJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdWxsZXRUaXRsZSB0aXRsZT1cIkludHVpdGl2XCIgaWNvbj1cImxpZ2h0YnVsYlwiIGk9XCIzXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19idXR0b24tc2lnbi1pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uLS1wcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXshaXNBdXRoZW50aWNhdGVkID8gXCJMb2doZWF6YS10ZVwiIDogXCJDxIN0cmUgY29udHVsIHTEg3VcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb249eyFpc0F1dGhlbnRpY2F0ZWQgPyBcInNpZ24taW4tYWx0XCIgOiBcImFycm93LXJpZ2h0XCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rPXshaXNBdXRoZW50aWNhdGVkID8gXCJcIiA6IFwiL2Rhc2hib2FyZFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17IWlzQXV0aGVudGljYXRlZCA/IHNob3dMb2dpbk1vZGFsIDogdW5kZWZpbmVkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYWluX19idXR0b24tbWFrZS1hY2NvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IWlzQXV0aGVudGljYXRlZCAmJiBcIk51IGFpIGNvbnQ/IFwifVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaXNBdXRoZW50aWNhdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25DbGljaz17c2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRmEtdGkgdW51bCFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvdXRCdXR0b24gdHlwZT1cImFuY2hvclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uLS1zZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlZlemkgbWFpIG11bHRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImVsbGlwc2lzLWhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rPVwiL2luZm9ybWF0aWlcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxXYXZlIC8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5tYWluIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9fY29udGVudC1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19wcmltYXJ5LWhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1sYXJnZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2J1bGxldHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMCA4MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19idWxsZXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fY29udGVudC1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNzBweCAzMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fcHJpbWFyeS1oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LWxhcmdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19idWxsZXRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5fX2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19idXR0b24tc2lnbi1pbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19idXR0b24tbWFrZS1hY2NvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQnVsbGV0VGl0bGUoeyB0aXRsZSwgaWNvbiwgaSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fYnVsbGV0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9faWNvbi1idWJibGVcIj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17aWNvbn0gY2xhc3NOYW1lPXtgbWFpbl9fYnVsbGV0LWljb24tLSR7aX1gfSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIm1haW5fX3RlcnRpYXJ5LWhlYWRpbmdcIj57dGl0bGV9PC9oMz5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5tYWluX190ZXJ0aWFyeS1oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9faWNvbi1idWJibGUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9fYnVsbGV0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDMwcHggMjBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgubWFpbl9fYnVsbGV0LWljb24tLTEsIC5tYWluX19idWxsZXQtaWNvbi0tMiwgLm1haW5fX2J1bGxldC1pY29uLS0zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLm1haW5fX2J1bGxldC1pY29uLS0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLm1haW5fX2J1bGxldC1pY29uLS0yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgubWFpbl9fYnVsbGV0LWljb24tLTMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXRlcnRpYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fYnVsbGV0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdXR0b24oeyB0eXBlLCB0aXRsZSwgaWNvbiwgbGluaywgb25DbGljayA9IG51bGwgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGluayBocmVmPXtsaW5rfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3R5cGV9IG9uQ2xpY2s9e29uQ2xpY2t9PlxyXG4gICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtpY29ufSAvPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBXYXZlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDUlXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTkwMCAyODBcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluX19zdmdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTS0yLjc1NDY3IDcxLjEwM0MtMi43NTQ2NyA3MS4xMDMgNzgzLjUzMyAtODguNTM2IDEyMDQuMjQgNzEuMTAzQzE2MjQuOTQgMjMwLjc0MiAxOTE3LjI1IDU3LjMyMyAxOTE3LjI1IDU3LjMyM1Y0ODAuMDAzSC0yLjc1NDY3VjcxLjEwM1pcIiAvPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ1JVwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE5MjAgMjgwXCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFpbl9fc3ZnXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGcgb3BhY2l0eT1cIjAuMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTE4OS4zNyAxNTcuMTcyQzEyMTEuNCAxNTMuMjggMTIyNi4xMSAxMzIuMjY1IDEyMjIuMjIgMTEwLjIzM0MxMjE4LjMzIDg4LjIwMDcgMTE5Ny4zMSA3My40OTUyIDExNzUuMjggNzcuMzg3MkMxMTUzLjI1IDgxLjI3OTEgMTEzOC41NCAxMDIuMjk1IDExNDIuNDMgMTI0LjMyN0MxMTQ2LjMyIDE0Ni4zNTkgMTE2Ny4zNCAxNjEuMDY0IDExODkuMzcgMTU3LjE3MlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTAyOS4xMiAyNjcuNzU1QzEwNTEuMTUgMjYzLjg2MyAxMDY1Ljg2IDI0Mi44NDggMTA2MS45NyAyMjAuODE2QzEwNTguMDcgMTk4Ljc4NCAxMDM3LjA2IDE4NC4wNzggMTAxNS4wMyAxODcuOTdDOTkyLjk5NSAxOTEuODYyIDk3OC4yODkgMjEyLjg3OCA5ODIuMTgxIDIzNC45MUM5ODYuMDczIDI1Ni45NDIgMTAwNy4wOSAyNzEuNjQ3IDEwMjkuMTIgMjY3Ljc1NVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNODU0LjE5OSAxNDEuNDQ1TDk1MC41MiAxMTcuNDlMOTIzLjI5NSAyMTIuNzAxTDg1NC4xOTkgMTQxLjQ0NVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTc5NC44MyAyMzguNDMxTDE4NjYuMjMgMzA3LjQ1N0wxNzcxLjAxIDMzNC44MzZMMTc5NC44MyAyMzguNDMxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNzk0LjgzIDIzOC40MzFMMTg2Ni4yMyAzMDcuNDU3TDE3NzEuMDEgMzM0LjgzNkwxNzk0LjgzIDIzOC40MzFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1OTUuNjEgMjUwLjk5MUwxNTc0Ljk4IDMyMy4xMkwxNjQ3LjExIDM0My43NDZMMTY2Ny43NCAyNzEuNjE2TDE1OTUuNjEgMjUwLjk5MVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQ3Ni43IDI4MS4wNDdMMTQwNC41NiAzMDEuNzg4TDE0MjUuMzEgMzczLjkyNEwxNDk3LjQ0IDM1My4xODJMMTQ3Ni43IDI4MS4wNDdaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTExMjEuMTQgMzA4LjgzOUwxMTU2LjYxIDQwMS42TDEwNTguNzQgMzg2LjEwNkwxMTIxLjE0IDMwOC44MzlaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEyMjguMDIgMjcwLjgyNEwxMjk0LjI3IDMwNi4wNDdMMTMyOS41IDIzOS43OTVMMTI2My4yNCAyMDQuNTcxTDEyMjguMDIgMjcwLjgyNFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTczNi42NSAyMjUuMDQ0QzE3NTguNjkgMjIxLjE1MiAxNzczLjM5IDIwMC4xMzcgMTc2OS41IDE3OC4xMDVDMTc2NS42MSAxNTYuMDczIDE3NDQuNTkgMTQxLjM2NyAxNzIyLjU2IDE0NS4yNTlDMTcwMC41MyAxNDkuMTUxIDE2ODUuODIgMTcwLjE2NyAxNjg5LjcyIDE5Mi4xOTlDMTY5My42MSAyMTQuMjMxIDE3MTQuNjIgMjI4LjkzNiAxNzM2LjY1IDIyNS4wNDRaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1MDAuNTQgMjI4LjE1NkMxNTIyLjU3IDIyNC4yNjQgMTUzNy4yOCAyMDMuMjQ5IDE1MzMuMzggMTgxLjIxN0MxNTI5LjQ5IDE1OS4xODUgMTUwOC40OCAxNDQuNDc5IDE0ODYuNDQgMTQ4LjM3MUMxNDY0LjQxIDE1Mi4yNjMgMTQ0OS43MSAxNzMuMjc5IDE0NTMuNiAxOTUuMzExQzE0NTcuNDkgMjE3LjM0MyAxNDc4LjUxIDIzMi4wNDggMTUwMC41NCAyMjguMTU2WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04NjQuNDAyIDMwNy45NTFMODUzLjk4NiAzODIuMjM4TDkyOC4yNzMgMzkyLjY1NUw5MzguNjkgMzE4LjM2N0w4NjQuNDAyIDMwNy45NTFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE4MzkuNDUgMTcxLjU3TDE5MzguNDUgMTc4LjY0MkwxODgzLjA3IDI2MC43MjdMMTgzOS40NSAxNzEuNTdaXCIgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00NDQuMDk5IDI0NC42MDRDNDIyLjA2NyAyNDguNDk2IDQwNy4zNjEgMjY5LjUxMiA0MTEuMjUzIDI5MS41NDRDNDE1LjE0NSAzMTMuNTc2IDQzNi4xNjEgMzI4LjI4MSA0NTguMTkzIDMyNC4zODlDNDgwLjIyNSAzMjAuNDk4IDQ5NC45MyAyOTkuNDgyIDQ5MS4wMzggMjc3LjQ1QzQ4Ny4xNDYgMjU1LjQxOCA0NjYuMTMxIDI0MC43MTMgNDQ0LjA5OSAyNDQuNjA0WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk02MDQuMzUgMTM0LjAyMUM1ODIuMzE4IDEzNy45MTMgNTY3LjYxMiAxNTguOTI5IDU3MS41MDQgMTgwLjk2MUM1NzUuMzk2IDIwMi45OTMgNTk2LjQxMiAyMTcuNjk4IDYxOC40NDQgMjEzLjgwNkM2NDAuNDc2IDIwOS45MTUgNjU1LjE4MSAxODguODk5IDY1MS4yODkgMTY2Ljg2N0M2NDcuMzk3IDE0NC44MzUgNjI2LjM4MiAxMzAuMTMgNjA0LjM1IDEzNC4wMjFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTc3OS4yNzIgMjYwLjMzMkw2ODIuOTUxIDI4NC4yODdMNzEwLjE3NiAxODkuMDc2TDc3OS4yNzIgMjYwLjMzMlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzcuODYxNSAxNTAuNzg2TDU4LjQ4NjggNzguNjU2MkwtMTMuNjQyNyA1OC4wMzA5TC0zNC4yNjggMTMwLjE2TDM3Ljg2MTUgMTUwLjc4NlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTU2Ljc3MiAxMjAuNzNMMjI4LjkwNyA5OS45ODg1TDIwOC4xNjUgMjcuODUzMUwxMzYuMDMgNDguNTk0N0wxNTYuNzcyIDEyMC43M1pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNTEyLjMzNSA5Mi45Mzc1TDQ3Ni44NjIgMC4xNzY1MTRMNTc0LjcyNyAxNS42NzA2TDUxMi4zMzUgOTIuOTM3NVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDA1LjQ1IDEzMC45NTNMMzM5LjE5OCA5NS43Mjk1TDMwMy45NzUgMTYxLjk4MkwzNzAuMjI3IDE5Ny4yMDVMNDA1LjQ1IDEzMC45NTNaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEzMi45MzMgMTczLjYyQzExMC45MDEgMTc3LjUxMiA5Ni4xOTUyIDE5OC41MjggMTAwLjA4NyAyMjAuNTZDMTAzLjk3OSAyNDIuNTkyIDEyNC45OTUgMjU3LjI5NyAxNDcuMDI3IDI1My40MDVDMTY5LjA1OSAyNDkuNTE0IDE4My43NjQgMjI4LjQ5OCAxNzkuODcyIDIwNi40NjZDMTc1Ljk4IDE4NC40MzQgMTU0Ljk2NSAxNjkuNzI5IDEzMi45MzMgMTczLjYyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk03NjkuMDY4IDkzLjgyNjFMNzc5LjQ4NSAxOS41Mzg1TDcwNS4xOTcgOS4xMjE2Nkw2OTQuNzgxIDgzLjQwOTJMNzY5LjA2OCA5My44MjYxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNzcuMDUzIDMzMS41MjZMMTg0LjQyOCAyOTUuODYzTDI2MS4zNjUgMjMzLjUyTDI3Ny4wNTMgMzMxLjUyNlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgICA8L3N2Zz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5fX3N2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc0MHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYWluX19zdmc6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fc3ZnIGcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxsOiAjNjI2MjYyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\Home\\\\Main.js */"));
}

function Button({
  type,
  title,
  icon,
  link,
  onClick = null
}) {
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: link,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 9
    }
  }, __jsx("button", {
    className: type,
    onClick: onClick,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }
  }, title, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: icon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
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
      lineNumber: 213,
      columnNumber: 13
    }
  }, __jsx("path", {
    d: "M-2.75467 71.103C-2.75467 71.103 783.533 -88.536 1204.24 71.103C1624.94 230.742 1917.25 57.323 1917.25 57.323V480.003H-2.75467V71.103Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221,
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
      lineNumber: 223,
      columnNumber: 13
    }
  }, __jsx("g", {
    opacity: "0.1",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230,
      columnNumber: 17
    }
  }, __jsx("path", {
    d: "M1189.37 157.172C1211.4 153.28 1226.11 132.265 1222.22 110.233C1218.33 88.2007 1197.31 73.4952 1175.28 77.3872C1153.25 81.2791 1138.54 102.295 1142.43 124.327C1146.32 146.359 1167.34 161.064 1189.37 157.172Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1029.12 267.755C1051.15 263.863 1065.86 242.848 1061.97 220.816C1058.07 198.784 1037.06 184.078 1015.03 187.97C992.995 191.862 978.289 212.878 982.181 234.91C986.073 256.942 1007.09 271.647 1029.12 267.755Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M854.199 141.445L950.52 117.49L923.295 212.701L854.199 141.445Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1794.83 238.431L1866.23 307.457L1771.01 334.836L1794.83 238.431Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1794.83 238.431L1866.23 307.457L1771.01 334.836L1794.83 238.431Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1595.61 250.991L1574.98 323.12L1647.11 343.746L1667.74 271.616L1595.61 250.991Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1476.7 281.047L1404.56 301.788L1425.31 373.924L1497.44 353.182L1476.7 281.047Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1121.14 308.839L1156.61 401.6L1058.74 386.106L1121.14 308.839Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1228.02 270.824L1294.27 306.047L1329.5 239.795L1263.24 204.571L1228.02 270.824Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1736.65 225.044C1758.69 221.152 1773.39 200.137 1769.5 178.105C1765.61 156.073 1744.59 141.367 1722.56 145.259C1700.53 149.151 1685.82 170.167 1689.72 192.199C1693.61 214.231 1714.62 228.936 1736.65 225.044Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1500.54 228.156C1522.57 224.264 1537.28 203.249 1533.38 181.217C1529.49 159.185 1508.48 144.479 1486.44 148.371C1464.41 152.263 1449.71 173.279 1453.6 195.311C1457.49 217.343 1478.51 232.048 1500.54 228.156Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M864.402 307.951L853.986 382.238L928.273 392.655L938.69 318.367L864.402 307.951Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M1839.45 171.57L1938.45 178.642L1883.07 260.727L1839.45 171.57Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M444.099 244.604C422.067 248.496 407.361 269.512 411.253 291.544C415.145 313.576 436.161 328.281 458.193 324.389C480.225 320.498 494.93 299.482 491.038 277.45C487.146 255.418 466.131 240.713 444.099 244.604Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M604.35 134.021C582.318 137.913 567.612 158.929 571.504 180.961C575.396 202.993 596.412 217.698 618.444 213.806C640.476 209.915 655.181 188.899 651.289 166.867C647.397 144.835 626.382 130.13 604.35 134.021Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M779.272 260.332L682.951 284.287L710.176 189.076L779.272 260.332Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M37.8615 150.786L58.4868 78.6562L-13.6427 58.0309L-34.268 130.16L37.8615 150.786Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M156.772 120.73L228.907 99.9885L208.165 27.8531L136.03 48.5947L156.772 120.73Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M512.335 92.9375L476.862 0.176514L574.727 15.6706L512.335 92.9375Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M405.45 130.953L339.198 95.7295L303.975 161.982L370.227 197.205L405.45 130.953Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M132.933 173.62C110.901 177.512 96.1952 198.528 100.087 220.56C103.979 242.592 124.995 257.297 147.027 253.405C169.059 249.514 183.764 228.498 179.872 206.466C175.98 184.434 154.965 169.729 132.933 173.62Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M769.068 93.8261L779.485 19.5385L705.197 9.12166L694.781 83.4092L769.068 93.8261Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 21
    }
  }), __jsx("path", {
    d: "M277.053 331.526L184.428 295.863L261.365 233.52L277.053 331.526Z",
    className: "jsx-3166235118",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254,
      columnNumber: 21
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3166235118",
    __self: this
  }, ".main__svg.jsx-3166235118{position:absolute;bottom:0;fill:var(--background-secondary);-webkit-transition:fill 300ms ease;transition:fill 300ms ease;}@media screen and (max-width:740px){.main__svg.jsx-3166235118:last-child{display:none;}}.main__svg.jsx-3166235118 g.jsx-3166235118{fill:#626262;-webkit-transition:fill 300ms ease;transition:fill 300ms ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcSG9tZVxcTWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpUWlCLEFBRzJDLEFBUUQsQUFLSixhQUpiLEFBSzJCLEtBYmxCLFNBQ3dCLGlDQUNOLGVBWS9CLCtDQVhBIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcSG9tZVxcTWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IFJlZ2lzdGVyIGZyb20gXCIuLi9fZ2xvYmFscy9SZWdpc3RlclwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgU2hvd0xvZ2luQ29udGV4dCwgTG9nZ2VkSW5EYXRhQ29udGV4dCB9IGZyb20gXCIuLi8uLi9wYWdlcy9fYXBwXCI7XHJcbmltcG9ydCBMb2dvdXRCdXR0b24gZnJvbSBcIi4uL3V0aWxzL0xvZ291dEJ1dHRvblwiO1xyXG5cclxuY29uc3QgUmVnaXN0ZXJNb2RhbEhhbmRsZXIgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xyXG5leHBvcnQgeyBSZWdpc3Rlck1vZGFsSGFuZGxlciB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICAgIGNvbnN0IFtyZWdpc3Rlck1vZGFsVmlzaWJsZSwgc2hvd1JlZ2lzdGVyTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgc2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyID0gKCkgPT4gc2hvd1JlZ2lzdGVyTW9kYWwoIXJlZ2lzdGVyTW9kYWxWaXNpYmxlKTtcclxuXHJcbiAgICBjb25zdCBzaG93TG9naW5Nb2RhbCA9IHVzZUNvbnRleHQoU2hvd0xvZ2luQ29udGV4dCk7XHJcbiAgICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChMb2dnZWRJbkRhdGFDb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgPFJlZ2lzdGVyTW9kYWxIYW5kbGVyLlByb3ZpZGVyIHZhbHVlPXtzaG93UmVnaXN0ZXJNb2RhbEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAge3JlZ2lzdGVyTW9kYWxWaXNpYmxlICYmIDxSZWdpc3RlciAvPn1cclxuICAgICAgICAgICAgPC9SZWdpc3Rlck1vZGFsSGFuZGxlci5Qcm92aWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19jb250ZW50LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWFpbl9fcHJpbWFyeS1oZWFkaW5nXCI+aW5mb3BsdXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19idWxsZXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1bGxldFRpdGxlIHRpdGxlPVwiU2ltcGx1XCIgaWNvbj1cImNoZWNrXCIgaT1cIjFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdWxsZXRUaXRsZSB0aXRsZT1cIlJhcGlkXCIgaWNvbj1cImJvbHRcIiBpPVwiMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1bGxldFRpdGxlIHRpdGxlPVwiSW50dWl0aXZcIiBpY29uPVwibGlnaHRidWxiXCIgaT1cIjNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fX2J1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fX2J1dHRvbi1zaWduLWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b24tLXByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9eyFpc0F1dGhlbnRpY2F0ZWQgPyBcIkxvZ2hlYXphLXRlXCIgOiBcIkPEg3RyZSBjb250dWwgdMSDdVwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj17IWlzQXV0aGVudGljYXRlZCA/IFwic2lnbi1pbi1hbHRcIiA6IFwiYXJyb3ctcmlnaHRcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9eyFpc0F1dGhlbnRpY2F0ZWQgPyBcIlwiIDogXCIvZGFzaGJvYXJkXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXshaXNBdXRoZW50aWNhdGVkID8gc2hvd0xvZ2luTW9kYWwgOiB1bmRlZmluZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1haW5fX2J1dHRvbi1tYWtlLWFjY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHshaXNBdXRoZW50aWNhdGVkICYmIFwiTnUgYWkgY29udD8gXCJ9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyFpc0F1dGhlbnRpY2F0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbkNsaWNrPXtzaG93UmVnaXN0ZXJNb2RhbEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGYS10aSB1bnVsIVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ291dEJ1dHRvbiB0eXBlPVwiYW5jaG9yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b24tLXNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVmV6aSBtYWkgbXVsdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZWxsaXBzaXMtaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCIvaW5mb3JtYXRpaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFdhdmUgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLm1haW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19jb250ZW50LXBhbmVsIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX3ByaW1hcnktaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LWxhcmdlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9fYnVsbGV0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAwIDgwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2J1bGxldCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9fYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19jb250ZW50LXBhbmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiA3MHB4IDMwcHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19wcmltYXJ5LWhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtbGFyZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5fX2J1bGxldHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5fX2J1dHRvbi1zaWduLWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2J1dHRvbi1tYWtlLWFjY291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdWxsZXRUaXRsZSh7IHRpdGxlLCBpY29uLCBpIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19idWxsZXRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19pY29uLWJ1YmJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtpY29ufSBjbGFzc05hbWU9e2BtYWluX19idWxsZXQtaWNvbi0tJHtpfWB9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWFpbl9fdGVydGlhcnktaGVhZGluZ1wiPnt0aXRsZX08L2gzPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLm1haW5fX3RlcnRpYXJ5LWhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19pY29uLWJ1YmJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19idWxsZXQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMzBweCAyMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5tYWluX19idWxsZXQtaWNvbi0tMSwgLm1haW5fX2J1bGxldC1pY29uLS0yLCAubWFpbl9fYnVsbGV0LWljb24tLTMpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgubWFpbl9fYnVsbGV0LWljb24tLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgubWFpbl9fYnVsbGV0LWljb24tLTIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5tYWluX19idWxsZXQtaWNvbi0tMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtdGVydGlhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MjBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19idWxsZXQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1dHRvbih7IHR5cGUsIHRpdGxlLCBpY29uLCBsaW5rLCBvbkNsaWNrID0gbnVsbCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dHlwZX0gb25DbGljaz17b25DbGlja30+XHJcbiAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ljb259IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFdhdmUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NSVcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxOTAwIDI4MFwiXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5fX3N2Z1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNLTIuNzU0NjcgNzEuMTAzQy0yLjc1NDY3IDcxLjEwMyA3ODMuNTMzIC04OC41MzYgMTIwNC4yNCA3MS4xMDNDMTYyNC45NCAyMzAuNzQyIDE5MTcuMjUgNTcuMzIzIDE5MTcuMjUgNTcuMzIzVjQ4MC4wMDNILTIuNzU0NjdWNzEuMTAzWlwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDUlXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTkyMCAyODBcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluX19zdmdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZyBvcGFjaXR5PVwiMC4xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMTg5LjM3IDE1Ny4xNzJDMTIxMS40IDE1My4yOCAxMjI2LjExIDEzMi4yNjUgMTIyMi4yMiAxMTAuMjMzQzEyMTguMzMgODguMjAwNyAxMTk3LjMxIDczLjQ5NTIgMTE3NS4yOCA3Ny4zODcyQzExNTMuMjUgODEuMjc5MSAxMTM4LjU0IDEwMi4yOTUgMTE0Mi40MyAxMjQuMzI3QzExNDYuMzIgMTQ2LjM1OSAxMTY3LjM0IDE2MS4wNjQgMTE4OS4zNyAxNTcuMTcyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMDI5LjEyIDI2Ny43NTVDMTA1MS4xNSAyNjMuODYzIDEwNjUuODYgMjQyLjg0OCAxMDYxLjk3IDIyMC44MTZDMTA1OC4wNyAxOTguNzg0IDEwMzcuMDYgMTg0LjA3OCAxMDE1LjAzIDE4Ny45N0M5OTIuOTk1IDE5MS44NjIgOTc4LjI4OSAyMTIuODc4IDk4Mi4xODEgMjM0LjkxQzk4Ni4wNzMgMjU2Ljk0MiAxMDA3LjA5IDI3MS42NDcgMTAyOS4xMiAyNjcuNzU1WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04NTQuMTk5IDE0MS40NDVMOTUwLjUyIDExNy40OUw5MjMuMjk1IDIxMi43MDFMODU0LjE5OSAxNDEuNDQ1WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNzk0LjgzIDIzOC40MzFMMTg2Ni4yMyAzMDcuNDU3TDE3NzEuMDEgMzM0LjgzNkwxNzk0LjgzIDIzOC40MzFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE3OTQuODMgMjM4LjQzMUwxODY2LjIzIDMwNy40NTdMMTc3MS4wMSAzMzQuODM2TDE3OTQuODMgMjM4LjQzMVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTU5NS42MSAyNTAuOTkxTDE1NzQuOTggMzIzLjEyTDE2NDcuMTEgMzQzLjc0NkwxNjY3Ljc0IDI3MS42MTZMMTU5NS42MSAyNTAuOTkxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNDc2LjcgMjgxLjA0N0wxNDA0LjU2IDMwMS43ODhMMTQyNS4zMSAzNzMuOTI0TDE0OTcuNDQgMzUzLjE4MkwxNDc2LjcgMjgxLjA0N1pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTEyMS4xNCAzMDguODM5TDExNTYuNjEgNDAxLjZMMTA1OC43NCAzODYuMTA2TDExMjEuMTQgMzA4LjgzOVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIyOC4wMiAyNzAuODI0TDEyOTQuMjcgMzA2LjA0N0wxMzI5LjUgMjM5Ljc5NUwxMjYzLjI0IDIwNC41NzFMMTIyOC4wMiAyNzAuODI0WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNzM2LjY1IDIyNS4wNDRDMTc1OC42OSAyMjEuMTUyIDE3NzMuMzkgMjAwLjEzNyAxNzY5LjUgMTc4LjEwNUMxNzY1LjYxIDE1Ni4wNzMgMTc0NC41OSAxNDEuMzY3IDE3MjIuNTYgMTQ1LjI1OUMxNzAwLjUzIDE0OS4xNTEgMTY4NS44MiAxNzAuMTY3IDE2ODkuNzIgMTkyLjE5OUMxNjkzLjYxIDIxNC4yMzEgMTcxNC42MiAyMjguOTM2IDE3MzYuNjUgMjI1LjA0NFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUwMC41NCAyMjguMTU2QzE1MjIuNTcgMjI0LjI2NCAxNTM3LjI4IDIwMy4yNDkgMTUzMy4zOCAxODEuMjE3QzE1MjkuNDkgMTU5LjE4NSAxNTA4LjQ4IDE0NC40NzkgMTQ4Ni40NCAxNDguMzcxQzE0NjQuNDEgMTUyLjI2MyAxNDQ5LjcxIDE3My4yNzkgMTQ1My42IDE5NS4zMTFDMTQ1Ny40OSAyMTcuMzQzIDE0NzguNTEgMjMyLjA0OCAxNTAwLjU0IDIyOC4xNTZaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTg2NC40MDIgMzA3Ljk1MUw4NTMuOTg2IDM4Mi4yMzhMOTI4LjI3MyAzOTIuNjU1TDkzOC42OSAzMTguMzY3TDg2NC40MDIgMzA3Ljk1MVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTgzOS40NSAxNzEuNTdMMTkzOC40NSAxNzguNjQyTDE4ODMuMDcgMjYwLjcyN0wxODM5LjQ1IDE3MS41N1pcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQ0NC4wOTkgMjQ0LjYwNEM0MjIuMDY3IDI0OC40OTYgNDA3LjM2MSAyNjkuNTEyIDQxMS4yNTMgMjkxLjU0NEM0MTUuMTQ1IDMxMy41NzYgNDM2LjE2MSAzMjguMjgxIDQ1OC4xOTMgMzI0LjM4OUM0ODAuMjI1IDMyMC40OTggNDk0LjkzIDI5OS40ODIgNDkxLjAzOCAyNzcuNDVDNDg3LjE0NiAyNTUuNDE4IDQ2Ni4xMzEgMjQwLjcxMyA0NDQuMDk5IDI0NC42MDRaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTYwNC4zNSAxMzQuMDIxQzU4Mi4zMTggMTM3LjkxMyA1NjcuNjEyIDE1OC45MjkgNTcxLjUwNCAxODAuOTYxQzU3NS4zOTYgMjAyLjk5MyA1OTYuNDEyIDIxNy42OTggNjE4LjQ0NCAyMTMuODA2QzY0MC40NzYgMjA5LjkxNSA2NTUuMTgxIDE4OC44OTkgNjUxLjI4OSAxNjYuODY3QzY0Ny4zOTcgMTQ0LjgzNSA2MjYuMzgyIDEzMC4xMyA2MDQuMzUgMTM0LjAyMVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNzc5LjI3MiAyNjAuMzMyTDY4Mi45NTEgMjg0LjI4N0w3MTAuMTc2IDE4OS4wNzZMNzc5LjI3MiAyNjAuMzMyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zNy44NjE1IDE1MC43ODZMNTguNDg2OCA3OC42NTYyTC0xMy42NDI3IDU4LjAzMDlMLTM0LjI2OCAxMzAuMTZMMzcuODYxNSAxNTAuNzg2WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNTYuNzcyIDEyMC43M0wyMjguOTA3IDk5Ljk4ODVMMjA4LjE2NSAyNy44NTMxTDEzNi4wMyA0OC41OTQ3TDE1Ni43NzIgMTIwLjczWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01MTIuMzM1IDkyLjkzNzVMNDc2Ljg2MiAwLjE3NjUxNEw1NzQuNzI3IDE1LjY3MDZMNTEyLjMzNSA5Mi45Mzc1WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MDUuNDUgMTMwLjk1M0wzMzkuMTk4IDk1LjcyOTVMMzAzLjk3NSAxNjEuOTgyTDM3MC4yMjcgMTk3LjIwNUw0MDUuNDUgMTMwLjk1M1pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTMyLjkzMyAxNzMuNjJDMTEwLjkwMSAxNzcuNTEyIDk2LjE5NTIgMTk4LjUyOCAxMDAuMDg3IDIyMC41NkMxMDMuOTc5IDI0Mi41OTIgMTI0Ljk5NSAyNTcuMjk3IDE0Ny4wMjcgMjUzLjQwNUMxNjkuMDU5IDI0OS41MTQgMTgzLjc2NCAyMjguNDk4IDE3OS44NzIgMjA2LjQ2NkMxNzUuOTggMTg0LjQzNCAxNTQuOTY1IDE2OS43MjkgMTMyLjkzMyAxNzMuNjJaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTc2OS4wNjggOTMuODI2MUw3NzkuNDg1IDE5LjUzODVMNzA1LjE5NyA5LjEyMTY2TDY5NC43ODEgODMuNDA5Mkw3NjkuMDY4IDkzLjgyNjFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI3Ny4wNTMgMzMxLjUyNkwxODQuNDI4IDI5NS44NjNMMjYxLjM2NSAyMzMuNTJMMjc3LjA1MyAzMzEuNTI2WlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1haW5fX3N2ZzpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19zdmcgZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICM2MjYyNjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\Home\\\\Main.js */"));
}

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
  alertToggleHandler,
  customToggleHandler = null
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_OverlayDarkener__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: customToggleHandler ? () => (customToggleHandler(), alertToggleHandler()) : alertToggleHandler,
    className: "overlay-darkener--alert",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1255154095" + " " + `alert alert--type-${type}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1255154095" + " " + "alert__info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, type === 1 ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    className: "jsx-1255154095",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 29
    }
  }, "Succes!"), __jsx(_utils_CheckmarkSolved__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 29
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    className: "jsx-1255154095",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 29
    }
  }, "Eroare!"), __jsx(_utils_ErrorCircle__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 29
    }
  })), __jsx("p", {
    className: "jsx-1255154095",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, children)), __jsx("button", {
    onClick: customToggleHandler ? () => (customToggleHandler(), alertToggleHandler()) : alertToggleHandler,
    className: "jsx-1255154095" + " " + "alert__button button--tertiary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "OK")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1255154095",
    __self: this
  }, ".alert.jsx-1255154095{max-width:50%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;max-height:180px;padding:30px 30px 20px;border-radius:20px;position:fixed;margin:auto;top:0;left:0;right:0;bottom:0;z-index:100;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:var(--text-button);box-shadow:var(--box-shadow);opacity:0;-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);-webkit-animation:comeIn-jsx-1255154095 300ms ease forwards;animation:comeIn-jsx-1255154095 300ms ease forwards;}.overlay-darkener--alert{z-index:99;}.alert__info.jsx-1255154095{margin-bottom:20px;}.alert--type-1.jsx-1255154095{background-color:var(--accent-success);}.alert--type-0.jsx-1255154095{background-color:var(--accent-failure-secondary);}.alert__button.jsx-1255154095{color:var(--text-button);-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin-right:0;margin-bottom:-10px;text-align:right;}.alert__button.jsx-1255154095:hover{color:var(--accent-quaternary);}h2.jsx-1255154095{display:inline-block;vertical-align:middle;}@media screen and (max-width:576px){.alert.jsx-1255154095{max-width:75%;}}@-webkit-keyframes comeIn-jsx-1255154095{from{-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:0;}60%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);opacity:0.8;}to{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}}@keyframes comeIn-jsx-1255154095{from{-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:0;}60%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);opacity:0.8;}to{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXEFsZXJ0Tm90aWZpY2F0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDd0IsQUFHbUMsQUFzQkgsQUFJUSxBQUlvQixBQUlVLEFBSXhCLEFBUU0sQUFJVixBQU1ILEFBTU8sQUFJQyxBQUlILFdBL0MzQixHQXRCdUIsQUF3RG5CLEtBOUJKLEVBd0IwQixJQVpGLE1BUXhCLFFBaEJBLElBcUJBLE1BakJBLG9CQW9Da0IsTUFSQSxHQUlFLENBS2hCLEtBdEVpQixDQThEakIsS0FJQSxPQTVCZSxJQXJDUSxXQXNDSCxZQXJDRCxRQXNDRixXQXJDRixNQXNDbkIsU0FyQ2dCLFlBQ04sTUFDQyxPQUNDLFFBQ0MsU0FDRyxZQUNDLDBFQUNTLDhFQUNHLHlCQUNJLDZCQUNuQixVQUNXLDJFQUNnQixnSEFDekMiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGVXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcQWxlcnROb3RpZmljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hlY2ttYXJrU29sdmVkIGZyb20gXCIuLi91dGlscy9DaGVja21hcmtTb2x2ZWRcIjtcclxuaW1wb3J0IEVycm9yQ2lyY2xlIGZyb20gXCIuLi91dGlscy9FcnJvckNpcmNsZVwiO1xyXG5pbXBvcnQgT3ZlcmxheURhcmtlbmVyIGZyb20gXCIuL092ZXJsYXlEYXJrZW5lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxlcnROb3RpZmljYXRpb24oe1xyXG4gICAgdHlwZSxcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgYWxlcnRUb2dnbGVIYW5kbGVyLFxyXG4gICAgY3VzdG9tVG9nZ2xlSGFuZGxlciA9IG51bGwsXHJcbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE92ZXJsYXlEYXJrZW5lclxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17XHJcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tVG9nZ2xlSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/ICgpID0+IChjdXN0b21Ub2dnbGVIYW5kbGVyKCksIGFsZXJ0VG9nZ2xlSGFuZGxlcigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGFsZXJ0VG9nZ2xlSGFuZGxlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmxheS1kYXJrZW5lci0tYWxlcnRcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0IGFsZXJ0LS10eXBlLSR7dHlwZX1gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnRfX2luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICB7dHlwZSA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5TdWNjZXMhPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja21hcmtTb2x2ZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Fcm9hcmUhPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFcnJvckNpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntjaGlsZHJlbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhbGVydF9fYnV0dG9uIGJ1dHRvbi0tdGVydGlhcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXN0b21Ub2dnbGVIYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICgpID0+IChjdXN0b21Ub2dnbGVIYW5kbGVyKCksIGFsZXJ0VG9nZ2xlSGFuZGxlcigpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBhbGVydFRvZ2dsZUhhbmRsZXJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgT0tcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmFsZXJ0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDE4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMzBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1idXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogY29tZUluIDMwMG1zIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgub3ZlcmxheS1kYXJrZW5lci0tYWxlcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYWxlcnRfX2luZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmFsZXJ0LS10eXBlLTEge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1zdWNjZXNzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYWxlcnQtLXR5cGUtMCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWZhaWx1cmUtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuYWxlcnRfX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYnV0dG9uKTtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmFsZXJ0X19idXR0b246aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcXVhdGVybmFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmFsZXJ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA3NSU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgY29tZUluIHtcclxuICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA2MCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\AlertNotification.js */"));
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
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3919748599",
    __self: this
  }, ".dropdown-menu-header{width:220px;height:calc(100vh - 60px);position:fixed;right:0;bottom:0;background-color:var(--background-secondary);z-index:-1;box-shadow:-12px 13px 9px rgba(0,0,0,0.1);overflow-y:auto;padding-top:30px;-webkit-transform:translateX(230px) translateZ(0);-ms-transform:translateX(230px) translateZ(0);transform:translateX(230px) translateZ(0);-webkit-transition:color,background-color,-webkit-transform 300ms ease;-webkit-transition:color,background-color,transform 300ms ease;transition:color,background-color,transform 300ms ease;}.dropdown-menu-header--active{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXERyb3Bkb3duTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQitCLEFBR2lDLEFBZVksWUFkRSwwQkFDWCxlQUNQLFFBQ0MsU0FDb0MsY0FXakQsK0JBVmUsV0FDa0MsMENBQzdCLGdCQUNDLGlCQUN5QiwwSUFDZSw2TEFDN0QiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGVXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcRHJvcGRvd25NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgdXNlQ29tcG9uZW50RGlkTW91bnQgZnJvbSBcIi4uL19ob29rcy9jb21wb25lbnREaWRNb3VudFwiO1xyXG5pbXBvcnQgeyBMb2dnZWRJbkRhdGFDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL19hcHBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3Bkb3duTWVudSh7IGlzRHJvcGRvd25Ub2dnbGVkIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcGRvd24tbWVudS1oZWFkZXIgJHtcclxuICAgICAgICAgICAgICAgICAgICBpc0Ryb3Bkb3duVG9nZ2xlZCA/IFwiZHJvcGRvd24tbWVudS1oZWFkZXItLWFjdGl2ZSBcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51VWwgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMTJweCAxM3B4IDlweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjMwcHgpIHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlci0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudVVsKCkge1xyXG4gICAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoTG9nZ2VkSW5EYXRhQ29udGV4dCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fdWxcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXhlcmNpdGlpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpXCI+RXhlcmNpyJtpaTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVBY2NvcmRpb24gdGl0bGU9XCJSZXN1cnNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aXRsZUxpOiBcIkNsYXNhIElYXCIsIGhyZWY6IFwiL3Jlc3Vyc2UvaXhcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlTGk6IFwiQ2xhc2EgWFwiLCBocmVmOiBcIi9yZXN1cnNlL3hcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlTGk6IFwiQ2xhc2EgWElcIiwgaHJlZjogXCIvcmVzdXJzZS94aVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51QWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8VGhlbWVDaGFuZ2VyQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saVwiPk1vZCBwcm9pZWN0b3I8L2xpPlxyXG4gICAgICAgICAgICAgICAge2lzQXV0aGVudGljYXRlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXhlcmNpdGlpL2NvbXB1c2UtZGUtbWluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpXCI+Q29tcHVuZSBleGVyY2nIm2l1PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19ociB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX3VsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCguZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5kcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saTpob3ZlciwgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19zZWNvbmRhcnktbGk6aG92ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5kcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saTpob3Zlcjo6YmVmb3JlLCAuZHJvcGRvd24tbWVudS1oZWFkZXJfX3NlY29uZGFyeS1saTpob3Zlcjo6YmVmb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51QWNjb3JkaW9uKHsgdGl0bGUsIGNoaWxkcmVuIH0pIHtcclxuICAgIGNvbnN0IFtpc1RvZ2dsZWQsIHRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHRvZ2dsZSghaXNUb2dnbGVkKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX29wdGlvbi1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICA8bGkgb25DbGljaz17dG9nZ2xlRHJvcGRvd259IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpXCI+XHJcbiAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFuZ2xlLWRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiMkEyQTJBXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkcm9wZG93bi1tZW51LWhlYWRlcl9faWNvbiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1RvZ2dsZWQgPyBcImRyb3Bkb3duLW1lbnUtaGVhZGVyX19pY29uLS1hY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNUb2dnbGVkID8gXCJkcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudC0tYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50LXVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuLm1hcCgoeyB0aXRsZUxpID0gXCJcIiwgaHJlZiA9IFwiXCIgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmfSBrZXk9e2BjaGlsZF9saW5rLSR7aX0tJHtocmVmfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX3NlY29uZGFyeS1saVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgY2hpbGRfbGktJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlTGl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fc2Vjb25kYXJ5LWxpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudC11bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX29wdGlvbi1kcm9wZG93biB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQtLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2ljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19pY29uLS1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaGVtZUNoYW5nZXJCdXR0b24oKSB7XHJcbiAgICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKFwiZGFya1wiKTtcclxuICAgIHVzZUNvbXBvbmVudERpZE1vdW50KCgpID0+IHtcclxuICAgICAgICBzZXRUaGVtZSh3aW5kb3cuX19USEVNRSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5fX1RIRU1FID0gd2luZG93Ll9fVEhFTUUgPT09IFwiZGFya1wiID8gXCJsaWdodFwiIDogXCJkYXJrXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID0gYHRoZW1lLSR7d2luZG93Ll9fVEhFTUV9YDtcclxuXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIHdpbmRvdy5fX1RIRU1FKTtcclxuICAgICAgICAgICAgICAgIHNldFRoZW1lKHdpbmRvdy5fX1RIRU1FKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFRlbWEge3RoZW1lID09PSBcImRhcmtcIiA/IFwiw45udHVuZWNhdMSDXCIgOiBcIkx1bWlub2FzxINcIn1cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\DropdownMenu.js */"));
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
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/exercitii",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, __jsx("li", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__main-li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  }, "Exerci\u021Bii")), __jsx("hr", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__hr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }), __jsx(DropdownMenuAccordion, {
    title: "Resurse",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
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
      lineNumber: 58,
      columnNumber: 17
    }
  }), __jsx(ThemeChangerButton, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }), __jsx("hr", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__hr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }), __jsx("li", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__main-li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, "Mod proiector"), isAuthenticated && __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("hr", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__hr",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 25
    }
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/exercitii/compuse-de-mine",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }, __jsx("li", {
    className: "jsx-1946800395" + " " + "dropdown-menu-header__main-li",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 29
    }
  }, "Compune exerci\u021Biu")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1946800395",
    __self: this
  }, ".dropdown-menu-header__hr.jsx-1946800395{width:85%;}.dropdown-menu-header__ul.jsx-1946800395{padding-top:0;padding-left:5px;list-style-type:none;}.dropdown-menu-header__main-li{font-weight:bold;font-size:var(--font-small);cursor:pointer;position:relative;padding:10px 0 10px 15px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;}.dropdown-menu-header__main-li:hover,.dropdown-menu-header__secondary-li:hover{background-color:var(--background-primary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;}.dropdown-menu-header__main-li:hover::before,.dropdown-menu-header__secondary-li:hover::before{content:\"\";width:5px;height:100%;background-color:var(--accent-primary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;position:absolute;left:0;top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXERyb3Bkb3duTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzRXdCLEFBRytCLEFBSUksQUFNRyxBQVMwQixBQUtoQyxVQXZCZixDQXdCYyxHQXBCTyxHQU1XLElBZWhCLFVBcEJTLEVBcUJrQixVQVBBLEVBUnhCLE9BTG5CLFFBTXNCLFlBZXFCLE1BZGQseUJBQ1IsMEJBTXJCLDZCQVFzQixrQkFDWCxPQUNELEtBZlYsQ0FnQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGVXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcRHJvcGRvd25NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgdXNlQ29tcG9uZW50RGlkTW91bnQgZnJvbSBcIi4uL19ob29rcy9jb21wb25lbnREaWRNb3VudFwiO1xyXG5pbXBvcnQgeyBMb2dnZWRJbkRhdGFDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL19hcHBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3Bkb3duTWVudSh7IGlzRHJvcGRvd25Ub2dnbGVkIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcGRvd24tbWVudS1oZWFkZXIgJHtcclxuICAgICAgICAgICAgICAgICAgICBpc0Ryb3Bkb3duVG9nZ2xlZCA/IFwiZHJvcGRvd24tbWVudS1oZWFkZXItLWFjdGl2ZSBcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51VWwgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMTJweCAxM3B4IDlweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjMwcHgpIHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlci0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudVVsKCkge1xyXG4gICAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoTG9nZ2VkSW5EYXRhQ29udGV4dCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fdWxcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXhlcmNpdGlpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpXCI+RXhlcmNpyJtpaTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVBY2NvcmRpb24gdGl0bGU9XCJSZXN1cnNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aXRsZUxpOiBcIkNsYXNhIElYXCIsIGhyZWY6IFwiL3Jlc3Vyc2UvaXhcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlTGk6IFwiQ2xhc2EgWFwiLCBocmVmOiBcIi9yZXN1cnNlL3hcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlTGk6IFwiQ2xhc2EgWElcIiwgaHJlZjogXCIvcmVzdXJzZS94aVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51QWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8VGhlbWVDaGFuZ2VyQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saVwiPk1vZCBwcm9pZWN0b3I8L2xpPlxyXG4gICAgICAgICAgICAgICAge2lzQXV0aGVudGljYXRlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXhlcmNpdGlpL2NvbXB1c2UtZGUtbWluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpXCI+Q29tcHVuZSBleGVyY2nIm2l1PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19ociB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX3VsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCguZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5kcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saTpob3ZlciwgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19zZWNvbmRhcnktbGk6aG92ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5kcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saTpob3Zlcjo6YmVmb3JlLCAuZHJvcGRvd24tbWVudS1oZWFkZXJfX3NlY29uZGFyeS1saTpob3Zlcjo6YmVmb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51QWNjb3JkaW9uKHsgdGl0bGUsIGNoaWxkcmVuIH0pIHtcclxuICAgIGNvbnN0IFtpc1RvZ2dsZWQsIHRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHRvZ2dsZSghaXNUb2dnbGVkKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX29wdGlvbi1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICA8bGkgb25DbGljaz17dG9nZ2xlRHJvcGRvd259IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpXCI+XHJcbiAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFuZ2xlLWRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiMkEyQTJBXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkcm9wZG93bi1tZW51LWhlYWRlcl9faWNvbiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1RvZ2dsZWQgPyBcImRyb3Bkb3duLW1lbnUtaGVhZGVyX19pY29uLS1hY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNUb2dnbGVkID8gXCJkcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudC0tYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50LXVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuLm1hcCgoeyB0aXRsZUxpID0gXCJcIiwgaHJlZiA9IFwiXCIgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmfSBrZXk9e2BjaGlsZF9saW5rLSR7aX0tJHtocmVmfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX3NlY29uZGFyeS1saVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgY2hpbGRfbGktJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlTGl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fc2Vjb25kYXJ5LWxpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudC11bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX29wdGlvbi1kcm9wZG93biB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQtLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2ljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19pY29uLS1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaGVtZUNoYW5nZXJCdXR0b24oKSB7XHJcbiAgICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKFwiZGFya1wiKTtcclxuICAgIHVzZUNvbXBvbmVudERpZE1vdW50KCgpID0+IHtcclxuICAgICAgICBzZXRUaGVtZSh3aW5kb3cuX19USEVNRSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5fX1RIRU1FID0gd2luZG93Ll9fVEhFTUUgPT09IFwiZGFya1wiID8gXCJsaWdodFwiIDogXCJkYXJrXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID0gYHRoZW1lLSR7d2luZG93Ll9fVEhFTUV9YDtcclxuXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIHdpbmRvdy5fX1RIRU1FKTtcclxuICAgICAgICAgICAgICAgIHNldFRoZW1lKHdpbmRvdy5fX1RIRU1FKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFRlbWEge3RoZW1lID09PSBcImRhcmtcIiA/IFwiw45udHVuZWNhdMSDXCIgOiBcIkx1bWlub2FzxINcIn1cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\DropdownMenu.js */"));
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
  }, ".dropdown-menu-header__secondary-li{padding:10px 0;font-size:var(--font-smaller);cursor:pointer;position:relative;padding-left:20px;}.dropdown-menu-header__content-ul{list-style-type:none;padding-left:0;}.dropdown-menu-header__option-dropdown{overflow:hidden;}.dropdown-menu-header__content{margin-left:20px;height:0;-webkit-transition:height 300ms ease;transition:height 300ms ease;}.dropdown-menu-header__content--active{height:140px;}.dropdown-menu-header__icon{margin-left:20px;-webkit-transition:-webkit-transform 300ms ease;-webkit-transition:transform 300ms ease;transition:transform 300ms ease;}.dropdown-menu-header__icon--active{-webkit-transform:rotateZ(180deg);-ms-transform:rotateZ(180deg);transform:rotateZ(180deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXERyb3Bkb3duTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnSitCLEFBR29DLEFBUU0sQUFLTCxBQUlDLEFBTUosQUFJSSxBQUlTLGFBUDlCLEVBdkJrQyxDQWFsQyxDQUlhLEFBVXVCLElBbkJqQixLQVVjLFVBVGpDLFNBUm1CLGVBQ0csa0JBQ0EsWUE0QnRCLEVBWkEsSUFmQSx5Q0F3QkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGVXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcRHJvcGRvd25NZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5pbXBvcnQgdXNlQ29tcG9uZW50RGlkTW91bnQgZnJvbSBcIi4uL19ob29rcy9jb21wb25lbnREaWRNb3VudFwiO1xyXG5pbXBvcnQgeyBMb2dnZWRJbkRhdGFDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL19hcHBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3Bkb3duTWVudSh7IGlzRHJvcGRvd25Ub2dnbGVkIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZHJvcGRvd24tbWVudS1oZWFkZXIgJHtcclxuICAgICAgICAgICAgICAgICAgICBpc0Ryb3Bkb3duVG9nZ2xlZCA/IFwiZHJvcGRvd24tbWVudS1oZWFkZXItLWFjdGl2ZSBcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51VWwgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2MHB4KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAtMTJweCAxM3B4IDlweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjMwcHgpIHRyYW5zbGF0ZVooMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQtY29sb3IsIHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlci0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIERyb3Bkb3duTWVudVVsKCkge1xyXG4gICAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoTG9nZ2VkSW5EYXRhQ29udGV4dCk7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fdWxcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXhlcmNpdGlpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpXCI+RXhlcmNpyJtpaTwvbGk+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVBY2NvcmRpb24gdGl0bGU9XCJSZXN1cnNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1tcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB0aXRsZUxpOiBcIkNsYXNhIElYXCIsIGhyZWY6IFwiL3Jlc3Vyc2UvaXhcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlTGk6IFwiQ2xhc2EgWFwiLCBocmVmOiBcIi9yZXN1cnNlL3hcIiB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHRpdGxlTGk6IFwiQ2xhc2EgWElcIiwgaHJlZjogXCIvcmVzdXJzZS94aVwiIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgICAgIDwvRHJvcGRvd25NZW51QWNjb3JkaW9uPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8VGhlbWVDaGFuZ2VyQnV0dG9uIC8+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saVwiPk1vZCBwcm9pZWN0b3I8L2xpPlxyXG4gICAgICAgICAgICAgICAge2lzQXV0aGVudGljYXRlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZXhlcmNpdGlpL2NvbXB1c2UtZGUtbWluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpXCI+Q29tcHVuZSBleGVyY2nIm2l1PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19ociB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX3VsIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCguZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5kcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saTpob3ZlciwgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19zZWNvbmRhcnktbGk6aG92ZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5kcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saTpob3Zlcjo6YmVmb3JlLCAuZHJvcGRvd24tbWVudS1oZWFkZXJfX3NlY29uZGFyeS1saTpob3Zlcjo6YmVmb3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gRHJvcGRvd25NZW51QWNjb3JkaW9uKHsgdGl0bGUsIGNoaWxkcmVuIH0pIHtcclxuICAgIGNvbnN0IFtpc1RvZ2dsZWQsIHRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHRvZ2dsZSghaXNUb2dnbGVkKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX29wdGlvbi1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICA8bGkgb25DbGljaz17dG9nZ2xlRHJvcGRvd259IGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpXCI+XHJcbiAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFuZ2xlLWRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiMkEyQTJBXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkcm9wZG93bi1tZW51LWhlYWRlcl9faWNvbiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1RvZ2dsZWQgPyBcImRyb3Bkb3duLW1lbnUtaGVhZGVyX19pY29uLS1hY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNUb2dnbGVkID8gXCJkcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudC0tYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50LXVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuLm1hcCgoeyB0aXRsZUxpID0gXCJcIiwgaHJlZiA9IFwiXCIgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtocmVmfSBrZXk9e2BjaGlsZF9saW5rLSR7aX0tJHtocmVmfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX3NlY29uZGFyeS1saVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtgY2hpbGRfbGktJHtpfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlTGl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fc2Vjb25kYXJ5LWxpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudC11bCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX29wdGlvbi1kcm9wZG93biB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2NvbnRlbnQtLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2ljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19pY29uLS1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWigxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBUaGVtZUNoYW5nZXJCdXR0b24oKSB7XHJcbiAgICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVN0YXRlKFwiZGFya1wiKTtcclxuICAgIHVzZUNvbXBvbmVudERpZE1vdW50KCgpID0+IHtcclxuICAgICAgICBzZXRUaGVtZSh3aW5kb3cuX19USEVNRSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxsaVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fbWFpbi1saVwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5fX1RIRU1FID0gd2luZG93Ll9fVEhFTUUgPT09IFwiZGFya1wiID8gXCJsaWdodFwiIDogXCJkYXJrXCI7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NOYW1lID0gYHRoZW1lLSR7d2luZG93Ll9fVEhFTUV9YDtcclxuXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIHdpbmRvdy5fX1RIRU1FKTtcclxuICAgICAgICAgICAgICAgIHNldFRoZW1lKHdpbmRvdy5fX1RIRU1FKTtcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIFRlbWEge3RoZW1lID09PSBcImRhcmtcIiA/IFwiw45udHVuZWNhdMSDXCIgOiBcIkx1bWlub2FzxINcIn1cclxuICAgICAgICA8L2xpPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\DropdownMenu.js */"));
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
      lineNumber: 192,
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
      lineNumber: 15,
      columnNumber: 13
    }
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-3076026530" + " " + "header__site-logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 21
    }
  }, __jsx(SiteLogo, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 25
    }
  }))), __jsx(IconsRightMenu, {
    isDropdownToggled: isDropdownToggled,
    toggleMenuDropdown: toggleMenuDropdown,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }), __jsx(_DropdownMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isDropdownToggled: isDropdownToggled,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3076026530",
    __self: this
  }, ".header{width:100%;height:60px;background-color:var(--background-secondary);box-shadow:var(--box-shadow);color:var(--text-primary);position:fixed;top:0;padding:0 40px;z-index:100;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:color,background-color 300ms ease;transition:color,background-color 300ms ease;}@media screen and (max-width:375px){.header{padding:0 15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5Qm1DLEFBR29DLEFBaUJRLFdBaEJQLElBaUJaLFFBaEI2Qyw2Q0FDaEIsNkJBQ0gsMEJBQ1gsZUFDVCxNQUNTLGVBQ0gsWUFDQywwRUFDTSw2RkFDVyxtSEFDZ0Isa0dBQ2xEIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXEhlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IERyb3Bkb3duTWVudSBmcm9tIFwiLi9Ecm9wZG93bk1lbnVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgT3ZlcmxheURhcmtlbmVyIGZyb20gXCIuL092ZXJsYXlEYXJrZW5lclwiO1xyXG5pbXBvcnQgeyBMb2dnZWRJbkRhdGFDb250ZXh0LCBTaG93TG9naW5Db250ZXh0IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL19hcHBcIjtcclxuaW1wb3J0IExvZ291dEJ1dHRvbiBmcm9tIFwiLi4vdXRpbHMvTG9nb3V0QnV0dG9uXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgICBjb25zdCBbaXNEcm9wZG93blRvZ2dsZWQsIHRvZ2dsZURyb3Bkb3duXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHRvZ2dsZU1lbnVEcm9wZG93biA9ICgpID0+IHRvZ2dsZURyb3Bkb3duKCFpc0Ryb3Bkb3duVG9nZ2xlZCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fc2l0ZS1sb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTaXRlTG9nbyAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPEljb25zUmlnaHRNZW51XHJcbiAgICAgICAgICAgICAgICAgICAgaXNEcm9wZG93blRvZ2dsZWQ9e2lzRHJvcGRvd25Ub2dnbGVkfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZU1lbnVEcm9wZG93bj17dG9nZ2xlTWVudURyb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgaXNEcm9wZG93blRvZ2dsZWQ9e2lzRHJvcGRvd25Ub2dnbGVkfSAvPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgICAgICB7aXNEcm9wZG93blRvZ2dsZWQgJiYgPE92ZXJsYXlEYXJrZW5lciBvbkNsaWNrPXt0b2dnbGVNZW51RHJvcGRvd259IC8+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSWNvbnNSaWdodE1lbnUoeyBpc0Ryb3Bkb3duVG9nZ2xlZCwgdG9nZ2xlTWVudURyb3Bkb3duIH0pIHtcclxuICAgIGNvbnN0IHsgaXNBdXRoZW50aWNhdGVkIH0gPSB1c2VDb250ZXh0KExvZ2dlZEluRGF0YUNvbnRleHQpO1xyXG4gICAgY29uc3Qgc2hvd0xvZ2luTW9kYWwgPSB1c2VDb250ZXh0KFNob3dMb2dpbkNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2ljb25zLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19idXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNlYXJjaFwiIGNsYXNzTmFtZT1cImhlYWRlcl9faWNvblwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7aXNBdXRoZW50aWNhdGVkID8gKFxyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ1c2VyXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dvdXRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXJfX2J1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZUZvckljb249XCJoZWFkZXJfX2ljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19idXR0b25cIiBvbkNsaWNrPXtzaG93TG9naW5Nb2RhbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwic2lnbi1pbi1hbHRcIiBjbGFzc05hbWU9XCJoZWFkZXJfX2ljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fYnV0dG9uIGhlYWRlcl9fYnV0dG9uLS1tZW51XCIgb25DbGljaz17dG9nZ2xlTWVudURyb3Bkb3dufT5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICBpY29uPVwiYmFyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaGVhZGVyX19tZW51LWljb24gJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNEcm9wZG93blRvZ2dsZWQgPyBcImhlYWRlcl9fbWVudS1pY29uLS1hY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiaGVhZGVyX19tZW51LXRpdGxlXCI+TUVOSVU8L2g0PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19pY29ucy1yaWdodCxcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX2J1dHRvbi0tbWVudSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX2J1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9faWNvbixcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogdmFyKC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWljb24tLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU2l0ZUxvZ28oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgd2lkdGg9XCI1N1wiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjU3XCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1NyA1N1wiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlcl9fc2l0ZS1sb2dvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTI4LjUgNTdDNDQuMjQwMSA1NyA1NyA0NC4yNDAxIDU3IDI4LjVDNTcgMTIuNzU5OSA0NC4yNDAxIDAgMjguNSAwQzEyLjc1OTkgMCAwIDEyLjc1OTkgMCAyOC41QzAgNDQuMjQwMSAxMi43NTk5IDU3IDI4LjUgNTdaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ2YXIoLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnkpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjEuOTQ2NyAyMS41MDRDMjEuMTU3MyAyMS41MDQgMjAuNDg1MyAyMS4yMjY3IDE5LjkzMDcgMjAuNjcyQzE5LjM3NiAyMC4xMTczIDE5LjA5ODcgMTkuNDQ1MyAxOS4wOTg3IDE4LjY1NkMxOS4wOTg3IDE3Ljg2NjcgMTkuMzc2IDE3LjE5NDcgMTkuOTMwNyAxNi42NEMyMC40ODUzIDE2LjA4NTMgMjEuMTU3MyAxNS44MDggMjEuOTQ2NyAxNS44MDhDMjIuNzM2IDE1LjgwOCAyMy40MDggMTYuMDg1MyAyMy45NjI3IDE2LjY0QzI0LjUxNzMgMTcuMTk0NyAyNC43OTQ3IDE3Ljg2NjcgMjQuNzk0NyAxOC42NTZDMjQuNzk0NyAxOS40NDUzIDI0LjUxNzMgMjAuMTE3MyAyMy45NjI3IDIwLjY3MkMyMy40MDggMjEuMjI2NyAyMi43MzYgMjEuNTA0IDIxLjk0NjcgMjEuNTA0Wk0yNC41Mzg3IDIzLjA3MlY0MEgxOS4zNTQ3VjIzLjA3MkgyNC41Mzg3Wk0zNy4xMDU3IDM2LjA2NEgzMy4xMDU3VjMwLjQ5NkgyNy41MDU3VjI2LjUyOEgzMy4xMDU3VjIxLjA4OEgzNy4xMDU3VjI2LjUyOEg0Mi42NzM3VjMwLjQ5NkgzNy4xMDU3VjM2LjA2NFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLXRleHQtc2Vjb25kYXJ5KVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyX19zaXRlLWxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\Header.js */")), isDropdownToggled && __jsx(_OverlayDarkener__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: toggleMenuDropdown,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
    className: "jsx-1413719750" + " " + "header__icons-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1413719750" + " " + "header__button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "search",
    className: "header__icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  })), isAuthenticated ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/dashboard",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "jsx-1413719750" + " " + "header__button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "user",
    className: "header__icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }))), __jsx(_utils_LogoutButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    type: "icon",
    className: "header__button",
    classNameForIcon: "header__icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  })) : __jsx("div", {
    onClick: showLoginModal,
    className: "jsx-1413719750" + " " + "header__button",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "sign-in-alt",
    className: "header__icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 21
    }
  })), __jsx("div", {
    onClick: toggleMenuDropdown,
    className: "jsx-1413719750" + " " + "header__button header__button--menu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "bars",
    className: `header__menu-icon ${isDropdownToggled ? "header__menu-icon--active" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }), __jsx("h4", {
    className: "jsx-1413719750" + " " + "header__menu-title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 17
    }
  }, "MENIU")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1413719750",
    __self: this
  }, ".header__icons-right,.header__button--menu{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header__button{margin:0 15px;cursor:pointer;}.header__menu-title{margin-left:10px;font-weight:800;}.header__icon,.header__menu-icon{fill:var(--background-quaternary);-webkit-transition:fill 300ms ease;transition:fill 300ms ease;width:25px !important;height:25px;}.header__menu-icon{-webkit-transition:-webkit-transform 300ms ease;-webkit-transition:transform 300ms ease;transition:transform 300ms ease;}.header__menu-icon--active{-webkit-transform:rotateZ(90deg);-ms-transform:rotateZ(90deg);transform:rotateZ(90deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RitCLEFBSWtDLEFBS0MsQUFLRyxBQU1pQixBQU9GLEFBSVAsY0FyQlYsR0FLQyxZQUpwQixJQUtBLENBSytCLHdDQWhCUixhQTJCdkIsU0FWMEIsc0JBQ1YsRUFLaEIsVUFKQSxxQ0FsQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGVXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gXCIuL0Ryb3Bkb3duTWVudVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBPdmVybGF5RGFya2VuZXIgZnJvbSBcIi4vT3ZlcmxheURhcmtlbmVyXCI7XHJcbmltcG9ydCB7IExvZ2dlZEluRGF0YUNvbnRleHQsIFNob3dMb2dpbkNvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvX2FwcFwiO1xyXG5pbXBvcnQgTG9nb3V0QnV0dG9uIGZyb20gXCIuLi91dGlscy9Mb2dvdXRCdXR0b25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICAgIGNvbnN0IFtpc0Ryb3Bkb3duVG9nZ2xlZCwgdG9nZ2xlRHJvcGRvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdG9nZ2xlTWVudURyb3Bkb3duID0gKCkgPT4gdG9nZ2xlRHJvcGRvd24oIWlzRHJvcGRvd25Ub2dnbGVkKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19zaXRlLWxvZ29cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFNpdGVMb2dvIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8SWNvbnNSaWdodE1lbnVcclxuICAgICAgICAgICAgICAgICAgICBpc0Ryb3Bkb3duVG9nZ2xlZD17aXNEcm9wZG93blRvZ2dsZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlTWVudURyb3Bkb3duPXt0b2dnbGVNZW51RHJvcGRvd259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPERyb3Bkb3duTWVudSBpc0Ryb3Bkb3duVG9nZ2xlZD17aXNEcm9wZG93blRvZ2dsZWR9IC8+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNzVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuaGVhZGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgICAgIHtpc0Ryb3Bkb3duVG9nZ2xlZCAmJiA8T3ZlcmxheURhcmtlbmVyIG9uQ2xpY2s9e3RvZ2dsZU1lbnVEcm9wZG93bn0gLz59XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJY29uc1JpZ2h0TWVudSh7IGlzRHJvcGRvd25Ub2dnbGVkLCB0b2dnbGVNZW51RHJvcGRvd24gfSkge1xyXG4gICAgY29uc3QgeyBpc0F1dGhlbnRpY2F0ZWQgfSA9IHVzZUNvbnRleHQoTG9nZ2VkSW5EYXRhQ29udGV4dCk7XHJcbiAgICBjb25zdCBzaG93TG9naW5Nb2RhbCA9IHVzZUNvbnRleHQoU2hvd0xvZ2luQ29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9faWNvbnMtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwic2VhcmNoXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19pY29uXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIHtpc0F1dGhlbnRpY2F0ZWQgPyAoXHJcbiAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInVzZXJcIiBjbGFzc05hbWU9XCJoZWFkZXJfX2ljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ291dEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlcl9fYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lRm9ySWNvbj1cImhlYWRlcl9faWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2J1dHRvblwiIG9uQ2xpY2s9e3Nob3dMb2dpbk1vZGFsfT5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzaWduLWluLWFsdFwiIGNsYXNzTmFtZT1cImhlYWRlcl9faWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19idXR0b24gaGVhZGVyX19idXR0b24tLW1lbnVcIiBvbkNsaWNrPXt0b2dnbGVNZW51RHJvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJiYXJzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXJfX21lbnUtaWNvbiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Ryb3Bkb3duVG9nZ2xlZCA/IFwiaGVhZGVyX19tZW51LWljb24tLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJoZWFkZXJfX21lbnUtdGl0bGVcIj5NRU5JVTwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX2ljb25zLXJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fYnV0dG9uLS1tZW51IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19pY29uLFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtaWNvbi0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTaXRlTG9nbygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB3aWR0aD1cIjU3XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNTdcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDU3IDU3XCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyX19zaXRlLWxvZ29cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjguNSA1N0M0NC4yNDAxIDU3IDU3IDQ0LjI0MDEgNTcgMjguNUM1NyAxMi43NTk5IDQ0LjI0MDEgMCAyOC41IDBDMTIuNzU5OSAwIDAgMTIuNzU5OSAwIDI4LjVDMCA0NC4yNDAxIDEyLjc1OTkgNTcgMjguNSA1N1pcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0yMS45NDY3IDIxLjUwNEMyMS4xNTczIDIxLjUwNCAyMC40ODUzIDIxLjIyNjcgMTkuOTMwNyAyMC42NzJDMTkuMzc2IDIwLjExNzMgMTkuMDk4NyAxOS40NDUzIDE5LjA5ODcgMTguNjU2QzE5LjA5ODcgMTcuODY2NyAxOS4zNzYgMTcuMTk0NyAxOS45MzA3IDE2LjY0QzIwLjQ4NTMgMTYuMDg1MyAyMS4xNTczIDE1LjgwOCAyMS45NDY3IDE1LjgwOEMyMi43MzYgMTUuODA4IDIzLjQwOCAxNi4wODUzIDIzLjk2MjcgMTYuNjRDMjQuNTE3MyAxNy4xOTQ3IDI0Ljc5NDcgMTcuODY2NyAyNC43OTQ3IDE4LjY1NkMyNC43OTQ3IDE5LjQ0NTMgMjQuNTE3MyAyMC4xMTczIDIzLjk2MjcgMjAuNjcyQzIzLjQwOCAyMS4yMjY3IDIyLjczNiAyMS41MDQgMjEuOTQ2NyAyMS41MDRaTTI0LjUzODcgMjMuMDcyVjQwSDE5LjM1NDdWMjMuMDcySDI0LjUzODdaTTM3LjEwNTcgMzYuMDY0SDMzLjEwNTdWMzAuNDk2SDI3LjUwNTdWMjYuNTI4SDMzLjEwNTdWMjEuMDg4SDM3LjEwNTdWMjYuNTI4SDQyLjY3MzdWMzAuNDk2SDM3LjEwNTdWMzYuMDY0WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidmFyKC0tdGV4dC1zZWNvbmRhcnkpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkZXJfX3NpdGUtbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\Header.js */"));
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
      lineNumber: 132,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M28.5 57C44.2401 57 57 44.2401 57 28.5C57 12.7599 44.2401 0 28.5 0C12.7599 0 0 12.7599 0 28.5C0 44.2401 12.7599 57 28.5 57Z",
    fill: "var(--background-quaternary)",
    className: "jsx-3674848814",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M21.9467 21.504C21.1573 21.504 20.4853 21.2267 19.9307 20.672C19.376 20.1173 19.0987 19.4453 19.0987 18.656C19.0987 17.8667 19.376 17.1947 19.9307 16.64C20.4853 16.0853 21.1573 15.808 21.9467 15.808C22.736 15.808 23.408 16.0853 23.9627 16.64C24.5173 17.1947 24.7947 17.8667 24.7947 18.656C24.7947 19.4453 24.5173 20.1173 23.9627 20.672C23.408 21.2267 22.736 21.504 21.9467 21.504ZM24.5387 23.072V40H19.3547V23.072H24.5387ZM37.1057 36.064H33.1057V30.496H27.5057V26.528H33.1057V21.088H37.1057V26.528H42.6737V30.496H37.1057V36.064Z",
    fill: "var(--text-secondary)",
    className: "jsx-3674848814",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3674848814",
    __self: this
  }, ".header__site-logo{width:35px;height:35px;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSmlCLEFBR29DLFdBQ0MsWUFDRyxlQUNuQiIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZVdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSBcIi4vRHJvcGRvd25NZW51XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IE92ZXJsYXlEYXJrZW5lciBmcm9tIFwiLi9PdmVybGF5RGFya2VuZXJcIjtcclxuaW1wb3J0IHsgTG9nZ2VkSW5EYXRhQ29udGV4dCwgU2hvd0xvZ2luQ29udGV4dCB9IGZyb20gXCIuLi8uLi9wYWdlcy9fYXBwXCI7XHJcbmltcG9ydCBMb2dvdXRCdXR0b24gZnJvbSBcIi4uL3V0aWxzL0xvZ291dEJ1dHRvblwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gICAgY29uc3QgW2lzRHJvcGRvd25Ub2dnbGVkLCB0b2dnbGVEcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB0b2dnbGVNZW51RHJvcGRvd24gPSAoKSA9PiB0b2dnbGVEcm9wZG93bighaXNEcm9wZG93blRvZ2dsZWQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3NpdGUtbG9nb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U2l0ZUxvZ28gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxJY29uc1JpZ2h0TWVudVxyXG4gICAgICAgICAgICAgICAgICAgIGlzRHJvcGRvd25Ub2dnbGVkPXtpc0Ryb3Bkb3duVG9nZ2xlZH1cclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVNZW51RHJvcGRvd249e3RvZ2dsZU1lbnVEcm9wZG93bn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51IGlzRHJvcGRvd25Ub2dnbGVkPXtpc0Ryb3Bkb3duVG9nZ2xlZH0gLz5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA0MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICAgICAge2lzRHJvcGRvd25Ub2dnbGVkICYmIDxPdmVybGF5RGFya2VuZXIgb25DbGljaz17dG9nZ2xlTWVudURyb3Bkb3dufSAvPn1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEljb25zUmlnaHRNZW51KHsgaXNEcm9wZG93blRvZ2dsZWQsIHRvZ2dsZU1lbnVEcm9wZG93biB9KSB7XHJcbiAgICBjb25zdCB7IGlzQXV0aGVudGljYXRlZCB9ID0gdXNlQ29udGV4dChMb2dnZWRJbkRhdGFDb250ZXh0KTtcclxuICAgIGNvbnN0IHNob3dMb2dpbk1vZGFsID0gdXNlQ29udGV4dChTaG93TG9naW5Db250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19pY29ucy1yaWdodFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJoZWFkZXJfX2ljb25cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge2lzQXV0aGVudGljYXRlZCA/IChcclxuICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidXNlclwiIGNsYXNzTmFtZT1cImhlYWRlcl9faWNvblwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8TG9nb3V0QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJpY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyX19idXR0b25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWVGb3JJY29uPVwiaGVhZGVyX19pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fYnV0dG9uXCIgb25DbGljaz17c2hvd0xvZ2luTW9kYWx9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNpZ24taW4tYWx0XCIgY2xhc3NOYW1lPVwiaGVhZGVyX19pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2J1dHRvbiBoZWFkZXJfX2J1dHRvbi0tbWVudVwiIG9uQ2xpY2s9e3RvZ2dsZU1lbnVEcm9wZG93bn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImJhcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhlYWRlcl9fbWVudS1pY29uICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRHJvcGRvd25Ub2dnbGVkID8gXCJoZWFkZXJfX21lbnUtaWNvbi0tYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlYWRlcl9fbWVudS10aXRsZVwiPk1FTklVPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9faWNvbnMtcmlnaHQsXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19idXR0b24tLW1lbnUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LXRpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX2ljb24sXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1pY29uLS1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlWig5MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNpdGVMb2dvKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHdpZHRoPVwiNTdcIlxyXG4gICAgICAgICAgICBoZWlnaHQ9XCI1N1wiXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNTcgNTdcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoZWFkZXJfX3NpdGUtbG9nb1wiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0yOC41IDU3QzQ0LjI0MDEgNTcgNTcgNDQuMjQwMSA1NyAyOC41QzU3IDEyLjc1OTkgNDQuMjQwMSAwIDI4LjUgMEMxMi43NTk5IDAgMCAxMi43NTk5IDAgMjguNUMwIDQ0LjI0MDEgMTIuNzU5OSA1NyAyOC41IDU3WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidmFyKC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5KVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTIxLjk0NjcgMjEuNTA0QzIxLjE1NzMgMjEuNTA0IDIwLjQ4NTMgMjEuMjI2NyAxOS45MzA3IDIwLjY3MkMxOS4zNzYgMjAuMTE3MyAxOS4wOTg3IDE5LjQ0NTMgMTkuMDk4NyAxOC42NTZDMTkuMDk4NyAxNy44NjY3IDE5LjM3NiAxNy4xOTQ3IDE5LjkzMDcgMTYuNjRDMjAuNDg1MyAxNi4wODUzIDIxLjE1NzMgMTUuODA4IDIxLjk0NjcgMTUuODA4QzIyLjczNiAxNS44MDggMjMuNDA4IDE2LjA4NTMgMjMuOTYyNyAxNi42NEMyNC41MTczIDE3LjE5NDcgMjQuNzk0NyAxNy44NjY3IDI0Ljc5NDcgMTguNjU2QzI0Ljc5NDcgMTkuNDQ1MyAyNC41MTczIDIwLjExNzMgMjMuOTYyNyAyMC42NzJDMjMuNDA4IDIxLjIyNjcgMjIuNzM2IDIxLjUwNCAyMS45NDY3IDIxLjUwNFpNMjQuNTM4NyAyMy4wNzJWNDBIMTkuMzU0N1YyMy4wNzJIMjQuNTM4N1pNMzcuMTA1NyAzNi4wNjRIMzMuMTA1N1YzMC40OTZIMjcuNTA1N1YyNi41MjhIMzMuMTA1N1YyMS4wODhIMzcuMTA1N1YyNi41MjhINDIuNjczN1YzMC40OTZIMzcuMTA1N1YzNi4wNjRaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ2YXIoLS10ZXh0LXNlY29uZGFyeSlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlcl9fc2l0ZS1sb2dvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\Header.js */"));
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
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\_globals\\LoadingBar.js";


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
  }, ".loading-bar.jsx-1023741959{position:fixed;top:0;z-index:200;background-color:var(--accent-tertiary);box-shadow:0px 0px 5px 0px var(--accent-tertiary);width:0%;display:none;height:5px;-webkit-transition:opacity 500ms linear;transition:opacity 500ms linear;}.loading-bar--is-loading.jsx-1023741959{display:block;-webkit-animation:loading-jsx-1023741959 2000ms ease forwards;animation:loading-jsx-1023741959 2000ms ease forwards;}@-webkit-keyframes loading-jsx-1023741959{from{width:0%;}to{width:100%;}}@keyframes loading-jsx-1023741959{from{width:0%;}to{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXExvYWRpbmdCYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSXdCLEFBR29DLEFBWUQsQUFNRCxBQUdFLFNBRmYsRUFHQSxHQVR1QyxDQVpqQyxNQUNNLFlBQzRCLHdDQUNVLGtEQUN6QyxPQVNiLEVBUmlCLGFBQ0YsV0FDcUIsd0VBQ3BDIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXExvYWRpbmdCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2FkaW5nQmFyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctYmFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5sb2FkaW5nLWJhciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXRlcnRpYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAwcHggdmFyKC0tYWNjZW50LXRlcnRpYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDUwMG1zIGxpbmVhcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubG9hZGluZy1iYXItLWlzLWxvYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogbG9hZGluZyAyMDAwbXMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGxvYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\LoadingBar.js */"));
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
/* harmony import */ var _utils_SubmitButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/SubmitButton */ "./components/utils/SubmitButton.js");
/* harmony import */ var _utils_InputAreas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/InputAreas */ "./components/utils/InputAreas.js");
/* harmony import */ var _utils_inputAreaLoginData__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/inputAreaLoginData */ "./components/utils/inputAreaLoginData.js");
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages/_app */ "./pages/_app.js");
/* harmony import */ var _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/lengthBoundariesForFields */ "./utils/lengthBoundariesForFields.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\_globals\\Login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function Login({
  cancelDisabled = false
}) {
  const {
    0: userDetails,
    1: setUserDetail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    username: "",
    password: ""
  });

  const updateDetails = (e, fieldName) => setUserDetail(_objectSpread({}, userDetails, {
    [fieldName]: e.target.value
  }));

  const {
    0: errorMessage,
    1: setErrorMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const showErrorMessage = error => setErrorMessage(error);

  const showLoginModalHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_8__["LoginModalHandler"]); // TODO: generalise inputAreaLoginData and stuff like that where I see fit, and
  //       make press on [enter] submit

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_OverlayDarkener__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: showLoginModalHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-930236557 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal modal--login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-930236557 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__title-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }, __jsx(LoginModalWave, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 21
    }
  }), __jsx("h2", {
    className: "jsx-930236557 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }, "Logheaza-te")), __jsx("div", {
    className: "jsx-930236557 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panels",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx(_utils_InputAreas__WEBPACK_IMPORTED_MODULE_6__["default"], {
    updateDetails: updateDetails,
    inputAreaData: _utils_inputAreaLoginData__WEBPACK_IMPORTED_MODULE_7__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "jsx-930236557 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__buttons-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, !cancelDisabled && __jsx("button", {
    onClick: showLoginModalHandler,
    className: "jsx-930236557 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "button--tertiary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 29
    }
  }, "Renun\u021B\u0103"), __jsx(_utils_SubmitButton__WEBPACK_IMPORTED_MODULE_5__["default"], {
    userDetails: userDetails,
    fieldOptions: {
      lengthBoundariesForEachField: _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_9__["loginFields"]
    },
    showErrorMessage: showErrorMessage,
    buttonTitle: "Logare",
    type: "login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  })), errorMessage && __jsx("p", {
    className: "jsx-930236557 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "error-message",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, errorMessage, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "times-circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 44
    }
  }), " "))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash,
    __self: this
  }, _styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "930236557",
    __self: this
  }, ".modal.jsx-930236557{width:40%;max-height:81%;}.modal__input-panel-group{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.modal--login .modal__input-panel{margin-bottom:20px;}.modal--login .button--primary{background-color:var(--accent-primary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXExvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTREd0IsQUFHK0IsQUFLWSxBQUdILEFBSW9CLFVBWHhCLFNBUW5CLE1BUEEsY0FXQSx1Q0FQQSIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZVdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxMb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcbmltcG9ydCBmb3JtTW9kYWwgZnJvbSBcIi4uLy4uL3N0eWxlcy9mb3JtTW9kYWxcIjtcclxuaW1wb3J0IE92ZXJsYXlEYXJrZW5lciBmcm9tIFwiLi9PdmVybGF5RGFya2VuZXJcIjtcclxuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tIFwiLi4vdXRpbHMvU3VibWl0QnV0dG9uXCI7XHJcbmltcG9ydCBJbnB1dEFyZWFzIGZyb20gXCIuLi91dGlscy9JbnB1dEFyZWFzXCI7XHJcbmltcG9ydCBpbnB1dEFyZWFMb2dpbkRhdGEgZnJvbSBcIi4uL3V0aWxzL2lucHV0QXJlYUxvZ2luRGF0YVwiO1xyXG5cclxuaW1wb3J0IHsgTG9naW5Nb2RhbEhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vcGFnZXMvX2FwcFwiO1xyXG5pbXBvcnQgeyBsb2dpbkZpZWxkcyB9IGZyb20gXCIuLi8uLi91dGlscy9sZW5ndGhCb3VuZGFyaWVzRm9yRmllbGRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbih7IGNhbmNlbERpc2FibGVkID0gZmFsc2UgfSkge1xyXG4gICAgY29uc3QgW3VzZXJEZXRhaWxzLCBzZXRVc2VyRGV0YWlsXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgIH0pO1xyXG4gICAgY29uc3QgdXBkYXRlRGV0YWlscyA9IChlLCBmaWVsZE5hbWUpID0+XHJcbiAgICAgICAgc2V0VXNlckRldGFpbCh7IC4uLnVzZXJEZXRhaWxzLCBbZmllbGROYW1lXTogZS50YXJnZXQudmFsdWUgfSk7XHJcblxyXG4gICAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHNob3dFcnJvck1lc3NhZ2UgPSAoZXJyb3IpID0+IHNldEVycm9yTWVzc2FnZShlcnJvcik7XHJcblxyXG4gICAgY29uc3Qgc2hvd0xvZ2luTW9kYWxIYW5kbGVyID0gdXNlQ29udGV4dChMb2dpbk1vZGFsSGFuZGxlcik7XHJcblxyXG4gICAgLy8gVE9ETzogZ2VuZXJhbGlzZSBpbnB1dEFyZWFMb2dpbkRhdGEgYW5kIHN0dWZmIGxpa2UgdGhhdCB3aGVyZSBJIHNlZSBmaXQsIGFuZFxyXG4gICAgLy8gICAgICAgbWFrZSBwcmVzcyBvbiBbZW50ZXJdIHN1Ym1pdFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8T3ZlcmxheURhcmtlbmVyIG9uQ2xpY2s9e3Nob3dMb2dpbk1vZGFsSGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbCBtb2RhbC0tbG9naW5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMb2dpbk1vZGFsV2F2ZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtb2RhbF9fdGl0bGVcIj5Mb2doZWF6YS10ZTwvaDI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2lucHV0LXBhbmVsc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dEFyZWFzIHVwZGF0ZURldGFpbHM9e3VwZGF0ZURldGFpbHN9IGlucHV0QXJlYURhdGE9e2lucHV0QXJlYUxvZ2luRGF0YX0gLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fYnV0dG9ucy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyFjYW5jZWxEaXNhYmxlZCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi0tdGVydGlhcnlcIiBvbkNsaWNrPXtzaG93TG9naW5Nb2RhbEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlbnVuyJvEg1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJtaXRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJEZXRhaWxzPXt1c2VyRGV0YWlsc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkT3B0aW9ucz17eyBsZW5ndGhCb3VuZGFyaWVzRm9yRWFjaEZpZWxkOiBsb2dpbkZpZWxkcyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yTWVzc2FnZT17c2hvd0Vycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblRpdGxlPVwiTG9nYXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJsb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2V9IDxGb250QXdlc29tZUljb24gaWNvbj1cInRpbWVzLWNpcmNsZVwiIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57Zm9ybU1vZGFsfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA4MSU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgubW9kYWxfX2lucHV0LXBhbmVsLWdyb3VwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLm1vZGFsLS1sb2dpbiAubW9kYWxfX2lucHV0LXBhbmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5tb2RhbC0tbG9naW4gLmJ1dHRvbi0tcHJpbWFyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gTG9naW5Nb2RhbFdhdmUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2NDYgMTg0XCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWxfX3dhdmVcIlxyXG4gICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0wIDBMNjQ2IDkuNTM2NzRlLTA3VjE1NS45MTFDNjQ2IDE1NS45MTEgNTgwLjU5IDE3OS4zOTMgNDY4LjIgMTgyLjYyQzM1NS44MSAxODUuODQ3IDI4NS4yNjcgMTcxLjQ4OCAyMDcuMTMgMTU1LjkxMUM0Ni4wMjcgMTIzLjc5MyAxLjkwNzM1ZS0wNiAxNTUuOTExIDEuOTA3MzVlLTA2IDE1NS45MTFMMCAwWlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidmFyKC0tYWNjZW50LXByaW1hcnkpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\Login.js */"));
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
      lineNumber: 84,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M0 0L646 9.53674e-07V155.911C646 155.911 580.59 179.393 468.2 182.62C355.81 185.847 285.267 171.488 207.13 155.911C46.027 123.793 1.90735e-06 155.911 1.90735e-06 155.911L0 0Z",
    fill: "var(--accent-primary)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
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

/***/ "./components/_globals/Register.js":
/*!*****************************************!*\
  !*** ./components/_globals/Register.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_formModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/formModal */ "./styles/formModal.js");
/* harmony import */ var _OverlayDarkener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./OverlayDarkener */ "./components/_globals/OverlayDarkener.js");
/* harmony import */ var _utils_InputAreas__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/InputAreas */ "./components/utils/InputAreas.js");
/* harmony import */ var _utils_inputAreaRegisterData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/inputAreaRegisterData */ "./components/utils/inputAreaRegisterData.js");
/* harmony import */ var _utils_SubmitButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/SubmitButton */ "./components/utils/SubmitButton.js");
/* harmony import */ var _Home_Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Home/Main */ "./components/Home/Main.js");
/* harmony import */ var _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/lengthBoundariesForFields */ "./utils/lengthBoundariesForFields.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\_globals\\Register.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










function Register() {
  const {
    0: userDetails,
    1: setUserDetail
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    name: "",
    surname: "",
    county: "Alba",
    profession: "Elev",
    username: "",
    email: "",
    password: ""
  });
  const {
    0: errorMessage,
    1: setErrorMessage
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const showErrorMessage = error => setErrorMessage(error);

  const updateDetails = (e, fieldName) => setUserDetail(_objectSpread({}, userDetails, {
    [fieldName]: e.target.value
  }));

  const showRegisterModalHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Home_Main__WEBPACK_IMPORTED_MODULE_8__["RegisterModalHandler"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_OverlayDarkener__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: showRegisterModalHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-3124442123 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3124442123 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__title-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, __jsx(RegisterModalWave, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }), __jsx("h2", {
    className: "jsx-3124442123 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "\xCEnregistreaz\u0103-te")), __jsx("form", {
    onSubmit: () => false,
    className: "jsx-3124442123 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panels",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx(_utils_InputAreas__WEBPACK_IMPORTED_MODULE_5__["default"], {
    updateDetails: updateDetails,
    inputAreaData: _utils_inputAreaRegisterData__WEBPACK_IMPORTED_MODULE_6__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "jsx-3124442123 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__buttons-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: showRegisterModalHandler,
    className: "jsx-3124442123 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "button--tertiary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 25
    }
  }, "Renun\u021B\u0103"), __jsx(_utils_SubmitButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
    userDetails: userDetails,
    fieldOptions: {
      lengthBoundariesForEachField: _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_9__["registerFields"],
      hasEmail: true
    },
    showErrorMessage: showErrorMessage,
    buttonTitle: "Creeaz\u0103",
    type: "register",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 25
    }
  })), errorMessage && __jsx("p", {
    className: "jsx-3124442123 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "error-message",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 25
    }
  }, errorMessage, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "times-circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 44
    }
  }), " "))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash,
    __self: this
  }, _styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3124442123",
    __self: this
  }, ".modal{width:50%;}.modal__input-panel:nth-child(odd){margin-right:15px;}.modal__input-panel:nth-child(even){margin-left:15px;}.modal__input-panel.modal__input-panel--last{margin-right:0;margin-left:0;}@media screen and (max-width:825px){.modal__input-panel:nth-child(n){margin-left:0;margin-right:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXFJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1FK0IsQUFHK0IsQUFJUSxBQUlELEFBSUYsQUFLRyxVQWhCdEIsSUFpQnVCLENBTEwsRUFKbEIsQ0FKQSxXQVNBLEFBS0kiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGVXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcUmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCBmb3JtTW9kYWwgZnJvbSBcIi4uLy4uL3N0eWxlcy9mb3JtTW9kYWxcIjtcclxuXHJcbmltcG9ydCBPdmVybGF5RGFya2VuZXIgZnJvbSBcIi4vT3ZlcmxheURhcmtlbmVyXCI7XHJcbmltcG9ydCBJbnB1dEFyZWFzIGZyb20gXCIuLi91dGlscy9JbnB1dEFyZWFzXCI7XHJcbmltcG9ydCBpbnB1dEFyZWFSZWdpc3RlckRhdGEgZnJvbSBcIi4uL3V0aWxzL2lucHV0QXJlYVJlZ2lzdGVyRGF0YVwiO1xyXG5pbXBvcnQgU3VibWl0QnV0dG9uIGZyb20gXCIuLi91dGlscy9TdWJtaXRCdXR0b25cIjtcclxuXHJcbmltcG9ydCB7IFJlZ2lzdGVyTW9kYWxIYW5kbGVyIH0gZnJvbSBcIi4uL0hvbWUvTWFpblwiO1xyXG5pbXBvcnQgeyByZWdpc3RlckZpZWxkcyB9IGZyb20gXCIuLi8uLi91dGlscy9sZW5ndGhCb3VuZGFyaWVzRm9yRmllbGRzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3RlcigpIHtcclxuICAgIGNvbnN0IFt1c2VyRGV0YWlscywgc2V0VXNlckRldGFpbF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICBzdXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGNvdW50eTogXCJBbGJhXCIsXHJcbiAgICAgICAgcHJvZmVzc2lvbjogXCJFbGV2XCIsXHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgZW1haWw6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgc2hvd0Vycm9yTWVzc2FnZSA9IChlcnJvcikgPT4gc2V0RXJyb3JNZXNzYWdlKGVycm9yKTtcclxuICAgIGNvbnN0IHVwZGF0ZURldGFpbHMgPSAoZSwgZmllbGROYW1lKSA9PlxyXG4gICAgICAgIHNldFVzZXJEZXRhaWwoeyAuLi51c2VyRGV0YWlscywgW2ZpZWxkTmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICAgIGNvbnN0IHNob3dSZWdpc3Rlck1vZGFsSGFuZGxlciA9IHVzZUNvbnRleHQoUmVnaXN0ZXJNb2RhbEhhbmRsZXIpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE92ZXJsYXlEYXJrZW5lciBvbkNsaWNrPXtzaG93UmVnaXN0ZXJNb2RhbEhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWdpc3Rlck1vZGFsV2F2ZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtb2RhbF9fdGl0bGVcIj7Djm5yZWdpc3RyZWF6xIMtdGU8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtb2RhbF9faW5wdXQtcGFuZWxzXCIgb25TdWJtaXQ9eygpID0+IGZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRBcmVhc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVEZXRhaWxzPXt1cGRhdGVEZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dEFyZWFEYXRhPXtpbnB1dEFyZWFSZWdpc3RlckRhdGF9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19idXR0b25zLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi0tdGVydGlhcnlcIiBvbkNsaWNrPXtzaG93UmVnaXN0ZXJNb2RhbEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVudW7Im8SDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN1Ym1pdEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlckRldGFpbHM9e3VzZXJEZXRhaWxzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRPcHRpb25zPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoQm91bmRhcmllc0ZvckVhY2hGaWVsZDogcmVnaXN0ZXJGaWVsZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzRW1haWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yTWVzc2FnZT17c2hvd0Vycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblRpdGxlPVwiQ3JlZWF6xINcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJlZ2lzdGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXJyb3ItbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZX0gPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidGltZXMtY2lyY2xlXCIgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57Zm9ybU1vZGFsfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAubW9kYWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1vZGFsX19pbnB1dC1wYW5lbDpudGgtY2hpbGQob2RkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tb2RhbF9faW5wdXQtcGFuZWw6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubW9kYWxfX2lucHV0LXBhbmVsLm1vZGFsX19pbnB1dC1wYW5lbC0tbGFzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODI1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAubW9kYWxfX2lucHV0LXBhbmVsOm50aC1jaGlsZChuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBSZWdpc3Rlck1vZGFsV2F2ZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDY0NiAxODRcIlxyXG4gICAgICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtb2RhbF9fd2F2ZVwiXHJcbiAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTAgMEw2NDYgOS41MzY3NGUtMDdWMTU1LjkxMUM2NDYgMTU1LjkxMSA1ODAuNTkgMTc5LjM5MyA0NjguMiAxODIuNjJDMzU1LjgxIDE4NS44NDcgMjg1LjI2NyAxNzEuNDg4IDIwNy4xMyAxNTUuOTExQzQ2LjAyNyAxMjMuNzkzIDEuOTA3MzVlLTA2IDE1NS45MTEgMS45MDczNWUtMDYgMTU1LjkxMUwwIDBaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\_globals\\\\Register.js */"));
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
      lineNumber: 98,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M0 0L646 9.53674e-07V155.911C646 155.911 580.59 179.393 468.2 182.62C355.81 185.847 285.267 171.488 207.13 155.911C46.027 123.793 1.90735e-06 155.911 1.90735e-06 155.911L0 0Z",
    fill: "var(--accent-secondary)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 13
    }
  }));
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

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function InputArea({
  title,
  subtitle = "",
  inputType = "text",
  isSelect = false,
  optionValues = [],
  eventHandler = null,
  inputProps = {}
}) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h3", {
    className: "jsx-2806693038",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }, title), subtitle && __jsx("p", {
    className: "jsx-2806693038",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 26
    }
  }, subtitle), isSelect ? __jsx("select", {
    onInput: eventHandler,
    className: "jsx-2806693038",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }, optionValues.map(optionValue => __jsx("option", {
    key: `optiune_${optionValue}`,
    className: "jsx-2806693038",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 25
    }
  }, optionValue))) : inputType !== "multiline" ? __jsx("input", _extends({}, inputProps, {
    onInput: eventHandler,
    type: inputType,
    className: "jsx-2806693038" + " " + (inputProps && inputProps.className != null && inputProps.className || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  })) : __jsx("textarea", _extends({
    rows: "30",
    cols: "10"
  }, inputProps, {
    onInput: eventHandler,
    className: "jsx-2806693038" + " " + (inputProps && inputProps.className != null && inputProps.className || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2806693038",
    __self: this
  }, "input.jsx-2806693038,textarea.jsx-2806693038,select.jsx-2806693038{width:100%;height:45px;border-radius:50px;border:1px solid var(--background-quaternary);outline:0;margin:10px 0 20px;padding-left:10px;color:var(--text-primary);background-color:transparent;position:relative;}input.jsx-2806693038:valid,input.jsx-2806693038:focus.jsx-2806693038:valid,select.jsx-2806693038:valid,select.jsx-2806693038:focus.jsx-2806693038:valid,textarea.jsx-2806693038:valid,textarea.jsx-2806693038:focus.jsx-2806693038:valid{border-color:var(--accent-primary);}input.jsx-2806693038:focus,select.jsx-2806693038:focus,textarea.jsx-2806693038:focus{border-color:var(--accent-secondary);}textarea.jsx-2806693038{border-radius:10px;resize:vertical;font-size:var(--font-small);min-height:105px;padding-top:10px;background-color:var(--background-secondary);}option.jsx-2806693038{background-color:var(--background-primary);}h3.jsx-2806693038{text-align:left;text-transform:uppercase;color:var(--text-primary);font-size:var(--font-smaller);}p.jsx-2806693038{color:var(--text-primary);max-width:400px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcdXRpbHNcXElucHV0QXJlYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3QndCLEFBS2dDLEFBa0J3QixBQU1FLEFBSWxCLEFBU3dCLEFBSTNCLEFBT1UsV0EvQ2QsS0F5Q2EsR0FiVCxJQTNCRyxHQStDSCxTQTlCcEIsQUFXZ0MsRUFMaEMsSUFrQjhCLENBeENvQixBQStDbEQsQ0FaQSxvQkFQcUIsSUFhYSxhQVpiLFFBNUJQLFNBNkJtQyxBQVlqRCxDQXhDdUIsbUJBQ0Qsa0JBQ1EsT0EyQjlCLG1CQTFCaUMsNkJBQ1gsa0JBQ3RCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcdXRpbHNcXElucHV0QXJlYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0QXJlYSh7XHJcbiAgICB0aXRsZSxcclxuICAgIHN1YnRpdGxlID0gXCJcIixcclxuICAgIGlucHV0VHlwZSA9IFwidGV4dFwiLFxyXG4gICAgaXNTZWxlY3QgPSBmYWxzZSxcclxuICAgIG9wdGlvblZhbHVlcyA9IFtdLFxyXG4gICAgZXZlbnRIYW5kbGVyID0gbnVsbCxcclxuICAgIGlucHV0UHJvcHMgPSB7fSxcclxufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgIHtzdWJ0aXRsZSAmJiA8cD57c3VidGl0bGV9PC9wPn1cclxuICAgICAgICAgICAge2lzU2VsZWN0ID8gKFxyXG4gICAgICAgICAgICAgICAgPHNlbGVjdCBvbklucHV0PXtldmVudEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb25WYWx1ZXMubWFwKChvcHRpb25WYWx1ZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17YG9wdGl1bmVfJHtvcHRpb25WYWx1ZX1gfT57b3B0aW9uVmFsdWV9PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgKSA6IGlucHV0VHlwZSAhPT0gXCJtdWx0aWxpbmVcIiA/IChcclxuICAgICAgICAgICAgICAgIDxpbnB1dCB7Li4uaW5wdXRQcm9wc30gb25JbnB1dD17ZXZlbnRIYW5kbGVyfSB0eXBlPXtpbnB1dFR5cGV9IC8+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjMwXCIgY29scz1cIjEwXCIgey4uLmlucHV0UHJvcHN9IG9uSW5wdXQ9e2V2ZW50SGFuZGxlcn0+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBvdXRsaW5lOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpbnB1dDp2YWxpZCxcclxuICAgICAgICAgICAgICAgIGlucHV0OmZvY3VzOnZhbGlkLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0OnZhbGlkLFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0OmZvY3VzOnZhbGlkLFxyXG4gICAgICAgICAgICAgICAgdGV4dGFyZWE6dmFsaWQsXHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYTpmb2N1czp2YWxpZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaW5wdXQ6Zm9jdXMsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Q6Zm9jdXMsXHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYTpmb2N1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICByZXNpemU6IHZlcnRpY2FsO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG9wdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\utils\\\\InputArea.js */"));
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
  updateDetails,
  inputAreaData
}) {
  return inputAreaData.length % 2 !== 0 ? InputAreasOddArrayLength({
    updateDetails,
    inputAreaData
  }) : InputAreasEvenArrayLength({
    updateDetails,
    inputAreaData
  });
}

function InputAreasOddArrayLength({
  updateDetails,
  inputAreaData
}) {
  return inputAreaData.map((props, i) => i % 2 === 0 && __jsx("div", {
    key: `input-panel-group__${i}-fields`,
    className: "modal__input-panel-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }, __jsx("div", {
    key: `input-panel__${i}-fields`,
    className: `modal__input-panel ${i + 1 === inputAreaData.length ? "modal__input-panel--last" : ""}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }
  }, __jsx(_InputArea__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    key: `input__${i}-fields`,
    eventHandler: e => updateDetails(e, props.fieldName),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 25
    }
  }))), i + 1 !== inputAreaData.length && __jsx("div", {
    key: `input-panel__${i + 1}-fields`,
    className: "modal__input-panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 25
    }
  }, __jsx(_InputArea__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, inputAreaData[i + 1], {
    key: `input__${i + 1}-fields`,
    eventHandler: e => updateDetails(e, inputAreaData[i + 1].fieldName),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 29
    }
  })))));
}

function InputAreasEvenArrayLength({
  updateDetails,
  inputAreaData
}) {
  return inputAreaData.map((props, i) => i % 2 === 0 && __jsx("div", {
    key: `input-panel-group__${i}-fields`,
    className: "modal__input-panel-group",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx("div", {
    key: `input-panel__${i}-fields`,
    className: "modal__input-panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  }, __jsx(_InputArea__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({}, props, {
    key: `input__${i}-fields`,
    eventHandler: e => updateDetails(e, props.fieldName),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }))), __jsx("div", {
    key: `input-panel__${i + 1}-fields`,
    className: "modal__input-panel",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 21
    }
  }, __jsx(_InputArea__WEBPACK_IMPORTED_MODULE_1__["default"], _extends({
    key: `input__${i + 1}-fields`
  }, inputAreaData[i + 1], {
    eventHandler: e => updateDetails(e, inputAreaData[i + 1].fieldName),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 25
    }
  })))));
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
  const modifyAlert = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_1__["ShowAlertContext"]);
  const isAuthenticatedHandler = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_1__["LoggedInDataContext"]);
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  if (type === "anchor") return __jsx("a", {
    href: "#",
    onClick: () => logout(modifyAlert, router, isAuthenticatedHandler),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  }, "Delogheaz\u0103-te");else if (type === "icon") return __jsx("div", {
    className: className,
    onClick: () => logout(modifyAlert, router, isAuthenticatedHandler),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "sign-out-alt",
    className: classNameForIcon,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }));else return __jsx("button", {
    className: "button--primary",
    onClick: () => logout(modifyAlert, router, isAuthenticatedHandler),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, "Delogheaz\u0103-te");
}

function logout(modifyAlert, router, isAuthenticatedHandler = null) {
  fetch("http://localhost:3000/api/logout", {
    method: "DELETE"
  }).then(r => r.json()).then(({
    ok,
    err = "A apărut o eroare internă, vă rugăm să ne scuzați."
  }) => {
    if (!ok) {
      modifyAlert({
        isVisible: true,
        props: {
          type: 0,
          children: err
        }
      });
    } else {
      modifyAlert({
        isVisible: true,
        props: {
          type: 1,
          children: "Operațiunea a fost efectuată cu succes."
        },
        customToggleHandler: () => router.pathname !== "/" && router.push("/")
      });

      window.__setAuthenticated(false);
    }
  });
}

/***/ }),

/***/ "./components/utils/SubmitButton.js":
/*!******************************************!*\
  !*** ./components/utils/SubmitButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubmitButton; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Home_Main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Home/Main */ "./components/Home/Main.js");
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/_app */ "./pages/_app.js");
/* harmony import */ var _utils_checkFieldsValidity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/checkFieldsValidity */ "./utils/checkFieldsValidity.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\components\\utils\\SubmitButton.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function SubmitButton({
  userDetails,
  fieldOptions,
  showErrorMessage,
  buttonTitle,
  type
}) {
  //TODO: generalize this and replace any other instances of such functionality
  const {
    0: isDisabled,
    1: setDisabled
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  const showModalHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(type === "register" ? _Home_Main__WEBPACK_IMPORTED_MODULE_2__["RegisterModalHandler"] : _pages_app__WEBPACK_IMPORTED_MODULE_3__["LoginModalHandler"]);
  const modifyAlert = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_3__["ShowAlertContext"]);
  let isAuthenticatedHandler;
  if (type === "login") isAuthenticatedHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_3__["LoggedInDataContext"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("button", {
    type: "submit",
    disabled: isDisabled,
    onClick: e => submitHandler({
      e,
      userDetails,
      fieldOptions,
      showErrorMessage,
      setDisabled,
      modalHandler: showModalHandler,
      modifyAlert,
      fetchEndpoint: `http://localhost:3000/api/${type}`,
      isAuthenticatedHandler
    }),
    className: "jsx-2585271453" + " " + "button--primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }, buttonTitle), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2585271453",
    __self: this
  }, ".button--primary.jsx-2585271453{background-color:var(--accent-secondary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcdXRpbHNcXFN1Ym1pdEJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2Q3dCLEFBRzhELHlDQUM3QyIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZVdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXHV0aWxzXFxTdWJtaXRCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBSZWdpc3Rlck1vZGFsSGFuZGxlciB9IGZyb20gXCIuLi9Ib21lL01haW5cIjtcclxuaW1wb3J0IHsgU2hvd0FsZXJ0Q29udGV4dCwgTG9nZ2VkSW5EYXRhQ29udGV4dCwgTG9naW5Nb2RhbEhhbmRsZXIgfSBmcm9tIFwiLi4vLi4vcGFnZXMvX2FwcFwiO1xyXG5pbXBvcnQgY2hlY2tGaWVsZHNWYWxpZGl0eSBmcm9tIFwiLi4vLi4vdXRpbHMvY2hlY2tGaWVsZHNWYWxpZGl0eVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VibWl0QnV0dG9uKHtcclxuICAgIHVzZXJEZXRhaWxzLFxyXG4gICAgZmllbGRPcHRpb25zLFxyXG4gICAgc2hvd0Vycm9yTWVzc2FnZSxcclxuICAgIGJ1dHRvblRpdGxlLFxyXG4gICAgdHlwZSxcclxufSkge1xyXG4gICAgLy9UT0RPOiBnZW5lcmFsaXplIHRoaXMgYW5kIHJlcGxhY2UgYW55IG90aGVyIGluc3RhbmNlcyBvZiBzdWNoIGZ1bmN0aW9uYWxpdHlcclxuICAgIGNvbnN0IFtpc0Rpc2FibGVkLCBzZXREaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd01vZGFsSGFuZGxlciA9IHVzZUNvbnRleHQoXHJcbiAgICAgICAgdHlwZSA9PT0gXCJyZWdpc3RlclwiID8gUmVnaXN0ZXJNb2RhbEhhbmRsZXIgOiBMb2dpbk1vZGFsSGFuZGxlclxyXG4gICAgKTtcclxuICAgIGNvbnN0IG1vZGlmeUFsZXJ0ID0gdXNlQ29udGV4dChTaG93QWxlcnRDb250ZXh0KTtcclxuXHJcbiAgICBsZXQgaXNBdXRoZW50aWNhdGVkSGFuZGxlcjtcclxuICAgIGlmICh0eXBlID09PSBcImxvZ2luXCIpIGlzQXV0aGVudGljYXRlZEhhbmRsZXIgPSB1c2VDb250ZXh0KExvZ2dlZEluRGF0YUNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNEaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEhhbmRsZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyRGV0YWlscyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRPcHRpb25zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREaXNhYmxlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWxIYW5kbGVyOiBzaG93TW9kYWxIYW5kbGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlBbGVydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hFbmRwb2ludDogYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvJHt0eXBlfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQXV0aGVudGljYXRlZEhhbmRsZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi0tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtidXR0b25UaXRsZX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5idXR0b24tLXByaW1hcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRIYW5kbGVyKHtcclxuICAgIGUsXHJcbiAgICB1c2VyRGV0YWlscyxcclxuICAgIGZpZWxkT3B0aW9ucyxcclxuICAgIHNob3dFcnJvck1lc3NhZ2UsXHJcbiAgICBzZXREaXNhYmxlZCxcclxuICAgIG1vZGFsSGFuZGxlciA9IG51bGwsXHJcbiAgICBtb2RpZnlBbGVydCxcclxuICAgIGZldGNoRW5kcG9pbnQsXHJcbiAgICBpc0F1dGhlbnRpY2F0ZWRIYW5kbGVyID0gbnVsbCxcclxufSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RGlzYWJsZWQodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gY2hlY2tGaWVsZHNWYWxpZGl0eSh7XHJcbiAgICAgICAgZmllbGRzOiB1c2VyRGV0YWlscyxcclxuICAgICAgICAuLi5maWVsZE9wdGlvbnMsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3JNZXNzYWdlICE9PSBmYWxzZSkge1xyXG4gICAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gc2hvd0Vycm9yTWVzc2FnZShlcnJvck1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoKGZldGNoRW5kcG9pbnQsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJEZXRhaWxzKSxcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHIpID0+IHIuanNvbigpKVxyXG4gICAgICAgIC50aGVuKCh7IG9rLCBlcnJvciA9IG51bGwgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW9rKSB7XHJcbiAgICAgICAgICAgICAgICBtb2RpZnlBbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAhZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJBIGFwxINydXQgbyBlcm9hcmUgaW50ZXJuxIMsIHbEgyBydWdhbSBzxIMgbmUgc2N1emHIm2kuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0RGlzYWJsZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbW9kaWZ5QWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogXCJPcGVyYcibaXVuZWEgYSBmb3N0IGVmZWN0dWF0xIMgY3Ugc3VjY2VzLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChtb2RhbEhhbmRsZXIpIG1vZGFsSGFuZGxlcigpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzQXV0aGVudGljYXRlZEhhbmRsZXIpIGlzQXV0aGVudGljYXRlZEhhbmRsZXIuc2V0QXV0aGVudGljYXRlZFRvKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICBzZXREaXNhYmxlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2UoXCJBIGFwYXJ1dCBvIGVyb2FyZSBpbnRlcm5hLCB2YSByb2cgc2EgbmUgc2N1emF0aS5cIik7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\components\\\\utils\\\\SubmitButton.js */"));
}

function submitHandler({
  e,
  userDetails,
  fieldOptions,
  showErrorMessage,
  setDisabled,
  modalHandler = null,
  modifyAlert,
  fetchEndpoint,
  isAuthenticatedHandler = null
}) {
  e.preventDefault();
  setDisabled(true);
  const errorMessage = Object(_utils_checkFieldsValidity__WEBPACK_IMPORTED_MODULE_4__["default"])(_objectSpread({
    fields: userDetails
  }, fieldOptions));

  if (errorMessage !== false) {
    setDisabled(false);
    return showErrorMessage(errorMessage);
  }

  fetch(fetchEndpoint, {
    method: "POST",
    body: JSON.stringify(userDetails)
  }).then(r => r.json()).then(({
    ok,
    error = null
  }) => {
    if (!ok) {
      modifyAlert({
        isVisible: true,
        props: {
          type: 0,
          children: !error ? "A apărut o eroare internă, vă rugam să ne scuzați." : error
        }
      });
      setDisabled(false);
    } else {
      modifyAlert({
        isVisible: true,
        props: {
          type: 1,
          children: "Operațiunea a fost efectuată cu succes."
        }
      });
      if (modalHandler) modalHandler();
      if (isAuthenticatedHandler) isAuthenticatedHandler.setAuthenticatedTo(true);
    }
  }).catch(error => {
    console.error(error);
    setDisabled(false);
    showErrorMessage("A aparut o eroare interna, va rog sa ne scuzati.");
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
  title: "E-mail/Nume utilizator",
  inputType: "text",
  inputProps: {
    minLength: _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_0__["loginFields"].username[0],
    maxLength: _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_0__["loginFields"].username[1],
    required: true
  },
  fieldName: "username"
}, {
  title: "Parola",
  inputType: "password",
  inputProps: {
    minLength: _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_0__["loginFields"].password[0],
    maxLength: _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_0__["loginFields"].password[1],
    required: true
  },
  fieldName: "password"
}]);

/***/ }),

/***/ "./components/utils/inputAreaRegisterData.js":
/*!***************************************************!*\
  !*** ./components/utils/inputAreaRegisterData.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/lengthBoundariesForFields */ "./utils/lengthBoundariesForFields.js");

/* harmony default export */ __webpack_exports__["default"] = ([{
  title: "Nume",
  inputType: "text",
  inputProps: {
    minLength: _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_0__["registerFields"].name[0],
    maxLength: _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_0__["registerFields"].name[1],
    required: true
  },
  fieldName: "name"
}, {
  title: "Prenume",
  inputType: "text",
  inputProps: {
    minLength: _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_0__["registerFields"].surname[0],
    maxLength: _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_0__["registerFields"].surname[1],
    required: true
  },
  fieldName: "surname"
}, {
  title: "Județ",
  isSelect: true,
  optionValues: ["Alba", "Cluj", "Bistrita-Nasaud"],
  fieldName: "county"
}, {
  title: "Profesie",
  isSelect: true,
  optionValues: ["Elev", "Profesor"],
  fieldName: "profession"
}, {
  title: "Nume Utilizator",
  inputType: "text",
  inputProps: {
    minLength: _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_0__["registerFields"].username[0],
    maxLength: _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_0__["registerFields"].username[1],
    required: true
  },
  fieldName: "username"
}, {
  title: "E-mail",
  inputType: "email",
  inputProps: {
    minLength: _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_0__["registerFields"].email[0],
    maxLength: _utils_lengthBoundariesForFields__WEBPACK_IMPORTED_MODULE_0__["registerFields"].email[1],
    required: true
  },
  fieldName: "email"
}, {
  title: "Parola",
  inputType: "password",
  inputProps: {
    minLength: 8,
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
/* harmony import */ var _components_globals_Login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/_globals/Login */ "./components/_globals/Login.js");
/* harmony import */ var _components_globals_DataPanel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/_globals/DataPanel */ "./components/_globals/DataPanel.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\ProiecteWeb\\infoplus\\pages\\_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(true),
      ShowAlertContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null),
      LoginModalHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null),
      ShowLoginContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null),
      LoggedInDataContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null),
      DataPanelContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on("routeChangeStart", loadingStart);
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on("routeChangeComplete", loadingFinished);
next_router__WEBPACK_IMPORTED_MODULE_2___default.a.events.on("routeChangeError", loadingFinished);
function App({
  Component,
  pageProps
}) {
  const {
    0: alert,
    1: modifyAlert
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    isVisible: false,
    props: {
      type: 1,
      children: ""
    },
    customToggleHandler: null
  });
  const {
    0: panelData,
    1: setPanelData
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])((_, action) => action.value, "");
  const {
    0: isAuthenticated,
    1: setAuthenticatedTo
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
    const cookies = document.cookie && Object(cookie__WEBPACK_IMPORTED_MODULE_11__["parse"])(document.cookie); // TODO: rename setAuthenticatedTo, lol.

    if (!isAuthenticated && cookies && cookies["_accessToken"]) setAuthenticatedTo(true);
  }, [isAuthenticated]); // TODO: fix providers. own files. this is ugli

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, alert.isVisible && __jsx(_components_globals_AlertNotification__WEBPACK_IMPORTED_MODULE_9__["default"], {
    type: alert.props.type,
    alertToggleHandler: () => modifyAlert(_objectSpread({}, alert, {
      isVisible: false
    })),
    customToggleHandler: alert.customToggleHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }, alert.props.children), __jsx(_components_globals_LoadingBar__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 13
    }
  }), __jsx(LoggedInDataContext.Provider, {
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
  }, __jsx(ShowLoginContext.Provider, {
    value: showLoginModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 17
    }
  }, __jsx(ShowAlertContext.Provider, {
    value: modifyAlert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 21
    }
  }, __jsx(_components_globals_Header__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  })))), __jsx(LoggedInDataContext.Provider, {
    value: {
      isAuthenticated,
      setAuthenticatedTo
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(ShowAlertContext.Provider, {
    value: modifyAlert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 17
    }
  }, __jsx(LoginModalHandler.Provider, {
    value: showLoginModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 21
    }
  }, loginModalVisible && __jsx(_components_globals_Login__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 47
    }
  })))), __jsx(DataPanelContext.Provider, {
    value: setPanelData,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }
  }, __jsx(LoggedInDataContext.Provider, {
    value: {
      isAuthenticated,
      setAuthenticatedTo
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 17
    }
  }, __jsx(ShowAlertContext.Provider, {
    value: modifyAlert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 21
    }
  }, __jsx(ShowLoginContext.Provider, {
    value: showLoginModal,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 25
    }
  }, __jsx(Component, _extends({}, pageProps, {
    className: `jsx-${_styles_mainStyling__WEBPACK_IMPORTED_MODULE_5__["default"].__hash}` + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 29
    }
  })))))), __jsx(_components_globals_DataPanel__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onClick: () => setPanelData(""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 13
    }
  }, panelData), __jsx(_components_globals_Contact__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 13
    }
  }), __jsx(_components_globals_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
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

/***/ "./styles/formModal.js":
/*!*****************************!*\
  !*** ./styles/formModal.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _defaultExport = new String("@-webkit-keyframes modalAnimation{from{opacity:0;-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);}to{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}@keyframes modalAnimation{from{opacity:0;-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);}to{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}.modal{max-height:80%;background-color:var(--background-primary);box-shadow:var(--box-shadow);overflow-y:auto;border-radius:10px;position:fixed;top:100px;left:0;right:0;z-index:98;margin:auto;-webkit-animation:modalAnimation 300ms ease;animation:modalAnimation 300ms ease;}.modal__title-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:25%;}.modal__title{position:absolute;z-index:99;margin-top:-10px;text-transform:uppercase;color:var(--text-button);}.modal__buttons-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-top:30px;}.modal__wave{width:100%;height:100%;}.modal__input-panels{width:80%;margin:50px auto;}.modal__input-panel{width:100%;}.modal__input-panel-group{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;margin:30px 0;}.error-message{margin-top:20px;}@media screen and (max-width:825px){.modal{width:80% !important;}.modal__input-panels{width:90%;}.modal__input-panel-group{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;}.modal__input-panel:nth-child(n){margin:10px 0;}}@media screen and (max-width:425px){.modal__title{font-size:var(--font-smaller);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcc3R5bGVzXFxmb3JtTW9kYWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRXlCLEFBSXVCLEFBSUEsQUFNQyxBQWVGLEFBUUssQUFRTCxBQU1GLEFBS0QsQUFLQyxBQUlFLEFBUUcsQUFLUyxBQUlYLEFBSVksQUFLUixBQU1nQixVQTVGRixBQUlKLEFBZ0RYLEFBMEJqQixDQS9CWSxBQVVoQixHQThCSSxDQTdFMkMsQ0EyRC9DLEVBcENlLEdBeUNYLEVBMUJKLElBS0EsRUFuQnFCLENBMkRqQixnQkExRHlCLFlBeEJJLGFBeUJKLEdBWEYsQUFnQkUsQUFvQkssSUFxQmpCLFNBdEVHLEFBdUVoQixPQTlFQSxFQWdDSixPQXhCdUIsR0FabkIsZ0JBYWUsZUFDTCxVQUNILE9BQ0MsUUFDRyxTQXdCSyxFQXZCSixBQU9PLFlBTmlCLEVBdUJ4QyxFQW1CdUIsNEVBekN2QixDQU1lLFdBQ0EsS0FtQ0EsTUFsQ2YsS0FtQ2tCLGNBQ2xCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcc3R5bGVzXFxmb3JtTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NzLmdsb2JhbGBcclxuICAgIEBrZXlmcmFtZXMgbW9kYWxBbmltYXRpb24ge1xyXG4gICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0byB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiA4MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB6LWluZGV4OiA5ODtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgYW5pbWF0aW9uOiBtb2RhbEFuaW1hdGlvbiAzMDBtcyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbF9fdGl0bGUtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsX190aXRsZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYnV0dG9uKTtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWxfX2J1dHRvbnMtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICA6Z2xvYmFsKC5tb2RhbF9fd2F2ZSkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWxfX2lucHV0LXBhbmVscyB7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW46IDUwcHggYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWxfX2lucHV0LXBhbmVsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWxfX2lucHV0LXBhbmVsLWdyb3VwIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMzBweCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvci1tZXNzYWdlIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyNXB4KSB7XHJcbiAgICAgICAgLm1vZGFsIHtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1vZGFsX19pbnB1dC1wYW5lbHMge1xyXG4gICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1vZGFsX19pbnB1dC1wYW5lbC1ncm91cCB7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5tb2RhbF9faW5wdXQtcGFuZWw6bnRoLWNoaWxkKG4pIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgLm1vZGFsX190aXRsZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbmA7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\styles\\\\formModal.js */");

_defaultExport.__hash = "1699923372";
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
const _defaultExport = new String("*{box-sizing:border-box;}html,body{margin:0;padding:0;font-family:\"Red Hat Display\",Arial,sans-serif;background-color:var(--background-primary);}h1,h2,h3,p{margin:0;padding:0;}h1,h2,h3{font-weight:800;}h1{font-size:var(--font-large);}h2{font-size:var(--font-medium);}h3{font-size:var(--font-small);}a{color:inherit;font-weight:800;}ul{margin:0;}hr{border-color:var(--background-tertiary);border-style:solid;}pre,code{background-color:var(--background-tertiary);border-radius:10px;color:var(--text-primary);}pre{padding:15px;}code{padding:5px;}.overlay-darkener{width:100%;height:100%;position:fixed;top:0;left:0;background-color:rgba(0,0,0,0.8);z-index:50;-webkit-animation:fadeIn 300ms ease forwards;animation:fadeIn 300ms ease forwards;}@-webkit-keyframes fadeIn{from{opacity:0;}to{opacity:1;}}@keyframes fadeIn{from{opacity:0;}to{opacity:1;}}button{min-width:175px;height:45px;display:inline-block;box-shadow:var(--box-shadow);text-transform:uppercase;text-align:center;line-height:35px;border:none;font-family:\"Red Hat Display\";border-radius:50px;cursor:pointer;-webkit-transition-property:box-shadow,opacity,-webkit-transform;-webkit-transition-property:box-shadow,opacity,transform;transition-property:box-shadow,opacity,transform;-webkit-transition-duration:300ms;transition-duration:300ms;-webkit-transition-timing-function:ease;transition-timing-function:ease;}button:disabled{opacity:0.2;}button:focus{outline:none;}button:hover{box-shadow:var(--box-shadow-active);}button:active{-webkit-transform:scale(0.95);-ms-transform:scale(0.95);transform:scale(0.95);}button svg{margin-left:10px;}.error-message{color:var(--accent-quaternary);text-align:right;opacity:0;padding-left:20px;-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px);-webkit-animation:fadeFromRight 300ms ease forwards;animation:fadeFromRight 300ms ease forwards;}@-webkit-keyframes fadeFromRight{from{opacity:0;-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px);}to{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}}@keyframes fadeFromRight{from{opacity:0;-webkit-transform:translateX(10px);-ms-transform:translateX(10px);transform:translateX(10px);}to{opacity:1;-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}}.button--primary{background-color:var(--accent-primary);color:var(--text-button);height:40px;}.button--secondary{background-color:var(--background-quaternary);color:var(--accent-primary);height:40px;}.button--tertiary{background-color:transparent;box-shadow:none;font-weight:bold;-webkit-transition:color,-webkit-transform 300ms linear;-webkit-transition:color,transform 300ms linear;transition:color,transform 300ms linear;color:var(--text-primary);min-width:130px;}.button--tertiary:hover{box-shadow:none;color:var(--accent-quaternary);}.underlined{-webkit-text-decoration:underline;text-decoration:underline;}.button--outline{background-color:transparent;color:var(--text-primary);border:1px solid var(--background-quaternary);border-radius:50px;box-shadow:none;width:150px;line-height:32px;height:35px;text-transform:initial;-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;}.button--outline:hover{box-shadow:none;background-color:var(--background-tertiary);}:root{--accent-primary:#56f55c;--accent-secondary:#3db8ff;--accent-tertiary:#ffcc00;--accent-quaternary:#e43dff;--accent-success:#a7f7ab;--accent-failure-primary:#ff5e5e;--accent-failure-secondary:#ffa9a9;--difficulty-1:var(--accent-primary);--difficulty-2:var(--accent-tertiary);--difficulty-3:var(--accent-secondary);--difficulty-4:var(--accent-quaternary);--text-button:#2a2a2a;--font-larger:5rem;--font-large:3rem;--font-medium:2rem;--font-small:1.3rem;--font-smaller:1rem;--contact:#2a2a2a;--footer:#1e1e1e;--box-shadow:0px 4px 15px rgba(0,0,0,0.09);--box-shadow-active:0 4px 15px 5px rgba(0,0,0,0.2);}html.theme-light{--background-primary:#fff;--background-secondary:#f5f5f5;--background-tertiary:#dadada;--background-quaternary:#2a2a2a;--text-primary:#2a2a2a;--text-secondary:#f1f1f1;--text-tertiary:#686868;}html.theme-dark{--background-primary:#1e1e1e;--background-secondary:#2a2a2a;--background-tertiary:#434545;--background-quaternary:#404040;--text-primary:#f1f1f1;--text-secondary:#e6e6e6;--text-tertiary:#777777;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlV2ViXFxpbmZvcGx1c1xcc3R5bGVzXFxtYWluU3R5bGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFeUIsQUFHK0IsQUFLYixBQVVBLEFBT08sQUFJWSxBQUdDLEFBR0QsQUFJZCxBQUtMLEFBSStCLEFBTUksQUFNL0IsQUFJRCxBQUlELEFBWUcsQUFHQSxBQUtFLEFBaUJKLEFBSUMsQUFHdUIsQUFJZCxBQUlMLEFBSWMsQUFVakIsQUFJQSxBQU15QixBQU1PLEFBTWpCLEFBU2IsQUFLVSxBQUlHLEFBYWIsQUFNUyxBQTZCQyxBQVdHLFNBaE9uQixBQVVBLEFBMEJkLENBb0NJLEFBR0EsQUFtRCtCLEFBSUgsQ0F0RWhCLENBSmhCLEFBeUNBLENBN0NBLEFBaURBLENBdEVvQixFQWRwQixBQStEZ0IsQUE2RW1CLEFBc0JhLENBbkVoRCxFQS9HcUQsQUFVckQsR0FoQkEsQ0FrRW1CLEVBNEhZLENBNkJJLEVBak1uQyxBQU1BLEFBc0R5QixDQXpEekIsQUE0SG9CLEFBa0JVLEFBMkRLLENBak1uQyxDQW9GcUIsS0FackIsRUExQ1UsQ0EwRW1CLENBaEdOLElBTUEsQUFpQlosQ0FzRlUsQ0FQVyxDQWdCaEMsQ0F6Q2MsQ0FuQ21CLEVBbEJPLENBMEhWLEdBbkJvQixFQWdEaEIsQ0FqR1osQ0E3RXRCLENBeUhBLEFBa0JBLEFBOENrQyxFQTVFVyxDQXZHZixDQTBGZCxFQXZJK0IsUUE2SS9CLEVBeEJlLEFBbUIvQixFQXZENkIsQUF5QjdCLEFBK0VnQyxNQTFIakIsRUErRWYsQ0F3RW9DLEVBeEtwQyxDQW1Mb0MsSUFoR2hDLENBakVxQyxNQXNHbEIsRUFwRkQsQUEyQ2xCLEdBOER5QixHQTFMN0IsVUF1TjJCLENBakRQLENBcEZDLENBZ0pNLFNBdkNVLEtBcEJyQixFQXBGQSxJQXFJYSxHQVdBLEdBM0RSLEVBcEZhLGNBd0dLLENBbkJ2QixFQWdEWSxFQXBHb0IsQ0ErR3BCLE9BcEs1QixBQTBHMkIsR0FyRkosV0FxSXZCLEdBV0EsS0EvSW1CLEFBd0dzQixDQW5CRSxNQXZCYixRQTdEeUIsa0JBOERuQyxJQTBDc0IsWUF6QzFDLGlCQWhDQSxTQTBFMkMsWUFwQjNDLDJCQXFCNEMsd0NBRWxCLHNCQUVILFVBN0dPLFNBOEdSLGtCQUNDLG1CQUNDLGNBL0dZLE1BZ0haLG9CQUVGLGtCQUNELGlCQUM2QixXQW5IbEQsZ0NBb0gwRCxtREFDMUQiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGVXZWJcXGluZm9wbHVzXFxzdHlsZXNcXG1haW5TdHlsaW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tIFwic3R5bGVkLWpzeC9jc3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzcy5nbG9iYWxgXHJcbiAgICAqIHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgfVxyXG5cclxuICAgIGh0bWwsXHJcbiAgICBib2R5IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSZWQgSGF0IERpc3BsYXlcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxuICAgIH1cclxuXHJcbiAgICBoMSxcclxuICAgIGgyLFxyXG4gICAgaDMsXHJcbiAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuXHJcbiAgICBoMSxcclxuICAgIGgyLFxyXG4gICAgaDMge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcblxyXG4gICAgaDEge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1sYXJnZSk7XHJcbiAgICB9XHJcbiAgICBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LW1lZGl1bSk7XHJcbiAgICB9XHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaHIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeSk7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIH1cclxuXHJcbiAgICBwcmUsXHJcbiAgICBjb2RlIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgIH1cclxuXHJcbiAgICBjb2RlIHtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm92ZXJsYXktZGFya2VuZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICAgIHotaW5kZXg6IDUwO1xyXG4gICAgICAgIGFuaW1hdGlvbjogZmFkZUluIDMwMG1zIGVhc2UgZm9yd2FyZHM7XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyBmYWRlSW4ge1xyXG4gICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0byB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxNzVweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSZWQgSGF0IERpc3BsYXlcIjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBib3gtc2hhZG93LCBvcGFjaXR5LCB0cmFuc2Zvcm07XHJcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMzAwbXM7XHJcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOmRpc2FibGVkIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LWFjdGl2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOmFjdGl2ZSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24gc3ZnIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1xdWF0ZXJuYXJ5KTtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBmYWRlRnJvbVJpZ2h0IDMwMG1zIGVhc2UgZm9yd2FyZHM7XHJcbiAgICB9XHJcblxyXG4gICAgQGtleWZyYW1lcyBmYWRlRnJvbVJpZ2h0IHtcclxuICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0byB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbi0tcHJpbWFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJ1dHRvbik7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24tLXNlY29uZGFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgIGhlaWdodDogNDBweDtcclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9uLS10ZXJ0aWFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciwgdHJhbnNmb3JtIDMwMG1zIGxpbmVhcjtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICBtaW4td2lkdGg6IDEzMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24tLXRlcnRpYXJ5OmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcXVhdGVybmFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLnVuZGVybGluZWQge1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24tLW91dGxpbmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24tLW91dGxpbmU6aG92ZXIge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogVEhFTUVTICovXHJcbiAgICA6cm9vdCB7XHJcbiAgICAgICAgLS1hY2NlbnQtcHJpbWFyeTogIzU2ZjU1YztcclxuICAgICAgICAtLWFjY2VudC1zZWNvbmRhcnk6ICMzZGI4ZmY7XHJcbiAgICAgICAgLS1hY2NlbnQtdGVydGlhcnk6ICNmZmNjMDA7XHJcbiAgICAgICAgLS1hY2NlbnQtcXVhdGVybmFyeTogI2U0M2RmZjtcclxuXHJcbiAgICAgICAgLS1hY2NlbnQtc3VjY2VzczogI2E3ZjdhYjtcclxuICAgICAgICAtLWFjY2VudC1mYWlsdXJlLXByaW1hcnk6ICNmZjVlNWU7XHJcbiAgICAgICAgLS1hY2NlbnQtZmFpbHVyZS1zZWNvbmRhcnk6ICNmZmE5YTk7XHJcblxyXG4gICAgICAgIC0tZGlmZmljdWx0eS0xOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAgICAgLS1kaWZmaWN1bHR5LTI6IHZhcigtLWFjY2VudC10ZXJ0aWFyeSk7XHJcbiAgICAgICAgLS1kaWZmaWN1bHR5LTM6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xyXG4gICAgICAgIC0tZGlmZmljdWx0eS00OiB2YXIoLS1hY2NlbnQtcXVhdGVybmFyeSk7XHJcblxyXG4gICAgICAgIC0tdGV4dC1idXR0b246ICMyYTJhMmE7XHJcblxyXG4gICAgICAgIC0tZm9udC1sYXJnZXI6IDVyZW07XHJcbiAgICAgICAgLS1mb250LWxhcmdlOiAzcmVtO1xyXG4gICAgICAgIC0tZm9udC1tZWRpdW06IDJyZW07XHJcbiAgICAgICAgLS1mb250LXNtYWxsOiAxLjNyZW07XHJcbiAgICAgICAgLS1mb250LXNtYWxsZXI6IDFyZW07XHJcblxyXG4gICAgICAgIC0tY29udGFjdDogIzJhMmEyYTtcclxuICAgICAgICAtLWZvb3RlcjogIzFlMWUxZTtcclxuICAgICAgICAtLWJveC1zaGFkb3c6IDBweCA0cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xyXG4gICAgICAgIC0tYm94LXNoYWRvdy1hY3RpdmU6IDAgNHB4IDE1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuXHJcbiAgICBodG1sLnRoZW1lLWxpZ2h0IHtcclxuICAgICAgICAtLWJhY2tncm91bmQtcHJpbWFyeTogI2ZmZjtcclxuICAgICAgICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5OiAjZjVmNWY1O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC10ZXJ0aWFyeTogI2RhZGFkYTtcclxuICAgICAgICAtLWJhY2tncm91bmQtcXVhdGVybmFyeTogIzJhMmEyYTtcclxuXHJcbiAgICAgICAgLS10ZXh0LXByaW1hcnk6ICMyYTJhMmE7XHJcbiAgICAgICAgLS10ZXh0LXNlY29uZGFyeTogI2YxZjFmMTtcclxuICAgICAgICAtLXRleHQtdGVydGlhcnk6ICM2ODY4Njg7XHJcbiAgICB9XHJcblxyXG4gICAgaHRtbC50aGVtZS1kYXJrIHtcclxuICAgICAgICAtLWJhY2tncm91bmQtcHJpbWFyeTogIzFlMWUxZTtcclxuICAgICAgICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5OiAjMmEyYTJhO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC10ZXJ0aWFyeTogIzQzNDU0NTtcclxuICAgICAgICAtLWJhY2tncm91bmQtcXVhdGVybmFyeTogIzQwNDA0MDtcclxuXHJcbiAgICAgICAgLS10ZXh0LXByaW1hcnk6ICNmMWYxZjE7XHJcbiAgICAgICAgLS10ZXh0LXNlY29uZGFyeTogI2U2ZTZlNjtcclxuICAgICAgICAtLXRleHQtdGVydGlhcnk6ICM3Nzc3Nzc7XHJcbiAgICB9XHJcbmA7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\ProiecteWeb\\\\infoplus\\\\styles\\\\mainStyling.js */");

_defaultExport.__hash = "735847009";
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
/*! exports provided: registerFields, loginFields, generalDataStepFields, contentDataStepFields, inputDataStepFields, testsDataStepFields */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFields", function() { return registerFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFields", function() { return loginFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generalDataStepFields", function() { return generalDataStepFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentDataStepFields", function() { return contentDataStepFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inputDataStepFields", function() { return inputDataStepFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testsDataStepFields", function() { return testsDataStepFields; });
const registerFields = {
  name: [3, 128],
  surname: [3, 128],
  username: [5, 32],
  email: [5, 256],
  password: [8, 256]
};
const loginFields = {
  username: [5, 32],
  password: [8, 256]
};
const generalDataStepFields = {
  title: [3, 15],
  maxExecutionTime: [1, 2],
  maxMemory: [1, 4],
  source: [5, 128]
};
const contentDataStepFields = {
  content: [10, 10000],
  hint: [5, 2000],
  mentions: [5, 5000],
  officialSolution: [10, 50000]
};
const inputDataStepFields = {
  inputData: [1, 5000],
  outputData: [1, 5000],
  exampleInputData: [1, 5000],
  exampleOutputData: [1, 5000]
};
const testsDataStepFields = {
  input: [1, 5000],
  expectedOutput: [1, 5000]
};

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