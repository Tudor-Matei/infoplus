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
    className: "jsx-2016657797" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, registerModalVisible && __jsx(_globals_Register__WEBPACK_IMPORTED_MODULE_3__["default"], {
    showRegisterModalHandler: showRegisterModalHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), loginModalVisible && __jsx(_globals_Login__WEBPACK_IMPORTED_MODULE_4__["default"], {
    showLoginModalHandler: showLoginModalHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-2016657797" + " " + "main__content-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-2016657797" + " " + "main__primary-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "infoplus"), __jsx("div", {
    className: "jsx-2016657797" + " " + "main__bullets",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(BulletTitle, {
    title: "Simplu",
    icon: "check",
    i: "1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), __jsx(BulletTitle, {
    title: "Rapid",
    icon: "bolt",
    i: "2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx(BulletTitle, {
    title: "Intuitiv",
    icon: "lightbulb",
    i: "3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2016657797" + " " + "main__buttons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2016657797" + " " + "main__button-sign-in",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(Button, {
    type: "button--primary-ix",
    title: "Logheaza-te",
    icon: "sign-in-alt",
    link: "",
    onClick: showLoginModalHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx("p", {
    onClick: showRegisterModalHandler,
    className: "jsx-2016657797" + " " + "main__button-make-account",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Nu ai cont? ", __jsx("a", {
    href: "#",
    className: "jsx-2016657797",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Fa-ti unul!"))), __jsx(Button, {
    type: "button--secondary-ix",
    title: "Vezi mai multe",
    icon: "ellipsis-h",
    link: "/informatii",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }))), __jsx(Wave, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2016657797",
    __self: this
  }, ".main.jsx-2016657797{width:100%;min-height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:var(--text-primary);-webkit-transition:color 300ms ease;transition:color 300ms ease;}.main__content-panel.jsx-2016657797{text-align:center;position:relative;z-index:10;color:var(--text-primary);-webkit-transition:color 300ms ease;transition:color 300ms ease;}.main__primary-heading.jsx-2016657797{font-size:5rem;font-weight:800;}.main__bullets.jsx-2016657797{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;margin:20px 0 80px;}.main__bullet.jsx-2016657797{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 30px;}.main__buttons.jsx-2016657797{padding:0 20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;}@media screen and (max-width:520px){.main__content-panel.jsx-2016657797{margin-top:70px;}.main__bullets.jsx-2016657797{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}.main__buttons.jsx-2016657797{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;margin-bottom:40px;}.main__button-sign-in.jsx-2016657797{margin-bottom:40px;}}.main__button-make-account.jsx-2016657797{margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEhvbWVcXE1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0R3QixBQUdnQyxBQVVPLEFBUUgsQUFLRixBQVFBLEFBS0UsQUFPSyxBQUlJLEFBS0UsQUFNSCxBQUtQLFdBOURDLElBa0JELEFBa0JILENBT2IsQUFvQkosRUFyRHNCLENBZ0RsQixTQXpEYSxHQWtCakIsS0FSZSxXQUNlLDBCQUNFLENBVUwsQUFRVCxJQXFCUyxVQXBCM0IsQ0FLaUMsYUFuQ04sQUE2Q0csbUNBakM5QixrQ0F1QzRCLEVBN0JMLE9Bd0JRLHFCQTdDUixXQW1DdkIsc0RBYmlDLE9BNkJOLGdCQUx2QixHQU1BLEVBbkQwQiwwQkFDRSxnRUFDaEMsS0FvQnVCLG1CQUN2QiIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxIb21lXFxNYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4uL2dsb2JhbHMvUmVnaXN0ZXJcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuLi9nbG9iYWxzL0xvZ2luXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgICBjb25zdCBbcmVnaXN0ZXJNb2RhbFZpc2libGUsIHNob3dSZWdpc3Rlck1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHNob3dSZWdpc3Rlck1vZGFsSGFuZGxlciA9ICgpID0+XHJcbiAgICAgICAgc2hvd1JlZ2lzdGVyTW9kYWwoIXJlZ2lzdGVyTW9kYWxWaXNpYmxlKTtcclxuXHJcbiAgICBjb25zdCBbbG9naW5Nb2RhbFZpc2libGUsIHNob3dMb2dpbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHNob3dMb2dpbk1vZGFsSGFuZGxlciA9ICgpID0+IHNob3dMb2dpbk1vZGFsKCFsb2dpbk1vZGFsVmlzaWJsZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgICAgIHtyZWdpc3Rlck1vZGFsVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXIgc2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyPXtzaG93UmVnaXN0ZXJNb2RhbEhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtsb2dpbk1vZGFsVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TG9naW4gc2hvd0xvZ2luTW9kYWxIYW5kbGVyPXtzaG93TG9naW5Nb2RhbEhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fY29udGVudC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1haW5fX3ByaW1hcnktaGVhZGluZ1wiPmluZm9wbHVzPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fYnVsbGV0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdWxsZXRUaXRsZSB0aXRsZT1cIlNpbXBsdVwiIGljb249XCJjaGVja1wiIGk9XCIxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnVsbGV0VGl0bGUgdGl0bGU9XCJSYXBpZFwiIGljb249XCJib2x0XCIgaT1cIjJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdWxsZXRUaXRsZSB0aXRsZT1cIkludHVpdGl2XCIgaWNvbj1cImxpZ2h0YnVsYlwiIGk9XCIzXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19idXR0b24tc2lnbi1pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uLS1wcmltYXJ5LWl4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTG9naGVhemEtdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInNpZ24taW4tYWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd0xvZ2luTW9kYWxIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFpbl9fYnV0dG9uLW1ha2UtYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51IGFpIGNvbnQ/IDxhIGhyZWY9XCIjXCI+RmEtdGkgdW51bCE8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b24tLXNlY29uZGFyeS1peFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVmV6aSBtYWkgbXVsdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZWxsaXBzaXMtaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCIvaW5mb3JtYXRpaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFdhdmUgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLm1haW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19jb250ZW50LXBhbmVsIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX3ByaW1hcnktaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2J1bGxldHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMCA4MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19idWxsZXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5fX2NvbnRlbnQtcGFuZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5fX2J1bGxldHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19idXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19idXR0b24tc2lnbi1pbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19idXR0b24tbWFrZS1hY2NvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQnVsbGV0VGl0bGUoeyB0aXRsZSwgaWNvbiwgaSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fYnVsbGV0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9faWNvbi1idWJibGVcIj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1haW5fX2J1bGxldC1pY29uLS0ke2l9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWFpbl9fdGVydGlhcnktaGVhZGluZ1wiPnt0aXRsZX08L2gzPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLm1haW5fX3RlcnRpYXJ5LWhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19pY29uLWJ1YmJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19idWxsZXQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMzBweCAyMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5tYWluX19idWxsZXQtaWNvbi0tMSwgLm1haW5fX2J1bGxldC1pY29uLS0yLCAubWFpbl9fYnVsbGV0LWljb24tLTMpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgubWFpbl9fYnVsbGV0LWljb24tLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgubWFpbl9fYnVsbGV0LWljb24tLTIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5tYWluX19idWxsZXQtaWNvbi0tMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtdGVydGlhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1dHRvbih7IHR5cGUsIHRpdGxlLCBpY29uLCBsaW5rLCBvbkNsaWNrID0gbnVsbCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dHlwZX0gb25DbGljaz17b25DbGlja30+XHJcbiAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ljb259IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFdhdmUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NSVcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxOTAwIDI4MFwiXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5fX3N2Z1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNLTIuNzU0NjcgNzEuMTAzQy0yLjc1NDY3IDcxLjEwMyA3ODMuNTMzIC04OC41MzYgMTIwNC4yNCA3MS4xMDNDMTYyNC45NCAyMzAuNzQyIDE5MTcuMjUgNTcuMzIzIDE5MTcuMjUgNTcuMzIzVjQ4MC4wMDNILTIuNzU0NjdWNzEuMTAzWlwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDUlXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTkyMCAyODBcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluX19zdmdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZyBvcGFjaXR5PVwiMC4xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMTg5LjM3IDE1Ny4xNzJDMTIxMS40IDE1My4yOCAxMjI2LjExIDEzMi4yNjUgMTIyMi4yMiAxMTAuMjMzQzEyMTguMzMgODguMjAwNyAxMTk3LjMxIDczLjQ5NTIgMTE3NS4yOCA3Ny4zODcyQzExNTMuMjUgODEuMjc5MSAxMTM4LjU0IDEwMi4yOTUgMTE0Mi40MyAxMjQuMzI3QzExNDYuMzIgMTQ2LjM1OSAxMTY3LjM0IDE2MS4wNjQgMTE4OS4zNyAxNTcuMTcyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMDI5LjEyIDI2Ny43NTVDMTA1MS4xNSAyNjMuODYzIDEwNjUuODYgMjQyLjg0OCAxMDYxLjk3IDIyMC44MTZDMTA1OC4wNyAxOTguNzg0IDEwMzcuMDYgMTg0LjA3OCAxMDE1LjAzIDE4Ny45N0M5OTIuOTk1IDE5MS44NjIgOTc4LjI4OSAyMTIuODc4IDk4Mi4xODEgMjM0LjkxQzk4Ni4wNzMgMjU2Ljk0MiAxMDA3LjA5IDI3MS42NDcgMTAyOS4xMiAyNjcuNzU1WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04NTQuMTk5IDE0MS40NDVMOTUwLjUyIDExNy40OUw5MjMuMjk1IDIxMi43MDFMODU0LjE5OSAxNDEuNDQ1WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNzk0LjgzIDIzOC40MzFMMTg2Ni4yMyAzMDcuNDU3TDE3NzEuMDEgMzM0LjgzNkwxNzk0LjgzIDIzOC40MzFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE3OTQuODMgMjM4LjQzMUwxODY2LjIzIDMwNy40NTdMMTc3MS4wMSAzMzQuODM2TDE3OTQuODMgMjM4LjQzMVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTU5NS42MSAyNTAuOTkxTDE1NzQuOTggMzIzLjEyTDE2NDcuMTEgMzQzLjc0NkwxNjY3Ljc0IDI3MS42MTZMMTU5NS42MSAyNTAuOTkxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNDc2LjcgMjgxLjA0N0wxNDA0LjU2IDMwMS43ODhMMTQyNS4zMSAzNzMuOTI0TDE0OTcuNDQgMzUzLjE4MkwxNDc2LjcgMjgxLjA0N1pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTEyMS4xNCAzMDguODM5TDExNTYuNjEgNDAxLjZMMTA1OC43NCAzODYuMTA2TDExMjEuMTQgMzA4LjgzOVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIyOC4wMiAyNzAuODI0TDEyOTQuMjcgMzA2LjA0N0wxMzI5LjUgMjM5Ljc5NUwxMjYzLjI0IDIwNC41NzFMMTIyOC4wMiAyNzAuODI0WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNzM2LjY1IDIyNS4wNDRDMTc1OC42OSAyMjEuMTUyIDE3NzMuMzkgMjAwLjEzNyAxNzY5LjUgMTc4LjEwNUMxNzY1LjYxIDE1Ni4wNzMgMTc0NC41OSAxNDEuMzY3IDE3MjIuNTYgMTQ1LjI1OUMxNzAwLjUzIDE0OS4xNTEgMTY4NS44MiAxNzAuMTY3IDE2ODkuNzIgMTkyLjE5OUMxNjkzLjYxIDIxNC4yMzEgMTcxNC42MiAyMjguOTM2IDE3MzYuNjUgMjI1LjA0NFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUwMC41NCAyMjguMTU2QzE1MjIuNTcgMjI0LjI2NCAxNTM3LjI4IDIwMy4yNDkgMTUzMy4zOCAxODEuMjE3QzE1MjkuNDkgMTU5LjE4NSAxNTA4LjQ4IDE0NC40NzkgMTQ4Ni40NCAxNDguMzcxQzE0NjQuNDEgMTUyLjI2MyAxNDQ5LjcxIDE3My4yNzkgMTQ1My42IDE5NS4zMTFDMTQ1Ny40OSAyMTcuMzQzIDE0NzguNTEgMjMyLjA0OCAxNTAwLjU0IDIyOC4xNTZaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTg2NC40MDIgMzA3Ljk1MUw4NTMuOTg2IDM4Mi4yMzhMOTI4LjI3MyAzOTIuNjU1TDkzOC42OSAzMTguMzY3TDg2NC40MDIgMzA3Ljk1MVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTgzOS40NSAxNzEuNTdMMTkzOC40NSAxNzguNjQyTDE4ODMuMDcgMjYwLjcyN0wxODM5LjQ1IDE3MS41N1pcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQ0NC4wOTkgMjQ0LjYwNEM0MjIuMDY3IDI0OC40OTYgNDA3LjM2MSAyNjkuNTEyIDQxMS4yNTMgMjkxLjU0NEM0MTUuMTQ1IDMxMy41NzYgNDM2LjE2MSAzMjguMjgxIDQ1OC4xOTMgMzI0LjM4OUM0ODAuMjI1IDMyMC40OTggNDk0LjkzIDI5OS40ODIgNDkxLjAzOCAyNzcuNDVDNDg3LjE0NiAyNTUuNDE4IDQ2Ni4xMzEgMjQwLjcxMyA0NDQuMDk5IDI0NC42MDRaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTYwNC4zNSAxMzQuMDIxQzU4Mi4zMTggMTM3LjkxMyA1NjcuNjEyIDE1OC45MjkgNTcxLjUwNCAxODAuOTYxQzU3NS4zOTYgMjAyLjk5MyA1OTYuNDEyIDIxNy42OTggNjE4LjQ0NCAyMTMuODA2QzY0MC40NzYgMjA5LjkxNSA2NTUuMTgxIDE4OC44OTkgNjUxLjI4OSAxNjYuODY3QzY0Ny4zOTcgMTQ0LjgzNSA2MjYuMzgyIDEzMC4xMyA2MDQuMzUgMTM0LjAyMVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNzc5LjI3MiAyNjAuMzMyTDY4Mi45NTEgMjg0LjI4N0w3MTAuMTc2IDE4OS4wNzZMNzc5LjI3MiAyNjAuMzMyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zNy44NjE1IDE1MC43ODZMNTguNDg2OCA3OC42NTYyTC0xMy42NDI3IDU4LjAzMDlMLTM0LjI2OCAxMzAuMTZMMzcuODYxNSAxNTAuNzg2WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNTYuNzcyIDEyMC43M0wyMjguOTA3IDk5Ljk4ODVMMjA4LjE2NSAyNy44NTMxTDEzNi4wMyA0OC41OTQ3TDE1Ni43NzIgMTIwLjczWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01MTIuMzM1IDkyLjkzNzVMNDc2Ljg2MiAwLjE3NjUxNEw1NzQuNzI3IDE1LjY3MDZMNTEyLjMzNSA5Mi45Mzc1WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MDUuNDUgMTMwLjk1M0wzMzkuMTk4IDk1LjcyOTVMMzAzLjk3NSAxNjEuOTgyTDM3MC4yMjcgMTk3LjIwNUw0MDUuNDUgMTMwLjk1M1pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTMyLjkzMyAxNzMuNjJDMTEwLjkwMSAxNzcuNTEyIDk2LjE5NTIgMTk4LjUyOCAxMDAuMDg3IDIyMC41NkMxMDMuOTc5IDI0Mi41OTIgMTI0Ljk5NSAyNTcuMjk3IDE0Ny4wMjcgMjUzLjQwNUMxNjkuMDU5IDI0OS41MTQgMTgzLjc2NCAyMjguNDk4IDE3OS44NzIgMjA2LjQ2NkMxNzUuOTggMTg0LjQzNCAxNTQuOTY1IDE2OS43MjkgMTMyLjkzMyAxNzMuNjJaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTc2OS4wNjggOTMuODI2MUw3NzkuNDg1IDE5LjUzODVMNzA1LjE5NyA5LjEyMTY2TDY5NC43ODEgODMuNDA5Mkw3NjkuMDY4IDkzLjgyNjFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI3Ny4wNTMgMzMxLjUyNkwxODQuNDI4IDI5NS44NjNMMjYxLjM2NSAyMzMuNTJMMjc3LjA1MyAzMzEuNTI2WlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1haW5fX3N2ZzpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19zdmcgZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICM2MjYyNjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\Home\\\\Main.js */"));
}

function BulletTitle({
  title,
  icon,
  i
}) {
  return __jsx("div", {
    className: "jsx-1405224024" + " " + "main__bullet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1405224024" + " " + "main__icon-bubble",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: icon,
    className: `main__bullet-icon--${i}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  })), __jsx("h3", {
    className: "jsx-1405224024" + " " + "main__tertiary-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, title), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1405224024",
    __self: this
  }, ".main__tertiary-heading.jsx-1405224024{font-weight:lighter;}.main__icon-bubble.jsx-1405224024{width:30px;height:30px;background-color:var(--background-quaternary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;border-radius:50%;margin-right:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.main__bullet.jsx-1405224024{margin:30px 20px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.main__bullet-icon--1,.main__bullet-icon--2,.main__bullet-icon--3{width:15px;height:15px;}.main__bullet-icon--1{color:var(--accent-primary);-webkit-transition:color 300ms ease;transition:color 300ms ease;}.main__bullet-icon--2{color:var(--accent-secondary);-webkit-transition:color 300ms ease;transition:color 300ms ease;}.main__bullet-icon--3{color:var(--accent-tertiary);-webkit-transition:color 300ms ease;transition:color 300ms ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEhvbWVcXE1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUl3QixBQUd5QyxBQUlULEFBWVEsQUFLUixBQUtpQixBQUtFLEFBS0QsV0EvQmpCLEFBaUJBLFFBTEMsQ0FoQmpCLEdBS2tELEFBaUJsRCxLQUlnQyxDQVVBLENBTEEsdUNBekJXLHVCQXFCM0MsQ0FWQSxBQW9CQSxDQUxBLDZEQXpCc0Isa0JBQ0Esa0JBQ0wsMEVBQ1UsbUdBQ0osNkZBQ3ZCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEhvbWVcXE1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCBSZWdpc3RlciBmcm9tIFwiLi4vZ2xvYmFscy9SZWdpc3RlclwiO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4uL2dsb2JhbHMvTG9naW5cIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWFpbigpIHtcclxuICAgIGNvbnN0IFtyZWdpc3Rlck1vZGFsVmlzaWJsZSwgc2hvd1JlZ2lzdGVyTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgc2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyID0gKCkgPT5cclxuICAgICAgICBzaG93UmVnaXN0ZXJNb2RhbCghcmVnaXN0ZXJNb2RhbFZpc2libGUpO1xyXG5cclxuICAgIGNvbnN0IFtsb2dpbk1vZGFsVmlzaWJsZSwgc2hvd0xvZ2luTW9kYWxdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3Qgc2hvd0xvZ2luTW9kYWxIYW5kbGVyID0gKCkgPT4gc2hvd0xvZ2luTW9kYWwoIWxvZ2luTW9kYWxWaXNpYmxlKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAge3JlZ2lzdGVyTW9kYWxWaXNpYmxlICYmIChcclxuICAgICAgICAgICAgICAgIDxSZWdpc3RlciBzaG93UmVnaXN0ZXJNb2RhbEhhbmRsZXI9e3Nob3dSZWdpc3Rlck1vZGFsSGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAge2xvZ2luTW9kYWxWaXNpYmxlICYmIChcclxuICAgICAgICAgICAgICAgIDxMb2dpbiBzaG93TG9naW5Nb2RhbEhhbmRsZXI9e3Nob3dMb2dpbk1vZGFsSGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19jb250ZW50LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibWFpbl9fcHJpbWFyeS1oZWFkaW5nXCI+aW5mb3BsdXM8L2gxPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19idWxsZXRzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1bGxldFRpdGxlIHRpdGxlPVwiU2ltcGx1XCIgaWNvbj1cImNoZWNrXCIgaT1cIjFcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdWxsZXRUaXRsZSB0aXRsZT1cIlJhcGlkXCIgaWNvbj1cImJvbHRcIiBpPVwiMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1bGxldFRpdGxlIHRpdGxlPVwiSW50dWl0aXZcIiBpY29uPVwibGlnaHRidWxiXCIgaT1cIjNcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fX2J1dHRvbnNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5fX2J1dHRvbi1zaWduLWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b24tLXByaW1hcnktaXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJMb2doZWF6YS10ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwic2lnbi1pbi1hbHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluaz1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93TG9naW5Nb2RhbEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93UmVnaXN0ZXJNb2RhbEhhbmRsZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluX19idXR0b24tbWFrZS1hY2NvdW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgTnUgYWkgY29udD8gPGEgaHJlZj1cIiNcIj5GYS10aSB1bnVsITwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvbi0tc2Vjb25kYXJ5LWl4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJWZXppIG1haSBtdWx0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb249XCJlbGxpcHNpcy1oXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluaz1cIi9pbmZvcm1hdGlpXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8V2F2ZSAvPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAubWFpbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2NvbnRlbnQtcGFuZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9fcHJpbWFyeS1oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9fYnVsbGV0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwIDgwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2J1bGxldCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubWFpbl9fYnV0dG9ucyB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fY29udGVudC1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fYnVsbGV0cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5fX2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5fX2J1dHRvbi1zaWduLWluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2J1dHRvbi1tYWtlLWFjY291bnQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBCdWxsZXRUaXRsZSh7IHRpdGxlLCBpY29uLCBpIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19idWxsZXRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19pY29uLWJ1YmJsZVwiPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGljb249e2ljb259XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbWFpbl9fYnVsbGV0LWljb24tLSR7aX1gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJtYWluX190ZXJ0aWFyeS1oZWFkaW5nXCI+e3RpdGxlfTwvaDM+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAubWFpbl9fdGVydGlhcnktaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2ljb24tYnViYmxlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2J1bGxldCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAzMHB4IDIwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLm1haW5fX2J1bGxldC1pY29uLS0xLCAubWFpbl9fYnVsbGV0LWljb24tLTIsIC5tYWluX19idWxsZXQtaWNvbi0tMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5tYWluX19idWxsZXQtaWNvbi0tMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5tYWluX19idWxsZXQtaWNvbi0tMikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLm1haW5fX2J1bGxldC1pY29uLS0zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC10ZXJ0aWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQnV0dG9uKHsgdHlwZSwgdGl0bGUsIGljb24sIGxpbmssIG9uQ2xpY2sgPSBudWxsIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExpbmsgaHJlZj17bGlua30+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXt0eXBlfSBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17aWNvbn0gLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gV2F2ZSgpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAlXCJcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjQ1JVwiXHJcbiAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE5MDAgMjgwXCJcclxuICAgICAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxyXG4gICAgICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFpbl9fc3ZnXCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk0tMi43NTQ2NyA3MS4xMDNDLTIuNzU0NjcgNzEuMTAzIDc4My41MzMgLTg4LjUzNiAxMjA0LjI0IDcxLjEwM0MxNjI0Ljk0IDIzMC43NDIgMTkxNy4yNSA1Ny4zMjMgMTkxNy4yNSA1Ny4zMjNWNDgwLjAwM0gtMi43NTQ2N1Y3MS4xMDNaXCIgLz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NSVcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxOTIwIDI4MFwiXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5fX3N2Z1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxnIG9wYWNpdHk9XCIwLjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTExODkuMzcgMTU3LjE3MkMxMjExLjQgMTUzLjI4IDEyMjYuMTEgMTMyLjI2NSAxMjIyLjIyIDExMC4yMzNDMTIxOC4zMyA4OC4yMDA3IDExOTcuMzEgNzMuNDk1MiAxMTc1LjI4IDc3LjM4NzJDMTE1My4yNSA4MS4yNzkxIDExMzguNTQgMTAyLjI5NSAxMTQyLjQzIDEyNC4zMjdDMTE0Ni4zMiAxNDYuMzU5IDExNjcuMzQgMTYxLjA2NCAxMTg5LjM3IDE1Ny4xNzJaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTEwMjkuMTIgMjY3Ljc1NUMxMDUxLjE1IDI2My44NjMgMTA2NS44NiAyNDIuODQ4IDEwNjEuOTcgMjIwLjgxNkMxMDU4LjA3IDE5OC43ODQgMTAzNy4wNiAxODQuMDc4IDEwMTUuMDMgMTg3Ljk3Qzk5Mi45OTUgMTkxLjg2MiA5NzguMjg5IDIxMi44NzggOTgyLjE4MSAyMzQuOTFDOTg2LjA3MyAyNTYuOTQyIDEwMDcuMDkgMjcxLjY0NyAxMDI5LjEyIDI2Ny43NTVaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTg1NC4xOTkgMTQxLjQ0NUw5NTAuNTIgMTE3LjQ5TDkyMy4yOTUgMjEyLjcwMUw4NTQuMTk5IDE0MS40NDVaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE3OTQuODMgMjM4LjQzMUwxODY2LjIzIDMwNy40NTdMMTc3MS4wMSAzMzQuODM2TDE3OTQuODMgMjM4LjQzMVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTc5NC44MyAyMzguNDMxTDE4NjYuMjMgMzA3LjQ1N0wxNzcxLjAxIDMzNC44MzZMMTc5NC44MyAyMzguNDMxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNTk1LjYxIDI1MC45OTFMMTU3NC45OCAzMjMuMTJMMTY0Ny4xMSAzNDMuNzQ2TDE2NjcuNzQgMjcxLjYxNkwxNTk1LjYxIDI1MC45OTFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0NzYuNyAyODEuMDQ3TDE0MDQuNTYgMzAxLjc4OEwxNDI1LjMxIDM3My45MjRMMTQ5Ny40NCAzNTMuMTgyTDE0NzYuNyAyODEuMDQ3WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMTIxLjE0IDMwOC44MzlMMTE1Ni42MSA0MDEuNkwxMDU4Ljc0IDM4Ni4xMDZMMTEyMS4xNCAzMDguODM5WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMjI4LjAyIDI3MC44MjRMMTI5NC4yNyAzMDYuMDQ3TDEzMjkuNSAyMzkuNzk1TDEyNjMuMjQgMjA0LjU3MUwxMjI4LjAyIDI3MC44MjRaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE3MzYuNjUgMjI1LjA0NEMxNzU4LjY5IDIyMS4xNTIgMTc3My4zOSAyMDAuMTM3IDE3NjkuNSAxNzguMTA1QzE3NjUuNjEgMTU2LjA3MyAxNzQ0LjU5IDE0MS4zNjcgMTcyMi41NiAxNDUuMjU5QzE3MDAuNTMgMTQ5LjE1MSAxNjg1LjgyIDE3MC4xNjcgMTY4OS43MiAxOTIuMTk5QzE2OTMuNjEgMjE0LjIzMSAxNzE0LjYyIDIyOC45MzYgMTczNi42NSAyMjUuMDQ0WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNTAwLjU0IDIyOC4xNTZDMTUyMi41NyAyMjQuMjY0IDE1MzcuMjggMjAzLjI0OSAxNTMzLjM4IDE4MS4yMTdDMTUyOS40OSAxNTkuMTg1IDE1MDguNDggMTQ0LjQ3OSAxNDg2LjQ0IDE0OC4zNzFDMTQ2NC40MSAxNTIuMjYzIDE0NDkuNzEgMTczLjI3OSAxNDUzLjYgMTk1LjMxMUMxNDU3LjQ5IDIxNy4zNDMgMTQ3OC41MSAyMzIuMDQ4IDE1MDAuNTQgMjI4LjE1NlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNODY0LjQwMiAzMDcuOTUxTDg1My45ODYgMzgyLjIzOEw5MjguMjczIDM5Mi42NTVMOTM4LjY5IDMxOC4zNjdMODY0LjQwMiAzMDcuOTUxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xODM5LjQ1IDE3MS41N0wxOTM4LjQ1IDE3OC42NDJMMTg4My4wNyAyNjAuNzI3TDE4MzkuNDUgMTcxLjU3WlwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDQ0LjA5OSAyNDQuNjA0QzQyMi4wNjcgMjQ4LjQ5NiA0MDcuMzYxIDI2OS41MTIgNDExLjI1MyAyOTEuNTQ0QzQxNS4xNDUgMzEzLjU3NiA0MzYuMTYxIDMyOC4yODEgNDU4LjE5MyAzMjQuMzg5QzQ4MC4yMjUgMzIwLjQ5OCA0OTQuOTMgMjk5LjQ4MiA0OTEuMDM4IDI3Ny40NUM0ODcuMTQ2IDI1NS40MTggNDY2LjEzMSAyNDAuNzEzIDQ0NC4wOTkgMjQ0LjYwNFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNjA0LjM1IDEzNC4wMjFDNTgyLjMxOCAxMzcuOTEzIDU2Ny42MTIgMTU4LjkyOSA1NzEuNTA0IDE4MC45NjFDNTc1LjM5NiAyMDIuOTkzIDU5Ni40MTIgMjE3LjY5OCA2MTguNDQ0IDIxMy44MDZDNjQwLjQ3NiAyMDkuOTE1IDY1NS4xODEgMTg4Ljg5OSA2NTEuMjg5IDE2Ni44NjdDNjQ3LjM5NyAxNDQuODM1IDYyNi4zODIgMTMwLjEzIDYwNC4zNSAxMzQuMDIxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk03NzkuMjcyIDI2MC4zMzJMNjgyLjk1MSAyODQuMjg3TDcxMC4xNzYgMTg5LjA3Nkw3NzkuMjcyIDI2MC4zMzJaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTM3Ljg2MTUgMTUwLjc4Nkw1OC40ODY4IDc4LjY1NjJMLTEzLjY0MjcgNTguMDMwOUwtMzQuMjY4IDEzMC4xNkwzNy44NjE1IDE1MC43ODZaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE1Ni43NzIgMTIwLjczTDIyOC45MDcgOTkuOTg4NUwyMDguMTY1IDI3Ljg1MzFMMTM2LjAzIDQ4LjU5NDdMMTU2Ljc3MiAxMjAuNzNaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTUxMi4zMzUgOTIuOTM3NUw0NzYuODYyIDAuMTc2NTE0TDU3NC43MjcgMTUuNjcwNkw1MTIuMzM1IDkyLjkzNzVaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQwNS40NSAxMzAuOTUzTDMzOS4xOTggOTUuNzI5NUwzMDMuOTc1IDE2MS45ODJMMzcwLjIyNyAxOTcuMjA1TDQwNS40NSAxMzAuOTUzWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMzIuOTMzIDE3My42MkMxMTAuOTAxIDE3Ny41MTIgOTYuMTk1MiAxOTguNTI4IDEwMC4wODcgMjIwLjU2QzEwMy45NzkgMjQyLjU5MiAxMjQuOTk1IDI1Ny4yOTcgMTQ3LjAyNyAyNTMuNDA1QzE2OS4wNTkgMjQ5LjUxNCAxODMuNzY0IDIyOC40OTggMTc5Ljg3MiAyMDYuNDY2QzE3NS45OCAxODQuNDM0IDE1NC45NjUgMTY5LjcyOSAxMzIuOTMzIDE3My42MlpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNzY5LjA2OCA5My44MjYxTDc3OS40ODUgMTkuNTM4NUw3MDUuMTk3IDkuMTIxNjZMNjk0Ljc4MSA4My40MDkyTDc2OS4wNjggOTMuODI2MVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjc3LjA1MyAzMzEuNTI2TDE4NC40MjggMjk1Ljg2M0wyNjEuMzY1IDIzMy41MkwyNzcuMDUzIDMzMS41MjZaXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19zdmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NDBweCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFpbl9fc3ZnOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5fX3N2ZyBnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsbDogIzYyNjI2MjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\Home\\\\Main.js */"));
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, __jsx("button", {
    className: type,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, title, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189
    },
    __self: this
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx("path", {
    d: "M-2.75467 71.103C-2.75467 71.103 783.533 -88.536 1204.24 71.103C1624.94 230.742 1917.25 57.323 1917.25 57.323V480.003H-2.75467V71.103Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  })), __jsx("svg", {
    width: "100%",
    height: "45%",
    viewBox: "0 0 1920 280",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-3166235118" + " " + "main__svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx("g", {
    opacity: "0.1",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215
    },
    __self: this
  }, __jsx("path", {
    d: "M1189.37 157.172C1211.4 153.28 1226.11 132.265 1222.22 110.233C1218.33 88.2007 1197.31 73.4952 1175.28 77.3872C1153.25 81.2791 1138.54 102.295 1142.43 124.327C1146.32 146.359 1167.34 161.064 1189.37 157.172Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }), __jsx("path", {
    d: "M1029.12 267.755C1051.15 263.863 1065.86 242.848 1061.97 220.816C1058.07 198.784 1037.06 184.078 1015.03 187.97C992.995 191.862 978.289 212.878 982.181 234.91C986.073 256.942 1007.09 271.647 1029.12 267.755Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217
    },
    __self: this
  }), __jsx("path", {
    d: "M854.199 141.445L950.52 117.49L923.295 212.701L854.199 141.445Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218
    },
    __self: this
  }), __jsx("path", {
    d: "M1794.83 238.431L1866.23 307.457L1771.01 334.836L1794.83 238.431Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219
    },
    __self: this
  }), __jsx("path", {
    d: "M1794.83 238.431L1866.23 307.457L1771.01 334.836L1794.83 238.431Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }), __jsx("path", {
    d: "M1595.61 250.991L1574.98 323.12L1647.11 343.746L1667.74 271.616L1595.61 250.991Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }), __jsx("path", {
    d: "M1476.7 281.047L1404.56 301.788L1425.31 373.924L1497.44 353.182L1476.7 281.047Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222
    },
    __self: this
  }), __jsx("path", {
    d: "M1121.14 308.839L1156.61 401.6L1058.74 386.106L1121.14 308.839Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }), __jsx("path", {
    d: "M1228.02 270.824L1294.27 306.047L1329.5 239.795L1263.24 204.571L1228.02 270.824Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }), __jsx("path", {
    d: "M1736.65 225.044C1758.69 221.152 1773.39 200.137 1769.5 178.105C1765.61 156.073 1744.59 141.367 1722.56 145.259C1700.53 149.151 1685.82 170.167 1689.72 192.199C1693.61 214.231 1714.62 228.936 1736.65 225.044Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }), __jsx("path", {
    d: "M1500.54 228.156C1522.57 224.264 1537.28 203.249 1533.38 181.217C1529.49 159.185 1508.48 144.479 1486.44 148.371C1464.41 152.263 1449.71 173.279 1453.6 195.311C1457.49 217.343 1478.51 232.048 1500.54 228.156Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }), __jsx("path", {
    d: "M864.402 307.951L853.986 382.238L928.273 392.655L938.69 318.367L864.402 307.951Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }), __jsx("path", {
    d: "M1839.45 171.57L1938.45 178.642L1883.07 260.727L1839.45 171.57Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }), __jsx("path", {
    d: "M444.099 244.604C422.067 248.496 407.361 269.512 411.253 291.544C415.145 313.576 436.161 328.281 458.193 324.389C480.225 320.498 494.93 299.482 491.038 277.45C487.146 255.418 466.131 240.713 444.099 244.604Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  }), __jsx("path", {
    d: "M604.35 134.021C582.318 137.913 567.612 158.929 571.504 180.961C575.396 202.993 596.412 217.698 618.444 213.806C640.476 209.915 655.181 188.899 651.289 166.867C647.397 144.835 626.382 130.13 604.35 134.021Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }), __jsx("path", {
    d: "M779.272 260.332L682.951 284.287L710.176 189.076L779.272 260.332Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }), __jsx("path", {
    d: "M37.8615 150.786L58.4868 78.6562L-13.6427 58.0309L-34.268 130.16L37.8615 150.786Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 233
    },
    __self: this
  }), __jsx("path", {
    d: "M156.772 120.73L228.907 99.9885L208.165 27.8531L136.03 48.5947L156.772 120.73Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 234
    },
    __self: this
  }), __jsx("path", {
    d: "M512.335 92.9375L476.862 0.176514L574.727 15.6706L512.335 92.9375Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }), __jsx("path", {
    d: "M405.45 130.953L339.198 95.7295L303.975 161.982L370.227 197.205L405.45 130.953Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236
    },
    __self: this
  }), __jsx("path", {
    d: "M132.933 173.62C110.901 177.512 96.1952 198.528 100.087 220.56C103.979 242.592 124.995 257.297 147.027 253.405C169.059 249.514 183.764 228.498 179.872 206.466C175.98 184.434 154.965 169.729 132.933 173.62Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237
    },
    __self: this
  }), __jsx("path", {
    d: "M769.068 93.8261L779.485 19.5385L705.197 9.12166L694.781 83.4092L769.068 93.8261Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238
    },
    __self: this
  }), __jsx("path", {
    d: "M277.053 331.526L184.428 295.863L261.365 233.52L277.053 331.526Z",
    className: "jsx-3166235118",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239
    },
    __self: this
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3166235118",
    __self: this
  }, ".main__svg.jsx-3166235118{position:absolute;bottom:0;fill:var(--background-secondary);-webkit-transition:fill 300ms ease;transition:fill 300ms ease;}@media screen and (max-width:740px){.main__svg.jsx-3166235118:last-child{display:none;}}.main__svg.jsx-3166235118 g.jsx-3166235118{fill:#626262;-webkit-transition:fill 300ms ease;transition:fill 300ms ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEhvbWVcXE1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa1BpQixBQUcyQyxBQVFELEFBS0osYUFKYixBQUsyQixLQWJsQixTQUN3QixpQ0FDTixlQVkvQiwrQ0FYQSIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxIb21lXFxNYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSBcIi4uL2dsb2JhbHMvUmVnaXN0ZXJcIjtcclxuaW1wb3J0IExvZ2luIGZyb20gXCIuLi9nbG9iYWxzL0xvZ2luXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgICBjb25zdCBbcmVnaXN0ZXJNb2RhbFZpc2libGUsIHNob3dSZWdpc3Rlck1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHNob3dSZWdpc3Rlck1vZGFsSGFuZGxlciA9ICgpID0+XHJcbiAgICAgICAgc2hvd1JlZ2lzdGVyTW9kYWwoIXJlZ2lzdGVyTW9kYWxWaXNpYmxlKTtcclxuXHJcbiAgICBjb25zdCBbbG9naW5Nb2RhbFZpc2libGUsIHNob3dMb2dpbk1vZGFsXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHNob3dMb2dpbk1vZGFsSGFuZGxlciA9ICgpID0+IHNob3dMb2dpbk1vZGFsKCFsb2dpbk1vZGFsVmlzaWJsZSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgICAgIHtyZWdpc3Rlck1vZGFsVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8UmVnaXN0ZXIgc2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyPXtzaG93UmVnaXN0ZXJNb2RhbEhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIHtsb2dpbk1vZGFsVmlzaWJsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8TG9naW4gc2hvd0xvZ2luTW9kYWxIYW5kbGVyPXtzaG93TG9naW5Nb2RhbEhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fY29udGVudC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1haW5fX3ByaW1hcnktaGVhZGluZ1wiPmluZm9wbHVzPC9oMT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fYnVsbGV0c1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdWxsZXRUaXRsZSB0aXRsZT1cIlNpbXBsdVwiIGljb249XCJjaGVja1wiIGk9XCIxXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8QnVsbGV0VGl0bGUgdGl0bGU9XCJSYXBpZFwiIGljb249XCJib2x0XCIgaT1cIjJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxCdWxsZXRUaXRsZSB0aXRsZT1cIkludHVpdGl2XCIgaWNvbj1cImxpZ2h0YnVsYlwiIGk9XCIzXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluX19idXR0b24tc2lnbi1pblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uLS1wcmltYXJ5LWl4XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiTG9naGVhemEtdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cInNpZ24taW4tYWx0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd0xvZ2luTW9kYWxIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17c2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWFpbl9fYnV0dG9uLW1ha2UtYWNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51IGFpIGNvbnQ/IDxhIGhyZWY9XCIjXCI+RmEtdGkgdW51bCE8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b24tLXNlY29uZGFyeS1peFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiVmV6aSBtYWkgbXVsdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwiZWxsaXBzaXMtaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbms9XCIvaW5mb3JtYXRpaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPFdhdmUgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLm1haW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19jb250ZW50LXBhbmVsIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX3ByaW1hcnktaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2J1bGxldHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHggMCA4MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19idWxsZXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1haW5fX2J1dHRvbnMge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5fX2NvbnRlbnQtcGFuZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA3MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLm1haW5fX2J1bGxldHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19idXR0b25zIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19idXR0b24tc2lnbi1pbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19idXR0b24tbWFrZS1hY2NvdW50IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQnVsbGV0VGl0bGUoeyB0aXRsZSwgaWNvbiwgaSB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9fYnVsbGV0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpbl9faWNvbi1idWJibGVcIj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICBpY29uPXtpY29ufVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1haW5fX2J1bGxldC1pY29uLS0ke2l9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWFpbl9fdGVydGlhcnktaGVhZGluZ1wiPnt0aXRsZX08L2gzPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLm1haW5fX3RlcnRpYXJ5LWhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19pY29uLWJ1YmJsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tYWluX19idWxsZXQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMzBweCAyMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5tYWluX19idWxsZXQtaWNvbi0tMSwgLm1haW5fX2J1bGxldC1pY29uLS0yLCAubWFpbl9fYnVsbGV0LWljb24tLTMpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgubWFpbl9fYnVsbGV0LWljb24tLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgubWFpbl9fYnVsbGV0LWljb24tLTIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5tYWluX19idWxsZXQtaWNvbi0tMykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtdGVydGlhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEJ1dHRvbih7IHR5cGUsIHRpdGxlLCBpY29uLCBsaW5rLCBvbkNsaWNrID0gbnVsbCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2xpbmt9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17dHlwZX0gb25DbGljaz17b25DbGlja30+XHJcbiAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ljb259IC8+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFdhdmUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxzdmdcclxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwJVwiXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCI0NSVcIlxyXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxOTAwIDI4MFwiXHJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgICAgIHByZXNlcnZlQXNwZWN0UmF0aW89XCJub25lXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1haW5fX3N2Z1wiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNLTIuNzU0NjcgNzEuMTAzQy0yLjc1NDY3IDcxLjEwMyA3ODMuNTMzIC04OC41MzYgMTIwNC4yNCA3MS4xMDNDMTYyNC45NCAyMzAuNzQyIDE5MTcuMjUgNTcuMzIzIDE5MTcuMjUgNTcuMzIzVjQ4MC4wMDNILTIuNzU0NjdWNzEuMTAzWlwiIC8+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMCVcIlxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiNDUlXCJcclxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTkyMCAyODBcIlxyXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWluX19zdmdcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZyBvcGFjaXR5PVwiMC4xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMTg5LjM3IDE1Ny4xNzJDMTIxMS40IDE1My4yOCAxMjI2LjExIDEzMi4yNjUgMTIyMi4yMiAxMTAuMjMzQzEyMTguMzMgODguMjAwNyAxMTk3LjMxIDczLjQ5NTIgMTE3NS4yOCA3Ny4zODcyQzExNTMuMjUgODEuMjc5MSAxMTM4LjU0IDEwMi4yOTUgMTE0Mi40MyAxMjQuMzI3QzExNDYuMzIgMTQ2LjM1OSAxMTY3LjM0IDE2MS4wNjQgMTE4OS4zNyAxNTcuMTcyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xMDI5LjEyIDI2Ny43NTVDMTA1MS4xNSAyNjMuODYzIDEwNjUuODYgMjQyLjg0OCAxMDYxLjk3IDIyMC44MTZDMTA1OC4wNyAxOTguNzg0IDEwMzcuMDYgMTg0LjA3OCAxMDE1LjAzIDE4Ny45N0M5OTIuOTk1IDE5MS44NjIgOTc4LjI4OSAyMTIuODc4IDk4Mi4xODEgMjM0LjkxQzk4Ni4wNzMgMjU2Ljk0MiAxMDA3LjA5IDI3MS42NDcgMTAyOS4xMiAyNjcuNzU1WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk04NTQuMTk5IDE0MS40NDVMOTUwLjUyIDExNy40OUw5MjMuMjk1IDIxMi43MDFMODU0LjE5OSAxNDEuNDQ1WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNzk0LjgzIDIzOC40MzFMMTg2Ni4yMyAzMDcuNDU3TDE3NzEuMDEgMzM0LjgzNkwxNzk0LjgzIDIzOC40MzFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE3OTQuODMgMjM4LjQzMUwxODY2LjIzIDMwNy40NTdMMTc3MS4wMSAzMzQuODM2TDE3OTQuODMgMjM4LjQzMVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTU5NS42MSAyNTAuOTkxTDE1NzQuOTggMzIzLjEyTDE2NDcuMTEgMzQzLjc0NkwxNjY3Ljc0IDI3MS42MTZMMTU5NS42MSAyNTAuOTkxWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNDc2LjcgMjgxLjA0N0wxNDA0LjU2IDMwMS43ODhMMTQyNS4zMSAzNzMuOTI0TDE0OTcuNDQgMzUzLjE4MkwxNDc2LjcgMjgxLjA0N1pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTEyMS4xNCAzMDguODM5TDExNTYuNjEgNDAxLjZMMTA1OC43NCAzODYuMTA2TDExMjEuMTQgMzA4LjgzOVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTIyOC4wMiAyNzAuODI0TDEyOTQuMjcgMzA2LjA0N0wxMzI5LjUgMjM5Ljc5NUwxMjYzLjI0IDIwNC41NzFMMTIyOC4wMiAyNzAuODI0WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNzM2LjY1IDIyNS4wNDRDMTc1OC42OSAyMjEuMTUyIDE3NzMuMzkgMjAwLjEzNyAxNzY5LjUgMTc4LjEwNUMxNzY1LjYxIDE1Ni4wNzMgMTc0NC41OSAxNDEuMzY3IDE3MjIuNTYgMTQ1LjI1OUMxNzAwLjUzIDE0OS4xNTEgMTY4NS44MiAxNzAuMTY3IDE2ODkuNzIgMTkyLjE5OUMxNjkzLjYxIDIxNC4yMzEgMTcxNC42MiAyMjguOTM2IDE3MzYuNjUgMjI1LjA0NFpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTUwMC41NCAyMjguMTU2QzE1MjIuNTcgMjI0LjI2NCAxNTM3LjI4IDIwMy4yNDkgMTUzMy4zOCAxODEuMjE3QzE1MjkuNDkgMTU5LjE4NSAxNTA4LjQ4IDE0NC40NzkgMTQ4Ni40NCAxNDguMzcxQzE0NjQuNDEgMTUyLjI2MyAxNDQ5LjcxIDE3My4yNzkgMTQ1My42IDE5NS4zMTFDMTQ1Ny40OSAyMTcuMzQzIDE0NzguNTEgMjMyLjA0OCAxNTAwLjU0IDIyOC4xNTZaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTg2NC40MDIgMzA3Ljk1MUw4NTMuOTg2IDM4Mi4yMzhMOTI4LjI3MyAzOTIuNjU1TDkzOC42OSAzMTguMzY3TDg2NC40MDIgMzA3Ljk1MVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTgzOS40NSAxNzEuNTdMMTkzOC40NSAxNzguNjQyTDE4ODMuMDcgMjYwLjcyN0wxODM5LjQ1IDE3MS41N1pcIiAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQ0NC4wOTkgMjQ0LjYwNEM0MjIuMDY3IDI0OC40OTYgNDA3LjM2MSAyNjkuNTEyIDQxMS4yNTMgMjkxLjU0NEM0MTUuMTQ1IDMxMy41NzYgNDM2LjE2MSAzMjguMjgxIDQ1OC4xOTMgMzI0LjM4OUM0ODAuMjI1IDMyMC40OTggNDk0LjkzIDI5OS40ODIgNDkxLjAzOCAyNzcuNDVDNDg3LjE0NiAyNTUuNDE4IDQ2Ni4xMzEgMjQwLjcxMyA0NDQuMDk5IDI0NC42MDRaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTYwNC4zNSAxMzQuMDIxQzU4Mi4zMTggMTM3LjkxMyA1NjcuNjEyIDE1OC45MjkgNTcxLjUwNCAxODAuOTYxQzU3NS4zOTYgMjAyLjk5MyA1OTYuNDEyIDIxNy42OTggNjE4LjQ0NCAyMTMuODA2QzY0MC40NzYgMjA5LjkxNSA2NTUuMTgxIDE4OC44OTkgNjUxLjI4OSAxNjYuODY3QzY0Ny4zOTcgMTQ0LjgzNSA2MjYuMzgyIDEzMC4xMyA2MDQuMzUgMTM0LjAyMVpcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNzc5LjI3MiAyNjAuMzMyTDY4Mi45NTEgMjg0LjI4N0w3MTAuMTc2IDE4OS4wNzZMNzc5LjI3MiAyNjAuMzMyWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0zNy44NjE1IDE1MC43ODZMNTguNDg2OCA3OC42NTYyTC0xMy42NDI3IDU4LjAzMDlMLTM0LjI2OCAxMzAuMTZMMzcuODYxNSAxNTAuNzg2WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0xNTYuNzcyIDEyMC43M0wyMjguOTA3IDk5Ljk4ODVMMjA4LjE2NSAyNy44NTMxTDEzNi4wMyA0OC41OTQ3TDE1Ni43NzIgMTIwLjczWlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk01MTIuMzM1IDkyLjkzNzVMNDc2Ljg2MiAwLjE3NjUxNEw1NzQuNzI3IDE1LjY3MDZMNTEyLjMzNSA5Mi45Mzc1WlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk00MDUuNDUgMTMwLjk1M0wzMzkuMTk4IDk1LjcyOTVMMzAzLjk3NSAxNjEuOTgyTDM3MC4yMjcgMTk3LjIwNUw0MDUuNDUgMTMwLjk1M1pcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTMyLjkzMyAxNzMuNjJDMTEwLjkwMSAxNzcuNTEyIDk2LjE5NTIgMTk4LjUyOCAxMDAuMDg3IDIyMC41NkMxMDMuOTc5IDI0Mi41OTIgMTI0Ljk5NSAyNTcuMjk3IDE0Ny4wMjcgMjUzLjQwNUMxNjkuMDU5IDI0OS41MTQgMTgzLjc2NCAyMjguNDk4IDE3OS44NzIgMjA2LjQ2NkMxNzUuOTggMTg0LjQzNCAxNTQuOTY1IDE2OS43MjkgMTMyLjkzMyAxNzMuNjJaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTc2OS4wNjggOTMuODI2MUw3NzkuNDg1IDE5LjUzODVMNzA1LjE5NyA5LjEyMTY2TDY5NC43ODEgODMuNDA5Mkw3NjkuMDY4IDkzLjgyNjFaXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI3Ny4wNTMgMzMxLjUyNkwxODQuNDI4IDI5NS44NjNMMjYxLjM2NSAyMzMuNTJMMjc3LjA1MyAzMzEuNTI2WlwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAubWFpbl9fc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogZmlsbCAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzQwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1haW5fX3N2ZzpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5tYWluX19zdmcgZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6ICM2MjYyNjI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\Home\\\\Main.js */"));
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-77020266" + " " + "perks__heading-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("hr", {
    className: "jsx-77020266" + " " + "perks__hr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-77020266" + " " + "perks__heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, "De ce este mai bun infoplus?")), __jsx(PerkPanel, {
    title: "Vitez\u0103",
    icon: "bolt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "infoplus a fost conceput cu eficien\u021B\u0103, accesibilitate \u0219i vitez\u0103 de \xEEnc\u0103rcare \xEEn considerare, pentru a conferi calculatoarelor \u0219colare deficitare o experien\u021B\u0103 pl\u0103cut\u0103."), __jsx(PerkPanel, {
    title: "Convenien\u021B\u0103",
    icon: "coffee",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Cu tr\u0103s\u0103turi f\u0103cute pentru a u\u0219uravia\u021Ba at\xE2t celui care pred\u0103, c\xE2t \u0219i a elevului, toate necesit\u0103\u021Bile cheiesunt la un click dep\u0103rtare, construite intuitiv."), __jsx(PerkPanel, {
    title: "Utilitate",
    icon: "tools",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Am creat pentru acest site utilit\u0103\u021Bi care chiar sunt dorite, \u0219i folositoare \xEEnvia\u021Ba real\u0103, cum ar fi: mod proiector, tem\u0103 \xEEntunecat\u0103, \u0219i altele."), __jsx(PerkPanel, {
    title: "Stabilitate",
    icon: "mountain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Teama c\u0103 site-ul poate va fi offline temporar \u0219i nu vei mai putea accesa con-tul \u0219i probleme pe care trebuie s\u0103 lerezolvi, este inutil\u0103, deoarece acest site este online 24/7."), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "77020266",
    __self: this
  }, ".perks.jsx-77020266{width:100%;height:auto;background-color:var(--background-secondary);color:var(--text-primary);-webkit-transition:color,background-color 300ms ease;transition:color,background-color 300ms ease;padding:100px 0;text-align:center;}.perks__heading-container.jsx-77020266{padding-bottom:100px;position:relative;}.perks__hr.jsx-77020266{width:100%;z-index:1;display:inline-block;position:absolute;left:0;}.perks__heading.jsx-77020266{padding:0 20px;margin-top:-20px;display:inline-block;z-index:2;background-color:var(--background-secondary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEhvbWVcXFBlcmtzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThCaUIsQUFHb0MsQUFVVSxBQUtWLEFBUUksV0F0QkgsQUFlRixJQVFPLE1BYkMsQUFNRyxFQWZ3QixTQXVCeEIsT0FiekIsR0FNc0IsV0FRUixPQVBILEdBUXNDLElBUGpELENBakI4QiwwQkFDb0IsY0F3QlAsb0ZBdkJ2QixFQXdCRSxjQXZCQSxJQXdCdEIsY0F2QkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcSG9tZVxcUGVya3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcmtzKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJwZXJrc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcmtzX19oZWFkaW5nLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cInBlcmtzX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwicGVya3NfX2hlYWRpbmdcIj5EZSBjZSBlc3RlIG1haSBidW4gaW5mb3BsdXM/PC9oMT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8UGVya1BhbmVsIHRpdGxlPVwiVml0ZXrEg1wiIGljb249XCJib2x0XCI+XHJcbiAgICAgICAgICAgICAgICBpbmZvcGx1cyBhIGZvc3QgY29uY2VwdXQgY3UgZWZpY2llbsibxIMsIGFjY2VzaWJpbGl0YXRlIMiZaSB2aXRlesSDXHJcbiAgICAgICAgICAgICAgICBkZSDDrm5jxINyY2FyZSDDrm4gY29uc2lkZXJhcmUsIHBlbnRydSBhIGNvbmZlcmkgY2FsY3VsYXRvYXJlbG9yXHJcbiAgICAgICAgICAgICAgICDImWNvbGFyZSBkZWZpY2l0YXJlIG8gZXhwZXJpZW7Im8SDIHBsxINjdXTEgy5cclxuICAgICAgICAgICAgPC9QZXJrUGFuZWw+XHJcbiAgICAgICAgICAgIDxQZXJrUGFuZWwgdGl0bGU9XCJDb252ZW5pZW7Im8SDXCIgaWNvbj1cImNvZmZlZVwiPlxyXG4gICAgICAgICAgICAgICAgQ3UgdHLEg3PEg3R1cmkgZsSDY3V0ZSBwZW50cnUgYSB1yJl1cmF2aWHIm2EgYXTDonQgY2VsdWkgY2FyZSBwcmVkxIMsXHJcbiAgICAgICAgICAgICAgICBjw6J0IMiZaSBhIGVsZXZ1bHVpLCB0b2F0ZSBuZWNlc2l0xIPIm2lsZSBjaGVpZXN1bnQgbGEgdW4gY2xpY2tcclxuICAgICAgICAgICAgICAgIGRlcMSDcnRhcmUsIGNvbnN0cnVpdGUgaW50dWl0aXYuXHJcbiAgICAgICAgICAgIDwvUGVya1BhbmVsPlxyXG4gICAgICAgICAgICA8UGVya1BhbmVsIHRpdGxlPVwiVXRpbGl0YXRlXCIgaWNvbj1cInRvb2xzXCI+XHJcbiAgICAgICAgICAgICAgICBBbSBjcmVhdCBwZW50cnUgYWNlc3Qgc2l0ZSB1dGlsaXTEg8ibaSBjYXJlIGNoaWFyIHN1bnQgZG9yaXRlLCDImWlcclxuICAgICAgICAgICAgICAgIGZvbG9zaXRvYXJlIMOubnZpYcibYSByZWFsxIMsIGN1bSBhciBmaTogbW9kIHByb2llY3RvciwgdGVtxINcclxuICAgICAgICAgICAgICAgIMOubnR1bmVjYXTEgywgyJlpIGFsdGVsZS5cclxuICAgICAgICAgICAgPC9QZXJrUGFuZWw+XHJcbiAgICAgICAgICAgIDxQZXJrUGFuZWwgdGl0bGU9XCJTdGFiaWxpdGF0ZVwiIGljb249XCJtb3VudGFpblwiPlxyXG4gICAgICAgICAgICAgICAgVGVhbWEgY8SDIHNpdGUtdWwgcG9hdGUgdmEgZmkgb2ZmbGluZSB0ZW1wb3JhciDImWkgbnUgdmVpIG1haVxyXG4gICAgICAgICAgICAgICAgcHV0ZWEgYWNjZXNhIGNvbi10dWwgyJlpIHByb2JsZW1lIHBlIGNhcmUgdHJlYnVpZSBzxIMgbGVyZXpvbHZpLFxyXG4gICAgICAgICAgICAgICAgZXN0ZSBpbnV0aWzEgywgZGVvYXJlY2UgYWNlc3Qgc2l0ZSBlc3RlIG9ubGluZSAyNC83LlxyXG4gICAgICAgICAgICA8L1BlcmtQYW5lbD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgLnBlcmtzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnBlcmtzX19oZWFkaW5nLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLnBlcmtzX19ociB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wZXJrc19faGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFBlcmtQYW5lbCh7IHRpdGxlLCBpY29uLCBjaGlsZHJlbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVya3NfX3BlcmtcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJrX19pY29uLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcmtfX2ljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ljb259IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJwZXJrX190aXRsZVwiPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGVya19fZGVzY3JpcHRpb25cIj57Y2hpbGRyZW59PC9wPlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnBlcmtzX19wZXJrIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNTBweCA4MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgxN3B4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnBlcmtzX19wZXJrIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucGVya19faWNvbi10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucGVya19faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgucGVya19faWNvbiBzdmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC10ZXJ0aWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucGVya19fZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\Home\\\\Perks.js */"));
}

function PerkPanel({
  title,
  icon,
  children
}) {
  return __jsx("div", {
    className: "jsx-2238019012" + " " + "perks__perk",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2238019012" + " " + "perk__icon-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-2238019012" + " " + "perk__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), __jsx("h2", {
    className: "jsx-2238019012" + " " + "perk__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, title)), __jsx("p", {
    className: "jsx-2238019012" + " " + "perk__description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2238019012",
    __self: this
  }, ".perks__perk.jsx-2238019012{max-width:30%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:50px 80px;}@media screen and (max-width:817px){.perks__perk.jsx-2238019012{max-width:100%;}}.perk__icon-title.jsx-2238019012{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding-bottom:10px;margin-bottom:20px;border-bottom:2px solid var(--background-tertiary);}.perk__icon.jsx-2238019012{width:30px;height:30px;background-color:var(--background-quaternary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;border-radius:50%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.perk__icon svg{width:15px;height:15px;color:var(--accent-tertiary);-webkit-transition:color 300ms ease;transition:color 300ms ease;}.perk__description.jsx-2238019012{text-align:left;color:var(--text-primary);-webkit-transition:color 300ms ease;transition:color 300ms ease;line-height:30px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEhvbWVcXFBlcmtzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdGd0IsQUFHbUMsQUFRSyxBQUtOLEFBU0YsQUFXQSxBQU9LLFdBakJKLEFBV0EsR0FqQ1EsQ0FRcEIsQ0FnQzBCLE9BakJvQixBQVdqQixtQkFPRCxVQU5BLGlCQVhXLEtBWHBCLGdDQTZCRixVQXpDSyxBQW1DMUIsT0FPQSxnQ0FsQnNCLFlBWFksTUFZakIscUJBeEJJLGlCQUNyQixvQ0F3QjJCLG1DQVpILG9CQUNELG1CQUNnQyx5QkFXaEMsMEJBVnZCLG1FQVdBIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEhvbWVcXFBlcmtzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQZXJrcygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwicGVya3NcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJrc19faGVhZGluZy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJwZXJrc19faHJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInBlcmtzX19oZWFkaW5nXCI+RGUgY2UgZXN0ZSBtYWkgYnVuIGluZm9wbHVzPzwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPFBlcmtQYW5lbCB0aXRsZT1cIlZpdGV6xINcIiBpY29uPVwiYm9sdFwiPlxyXG4gICAgICAgICAgICAgICAgaW5mb3BsdXMgYSBmb3N0IGNvbmNlcHV0IGN1IGVmaWNpZW7Im8SDLCBhY2Nlc2liaWxpdGF0ZSDImWkgdml0ZXrEg1xyXG4gICAgICAgICAgICAgICAgZGUgw65uY8SDcmNhcmUgw65uIGNvbnNpZGVyYXJlLCBwZW50cnUgYSBjb25mZXJpIGNhbGN1bGF0b2FyZWxvclxyXG4gICAgICAgICAgICAgICAgyJljb2xhcmUgZGVmaWNpdGFyZSBvIGV4cGVyaWVuyJvEgyBwbMSDY3V0xIMuXHJcbiAgICAgICAgICAgIDwvUGVya1BhbmVsPlxyXG4gICAgICAgICAgICA8UGVya1BhbmVsIHRpdGxlPVwiQ29udmVuaWVuyJvEg1wiIGljb249XCJjb2ZmZWVcIj5cclxuICAgICAgICAgICAgICAgIEN1IHRyxINzxIN0dXJpIGbEg2N1dGUgcGVudHJ1IGEgdciZdXJhdmlhyJthIGF0w6J0IGNlbHVpIGNhcmUgcHJlZMSDLFxyXG4gICAgICAgICAgICAgICAgY8OidCDImWkgYSBlbGV2dWx1aSwgdG9hdGUgbmVjZXNpdMSDyJtpbGUgY2hlaWVzdW50IGxhIHVuIGNsaWNrXHJcbiAgICAgICAgICAgICAgICBkZXDEg3J0YXJlLCBjb25zdHJ1aXRlIGludHVpdGl2LlxyXG4gICAgICAgICAgICA8L1BlcmtQYW5lbD5cclxuICAgICAgICAgICAgPFBlcmtQYW5lbCB0aXRsZT1cIlV0aWxpdGF0ZVwiIGljb249XCJ0b29sc1wiPlxyXG4gICAgICAgICAgICAgICAgQW0gY3JlYXQgcGVudHJ1IGFjZXN0IHNpdGUgdXRpbGl0xIPIm2kgY2FyZSBjaGlhciBzdW50IGRvcml0ZSwgyJlpXHJcbiAgICAgICAgICAgICAgICBmb2xvc2l0b2FyZSDDrm52aWHIm2EgcmVhbMSDLCBjdW0gYXIgZmk6IG1vZCBwcm9pZWN0b3IsIHRlbcSDXHJcbiAgICAgICAgICAgICAgICDDrm50dW5lY2F0xIMsIMiZaSBhbHRlbGUuXHJcbiAgICAgICAgICAgIDwvUGVya1BhbmVsPlxyXG4gICAgICAgICAgICA8UGVya1BhbmVsIHRpdGxlPVwiU3RhYmlsaXRhdGVcIiBpY29uPVwibW91bnRhaW5cIj5cclxuICAgICAgICAgICAgICAgIFRlYW1hIGPEgyBzaXRlLXVsIHBvYXRlIHZhIGZpIG9mZmxpbmUgdGVtcG9yYXIgyJlpIG51IHZlaSBtYWlcclxuICAgICAgICAgICAgICAgIHB1dGVhIGFjY2VzYSBjb24tdHVsIMiZaSBwcm9ibGVtZSBwZSBjYXJlIHRyZWJ1aWUgc8SDIGxlcmV6b2x2aSxcclxuICAgICAgICAgICAgICAgIGVzdGUgaW51dGlsxIMsIGRlb2FyZWNlIGFjZXN0IHNpdGUgZXN0ZSBvbmxpbmUgMjQvNy5cclxuICAgICAgICAgICAgPC9QZXJrUGFuZWw+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgIC5wZXJrcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wZXJrc19faGVhZGluZy1jb250YWluZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5wZXJrc19faHIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucGVya3NfX2hlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBQZXJrUGFuZWwoeyB0aXRsZSwgaWNvbiwgY2hpbGRyZW4gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBlcmtzX19wZXJrXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGVya19faWNvbi10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJrX19pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtpY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicGVya19fdGl0bGVcIj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBlcmtfX2Rlc2NyaXB0aW9uXCI+e2NoaWxkcmVufTwvcD5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5wZXJrc19fcGVyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDUwcHggODBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MTdweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5wZXJrc19fcGVyayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnBlcmtfX2ljb24tdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnBlcmtfX2ljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLnBlcmtfX2ljb24gc3ZnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtdGVydGlhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnBlcmtfX2Rlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\Home\\\\Perks.js */"));
}

/***/ }),

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
    className: "jsx-4155357315" + " " + "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-4155357315" + " " + "contact__heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Vrei s\u0103 intri \xEEn contact cu noi?"), __jsx(ContactPanel, {
    title: "e-mail",
    icon: "envelope",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-4155357315",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "samplemail@example.com"), __jsx("p", {
    className: "jsx-4155357315",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "samplemail@example.com"), __jsx("p", {
    className: "jsx-4155357315",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "samplemail@example.com")), __jsx(ContactPanel, {
    title: "telefon",
    icon: "phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-4155357315",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "+070xxx00000xxx0000"), __jsx("p", {
    className: "jsx-4155357315",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "+070xxx00000xxx0000"), __jsx("p", {
    className: "jsx-4155357315",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "+070xxx00000xxx0000")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4155357315",
    __self: this
  }, ".contact.jsx-4155357315{width:100%;padding:100px 0;background-color:var(--contact);color:var(--text-secondary);-webkit-transition:color,background-color 300ms ease;transition:color,background-color 300ms ease;text-align:center;}.contact__heading.jsx-4155357315{margin:0 10px 50px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXENvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJ3QixBQUdnQyxBQVNRLFdBUkgsUUFTcEIsUUFSb0MsZ0NBQ0osNEJBQ2tCLGtHQUM1QixrQkFDdEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcZ2xvYmFsc1xcQ29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNvbnRhY3RfX2hlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIFZyZWkgc8SDIGludHJpIMOubiBjb250YWN0IGN1IG5vaT9cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPENvbnRhY3RQYW5lbCB0aXRsZT1cImUtbWFpbFwiIGljb249XCJlbnZlbG9wZVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+c2FtcGxlbWFpbEBleGFtcGxlLmNvbTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPnNhbXBsZW1haWxAZXhhbXBsZS5jb208L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5zYW1wbGVtYWlsQGV4YW1wbGUuY29tPC9wPlxyXG4gICAgICAgICAgICA8L0NvbnRhY3RQYW5lbD5cclxuICAgICAgICAgICAgPENvbnRhY3RQYW5lbCB0aXRsZT1cInRlbGVmb25cIiBpY29uPVwicGhvbmVcIj5cclxuICAgICAgICAgICAgICAgIDxwPiswNzB4eHgwMDAwMHh4eDAwMDA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4rMDcweHh4MDAwMDB4eHgwMDAwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+KzA3MHh4eDAwMDAweHh4MDAwMDwvcD5cclxuICAgICAgICAgICAgPC9Db250YWN0UGFuZWw+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250YWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCA1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29udGFjdFBhbmVsKHsgdGl0bGUsIGljb24sIGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0X19jb250YWN0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9fcGFuZWwtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtpY29ufSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNvbnRhY3RfX3BhbmVsLWhlYWRpbmdcIj57dGl0bGUudG9VcHBlckNhc2UoKX08L2gzPlxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiY29udGFjdF9fcGFuZWwtaHJcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RfX3BhbmVsLWNvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX2NvbnRhY3QtcGFuZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWN0X19jb250YWN0LXBhbmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19wYW5lbC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19wYW5lbC1pY29uLFxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX3BhbmVsLWhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdF9fcGFuZWwtaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdF9fcGFuZWwtaHIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19jb250YWN0LXBhbmVsIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\Contact.js */"));
}

function ContactPanel({
  title,
  icon,
  children
}) {
  return __jsx("div", {
    className: "jsx-1566445729" + " " + "contact__contact-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1566445729" + " " + "contact__panel-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  })), __jsx("h3", {
    className: "jsx-1566445729" + " " + "contact__panel-heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, title.toUpperCase()), __jsx("hr", {
    className: "jsx-1566445729" + " " + "contact__panel-hr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1566445729" + " " + "contact__panel-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, children), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1566445729",
    __self: this
  }, ".contact__contact-panel{display:inline-block;min-width:30%;margin:50px;text-align:left;}@media screen and (max-width:825px){.contact__contact-panel{min-width:100%;margin:0;padding:50px;}}.contact__panel-icon{color:var(--accent-primary);}.contact__panel-icon,.contact__panel-heading{display:inline-block;margin-right:20px;vertical-align:middle;}.contact__panel-heading{-webkit-letter-spacing:2px;-moz-letter-spacing:2px;-ms-letter-spacing:2px;letter-spacing:2px;}.contact__panel-hr{margin:20px 0;border:1px solid;}.contact__contact-panel p{color:var(--text-secondary);-webkit-letter-spacing:1px;-moz-letter-spacing:1px;-ms-letter-spacing:1px;letter-spacing:1px;margin:2px 0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXENvbnRhY3QuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0MrQixBQUcwQyxBQVFGLEFBT1MsQUFLUCxBQU1GLEFBSUwsQUFLYyxjQUpYLENBdEJKLE1BUkMsQUFvQkksR0FYRCxJQU1yQixBQW9CdUIsR0FKdkIsSUE5QmdCLEVBU1osRUFXc0IsUUFuQk4sY0FvQnBCLEVBbkJBLDhCQXVCQSw0QkFVaUIsYUFDakIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcZ2xvYmFsc1xcQ29udGFjdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRhY3QoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhY3RcIj5cclxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNvbnRhY3RfX2hlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIFZyZWkgc8SDIGludHJpIMOubiBjb250YWN0IGN1IG5vaT9cclxuICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgPENvbnRhY3RQYW5lbCB0aXRsZT1cImUtbWFpbFwiIGljb249XCJlbnZlbG9wZVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+c2FtcGxlbWFpbEBleGFtcGxlLmNvbTwvcD5cclxuICAgICAgICAgICAgICAgIDxwPnNhbXBsZW1haWxAZXhhbXBsZS5jb208L3A+XHJcbiAgICAgICAgICAgICAgICA8cD5zYW1wbGVtYWlsQGV4YW1wbGUuY29tPC9wPlxyXG4gICAgICAgICAgICA8L0NvbnRhY3RQYW5lbD5cclxuICAgICAgICAgICAgPENvbnRhY3RQYW5lbCB0aXRsZT1cInRlbGVmb25cIiBpY29uPVwicGhvbmVcIj5cclxuICAgICAgICAgICAgICAgIDxwPiswNzB4eHgwMDAwMHh4eDAwMDA8L3A+XHJcbiAgICAgICAgICAgICAgICA8cD4rMDcweHh4MDAwMDB4eHgwMDAwPC9wPlxyXG4gICAgICAgICAgICAgICAgPHA+KzA3MHh4eDAwMDAweHh4MDAwMDwvcD5cclxuICAgICAgICAgICAgPC9Db250YWN0UGFuZWw+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTAwcHggMDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb250YWN0KTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yLCBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19oZWFkaW5nIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTBweCA1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gQ29udGFjdFBhbmVsKHsgdGl0bGUsIGljb24sIGNoaWxkcmVuIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWN0X19jb250YWN0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFjdF9fcGFuZWwtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtpY29ufSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNvbnRhY3RfX3BhbmVsLWhlYWRpbmdcIj57dGl0bGUudG9VcHBlckNhc2UoKX08L2gzPlxyXG4gICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiY29udGFjdF9fcGFuZWwtaHJcIiAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhY3RfX3BhbmVsLWNvbnRlbnRcIj57Y2hpbGRyZW59PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX2NvbnRhY3QtcGFuZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWN0X19jb250YWN0LXBhbmVsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19wYW5lbC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19wYW5lbC1pY29uLFxyXG4gICAgICAgICAgICAgICAgLmNvbnRhY3RfX3BhbmVsLWhlYWRpbmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdF9fcGFuZWwtaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuY29udGFjdF9fcGFuZWwtaHIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5jb250YWN0X19jb250YWN0LXBhbmVsIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDJweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\Contact.js */"));
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
/* harmony import */ var _styles_theme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/theme */ "./styles/theme.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\globals\\DropdownMenu.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function DropdownMenu({
  isDropdownToggled
}) {
  const {
    0: cssTheme,
    1: setCssTheme
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(_styles_theme__WEBPACK_IMPORTED_MODULE_3__["light"]);

  const changeTheme = () => setCssTheme(cssTheme === _styles_theme__WEBPACK_IMPORTED_MODULE_3__["dark"] ? _styles_theme__WEBPACK_IMPORTED_MODULE_3__["light"] : _styles_theme__WEBPACK_IMPORTED_MODULE_3__["dark"]);

  return __jsx("div", {
    className: "jsx-2330730694" + " " + `dropdown-menu-header ${isDropdownToggled ? "dropdown-menu-header--active " : ""}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-2330730694" + " " + "dropdown-menu-header__ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(DropdownMenuAccordion, {
    title: "Exercitii",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, ["Clasa IX", "Clasa X", "Clasa XI"]), __jsx("hr", {
    className: "jsx-2330730694" + " " + "dropdown-menu-header__hr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), __jsx(DropdownMenuAccordion, {
    title: "Resurse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, ["Clasa IX", "Clasa X", "Clasa XI"]), __jsx("hr", {
    className: "jsx-2330730694" + " " + "dropdown-menu-header__hr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), __jsx("li", {
    onClick: changeTheme,
    className: "jsx-2330730694" + " " + "dropdown-menu-header__main-li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Tema ", cssTheme === _styles_theme__WEBPACK_IMPORTED_MODULE_3__["light"] ? "Intunecata" : "Luminoasa"), __jsx("hr", {
    className: "jsx-2330730694" + " " + "dropdown-menu-header__hr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), __jsx("li", {
    className: "jsx-2330730694" + " " + "dropdown-menu-header__main-li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Mod proiector"), __jsx("hr", {
    className: "jsx-2330730694" + " " + "dropdown-menu-header__hr",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx("li", {
    className: "jsx-2330730694" + " " + "dropdown-menu-header__main-li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Detalii cont")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: cssTheme.__hash,
    __self: this
  }, cssTheme), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2330730694",
    __self: this
  }, ".dropdown-menu-header{width:220px;height:calc(100vh - 60px);position:fixed;right:0;bottom:0;background-color:var(--background-secondary);z-index:-1;box-shadow:-4px 10px 10px rgba(0,0,0,0.2);overflow-y:auto;padding-top:30px;-webkit-transform:translateX(230px) translateZ(0);-ms-transform:translateX(230px) translateZ(0);transform:translateX(230px) translateZ(0);-webkit-transition:color,background-color,-webkit-transform 300ms ease;-webkit-transition:color,background-color,transform 300ms ease;transition:color,background-color,transform 300ms ease;}.dropdown-menu-header--active{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);}.dropdown-menu-header__hr{width:90%;}.dropdown-menu-header__ul{padding-top:0;padding-left:5px;list-style-type:none;}.dropdown-menu-header__main-li{font-weight:bold;font-size:1.2rem;cursor:pointer;position:relative;padding:10px 0 10px 10px;}.dropdown-menu-header__main-li:hover,.dropdown-menu-header__secondary-li:hover{background-color:var(--background-primary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;}.dropdown-menu-header__main-li:hover::before,.dropdown-menu-header__secondary-li:hover::before{content:\"\";width:5px;height:100%;background-color:var(--accent-primary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;position:absolute;left:0;top:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXERyb3Bkb3duTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErRCtCLEFBR2lDLEFBZVksQUFJZCxBQUlJLEFBTUcsQUFTMEIsQUFNaEMsVUF4QmYsQ0F5QmMsQ0E1Q2dCLEVBdUJULEdBTUEsSUFnQkwsVUFyQlMsRUFzQmtCLENBaEJ4QixJQTdCQSxLQXFDd0IsTUFQckIsR0FOdEIsQ0F2QlksUUFDQyxNQTZCZ0IsR0E1Qm9CLEVBMkNOLFlBaEMzQyxRQWtCQSx1QkE1QmUsV0FDa0MsR0FpQ2pELDZCQVNzQixVQXpDRixRQTBDVCxPQUNELENBMUNXLEtBMkNyQixZQTFDOEMsMElBQ2UsNkxBQzdEIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXERyb3Bkb3duTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbGlnaHQsIGRhcmsgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3Bkb3duTWVudSh7IGlzRHJvcGRvd25Ub2dnbGVkIH0pIHtcclxuICAgIGNvbnN0IFtjc3NUaGVtZSwgc2V0Q3NzVGhlbWVdID0gdXNlU3RhdGUobGlnaHQpO1xyXG4gICAgY29uc3QgY2hhbmdlVGhlbWUgPSAoKSA9PiBzZXRDc3NUaGVtZShjc3NUaGVtZSA9PT0gZGFyayA/IGxpZ2h0IDogZGFyayk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duLW1lbnUtaGVhZGVyICR7XHJcbiAgICAgICAgICAgICAgICBpc0Ryb3Bkb3duVG9nZ2xlZCA/IFwiZHJvcGRvd24tbWVudS1oZWFkZXItLWFjdGl2ZSBcIiA6IFwiXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX3VsXCI+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51QWNjb3JkaW9uIHRpdGxlPVwiRXhlcmNpdGlpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1tcIkNsYXNhIElYXCIsIFwiQ2xhc2EgWFwiLCBcIkNsYXNhIFhJXCJdfVxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVBY2NvcmRpb24gdGl0bGU9XCJSZXN1cnNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1tcIkNsYXNhIElYXCIsIFwiQ2xhc2EgWFwiLCBcIkNsYXNhIFhJXCJdfVxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjaGFuZ2VUaGVtZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBUZW1hIHtjc3NUaGVtZSA9PT0gbGlnaHQgPyBcIkludHVuZWNhdGFcIiA6IFwiTHVtaW5vYXNhXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIj5Nb2QgcHJvaWVjdG9yPC9saT5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9faHJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpXCI+RGV0YWxpaSBjb250PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICAgICB7Y3NzVGhlbWV9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIHsvKiA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgOnJvb3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1wcmltYXJ5OiAke2lzV2hpdGVUaGVtZSA/IFwiI2ZmZlwiIDogXCIjMWUxZTFlXCJ9O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1zZWNvbmRhcnk6ICR7aXNXaGl0ZVRoZW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjZjFmMWYxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIiMyYTJhMmFcIn07XHJcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5OiAke2lzV2hpdGVUaGVtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiI2RhZGFkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCIjNDM0NTQ1XCJ9O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5OiAke2lzV2hpdGVUaGVtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiIzJhMmEyYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCIjM2QzZDNkXCJ9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAtLXRleHQtcHJpbWFyeTogJHtpc1doaXRlVGhlbWUgPyBcIiMyYTJhMmFcIiA6IFwiI2YxZjFmMVwifTtcclxuICAgICAgICAgICAgICAgICAgICAtLXRleHQtc2Vjb25kYXJ5OiAke2lzV2hpdGVUaGVtZSA/IFwiI2YxZjFmMVwiIDogXCIjZTZlNmU2XCJ9O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tdGV4dC1idXR0b246ICMyYTJhMmE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC0tYWNjZW50LXByaW1hcnk6ICM1NmY1NWM7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1hY2NlbnQtc2Vjb25kYXJ5OiAjM2RiOGZmO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYWNjZW50LXRlcnRpYXJ5OiAjZmZjYzAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAtLWNvbnRhY3Q6ICR7aXNXaGl0ZVRoZW1lID8gXCIjMmEyYTJhXCIgOiBcIiMzZDNkM2RcIn07XHJcbiAgICAgICAgICAgICAgICAgICAgLS1mb290ZXI6ICMxZTFlMWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1ib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYm94LXNoYWRvdy1hY3RpdmU6IDAgNHB4IDE1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPiAqL31cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IC00cHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMzBweCkgdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgdHJhbnNmb3JtIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyLS1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGk6aG92ZXIsXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX3NlY29uZGFyeS1saTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpOmhvdmVyOjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX3NlY29uZGFyeS1saTpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVBY2NvcmRpb24oeyB0aXRsZSwgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgW2lzVG9nZ2xlZCwgdG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHRvZ2dsZSghaXNUb2dnbGVkKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX29wdGlvbi1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFuZ2xlLWRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiMkEyQTJBXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkcm9wZG93bi1tZW51LWhlYWRlcl9faWNvbiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1RvZ2dsZWQgPyBcImRyb3Bkb3duLW1lbnUtaGVhZGVyX19pY29uLS1hY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNUb2dnbGVkID8gXCJkcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudC0tYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50LXVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuLm1hcCgoY2hpbGQsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fc2Vjb25kYXJ5LWxpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YGNoaWxkXyR7aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fc2Vjb25kYXJ5LWxpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50LXVsIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fb3B0aW9uLWRyb3Bkb3duIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudC0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2ljb24tLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\DropdownMenu.js */"));
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
    className: "jsx-2702891509" + " " + "dropdown-menu-header__option-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, __jsx("li", {
    onClick: toggleDropdown,
    className: "jsx-2702891509" + " " + "dropdown-menu-header__main-li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, title, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "angle-down",
    color: "2A2A2A",
    className: `dropdown-menu-header__icon ${isToggled ? "dropdown-menu-header__icon--active" : ""}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-2702891509" + " " + `dropdown-menu-header__content ${isToggled ? "dropdown-menu-header__content--active" : ""}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("ul", {
    className: "jsx-2702891509" + " " + "dropdown-menu-header__content-ul",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, children.map((child, i) => __jsx("li", {
    key: `child_${i}`,
    className: "jsx-2702891509" + " " + "dropdown-menu-header__secondary-li",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, child)))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2702891509",
    __self: this
  }, ".dropdown-menu-header__secondary-li{padding:10px 0;font-size:1.1rem;cursor:pointer;position:relative;padding-left:20px;}.dropdown-menu-header__content-ul{list-style-type:none;padding-left:0;}.dropdown-menu-header__option-dropdown{overflow:hidden;}.dropdown-menu-header__content{margin-left:20px;height:0;-webkit-transition:height 300ms ease;transition:height 300ms ease;}.dropdown-menu-header__content--active{height:140px;}.dropdown-menu-header__icon{margin-left:20px;-webkit-transition:-webkit-transform 300ms ease;-webkit-transition:transform 300ms ease;transition:transform 300ms ease;}.dropdown-menu-header__icon--active{-webkit-transform:rotateZ(180deg);-ms-transform:rotateZ(180deg);transform:rotateZ(180deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXERyb3Bkb3duTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErSitCLEFBR29DLEFBUU0sQUFLTCxBQUlDLEFBTUosQUFJSSxBQUlTLGFBUDlCLEVBdkJxQixDQWFyQixDQUlhLEFBVXVCLElBbkJqQixLQVVjLE1BakJkLElBUW5CLFdBUHNCLGtCQUNBLGtCQUN0QixPQTJCQSxFQVpBLDZDQVNBIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXERyb3Bkb3duTWVudS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgbGlnaHQsIGRhcmsgfSBmcm9tIFwiLi4vLi4vc3R5bGVzL3RoZW1lXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3Bkb3duTWVudSh7IGlzRHJvcGRvd25Ub2dnbGVkIH0pIHtcclxuICAgIGNvbnN0IFtjc3NUaGVtZSwgc2V0Q3NzVGhlbWVdID0gdXNlU3RhdGUobGlnaHQpO1xyXG4gICAgY29uc3QgY2hhbmdlVGhlbWUgPSAoKSA9PiBzZXRDc3NUaGVtZShjc3NUaGVtZSA9PT0gZGFyayA/IGxpZ2h0IDogZGFyayk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duLW1lbnUtaGVhZGVyICR7XHJcbiAgICAgICAgICAgICAgICBpc0Ryb3Bkb3duVG9nZ2xlZCA/IFwiZHJvcGRvd24tbWVudS1oZWFkZXItLWFjdGl2ZSBcIiA6IFwiXCJcclxuICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX3VsXCI+XHJcbiAgICAgICAgICAgICAgICA8RHJvcGRvd25NZW51QWNjb3JkaW9uIHRpdGxlPVwiRXhlcmNpdGlpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1tcIkNsYXNhIElYXCIsIFwiQ2xhc2EgWFwiLCBcIkNsYXNhIFhJXCJdfVxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnVBY2NvcmRpb24gdGl0bGU9XCJSZXN1cnNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1tcIkNsYXNhIElYXCIsIFwiQ2xhc2EgWFwiLCBcIkNsYXNhIFhJXCJdfVxyXG4gICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnVBY2NvcmRpb24+XHJcbiAgICAgICAgICAgICAgICA8aHIgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyXCIgLz5cclxuICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpXCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjaGFuZ2VUaGVtZX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBUZW1hIHtjc3NUaGVtZSA9PT0gbGlnaHQgPyBcIkludHVuZWNhdGFcIiA6IFwiTHVtaW5vYXNhXCJ9XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGhyIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19oclwiIC8+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIj5Nb2QgcHJvaWVjdG9yPC9saT5cclxuICAgICAgICAgICAgICAgIDxociBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9faHJcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpXCI+RGV0YWxpaSBjb250PC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+XHJcbiAgICAgICAgICAgICAgICB7Y3NzVGhlbWV9XHJcbiAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIHsvKiA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgOnJvb3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1wcmltYXJ5OiAke2lzV2hpdGVUaGVtZSA/IFwiI2ZmZlwiIDogXCIjMWUxZTFlXCJ9O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1zZWNvbmRhcnk6ICR7aXNXaGl0ZVRoZW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gXCIjZjFmMWYxXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBcIiMyYTJhMmFcIn07XHJcbiAgICAgICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5OiAke2lzV2hpdGVUaGVtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiI2RhZGFkYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCIjNDM0NTQ1XCJ9O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5OiAke2lzV2hpdGVUaGVtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFwiIzJhMmEyYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogXCIjM2QzZDNkXCJ9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAtLXRleHQtcHJpbWFyeTogJHtpc1doaXRlVGhlbWUgPyBcIiMyYTJhMmFcIiA6IFwiI2YxZjFmMVwifTtcclxuICAgICAgICAgICAgICAgICAgICAtLXRleHQtc2Vjb25kYXJ5OiAke2lzV2hpdGVUaGVtZSA/IFwiI2YxZjFmMVwiIDogXCIjZTZlNmU2XCJ9O1xyXG4gICAgICAgICAgICAgICAgICAgIC0tdGV4dC1idXR0b246ICMyYTJhMmE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC0tYWNjZW50LXByaW1hcnk6ICM1NmY1NWM7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1hY2NlbnQtc2Vjb25kYXJ5OiAjM2RiOGZmO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYWNjZW50LXRlcnRpYXJ5OiAjZmZjYzAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAtLWNvbnRhY3Q6ICR7aXNXaGl0ZVRoZW1lID8gXCIjMmEyYTJhXCIgOiBcIiMzZDNkM2RcIn07XHJcbiAgICAgICAgICAgICAgICAgICAgLS1mb290ZXI6ICMxZTFlMWU7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1ib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tYm94LXNoYWRvdy1hY3RpdmU6IDAgNHB4IDE1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPiAqL31cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDYwcHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IC00cHggMTBweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyMzBweCkgdHJhbnNsYXRlWigwKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciwgdHJhbnNmb3JtIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyLS1hY3RpdmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2hyIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fdWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGk6aG92ZXIsXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX3NlY29uZGFyeS1saTpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19tYWluLWxpOmhvdmVyOjpiZWZvcmUsXHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX3NlY29uZGFyeS1saTpob3Zlcjo6YmVmb3JlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBEcm9wZG93bk1lbnVBY2NvcmRpb24oeyB0aXRsZSwgY2hpbGRyZW4gfSkge1xyXG4gICAgY29uc3QgW2lzVG9nZ2xlZCwgdG9nZ2xlXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGVEcm9wZG93biA9ICgpID0+IHRvZ2dsZSghaXNUb2dnbGVkKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX29wdGlvbi1kcm9wZG93blwiPlxyXG4gICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURyb3Bkb3dufVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd24tbWVudS1oZWFkZXJfX21haW4tbGlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImFuZ2xlLWRvd25cIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwiMkEyQTJBXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bkcm9wZG93bi1tZW51LWhlYWRlcl9faWNvbiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1RvZ2dsZWQgPyBcImRyb3Bkb3duLW1lbnUtaGVhZGVyX19pY29uLS1hY3RpdmVcIiA6IFwiXCJcclxuICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNUb2dnbGVkID8gXCJkcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudC0tYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50LXVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVuLm1hcCgoY2hpbGQsIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkcm9wZG93bi1tZW51LWhlYWRlcl9fc2Vjb25kYXJ5LWxpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YGNoaWxkXyR7aX1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y2hpbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fc2Vjb25kYXJ5LWxpIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRyb3Bkb3duLW1lbnUtaGVhZGVyX19jb250ZW50LXVsIHtcclxuICAgICAgICAgICAgICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fb3B0aW9uLWRyb3Bkb3duIHtcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9fY29udGVudC0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5kcm9wZG93bi1tZW51LWhlYWRlcl9faWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24tbWVudS1oZWFkZXJfX2ljb24tLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDE4MGRlZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\DropdownMenu.js */"));
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("h1", {
    className: "jsx-3518460930" + " " + "footer__heading",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "infoplus @ 2020"), __jsx("p", {
    className: "jsx-3518460930" + " " + "footer__more-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
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




function Header({
  theme,
  changeThemeHandler
}) {
  const {
    0: isDropdownToggled,
    1: toggleDropdown
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const toggleMenuDropdown = () => toggleDropdown(!isDropdownToggled);

  return __jsx("header", {
    className: "jsx-2136349924" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(SiteLogo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(IconsRightMenu, {
    isDropdownToggled: isDropdownToggled,
    toggleMenuDropdown: toggleMenuDropdown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_DropdownMenu__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isDropdownToggled: isDropdownToggled,
    theme: theme,
    changeThemeHandler: changeThemeHandler,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2136349924",
    __self: this
  }, ".header{width:100%;height:60px;background-color:var(--background-secondary);box-shadow:var(--box-shadow);color:var(--text-primary);position:fixed;top:0;padding:0 40px;z-index:100;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:color,background-color 300ms ease;transition:color,background-color 300ms ease;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQitCLEFBR2dDLFdBQ0MsWUFDaUMsNkNBQ2hCLDZCQUNILDBCQUNYLGVBQ1QsTUFDUyxlQUNILFlBQ0MsMEVBQ00sNkZBQ1csbUhBQ2dCLGtHQUNsRCIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxnbG9iYWxzXFxIZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCBEcm9wZG93bk1lbnUgZnJvbSBcIi4vRHJvcGRvd25NZW51XCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcih7IHRoZW1lLCBjaGFuZ2VUaGVtZUhhbmRsZXIgfSkge1xyXG4gICAgY29uc3QgW2lzRHJvcGRvd25Ub2dnbGVkLCB0b2dnbGVEcm9wZG93bl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB0b2dnbGVNZW51RHJvcGRvd24gPSAoKSA9PiB0b2dnbGVEcm9wZG93bighaXNEcm9wZG93blRvZ2dsZWQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJoZWFkZXJcIj5cclxuICAgICAgICAgICAgPFNpdGVMb2dvIC8+XHJcbiAgICAgICAgICAgIDxJY29uc1JpZ2h0TWVudVxyXG4gICAgICAgICAgICAgICAgaXNEcm9wZG93blRvZ2dsZWQ9e2lzRHJvcGRvd25Ub2dnbGVkfVxyXG4gICAgICAgICAgICAgICAgdG9nZ2xlTWVudURyb3Bkb3duPXt0b2dnbGVNZW51RHJvcGRvd259XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxEcm9wZG93bk1lbnVcclxuICAgICAgICAgICAgICAgIGlzRHJvcGRvd25Ub2dnbGVkPXtpc0Ryb3Bkb3duVG9nZ2xlZH1cclxuICAgICAgICAgICAgICAgIHRoZW1lPXt0aGVtZX1cclxuICAgICAgICAgICAgICAgIGNoYW5nZVRoZW1lSGFuZGxlcj17Y2hhbmdlVGhlbWVIYW5kbGVyfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNDBweDtcclxuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciwgYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJY29uc1JpZ2h0TWVudSh7IGlzRHJvcGRvd25Ub2dnbGVkLCB0b2dnbGVNZW51RHJvcGRvd24gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9faWNvbnMtcmlnaHRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX3NlYXJjaC1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNlYXJjaFwiIGNsYXNzTmFtZT1cImhlYWRlcl9faWNvblwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX191c2VyLWJ1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInVzZXJcIiBjbGFzc05hbWU9XCJoZWFkZXJfX2ljb25cIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19tZW51LWJ1dHRvblwiIG9uQ2xpY2s9e3RvZ2dsZU1lbnVEcm9wZG93bn0+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbj1cImJhcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGhlYWRlcl9fbWVudS1pY29uICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRHJvcGRvd25Ub2dnbGVkID8gXCJoZWFkZXJfX21lbnUtaWNvbi0tYWN0aXZlXCIgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlYWRlcl9fbWVudS10aXRsZVwiPk1FTklVPC9oND5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9faWNvbnMtcmlnaHQsXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX3NlYXJjaC1idXR0b24sXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX191c2VyLWJ1dHRvbixcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS10aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19pY29uLFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiB2YXIoLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGZpbGwgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtaWNvbi0tYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZVooOTBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTaXRlTG9nbygpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHN2Z1xyXG4gICAgICAgICAgICB3aWR0aD1cIjU3XCJcclxuICAgICAgICAgICAgaGVpZ2h0PVwiNTdcIlxyXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDU3IDU3XCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyX19zaXRlLWxvZ29cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjguNSA1N0M0NC4yNDAxIDU3IDU3IDQ0LjI0MDEgNTcgMjguNUM1NyAxMi43NTk5IDQ0LjI0MDEgMCAyOC41IDBDMTIuNzU5OSAwIDAgMTIuNzU5OSAwIDI4LjVDMCA0NC4yNDAxIDEyLjc1OTkgNTcgMjguNSA1N1pcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0yMS45NDY3IDIxLjUwNEMyMS4xNTczIDIxLjUwNCAyMC40ODUzIDIxLjIyNjcgMTkuOTMwNyAyMC42NzJDMTkuMzc2IDIwLjExNzMgMTkuMDk4NyAxOS40NDUzIDE5LjA5ODcgMTguNjU2QzE5LjA5ODcgMTcuODY2NyAxOS4zNzYgMTcuMTk0NyAxOS45MzA3IDE2LjY0QzIwLjQ4NTMgMTYuMDg1MyAyMS4xNTczIDE1LjgwOCAyMS45NDY3IDE1LjgwOEMyMi43MzYgMTUuODA4IDIzLjQwOCAxNi4wODUzIDIzLjk2MjcgMTYuNjRDMjQuNTE3MyAxNy4xOTQ3IDI0Ljc5NDcgMTcuODY2NyAyNC43OTQ3IDE4LjY1NkMyNC43OTQ3IDE5LjQ0NTMgMjQuNTE3MyAyMC4xMTczIDIzLjk2MjcgMjAuNjcyQzIzLjQwOCAyMS4yMjY3IDIyLjczNiAyMS41MDQgMjEuOTQ2NyAyMS41MDRaTTI0LjUzODcgMjMuMDcyVjQwSDE5LjM1NDdWMjMuMDcySDI0LjUzODdaTTM3LjEwNTcgMzYuMDY0SDMzLjEwNTdWMzAuNDk2SDI3LjUwNTdWMjYuNTI4SDMzLjEwNTdWMjEuMDg4SDM3LjEwNTdWMjYuNTI4SDQyLjY3MzdWMzAuNDk2SDM3LjEwNTdWMzYuMDY0WlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidmFyKC0tdGV4dC1zZWNvbmRhcnkpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX3NpdGUtbG9nbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\Header.js */"));
}

function IconsRightMenu({
  isDropdownToggled,
  toggleMenuDropdown
}) {
  return __jsx("div", {
    className: "jsx-4128229347" + " " + "header__icons-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4128229347" + " " + "header__search-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "search",
    className: "header__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/cont",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-4128229347" + " " + "header__user-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "user",
    className: "header__icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }))), __jsx("div", {
    onClick: toggleMenuDropdown,
    className: "jsx-4128229347" + " " + "header__menu-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "bars",
    className: `header__menu-icon ${isDropdownToggled ? "header__menu-icon--active" : ""}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }), __jsx("h4", {
    className: "jsx-4128229347" + " " + "header__menu-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "MENIU")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4128229347",
    __self: this
  }, ".header__icons-right,.header__menu-button{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header__search-button,.header__user-button,.header__menu-button{margin:0 15px;cursor:pointer;}.header__menu-title{margin-left:10px;font-weight:800;}.header__icon,.header__menu-icon{fill:var(--background-quaternary);-webkit-transition:fill 300ms ease;transition:fill 300ms ease;width:25px !important;height:25px;}.header__menu-icon{-webkit-transition:-webkit-transform 300ms ease;-webkit-transition:transform 300ms ease;transition:transform 300ms ease;}.header__menu-icon--active{-webkit-transform:rotateZ(90deg);-ms-transform:rotateZ(90deg);transform:rotateZ(90deg);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRStCLEFBSWtDLEFBT0MsQUFLRyxBQU1pQixBQU9GLEFBSVAsY0FyQlYsR0FLQyxZQUpwQixJQUtBLENBSytCLHdDQWxCUixhQTZCdkIsU0FWMEIsc0JBQ1YsRUFLaEIsVUFKQSxxQ0FwQkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcZ2xvYmFsc1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gXCIuL0Ryb3Bkb3duTWVudVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyB0aGVtZSwgY2hhbmdlVGhlbWVIYW5kbGVyIH0pIHtcclxuICAgIGNvbnN0IFtpc0Ryb3Bkb3duVG9nZ2xlZCwgdG9nZ2xlRHJvcGRvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdG9nZ2xlTWVudURyb3Bkb3duID0gKCkgPT4gdG9nZ2xlRHJvcGRvd24oIWlzRHJvcGRvd25Ub2dnbGVkKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxTaXRlTG9nbyAvPlxyXG4gICAgICAgICAgICA8SWNvbnNSaWdodE1lbnVcclxuICAgICAgICAgICAgICAgIGlzRHJvcGRvd25Ub2dnbGVkPXtpc0Ryb3Bkb3duVG9nZ2xlZH1cclxuICAgICAgICAgICAgICAgIHRvZ2dsZU1lbnVEcm9wZG93bj17dG9nZ2xlTWVudURyb3Bkb3dufVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25NZW51XHJcbiAgICAgICAgICAgICAgICBpc0Ryb3Bkb3duVG9nZ2xlZD17aXNEcm9wZG93blRvZ2dsZWR9XHJcbiAgICAgICAgICAgICAgICB0aGVtZT17dGhlbWV9XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VUaGVtZUhhbmRsZXI9e2NoYW5nZVRoZW1lSGFuZGxlcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSWNvbnNSaWdodE1lbnUoeyBpc0Ryb3Bkb3duVG9nZ2xlZCwgdG9nZ2xlTWVudURyb3Bkb3duIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2ljb25zLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19zZWFyY2gtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJoZWFkZXJfX2ljb25cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdXNlci1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ1c2VyXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fbWVudS1idXR0b25cIiBvbkNsaWNrPXt0b2dnbGVNZW51RHJvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJiYXJzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXJfX21lbnUtaWNvbiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Ryb3Bkb3duVG9nZ2xlZCA/IFwiaGVhZGVyX19tZW51LWljb24tLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJoZWFkZXJfX21lbnUtdGl0bGVcIj5NRU5JVTwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX2ljb25zLXJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19zZWFyY2gtYnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fdXNlci1idXR0b24sXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9faWNvbixcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogdmFyKC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWljb24tLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU2l0ZUxvZ28oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgd2lkdGg9XCI1N1wiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjU3XCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1NyA1N1wiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlcl9fc2l0ZS1sb2dvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTI4LjUgNTdDNDQuMjQwMSA1NyA1NyA0NC4yNDAxIDU3IDI4LjVDNTcgMTIuNzU5OSA0NC4yNDAxIDAgMjguNSAwQzEyLjc1OTkgMCAwIDEyLjc1OTkgMCAyOC41QzAgNDQuMjQwMSAxMi43NTk5IDU3IDI4LjUgNTdaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ2YXIoLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnkpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjEuOTQ2NyAyMS41MDRDMjEuMTU3MyAyMS41MDQgMjAuNDg1MyAyMS4yMjY3IDE5LjkzMDcgMjAuNjcyQzE5LjM3NiAyMC4xMTczIDE5LjA5ODcgMTkuNDQ1MyAxOS4wOTg3IDE4LjY1NkMxOS4wOTg3IDE3Ljg2NjcgMTkuMzc2IDE3LjE5NDcgMTkuOTMwNyAxNi42NEMyMC40ODUzIDE2LjA4NTMgMjEuMTU3MyAxNS44MDggMjEuOTQ2NyAxNS44MDhDMjIuNzM2IDE1LjgwOCAyMy40MDggMTYuMDg1MyAyMy45NjI3IDE2LjY0QzI0LjUxNzMgMTcuMTk0NyAyNC43OTQ3IDE3Ljg2NjcgMjQuNzk0NyAxOC42NTZDMjQuNzk0NyAxOS40NDUzIDI0LjUxNzMgMjAuMTE3MyAyMy45NjI3IDIwLjY3MkMyMy40MDggMjEuMjI2NyAyMi43MzYgMjEuNTA0IDIxLjk0NjcgMjEuNTA0Wk0yNC41Mzg3IDIzLjA3MlY0MEgxOS4zNTQ3VjIzLjA3MkgyNC41Mzg3Wk0zNy4xMDU3IDM2LjA2NEgzMy4xMDU3VjMwLjQ5NkgyNy41MDU3VjI2LjUyOEgzMy4xMDU3VjIxLjA4OEgzNy4xMDU3VjI2LjUyOEg0Mi42NzM3VjMwLjQ5NkgzNy4xMDU3VjM2LjA2NFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLXRleHQtc2Vjb25kYXJ5KVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19zaXRlLWxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\Header.js */"));
}

function SiteLogo() {
  return __jsx("svg", {
    width: "57",
    height: "57",
    viewBox: "0 0 57 57",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "jsx-566982029" + " " + "header__site-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("path", {
    d: "M28.5 57C44.2401 57 57 44.2401 57 28.5C57 12.7599 44.2401 0 28.5 0C12.7599 0 0 12.7599 0 28.5C0 44.2401 12.7599 57 28.5 57Z",
    fill: "var(--background-quaternary)",
    className: "jsx-566982029",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), __jsx("path", {
    d: "M21.9467 21.504C21.1573 21.504 20.4853 21.2267 19.9307 20.672C19.376 20.1173 19.0987 19.4453 19.0987 18.656C19.0987 17.8667 19.376 17.1947 19.9307 16.64C20.4853 16.0853 21.1573 15.808 21.9467 15.808C22.736 15.808 23.408 16.0853 23.9627 16.64C24.5173 17.1947 24.7947 17.8667 24.7947 18.656C24.7947 19.4453 24.5173 20.1173 23.9627 20.672C23.408 21.2267 22.736 21.504 21.9467 21.504ZM24.5387 23.072V40H19.3547V23.072H24.5387ZM37.1057 36.064H33.1057V30.496H27.5057V26.528H33.1057V21.088H37.1057V26.528H42.6737V30.496H37.1057V36.064Z",
    fill: "var(--text-secondary)",
    className: "jsx-566982029",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "566982029",
    __self: this
  }, ".header__site-logo{width:35px;height:35px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXEhlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5SCtCLEFBR2dDLFdBQ0MsWUFDaEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcZ2xvYmFsc1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgRHJvcGRvd25NZW51IGZyb20gXCIuL0Ryb3Bkb3duTWVudVwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoeyB0aGVtZSwgY2hhbmdlVGhlbWVIYW5kbGVyIH0pIHtcclxuICAgIGNvbnN0IFtpc0Ryb3Bkb3duVG9nZ2xlZCwgdG9nZ2xlRHJvcGRvd25dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgdG9nZ2xlTWVudURyb3Bkb3duID0gKCkgPT4gdG9nZ2xlRHJvcGRvd24oIWlzRHJvcGRvd25Ub2dnbGVkKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxTaXRlTG9nbyAvPlxyXG4gICAgICAgICAgICA8SWNvbnNSaWdodE1lbnVcclxuICAgICAgICAgICAgICAgIGlzRHJvcGRvd25Ub2dnbGVkPXtpc0Ryb3Bkb3duVG9nZ2xlZH1cclxuICAgICAgICAgICAgICAgIHRvZ2dsZU1lbnVEcm9wZG93bj17dG9nZ2xlTWVudURyb3Bkb3dufVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8RHJvcGRvd25NZW51XHJcbiAgICAgICAgICAgICAgICBpc0Ryb3Bkb3duVG9nZ2xlZD17aXNEcm9wZG93blRvZ2dsZWR9XHJcbiAgICAgICAgICAgICAgICB0aGVtZT17dGhlbWV9XHJcbiAgICAgICAgICAgICAgICBjaGFuZ2VUaGVtZUhhbmRsZXI9e2NoYW5nZVRoZW1lSGFuZGxlcn1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IsIGJhY2tncm91bmQtY29sb3IgMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSWNvbnNSaWdodE1lbnUoeyBpc0Ryb3Bkb3duVG9nZ2xlZCwgdG9nZ2xlTWVudURyb3Bkb3duIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJfX2ljb25zLXJpZ2h0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyX19zZWFyY2gtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzZWFyY2hcIiBjbGFzc05hbWU9XCJoZWFkZXJfX2ljb25cIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb250XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fdXNlci1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ1c2VyXCIgY2xhc3NOYW1lPVwiaGVhZGVyX19pY29uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlcl9fbWVudS1idXR0b25cIiBvbkNsaWNrPXt0b2dnbGVNZW51RHJvcGRvd259PlxyXG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgIGljb249XCJiYXJzXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BoZWFkZXJfX21lbnUtaWNvbiAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Ryb3Bkb3duVG9nZ2xlZCA/IFwiaGVhZGVyX19tZW51LWljb24tLWFjdGl2ZVwiIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJoZWFkZXJfX21lbnUtdGl0bGVcIj5NRU5JVTwvaDQ+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX2ljb25zLXJpZ2h0LFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19zZWFyY2gtYnV0dG9uLFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fdXNlci1idXR0b24sXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9faWNvbixcclxuICAgICAgICAgICAgICAgIC5oZWFkZXJfX21lbnUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsbDogdmFyKC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBmaWxsIDMwMG1zIGVhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlcl9fbWVudS1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19tZW51LWljb24tLWFjdGl2ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGVaKDkwZGVnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU2l0ZUxvZ28oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgd2lkdGg9XCI1N1wiXHJcbiAgICAgICAgICAgIGhlaWdodD1cIjU3XCJcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA1NyA1N1wiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlcl9fc2l0ZS1sb2dvXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgICBkPVwiTTI4LjUgNTdDNDQuMjQwMSA1NyA1NyA0NC4yNDAxIDU3IDI4LjVDNTcgMTIuNzU5OSA0NC4yNDAxIDAgMjguNSAwQzEyLjc1OTkgMCAwIDEyLjc1OTkgMCAyOC41QzAgNDQuMjQwMSAxMi43NTk5IDU3IDI4LjUgNTdaXCJcclxuICAgICAgICAgICAgICAgIGZpbGw9XCJ2YXIoLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnkpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMjEuOTQ2NyAyMS41MDRDMjEuMTU3MyAyMS41MDQgMjAuNDg1MyAyMS4yMjY3IDE5LjkzMDcgMjAuNjcyQzE5LjM3NiAyMC4xMTczIDE5LjA5ODcgMTkuNDQ1MyAxOS4wOTg3IDE4LjY1NkMxOS4wOTg3IDE3Ljg2NjcgMTkuMzc2IDE3LjE5NDcgMTkuOTMwNyAxNi42NEMyMC40ODUzIDE2LjA4NTMgMjEuMTU3MyAxNS44MDggMjEuOTQ2NyAxNS44MDhDMjIuNzM2IDE1LjgwOCAyMy40MDggMTYuMDg1MyAyMy45NjI3IDE2LjY0QzI0LjUxNzMgMTcuMTk0NyAyNC43OTQ3IDE3Ljg2NjcgMjQuNzk0NyAxOC42NTZDMjQuNzk0NyAxOS40NDUzIDI0LjUxNzMgMjAuMTE3MyAyMy45NjI3IDIwLjY3MkMyMy40MDggMjEuMjI2NyAyMi43MzYgMjEuNTA0IDIxLjk0NjcgMjEuNTA0Wk0yNC41Mzg3IDIzLjA3MlY0MEgxOS4zNTQ3VjIzLjA3MkgyNC41Mzg3Wk0zNy4xMDU3IDM2LjA2NEgzMy4xMDU3VjMwLjQ5NkgyNy41MDU3VjI2LjUyOEgzMy4xMDU3VjIxLjA4OEgzNy4xMDU3VjI2LjUyOEg0Mi42NzM3VjMwLjQ5NkgzNy4xMDU3VjM2LjA2NFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLXRleHQtc2Vjb25kYXJ5KVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyX19zaXRlLWxvZ28ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\Header.js */"));
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-1299000937 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1299000937 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__title-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, __jsx(LoginModalWave, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-1299000937 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Logheaza-te")), __jsx("div", {
    className: "jsx-1299000937 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panels",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1299000937 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "E-mail/Nume utilizator",
    inputType: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1299000937 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Parola",
    inputType: "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-1299000937 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__buttons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("button", {
    onClick: showLoginModalHandler,
    className: "jsx-1299000937 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "button--secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Renun\u021B\u0103"), __jsx("button", {
    className: "jsx-1299000937 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "button--primary-x",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Logare")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash,
    __self: this
  }, _styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1299000937",
    __self: this
  }, ".modal.jsx-1299000937{width:30%;}.modal__buttons-container.jsx-1299000937{margin-right:40px;}.modal__input-panel.jsx-1299000937{width:80%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXExvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDd0IsQUFHK0IsQUFJUSxBQUlSLFVBUGQsQUFRQSxRQUpBIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXExvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IElucHV0QXJlYSBmcm9tIFwiLi4vdXRpbHMvSW5wdXRBcmVhXCI7XHJcbmltcG9ydCBmb3JtTW9kYWwgZnJvbSBcIi4uLy4uL3N0eWxlcy9mb3JtTW9kYWxcIjtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oeyBzaG93TG9naW5Nb2RhbEhhbmRsZXIgfSkge1xyXG4gICAgY29uc3QgW251bWVVdGlsaXphdG9yLCBzZXROdW1lVXRpbGl6YXRvcl0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtwYXJvbGEsIHNldFBhcm9sYV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib3ZlcmxheS1kYXJrZW5lclwiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXtzaG93TG9naW5Nb2RhbEhhbmRsZXJ9XHJcbiAgICAgICAgICAgID48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9fdGl0bGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExvZ2luTW9kYWxXYXZlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm1vZGFsX190aXRsZVwiPkxvZ2hlYXphLXRlPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faW5wdXQtcGFuZWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faW5wdXQtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFLW1haWwvTnVtZSB1dGlsaXphdG9yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2lucHV0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFyZWEgdGl0bGU9XCJQYXJvbGFcIiBpbnB1dFR5cGU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2J1dHRvbnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi0tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dMb2dpbk1vZGFsSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVudW7Im8SDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi0tcHJpbWFyeS14XCI+TG9nYXJlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2Zvcm1Nb2RhbH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAubW9kYWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1vZGFsX19idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tb2RhbF9faW5wdXQtcGFuZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExvZ2luTW9kYWxXYXZlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjQ2IDE4NFwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsX193YXZlXCJcclxuICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMCAwTDY0NiA5LjUzNjc0ZS0wN1YxNTUuOTExQzY0NiAxNTUuOTExIDU4MC41OSAxNzkuMzkzIDQ2OC4yIDE4Mi42MkMzNTUuODEgMTg1Ljg0NyAyODUuMjY3IDE3MS40ODggMjA3LjEzIDE1NS45MTFDNDYuMDI3IDEyMy43OTMgMS45MDczNWUtMDYgMTU1LjkxMSAxLjkwNzM1ZS0wNiAxNTUuOTExTDAgMFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLWFjY2VudC1zZWNvbmRhcnkpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\Login.js */"));
}

function LoginModalWave() {
  return __jsx("svg", {
    viewBox: "0 0 646 184",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "modal__wave",
    preserveAspectRatio: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("path", {
    d: "M0 0L646 9.53674e-07V155.911C646 155.911 580.59 179.393 468.2 182.62C355.81 185.847 285.267 171.488 207.13 155.911C46.027 123.793 1.90735e-06 155.911 1.90735e-06 155.911L0 0Z",
    fill: "var(--accent-secondary)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
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
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__title-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, __jsx(RegisterModalWave, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }), __jsx("h1", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "\xCEnregistreaz\u0103-te")), __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panels",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Nume",
    inputType: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Prenume",
    inputType: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Jude\u021B",
    isSelect: true,
    optionValues: ["Alba", "Cluj", "Bistrita-Nasaud"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Profesie",
    isSelect: true,
    optionValues: ["Elev", "Profesor"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Nume Utilizator",
    inputType: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "E-mail",
    inputType: "text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__input-panel modal__input-panel--last",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "Parola",
    inputType: "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  })), __jsx("div", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "modal__buttons-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, __jsx("button", {
    onClick: showRegisterModalHandler,
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "button--secondary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "Renun\u021B\u0103"), __jsx("button", {
    className: "jsx-502963944 " + `jsx-${_styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash}` + " " + "button--primary-ix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Creeaz\u0103")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"].__hash,
    __self: this
  }, _styles_formModal__WEBPACK_IMPORTED_MODULE_3__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "502963944",
    __self: this
  }, ".modal.jsx-502963944{width:50%;}.modal__input-panel.jsx-502963944{width:40%;}.modal__buttons-container.jsx-502963944{margin-right:60px;}.modal__input-panel--last.jsx-502963944{width:85%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXGdsb2JhbHNcXFJlZ2lzdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlFd0IsQUFHK0IsQUFJQSxBQUlRLEFBSVIsVUFYZCxBQUlBLEFBUUEsUUFKQSIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxnbG9iYWxzXFxSZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJbnB1dEFyZWEgZnJvbSBcIi4uL3V0aWxzL0lucHV0QXJlYVwiO1xyXG5pbXBvcnQgZm9ybU1vZGFsIGZyb20gXCIuLi8uLi9zdHlsZXMvZm9ybU1vZGFsXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZWdpc3Rlcih7IHNob3dSZWdpc3Rlck1vZGFsSGFuZGxlciB9KSB7XHJcbiAgICBjb25zdCBbbnVtZSwgc2V0TnVtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtwcmVudW1lLCBzZXRQcmVudW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW2p1ZGV0LCBzZXRKdWRldF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IFtudW1lVXRpbGl6YXRvciwgc2V0TnVtZVV0aWxpemF0b3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW3Bhcm9sYSwgc2V0UGFyb2xhXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvdmVybGF5LWRhcmtlbmVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dSZWdpc3Rlck1vZGFsSGFuZGxlcn1cclxuICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX190aXRsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmVnaXN0ZXJNb2RhbFdhdmUgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlXCI+w45ucmVnaXN0cmVhesSDLXRlPC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faW5wdXQtcGFuZWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faW5wdXQtcGFuZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0QXJlYSB0aXRsZT1cIk51bWVcIiBpbnB1dFR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19pbnB1dC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBcmVhIHRpdGxlPVwiUHJlbnVtZVwiIGlucHV0VHlwZT1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2lucHV0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiSnVkZcibXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25WYWx1ZXM9e1tcIkFsYmFcIiwgXCJDbHVqXCIsIFwiQmlzdHJpdGEtTmFzYXVkXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2lucHV0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFyZWFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiUHJvZmVzaWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvblZhbHVlcz17W1wiRWxldlwiLCBcIlByb2Zlc29yXCJdfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2lucHV0LXBhbmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFyZWEgdGl0bGU9XCJOdW1lIFV0aWxpemF0b3JcIiBpbnB1dFR5cGU9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19pbnB1dC1wYW5lbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRBcmVhIHRpdGxlPVwiRS1tYWlsXCIgaW5wdXRUeXBlPVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbF9faW5wdXQtcGFuZWwgbW9kYWxfX2lucHV0LXBhbmVsLS1sYXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dEFyZWEgdGl0bGU9XCJQYXJvbGFcIiBpbnB1dFR5cGU9XCJwYXNzd29yZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2J1dHRvbnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi0tc2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3dSZWdpc3Rlck1vZGFsSGFuZGxlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVudW7Im8SDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi0tcHJpbWFyeS1peFwiPkNyZWVhesSDPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2Zvcm1Nb2RhbH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAubW9kYWwge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1vZGFsX19pbnB1dC1wYW5lbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubW9kYWxfX2J1dHRvbnMtY29udGFpbmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1vZGFsX19pbnB1dC1wYW5lbC0tbGFzdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmVnaXN0ZXJNb2RhbFdhdmUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2NDYgMTg0XCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWxfX3dhdmVcIlxyXG4gICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0wIDBMNjQ2IDkuNTM2NzRlLTA3VjE1NS45MTFDNjQ2IDE1NS45MTEgNTgwLjU5IDE3OS4zOTMgNDY4LjIgMTgyLjYyQzM1NS44MSAxODUuODQ3IDI4NS4yNjcgMTcxLjQ4OCAyMDcuMTMgMTU1LjkxMUM0Ni4wMjcgMTIzLjc5MyAxLjkwNzM1ZS0wNiAxNTUuOTExIDEuOTA3MzVlLTA2IDE1NS45MTFMMCAwWlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidmFyKC0tYWNjZW50LXByaW1hcnkpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\globals\\\\Register.js */"));
}

function RegisterModalWave() {
  return __jsx("svg", {
    viewBox: "0 0 646 184",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: "modal__wave",
    preserveAspectRatio: "none",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("path", {
    d: "M0 0L646 9.53674e-07V155.911C646 155.911 580.59 179.393 468.2 182.62C355.81 185.847 285.267 171.488 207.13 155.911C46.027 123.793 1.90735e-06 155.911 1.90735e-06 155.911L0 0Z",
    fill: "var(--accent-primary)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
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
    className: "jsx-3910668958",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, title), isSelect ? __jsx("select", {
    className: "jsx-3910668958",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, optionValues.map((optionValue, i) => __jsx("option", {
    key: `optiune_${i}`,
    className: "jsx-3910668958",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, optionValue))) : __jsx("input", {
    type: inputType,
    className: "jsx-3910668958",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3910668958",
    __self: this
  }, "input.jsx-3910668958,select.jsx-3910668958{width:100%;height:45px;border-radius:50px;border:1px solid var(--background-quaternary);outline:0;padding-left:10px;color:var(--text-primary);background-color:transparent;}option.jsx-3910668958{background-color:var(--background-primary);}h3.jsx-3910668958{text-align:left;margin-bottom:10px;text-transform:uppercase;color:var(--text-primary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXHV0aWxzXFxJbnB1dEFyZWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0J3QixBQUlnQyxBQVdnQyxBQUkzQixXQWRKLEtBZU8sT0FkQSxZQWVNLE9BZHFCLENBU2xELGlCQU04QiwwQkFDOUIsRUFmYyxVQUNRLGtCQUNRLDBCQUNHLDZCQUNqQyIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFx1dGlsc1xcSW5wdXRBcmVhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRBcmVhKHtcclxuICAgIHRpdGxlLFxyXG4gICAgaW5wdXRUeXBlLFxyXG4gICAgaXNTZWxlY3QgPSBmYWxzZSxcclxuICAgIG9wdGlvblZhbHVlcyA9IFtdXHJcbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxyXG4gICAgICAgICAgICB7aXNTZWxlY3QgPyAoXHJcbiAgICAgICAgICAgICAgICA8c2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgIHtvcHRpb25WYWx1ZXMubWFwKChvcHRpb25WYWx1ZSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17YG9wdGl1bmVfJHtpfWB9PntvcHRpb25WYWx1ZX08L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9e2lucHV0VHlwZX0gLz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgaW5wdXQsXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJhY2tncm91bmQtcXVhdGVybmFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0bGluZTogMDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgb3B0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGgzIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\utils\\\\InputArea.js */"));
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


const iconNames = ["faSearch", "faUser", "faBars", "faAngleDown", "faCheck", "faBolt", "faLightbulb", "faSignInAlt", "faEllipsisH", "faCoffee", "faTools", "faMountain", "faEnvelope", "faPhone", "faArrowRight"];
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"].add(iconNames.map(iconName => _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_0__[iconName]));
/* harmony default export */ __webpack_exports__["default"] = (_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_1__["library"]);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

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
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
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

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

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
    var isPrefetched = prefetched[this.getPaths()[0]];

    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();

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

    var [href, asPath] = this.getPaths();

    _router.default.prefetch(href, asPath, options);

    prefetched[href] = true;
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


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

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


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

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
    })).then(res => {
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


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
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
        err
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
      Component
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

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => Component.__N_SSG ? this._getStaticData(as) : Component.__N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(err => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
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

        resolve(this.fetchComponent('/_error').then(Component => {
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
        }));
      });
    });
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

      this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](toRoute(pathname)).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _configs_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../configs/icons */ "./configs/icons.js");
/* harmony import */ var _components_globals_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/globals/Header */ "./components/globals/Header.js");
/* harmony import */ var _components_globals_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/globals/Contact */ "./components/globals/Contact.js");
/* harmony import */ var _components_globals_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/globals/Footer */ "./components/globals/Footer.js");
/* harmony import */ var _components_Home_Main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Home/Main */ "./components/Home/Main.js");
/* harmony import */ var _components_Home_Perks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Home/Perks */ "./components/Home/Perks.js");
/* harmony import */ var _styles_mainStyling__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/mainStyling */ "./styles/mainStyling.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;







function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_components_globals_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }), __jsx(_components_Home_Main__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), __jsx(_components_Home_Perks__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx(_components_globals_Contact__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(_components_globals_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_mainStyling__WEBPACK_IMPORTED_MODULE_8__["default"].__hash,
    __self: this
  }, _styles_mainStyling__WEBPACK_IMPORTED_MODULE_8__["default"]));
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
const _defaultExport = new String("@-webkit-keyframes modalAnimation-jsx-1664834705{from{opacity:0;-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);}to{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}@keyframes modalAnimation-jsx-1664834705{from{opacity:0;-webkit-transform:translateY(-50px);-ms-transform:translateY(-50px);transform:translateY(-50px);}to{opacity:1;-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0);}}.overlay-darkener.jsx-1664834705{width:100%;height:100%;position:fixed;background-color:rgba(0,0,0,0.8);z-index:50;}.modal.jsx-1664834705{max-height:80%;background-color:var(--background-primary);box-shadow:var(--box-shadow);overflow:auto;border-radius:10px;position:fixed;top:100px;left:0;right:0;z-index:98;margin:auto;-webkit-animation:modalAnimation-jsx-1664834705 300ms ease;animation:modalAnimation-jsx-1664834705 300ms ease;}.modal__title-container.jsx-1664834705{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:25%;}.modal__title.jsx-1664834705{position:absolute;z-index:99;margin-top:-5px;text-transform:uppercase;color:var(--text-button);}.modal__input-panels.jsx-1664834705{padding:30px 0;text-align:center;}.modal__input-panel.jsx-1664834705{display:inline-block;margin:20px 15px;}.modal__buttons-container.jsx-1664834705{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-top:30px;}.modal__wave{width:100%;height:100%;}@media screen and (max-width:756px){.modal.jsx-1664834705{width:90% !important;margin-top:-30px;}.modal__title.jsx-1664834705{text-align:center;}.modal__input-panel.jsx-1664834705{width:auto !important;margin-left:20px;margin-right:20px;display:block;}.modal__buttons-container.jsx-1664834705{margin-right:20px !important;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXHN0eWxlc1xcZm9ybU1vZGFsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVrQixBQUl1QixBQUlBLEFBS0gsQUFRSSxBQWVGLEFBUUssQUFRSCxBQUtNLEFBS1IsQUFNRixBQU1jLEFBSUgsQUFHSSxBQU1PLFVBbEZELEFBSUosQ0FLaEIsQUF1REEsSUEvQytCLEFBK0J6QixHQVJQLEFBa0NYLEdBckJpQixBQWlCSSxDQU9BLENBbkVOLEFBdURuQixNQXhCb0IsQUEwQ2hCLElBbENKLEtBdEN3QyxBQTJDeEMsQUFpQkksQ0FPc0IsTUFwQ0csWUFxQ1AsQ0E3RFcsWUF5QkosQ0EvQmQsQUFvRVgsR0FoRHVCLEFBMEJFLFFBN0M3QixLQU1rQixPQWRkLENBdUNKLE1BeEJ1QixLQW5CbkIsY0FvQmUsZUFDTCxVQUNILE9BQ0MsUUFDRyxXQUNDLEFBaUNJLEVBMUJHLFVBTmlCLElBaUN4QywrRUExQmUsV0FDQSxXQUNmLEtBUkEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcc3R5bGVzXFxmb3JtTW9kYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3NzYFxyXG4gICAgQGtleWZyYW1lcyBtb2RhbEFuaW1hdGlvbiB7XHJcbiAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvIHtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5vdmVybGF5LWRhcmtlbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgICAgICB6LWluZGV4OiA1MDtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWwge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDgwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXByaW1hcnkpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgIHRvcDogMTAwcHg7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgICB6LWluZGV4OiA5ODtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgYW5pbWF0aW9uOiBtb2RhbEFuaW1hdGlvbiAzMDBtcyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbF9fdGl0bGUtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyNSU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vZGFsX190aXRsZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDk5O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1idXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbF9faW5wdXQtcGFuZWxzIHtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2RhbF9faW5wdXQtcGFuZWwge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBtYXJnaW46IDIwcHggMTVweDtcclxuICAgIH1cclxuXHJcbiAgICAubW9kYWxfX2J1dHRvbnMtY29udGFpbmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICA6Z2xvYmFsKC5tb2RhbF9fd2F2ZSkge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTZweCkge1xyXG4gICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MCUgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9fdGl0bGUge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tb2RhbF9faW5wdXQtcGFuZWwge1xyXG4gICAgICAgICAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1vZGFsX19idXR0b25zLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuYDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\styles\\\\formModal.js */");

_defaultExport.__hash = "1664834705";
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
const _defaultExport = new String("*{box-sizing:border-box;}html,body{margin:0;padding:0;font-family:\"Red Hat Display\",Arial,sans-serif;background-color:var(--background-primary);-webkit-transition:background-color 300ms ease;transition:background-color 300ms ease;}h1,h2,h3,p{margin:0;padding:0;}h1,h2,h3{font-weight:800;}h1{font-size:3rem;}h2{font-size:2rem;}h3{font-size:1.5rem;}a{color:inherit;font-weight:800;}ul{margin:0;}hr{border-color:var(--background-tertiary);border-style:solid;}button{width:170px;height:45px;display:inline-block;box-shadow:var(--box-shadow);text-transform:uppercase;text-align:center;line-height:35px;border:none;font-family:\"Red Hat Display\";border-radius:50px;cursor:pointer;-webkit-transition:box-shadow 300ms ease;transition:box-shadow 300ms ease;}button:focus{outline:none;}button:hover{box-shadow:var(--box-shadow-active);}button svg{margin-left:10px;}.button--primary-ix{background-color:var(--accent-primary);color:var(--text-button);}.button--secondary-ix{background-color:var(--background-quaternary);color:var(--accent-primary);}.button--primary-x{background-color:var(--accent-secondary);color:var(--text-button);}.button--secondary{background-color:transparent;box-shadow:none;font-weight:bold;-webkit-transition:color 300ms linear;transition:color 300ms linear;color:var(--text-primary);width:150px;}.button--secondary:hover{box-shadow:none;color:var(--accent-tertiary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXHN0eWxlc1xcbWFpblN0eWxpbmcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRXlCLEFBRytCLEFBS2IsQUFXQSxBQU9PLEFBSUQsQUFHQSxBQUdFLEFBSUgsQUFLTCxBQUkrQixBQUs1QixBQWVDLEFBR3VCLEFBSW5CLEFBSXNCLEFBS08sQUFLTCxBQUtaLEFBUWIsU0E5Rk4sQUFXQSxBQTBCZCxHQVNnQixDQWVoQixDQTdCb0IsQ0FWcEIsQUFHQSxDQVBBLEFBNkVpQyxDQW5FakMsQUF3Q0EsRUFuRXFELEFBV3JELEdBakJBLEVBb0R5QixLQXdDTCxDQXREcEIsTUErQkEsR0FRNkIsQ0EvQk4sQ0F5Q00sSUFsQ0ksQUF3Q1osQUFRckIsQ0FuQmdDLGFBbkNoQyxHQStDa0MsRUFoQmxDLEVBdkUrQyxBQWlGL0MsUUFsQzZCLEFBNkI3Qix5QkE1QnNCLFVBL0NxQixRQWdEdEIsYUF1Q1MsSUF0Q2QsWUFDa0IsVUFzQ2xCLFlBQ2hCLFFBdEN1QixtQkFsRHZCLEFBbURtQixlQUNrQiwwRUFDckMiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcc3R5bGVzXFxtYWluU3R5bGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjc3MuZ2xvYmFsYFxyXG4gICAgKiB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIH1cclxuXHJcbiAgICBodG1sLFxyXG4gICAgYm9keSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUmVkIEhhdCBEaXNwbGF5XCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtcHJpbWFyeSk7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAzMDBtcyBlYXNlO1xyXG4gICAgfVxyXG5cclxuICAgIGgxLFxyXG4gICAgaDIsXHJcbiAgICBoMyxcclxuICAgIHAge1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIGgxLFxyXG4gICAgaDIsXHJcbiAgICBoMyB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIH1cclxuXHJcbiAgICBoMSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgfVxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuICAgIGgzIHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICBhIHtcclxuICAgICAgICBjb2xvcjogaW5oZXJpdDtcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgfVxyXG5cclxuICAgIHVsIHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcblxyXG4gICAgaHIge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeSk7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIH1cclxuXHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxNzBweDtcclxuICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICBmb250LWZhbWlseTogXCJSZWQgSGF0IERpc3BsYXlcIjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDMwMG1zIGVhc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93LWFjdGl2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uIHN2ZyB7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbi0tcHJpbWFyeS1peCB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJ1dHRvbik7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbi0tc2Vjb25kYXJ5LWl4IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnkpO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmJ1dHRvbi0tcHJpbWFyeS14IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1idXR0b24pO1xyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b24tLXNlY29uZGFyeSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAzMDBtcyBsaW5lYXI7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgfVxyXG4gICAgLmJ1dHRvbi0tc2Vjb25kYXJ5OmhvdmVyIHtcclxuICAgICAgICBib3gtc2hhZG93OiBub25lO1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtdGVydGlhcnkpO1xyXG4gICAgfVxyXG5gO1xyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\styles\\\\mainStyling.js */");

_defaultExport.__hash = "1728436269";
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
const light = new String(":root{--background-primary:#fff;--background-secondary:#f1f1f1;--background-tertiary:#dadada;--background-quaternary:#2a2a2a;--text-primary:#2a2a2a;--text-secondary:#f1f1f1;--text-button:#2a2a2a;--accent-primary:#56f55c;--accent-secondary:#3db8ff;--accent-tertiary:#ffcc00;--contact:#2a2a2a;--footer:#1e1e1e;--box-shadow:0px 4px 10px rgba(0,0,0,0.2);--box-shadow-active:0 4px 15px 5px rgba(0,0,0,0.2);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXHN0eWxlc1xcdGhlbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQytCLEFBR21DLDBCQUNLLCtCQUNELDhCQUNFLGdDQUVULHVCQUNFLHlCQUNILHNCQUVHLHlCQUNFLDJCQUNELDBCQUVSLGtCQUNELGlCQUM0QiwwQ0FDUyxtREFDMUQiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcc3R5bGVzXFx0aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjc3MgZnJvbSBcInN0eWxlZC1qc3gvY3NzXCI7XHJcbmV4cG9ydCBjb25zdCBsaWdodCA9IGNzcy5nbG9iYWxgXHJcbiAgICA6cm9vdCB7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLXByaW1hcnk6ICNmZmY7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLXNlY29uZGFyeTogI2YxZjFmMTtcclxuICAgICAgICAtLWJhY2tncm91bmQtdGVydGlhcnk6ICNkYWRhZGE7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLXF1YXRlcm5hcnk6ICMyYTJhMmE7XHJcblxyXG4gICAgICAgIC0tdGV4dC1wcmltYXJ5OiAjMmEyYTJhO1xyXG4gICAgICAgIC0tdGV4dC1zZWNvbmRhcnk6ICNmMWYxZjE7XHJcbiAgICAgICAgLS10ZXh0LWJ1dHRvbjogIzJhMmEyYTtcclxuXHJcbiAgICAgICAgLS1hY2NlbnQtcHJpbWFyeTogIzU2ZjU1YztcclxuICAgICAgICAtLWFjY2VudC1zZWNvbmRhcnk6ICMzZGI4ZmY7XHJcbiAgICAgICAgLS1hY2NlbnQtdGVydGlhcnk6ICNmZmNjMDA7XHJcblxyXG4gICAgICAgIC0tY29udGFjdDogIzJhMmEyYTtcclxuICAgICAgICAtLWZvb3RlcjogIzFlMWUxZTtcclxuICAgICAgICAtLWJveC1zaGFkb3c6IDBweCA0cHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93LWFjdGl2ZTogMCA0cHggMTVweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRhcmsgPSBjc3MuZ2xvYmFsYFxyXG4gICAgOnJvb3Qge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1wcmltYXJ5OiAjMWUxZTFlO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1zZWNvbmRhcnk6ICMyYTJhMmE7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5OiAjNDM0NTQ1O1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5OiAjODU4NTg1O1xyXG5cclxuICAgICAgICAtLXRleHQtcHJpbWFyeTogI2YxZjFmMTtcclxuICAgICAgICAtLXRleHQtc2Vjb25kYXJ5OiAjZTZlNmU2O1xyXG4gICAgICAgIC0tdGV4dC1idXR0b246ICMyYTJhMmE7XHJcblxyXG4gICAgICAgIC0tYWNjZW50LXByaW1hcnk6ICM1NmY1NWM7XHJcbiAgICAgICAgLS1hY2NlbnQtc2Vjb25kYXJ5OiAjM2RiOGZmO1xyXG4gICAgICAgIC0tYWNjZW50LXRlcnRpYXJ5OiAjZmZjYzAwO1xyXG5cclxuICAgICAgICAtLWNvbnRhY3Q6ICMzZDNkM2Q7XHJcbiAgICAgICAgLS1mb290ZXI6ICMxZTFlMWU7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIC0tYm94LXNoYWRvdy1hY3RpdmU6IDAgNHB4IDE1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuYDtcclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\styles\\\\theme.js */");
light.__hash = "1462208163";
const dark = new String(":root{--background-primary:#1e1e1e;--background-secondary:#2a2a2a;--background-tertiary:#434545;--background-quaternary:#858585;--text-primary:#f1f1f1;--text-secondary:#e6e6e6;--text-button:#2a2a2a;--accent-primary:#56f55c;--accent-secondary:#3db8ff;--accent-tertiary:#ffcc00;--contact:#3d3d3d;--footer:#1e1e1e;--box-shadow:0px 4px 10px rgba(0,0,0,0.2);--box-shadow-active:0 4px 15px 5px rgba(0,0,0,0.2);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXHN0eWxlc1xcdGhlbWUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUI4QixBQUdzQyw2QkFDRSwrQkFDRCw4QkFDRSxnQ0FFVCx1QkFDRSx5QkFDSCxzQkFFRyx5QkFDRSwyQkFDRCwwQkFFUixrQkFDRCxpQkFDNEIsMENBQ1MsbURBQzFEIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXHN0eWxlc1xcdGhlbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY3NzIGZyb20gXCJzdHlsZWQtanN4L2Nzc1wiO1xyXG5leHBvcnQgY29uc3QgbGlnaHQgPSBjc3MuZ2xvYmFsYFxyXG4gICAgOnJvb3Qge1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1wcmltYXJ5OiAjZmZmO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1zZWNvbmRhcnk6ICNmMWYxZjE7XHJcbiAgICAgICAgLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5OiAjZGFkYWRhO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC1xdWF0ZXJuYXJ5OiAjMmEyYTJhO1xyXG5cclxuICAgICAgICAtLXRleHQtcHJpbWFyeTogIzJhMmEyYTtcclxuICAgICAgICAtLXRleHQtc2Vjb25kYXJ5OiAjZjFmMWYxO1xyXG4gICAgICAgIC0tdGV4dC1idXR0b246ICMyYTJhMmE7XHJcblxyXG4gICAgICAgIC0tYWNjZW50LXByaW1hcnk6ICM1NmY1NWM7XHJcbiAgICAgICAgLS1hY2NlbnQtc2Vjb25kYXJ5OiAjM2RiOGZmO1xyXG4gICAgICAgIC0tYWNjZW50LXRlcnRpYXJ5OiAjZmZjYzAwO1xyXG5cclxuICAgICAgICAtLWNvbnRhY3Q6ICMyYTJhMmE7XHJcbiAgICAgICAgLS1mb290ZXI6ICMxZTFlMWU7XHJcbiAgICAgICAgLS1ib3gtc2hhZG93OiAwcHggNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gICAgICAgIC0tYm94LXNoYWRvdy1hY3RpdmU6IDAgNHB4IDE1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIH1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBkYXJrID0gY3NzLmdsb2JhbGBcclxuICAgIDpyb290IHtcclxuICAgICAgICAtLWJhY2tncm91bmQtcHJpbWFyeTogIzFlMWUxZTtcclxuICAgICAgICAtLWJhY2tncm91bmQtc2Vjb25kYXJ5OiAjMmEyYTJhO1xyXG4gICAgICAgIC0tYmFja2dyb3VuZC10ZXJ0aWFyeTogIzQzNDU0NTtcclxuICAgICAgICAtLWJhY2tncm91bmQtcXVhdGVybmFyeTogIzg1ODU4NTtcclxuXHJcbiAgICAgICAgLS10ZXh0LXByaW1hcnk6ICNmMWYxZjE7XHJcbiAgICAgICAgLS10ZXh0LXNlY29uZGFyeTogI2U2ZTZlNjtcclxuICAgICAgICAtLXRleHQtYnV0dG9uOiAjMmEyYTJhO1xyXG5cclxuICAgICAgICAtLWFjY2VudC1wcmltYXJ5OiAjNTZmNTVjO1xyXG4gICAgICAgIC0tYWNjZW50LXNlY29uZGFyeTogIzNkYjhmZjtcclxuICAgICAgICAtLWFjY2VudC10ZXJ0aWFyeTogI2ZmY2MwMDtcclxuXHJcbiAgICAgICAgLS1jb250YWN0OiAjM2QzZDNkO1xyXG4gICAgICAgIC0tZm9vdGVyOiAjMWUxZTFlO1xyXG4gICAgICAgIC0tYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgICAgICAtLWJveC1zaGFkb3ctYWN0aXZlOiAwIDRweCAxNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB9XHJcbmA7XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\styles\\\\theme.js */");
dark.__hash = "1484635885";

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\plesa\Desktop\Proiecte Web\infoplus\pages\index.js */"./pages/index.js");


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

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

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