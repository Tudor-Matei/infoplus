webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default, ThemeContext, ShowAlertContext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeContext", function() { return ThemeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowAlertContext", function() { return ShowAlertContext; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_hooks_componentDidMount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/_hooks/componentDidMount */ "./components/_hooks/componentDidMount.js");
/* harmony import */ var _configs_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../configs/icons */ "./configs/icons.js");
/* harmony import */ var _styles_mainStyling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/mainStyling */ "./styles/mainStyling.js");
/* harmony import */ var _components_globals_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/_globals/Header */ "./components/_globals/Header.js");
/* harmony import */ var _components_globals_Contact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/_globals/Contact */ "./components/_globals/Contact.js");
/* harmony import */ var _components_globals_Footer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/_globals/Footer */ "./components/_globals/Footer.js");
/* harmony import */ var _components_globals_AlertNotification__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/_globals/AlertNotification */ "./components/_globals/AlertNotification.js");
/* harmony import */ var _components_globals_LoadingBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/_globals/LoadingBar */ "./components/_globals/LoadingBar.js");


var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\pages\\_app.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }











var ThemeContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])(true);
var ShowAlertContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["createContext"])(null);
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on("routeChangeStart", loadingStart);
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on("routeChangeComplete", loadingFinished);
next_router__WEBPACK_IMPORTED_MODULE_4___default.a.events.on("routeChangeError", loadingFinished);
function App(_ref) {
  var Component = _ref.Component,
      pageProps = _ref.pageProps;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      isLightTheme = _useState[0],
      setTheme = _useState[1];

  Object(_components_hooks_componentDidMount__WEBPACK_IMPORTED_MODULE_5__["default"])(function () {
    var localTheme = window.localStorage.getItem("theme") || (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    setTheme(localTheme === "light");
  });

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    isVisible: false,
    props: {
      type: 1,
      children: ""
    }
  }),
      alert = _useState2[0],
      modifyAlert = _useState2[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, alert.isVisible && __jsx(_components_globals_AlertNotification__WEBPACK_IMPORTED_MODULE_11__["default"], {
    type: alert.props.type,
    alertToggleHandler: function alertToggleHandler() {
      return modifyAlert(_objectSpread({}, alert, {
        isVisible: false
      }));
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, alert.props.children), __jsx(_components_globals_LoadingBar__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }), __jsx(ThemeContext.Provider, {
    value: {
      isLightTheme: isLightTheme,
      setTheme: setTheme
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(_components_globals_Header__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  })), __jsx(ShowAlertContext.Provider, {
    value: modifyAlert,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
    className: "jsx-".concat(_styles_mainStyling__WEBPACK_IMPORTED_MODULE_7__["default"].__hash) + " " + (pageProps && pageProps.className != null && pageProps.className || ""),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  }))), __jsx(_components_globals_Contact__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 13
    }
  }), __jsx(_components_globals_Footer__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: _styles_mainStyling__WEBPACK_IMPORTED_MODULE_7__["default"].__hash,
    __self: this
  }, _styles_mainStyling__WEBPACK_IMPORTED_MODULE_7__["default"]));
}


function loadingStart() {
  var loadingBar = document.querySelector(".loading-bar");
  loadingBar.classList.add("loading-bar--is-loading");
}

function loadingFinished() {
  var loadingBar = document.querySelector(".loading-bar");
  if (loadingBar) loadingBar.classList.remove("loading-bar--is-loading");
}

/***/ })

})
//# sourceMappingURL=_app.js.503b8f88afe3cdaf8e43.hot-update.js.map