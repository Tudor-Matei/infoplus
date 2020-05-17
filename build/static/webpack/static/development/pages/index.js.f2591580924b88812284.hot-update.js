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
    className: "jsx-2023506351" + " " + "alert alert--type-".concat(type),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2023506351" + " " + "alert__info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, type === 1 ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    className: "jsx-2023506351",
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
    className: "jsx-2023506351",
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
    className: "jsx-2023506351",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, children)), __jsx("button", {
    onClick: alertToggleHandler,
    className: "jsx-2023506351" + " " + "alert__button button--tertiary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "OK"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2023506351",
    __self: this
  }, ".alert.jsx-2023506351{max-width:40%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:30px 30px 20px;border-radius:20px;position:fixed;margin:auto;top:0;left:0;right:0;bottom:0;z-index:100;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:var(--text-button);box-shadow:var(--box-shadow);opacity:0;-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);-webkit-animation:comeIn-jsx-2023506351 300ms ease forwards;animation:comeIn-jsx-2023506351 300ms ease forwards;}.alert__info.jsx-2023506351{margin-bottom:20px;}.alert--type-1.jsx-2023506351{background-color:var(--accent-success);border:5px solid var(-accent-primary);}.alert--type-0.jsx-2023506351{background-color:var(--accent-failure-secondary);border:5px solid var(-accent-failure-primary);}.alert__button.jsx-2023506351{color:var(--text-button);-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin-right:0;margin-bottom:-10px;}.alert__button.jsx-2023506351:hover{color:var(--accent-quaternary);}h2.jsx-2023506351{display:inline-block;vertical-align:middle;}@-webkit-keyframes comeIn-jsx-2023506351{from{-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:0;}60%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);opacity:0.8;}to{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}}@keyframes comeIn-jsx-2023506351{from{-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:0;}60%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);opacity:0.8;}to{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxBbGVydE5vdGlmaWNhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQjRCLEFBR3VDLEFBcUJLLEFBSW9CLEFBS1UsQUFLeEIsQUFPTSxBQUlWLEFBTUksQUFJQyxBQUlILGNBM0RKLEtBcUJ2QixFQXlCMEIsSUFYRixNQU94QixRQWpCMEMsSUFzQjFDLE1BakJrRCxvQkE4QmhDLE1BUkEsRUExQmxCLENBOEJvQixDQUtoQixLQTVEdUIsQ0FvRHZCLEtBSUEsS0ExQkosRUFLbUIsVUFsQ0ksS0FtQ0MsY0FsQ0wsTUFtQ25CLFNBbENnQixZQUNOLE1BQ0MsT0FDQyxRQUNDLFNBQ0csWUFDQywwRUFDUyw4RUFDRyx5QkFDSSw2QkFDbkIsVUFDVywyRUFDZ0IsZ0hBQ3pDIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxBbGVydE5vdGlmaWNhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGVja21hcmtTb2x2ZWQgZnJvbSBcIi4uL3V0aWxzL0NoZWNrbWFya1NvbHZlZFwiO1xyXG5pbXBvcnQgRXJyb3JDaXJjbGUgZnJvbSBcIi4uL3V0aWxzL0Vycm9yQ2lyY2xlXCI7XHJcbmltcG9ydCBPdmVybGF5RGFya2VuZXIgZnJvbSBcIi4uL3V0aWxzL092ZXJsYXlEYXJrZW5lclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWxlcnROb3RpZmljYXRpb24oeyB0eXBlLCBjaGlsZHJlbiwgYWxlcnRUb2dnbGVIYW5kbGVyIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPE92ZXJsYXlEYXJrZW5lciBvbkNsaWNrPXthbGVydFRvZ2dsZUhhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYWxlcnQgYWxlcnQtLXR5cGUtJHt0eXBlfWB9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGVydF9faW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt0eXBlID09PSAxID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPlN1Y2NlcyE8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrbWFya1NvbHZlZCAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyPkVyb2FyZSE8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEVycm9yQ2lyY2xlIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+e2NoaWxkcmVufTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJhbGVydF9fYnV0dG9uIGJ1dHRvbi0tdGVydGlhcnlcIiBvbkNsaWNrPXthbGVydFRvZ2dsZUhhbmRsZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIE9LXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAgICAgLmFsZXJ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHggMzBweCAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAxMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHZhcigtLWJveC1zaGFkb3cpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogY29tZUluIDMwMG1zIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAuYWxlcnRfX2luZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmFsZXJ0LS10eXBlLTEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogNXB4IHNvbGlkIHZhcigtYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmFsZXJ0LS10eXBlLTAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtZmFpbHVyZS1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDVweCBzb2xpZCB2YXIoLWFjY2VudC1mYWlsdXJlLXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmFsZXJ0X19idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1idXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5hbGVydF9fYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1xdWF0ZXJuYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQGtleWZyYW1lcyBjb21lSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgNjAlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\_globals\\\\AlertNotification.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.f2591580924b88812284.hot-update.js.map