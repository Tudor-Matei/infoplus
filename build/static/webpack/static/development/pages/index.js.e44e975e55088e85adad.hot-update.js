webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/_globals/AlertNotification.js":
/*!**************************************************!*\
  !*** ./components/_globals/AlertNotification.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AlertNotification; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_CheckmarkSolved__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/CheckmarkSolved */ "./components/utils/CheckmarkSolved.js");
/* harmony import */ var _utils_ErrorCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ErrorCircle */ "./components/utils/ErrorCircle.js");
/* harmony import */ var _utils_OverlayDarkener__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/OverlayDarkener */ "./components/utils/OverlayDarkener.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\_globals\\AlertNotification.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function AlertNotification(_ref) {
  var type = _ref.type,
      children = _ref.children,
      alertToggleHandler = _ref.alertToggleHandler;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_utils_OverlayDarkener__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onClick: alertToggleHandler,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1132490452" + " " + "alert alert--type-".concat(type),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1132490452" + " " + "alert__info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, type === 1 ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    className: "jsx-1132490452",
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
    className: "jsx-1132490452",
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
    className: "jsx-1132490452",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, children)), __jsx("button", {
    onClick: alertToggleHandler,
    className: "jsx-1132490452" + " " + "alert__button button--tertiary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "OK"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1132490452",
    __self: this
  }, ".alert.jsx-1132490452{max-width:40%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:30px 30px 20px;border-radius:20px;position:fixed;margin:auto;top:0;left:0;right:0;bottom:0;z-index:100;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:var(--text-button);box-shadow:var(--box-shadow);opacity:0;-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);-webkit-animation:comeIn-jsx-1132490452 300ms ease forwards;animation:comeIn-jsx-1132490452 300ms ease forwards;}.alert__info.jsx-1132490452{margin-bottom:20px;}.alert--type-1.jsx-1132490452{background-color:var(--accent-success);}.alert--type-0.jsx-1132490452{background-color:var(--accent-failure-secondary);}.alert__button.jsx-1132490452{color:var(--text-button);-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin-right:0;margin-bottom:-10px;}.alert__button.jsx-1132490452:hover{color:var(--accent-quaternary);}h2.jsx-1132490452{display:inline-block;vertical-align:middle;}@-webkit-keyframes comeIn-jsx-1132490452{from{-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:0;}60%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);opacity:0.8;}to{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}}@keyframes comeIn-jsx-1132490452{from{-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:0;}60%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);opacity:0.8;}to{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxBbGVydE5vdGlmaWNhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQjRCLEFBR3VDLEFBcUJLLEFBSW9CLEFBSVUsQUFJeEIsQUFPTSxBQUlWLEFBTUksQUFJQyxBQUlILGNBekRKLEtBcUJ2QixFQXVCMEIsSUFYRixNQU94QixRQWZBLElBb0JBLE1BaEJBLG9CQTZCa0IsTUFSQSxHQUlFLENBS2hCLEtBMUR1QixDQWtEdkIsS0FJQSxPQXJCZSxVQWhDSSxLQWlDQyxjQWhDTCxNQWlDbkIsU0FoQ2dCLFlBQ04sTUFDQyxPQUNDLFFBQ0MsU0FDRyxZQUNDLDBFQUNTLDhFQUNHLHlCQUNJLDZCQUNuQixVQUNXLDJFQUNnQixnSEFDekMiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcX2dsb2JhbHNcXEFsZXJ0Tm90aWZpY2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoZWNrbWFya1NvbHZlZCBmcm9tIFwiLi4vdXRpbHMvQ2hlY2ttYXJrU29sdmVkXCI7XHJcbmltcG9ydCBFcnJvckNpcmNsZSBmcm9tIFwiLi4vdXRpbHMvRXJyb3JDaXJjbGVcIjtcclxuaW1wb3J0IE92ZXJsYXlEYXJrZW5lciBmcm9tIFwiLi4vdXRpbHMvT3ZlcmxheURhcmtlbmVyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBbGVydE5vdGlmaWNhdGlvbih7IHR5cGUsIGNoaWxkcmVuLCBhbGVydFRvZ2dsZUhhbmRsZXIgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8T3ZlcmxheURhcmtlbmVyIG9uQ2xpY2s9e2FsZXJ0VG9nZ2xlSGFuZGxlcn0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhbGVydCBhbGVydC0tdHlwZS0ke3R5cGV9YH0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFsZXJ0X19pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3R5cGUgPT09IDEgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+U3VjY2VzITwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2ttYXJrU29sdmVkIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+RXJvYXJlITwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RXJyb3JDaXJjbGUgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA8cD57Y2hpbGRyZW59PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImFsZXJ0X19idXR0b24gYnV0dG9uLS10ZXJ0aWFyeVwiIG9uQ2xpY2s9e2FsZXJ0VG9nZ2xlSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgT0tcclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgICAgICAuYWxlcnQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMzBweCAzMHB4IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYnV0dG9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBjb21lSW4gMzAwbXMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5hbGVydF9faW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYWxlcnQtLXR5cGUtMSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1zdWNjZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5hbGVydC0tdHlwZS0wIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWZhaWx1cmUtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5hbGVydF9fYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYnV0dG9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYWxlcnRfX2J1dHRvbjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcXVhdGVybmFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgY29tZUluIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDYwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\_globals\\\\AlertNotification.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.e44e975e55088e85adad.hot-update.js.map