webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/_globals/Register.js":
/*!*****************************************!*\
  !*** ./components/_globals/Register.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Register; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _styles_formModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/formModal */ "./styles/formModal.js");
/* harmony import */ var _utils_OverlayDarkener__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/OverlayDarkener */ "./components/utils/OverlayDarkener.js");
/* harmony import */ var _utils_checkFieldsValidity__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/checkFieldsValidity */ "./utils/checkFieldsValidity.js");
/* harmony import */ var _utils_InputAreas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/InputAreas */ "./components/utils/InputAreas.js");
/* harmony import */ var _Home_Main__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Home/Main */ "./components/Home/Main.js");
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pages/_app */ "./pages/_app.js");

var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\_globals\\Register.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }









function Register() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    name: "",
    surname: "",
    county: "Alba",
    profession: "Elev",
    username: "",
    email: "",
    password: ""
  }),
      userDetails = _useState[0],
      setUserDetail = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      errorMessage = _useState2[0],
      setErrorMessage = _useState2[1];

  var showErrorMessage = function showErrorMessage(error) {
    return setErrorMessage(error);
  };

  var updateDetails = function updateDetails(e, fieldName) {
    return setUserDetail(_objectSpread({}, userDetails, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, fieldName, e.target.value)));
  };

  var showRegisterModalHandler = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Home_Main__WEBPACK_IMPORTED_MODULE_8__["RegisterModalHandler"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_utils_OverlayDarkener__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onClick: showRegisterModalHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-3124442123 " + "jsx-".concat(_styles_formModal__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "modal",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-3124442123 " + "jsx-".concat(_styles_formModal__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "modal__title-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(RegisterModalWave, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }), __jsx("h2", {
    className: "jsx-3124442123 " + "jsx-".concat(_styles_formModal__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "modal__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, "\xCEnregistreaz\u0103-te")), __jsx("form", {
    onSubmit: function onSubmit() {
      return false;
    },
    className: "jsx-3124442123 " + "jsx-".concat(_styles_formModal__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "modal__input-panels",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 17
    }
  }, __jsx(_utils_InputAreas__WEBPACK_IMPORTED_MODULE_7__["default"], {
    updateDetails: updateDetails,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "jsx-3124442123 " + "jsx-".concat(_styles_formModal__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "modal__buttons-container",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx("button", {
    onClick: showRegisterModalHandler,
    className: "jsx-3124442123 " + "jsx-".concat(_styles_formModal__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "button--tertiary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 25
    }
  }, "Renun\u021B\u0103"), __jsx(SubmitButton, {
    userDetails: userDetails,
    showErrorMessage: showErrorMessage,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 25
    }
  })), errorMessage !== "" && __jsx("p", {
    className: "jsx-3124442123 " + "jsx-".concat(_styles_formModal__WEBPACK_IMPORTED_MODULE_4__["default"].__hash) + " " + "error-message",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 25
    }
  }, errorMessage, " ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "times-circle",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 44
    }
  }), " "))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: _styles_formModal__WEBPACK_IMPORTED_MODULE_4__["default"].__hash,
    __self: this
  }, _styles_formModal__WEBPACK_IMPORTED_MODULE_4__["default"]), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3124442123",
    __self: this
  }, ".modal{width:50%;}.modal__input-panel:nth-child(odd){margin-right:15px;}.modal__input-panel:nth-child(even){margin-left:15px;}.modal__input-panel.modal__input-panel--last{margin-right:0;margin-left:0;}@media screen and (max-width:825px){.modal__input-panel:nth-child(n){margin-left:0;margin-right:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxSZWdpc3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3RCtCLEFBRytCLEFBSVEsQUFJRCxBQUlGLEFBS0csVUFoQnRCLElBaUJ1QixDQUxMLEVBSmxCLENBSkEsV0FTQSxBQUtJIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxSZWdpc3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcbmltcG9ydCBmb3JtTW9kYWwgZnJvbSBcIi4uLy4uL3N0eWxlcy9mb3JtTW9kYWxcIjtcclxuaW1wb3J0IE92ZXJsYXlEYXJrZW5lciBmcm9tIFwiLi4vdXRpbHMvT3ZlcmxheURhcmtlbmVyXCI7XHJcbmltcG9ydCBjaGVja0ZpZWxkc1ZhbGlkaXR5IGZyb20gXCIuLi8uLi91dGlscy9jaGVja0ZpZWxkc1ZhbGlkaXR5XCI7XHJcbmltcG9ydCBJbnB1dEFyZWFzIGZyb20gXCIuLi91dGlscy9JbnB1dEFyZWFzXCI7XHJcblxyXG5pbXBvcnQgeyBSZWdpc3Rlck1vZGFsSGFuZGxlciB9IGZyb20gXCIuLi9Ib21lL01haW5cIjtcclxuaW1wb3J0IHsgU2hvd05vdGlmaWNhdGlvbkNvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvX2FwcFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVnaXN0ZXIoKSB7XHJcbiAgICBjb25zdCBbdXNlckRldGFpbHMsIHNldFVzZXJEZXRhaWxdID0gdXNlU3RhdGUoe1xyXG4gICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgc3VybmFtZTogXCJcIixcclxuICAgICAgICBjb3VudHk6IFwiQWxiYVwiLFxyXG4gICAgICAgIHByb2Zlc3Npb246IFwiRWxldlwiLFxyXG4gICAgICAgIHVzZXJuYW1lOiBcIlwiLFxyXG4gICAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3Qgc2hvd0Vycm9yTWVzc2FnZSA9IChlcnJvcikgPT4gc2V0RXJyb3JNZXNzYWdlKGVycm9yKTtcclxuICAgIGNvbnN0IHVwZGF0ZURldGFpbHMgPSAoZSwgZmllbGROYW1lKSA9PlxyXG4gICAgICAgIHNldFVzZXJEZXRhaWwoeyAuLi51c2VyRGV0YWlscywgW2ZpZWxkTmFtZV06IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG5cclxuICAgIGNvbnN0IHNob3dSZWdpc3Rlck1vZGFsSGFuZGxlciA9IHVzZUNvbnRleHQoUmVnaXN0ZXJNb2RhbEhhbmRsZXIpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE92ZXJsYXlEYXJrZW5lciBvbkNsaWNrPXtzaG93UmVnaXN0ZXJNb2RhbEhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxSZWdpc3Rlck1vZGFsV2F2ZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJtb2RhbF9fdGl0bGVcIj7Djm5yZWdpc3RyZWF6xIMtdGU8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJtb2RhbF9faW5wdXQtcGFuZWxzXCIgb25TdWJtaXQ9eygpID0+IGZhbHNlfT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRBcmVhcyB1cGRhdGVEZXRhaWxzPXt1cGRhdGVEZXRhaWxzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWxfX2J1dHRvbnMtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLS10ZXJ0aWFyeVwiIG9uQ2xpY2s9e3Nob3dSZWdpc3Rlck1vZGFsSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZW51bsibxINcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxTdWJtaXRCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJEZXRhaWxzPXt1c2VyRGV0YWlsc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2U9e3Nob3dFcnJvck1lc3NhZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAge2Vycm9yTWVzc2FnZSAhPT0gXCJcIiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImVycm9yLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2V9IDxGb250QXdlc29tZUljb24gaWNvbj1cInRpbWVzLWNpcmNsZVwiIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2Zvcm1Nb2RhbH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLm1vZGFsIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tb2RhbF9faW5wdXQtcGFuZWw6bnRoLWNoaWxkKG9kZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubW9kYWxfX2lucHV0LXBhbmVsOm50aC1jaGlsZChldmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1vZGFsX19pbnB1dC1wYW5lbC5tb2RhbF9faW5wdXQtcGFuZWwtLWxhc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLm1vZGFsX19pbnB1dC1wYW5lbDpudGgtY2hpbGQobikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU3VibWl0QnV0dG9uKHsgdXNlckRldGFpbHMsIHNob3dFcnJvck1lc3NhZ2UgfSkge1xyXG4gICAgY29uc3QgW2lzRGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBzaG93UmVnaXN0ZXJNb2RhbEhhbmRsZXIgPSB1c2VDb250ZXh0KFJlZ2lzdGVyTW9kYWxIYW5kbGVyKTtcclxuICAgIGNvbnN0IG1vZGlmeUFsZXJ0ID0gdXNlQ29udGV4dChTaG93Tm90aWZpY2F0aW9uQ29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXJTdWJtaXRIYW5kbGVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckRldGFpbHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERpc2FibGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93UmVnaXN0ZXJNb2RhbEhhbmRsZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUFsZXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tLXByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBDcmVlYXrEg1xyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmJ1dHRvbi0tcHJpbWFyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZ2lzdGVyU3VibWl0SGFuZGxlcih7XHJcbiAgICBlLFxyXG4gICAgdXNlckRldGFpbHMsXHJcbiAgICBzaG93RXJyb3JNZXNzYWdlLFxyXG4gICAgc2V0RGlzYWJsZWQsXHJcbiAgICBzaG93UmVnaXN0ZXJNb2RhbEhhbmRsZXIsXHJcbiAgICBtb2RpZnlBbGVydCxcclxufSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RGlzYWJsZWQodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gY2hlY2tGaWVsZHNWYWxpZGl0eSh7XHJcbiAgICAgICAgZmllbGRzOiB1c2VyRGV0YWlscyxcclxuICAgICAgICBtaW5pbXVtTGVuZ3RoRm9yRWFjaEZpZWxkOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IDMsXHJcbiAgICAgICAgICAgIHN1cm5hbWU6IDMsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiA1LFxyXG4gICAgICAgICAgICBwYXNzd29yZDogOCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhc0VtYWlsOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yTWVzc2FnZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICBzZXREaXNhYmxlZChmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIHNob3dFcnJvck1lc3NhZ2UoZXJyb3JNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaChcIi9hcGkvcmVnaXN0ZXJcIiwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRldGFpbHMpLFxyXG4gICAgfSlcclxuICAgICAgICAudGhlbigocikgPT4gci5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHsgb2ssIGVycm9yID0gbnVsbCB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghb2spXHJcbiAgICAgICAgICAgICAgICBtb2RpZnlBbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAhZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJBIGFwxINydXQgbyBlcm9hcmUgaW50ZXJuxIMsIHbEgyBydWdhbSBzxIMgbmUgc2N1emHIm2kuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBtb2RpZnlBbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcIsOObnJlZ2lzdHJhcmVhIGEgZm9zdCBlZmVjdHVhdMSDIGN1IHN1Y2Nlcy5cIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzaG93UmVnaXN0ZXJNb2RhbEhhbmRsZXIoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgc2hvd0Vycm9yTWVzc2FnZShcIkEgYXBhcnV0IG8gZXJvYXJlIGludGVybmEsIHZhIHJvZyBzYSBuZSBzY3V6YXRpLlwiKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmVnaXN0ZXJNb2RhbFdhdmUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxzdmdcclxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCA2NDYgMTg0XCJcclxuICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibW9kYWxfX3dhdmVcIlxyXG4gICAgICAgICAgICBwcmVzZXJ2ZUFzcGVjdFJhdGlvPVwibm9uZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgICAgZD1cIk0wIDBMNjQ2IDkuNTM2NzRlLTA3VjE1NS45MTFDNjQ2IDE1NS45MTEgNTgwLjU5IDE3OS4zOTMgNDY4LjIgMTgyLjYyQzM1NS44MSAxODUuODQ3IDI4NS4yNjcgMTcxLjQ4OCAyMDcuMTMgMTU1LjkxMUM0Ni4wMjcgMTIzLjc5MyAxLjkwNzM1ZS0wNiAxNTUuOTExIDEuOTA3MzVlLTA2IDE1NS45MTFMMCAwWlwiXHJcbiAgICAgICAgICAgICAgICBmaWxsPVwidmFyKC0tYWNjZW50LXNlY29uZGFyeSlcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvc3ZnPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\_globals\\\\Register.js */"));
}

function SubmitButton(_ref) {
  var userDetails = _ref.userDetails,
      showErrorMessage = _ref.showErrorMessage;

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isDisabled = _useState3[0],
      setDisabled = _useState3[1];

  var showRegisterModalHandler = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_Home_Main__WEBPACK_IMPORTED_MODULE_8__["RegisterModalHandler"]);
  var modifyAlert = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_9__["ShowNotificationContext"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("button", {
    type: "submit",
    disabled: isDisabled,
    onClick: function onClick(e) {
      return registerSubmitHandler({
        e: e,
        userDetails: userDetails,
        showErrorMessage: showErrorMessage,
        setDisabled: setDisabled,
        showRegisterModalHandler: showRegisterModalHandler,
        modifyAlert: modifyAlert
      });
    },
    className: "jsx-2585271453" + " " + "button--primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 13
    }
  }, "Creeaz\u0103"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2585271453",
    __self: this
  }, ".button--primary.jsx-2585271453{background-color:var(--accent-secondary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxSZWdpc3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2R3dCLEFBRzhELHlDQUM3QyIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcUmVnaXN0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcblxyXG5pbXBvcnQgZm9ybU1vZGFsIGZyb20gXCIuLi8uLi9zdHlsZXMvZm9ybU1vZGFsXCI7XHJcbmltcG9ydCBPdmVybGF5RGFya2VuZXIgZnJvbSBcIi4uL3V0aWxzL092ZXJsYXlEYXJrZW5lclwiO1xyXG5pbXBvcnQgY2hlY2tGaWVsZHNWYWxpZGl0eSBmcm9tIFwiLi4vLi4vdXRpbHMvY2hlY2tGaWVsZHNWYWxpZGl0eVwiO1xyXG5pbXBvcnQgSW5wdXRBcmVhcyBmcm9tIFwiLi4vdXRpbHMvSW5wdXRBcmVhc1wiO1xyXG5cclxuaW1wb3J0IHsgUmVnaXN0ZXJNb2RhbEhhbmRsZXIgfSBmcm9tIFwiLi4vSG9tZS9NYWluXCI7XHJcbmltcG9ydCB7IFNob3dOb3RpZmljYXRpb25Db250ZXh0IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL19hcHBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlZ2lzdGVyKCkge1xyXG4gICAgY29uc3QgW3VzZXJEZXRhaWxzLCBzZXRVc2VyRGV0YWlsXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgIHN1cm5hbWU6IFwiXCIsXHJcbiAgICAgICAgY291bnR5OiBcIkFsYmFcIixcclxuICAgICAgICBwcm9mZXNzaW9uOiBcIkVsZXZcIixcclxuICAgICAgICB1c2VybmFtZTogXCJcIixcclxuICAgICAgICBlbWFpbDogXCJcIixcclxuICAgICAgICBwYXNzd29yZDogXCJcIixcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICAgIGNvbnN0IHNob3dFcnJvck1lc3NhZ2UgPSAoZXJyb3IpID0+IHNldEVycm9yTWVzc2FnZShlcnJvcik7XHJcbiAgICBjb25zdCB1cGRhdGVEZXRhaWxzID0gKGUsIGZpZWxkTmFtZSkgPT5cclxuICAgICAgICBzZXRVc2VyRGV0YWlsKHsgLi4udXNlckRldGFpbHMsIFtmaWVsZE5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgICBjb25zdCBzaG93UmVnaXN0ZXJNb2RhbEhhbmRsZXIgPSB1c2VDb250ZXh0KFJlZ2lzdGVyTW9kYWxIYW5kbGVyKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxPdmVybGF5RGFya2VuZXIgb25DbGljaz17c2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX190aXRsZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8UmVnaXN0ZXJNb2RhbFdhdmUgLz5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwibW9kYWxfX3RpdGxlXCI+w45ucmVnaXN0cmVhesSDLXRlPC9oMj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwibW9kYWxfX2lucHV0LXBhbmVsc1wiIG9uU3VibWl0PXsoKSA9PiBmYWxzZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0QXJlYXMgdXBkYXRlRGV0YWlscz17dXBkYXRlRGV0YWlsc30gLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsX19idXR0b25zLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi0tdGVydGlhcnlcIiBvbkNsaWNrPXtzaG93UmVnaXN0ZXJNb2RhbEhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVudW7Im8SDXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3VibWl0QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyRGV0YWlscz17dXNlckRldGFpbHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93RXJyb3JNZXNzYWdlPXtzaG93RXJyb3JNZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHtlcnJvck1lc3NhZ2UgIT09IFwiXCIgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJlcnJvci1tZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7ZXJyb3JNZXNzYWdlfSA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ0aW1lcy1jaXJjbGVcIiAvPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4Pntmb3JtTW9kYWx9PC9zdHlsZT5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcclxuICAgICAgICAgICAgICAgIC5tb2RhbCB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAubW9kYWxfX2lucHV0LXBhbmVsOm50aC1jaGlsZChvZGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLm1vZGFsX19pbnB1dC1wYW5lbDpudGgtY2hpbGQoZXZlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5tb2RhbF9faW5wdXQtcGFuZWwubW9kYWxfX2lucHV0LXBhbmVsLS1sYXN0IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5tb2RhbF9faW5wdXQtcGFuZWw6bnRoLWNoaWxkKG4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFN1Ym1pdEJ1dHRvbih7IHVzZXJEZXRhaWxzLCBzaG93RXJyb3JNZXNzYWdlIH0pIHtcclxuICAgIGNvbnN0IFtpc0Rpc2FibGVkLCBzZXREaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyID0gdXNlQ29udGV4dChSZWdpc3Rlck1vZGFsSGFuZGxlcik7XHJcbiAgICBjb25zdCBtb2RpZnlBbGVydCA9IHVzZUNvbnRleHQoU2hvd05vdGlmaWNhdGlvbkNvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNEaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyU3VibWl0SGFuZGxlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJEZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93RXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREaXNhYmxlZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlBbGVydCxcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLS1wcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgQ3JlZWF6xINcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5idXR0b24tLXByaW1hcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlclN1Ym1pdEhhbmRsZXIoe1xyXG4gICAgZSxcclxuICAgIHVzZXJEZXRhaWxzLFxyXG4gICAgc2hvd0Vycm9yTWVzc2FnZSxcclxuICAgIHNldERpc2FibGVkLFxyXG4gICAgc2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyLFxyXG4gICAgbW9kaWZ5QWxlcnQsXHJcbn0pIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldERpc2FibGVkKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGNoZWNrRmllbGRzVmFsaWRpdHkoe1xyXG4gICAgICAgIGZpZWxkczogdXNlckRldGFpbHMsXHJcbiAgICAgICAgbWluaW11bUxlbmd0aEZvckVhY2hGaWVsZDoge1xyXG4gICAgICAgICAgICBuYW1lOiAzLFxyXG4gICAgICAgICAgICBzdXJuYW1lOiAzLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogNSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IDgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYXNFbWFpbDogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChlcnJvck1lc3NhZ2UgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgc2V0RGlzYWJsZWQoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBzaG93RXJyb3JNZXNzYWdlKGVycm9yTWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2goXCIvYXBpL3JlZ2lzdGVyXCIsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJEZXRhaWxzKSxcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHIpID0+IHIuanNvbigpKVxyXG4gICAgICAgIC50aGVuKCh7IG9rLCBlcnJvciA9IG51bGwgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW9rKVxyXG4gICAgICAgICAgICAgICAgbW9kaWZ5QWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogIWVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQSBhcMSDcnV0IG8gZXJvYXJlIGludGVybsSDLCB2xIMgcnVnYW0gc8SDIG5lIHNjdXphyJtpLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgbW9kaWZ5QWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogXCLDjm5yZWdpc3RyYXJlYSBhIGZvc3QgZWZlY3R1YXTEgyBjdSBzdWNjZXMuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgc2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICBzZXREaXNhYmxlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2UoXCJBIGFwYXJ1dCBvIGVyb2FyZSBpbnRlcm5hLCB2YSByb2cgc2EgbmUgc2N1emF0aS5cIik7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFJlZ2lzdGVyTW9kYWxXYXZlKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8c3ZnXHJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgNjQ2IDE4NFwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1vZGFsX193YXZlXCJcclxuICAgICAgICAgICAgcHJlc2VydmVBc3BlY3RSYXRpbz1cIm5vbmVcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICAgIGQ9XCJNMCAwTDY0NiA5LjUzNjc0ZS0wN1YxNTUuOTExQzY0NiAxNTUuOTExIDU4MC41OSAxNzkuMzkzIDQ2OC4yIDE4Mi42MkMzNTUuODEgMTg1Ljg0NyAyODUuMjY3IDE3MS40ODggMjA3LjEzIDE1NS45MTFDNDYuMDI3IDEyMy43OTMgMS45MDczNWUtMDYgMTU1LjkxMSAxLjkwNzM1ZS0wNiAxNTUuOTExTDAgMFpcIlxyXG4gICAgICAgICAgICAgICAgZmlsbD1cInZhcigtLWFjY2VudC1zZWNvbmRhcnkpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\_globals\\\\Register.js */"));
}

function registerSubmitHandler(_ref2) {
  var e = _ref2.e,
      userDetails = _ref2.userDetails,
      showErrorMessage = _ref2.showErrorMessage,
      setDisabled = _ref2.setDisabled,
      showRegisterModalHandler = _ref2.showRegisterModalHandler,
      modifyAlert = _ref2.modifyAlert;
  e.preventDefault();
  setDisabled(true);
  var errorMessage = Object(_utils_checkFieldsValidity__WEBPACK_IMPORTED_MODULE_6__["default"])({
    fields: userDetails,
    minimumLengthForEachField: {
      name: 3,
      surname: 3,
      username: 5,
      password: 8
    },
    hasEmail: true
  });

  if (errorMessage !== false) {
    setDisabled(false);
    return showErrorMessage(errorMessage);
  }

  fetch("/api/register", {
    method: "POST",
    body: JSON.stringify(userDetails)
  }).then(function (r) {
    return r.json();
  }).then(function (_ref3) {
    var ok = _ref3.ok,
        _ref3$error = _ref3.error,
        error = _ref3$error === void 0 ? null : _ref3$error;
    if (!ok) modifyAlert({
      isVisible: true,
      props: {
        type: 0,
        children: !error ? "A apărut o eroare internă, vă rugam să ne scuzați." : error
      }
    });else modifyAlert({
      isVisible: true,
      props: {
        type: 1,
        children: "Înregistrarea a fost efectuată cu succes."
      }
    });
    showRegisterModalHandler();
  })["catch"](function (error) {
    console.error(error);
    setDisabled(false);
    showErrorMessage("A aparut o eroare interna, va rog sa ne scuzati.");
  });
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
      lineNumber: 182,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M0 0L646 9.53674e-07V155.911C646 155.911 580.59 179.393 468.2 182.62C355.81 185.847 285.267 171.488 207.13 155.911C46.027 123.793 1.90735e-06 155.911 1.90735e-06 155.911L0 0Z",
    fill: "var(--accent-secondary)",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 13
    }
  }));
}

/***/ })

})
//# sourceMappingURL=index.js.ad91ee0147ac1d3d1ff2.hot-update.js.map