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
    className: "jsx-2915624839" + " " + "alert alert--type-".concat(type),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2915624839" + " " + "alert__info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, type === 1 ? __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h2", {
    className: "jsx-2915624839",
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
    className: "jsx-2915624839",
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
    className: "jsx-2915624839",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 21
    }
  }, children)), __jsx("button", {
    onClick: alertToggleHandler,
    className: "jsx-2915624839" + " " + "alert__button button--tertiary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "OK"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2915624839",
    __self: this
  }, ".alert.jsx-2915624839{max-width:40%;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:30px 30px 20px;border-radius:20px;position:fixed;margin:auto;top:0;left:0;right:0;bottom:0;z-index:100;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;color:var(--text-button);box-shadow:var(--box-shadow);opacity:0;-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);-webkit-animation:comeIn-jsx-2915624839 300ms ease forwards;animation:comeIn-jsx-2915624839 300ms ease forwards;}.alert__info.jsx-2915624839{margin-bottom:20px;}.alert--type-1.jsx-2915624839{background-color:var(--accent-success);}.alert--type-0.jsx-2915624839{background-color:var(--accent-failure-secondary);}.alert__button.jsx-2915624839{color:var(--text-button);-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;margin-right:0;margin-bottom:-10px;}.alert__button.jsx-2915624839:hover{color:var(--accent-quaternary);}h2.jsx-2915624839{display:inline-block;vertical-align:middle;}@media screen and (max-width:576px){.alert.jsx-2915624839{max-width:70%;}}@-webkit-keyframes comeIn-jsx-2915624839{from{-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:0;}60%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);opacity:0.8;}to{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}}@keyframes comeIn-jsx-2915624839{from{-webkit-transform:scale(0.5);-ms-transform:scale(0.5);transform:scale(0.5);opacity:0;}60%{-webkit-transform:scale(1.05);-ms-transform:scale(1.05);transform:scale(1.05);opacity:0.8;}to{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXF9nbG9iYWxzXFxBbGVydE5vdGlmaWNhdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyQjRCLEFBR3VDLEFBcUJLLEFBSW9CLEFBSVUsQUFJeEIsQUFPTSxBQUlWLEFBTUgsQUFNTyxBQUlDLEFBSUgsY0EvREosQUFrRG5CLEtBN0JKLEVBdUIwQixJQVhGLE1BT3hCLFFBZkEsSUFvQkEsTUFoQkEsb0JBbUNrQixNQVJBLEdBSUUsQ0FLaEIsS0FoRXVCLENBd0R2QixLQUlBLE9BM0JlLFVBaENJLEtBaUNDLGNBaENMLE1BaUNuQixTQWhDZ0IsWUFDTixNQUNDLE9BQ0MsUUFDQyxTQUNHLFlBQ0MsMEVBQ1MsOEVBQ0cseUJBQ0ksNkJBQ25CLFVBQ1csMkVBQ2dCLGdIQUN6QyIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxfZ2xvYmFsc1xcQWxlcnROb3RpZmljYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hlY2ttYXJrU29sdmVkIGZyb20gXCIuLi91dGlscy9DaGVja21hcmtTb2x2ZWRcIjtcclxuaW1wb3J0IEVycm9yQ2lyY2xlIGZyb20gXCIuLi91dGlscy9FcnJvckNpcmNsZVwiO1xyXG5pbXBvcnQgT3ZlcmxheURhcmtlbmVyIGZyb20gXCIuLi91dGlscy9PdmVybGF5RGFya2VuZXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFsZXJ0Tm90aWZpY2F0aW9uKHsgdHlwZSwgY2hpbGRyZW4sIGFsZXJ0VG9nZ2xlSGFuZGxlciB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxPdmVybGF5RGFya2VuZXIgb25DbGljaz17YWxlcnRUb2dnbGVIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0IGFsZXJ0LS10eXBlLSR7dHlwZX1gfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxlcnRfX2luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICB7dHlwZSA9PT0gMSA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5TdWNjZXMhPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja21hcmtTb2x2ZWQgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMj5Fcm9hcmUhPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFcnJvckNpcmNsZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDxwPntjaGlsZHJlbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYWxlcnRfX2J1dHRvbiBidXR0b24tLXRlcnRpYXJ5XCIgb25DbGljaz17YWxlcnRUb2dnbGVIYW5kbGVyfT5cclxuICAgICAgICAgICAgICAgICAgICBPS1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgICAgIC5hbGVydCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNDAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzMHB4IDMwcHggMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1idXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1ib3gtc2hhZG93KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGNvbWVJbiAzMDBtcyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmFsZXJ0X19pbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5hbGVydC0tdHlwZS0xIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXN1Y2Nlc3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmFsZXJ0LS10eXBlLTAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtZmFpbHVyZS1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmFsZXJ0X19idXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1idXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5hbGVydF9fYnV0dG9uOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1xdWF0ZXJuYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFsZXJ0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGNvbWVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA2MCUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\_globals\\\\AlertNotification.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.836a8c4f802ed62c045e.hot-update.js.map