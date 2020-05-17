webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/_globals/Login.js":
/*!**************************************!*\
  !*** ./components/_globals/Login.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _styles_formModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/formModal */ "./styles/formModal.js");
/* harmony import */ var _utils_OverlayDarkener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/OverlayDarkener */ "./components/utils/OverlayDarkener.js");
/* harmony import */ var _utils_SubmitButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/SubmitButton */ "./components/utils/SubmitButton.js");
/* harmony import */ var _utils_InputAreas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/InputAreas */ "./components/utils/InputAreas.js");
/* harmony import */ var _utils_inputAreaLoginData__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../utils/inputAreaLoginData */ "./components/utils/inputAreaLoginData.js");
/* harmony import */ var _Home_Main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Home/Main */ "./components/Home/Main.js");

var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\_globals\\Login.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function Login() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    username: "",
    password: ""
  }),
      userDetails = _useState[0],
      setUserDetail = _useState[1];

  var updateDetails = function updateDetails(e, fieldName) {
    return setUserDetail(_objectSpread({}, userDetails, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fieldName, e.target.value)));
  };

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      errorMessage = _useState2[0],
      setErrorMessage = _useState2[1];

  var showErrorMessage = function showErrorMessage(error) {
    return setErrorMessage(error);
  };

  var showLoginModalHandler = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Home_Main__WEBPACK_IMPORTED_MODULE_9__["LoginModalHandler"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_utils_OverlayDarkener__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: showLoginModalHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-971536915 " + "jsx-".concat(_styles_formModal__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "modal modal--login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-971536915 " + "jsx-".concat(_styles_formModal__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "modal__title-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx(LoginModalWave, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 21
    }
  }), __jsx("h2", {
    className: "jsx-971536915 " + "jsx-".concat(_styles_formModal__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "modal__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }, "Logheaza-te")), __jsx("div", {
    className: "jsx-971536915 " + "jsx-".concat(_styles_formModal__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "modal__input-panels",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(_utils_InputAreas__WEBPACK_IMPORTED_MODULE_7__["default"], {
    updateDetails: updateDetails,
    inputAreaData: _utils_inputAreaLoginData__WEBPACK_IMPORTED_MODULE_8__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "jsx-971536915 " + "jsx-".concat(_styles_formModal__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "modal__buttons-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: showLoginModalHandler,
    className: "jsx-971536915 " + "jsx-".concat(_styles_formModal__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "button--tertiary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 25
    }
  }, "Renun\u021B\u0103"), __jsx(_utils_SubmitButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
    userDetails: userDetails,
    fieldOptions: {
      minimumLengthForEachField: {
        username: 5,
        password: 8
      }
    },
    showErrorMessage: showErrorMessage,
    buttonTitle: "Logare",
    type: "login",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 25
    }
  })), errorMessage && __jsx("p", {
    className: "jsx-971536915 " + "jsx-".concat(_styles_formModal__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "error-message",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 25
    }
  }, errorMessage, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "times-circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 44
    }
  }), " "))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: _styles_formModal__WEBPACK_IMPORTED_MODULE_4__["default"].__hash,
    __self: this
  }, _styles_formModal__WEBPACK_IMPORTED_MODULE_4__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "971536915",
    __self: this
  }, ".modal--login.jsx-971536915{width:40%;max-height:81%;}.modal__input-panel-group{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.modal--login .modal__input-panel{margin-bottom:20px;}.modal--login .button--primary{background-color:var(--accent-primary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxMb2dpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RHdCLEFBRytCLEFBS1ksQUFHSCxBQUlvQixVQVh4QixTQVFuQixNQVBBLGNBV0EsdUNBUEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXExvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuaW1wb3J0IGZvcm1Nb2RhbCBmcm9tIFwiLi4vLi4vc3R5bGVzL2Zvcm1Nb2RhbFwiO1xyXG5pbXBvcnQgT3ZlcmxheURhcmtlbmVyIGZyb20gXCIuLi91dGlscy9PdmVybGF5RGFya2VuZXJcIjtcclxuaW1wb3J0IFN1Ym1pdEJ1dHRvbiBmcm9tIFwiLi4vdXRpbHMvU3VibWl0QnV0dG9uXCI7XHJcbmltcG9ydCBJbnB1dEFyZWFzIGZyb20gXCIuLi91dGlscy9JbnB1dEFyZWFzXCI7XHJcbmltcG9ydCBpbnB1dEFyZWFMb2dpbkRhdGEgZnJvbSBcIi4uL3V0aWxzL2lucHV0QXJlYUxvZ2luRGF0YVwiO1xyXG5cclxuaW1wb3J0IHsgTG9naW5Nb2RhbEhhbmRsZXIgfSBmcm9tIFwiLi4vSG9tZS9NYWluXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICAgIGNvbnN0IFt1c2VyRGV0YWlscywgc2V0VXNlckRldGFpbF0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHVwZGF0ZURldGFpbHMgPSAoZSwgZmllbGROYW1lKSA9PlxyXG4gICAgICAgIHNldFVzZXJEZXRhaWwoeyAuLi51c2VyRGV0YWlscywgW2ZpZWxkTmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICAgIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBzaG93RXJyb3JNZXNzYWdlID0gKGVycm9yKSA9PiBzZXRFcnJvck1lc3NhZ2UoZXJyb3IpO1xyXG5cclxuICAgIGNvbnN0IHNob3dMb2dpbk1vZGFsSGFuZGxlciA9IHVzZUNvbnRleHQoTG9naW5Nb2RhbEhhbmRsZXIpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE92ZXJsYXlEYXJrZW5lciBvbkNsaWNrPXtzaG93TG9naW5Nb2RhbEhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwgbW9kYWwtLWxvZ2luXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX190aXRsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TG9naW5Nb2RhbFdhdmUgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlXCI+TG9naGVhemEtdGU8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19pbnB1dC1wYW5lbHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRBcmVhcyB1cGRhdGVEZXRhaWxzPXt1cGRhdGVEZXRhaWxzfSBpbnB1dEFyZWFEYXRhPXtpbnB1dEFyZWFMb2dpbkRhdGF9IC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2J1dHRvbnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLS10ZXJ0aWFyeVwiIG9uQ2xpY2s9e3Nob3dMb2dpbk1vZGFsSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW51bsibxINcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJtaXRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJEZXRhaWxzPXt1c2VyRGV0YWlsc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkT3B0aW9ucz17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW1MZW5ndGhGb3JFYWNoRmllbGQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXNlcm5hbWU6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkOiA4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yTWVzc2FnZT17c2hvd0Vycm9yTWVzc2FnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvblRpdGxlPVwiTG9nYXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJsb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2V9IDxGb250QXdlc29tZUljb24gaWNvbj1cInRpbWVzLWNpcmNsZVwiIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57Zm9ybU1vZGFsfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5tb2RhbC0tbG9naW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LWhlaWdodDogODElO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLm1vZGFsX19pbnB1dC1wYW5lbC1ncm91cCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5tb2RhbC0tbG9naW4gLm1vZGFsX19pbnB1dC1wYW5lbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgubW9kYWwtLWxvZ2luIC5idXR0b24tLXByaW1hcnkpIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExvZ2luTW9kYWxXYXZlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjQ2IDE4NFwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsX193YXZlXCJcclxuICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMCAwTDY0NiA5LjUzNjc0ZS0wN1YxNTUuOTExQzY0NiAxNTUuOTExIDU4MC41OSAxNzkuMzkzIDQ2OC4yIDE4Mi42MkMzNTUuODEgMTg1Ljg0NyAyODUuMjY3IDE3MS40ODggMjA3LjEzIDE1NS45MTFDNDYuMDI3IDEyMy43OTMgMS45MDczNWUtMDYgMTU1LjkxMSAxLjkwNzM1ZS0wNiAxNTUuOTExTDAgMFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLWFjY2VudC1wcmltYXJ5KVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\_globals\\\\Login.js */"));
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

/***/ })

})
//# sourceMappingURL=index.js.15c55e45794d3bf64538.hot-update.js.map