(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\exercitiu\\[id].js"],{

/***/ "./components/IndividualExercise/ExerciseInfo.js":
/*!*******************************************************!*\
  !*** ./components/IndividualExercise/ExerciseInfo.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExerciseInfo; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\IndividualExercise\\ExerciseInfo.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ExerciseInfo(_ref) {
  var _this = this;

  var needsHint = _ref.needsHint,
      userSolutions = _ref.userSolutions,
      officialSolution = _ref.officialSolution,
      _ref$dataInput = _ref.dataInput,
      dataInput = _ref$dataInput === void 0 ? {} : _ref$dataInput,
      _ref$importantData = _ref.importantData,
      importantData = _ref$importantData === void 0 ? [] : _ref$importantData,
      _ref$inputExample = _ref.inputExample,
      inputExample = _ref$inputExample === void 0 ? {} : _ref$inputExample,
      children = _ref.children;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-4286951087" + " " + "exercise-info",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(HeaderTitleExercise, {
    needsHint: needsHint,
    userSolutions: userSolutions,
    officialSolution: officialSolution,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  }), __jsx("p", {
    className: "jsx-4286951087" + " " + "exercise-info__description",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 17
    }
  }, children), __jsx("h3", {
    className: "jsx-4286951087" + " " + "exercise-info__data-input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 17
    }
  }, "Date de intrare: ", __jsx("span", {
    className: "jsx-4286951087",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 38
    }
  }, dataInput.toInput)), __jsx("h3", {
    className: "jsx-4286951087" + " " + "exercise-info__data-input",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "Date de ie\u0219ire: ", __jsx("span", {
    className: "jsx-4286951087",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 37
    }
  }, dataInput.toOutput)), __jsx(HeaderSection, {
    title: "Obvserva\u021Bii",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 17
    }
  }), __jsx("ul", {
    className: "jsx-4286951087" + " " + "exercise-info__important-data",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, importantData.map(function (datum, i) {
    return __jsx("li", {
      key: "important-datum_".concat(i),
      className: "jsx-4286951087",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 25
      }
    }, datum);
  })), __jsx(HeaderSection, {
    title: "Exemplu",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }), __jsx("h3", {
    className: "jsx-4286951087" + " " + "exercise-info__input-example",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, "Intrare ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "arrow-left",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 29
    }
  })), __jsx("code", {
    className: "jsx-4286951087",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, inputExample.input), __jsx("h3", {
    className: "jsx-4286951087" + " " + "exercise-info__input-example",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, "Ie\u0219ire ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 28
    }
  })), __jsx("code", {
    className: "jsx-4286951087",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, inputExample.output), __jsx(HeaderSection, {
    title: "Solu\u021Bie",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4286951087",
    __self: this
  }, ".exercise-info.jsx-4286951087{width:90%;margin:auto;color:var(--text-primary);}.exercise-info__description.jsx-4286951087{margin-bottom:30px;line-height:30px;}.exercise-info__data-input.jsx-4286951087{color:var(--accent-secondary);}.exercise-info__data-input.jsx-4286951087 span.jsx-4286951087{color:var(--text-primary);font-weight:normal;}.exercise-info__important-data.jsx-4286951087{font-size:var(--font-smaller);padding-left:20px;line-height:30px;}.exercise-info__input-example.jsx-4286951087{margin:10px 0;}.exercise-info__input-example svg{width:15px !important;margin-left:7px;margin-bottom:2px;height:15px !important;}code.jsx-4286951087{display:block;white-space:pre-line;padding:10px;width:100%;background-color:var(--background-secondary);border:2px solid var(--accent-primary);border-radius:15px;margin-bottom:40px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxFeGVyY2lzZVxcRXhlcmNpc2VJbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThDd0IsQUFHK0IsQUFNUyxBQUtXLEFBSUosQUFLSSxBQU1oQixBQUlRLEFBT1IsVUFwQ0YsSUEwQmhCLEFBV3lCLEtBL0JKLEdBTFMsQUE2QlYsSUFmRyxJQUp2QixBQVNzQixLQWtCTCxDQS9CakIsRUF3QnNCLE9BZnRCLEdBZEEsQUFtQnFCLEFBa0JOLFFBUFksR0FRc0IsTUFsQmpELGNBV0EseUJBUTJDLHVDQUNwQixtQkFDQSxtQkFDdkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcSW5kaXZpZHVhbEV4ZXJjaXNlXFxFeGVyY2lzZUluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBFeGVyY2lzZUluZm8oe1xyXG4gICAgbmVlZHNIaW50LFxyXG4gICAgdXNlclNvbHV0aW9ucyxcclxuICAgIG9mZmljaWFsU29sdXRpb24sXHJcbiAgICBkYXRhSW5wdXQgPSB7fSxcclxuICAgIGltcG9ydGFudERhdGEgPSBbXSxcclxuICAgIGlucHV0RXhhbXBsZSA9IHt9LFxyXG4gICAgY2hpbGRyZW4sXHJcbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGVyY2lzZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyVGl0bGVFeGVyY2lzZVxyXG4gICAgICAgICAgICAgICAgICAgIG5lZWRzSGludD17bmVlZHNIaW50fVxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJTb2x1dGlvbnM9e3VzZXJTb2x1dGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgb2ZmaWNpYWxTb2x1dGlvbj17b2ZmaWNpYWxTb2x1dGlvbn1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJleGVyY2lzZS1pbmZvX19kZXNjcmlwdGlvblwiPntjaGlsZHJlbn08L3A+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZXhlcmNpc2UtaW5mb19fZGF0YS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERhdGUgZGUgaW50cmFyZTogPHNwYW4+e2RhdGFJbnB1dC50b0lucHV0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZXhlcmNpc2UtaW5mb19fZGF0YS1pbnB1dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIERhdGUgZGUgaWXImWlyZTogPHNwYW4+e2RhdGFJbnB1dC50b091dHB1dH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJTZWN0aW9uIHRpdGxlPVwiT2J2c2VydmHIm2lpXCIgLz5cclxuICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJleGVyY2lzZS1pbmZvX19pbXBvcnRhbnQtZGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpbXBvcnRhbnREYXRhLm1hcCgoZGF0dW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17YGltcG9ydGFudC1kYXR1bV8ke2l9YH0+e2RhdHVtfTwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICA8L3VsPlxyXG5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJTZWN0aW9uIHRpdGxlPVwiRXhlbXBsdVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZXhlcmNpc2UtaW5mb19faW5wdXQtZXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEludHJhcmUgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiYXJyb3ctbGVmdFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGNvZGU+e2lucHV0RXhhbXBsZS5pbnB1dH08L2NvZGU+XHJcbiAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZXhlcmNpc2UtaW5mb19faW5wdXQtZXhhbXBsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIEllyJlpcmUgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiYXJyb3ctcmlnaHRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxjb2RlPntpbnB1dEV4YW1wbGUub3V0cHV0fTwvY29kZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyU2VjdGlvbiB0aXRsZT1cIlNvbHXIm2llXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5leGVyY2lzZS1pbmZvIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZXhlcmNpc2UtaW5mb19fZGVzY3JpcHRpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmV4ZXJjaXNlLWluZm9fX2RhdGEtaW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZXhlcmNpc2UtaW5mb19fZGF0YS1pbnB1dCBzcGFuIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5leGVyY2lzZS1pbmZvX19pbXBvcnRhbnQtZGF0YSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiB2YXIoLS1mb250LXNtYWxsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZXhlcmNpc2UtaW5mb19faW5wdXQtZXhhbXBsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCguZXhlcmNpc2UtaW5mb19faW5wdXQtZXhhbXBsZSBzdmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGNvZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBIZWFkZXJTZWN0aW9uKHsgdGl0bGUsIGNoaWxkcmVuID0gXCJcIiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLXNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxoMj57dGl0bGV9PC9oMj5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXItc2VjdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGhyIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlclRpdGxlRXhlcmNpc2UoeyBuZWVkc0hpbnQsIHVzZXJTb2x1dGlvbnMsIG9mZmljaWFsU29sdXRpb24gfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SGVhZGVyU2VjdGlvbiB0aXRsZT1cIkVudW7Im3VsIGV4ZXJjacibaXVsdWlcIj5cclxuICAgICAgICAgICAgICAgIHtuZWVkc0hpbnQgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLS1vdXRsaW5lXCI+SW5kaWNpaTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHt1c2VyU29sdXRpb25zICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi0tb3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTb2x1yJtpaWxlIHRhbGU6IHt1c2VyU29sdXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIHtvZmZpY2lhbFNvbHV0aW9uICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi0tb3V0bGluZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTb2x1yJtpYSBvZmljaWFsxINcclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIDwvSGVhZGVyU2VjdGlvbj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\IndividualExercise\\\\ExerciseInfo.js */"));
}

function HeaderSection(_ref2) {
  var title = _ref2.title,
      _ref2$children = _ref2.children,
      children = _ref2$children === void 0 ? "" : _ref2$children;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-703957868" + " " + "header-section",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "jsx-703957868",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 17
    }
  }, title), children, __jsx("hr", {
    className: "jsx-703957868",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 17
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "703957868",
    __self: this
  }, ".header-section.jsx-703957868{margin-top:50px;}h2.jsx-703957868{display:inline-block;margin-right:30px;vertical-align:middle;}hr.jsx-703957868{margin-top:15px;margin-bottom:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxFeGVyY2lzZVxcRXhlcmNpc2VJbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRHd0IsQUFHcUMsQUFJSyxBQU1MLGdCQVRwQixBQVV1QixLQU5ELGNBT3RCLElBTjBCLHNCQUMxQiIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxJbmRpdmlkdWFsRXhlcmNpc2VcXEV4ZXJjaXNlSW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEV4ZXJjaXNlSW5mbyh7XHJcbiAgICBuZWVkc0hpbnQsXHJcbiAgICB1c2VyU29sdXRpb25zLFxyXG4gICAgb2ZmaWNpYWxTb2x1dGlvbixcclxuICAgIGRhdGFJbnB1dCA9IHt9LFxyXG4gICAgaW1wb3J0YW50RGF0YSA9IFtdLFxyXG4gICAgaW5wdXRFeGFtcGxlID0ge30sXHJcbiAgICBjaGlsZHJlbixcclxufSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4ZXJjaXNlLWluZm9cIj5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJUaXRsZUV4ZXJjaXNlXHJcbiAgICAgICAgICAgICAgICAgICAgbmVlZHNIaW50PXtuZWVkc0hpbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlclNvbHV0aW9ucz17dXNlclNvbHV0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICBvZmZpY2lhbFNvbHV0aW9uPXtvZmZpY2lhbFNvbHV0aW9ufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImV4ZXJjaXNlLWluZm9fX2Rlc2NyaXB0aW9uXCI+e2NoaWxkcmVufTwvcD5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJleGVyY2lzZS1pbmZvX19kYXRhLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0ZSBkZSBpbnRyYXJlOiA8c3Bhbj57ZGF0YUlucHV0LnRvSW5wdXR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJleGVyY2lzZS1pbmZvX19kYXRhLWlucHV0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRGF0ZSBkZSBpZciZaXJlOiA8c3Bhbj57ZGF0YUlucHV0LnRvT3V0cHV0fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcblxyXG4gICAgICAgICAgICAgICAgPEhlYWRlclNlY3Rpb24gdGl0bGU9XCJPYnZzZXJ2YcibaWlcIiAvPlxyXG4gICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImV4ZXJjaXNlLWluZm9fX2ltcG9ydGFudC1kYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ltcG9ydGFudERhdGEubWFwKChkYXR1bSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkga2V5PXtgaW1wb3J0YW50LWRhdHVtXyR7aX1gfT57ZGF0dW19PC9saT5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgICAgICAgPEhlYWRlclNlY3Rpb24gdGl0bGU9XCJFeGVtcGx1XCIgLz5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJleGVyY2lzZS1pbmZvX19pbnB1dC1leGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSW50cmFyZSA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJhcnJvdy1sZWZ0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Y29kZT57aW5wdXRFeGFtcGxlLmlucHV0fTwvY29kZT5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJleGVyY2lzZS1pbmZvX19pbnB1dC1leGFtcGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgSWXImWlyZSA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJhcnJvdy1yaWdodFwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGNvZGU+e2lucHV0RXhhbXBsZS5vdXRwdXR9PC9jb2RlPlxyXG5cclxuICAgICAgICAgICAgICAgIDxIZWFkZXJTZWN0aW9uIHRpdGxlPVwiU29sdcibaWVcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmV4ZXJjaXNlLWluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5leGVyY2lzZS1pbmZvX19kZXNjcmlwdGlvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZXhlcmNpc2UtaW5mb19fZGF0YS1pbnB1dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5leGVyY2lzZS1pbmZvX19kYXRhLWlucHV0IHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmV4ZXJjaXNlLWluZm9fX2ltcG9ydGFudC1kYXRhIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHZhcigtLWZvbnQtc21hbGxlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5leGVyY2lzZS1pbmZvX19pbnB1dC1leGFtcGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5leGVyY2lzZS1pbmZvX19pbnB1dC1leGFtcGxlIHN2Zykge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDdweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxNXB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29kZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlclNlY3Rpb24oeyB0aXRsZSwgY2hpbGRyZW4gPSBcIlwiIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItc2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPGgyPnt0aXRsZX08L2gyPlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1zZWN0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSGVhZGVyVGl0bGVFeGVyY2lzZSh7IG5lZWRzSGludCwgdXNlclNvbHV0aW9ucywgb2ZmaWNpYWxTb2x1dGlvbiB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxIZWFkZXJTZWN0aW9uIHRpdGxlPVwiRW51bsibdWwgZXhlcmNpyJtpdWx1aVwiPlxyXG4gICAgICAgICAgICAgICAge25lZWRzSGludCAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tLW91dGxpbmVcIj5JbmRpY2lpPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge3VzZXJTb2x1dGlvbnMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLS1vdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNvbHXIm2lpbGUgdGFsZToge3VzZXJTb2x1dGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAge29mZmljaWFsU29sdXRpb24gJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLS1vdXRsaW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNvbHXIm2lhIG9maWNpYWzEg1xyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9IZWFkZXJTZWN0aW9uPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\IndividualExercise\\\\ExerciseInfo.js */"));
}

function HeaderTitleExercise(_ref3) {
  var needsHint = _ref3.needsHint,
      userSolutions = _ref3.userSolutions,
      officialSolution = _ref3.officialSolution;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(HeaderSection, {
    title: "Enun\u021Bul exerci\u021Biului",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, needsHint && __jsx("button", {
    className: "jsx-2183416548" + " " + "button--outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 21
    }
  }, "Indicii"), userSolutions && __jsx("button", {
    className: "jsx-2183416548" + " " + "button--outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 21
    }
  }, "Solu\u021Biile tale: ", userSolutions), officialSolution && __jsx("button", {
    className: "jsx-2183416548" + " " + "button--outline",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 21
    }
  }, "Solu\u021Bia oficial\u0103")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2183416548",
    __self: this
  }, "button.jsx-2183416548{display:inline-block;margin-right:30px;margin-top:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxFeGVyY2lzZVxcRXhlcmNpc2VJbmZvLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtKd0IsQUFHMEMscUJBQ0gsa0JBQ0YsZ0JBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxFeGVyY2lzZVxcRXhlcmNpc2VJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhlcmNpc2VJbmZvKHtcclxuICAgIG5lZWRzSGludCxcclxuICAgIHVzZXJTb2x1dGlvbnMsXHJcbiAgICBvZmZpY2lhbFNvbHV0aW9uLFxyXG4gICAgZGF0YUlucHV0ID0ge30sXHJcbiAgICBpbXBvcnRhbnREYXRhID0gW10sXHJcbiAgICBpbnB1dEV4YW1wbGUgPSB7fSxcclxuICAgIGNoaWxkcmVuLFxyXG59KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhlcmNpc2UtaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlclRpdGxlRXhlcmNpc2VcclxuICAgICAgICAgICAgICAgICAgICBuZWVkc0hpbnQ9e25lZWRzSGludH1cclxuICAgICAgICAgICAgICAgICAgICB1c2VyU29sdXRpb25zPXt1c2VyU29sdXRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgIG9mZmljaWFsU29sdXRpb249e29mZmljaWFsU29sdXRpb259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZXhlcmNpc2UtaW5mb19fZGVzY3JpcHRpb25cIj57Y2hpbGRyZW59PC9wPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImV4ZXJjaXNlLWluZm9fX2RhdGEtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICBEYXRlIGRlIGludHJhcmU6IDxzcGFuPntkYXRhSW5wdXQudG9JbnB1dH08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImV4ZXJjaXNlLWluZm9fX2RhdGEtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICBEYXRlIGRlIGllyJlpcmU6IDxzcGFuPntkYXRhSW5wdXQudG9PdXRwdXR9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuXHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyU2VjdGlvbiB0aXRsZT1cIk9idnNlcnZhyJtpaVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZXhlcmNpc2UtaW5mb19faW1wb3J0YW50LWRhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICB7aW1wb3J0YW50RGF0YS5tYXAoKGRhdHVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2BpbXBvcnRhbnQtZGF0dW1fJHtpfWB9PntkYXR1bX08L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICA8SGVhZGVyU2VjdGlvbiB0aXRsZT1cIkV4ZW1wbHVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImV4ZXJjaXNlLWluZm9fX2lucHV0LWV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBJbnRyYXJlIDxGb250QXdlc29tZUljb24gaWNvbj1cImFycm93LWxlZnRcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgIDxjb2RlPntpbnB1dEV4YW1wbGUuaW5wdXR9PC9jb2RlPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImV4ZXJjaXNlLWluZm9fX2lucHV0LWV4YW1wbGVcIj5cclxuICAgICAgICAgICAgICAgICAgICBJZciZaXJlIDxGb250QXdlc29tZUljb24gaWNvbj1cImFycm93LXJpZ2h0XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8Y29kZT57aW5wdXRFeGFtcGxlLm91dHB1dH08L2NvZGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPEhlYWRlclNlY3Rpb24gdGl0bGU9XCJTb2x1yJtpZVwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuZXhlcmNpc2UtaW5mbyB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmV4ZXJjaXNlLWluZm9fX2Rlc2NyaXB0aW9uIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5leGVyY2lzZS1pbmZvX19kYXRhLWlucHV0IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmV4ZXJjaXNlLWluZm9fX2RhdGEtaW5wdXQgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuZXhlcmNpc2UtaW5mb19faW1wb3J0YW50LWRhdGEge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbGVyKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmV4ZXJjaXNlLWluZm9fX2lucHV0LWV4YW1wbGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLmV4ZXJjaXNlLWluZm9fX2lucHV0LWV4YW1wbGUgc3ZnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogN3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb2RlIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gSGVhZGVyU2VjdGlvbih7IHRpdGxlLCBjaGlsZHJlbiA9IFwiXCIgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1zZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XHJcbiAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLXNlY3Rpb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBIZWFkZXJUaXRsZUV4ZXJjaXNlKHsgbmVlZHNIaW50LCB1c2VyU29sdXRpb25zLCBvZmZpY2lhbFNvbHV0aW9uIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPEhlYWRlclNlY3Rpb24gdGl0bGU9XCJFbnVuyJt1bCBleGVyY2nIm2l1bHVpXCI+XHJcbiAgICAgICAgICAgICAgICB7bmVlZHNIaW50ICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi0tb3V0bGluZVwiPkluZGljaWk8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7dXNlclNvbHV0aW9ucyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tLW91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU29sdcibaWlsZSB0YWxlOiB7dXNlclNvbHV0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICB7b2ZmaWNpYWxTb2x1dGlvbiAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tLW91dGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU29sdcibaWEgb2ZpY2lhbMSDXHJcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L0hlYWRlclNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\IndividualExercise\\\\ExerciseInfo.js */"));
}

/***/ }),

/***/ "./components/IndividualExercise/HeaderInfo.js":
/*!*****************************************************!*\
  !*** ./components/IndividualExercise/HeaderInfo.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderInfo; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_CheckmarkSolved__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/CheckmarkSolved */ "./components/utils/CheckmarkSolved.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _utils_difficultyText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/difficultyText */ "./components/utils/difficultyText.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\IndividualExercise\\HeaderInfo.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function HeaderInfo(_ref) {
  var title = _ref.title,
      _ref$isSolved = _ref.isSolved,
      isSolved = _ref$isSolved === void 0 ? false : _ref$isSolved,
      difficulty = _ref.difficulty,
      authorName = _ref.authorName,
      maxExecutionTime = _ref.maxExecutionTime,
      maxMemoryConsumption = _ref.maxMemoryConsumption,
      source = _ref.source,
      sentSolutions = _ref.sentSolutions;
  return __jsx("div", {
    className: "jsx-1977503723 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4150495787", [difficulty, difficulty]]]) + " " + "header-info-exercise",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "jsx-1977503723 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4150495787", [difficulty, difficulty]]]) + " " + "header-info-exercise__main-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, __jsx("h2", {
    className: "jsx-1977503723 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4150495787", [difficulty, difficulty]]]) + " " + "header-info-exercise__title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 17
    }
  }, title, isSolved && __jsx(_utils_CheckmarkSolved__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 34
    }
  })), __jsx("h3", {
    className: "jsx-1977503723 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4150495787", [difficulty, difficulty]]]) + " " + "header-info-exercise__difficulty",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }, Object(_utils_difficultyText__WEBPACK_IMPORTED_MODULE_4__["default"])(difficulty))), __jsx("hr", {
    className: "jsx-1977503723 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4150495787", [difficulty, difficulty]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: "jsx-1977503723 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4150495787", [difficulty, difficulty]]]) + " " + "header-info-exercise__secondary-details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-1977503723 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4150495787", [difficulty, difficulty]]]) + " " + "header-info-exercise__secondary-detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "jsx-1977503723 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4150495787", [difficulty, difficulty]]]) + " " + "header-info-exercise__profile-picture",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "jsx-1977503723 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4150495787", [difficulty, difficulty]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 21
    }
  }, "Postat\u0103 de:", " ", __jsx("span", {
    className: "jsx-1977503723 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4150495787", [difficulty, difficulty]]]) + " " + "underlined",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 25
    }
  }, authorName))), __jsx("div", {
    className: "jsx-1977503723 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4150495787", [difficulty, difficulty]]]) + " " + "header-info-exercise__secondary-detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "clock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "jsx-1977503723 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4150495787", [difficulty, difficulty]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }, "Timp maxim de execu\u021Bie: ", maxExecutionTime, " secunde")), __jsx("div", {
    className: "jsx-1977503723 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4150495787", [difficulty, difficulty]]]) + " " + "header-info-exercise__secondary-detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "memory",
    className: "header-info-exercise__icon--needs-media-query",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "jsx-1977503723 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4150495787", [difficulty, difficulty]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, "Memorie maxim\u0103: ", maxMemoryConsumption, " MB")), __jsx("div", {
    className: "jsx-1977503723 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4150495787", [difficulty, difficulty]]]) + " " + "header-info-exercise__secondary-detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "code-branch",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "jsx-1977503723 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4150495787", [difficulty, difficulty]]]),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 21
    }
  }, "Surs\u0103: ", source)), __jsx("div", {
    className: "jsx-1977503723 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4150495787", [difficulty, difficulty]]]) + " " + "header-info-exercise__secondary-detail",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 17
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "upload",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 21
    }
  }), __jsx("p", {
    className: "jsx-1977503723 " + styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["4150495787", [difficulty, difficulty]]]) + " " + "header-info-exercise__secondary-details--no-border",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 21
    }
  }, "Solu\u021Bii trimise: ", sentSolutions))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "4150495787",
    dynamic: [difficulty, difficulty],
    __self: this
  }, ".header-info-exercise__difficulty.__jsx-style-dynamic-selector{background-color:var(--difficulty-".concat(difficulty, ");}hr.__jsx-style-dynamic-selector{border-color:var(--difficulty-").concat(difficulty, ");}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxFeGVyY2lzZVxcSGVhZGVySW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRHdCLEFBSXFGLEFBS0osNERBQ2hFLElBTEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcSW5kaXZpZHVhbEV4ZXJjaXNlXFxIZWFkZXJJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoZWNrbWFya1NvbHZlZCBmcm9tIFwiLi4vdXRpbHMvQ2hlY2ttYXJrU29sdmVkXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IGRpZmZpY3VsdHlUZXh0IGZyb20gXCIuLi91dGlscy9kaWZmaWN1bHR5VGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVySW5mbyh7XHJcbiAgICB0aXRsZSxcclxuICAgIGlzU29sdmVkID0gZmFsc2UsXHJcbiAgICBkaWZmaWN1bHR5LFxyXG4gICAgYXV0aG9yTmFtZSxcclxuICAgIG1heEV4ZWN1dGlvblRpbWUsXHJcbiAgICBtYXhNZW1vcnlDb25zdW1wdGlvbixcclxuICAgIHNvdXJjZSxcclxuICAgIHNlbnRTb2x1dGlvbnMsXHJcbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5mby1leGVyY2lzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbmZvLWV4ZXJjaXNlX19tYWluLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXItaW5mby1leGVyY2lzZV9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAge2lzU29sdmVkICYmIDxDaGVja21hcmtTb2x2ZWQgLz59XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImhlYWRlci1pbmZvLWV4ZXJjaXNlX19kaWZmaWN1bHR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RpZmZpY3VsdHlUZXh0KGRpZmZpY3VsdHkpfVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWluZm8tZXhlcmNpc2VfX3NlY29uZGFyeS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbmZvLWV4ZXJjaXNlX19zZWNvbmRhcnktZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5mby1leGVyY2lzZV9fcHJvZmlsZS1waWN0dXJlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvc3RhdMSDIGRlOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidW5kZXJsaW5lZFwiPnthdXRob3JOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWluZm8tZXhlcmNpc2VfX3NlY29uZGFyeS1kZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJjbG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+VGltcCBtYXhpbSBkZSBleGVjdcibaWU6IHttYXhFeGVjdXRpb25UaW1lfSBzZWN1bmRlPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbmZvLWV4ZXJjaXNlX19zZWNvbmRhcnktZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwibWVtb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLWluZm8tZXhlcmNpc2VfX2ljb24tLW5lZWRzLW1lZGlhLXF1ZXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk1lbW9yaWUgbWF4aW3Egzoge21heE1lbW9yeUNvbnN1bXB0aW9ufSBNQjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5mby1leGVyY2lzZV9fc2Vjb25kYXJ5LWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImNvZGUtYnJhbmNoXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5TdXJzxIM6IHtzb3VyY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbmZvLWV4ZXJjaXNlX19zZWNvbmRhcnktZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidXBsb2FkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWFkZXItaW5mby1leGVyY2lzZV9fc2Vjb25kYXJ5LWRldGFpbHMtLW5vLWJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTb2x1yJtpaSB0cmltaXNlOiB7c2VudFNvbHV0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXItaW5mby1leGVyY2lzZV9fZGlmZmljdWx0eSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogcHJldHRpZXItaWdub3JlICovXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmZmljdWx0eS0ke2RpZmZpY3VsdHl9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogcHJldHRpZXItaWdub3JlICovXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kaWZmaWN1bHR5LSR7ZGlmZmljdWx0eX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXItaW5mby1leGVyY2lzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE0MHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1pbmZvLWV4ZXJjaXNlX19kaWZmaWN1bHR5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1idXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1pbmZvLWV4ZXJjaXNlX19tYWluLWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWluZm8tZXhlcmNpc2VfX3RpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtOC41cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1pbmZvLWV4ZXJjaXNlX19wcm9maWxlLXBpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWluZm8tZXhlcmNpc2VfX3NlY29uZGFyeS1kZXRhaWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWluZm8tZXhlcmNpc2VfX3NlY29uZGFyeS1kZXRhaWw6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWluZm8tZXhlcmNpc2VfX3NlY29uZGFyeS1kZXRhaWxzIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXItaW5mby1leGVyY2lzZV9fc2Vjb25kYXJ5LWRldGFpbHMgcDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCguaGVhZGVyLWluZm8tZXhlcmNpc2VfX3NlY29uZGFyeS1kZXRhaWxzIHN2Zykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXItaW5mby1leGVyY2lzZV9fc2Vjb25kYXJ5LWRldGFpbHMtLW5vLWJvcmRlcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLWluZm8tZXhlcmNpc2VfX21haW4tZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2M3B4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChzdmcuaGVhZGVyLWluZm8tZXhlcmNpc2VfX2ljb24tLW5lZWRzLW1lZGlhLXF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\IndividualExercise\\\\HeaderInfo.js */")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1977503723",
    __self: this
  }, ".header-info-exercise.jsx-1977503723{width:90%;margin:140px auto;color:var(--text-primary);}.header-info-exercise__difficulty.jsx-1977503723{color:var(--text-button);padding:4px 10px;border-radius:5px;}hr.jsx-1977503723{margin-top:15px;margin-bottom:5px;}.header-info-exercise__main-details.jsx-1977503723{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;}.header-info-exercise__title.jsx-1977503723{margin-bottom:-8.5px;}.header-info-exercise__profile-picture.jsx-1977503723{width:30px;height:30px;background-color:var(--background-tertiary);border-radius:50%;margin-right:10px;display:inline-block;}.header-info-exercise__secondary-detail.jsx-1977503723{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;vertical-align:middle;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;margin-top:10px;margin-right:15px;}.header-info-exercise__secondary-detail.jsx-1977503723:first-child{padding-left:0;}.header-info-exercise__secondary-details.jsx-1977503723 p.jsx-1977503723{padding-right:15px;position:relative;}.header-info-exercise__secondary-details.jsx-1977503723 p.jsx-1977503723::after{content:\"\";position:absolute;right:0;top:6px;width:1px;height:50%;background-color:var(--text-tertiary);}.header-info-exercise__secondary-details svg{margin-right:10px;vertical-align:middle;}.header-info-exercise__secondary-details--no-border.jsx-1977503723::after{display:none;}@media screen and (max-width:425px){.header-info-exercise__main-details.jsx-1977503723{-webkit-flex-direction:column-reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;}}@media screen and (max-width:363px){svg.header-info-exercise__icon--needs-media-query{margin-left:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxFeGVyY2lzZVxcSGVhZGVySW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRXdCLEFBRytCLEFBTWUsQUFNVCxBQUtILEFBTVEsQUFJVixBQVNTLEFBUUwsQUFJSSxBQUtSLEFBVU8sQUFLTCxBQUtxQixBQU9oQixVQS9FQSxDQTJCTixBQTBCTSxFQWV0QixDQVlJLENBcENKLENBaENzQixFQW1ESSxDQWZKLEVBekJ0QixFQUtnRCxFQXRCM0IsR0FMUyxDQXFEbEIsS0F6Q1osR0FvQ0EsQUFNWSxHQVNaLEVBekRzQixHQWlEUixTQXREZCxDQXVEZSxLQWpEZixNQWtEMEMsQ0E3QnBCLE9BWlksV0FhWixpQkFNSSxBQXFDSyxDQTFDTixDQTRCekIsb0JBM0JBLEFBS3VCLGlFQW5CRSxzQkF3RHJCLE1BcENnQixnQkFDRSxrQkFDdEIsdUNBckJBIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxFeGVyY2lzZVxcSGVhZGVySW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaGVja21hcmtTb2x2ZWQgZnJvbSBcIi4uL3V0aWxzL0NoZWNrbWFya1NvbHZlZFwiO1xyXG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XHJcbmltcG9ydCBkaWZmaWN1bHR5VGV4dCBmcm9tIFwiLi4vdXRpbHMvZGlmZmljdWx0eVRleHRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlckluZm8oe1xyXG4gICAgdGl0bGUsXHJcbiAgICBpc1NvbHZlZCA9IGZhbHNlLFxyXG4gICAgZGlmZmljdWx0eSxcclxuICAgIGF1dGhvck5hbWUsXHJcbiAgICBtYXhFeGVjdXRpb25UaW1lLFxyXG4gICAgbWF4TWVtb3J5Q29uc3VtcHRpb24sXHJcbiAgICBzb3VyY2UsXHJcbiAgICBzZW50U29sdXRpb25zLFxyXG59KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWluZm8tZXhlcmNpc2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5mby1leGVyY2lzZV9fbWFpbi1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaGVhZGVyLWluZm8tZXhlcmNpc2VfX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgIHtpc1NvbHZlZCAmJiA8Q2hlY2ttYXJrU29sdmVkIC8+fVxyXG4gICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJoZWFkZXItaW5mby1leGVyY2lzZV9fZGlmZmljdWx0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtkaWZmaWN1bHR5VGV4dChkaWZmaWN1bHR5KX1cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGhyIC8+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbmZvLWV4ZXJjaXNlX19zZWNvbmRhcnktZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5mby1leGVyY2lzZV9fc2Vjb25kYXJ5LWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWluZm8tZXhlcmNpc2VfX3Byb2ZpbGUtcGljdHVyZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQb3N0YXTEgyBkZTp7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInVuZGVybGluZWRcIj57YXV0aG9yTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbmZvLWV4ZXJjaXNlX19zZWNvbmRhcnktZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiY2xvY2tcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPlRpbXAgbWF4aW0gZGUgZXhlY3XIm2llOiB7bWF4RXhlY3V0aW9uVGltZX0gc2VjdW5kZTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5mby1leGVyY2lzZV9fc2Vjb25kYXJ5LWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbj1cIm1lbW9yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhlYWRlci1pbmZvLWV4ZXJjaXNlX19pY29uLS1uZWVkcy1tZWRpYS1xdWVyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5NZW1vcmllIG1heGltxIM6IHttYXhNZW1vcnlDb25zdW1wdGlvbn0gTUI8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWluZm8tZXhlcmNpc2VfX3NlY29uZGFyeS1kZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJjb2RlLWJyYW5jaFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+U3Vyc8SDOiB7c291cmNlfTwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5mby1leGVyY2lzZV9fc2Vjb25kYXJ5LWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInVwbG9hZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiaGVhZGVyLWluZm8tZXhlcmNpc2VfX3NlY29uZGFyeS1kZXRhaWxzLS1uby1ib3JkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU29sdcibaWkgdHJpbWlzZToge3NlbnRTb2x1dGlvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWluZm8tZXhlcmNpc2VfX2RpZmZpY3VsdHkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIHByZXR0aWVyLWlnbm9yZSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpZmZpY3VsdHktJHtkaWZmaWN1bHR5fSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICAgICAgICAgIC8qIHByZXR0aWVyLWlnbm9yZSAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tZGlmZmljdWx0eS0ke2RpZmZpY3VsdHl9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWluZm8tZXhlcmNpc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAxNDBweCBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXItaW5mby1leGVyY2lzZV9fZGlmZmljdWx0eSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYnV0dG9uKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaHIge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXItaW5mby1leGVyY2lzZV9fbWFpbi1kZXRhaWxzIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1pbmZvLWV4ZXJjaXNlX190aXRsZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogLTguNXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXItaW5mby1leGVyY2lzZV9fcHJvZmlsZS1waWN0dXJlIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC10ZXJ0aWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1pbmZvLWV4ZXJjaXNlX19zZWNvbmRhcnktZGV0YWlsIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1pbmZvLWV4ZXJjaXNlX19zZWNvbmRhcnktZGV0YWlsOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1pbmZvLWV4ZXJjaXNlX19zZWNvbmRhcnktZGV0YWlscyBwIHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWluZm8tZXhlcmNpc2VfX3NlY29uZGFyeS1kZXRhaWxzIHA6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRleHQtdGVydGlhcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLmhlYWRlci1pbmZvLWV4ZXJjaXNlX19zZWNvbmRhcnktZGV0YWlscyBzdmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWluZm8tZXhlcmNpc2VfX3NlY29uZGFyeS1kZXRhaWxzLS1uby1ib3JkZXI6OmFmdGVyIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmhlYWRlci1pbmZvLWV4ZXJjaXNlX19tYWluLWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzNjNweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIDpnbG9iYWwoc3ZnLmhlYWRlci1pbmZvLWV4ZXJjaXNlX19pY29uLS1uZWVkcy1tZWRpYS1xdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\IndividualExercise\\\\HeaderInfo.js */"));
}

/***/ }),

/***/ "./components/IndividualExercise/ResultsArea.js":
/*!******************************************************!*\
  !*** ./components/IndividualExercise/ResultsArea.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Results; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_CheckmarkSolved__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/CheckmarkSolved */ "./components/utils/CheckmarkSolved.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _utils_ErrorCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ErrorCircle */ "./components/utils/ErrorCircle.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\IndividualExercise\\ResultsArea.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Results(_ref) {
  var _this = this;

  var totalPointsGained = _ref.totalPointsGained,
      _ref$testResults = _ref.testResults,
      testResults = _ref$testResults === void 0 ? [] : _ref$testResults,
      toggleResultsComponent = _ref.toggleResultsComponent;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2552219495" + " " + "results",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "jsx-2552219495" + " " + "results__band",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "jsx-2552219495" + " " + "results__points",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 17
    }
  }, __jsx("p", {
    className: "jsx-2552219495",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }
  }, "Total"), __jsx("h2", {
    className: "jsx-2552219495",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 21
    }
  }, totalPointsGained, " puncte")), __jsx("div", {
    className: "jsx-2552219495" + " " + "results__tests",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 17
    }
  }, testResults.map(function (_ref2, i) {
    var didPass = _ref2.didPass,
        timeTaken = _ref2.timeTaken,
        memoryUsed = _ref2.memoryUsed,
        failureCode = _ref2.failureCode;
    return __jsx("div", {
      style: {
        animationDelay: 200 * (i + 1) + "ms"
      },
      key: "results__test-container_".concat(i + 1),
      className: "jsx-2552219495" + " " + "results__test ".concat(!didPass ? "results__test--failed" : "results__test--passed"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }
    }, __jsx("h3", {
      key: "results__test-number_".concat(i + 1),
      className: "jsx-2552219495",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 29
      }
    }, "Testul ", i + 1), didPass ? __jsx("div", {
      className: "jsx-2552219495" + " " + "results__details",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 33
      }
    }, __jsx("p", {
      className: "jsx-2552219495" + " " + "results__seconds--with-border",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 37
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: "clock",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 41
      }
    }), timeTaken, " secunde"), __jsx("p", {
      className: "jsx-2552219495",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 37
      }
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      icon: "memory",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 41
      }
    }), memoryUsed, " MB folosi\u021Bi"), __jsx(_utils_CheckmarkSolved__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: "results__solved-test_".concat(i + 1),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 37
      }
    })) : returnElementForFailureCode(failureCode));
  }), __jsx(ReturnToSolutionButton, {
    onClick: toggleResultsComponent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2552219495",
    __self: this
  }, ".results.jsx-2552219495{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;z-index:2;color:var(--text-button);margin:50px 0 80px;padding:0 65px;}.results__band.jsx-2552219495{width:0;height:40%;min-height:100px;max-height:250px;left:0;position:absolute;background-color:var(--accent-primary);z-index:-1;-webkit-animation:slideIn-jsx-2552219495 2500ms ease forwards;animation:slideIn-jsx-2552219495 2500ms ease forwards;}.results__points.jsx-2552219495{width:30%;height:100%;text-align:center;}.results__tests.jsx-2552219495{width:70%;height:100%;}.results__test.jsx-2552219495{width:100%;padding:20px 30px;background-color:var(--background-primary);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:10px;border-radius:50px;box-shadow:var(--box-shadow);-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;opacity:0;-webkit-transform:translateY(-5px) rotateX(69deg);-ms-transform:translateY(-5px) rotateX(69deg);transform:translateY(-5px) rotateX(69deg);-webkit-transform-origin:top center;-ms-transform-origin:top center;transform-origin:top center;-webkit-animation:revealIn-jsx-2552219495 500ms ease forwards;animation:revealIn-jsx-2552219495 500ms ease forwards;}.results__details.jsx-2552219495{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.results__details svg{margin-right:10px;}.results__seconds--with-border.jsx-2552219495{position:relative;padding-right:15px;}.results__seconds--with-border.jsx-2552219495::after{content:\"\";position:absolute;right:0;top:20%;width:1px;height:60%;background-color:var(--text-button);}h3.jsx-2552219495{font-size:var(--font-smaller);}.results__test--passed.jsx-2552219495{background-color:var(--accent-success);}.results__test--failed.jsx-2552219495{background-color:var(--accent-failure-secondary);}.results .error-circle{margin-right:0;}.results__test.jsx-2552219495:last-child{border-bottom:none;}.results__test p > svg{margin-left:15px;}.results__test p{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.results .checkmark-solved{margin-right:0;}@media screen and (max-width:825px){.results.jsx-2552219495{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.results__points.jsx-2552219495,.results__tests.jsx-2552219495{width:100%;}.results__points.jsx-2552219495{margin:25px 0 50px;}.results__test.jsx-2552219495{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.results__test.jsx-2552219495 h3.jsx-2552219495{margin-bottom:10px;}.results__band.jsx-2552219495{height:30%;}}@media screen and (max-width:576px){.results__tests.jsx-2552219495{width:120%;}}@media screen and (max-width:375px){.results__tests.jsx-2552219495{width:150%;}}@-webkit-keyframes revealIn-jsx-2552219495{from{-webkit-transform:translateY(-5px) rotateX(69deg);-ms-transform:translateY(-5px) rotateX(69deg);transform:translateY(-5px) rotateX(69deg);opacity:0;}to{-webkit-transform:translateY(0) rotateX(0);-ms-transform:translateY(0) rotateX(0);transform:translateY(0) rotateX(0);opacity:1;}}@keyframes revealIn-jsx-2552219495{from{-webkit-transform:translateY(-5px) rotateX(69deg);-ms-transform:translateY(-5px) rotateX(69deg);transform:translateY(-5px) rotateX(69deg);opacity:0;}to{-webkit-transform:translateY(0) rotateX(0);-ms-transform:translateY(0) rotateX(0);transform:translateY(0) rotateX(0);opacity:1;}}@-webkit-keyframes slideIn-jsx-2552219495{from{width:0;}to{width:100%;}}@keyframes slideIn-jsx-2552219495{from{width:0;}to{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxFeGVyY2lzZVxcUmVzdWx0c0FyZWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNEN3QixBQUd1QyxBQVVWLEFBWUUsQUFNQSxBQUtDLEFBZ0JFLEFBS0ssQUFJQSxBQUtQLEFBVW1CLEFBSVMsQUFJVSxBQUlsQyxBQUlJLEFBSUYsQUFJSixBQUtFLEFBS1csQUFLWCxBQUlRLEFBSUcsQUFJSCxBQUlSLEFBTUEsQUFNQSxBQU0rQixBQUlQLEFBTzNCLEFBR0csUUFySkosQUFtSlgsRUF2SVksQUFNQSxDQUtNLEFBOEJBLEFBaURsQixBQWdCQSxBQU1BLEFBTUEsQUFvQkEsSUEzRUosQUFpQkEsRUFUQSxDQTdGaUIsQUFzRGpCLEFBSXVCLENBL0NGLEFBOEVyQixBQTJCSSxBQVFBLEdBckdrQixBQU10QixPQUsrQyxBQThCbkMsQ0FTWixNQTdEcUIsQ0ErQ3JCLEFBTVksRUFZWixDQXJEQSxLQTBDYyxJQWVkLElBcEVXLEVBc0RJLEtBckRPLE1Bc0RrQixNQWpDdkIsRUFjTSxBQWdEQSxJQWxGb0IsQUE0RnZDLEFBYUEsY0F2SG1CLFVBb0V2QixlQXJEZSxBQXNJRyxVQUNkLENBdEl1QyxVQWlJekIsUUE5R2dCLEVBK0c5QixtQkFqR0osQUFnREEsa0JBaEdjLFVBQ2UseUJBQ04sbUJBQ0osS0FhbkIsVUFaQSxPQStCdUIsbUJBQ0EsbUJBQ1UsNkJBQ1YsNkZBQ1QsVUFDZ0MsMElBQ2QsZ0dBQ1csb0hBQzNDIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxFeGVyY2lzZVxcUmVzdWx0c0FyZWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hlY2ttYXJrU29sdmVkIGZyb20gXCIuLi91dGlscy9DaGVja21hcmtTb2x2ZWRcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgRXJyb3JDaXJjbGUgZnJvbSBcIi4uL3V0aWxzL0Vycm9yQ2lyY2xlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN1bHRzKHsgdG90YWxQb2ludHNHYWluZWQsIHRlc3RSZXN1bHRzID0gW10sIHRvZ2dsZVJlc3VsdHNDb21wb25lbnQgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c19fYmFuZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzX19wb2ludHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Ub3RhbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e3RvdGFsUG9pbnRzR2FpbmVkfSBwdW5jdGU8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHNfX3Rlc3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Rlc3RSZXN1bHRzLm1hcCgoeyBkaWRQYXNzLCB0aW1lVGFrZW4sIG1lbW9yeVVzZWQsIGZhaWx1cmVDb2RlIH0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVzdWx0c19fdGVzdCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkaWRQYXNzID8gXCJyZXN1bHRzX190ZXN0LS1mYWlsZWRcIiA6IFwicmVzdWx0c19fdGVzdC0tcGFzc2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6IDIwMCAqIChpICsgMSkgKyBcIm1zXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YHJlc3VsdHNfX3Rlc3QtY29udGFpbmVyXyR7aSArIDF9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGtleT17YHJlc3VsdHNfX3Rlc3QtbnVtYmVyXyR7aSArIDF9YH0+VGVzdHVsIHtpICsgMX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpZFBhc3MgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzX19kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJlc3VsdHNfX3NlY29uZHMtLXdpdGgtYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJjbG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltZVRha2VufSBzZWN1bmRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJtZW1vcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbW9yeVVzZWR9IE1CIGZvbG9zacibaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja21hcmtTb2x2ZWQga2V5PXtgcmVzdWx0c19fc29sdmVkLXRlc3RfJHtpICsgMX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5FbGVtZW50Rm9yRmFpbHVyZUNvZGUoZmFpbHVyZUNvZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8UmV0dXJuVG9Tb2x1dGlvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVSZXN1bHRzQ29tcG9uZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnJlc3VsdHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1idXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNTBweCAwIDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA2NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yZXN1bHRzX19iYW5kIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZUluIDI1MDBtcyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yZXN1bHRzX19wb2ludHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucmVzdWx0c19fdGVzdHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yZXN1bHRzX190ZXN0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSByb3RhdGVYKDY5ZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogcmV2ZWFsSW4gNTAwbXMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucmVzdWx0c19fZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLnJlc3VsdHNfX2RldGFpbHMgc3ZnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yZXN1bHRzX19zZWNvbmRzLS13aXRoLWJvcmRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnJlc3VsdHNfX3NlY29uZHMtLXdpdGgtYm9yZGVyOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucmVzdWx0c19fdGVzdC0tcGFzc2VkIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnJlc3VsdHNfX3Rlc3QtLWZhaWxlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWZhaWx1cmUtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5yZXN1bHRzIC5lcnJvci1jaXJjbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnJlc3VsdHNfX3Rlc3Q6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5yZXN1bHRzX190ZXN0IHAgPiBzdmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5yZXN1bHRzX190ZXN0IHApIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgucmVzdWx0cyAuY2hlY2ttYXJrLXNvbHZlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5yZXN1bHRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXN1bHRzX19wb2ludHMsXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlc3VsdHNfX3Rlc3RzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucmVzdWx0c19fcG9pbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDAgNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXN1bHRzX190ZXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXN1bHRzX190ZXN0IGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXN1bHRzX19iYW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnJlc3VsdHNfX3Rlc3RzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnJlc3VsdHNfX3Rlc3RzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgcmV2ZWFsSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCkgcm90YXRlWCg2OWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVgoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2xpZGVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmV0dXJuVG9Tb2x1dGlvbkJ1dHRvbih7IG9uQ2xpY2sgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi0tdGVydGlhcnlcIiBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgIMOObnRvYXJjZS10ZSDDrm5hcG9pXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDY1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXR1cm5FbGVtZW50Rm9yRmFpbHVyZUNvZGUoZmFpbHVyZUNvZGUpIHtcclxuICAgIGlmIChmYWlsdXJlQ29kZSA9PT0gLTEpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBMaW1pdMSDIGRlIHRpbXAgZGVwxIPImWl0xIMgPEVycm9yQ2lyY2xlIC8+e1wiIFwifVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKTtcclxuICAgIGVsc2UgaWYgKGZhaWx1cmVDb2RlID09PSAtMilcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIExpbWl0xIMgZGUgbWVtb3JpZSBkZXDEg8iZaXTEgyA8RXJyb3JDaXJjbGUgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICApO1xyXG4gICAgZWxzZSBpZiAoZmFpbHVyZUNvZGUgPT09IC0zKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgRXJvYXJlIGNvZCAtMyA8RXJyb3JDaXJjbGUgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\IndividualExercise\\\\ResultsArea.js */"));
}

function ReturnToSolutionButton(_ref3) {
  var onClick = _ref3.onClick;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("button", {
    onClick: onClick,
    className: "jsx-662857289" + " " + "button--tertiary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 13
    }
  }, "\xCEntoarce-te \xEEnapoi"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "662857289",
    __self: this
  }, "button.jsx-662857289{position:absolute;right:0;margin-right:65px;width:200px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxFeGVyY2lzZVxcUmVzdWx0c0FyZWEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNE53QixBQUd1QyxrQkFDVixRQUNVLGtCQUNOLFlBQ2hCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxFeGVyY2lzZVxcUmVzdWx0c0FyZWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hlY2ttYXJrU29sdmVkIGZyb20gXCIuLi91dGlscy9DaGVja21hcmtTb2x2ZWRcIjtcclxuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5pbXBvcnQgRXJyb3JDaXJjbGUgZnJvbSBcIi4uL3V0aWxzL0Vycm9yQ2lyY2xlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBSZXN1bHRzKHsgdG90YWxQb2ludHNHYWluZWQsIHRlc3RSZXN1bHRzID0gW10sIHRvZ2dsZVJlc3VsdHNDb21wb25lbnQgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVzdWx0c19fYmFuZFwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzX19wb2ludHNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD5Ub3RhbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8aDI+e3RvdGFsUG9pbnRzR2FpbmVkfSBwdW5jdGU8L2gyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHNfX3Rlc3RzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Rlc3RSZXN1bHRzLm1hcCgoeyBkaWRQYXNzLCB0aW1lVGFrZW4sIG1lbW9yeVVzZWQsIGZhaWx1cmVDb2RlIH0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVzdWx0c19fdGVzdCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFkaWRQYXNzID8gXCJyZXN1bHRzX190ZXN0LS1mYWlsZWRcIiA6IFwicmVzdWx0c19fdGVzdC0tcGFzc2VkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYW5pbWF0aW9uRGVsYXk6IDIwMCAqIChpICsgMSkgKyBcIm1zXCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YHJlc3VsdHNfX3Rlc3QtY29udGFpbmVyXyR7aSArIDF9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGtleT17YHJlc3VsdHNfX3Rlc3QtbnVtYmVyXyR7aSArIDF9YH0+VGVzdHVsIHtpICsgMX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2RpZFBhc3MgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXN1bHRzX19kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJlc3VsdHNfX3NlY29uZHMtLXdpdGgtYm9yZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJjbG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGltZVRha2VufSBzZWN1bmRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJtZW1vcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21lbW9yeVVzZWR9IE1CIGZvbG9zacibaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja21hcmtTb2x2ZWQga2V5PXtgcmVzdWx0c19fc29sdmVkLXRlc3RfJHtpICsgMX1gfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5FbGVtZW50Rm9yRmFpbHVyZUNvZGUoZmFpbHVyZUNvZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICAgICAgICA8UmV0dXJuVG9Tb2x1dGlvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVSZXN1bHRzQ29tcG9uZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLnJlc3VsdHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1idXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNTBweCAwIDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCA2NXB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yZXN1bHRzX19iYW5kIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMDBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgei1pbmRleDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiBzbGlkZUluIDI1MDBtcyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yZXN1bHRzX19wb2ludHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucmVzdWx0c19fdGVzdHMge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yZXN1bHRzX190ZXN0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tYm94LXNoYWRvdyk7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNXB4KSByb3RhdGVYKDY5ZGVnKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogcmV2ZWFsSW4gNTAwbXMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucmVzdWx0c19fZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIDpnbG9iYWwoLnJlc3VsdHNfX2RldGFpbHMgc3ZnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5yZXN1bHRzX19zZWNvbmRzLS13aXRoLWJvcmRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnJlc3VsdHNfX3NlY29uZHMtLXdpdGgtYm9yZGVyOjphZnRlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDYwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0LWJ1dHRvbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZm9udC1zbWFsbGVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAucmVzdWx0c19fdGVzdC0tcGFzc2VkIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtc3VjY2Vzcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnJlc3VsdHNfX3Rlc3QtLWZhaWxlZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWZhaWx1cmUtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5yZXN1bHRzIC5lcnJvci1jaXJjbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLnJlc3VsdHNfX3Rlc3Q6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5yZXN1bHRzX190ZXN0IHAgPiBzdmcpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5yZXN1bHRzX190ZXN0IHApIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCgucmVzdWx0cyAuY2hlY2ttYXJrLXNvbHZlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MjVweCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC5yZXN1bHRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXN1bHRzX19wb2ludHMsXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlc3VsdHNfX3Rlc3RzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucmVzdWx0c19fcG9pbnRzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDAgNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXN1bHRzX190ZXN0IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXN1bHRzX190ZXN0IGgzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXN1bHRzX19iYW5kIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAzMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnJlc3VsdHNfX3Rlc3RzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEyMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM3NXB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLnJlc3VsdHNfX3Rlc3RzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgcmV2ZWFsSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTVweCkgcm90YXRlWCg2OWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHJvdGF0ZVgoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBrZXlmcmFtZXMgc2xpZGVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0byB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gUmV0dXJuVG9Tb2x1dGlvbkJ1dHRvbih7IG9uQ2xpY2sgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi0tdGVydGlhcnlcIiBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgIMOObnRvYXJjZS10ZSDDrm5hcG9pXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDY1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZXR1cm5FbGVtZW50Rm9yRmFpbHVyZUNvZGUoZmFpbHVyZUNvZGUpIHtcclxuICAgIGlmIChmYWlsdXJlQ29kZSA9PT0gLTEpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICBMaW1pdMSDIGRlIHRpbXAgZGVwxIPImWl0xIMgPEVycm9yQ2lyY2xlIC8+e1wiIFwifVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgKTtcclxuICAgIGVsc2UgaWYgKGZhaWx1cmVDb2RlID09PSAtMilcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIExpbWl0xIMgZGUgbWVtb3JpZSBkZXDEg8iZaXTEgyA8RXJyb3JDaXJjbGUgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICApO1xyXG4gICAgZWxzZSBpZiAoZmFpbHVyZUNvZGUgPT09IC0zKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgRXJvYXJlIGNvZCAtMyA8RXJyb3JDaXJjbGUgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICApO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\IndividualExercise\\\\ResultsArea.js */"));
}

function returnElementForFailureCode(failureCode) {
  if (failureCode === -1) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 13
    }
  }, "Limit\u0103 de timp dep\u0103\u0219it\u0103 ", __jsx(_utils_ErrorCircle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 237,
      columnNumber: 41
    }
  }), " ");else if (failureCode === -2) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 242,
      columnNumber: 13
    }
  }, "Limit\u0103 de memorie dep\u0103\u0219it\u0103 ", __jsx(_utils_ErrorCircle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243,
      columnNumber: 44
    }
  }), " ");else if (failureCode === -3) return __jsx("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 13
    }
  }, "Eroare cod -3 ", __jsx(_utils_ErrorCircle__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249,
      columnNumber: 31
    }
  }), " ");
}

/***/ }),

/***/ "./components/IndividualExercise/SolutionArea.js":
/*!*******************************************************!*\
  !*** ./components/IndividualExercise/SolutionArea.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SolutionArea; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\IndividualExercise\\SolutionArea.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function SolutionArea(_ref) {
  var toggleResultsComponent = _ref.toggleResultsComponent;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("div", {
    className: "jsx-2028628620" + " " + "solution-area",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }
  }, __jsx("h3", {
    className: "jsx-2028628620",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 17
    }
  }, "Incarc\u0103 solu\u021Bia aici"), __jsx("p", {
    className: "jsx-2028628620",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 17
    }
  }, "Este recomandat\u0103 verificarea codului \xEEntr-un program corespunz\u0103tor \xEEnainte de a fi postat\u0103, pentru a asigura inexisten\u021Ba erorilor de compilare sau de rezultat."), __jsx("textarea", {
    cols: "30",
    rows: "10",
    className: "jsx-2028628620",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 17
    }
  }), __jsx(SendSolutionButton, {
    onClick: toggleResultsComponent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 17
    }
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2028628620",
    __self: this
  }, "h3.jsx-2028628620,p.jsx-2028628620{color:var(--text-primary);}p.jsx-2028628620{margin-bottom:50px;}.solution-area.jsx-2028628620{width:90%;margin:0 auto 50px;position:relative;-webkit-animation:comeIn-jsx-2028628620 300ms ease forwards;animation:comeIn-jsx-2028628620 300ms ease forwards;}textarea.jsx-2028628620{min-width:100%;max-width:100%;min-height:400px;background-color:var(--background-secondary);border-radius:15px;padding:10px;margin-bottom:60px;color:var(--text-primary);border:2px solid var(--accent-primary);}@-webkit-keyframes comeIn-jsx-2028628620{from{-webkit-transform:translateX(15px);-ms-transform:translateX(15px);transform:translateX(15px);opacity:0;}to{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}}@keyframes comeIn-jsx-2028628620{from{-webkit-transform:translateX(15px);-ms-transform:translateX(15px);transform:translateX(15px);opacity:0;}to{-webkit-transform:translateX(0);-ms-transform:translateX(0);transform:translateX(0);opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxFeGVyY2lzZVxcU29sdXRpb25BcmVhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCd0IsQUFJK0MsQUFJUCxBQUlULEFBT0ssQUFhZ0IsQUFJSCxVQXZCVCxLQU9KLElBWG5CLE9BSkEsR0FTc0IsQ0FPRCxpQkFOb0IsQUFPUSxxQ0FlL0IsUUFkSyxDQVVMLENBS2QsU0FKQSxRQVZhLGFBQ00sbUJBQ08sZ0JBVjlCLFVBVzJDLHVDQUMzQyIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFxJbmRpdmlkdWFsRXhlcmNpc2VcXFNvbHV0aW9uQXJlYS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvbHV0aW9uQXJlYSh7IHRvZ2dsZVJlc3VsdHNDb21wb25lbnQgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvbHV0aW9uLWFyZWFcIj5cclxuICAgICAgICAgICAgICAgIDxoMz5JbmNhcmPEgyBzb2x1yJtpYSBhaWNpPC9oMz5cclxuICAgICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgICAgIEVzdGUgcmVjb21hbmRhdMSDIHZlcmlmaWNhcmVhIGNvZHVsdWkgw65udHItdW4gcHJvZ3JhbVxyXG4gICAgICAgICAgICAgICAgICAgIGNvcmVzcHVuesSDdG9yIMOubmFpbnRlIGRlIGEgZmkgcG9zdGF0xIMsIHBlbnRydSBhIGFzaWd1cmFcclxuICAgICAgICAgICAgICAgICAgICBpbmV4aXN0ZW7Im2EgZXJvcmlsb3IgZGUgY29tcGlsYXJlIHNhdSBkZSByZXp1bHRhdC5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjb2xzPVwiMzBcIiByb3dzPVwiMTBcIj48L3RleHRhcmVhPlxyXG5cclxuICAgICAgICAgICAgICAgIDxTZW5kU29sdXRpb25CdXR0b24gb25DbGljaz17dG9nZ2xlUmVzdWx0c0NvbXBvbmVudH0gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIGgzLFxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuc29sdXRpb24tYXJlYSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0byA1MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IGNvbWVJbiAzMDBtcyBlYXNlIGZvcndhcmRzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRleHRhcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBjb21lSW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb20ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRvIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU2VuZFNvbHV0aW9uQnV0dG9uKHsgb25DbGljayB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLS1wcmltYXJ5XCIgb25DbGljaz17b25DbGlja30+XHJcbiAgICAgICAgICAgICAgICBUcmltaXRlIDxGb250QXdlc29tZUljb24gaWNvbj1cImFycm93LXJpZ2h0XCIgLz57XCIgXCJ9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\IndividualExercise\\\\SolutionArea.js */"));
}

function SendSolutionButton(_ref2) {
  var onClick = _ref2.onClick;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("button", {
    onClick: onClick,
    className: "jsx-2452237857" + " " + "button--primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, "Trimite ", __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "arrow-right",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 25
    }
  }), " "), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2452237857",
    __self: this
  }, "button.jsx-2452237857{position:absolute;right:0;bottom:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxFeGVyY2lzZVxcU29sdXRpb25BcmVhLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFd0IsQUFHdUMsa0JBQ1YsUUFDQyxTQUNiIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxFeGVyY2lzZVxcU29sdXRpb25BcmVhLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29sdXRpb25BcmVhKHsgdG9nZ2xlUmVzdWx0c0NvbXBvbmVudCB9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29sdXRpb24tYXJlYVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkluY2FyY8SDIHNvbHXIm2lhIGFpY2k8L2gzPlxyXG4gICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgRXN0ZSByZWNvbWFuZGF0xIMgdmVyaWZpY2FyZWEgY29kdWx1aSDDrm50ci11biBwcm9ncmFtXHJcbiAgICAgICAgICAgICAgICAgICAgY29yZXNwdW56xIN0b3Igw65uYWludGUgZGUgYSBmaSBwb3N0YXTEgywgcGVudHJ1IGEgYXNpZ3VyYVxyXG4gICAgICAgICAgICAgICAgICAgIGluZXhpc3RlbsibYSBlcm9yaWxvciBkZSBjb21waWxhcmUgc2F1IGRlIHJlenVsdGF0LlxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIGNvbHM9XCIzMFwiIHJvd3M9XCIxMFwiPjwvdGV4dGFyZWE+XHJcblxyXG4gICAgICAgICAgICAgICAgPFNlbmRTb2x1dGlvbkJ1dHRvbiBvbkNsaWNrPXt0b2dnbGVSZXN1bHRzQ29tcG9uZW50fSAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgaDMsXHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5zb2x1dGlvbi1hcmVhIHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvIDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogY29tZUluIDMwMG1zIGVhc2UgZm9yd2FyZHM7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWluLWhlaWdodDogNDAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIGNvbWVJbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdG8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTZW5kU29sdXRpb25CdXR0b24oeyBvbkNsaWNrIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tLXByaW1hcnlcIiBvbkNsaWNrPXtvbkNsaWNrfT5cclxuICAgICAgICAgICAgICAgIFRyaW1pdGUgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiYXJyb3ctcmlnaHRcIiAvPntcIiBcIn1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\IndividualExercise\\\\SolutionArea.js */"));
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\utils\\CheckmarkSolved.js";


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
  }, ".checkmark-solved{display:inline-block;background-color:var(--accent-primary);color:var(--text-button);padding:5px;border-radius:50%;width:22px !important;height:22px !important;margin-left:15px;vertical-align:middle;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXHV0aWxzXFxDaGVja21hcmtTb2x2ZWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTStCLEFBRzBDLHFCQUNrQix1Q0FDZCx5QkFDYixZQUNNLGtCQUNJLHNCQUNDLHVCQUNOLGlCQUNLLHNCQUMxQiIsImZpbGUiOiJDOlxcVXNlcnNcXHBsZXNhXFxEZXNrdG9wXFxQcm9pZWN0ZSBXZWJcXGluZm9wbHVzXFxjb21wb25lbnRzXFx1dGlsc1xcQ2hlY2ttYXJrU29sdmVkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2hlY2ttYXJrU29sdmVkKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJjaGVja1wiIGNsYXNzTmFtZT1cImNoZWNrbWFyay1zb2x2ZWRcIiAvPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxyXG4gICAgICAgICAgICAgICAgLmNoZWNrbWFyay1zb2x2ZWQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtYnV0dG9uKTtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\utils\\\\CheckmarkSolved.js */"));
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\utils\\ErrorCircle.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ErrorCircle() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeIcon"], {
    icon: "times-circle",
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
  }, ".error-circle{background-color:var(--accent-failure-primary);border-radius:50%;padding:5px;width:22px !important;height:22px !important;vertical-align:middle;margin:0 15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXHV0aWxzXFxFcnJvckNpcmNsZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNK0IsQUFHb0UsK0NBQzdCLGtCQUNOLFlBQ1Usc0JBQ0MsdUJBQ0Qsc0JBQ1IsY0FDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcdXRpbHNcXEVycm9yQ2lyY2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXJyb3JDaXJjbGUoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInRpbWVzLWNpcmNsZVwiIGNsYXNzTmFtZT1cImVycm9yLWNpcmNsZVwiIC8+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICAgICAgICAgICAuZXJyb3ItY2lyY2xlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtZmFpbHVyZS1wcmltYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\utils\\\\ErrorCircle.js */"));
}

/***/ }),

/***/ "./components/utils/difficultyText.js":
/*!********************************************!*\
  !*** ./components/utils/difficultyText.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return difficultyText; });
function difficultyText(difficulty) {
  return difficulty === 1 ? "UȘOR" : difficulty === 2 ? "MEDIU" : difficulty === 3 ? "PROVOCATOR" : "DIFICIL";
}

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/index.es.js ***!
  \********************************************************************/
/*! exports provided: icon, noAuto, config, toHtml, layer, text, counter, library, dom, parse, findIconDefinition */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "icon", function() { return icon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noAuto", function() { return noAuto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toHtml", function() { return toHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layer", function() { return layer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "text", function() { return text; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "counter", function() { return counter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "library", function() { return library; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom", function() { return dom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findIconDefinition", function() { return findIconDefinition; });
function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var noop = function noop() {};

var _WINDOW = {};
var _DOCUMENT = {};
var _MUTATION_OBSERVER = null;
var _PERFORMANCE = {
  mark: noop,
  measure: noop
};

try {
  if (typeof window !== 'undefined') _WINDOW = window;
  if (typeof document !== 'undefined') _DOCUMENT = document;
  if (typeof MutationObserver !== 'undefined') _MUTATION_OBSERVER = MutationObserver;
  if (typeof performance !== 'undefined') _PERFORMANCE = performance;
} catch (e) {}

var _ref = _WINDOW.navigator || {},
    _ref$userAgent = _ref.userAgent,
    userAgent = _ref$userAgent === void 0 ? '' : _ref$userAgent;

var WINDOW = _WINDOW;
var DOCUMENT = _DOCUMENT;
var MUTATION_OBSERVER = _MUTATION_OBSERVER;
var PERFORMANCE = _PERFORMANCE;
var IS_BROWSER = !!WINDOW.document;
var IS_DOM = !!DOCUMENT.documentElement && !!DOCUMENT.head && typeof DOCUMENT.addEventListener === 'function' && typeof DOCUMENT.createElement === 'function';
var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';
var UNITS_IN_GRID = 16;
var DEFAULT_FAMILY_PREFIX = 'fa';
var DEFAULT_REPLACEMENT_CLASS = 'svg-inline--fa';
var DATA_FA_I2SVG = 'data-fa-i2svg';
var DATA_FA_PSEUDO_ELEMENT = 'data-fa-pseudo-element';
var DATA_FA_PSEUDO_ELEMENT_PENDING = 'data-fa-pseudo-element-pending';
var DATA_PREFIX = 'data-prefix';
var DATA_ICON = 'data-icon';
var HTML_CLASS_I2SVG_BASE_CLASS = 'fontawesome-i2svg';
var MUTATION_APPROACH_ASYNC = 'async';
var TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS = ['HTML', 'HEAD', 'STYLE', 'SCRIPT'];
var PRODUCTION = function () {
  try {
    return "development" === 'production';
  } catch (e) {
    return false;
  }
}();
var PREFIX_TO_STYLE = {
  'fas': 'solid',
  'far': 'regular',
  'fal': 'light',
  'fad': 'duotone',
  'fab': 'brands',
  'fa': 'solid'
};
var STYLE_TO_PREFIX = {
  'solid': 'fas',
  'regular': 'far',
  'light': 'fal',
  'duotone': 'fad',
  'brands': 'fab'
};
var LAYERS_TEXT_CLASSNAME = 'fa-layers-text';
var FONT_FAMILY_PATTERN = /Font Awesome 5 (Solid|Regular|Light|Duotone|Brands|Free|Pro)/;
var FONT_WEIGHT_TO_PREFIX = {
  '900': 'fas',
  '400': 'far',
  'normal': 'far',
  '300': 'fal'
};
var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
var ATTRIBUTES_WATCHED_FOR_MUTATION = ['class', 'data-prefix', 'data-icon', 'data-fa-transform', 'data-fa-mask'];
var DUOTONE_CLASSES = {
  GROUP: 'group',
  SWAP_OPACITY: 'swap-opacity',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};
var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'flip-both', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter', DUOTONE_CLASSES.GROUP, DUOTONE_CLASSES.SWAP_OPACITY, DUOTONE_CLASSES.PRIMARY, DUOTONE_CLASSES.SECONDARY].concat(oneToTen.map(function (n) {
  return "".concat(n, "x");
})).concat(oneToTwenty.map(function (n) {
  return "w-".concat(n);
}));

var initial = WINDOW.FontAwesomeConfig || {};

function getAttrConfig(attr) {
  var element = DOCUMENT.querySelector('script[' + attr + ']');

  if (element) {
    return element.getAttribute(attr);
  }
}

function coerce(val) {
  // Getting an empty string will occur if the attribute is set on the HTML tag but without a value
  // We'll assume that this is an indication that it should be toggled to true
  // For example <script data-search-pseudo-elements src="..."></script>
  if (val === '') return true;
  if (val === 'false') return false;
  if (val === 'true') return true;
  return val;
}

if (DOCUMENT && typeof DOCUMENT.querySelector === 'function') {
  var attrs = [['data-family-prefix', 'familyPrefix'], ['data-replacement-class', 'replacementClass'], ['data-auto-replace-svg', 'autoReplaceSvg'], ['data-auto-add-css', 'autoAddCss'], ['data-auto-a11y', 'autoA11y'], ['data-search-pseudo-elements', 'searchPseudoElements'], ['data-observe-mutations', 'observeMutations'], ['data-mutate-approach', 'mutateApproach'], ['data-keep-original-source', 'keepOriginalSource'], ['data-measure-performance', 'measurePerformance'], ['data-show-missing-icons', 'showMissingIcons']];
  attrs.forEach(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        attr = _ref2[0],
        key = _ref2[1];

    var val = coerce(getAttrConfig(attr));

    if (val !== undefined && val !== null) {
      initial[key] = val;
    }
  });
}

var _default = {
  familyPrefix: DEFAULT_FAMILY_PREFIX,
  replacementClass: DEFAULT_REPLACEMENT_CLASS,
  autoReplaceSvg: true,
  autoAddCss: true,
  autoA11y: true,
  searchPseudoElements: false,
  observeMutations: true,
  mutateApproach: 'async',
  keepOriginalSource: true,
  measurePerformance: false,
  showMissingIcons: true
};

var _config = _objectSpread({}, _default, initial);

if (!_config.autoReplaceSvg) _config.observeMutations = false;

var config = _objectSpread({}, _config);

WINDOW.FontAwesomeConfig = config;

var w = WINDOW || {};
if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].styles) w[NAMESPACE_IDENTIFIER].styles = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];
var namespace = w[NAMESPACE_IDENTIFIER];

var functions = [];

var listener = function listener() {
  DOCUMENT.removeEventListener('DOMContentLoaded', listener);
  loaded = 1;
  functions.map(function (fn) {
    return fn();
  });
};

var loaded = false;

if (IS_DOM) {
  loaded = (DOCUMENT.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(DOCUMENT.readyState);
  if (!loaded) DOCUMENT.addEventListener('DOMContentLoaded', listener);
}

function domready (fn) {
  if (!IS_DOM) return;
  loaded ? setTimeout(fn, 0) : functions.push(fn);
}

var PENDING = 'pending';
var SETTLED = 'settled';
var FULFILLED = 'fulfilled';
var REJECTED = 'rejected';

var NOOP = function NOOP() {};

var isNode = typeof global !== 'undefined' && typeof global.process !== 'undefined' && typeof global.process.emit === 'function';
var asyncSetTimer = typeof setImmediate === 'undefined' ? setTimeout : setImmediate;
var asyncQueue = [];
var asyncTimer;

function asyncFlush() {
  // run promise callbacks
  for (var i = 0; i < asyncQueue.length; i++) {
    asyncQueue[i][0](asyncQueue[i][1]);
  } // reset async asyncQueue


  asyncQueue = [];
  asyncTimer = false;
}

function asyncCall(callback, arg) {
  asyncQueue.push([callback, arg]);

  if (!asyncTimer) {
    asyncTimer = true;
    asyncSetTimer(asyncFlush, 0);
  }
}

function invokeResolver(resolver, promise) {
  function resolvePromise(value) {
    resolve(promise, value);
  }

  function rejectPromise(reason) {
    reject(promise, reason);
  }

  try {
    resolver(resolvePromise, rejectPromise);
  } catch (e) {
    rejectPromise(e);
  }
}

function invokeCallback(subscriber) {
  var owner = subscriber.owner;
  var settled = owner._state;
  var value = owner._data;
  var callback = subscriber[settled];
  var promise = subscriber.then;

  if (typeof callback === 'function') {
    settled = FULFILLED;

    try {
      value = callback(value);
    } catch (e) {
      reject(promise, e);
    }
  }

  if (!handleThenable(promise, value)) {
    if (settled === FULFILLED) {
      resolve(promise, value);
    }

    if (settled === REJECTED) {
      reject(promise, value);
    }
  }
}

function handleThenable(promise, value) {
  var resolved;

  try {
    if (promise === value) {
      throw new TypeError('A promises callback cannot return that same promise.');
    }

    if (value && (typeof value === 'function' || _typeof(value) === 'object')) {
      // then should be retrieved only once
      var then = value.then;

      if (typeof then === 'function') {
        then.call(value, function (val) {
          if (!resolved) {
            resolved = true;

            if (value === val) {
              fulfill(promise, val);
            } else {
              resolve(promise, val);
            }
          }
        }, function (reason) {
          if (!resolved) {
            resolved = true;
            reject(promise, reason);
          }
        });
        return true;
      }
    }
  } catch (e) {
    if (!resolved) {
      reject(promise, e);
    }

    return true;
  }

  return false;
}

function resolve(promise, value) {
  if (promise === value || !handleThenable(promise, value)) {
    fulfill(promise, value);
  }
}

function fulfill(promise, value) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = value;
    asyncCall(publishFulfillment, promise);
  }
}

function reject(promise, reason) {
  if (promise._state === PENDING) {
    promise._state = SETTLED;
    promise._data = reason;
    asyncCall(publishRejection, promise);
  }
}

function publish(promise) {
  promise._then = promise._then.forEach(invokeCallback);
}

function publishFulfillment(promise) {
  promise._state = FULFILLED;
  publish(promise);
}

function publishRejection(promise) {
  promise._state = REJECTED;
  publish(promise);

  if (!promise._handled && isNode) {
    global.process.emit('unhandledRejection', promise._data, promise);
  }
}

function notifyRejectionHandled(promise) {
  global.process.emit('rejectionHandled', promise);
}
/**
 * @class
 */


function P(resolver) {
  if (typeof resolver !== 'function') {
    throw new TypeError('Promise resolver ' + resolver + ' is not a function');
  }

  if (this instanceof P === false) {
    throw new TypeError('Failed to construct \'Promise\': Please use the \'new\' operator, this object constructor cannot be called as a function.');
  }

  this._then = [];
  invokeResolver(resolver, this);
}

P.prototype = {
  constructor: P,
  _state: PENDING,
  _then: null,
  _data: undefined,
  _handled: false,
  then: function then(onFulfillment, onRejection) {
    var subscriber = {
      owner: this,
      then: new this.constructor(NOOP),
      fulfilled: onFulfillment,
      rejected: onRejection
    };

    if ((onRejection || onFulfillment) && !this._handled) {
      this._handled = true;

      if (this._state === REJECTED && isNode) {
        asyncCall(notifyRejectionHandled, this);
      }
    }

    if (this._state === FULFILLED || this._state === REJECTED) {
      // already resolved, call callback async
      asyncCall(invokeCallback, subscriber);
    } else {
      // subscribe
      this._then.push(subscriber);
    }

    return subscriber.then;
  },
  catch: function _catch(onRejection) {
    return this.then(null, onRejection);
  }
};

P.all = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.all().');
  }

  return new P(function (resolve, reject) {
    var results = [];
    var remaining = 0;

    function resolver(index) {
      remaining++;
      return function (value) {
        results[index] = value;

        if (! --remaining) {
          resolve(results);
        }
      };
    }

    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolver(i), reject);
      } else {
        results[i] = promise;
      }
    }

    if (!remaining) {
      resolve(results);
    }
  });
};

P.race = function (promises) {
  if (!Array.isArray(promises)) {
    throw new TypeError('You must pass an array to Promise.race().');
  }

  return new P(function (resolve, reject) {
    for (var i = 0, promise; i < promises.length; i++) {
      promise = promises[i];

      if (promise && typeof promise.then === 'function') {
        promise.then(resolve, reject);
      } else {
        resolve(promise);
      }
    }
  });
};

P.resolve = function (value) {
  if (value && _typeof(value) === 'object' && value.constructor === P) {
    return value;
  }

  return new P(function (resolve) {
    resolve(value);
  });
};

P.reject = function (reason) {
  return new P(function (resolve, reject) {
    reject(reason);
  });
};

var picked = typeof Promise === 'function' ? Promise : P;

var d = UNITS_IN_GRID;
var meaninglessTransform = {
  size: 16,
  x: 0,
  y: 0,
  rotate: 0,
  flipX: false,
  flipY: false
};

function isReserved(name) {
  return ~RESERVED_CLASSES.indexOf(name);
}
function insertCss(css) {
  if (!css || !IS_DOM) {
    return;
  }

  var style = DOCUMENT.createElement('style');
  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  var headChildren = DOCUMENT.head.childNodes;
  var beforeChild = null;

  for (var i = headChildren.length - 1; i > -1; i--) {
    var child = headChildren[i];
    var tagName = (child.tagName || '').toUpperCase();

    if (['STYLE', 'LINK'].indexOf(tagName) > -1) {
      beforeChild = child;
    }
  }

  DOCUMENT.head.insertBefore(style, beforeChild);
  return css;
}
var idPool = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
function nextUniqueId() {
  var size = 12;
  var id = '';

  while (size-- > 0) {
    id += idPool[Math.random() * 62 | 0];
  }

  return id;
}
function toArray(obj) {
  var array = [];

  for (var i = (obj || []).length >>> 0; i--;) {
    array[i] = obj[i];
  }

  return array;
}
function classArray(node) {
  if (node.classList) {
    return toArray(node.classList);
  } else {
    return (node.getAttribute('class') || '').split(' ').filter(function (i) {
      return i;
    });
  }
}
function getIconName(familyPrefix, cls) {
  var parts = cls.split('-');
  var prefix = parts[0];
  var iconName = parts.slice(1).join('-');

  if (prefix === familyPrefix && iconName !== '' && !isReserved(iconName)) {
    return iconName;
  } else {
    return null;
  }
}
function htmlEscape(str) {
  return "".concat(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function joinAttributes(attributes) {
  return Object.keys(attributes || {}).reduce(function (acc, attributeName) {
    return acc + "".concat(attributeName, "=\"").concat(htmlEscape(attributes[attributeName]), "\" ");
  }, '').trim();
}
function joinStyles(styles) {
  return Object.keys(styles || {}).reduce(function (acc, styleName) {
    return acc + "".concat(styleName, ": ").concat(styles[styleName], ";");
  }, '');
}
function transformIsMeaningful(transform) {
  return transform.size !== meaninglessTransform.size || transform.x !== meaninglessTransform.x || transform.y !== meaninglessTransform.y || transform.rotate !== meaninglessTransform.rotate || transform.flipX || transform.flipY;
}
function transformForSvg(_ref) {
  var transform = _ref.transform,
      containerWidth = _ref.containerWidth,
      iconWidth = _ref.iconWidth;
  var outer = {
    transform: "translate(".concat(containerWidth / 2, " 256)")
  };
  var innerTranslate = "translate(".concat(transform.x * 32, ", ").concat(transform.y * 32, ") ");
  var innerScale = "scale(".concat(transform.size / 16 * (transform.flipX ? -1 : 1), ", ").concat(transform.size / 16 * (transform.flipY ? -1 : 1), ") ");
  var innerRotate = "rotate(".concat(transform.rotate, " 0 0)");
  var inner = {
    transform: "".concat(innerTranslate, " ").concat(innerScale, " ").concat(innerRotate)
  };
  var path = {
    transform: "translate(".concat(iconWidth / 2 * -1, " -256)")
  };
  return {
    outer: outer,
    inner: inner,
    path: path
  };
}
function transformForCss(_ref2) {
  var transform = _ref2.transform,
      _ref2$width = _ref2.width,
      width = _ref2$width === void 0 ? UNITS_IN_GRID : _ref2$width,
      _ref2$height = _ref2.height,
      height = _ref2$height === void 0 ? UNITS_IN_GRID : _ref2$height,
      _ref2$startCentered = _ref2.startCentered,
      startCentered = _ref2$startCentered === void 0 ? false : _ref2$startCentered;
  var val = '';

  if (startCentered && IS_IE) {
    val += "translate(".concat(transform.x / d - width / 2, "em, ").concat(transform.y / d - height / 2, "em) ");
  } else if (startCentered) {
    val += "translate(calc(-50% + ".concat(transform.x / d, "em), calc(-50% + ").concat(transform.y / d, "em)) ");
  } else {
    val += "translate(".concat(transform.x / d, "em, ").concat(transform.y / d, "em) ");
  }

  val += "scale(".concat(transform.size / d * (transform.flipX ? -1 : 1), ", ").concat(transform.size / d * (transform.flipY ? -1 : 1), ") ");
  val += "rotate(".concat(transform.rotate, "deg) ");
  return val;
}

var ALL_SPACE = {
  x: 0,
  y: 0,
  width: '100%',
  height: '100%'
};

function fillBlack(abstract) {
  var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (abstract.attributes && (abstract.attributes.fill || force)) {
    abstract.attributes.fill = 'black';
  }

  return abstract;
}

function deGroup(abstract) {
  if (abstract.tag === 'g') {
    return abstract.children;
  } else {
    return [abstract];
  }
}

function makeIconMasking (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      mask = _ref.mask,
      explicitMaskId = _ref.maskId,
      transform = _ref.transform;
  var mainWidth = main.width,
      mainPath = main.icon;
  var maskWidth = mask.width,
      maskPath = mask.icon;
  var trans = transformForSvg({
    transform: transform,
    containerWidth: maskWidth,
    iconWidth: mainWidth
  });
  var maskRect = {
    tag: 'rect',
    attributes: _objectSpread({}, ALL_SPACE, {
      fill: 'white'
    })
  };
  var maskInnerGroupChildrenMixin = mainPath.children ? {
    children: mainPath.children.map(fillBlack)
  } : {};
  var maskInnerGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.inner),
    children: [fillBlack(_objectSpread({
      tag: mainPath.tag,
      attributes: _objectSpread({}, mainPath.attributes, trans.path)
    }, maskInnerGroupChildrenMixin))]
  };
  var maskOuterGroup = {
    tag: 'g',
    attributes: _objectSpread({}, trans.outer),
    children: [maskInnerGroup]
  };
  var maskId = "mask-".concat(explicitMaskId || nextUniqueId());
  var clipId = "clip-".concat(explicitMaskId || nextUniqueId());
  var maskTag = {
    tag: 'mask',
    attributes: _objectSpread({}, ALL_SPACE, {
      id: maskId,
      maskUnits: 'userSpaceOnUse',
      maskContentUnits: 'userSpaceOnUse'
    }),
    children: [maskRect, maskOuterGroup]
  };
  var defs = {
    tag: 'defs',
    children: [{
      tag: 'clipPath',
      attributes: {
        id: clipId
      },
      children: deGroup(maskPath)
    }, maskTag]
  };
  children.push(defs, {
    tag: 'rect',
    attributes: _objectSpread({
      fill: 'currentColor',
      'clip-path': "url(#".concat(clipId, ")"),
      mask: "url(#".concat(maskId, ")")
    }, ALL_SPACE)
  });
  return {
    children: children,
    attributes: attributes
  };
}

function makeIconStandard (_ref) {
  var children = _ref.children,
      attributes = _ref.attributes,
      main = _ref.main,
      transform = _ref.transform,
      styles = _ref.styles;
  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  if (transformIsMeaningful(transform)) {
    var trans = transformForSvg({
      transform: transform,
      containerWidth: main.width,
      iconWidth: main.width
    });
    children.push({
      tag: 'g',
      attributes: _objectSpread({}, trans.outer),
      children: [{
        tag: 'g',
        attributes: _objectSpread({}, trans.inner),
        children: [{
          tag: main.icon.tag,
          children: main.icon.children,
          attributes: _objectSpread({}, main.icon.attributes, trans.path)
        }]
      }]
    });
  } else {
    children.push(main.icon);
  }

  return {
    children: children,
    attributes: attributes
  };
}

function asIcon (_ref) {
  var children = _ref.children,
      main = _ref.main,
      mask = _ref.mask,
      attributes = _ref.attributes,
      styles = _ref.styles,
      transform = _ref.transform;

  if (transformIsMeaningful(transform) && main.found && !mask.found) {
    var width = main.width,
        height = main.height;
    var offset = {
      x: width / height / 2,
      y: 0.5
    };
    attributes['style'] = joinStyles(_objectSpread({}, styles, {
      'transform-origin': "".concat(offset.x + transform.x / 16, "em ").concat(offset.y + transform.y / 16, "em")
    }));
  }

  return [{
    tag: 'svg',
    attributes: attributes,
    children: children
  }];
}

function asSymbol (_ref) {
  var prefix = _ref.prefix,
      iconName = _ref.iconName,
      children = _ref.children,
      attributes = _ref.attributes,
      symbol = _ref.symbol;
  var id = symbol === true ? "".concat(prefix, "-").concat(config.familyPrefix, "-").concat(iconName) : symbol;
  return [{
    tag: 'svg',
    attributes: {
      style: 'display: none;'
    },
    children: [{
      tag: 'symbol',
      attributes: _objectSpread({}, attributes, {
        id: id
      }),
      children: children
    }]
  }];
}

function makeInlineSvgAbstract(params) {
  var _params$icons = params.icons,
      main = _params$icons.main,
      mask = _params$icons.mask,
      prefix = params.prefix,
      iconName = params.iconName,
      transform = params.transform,
      symbol = params.symbol,
      title = params.title,
      maskId = params.maskId,
      titleId = params.titleId,
      extra = params.extra,
      _params$watchable = params.watchable,
      watchable = _params$watchable === void 0 ? false : _params$watchable;

  var _ref = mask.found ? mask : main,
      width = _ref.width,
      height = _ref.height;

  var widthClass = "fa-w-".concat(Math.ceil(width / height * 16));
  var attrClass = [config.replacementClass, iconName ? "".concat(config.familyPrefix, "-").concat(iconName) : '', widthClass].filter(function (c) {
    return extra.classes.indexOf(c) === -1;
  }).concat(extra.classes).join(' ');
  var content = {
    children: [],
    attributes: _objectSpread({}, extra.attributes, {
      'data-prefix': prefix,
      'data-icon': iconName,
      'class': attrClass,
      'role': extra.attributes.role || 'img',
      'xmlns': 'http://www.w3.org/2000/svg',
      'viewBox': "0 0 ".concat(width, " ").concat(height)
    })
  };

  if (watchable) {
    content.attributes[DATA_FA_I2SVG] = '';
  }

  if (title) content.children.push({
    tag: 'title',
    attributes: {
      id: content.attributes['aria-labelledby'] || "title-".concat(titleId || nextUniqueId())
    },
    children: [title]
  });

  var args = _objectSpread({}, content, {
    prefix: prefix,
    iconName: iconName,
    main: main,
    mask: mask,
    maskId: maskId,
    transform: transform,
    symbol: symbol,
    styles: extra.styles
  });

  var _ref2 = mask.found && main.found ? makeIconMasking(args) : makeIconStandard(args),
      children = _ref2.children,
      attributes = _ref2.attributes;

  args.children = children;
  args.attributes = attributes;

  if (symbol) {
    return asSymbol(args);
  } else {
    return asIcon(args);
  }
}
function makeLayersTextAbstract(params) {
  var content = params.content,
      width = params.width,
      height = params.height,
      transform = params.transform,
      title = params.title,
      extra = params.extra,
      _params$watchable2 = params.watchable,
      watchable = _params$watchable2 === void 0 ? false : _params$watchable2;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  if (watchable) {
    attributes[DATA_FA_I2SVG] = '';
  }

  var styles = _objectSpread({}, extra.styles);

  if (transformIsMeaningful(transform)) {
    styles['transform'] = transformForCss({
      transform: transform,
      startCentered: true,
      width: width,
      height: height
    });
    styles['-webkit-transform'] = styles['transform'];
  }

  var styleString = joinStyles(styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}
function makeLayersCounterAbstract(params) {
  var content = params.content,
      title = params.title,
      extra = params.extra;

  var attributes = _objectSpread({}, extra.attributes, title ? {
    'title': title
  } : {}, {
    'class': extra.classes.join(' ')
  });

  var styleString = joinStyles(extra.styles);

  if (styleString.length > 0) {
    attributes['style'] = styleString;
  }

  var val = [];
  val.push({
    tag: 'span',
    attributes: attributes,
    children: [content]
  });

  if (title) {
    val.push({
      tag: 'span',
      attributes: {
        class: 'sr-only'
      },
      children: [title]
    });
  }

  return val;
}

var noop$1 = function noop() {};

var p = config.measurePerformance && PERFORMANCE && PERFORMANCE.mark && PERFORMANCE.measure ? PERFORMANCE : {
  mark: noop$1,
  measure: noop$1
};
var preamble = "FA \"5.13.0\"";

var begin = function begin(name) {
  p.mark("".concat(preamble, " ").concat(name, " begins"));
  return function () {
    return end(name);
  };
};

var end = function end(name) {
  p.mark("".concat(preamble, " ").concat(name, " ends"));
  p.measure("".concat(preamble, " ").concat(name), "".concat(preamble, " ").concat(name, " begins"), "".concat(preamble, " ").concat(name, " ends"));
};

var perf = {
  begin: begin,
  end: end
};

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */

var bindInternal4 = function bindInternal4(func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */


var reduce = function fastReduceObject(subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i,
      key,
      result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  } else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

function toHex(unicode) {
  var result = '';

  for (var i = 0; i < unicode.length; i++) {
    var hex = unicode.charCodeAt(i).toString(16);
    result += ('000' + hex).slice(-4);
  }

  return result;
}

function defineIcons(prefix, icons) {
  var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var _params$skipHooks = params.skipHooks,
      skipHooks = _params$skipHooks === void 0 ? false : _params$skipHooks;
  var normalized = Object.keys(icons).reduce(function (acc, iconName) {
    var icon = icons[iconName];
    var expanded = !!icon.icon;

    if (expanded) {
      acc[icon.iconName] = icon.icon;
    } else {
      acc[iconName] = icon;
    }

    return acc;
  }, {});

  if (typeof namespace.hooks.addPack === 'function' && !skipHooks) {
    namespace.hooks.addPack(prefix, normalized);
  } else {
    namespace.styles[prefix] = _objectSpread({}, namespace.styles[prefix] || {}, normalized);
  }
  /**
   * Font Awesome 4 used the prefix of `fa` for all icons. With the introduction
   * of new styles we needed to differentiate between them. Prefix `fa` is now an alias
   * for `fas` so we'll easy the upgrade process for our users by automatically defining
   * this as well.
   */


  if (prefix === 'fas') {
    defineIcons('fa', icons);
  }
}

var styles = namespace.styles,
    shims = namespace.shims;
var _byUnicode = {};
var _byLigature = {};
var _byOldName = {};
var build = function build() {
  var lookup = function lookup(reducer) {
    return reduce(styles, function (o, style, prefix) {
      o[prefix] = reduce(style, reducer, {});
      return o;
    }, {});
  };

  _byUnicode = lookup(function (acc, icon, iconName) {
    if (icon[3]) {
      acc[icon[3]] = iconName;
    }

    return acc;
  });
  _byLigature = lookup(function (acc, icon, iconName) {
    var ligatures = icon[2];
    acc[iconName] = iconName;
    ligatures.forEach(function (ligature) {
      acc[ligature] = iconName;
    });
    return acc;
  });
  var hasRegular = 'far' in styles;
  _byOldName = reduce(shims, function (acc, shim) {
    var oldName = shim[0];
    var prefix = shim[1];
    var iconName = shim[2];

    if (prefix === 'far' && !hasRegular) {
      prefix = 'fas';
    }

    acc[oldName] = {
      prefix: prefix,
      iconName: iconName
    };
    return acc;
  }, {});
};
build();
function byUnicode(prefix, unicode) {
  return (_byUnicode[prefix] || {})[unicode];
}
function byLigature(prefix, ligature) {
  return (_byLigature[prefix] || {})[ligature];
}
function byOldName(name) {
  return _byOldName[name] || {
    prefix: null,
    iconName: null
  };
}

var styles$1 = namespace.styles;
var emptyCanonicalIcon = function emptyCanonicalIcon() {
  return {
    prefix: null,
    iconName: null,
    rest: []
  };
};
function getCanonicalIcon(values) {
  return values.reduce(function (acc, cls) {
    var iconName = getIconName(config.familyPrefix, cls);

    if (styles$1[cls]) {
      acc.prefix = cls;
    } else if (config.autoFetchSvg && ['fas', 'far', 'fal', 'fad', 'fab', 'fa'].indexOf(cls) > -1) {
      acc.prefix = cls;
    } else if (iconName) {
      var shim = acc.prefix === 'fa' ? byOldName(iconName) : {};
      acc.iconName = shim.iconName || iconName;
      acc.prefix = shim.prefix || acc.prefix;
    } else if (cls !== config.replacementClass && cls.indexOf('fa-w-') !== 0) {
      acc.rest.push(cls);
    }

    return acc;
  }, emptyCanonicalIcon());
}
function iconFromMapping(mapping, prefix, iconName) {
  if (mapping && mapping[prefix] && mapping[prefix][iconName]) {
    return {
      prefix: prefix,
      iconName: iconName,
      icon: mapping[prefix][iconName]
    };
  }
}

function toHtml(abstractNodes) {
  var tag = abstractNodes.tag,
      _abstractNodes$attrib = abstractNodes.attributes,
      attributes = _abstractNodes$attrib === void 0 ? {} : _abstractNodes$attrib,
      _abstractNodes$childr = abstractNodes.children,
      children = _abstractNodes$childr === void 0 ? [] : _abstractNodes$childr;

  if (typeof abstractNodes === 'string') {
    return htmlEscape(abstractNodes);
  } else {
    return "<".concat(tag, " ").concat(joinAttributes(attributes), ">").concat(children.map(toHtml).join(''), "</").concat(tag, ">");
  }
}

var noop$2 = function noop() {};

function isWatched(node) {
  var i2svg = node.getAttribute ? node.getAttribute(DATA_FA_I2SVG) : null;
  return typeof i2svg === 'string';
}

function getMutator() {
  if (config.autoReplaceSvg === true) {
    return mutators.replace;
  }

  var mutator = mutators[config.autoReplaceSvg];
  return mutator || mutators.replace;
}

var mutators = {
  replace: function replace(mutation) {
    var node = mutation[0];
    var abstract = mutation[1];
    var newOuterHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');

    if (node.parentNode && node.outerHTML) {
      node.outerHTML = newOuterHTML + (config.keepOriginalSource && node.tagName.toLowerCase() !== 'svg' ? "<!-- ".concat(node.outerHTML, " -->") : '');
    } else if (node.parentNode) {
      var newNode = document.createElement('span');
      node.parentNode.replaceChild(newNode, node);
      newNode.outerHTML = newOuterHTML;
    }
  },
  nest: function nest(mutation) {
    var node = mutation[0];
    var abstract = mutation[1]; // If we already have a replaced node we do not want to continue nesting within it.
    // Short-circuit to the standard replacement

    if (~classArray(node).indexOf(config.replacementClass)) {
      return mutators.replace(mutation);
    }

    var forSvg = new RegExp("".concat(config.familyPrefix, "-.*"));
    delete abstract[0].attributes.style;
    delete abstract[0].attributes.id;
    var splitClasses = abstract[0].attributes.class.split(' ').reduce(function (acc, cls) {
      if (cls === config.replacementClass || cls.match(forSvg)) {
        acc.toSvg.push(cls);
      } else {
        acc.toNode.push(cls);
      }

      return acc;
    }, {
      toNode: [],
      toSvg: []
    });
    abstract[0].attributes.class = splitClasses.toSvg.join(' ');
    var newInnerHTML = abstract.map(function (a) {
      return toHtml(a);
    }).join('\n');
    node.setAttribute('class', splitClasses.toNode.join(' '));
    node.setAttribute(DATA_FA_I2SVG, '');
    node.innerHTML = newInnerHTML;
  }
};

function performOperationSync(op) {
  op();
}

function perform(mutations, callback) {
  var callbackFunction = typeof callback === 'function' ? callback : noop$2;

  if (mutations.length === 0) {
    callbackFunction();
  } else {
    var frame = performOperationSync;

    if (config.mutateApproach === MUTATION_APPROACH_ASYNC) {
      frame = WINDOW.requestAnimationFrame || performOperationSync;
    }

    frame(function () {
      var mutator = getMutator();
      var mark = perf.begin('mutate');
      mutations.map(mutator);
      mark();
      callbackFunction();
    });
  }
}
var disabled = false;
function disableObservation() {
  disabled = true;
}
function enableObservation() {
  disabled = false;
}
var mo = null;
function observe(options) {
  if (!MUTATION_OBSERVER) {
    return;
  }

  if (!config.observeMutations) {
    return;
  }

  var treeCallback = options.treeCallback,
      nodeCallback = options.nodeCallback,
      pseudoElementsCallback = options.pseudoElementsCallback,
      _options$observeMutat = options.observeMutationsRoot,
      observeMutationsRoot = _options$observeMutat === void 0 ? DOCUMENT : _options$observeMutat;
  mo = new MUTATION_OBSERVER(function (objects) {
    if (disabled) return;
    toArray(objects).forEach(function (mutationRecord) {
      if (mutationRecord.type === 'childList' && mutationRecord.addedNodes.length > 0 && !isWatched(mutationRecord.addedNodes[0])) {
        if (config.searchPseudoElements) {
          pseudoElementsCallback(mutationRecord.target);
        }

        treeCallback(mutationRecord.target);
      }

      if (mutationRecord.type === 'attributes' && mutationRecord.target.parentNode && config.searchPseudoElements) {
        pseudoElementsCallback(mutationRecord.target.parentNode);
      }

      if (mutationRecord.type === 'attributes' && isWatched(mutationRecord.target) && ~ATTRIBUTES_WATCHED_FOR_MUTATION.indexOf(mutationRecord.attributeName)) {
        if (mutationRecord.attributeName === 'class') {
          var _getCanonicalIcon = getCanonicalIcon(classArray(mutationRecord.target)),
              prefix = _getCanonicalIcon.prefix,
              iconName = _getCanonicalIcon.iconName;

          if (prefix) mutationRecord.target.setAttribute('data-prefix', prefix);
          if (iconName) mutationRecord.target.setAttribute('data-icon', iconName);
        } else {
          nodeCallback(mutationRecord.target);
        }
      }
    });
  });
  if (!IS_DOM) return;
  mo.observe(observeMutationsRoot, {
    childList: true,
    attributes: true,
    characterData: true,
    subtree: true
  });
}
function disconnect() {
  if (!mo) return;
  mo.disconnect();
}

function styleParser (node) {
  var style = node.getAttribute('style');
  var val = [];

  if (style) {
    val = style.split(';').reduce(function (acc, style) {
      var styles = style.split(':');
      var prop = styles[0];
      var value = styles.slice(1);

      if (prop && value.length > 0) {
        acc[prop] = value.join(':').trim();
      }

      return acc;
    }, {});
  }

  return val;
}

function classParser (node) {
  var existingPrefix = node.getAttribute('data-prefix');
  var existingIconName = node.getAttribute('data-icon');
  var innerText = node.innerText !== undefined ? node.innerText.trim() : '';
  var val = getCanonicalIcon(classArray(node));

  if (existingPrefix && existingIconName) {
    val.prefix = existingPrefix;
    val.iconName = existingIconName;
  }

  if (val.prefix && innerText.length > 1) {
    val.iconName = byLigature(val.prefix, node.innerText);
  } else if (val.prefix && innerText.length === 1) {
    val.iconName = byUnicode(val.prefix, toHex(node.innerText));
  }

  return val;
}

var parseTransformString = function parseTransformString(transformString) {
  var transform = {
    size: 16,
    x: 0,
    y: 0,
    flipX: false,
    flipY: false,
    rotate: 0
  };

  if (!transformString) {
    return transform;
  } else {
    return transformString.toLowerCase().split(' ').reduce(function (acc, n) {
      var parts = n.toLowerCase().split('-');
      var first = parts[0];
      var rest = parts.slice(1).join('-');

      if (first && rest === 'h') {
        acc.flipX = true;
        return acc;
      }

      if (first && rest === 'v') {
        acc.flipY = true;
        return acc;
      }

      rest = parseFloat(rest);

      if (isNaN(rest)) {
        return acc;
      }

      switch (first) {
        case 'grow':
          acc.size = acc.size + rest;
          break;

        case 'shrink':
          acc.size = acc.size - rest;
          break;

        case 'left':
          acc.x = acc.x - rest;
          break;

        case 'right':
          acc.x = acc.x + rest;
          break;

        case 'up':
          acc.y = acc.y - rest;
          break;

        case 'down':
          acc.y = acc.y + rest;
          break;

        case 'rotate':
          acc.rotate = acc.rotate + rest;
          break;
      }

      return acc;
    }, transform);
  }
};
function transformParser (node) {
  return parseTransformString(node.getAttribute('data-fa-transform'));
}

function symbolParser (node) {
  var symbol = node.getAttribute('data-fa-symbol');
  return symbol === null ? false : symbol === '' ? true : symbol;
}

function attributesParser (node) {
  var extraAttributes = toArray(node.attributes).reduce(function (acc, attr) {
    if (acc.name !== 'class' && acc.name !== 'style') {
      acc[attr.name] = attr.value;
    }

    return acc;
  }, {});
  var title = node.getAttribute('title');
  var titleId = node.getAttribute('data-fa-title-id');

  if (config.autoA11y) {
    if (title) {
      extraAttributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
    } else {
      extraAttributes['aria-hidden'] = 'true';
      extraAttributes['focusable'] = 'false';
    }
  }

  return extraAttributes;
}

function maskParser (node) {
  var mask = node.getAttribute('data-fa-mask');

  if (!mask) {
    return emptyCanonicalIcon();
  } else {
    return getCanonicalIcon(mask.split(' ').map(function (i) {
      return i.trim();
    }));
  }
}

function blankMeta() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: meaninglessTransform,
    symbol: false,
    mask: null,
    maskId: null,
    extra: {
      classes: [],
      styles: {},
      attributes: {}
    }
  };
}
function parseMeta(node) {
  var _classParser = classParser(node),
      iconName = _classParser.iconName,
      prefix = _classParser.prefix,
      extraClasses = _classParser.rest;

  var extraStyles = styleParser(node);
  var transform = transformParser(node);
  var symbol = symbolParser(node);
  var extraAttributes = attributesParser(node);
  var mask = maskParser(node);
  return {
    iconName: iconName,
    title: node.getAttribute('title'),
    titleId: node.getAttribute('data-fa-title-id'),
    prefix: prefix,
    transform: transform,
    symbol: symbol,
    mask: mask,
    maskId: node.getAttribute('data-fa-mask-id'),
    extra: {
      classes: extraClasses,
      styles: extraStyles,
      attributes: extraAttributes
    }
  };
}

function MissingIcon(error) {
  this.name = 'MissingIcon';
  this.message = error || 'Icon unavailable';
  this.stack = new Error().stack;
}
MissingIcon.prototype = Object.create(Error.prototype);
MissingIcon.prototype.constructor = MissingIcon;

var FILL = {
  fill: 'currentColor'
};
var ANIMATION_BASE = {
  attributeType: 'XML',
  repeatCount: 'indefinite',
  dur: '2s'
};
var RING = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    d: 'M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z'
  })
};

var OPACITY_ANIMATE = _objectSpread({}, ANIMATION_BASE, {
  attributeName: 'opacity'
});

var DOT = {
  tag: 'circle',
  attributes: _objectSpread({}, FILL, {
    cx: '256',
    cy: '364',
    r: '28'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, ANIMATION_BASE, {
      attributeName: 'r',
      values: '28;14;28;28;14;28;'
    })
  }, {
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;1;1;0;1;'
    })
  }]
};
var QUESTION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '1',
    d: 'M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '1;0;0;0;0;1;'
    })
  }]
};
var EXCLAMATION = {
  tag: 'path',
  attributes: _objectSpread({}, FILL, {
    opacity: '0',
    d: 'M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z'
  }),
  children: [{
    tag: 'animate',
    attributes: _objectSpread({}, OPACITY_ANIMATE, {
      values: '0;0;1;1;0;0;'
    })
  }]
};
var missing = {
  tag: 'g',
  children: [RING, DOT, QUESTION, EXCLAMATION]
};

var styles$2 = namespace.styles;
function asFoundIcon(icon) {
  var width = icon[0];
  var height = icon[1];

  var _icon$slice = icon.slice(4),
      _icon$slice2 = _slicedToArray(_icon$slice, 1),
      vectorData = _icon$slice2[0];

  var element = null;

  if (Array.isArray(vectorData)) {
    element = {
      tag: 'g',
      attributes: {
        class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.GROUP)
      },
      children: [{
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.SECONDARY),
          fill: 'currentColor',
          d: vectorData[0]
        }
      }, {
        tag: 'path',
        attributes: {
          class: "".concat(config.familyPrefix, "-").concat(DUOTONE_CLASSES.PRIMARY),
          fill: 'currentColor',
          d: vectorData[1]
        }
      }]
    };
  } else {
    element = {
      tag: 'path',
      attributes: {
        fill: 'currentColor',
        d: vectorData
      }
    };
  }

  return {
    found: true,
    width: width,
    height: height,
    icon: element
  };
}
function findIcon(iconName, prefix) {
  return new picked(function (resolve, reject) {
    var val = {
      found: false,
      width: 512,
      height: 512,
      icon: missing
    };

    if (iconName && prefix && styles$2[prefix] && styles$2[prefix][iconName]) {
      var icon = styles$2[prefix][iconName];
      return resolve(asFoundIcon(icon));
    }

    var headers = {};

    if (_typeof(WINDOW.FontAwesomeKitConfig) === 'object' && typeof window.FontAwesomeKitConfig.token === 'string') {
      headers['fa-kit-token'] = WINDOW.FontAwesomeKitConfig.token;
    }

    if (iconName && prefix && !config.showMissingIcons) {
      reject(new MissingIcon("Icon is missing for prefix ".concat(prefix, " with icon name ").concat(iconName)));
    } else {
      resolve(val);
    }
  });
}

var styles$3 = namespace.styles;

function generateSvgReplacementMutation(node, nodeMeta) {
  var iconName = nodeMeta.iconName,
      title = nodeMeta.title,
      titleId = nodeMeta.titleId,
      prefix = nodeMeta.prefix,
      transform = nodeMeta.transform,
      symbol = nodeMeta.symbol,
      mask = nodeMeta.mask,
      maskId = nodeMeta.maskId,
      extra = nodeMeta.extra;
  return new picked(function (resolve, reject) {
    picked.all([findIcon(iconName, prefix), findIcon(mask.iconName, mask.prefix)]).then(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          main = _ref2[0],
          mask = _ref2[1];

      resolve([node, makeInlineSvgAbstract({
        icons: {
          main: main,
          mask: mask
        },
        prefix: prefix,
        iconName: iconName,
        transform: transform,
        symbol: symbol,
        mask: mask,
        maskId: maskId,
        title: title,
        titleId: titleId,
        extra: extra,
        watchable: true
      })]);
    });
  });
}

function generateLayersText(node, nodeMeta) {
  var title = nodeMeta.title,
      transform = nodeMeta.transform,
      extra = nodeMeta.extra;
  var width = null;
  var height = null;

  if (IS_IE) {
    var computedFontSize = parseInt(getComputedStyle(node).fontSize, 10);
    var boundingClientRect = node.getBoundingClientRect();
    width = boundingClientRect.width / computedFontSize;
    height = boundingClientRect.height / computedFontSize;
  }

  if (config.autoA11y && !title) {
    extra.attributes['aria-hidden'] = 'true';
  }

  return picked.resolve([node, makeLayersTextAbstract({
    content: node.innerHTML,
    width: width,
    height: height,
    transform: transform,
    title: title,
    extra: extra,
    watchable: true
  })]);
}

function generateMutation(node) {
  var nodeMeta = parseMeta(node);

  if (~nodeMeta.extra.classes.indexOf(LAYERS_TEXT_CLASSNAME)) {
    return generateLayersText(node, nodeMeta);
  } else {
    return generateSvgReplacementMutation(node, nodeMeta);
  }
}

function onTree(root) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  if (!IS_DOM) return;
  var htmlClassList = DOCUMENT.documentElement.classList;

  var hclAdd = function hclAdd(suffix) {
    return htmlClassList.add("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var hclRemove = function hclRemove(suffix) {
    return htmlClassList.remove("".concat(HTML_CLASS_I2SVG_BASE_CLASS, "-").concat(suffix));
  };

  var prefixes = config.autoFetchSvg ? Object.keys(PREFIX_TO_STYLE) : Object.keys(styles$3);
  var prefixesDomQuery = [".".concat(LAYERS_TEXT_CLASSNAME, ":not([").concat(DATA_FA_I2SVG, "])")].concat(prefixes.map(function (p) {
    return ".".concat(p, ":not([").concat(DATA_FA_I2SVG, "])");
  })).join(', ');

  if (prefixesDomQuery.length === 0) {
    return;
  }

  var candidates = [];

  try {
    candidates = toArray(root.querySelectorAll(prefixesDomQuery));
  } catch (e) {// noop
  }

  if (candidates.length > 0) {
    hclAdd('pending');
    hclRemove('complete');
  } else {
    return;
  }

  var mark = perf.begin('onTree');
  var mutations = candidates.reduce(function (acc, node) {
    try {
      var mutation = generateMutation(node);

      if (mutation) {
        acc.push(mutation);
      }
    } catch (e) {
      if (!PRODUCTION) {
        if (e instanceof MissingIcon) {
          console.error(e);
        }
      }
    }

    return acc;
  }, []);
  return new picked(function (resolve, reject) {
    picked.all(mutations).then(function (resolvedMutations) {
      perform(resolvedMutations, function () {
        hclAdd('active');
        hclAdd('complete');
        hclRemove('pending');
        if (typeof callback === 'function') callback();
        mark();
        resolve();
      });
    }).catch(function () {
      mark();
      reject();
    });
  });
}
function onNode(node) {
  var callback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  generateMutation(node).then(function (mutation) {
    if (mutation) {
      perform([mutation], callback);
    }
  });
}

function replaceForPosition(node, position) {
  var pendingAttribute = "".concat(DATA_FA_PSEUDO_ELEMENT_PENDING).concat(position.replace(':', '-'));
  return new picked(function (resolve, reject) {
    if (node.getAttribute(pendingAttribute) !== null) {
      // This node is already being processed
      return resolve();
    }

    var children = toArray(node.children);
    var alreadyProcessedPseudoElement = children.filter(function (c) {
      return c.getAttribute(DATA_FA_PSEUDO_ELEMENT) === position;
    })[0];
    var styles = WINDOW.getComputedStyle(node, position);
    var fontFamily = styles.getPropertyValue('font-family').match(FONT_FAMILY_PATTERN);
    var fontWeight = styles.getPropertyValue('font-weight');
    var content = styles.getPropertyValue('content');

    if (alreadyProcessedPseudoElement && !fontFamily) {
      // If we've already processed it but the current computed style does not result in a font-family,
      // that probably means that a class name that was previously present to make the icon has been
      // removed. So we now should delete the icon.
      node.removeChild(alreadyProcessedPseudoElement);
      return resolve();
    } else if (fontFamily && content !== 'none' && content !== '') {
      var prefix = ~['Solid', 'Regular', 'Light', 'Duotone', 'Brands'].indexOf(fontFamily[1]) ? STYLE_TO_PREFIX[fontFamily[1].toLowerCase()] : FONT_WEIGHT_TO_PREFIX[fontWeight];
      var hexValue = toHex(content.length === 3 ? content.substr(1, 1) : content);
      var iconName = byUnicode(prefix, hexValue);
      var iconIdentifier = iconName; // Only convert the pseudo element in this :before/:after position into an icon if we haven't
      // already done so with the same prefix and iconName

      if (iconName && (!alreadyProcessedPseudoElement || alreadyProcessedPseudoElement.getAttribute(DATA_PREFIX) !== prefix || alreadyProcessedPseudoElement.getAttribute(DATA_ICON) !== iconIdentifier)) {
        node.setAttribute(pendingAttribute, iconIdentifier);

        if (alreadyProcessedPseudoElement) {
          // Delete the old one, since we're replacing it with a new one
          node.removeChild(alreadyProcessedPseudoElement);
        }

        var meta = blankMeta();
        var extra = meta.extra;
        extra.attributes[DATA_FA_PSEUDO_ELEMENT] = position;
        findIcon(iconName, prefix).then(function (main) {
          var abstract = makeInlineSvgAbstract(_objectSpread({}, meta, {
            icons: {
              main: main,
              mask: emptyCanonicalIcon()
            },
            prefix: prefix,
            iconName: iconIdentifier,
            extra: extra,
            watchable: true
          }));
          var element = DOCUMENT.createElement('svg');

          if (position === ':before') {
            node.insertBefore(element, node.firstChild);
          } else {
            node.appendChild(element);
          }

          element.outerHTML = abstract.map(function (a) {
            return toHtml(a);
          }).join('\n');
          node.removeAttribute(pendingAttribute);
          resolve();
        }).catch(reject);
      } else {
        resolve();
      }
    } else {
      resolve();
    }
  });
}

function replace(node) {
  return picked.all([replaceForPosition(node, ':before'), replaceForPosition(node, ':after')]);
}

function processable(node) {
  return node.parentNode !== document.head && !~TAGNAMES_TO_SKIP_FOR_PSEUDOELEMENTS.indexOf(node.tagName.toUpperCase()) && !node.getAttribute(DATA_FA_PSEUDO_ELEMENT) && (!node.parentNode || node.parentNode.tagName !== 'svg');
}

function searchPseudoElements (root) {
  if (!IS_DOM) return;
  return new picked(function (resolve, reject) {
    var operations = toArray(root.querySelectorAll('*')).filter(processable).map(replace);
    var end = perf.begin('searchPseudoElements');
    disableObservation();
    picked.all(operations).then(function () {
      end();
      enableObservation();
      resolve();
    }).catch(function () {
      end();
      enableObservation();
      reject();
    });
  });
}

var baseStyles = "svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}";

function css () {
  var dfp = DEFAULT_FAMILY_PREFIX;
  var drc = DEFAULT_REPLACEMENT_CLASS;
  var fp = config.familyPrefix;
  var rc = config.replacementClass;
  var s = baseStyles;

  if (fp !== dfp || rc !== drc) {
    var dPatt = new RegExp("\\.".concat(dfp, "\\-"), 'g');
    var customPropPatt = new RegExp("\\--".concat(dfp, "\\-"), 'g');
    var rPatt = new RegExp("\\.".concat(drc), 'g');
    s = s.replace(dPatt, ".".concat(fp, "-")).replace(customPropPatt, "--".concat(fp, "-")).replace(rPatt, ".".concat(rc));
  }

  return s;
}

var Library =
/*#__PURE__*/
function () {
  function Library() {
    _classCallCheck(this, Library);

    this.definitions = {};
  }

  _createClass(Library, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, definitions = new Array(_len), _key = 0; _key < _len; _key++) {
        definitions[_key] = arguments[_key];
      }

      var additions = definitions.reduce(this._pullDefinitions, {});
      Object.keys(additions).forEach(function (key) {
        _this.definitions[key] = _objectSpread({}, _this.definitions[key] || {}, additions[key]);
        defineIcons(key, additions[key]);
        build();
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.definitions = {};
    }
  }, {
    key: "_pullDefinitions",
    value: function _pullDefinitions(additions, definition) {
      var normalized = definition.prefix && definition.iconName && definition.icon ? {
        0: definition
      } : definition;
      Object.keys(normalized).map(function (key) {
        var _normalized$key = normalized[key],
            prefix = _normalized$key.prefix,
            iconName = _normalized$key.iconName,
            icon = _normalized$key.icon;
        if (!additions[prefix]) additions[prefix] = {};
        additions[prefix][iconName] = icon;
      });
      return additions;
    }
  }]);

  return Library;
}();

function ensureCss() {
  if (config.autoAddCss && !_cssInserted) {
    insertCss(css());

    _cssInserted = true;
  }
}

function apiObject(val, abstractCreator) {
  Object.defineProperty(val, 'abstract', {
    get: abstractCreator
  });
  Object.defineProperty(val, 'html', {
    get: function get() {
      return val.abstract.map(function (a) {
        return toHtml(a);
      });
    }
  });
  Object.defineProperty(val, 'node', {
    get: function get() {
      if (!IS_DOM) return;
      var container = DOCUMENT.createElement('div');
      container.innerHTML = val.html;
      return container.children;
    }
  });
  return val;
}

function findIconDefinition(iconLookup) {
  var _iconLookup$prefix = iconLookup.prefix,
      prefix = _iconLookup$prefix === void 0 ? 'fa' : _iconLookup$prefix,
      iconName = iconLookup.iconName;
  if (!iconName) return;
  return iconFromMapping(library.definitions, prefix, iconName) || iconFromMapping(namespace.styles, prefix, iconName);
}

function resolveIcons(next) {
  return function (maybeIconDefinition) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var iconDefinition = (maybeIconDefinition || {}).icon ? maybeIconDefinition : findIconDefinition(maybeIconDefinition || {});
    var mask = params.mask;

    if (mask) {
      mask = (mask || {}).icon ? mask : findIconDefinition(mask || {});
    }

    return next(iconDefinition, _objectSpread({}, params, {
      mask: mask
    }));
  };
}

var library = new Library();
var noAuto = function noAuto() {
  config.autoReplaceSvg = false;
  config.observeMutations = false;
  disconnect();
};
var _cssInserted = false;
var dom = {
  i2svg: function i2svg() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (IS_DOM) {
      ensureCss();
      var _params$node = params.node,
          node = _params$node === void 0 ? DOCUMENT : _params$node,
          _params$callback = params.callback,
          callback = _params$callback === void 0 ? function () {} : _params$callback;

      if (config.searchPseudoElements) {
        searchPseudoElements(node);
      }

      return onTree(node, callback);
    } else {
      return picked.reject('Operation requires a DOM of some kind.');
    }
  },
  css: css,
  insertCss: function insertCss$$1() {
    if (!_cssInserted) {
      insertCss(css());

      _cssInserted = true;
    }
  },
  watch: function watch() {
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var autoReplaceSvgRoot = params.autoReplaceSvgRoot,
        observeMutationsRoot = params.observeMutationsRoot;

    if (config.autoReplaceSvg === false) {
      config.autoReplaceSvg = true;
    }

    config.observeMutations = true;
    domready(function () {
      autoReplace({
        autoReplaceSvgRoot: autoReplaceSvgRoot
      });
      observe({
        treeCallback: onTree,
        nodeCallback: onNode,
        pseudoElementsCallback: searchPseudoElements,
        observeMutationsRoot: observeMutationsRoot
      });
    });
  }
};
var parse = {
  transform: function transform(transformString) {
    return parseTransformString(transformString);
  }
};
var icon = resolveIcons(function (iconDefinition) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform = params.transform,
      transform = _params$transform === void 0 ? meaninglessTransform : _params$transform,
      _params$symbol = params.symbol,
      symbol = _params$symbol === void 0 ? false : _params$symbol,
      _params$mask = params.mask,
      mask = _params$mask === void 0 ? null : _params$mask,
      _params$maskId = params.maskId,
      maskId = _params$maskId === void 0 ? null : _params$maskId,
      _params$title = params.title,
      title = _params$title === void 0 ? null : _params$title,
      _params$titleId = params.titleId,
      titleId = _params$titleId === void 0 ? null : _params$titleId,
      _params$classes = params.classes,
      classes = _params$classes === void 0 ? [] : _params$classes,
      _params$attributes = params.attributes,
      attributes = _params$attributes === void 0 ? {} : _params$attributes,
      _params$styles = params.styles,
      styles = _params$styles === void 0 ? {} : _params$styles;
  if (!iconDefinition) return;
  var prefix = iconDefinition.prefix,
      iconName = iconDefinition.iconName,
      icon = iconDefinition.icon;
  return apiObject(_objectSpread({
    type: 'icon'
  }, iconDefinition), function () {
    ensureCss();

    if (config.autoA11y) {
      if (title) {
        attributes['aria-labelledby'] = "".concat(config.replacementClass, "-title-").concat(titleId || nextUniqueId());
      } else {
        attributes['aria-hidden'] = 'true';
        attributes['focusable'] = 'false';
      }
    }

    return makeInlineSvgAbstract({
      icons: {
        main: asFoundIcon(icon),
        mask: mask ? asFoundIcon(mask.icon) : {
          found: false,
          width: null,
          height: null,
          icon: {}
        }
      },
      prefix: prefix,
      iconName: iconName,
      transform: _objectSpread({}, meaninglessTransform, transform),
      symbol: symbol,
      title: title,
      maskId: maskId,
      titleId: titleId,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: classes
      }
    });
  });
});
var text = function text(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$transform2 = params.transform,
      transform = _params$transform2 === void 0 ? meaninglessTransform : _params$transform2,
      _params$title2 = params.title,
      title = _params$title2 === void 0 ? null : _params$title2,
      _params$classes2 = params.classes,
      classes = _params$classes2 === void 0 ? [] : _params$classes2,
      _params$attributes2 = params.attributes,
      attributes = _params$attributes2 === void 0 ? {} : _params$attributes2,
      _params$styles2 = params.styles,
      styles = _params$styles2 === void 0 ? {} : _params$styles2;
  return apiObject({
    type: 'text',
    content: content
  }, function () {
    ensureCss();
    return makeLayersTextAbstract({
      content: content,
      transform: _objectSpread({}, meaninglessTransform, transform),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-text")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var counter = function counter(content) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$title3 = params.title,
      title = _params$title3 === void 0 ? null : _params$title3,
      _params$classes3 = params.classes,
      classes = _params$classes3 === void 0 ? [] : _params$classes3,
      _params$attributes3 = params.attributes,
      attributes = _params$attributes3 === void 0 ? {} : _params$attributes3,
      _params$styles3 = params.styles,
      styles = _params$styles3 === void 0 ? {} : _params$styles3;
  return apiObject({
    type: 'counter',
    content: content
  }, function () {
    ensureCss();
    return makeLayersCounterAbstract({
      content: content.toString(),
      title: title,
      extra: {
        attributes: attributes,
        styles: styles,
        classes: ["".concat(config.familyPrefix, "-layers-counter")].concat(_toConsumableArray(classes))
      }
    });
  });
};
var layer = function layer(assembler) {
  var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _params$classes4 = params.classes,
      classes = _params$classes4 === void 0 ? [] : _params$classes4;
  return apiObject({
    type: 'layer'
  }, function () {
    ensureCss();
    var children = [];
    assembler(function (args) {
      Array.isArray(args) ? args.map(function (a) {
        children = children.concat(a.abstract);
      }) : children = children.concat(args.abstract);
    });
    return [{
      tag: 'span',
      attributes: {
        class: ["".concat(config.familyPrefix, "-layers")].concat(_toConsumableArray(classes)).join(' ')
      },
      children: children
    }];
  });
};
var api = {
  noAuto: noAuto,
  config: config,
  dom: dom,
  library: library,
  parse: parse,
  findIconDefinition: findIconDefinition,
  icon: icon,
  text: text,
  counter: counter,
  layer: layer,
  toHtml: toHtml
};

var autoReplace = function autoReplace() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var _params$autoReplaceSv = params.autoReplaceSvgRoot,
      autoReplaceSvgRoot = _params$autoReplaceSv === void 0 ? DOCUMENT : _params$autoReplaceSv;
  if ((Object.keys(namespace.styles).length > 0 || config.autoFetchSvg) && IS_DOM && config.autoReplaceSvg) api.dom.i2svg({
    node: autoReplaceSvgRoot
  });
};



/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/@fortawesome/react-fontawesome/index.es.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@fortawesome/react-fontawesome/index.es.js ***!
  \*****************************************************************/
/*! exports provided: FontAwesomeIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontAwesomeIcon", function() { return FontAwesomeIcon; });
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

// Get CSS class list from a props object
function classList(props) {
  var _classes;

  var spin = props.spin,
      pulse = props.pulse,
      fixedWidth = props.fixedWidth,
      inverse = props.inverse,
      border = props.border,
      listItem = props.listItem,
      flip = props.flip,
      size = props.size,
      rotation = props.rotation,
      pull = props.pull; // map of CSS class names to properties

  var classes = (_classes = {
    'fa-spin': spin,
    'fa-pulse': pulse,
    'fa-fw': fixedWidth,
    'fa-inverse': inverse,
    'fa-border': border,
    'fa-li': listItem,
    'fa-flip-horizontal': flip === 'horizontal' || flip === 'both',
    'fa-flip-vertical': flip === 'vertical' || flip === 'both'
  }, _defineProperty(_classes, "fa-".concat(size), typeof size !== 'undefined' && size !== null), _defineProperty(_classes, "fa-rotate-".concat(rotation), typeof rotation !== 'undefined' && rotation !== null), _defineProperty(_classes, "fa-pull-".concat(pull), typeof pull !== 'undefined' && pull !== null), _defineProperty(_classes, 'fa-swap-opacity', props.swapOpacity), _classes); // map over all the keys in the classes object
  // return an array of the keys where the value for the key is not null

  return Object.keys(classes).map(function (key) {
    return classes[key] ? key : null;
  }).filter(function (key) {
    return key;
  });
}

// Camelize taken from humps
// humps is copyright © 2012+ Dom Christie
// Released under the MIT license.
// Performant way to determine if object coerces to a number
function _isNumerical(obj) {
  obj = obj - 0; // eslint-disable-next-line no-self-compare

  return obj === obj;
}

function camelize(string) {
  if (_isNumerical(string)) {
    return string;
  } // eslint-disable-next-line no-useless-escape


  string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
    return chr ? chr.toUpperCase() : '';
  }); // Ensure 1st char is always lowercase

  return string.substr(0, 1).toLowerCase() + string.substr(1);
}

function capitalize(val) {
  return val.charAt(0).toUpperCase() + val.slice(1);
}

function styleToObject(style) {
  return style.split(';').map(function (s) {
    return s.trim();
  }).filter(function (s) {
    return s;
  }).reduce(function (acc, pair) {
    var i = pair.indexOf(':');
    var prop = camelize(pair.slice(0, i));
    var value = pair.slice(i + 1).trim();
    prop.startsWith('webkit') ? acc[capitalize(prop)] = value : acc[prop] = value;
    return acc;
  }, {});
}

function convert(createElement, element) {
  var extraProps = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof element === 'string') {
    return element;
  }

  var children = (element.children || []).map(function (child) {
    return convert(createElement, child);
  });
  /* eslint-disable dot-notation */

  var mixins = Object.keys(element.attributes || {}).reduce(function (acc, key) {
    var val = element.attributes[key];

    switch (key) {
      case 'class':
        acc.attrs['className'] = val;
        delete element.attributes['class'];
        break;

      case 'style':
        acc.attrs['style'] = styleToObject(val);
        break;

      default:
        if (key.indexOf('aria-') === 0 || key.indexOf('data-') === 0) {
          acc.attrs[key.toLowerCase()] = val;
        } else {
          acc.attrs[camelize(key)] = val;
        }

    }

    return acc;
  }, {
    attrs: {}
  });

  var _extraProps$style = extraProps.style,
      existingStyle = _extraProps$style === void 0 ? {} : _extraProps$style,
      remaining = _objectWithoutProperties(extraProps, ["style"]);

  mixins.attrs['style'] = _objectSpread2({}, mixins.attrs['style'], {}, existingStyle);
  /* eslint-enable */

  return createElement.apply(void 0, [element.tag, _objectSpread2({}, mixins.attrs, {}, remaining)].concat(_toConsumableArray(children)));
}

var PRODUCTION = false;

try {
  PRODUCTION = "development" === 'production';
} catch (e) {}

function log () {
  if (!PRODUCTION && console && typeof console.error === 'function') {
    var _console;

    (_console = console).error.apply(_console, arguments);
  }
}

// Normalize icon arguments
function normalizeIconArgs(icon) {
  // if the icon is null, there's nothing to do
  if (icon === null) {
    return null;
  } // if the icon is an object and has a prefix and an icon name, return it


  if (_typeof(icon) === 'object' && icon.prefix && icon.iconName) {
    return icon;
  } // if it's an array with length of two


  if (Array.isArray(icon) && icon.length === 2) {
    // use the first item as prefix, second as icon name
    return {
      prefix: icon[0],
      iconName: icon[1]
    };
  } // if it's a string, use it as the icon name


  if (typeof icon === 'string') {
    return {
      prefix: 'fas',
      iconName: icon
    };
  }
}

// creates an object with a key of key
// and a value of value
// if certain conditions are met
function objectWithKey(key, value) {
  // if the value is a non-empty array
  // or it's not an array but it is truthy
  // then create the object with the key and the value
  // if not, return an empty array
  return Array.isArray(value) && value.length > 0 || !Array.isArray(value) && value ? _defineProperty({}, key, value) : {};
}

function FontAwesomeIcon(props) {
  var iconArgs = props.icon,
      maskArgs = props.mask,
      symbol = props.symbol,
      className = props.className,
      title = props.title;
  var iconLookup = normalizeIconArgs(iconArgs);
  var classes = objectWithKey('classes', [].concat(_toConsumableArray(classList(props)), _toConsumableArray(className.split(' '))));
  var transform = objectWithKey('transform', typeof props.transform === 'string' ? _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["parse"].transform(props.transform) : props.transform);
  var mask = objectWithKey('mask', normalizeIconArgs(maskArgs));
  var renderedIcon = Object(_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["icon"])(iconLookup, _objectSpread2({}, classes, {}, transform, {}, mask, {
    symbol: symbol,
    title: title
  }));

  if (!renderedIcon) {
    log('Could not find icon', iconLookup);
    return null;
  }

  var abstract = renderedIcon.abstract;
  var extraProps = {};
  Object.keys(props).forEach(function (key) {
    // eslint-disable-next-line no-prototype-builtins
    if (!FontAwesomeIcon.defaultProps.hasOwnProperty(key)) {
      extraProps[key] = props[key];
    }
  });
  return convertCurry(abstract[0], extraProps);
}
FontAwesomeIcon.displayName = 'FontAwesomeIcon';
FontAwesomeIcon.propTypes = {
  border: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  className: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  mask: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  fixedWidth: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  inverse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  flip: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['horizontal', 'vertical', 'both']),
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  listItem: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  pull: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['right', 'left']),
  pulse: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  rotation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf([90, 180, 270]),
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOf(['lg', 'xs', 'sm', '1x', '2x', '3x', '4x', '5x', '6x', '7x', '8x', '9x', '10x']),
  spin: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  symbol: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string]),
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  transform: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string, prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object]),
  swapOpacity: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool
};
FontAwesomeIcon.defaultProps = {
  border: false,
  className: '',
  mask: null,
  fixedWidth: false,
  inverse: false,
  flip: null,
  icon: null,
  listItem: false,
  pull: null,
  pulse: false,
  rotation: null,
  size: null,
  spin: false,
  symbol: false,
  title: '',
  transform: null,
  swapOpacity: false
};
var convertCurry = convert.bind(null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement);




/***/ }),

/***/ "./node_modules/next/dist/build/polyfills/object-assign.js":
/*!***********************************************************************************************************************!*\
  !*** delegated ./node_modules/next/dist/build/polyfills/object-assign.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/next/dist/build/polyfills/object-assign.js");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fexercitiu%2F%5Bid%5D&absolutePagePath=C%3A%5CUsers%5Cplesa%5CDesktop%5CProiecte%20Web%5Cinfoplus%5Cpages%5Cexercitiu%5C%5Bid%5D.js&hotRouterUpdates=true!./":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fexercitiu%2F%5Bid%5D&absolutePagePath=C%3A%5CUsers%5Cplesa%5CDesktop%5CProiecte%20Web%5Cinfoplus%5Cpages%5Cexercitiu%5C%5Bid%5D.js&hotRouterUpdates=true ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P = window.__NEXT_P || []).push([
      "/exercitiu/[id]",
      function () {
        var mod = __webpack_require__(/*! ./pages/exercitiu/[id].js */ "./pages/exercitiu/[id].js");
        if (true) {
          module.hot.accept(/*! ./pages/exercitiu/[id].js */ "./pages/exercitiu/[id].js", function () {
            if (!next.router.components["/exercitiu/[id]"]) return;
            var updatedPage = __webpack_require__(/*! ./pages/exercitiu/[id].js */ "./pages/exercitiu/[id].js");
            next.router.update("/exercitiu/[id]", updatedPage);
          });
        }
        return mod;
      }
    ]);
  

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!*********************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/checkPropTypes.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/prop-types/checkPropTypes.js");

/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*******************************************************************************************************************!*\
  !*** delegated ./node_modules/prop-types/lib/ReactPropTypesSecret.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/prop-types/lib/ReactPropTypesSecret.js");

/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.12.0
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
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE);
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
var lowPriorityWarningWithoutStack = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
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

  lowPriorityWarningWithoutStack = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarningWithoutStack(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(void 0, [format].concat(args));
    }
  };
}

var lowPriorityWarningWithoutStack$1 = lowPriorityWarningWithoutStack;

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
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

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
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarningWithoutStack$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
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

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_c2e10d183b950a67d9e7 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_c2e10d183b950a67d9e7 */ "dll-reference dll_c2e10d183b950a67d9e7"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/string-hash/index.js":
/*!*******************************************!*\
  !*** ./node_modules/string-hash/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function hash(str) {
  var hash = 5381,
      i    = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  /* JavaScript does bitwise operations (like XOR, above) on 32-bit signed
   * integers. Since we want the results to be always positive, convert the
   * signed int to an unsigned by doing an unsigned bitshift. */
  return hash >>> 0;
}

module.exports = hash;


/***/ }),

/***/ "./node_modules/styled-jsx/dist/lib/stylesheet.js":
/*!********************************************************!*\
  !*** ./node_modules/styled-jsx/dist/lib/stylesheet.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;
exports["default"] = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Based on Glamor's sheet
https://github.com/threepointone/glamor/blob/667b480d31b3721a905021b26e1290ce92ca2879/src/sheet.js
*/
var isProd = typeof process !== 'undefined' && process.env && "development" === 'production';

var isString = function isString(o) {
  return Object.prototype.toString.call(o) === '[object String]';
};

var StyleSheet =
/*#__PURE__*/
function () {
  function StyleSheet(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$name = _ref.name,
        name = _ref$name === void 0 ? 'stylesheet' : _ref$name,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? isProd : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    invariant(isString(name), '`name` must be a string');
    this._name = name;
    this._deletedRulePlaceholder = "#" + name + "-deleted-rule____{}";
    invariant(typeof optimizeForSpeed === 'boolean', '`optimizeForSpeed` must be a boolean');
    this._optimizeForSpeed = optimizeForSpeed;
    this._isBrowser = isBrowser;
    this._serverSheet = undefined;
    this._tags = [];
    this._injected = false;
    this._rulesCount = 0;
    var node = this._isBrowser && document.querySelector('meta[property="csp-nonce"]');
    this._nonce = node ? node.getAttribute('content') : null;
  }

  var _proto = StyleSheet.prototype;

  _proto.setOptimizeForSpeed = function setOptimizeForSpeed(bool) {
    invariant(typeof bool === 'boolean', '`setOptimizeForSpeed` accepts a boolean');
    invariant(this._rulesCount === 0, 'optimizeForSpeed cannot be when rules have already been inserted');
    this.flush();
    this._optimizeForSpeed = bool;
    this.inject();
  };

  _proto.isOptimizeForSpeed = function isOptimizeForSpeed() {
    return this._optimizeForSpeed;
  };

  _proto.inject = function inject() {
    var _this = this;

    invariant(!this._injected, 'sheet already injected');
    this._injected = true;

    if (this._isBrowser && this._optimizeForSpeed) {
      this._tags[0] = this.makeStyleTag(this._name);
      this._optimizeForSpeed = 'insertRule' in this.getSheet();

      if (!this._optimizeForSpeed) {
        if (!isProd) {
          console.warn('StyleSheet: optimizeForSpeed mode not supported falling back to standard mode.');
        }

        this.flush();
        this._injected = true;
      }

      return;
    }

    this._serverSheet = {
      cssRules: [],
      insertRule: function insertRule(rule, index) {
        if (typeof index === 'number') {
          _this._serverSheet.cssRules[index] = {
            cssText: rule
          };
        } else {
          _this._serverSheet.cssRules.push({
            cssText: rule
          });
        }

        return index;
      },
      deleteRule: function deleteRule(index) {
        _this._serverSheet.cssRules[index] = null;
      }
    };
  };

  _proto.getSheetForTag = function getSheetForTag(tag) {
    if (tag.sheet) {
      return tag.sheet;
    } // this weirdness brought to you by firefox


    for (var i = 0; i < document.styleSheets.length; i++) {
      if (document.styleSheets[i].ownerNode === tag) {
        return document.styleSheets[i];
      }
    }
  };

  _proto.getSheet = function getSheet() {
    return this.getSheetForTag(this._tags[this._tags.length - 1]);
  };

  _proto.insertRule = function insertRule(rule, index) {
    invariant(isString(rule), '`insertRule` accepts only strings');

    if (!this._isBrowser) {
      if (typeof index !== 'number') {
        index = this._serverSheet.cssRules.length;
      }

      this._serverSheet.insertRule(rule, index);

      return this._rulesCount++;
    }

    if (this._optimizeForSpeed) {
      var sheet = this.getSheet();

      if (typeof index !== 'number') {
        index = sheet.cssRules.length;
      } // this weirdness for perf, and chrome's weird bug
      // https://stackoverflow.com/questions/20007992/chrome-suddenly-stopped-accepting-insertrule


      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        }

        return -1;
      }
    } else {
      var insertionPoint = this._tags[index];

      this._tags.push(this.makeStyleTag(this._name, rule, insertionPoint));
    }

    return this._rulesCount++;
  };

  _proto.replaceRule = function replaceRule(index, rule) {
    if (this._optimizeForSpeed || !this._isBrowser) {
      var sheet = this._isBrowser ? this.getSheet() : this._serverSheet;

      if (!rule.trim()) {
        rule = this._deletedRulePlaceholder;
      }

      if (!sheet.cssRules[index]) {
        // @TBD Should we throw an error?
        return index;
      }

      sheet.deleteRule(index);

      try {
        sheet.insertRule(rule, index);
      } catch (error) {
        if (!isProd) {
          console.warn("StyleSheet: illegal rule: \n\n" + rule + "\n\nSee https://stackoverflow.com/q/20007992 for more info");
        } // In order to preserve the indices we insert a deleteRulePlaceholder


        sheet.insertRule(this._deletedRulePlaceholder, index);
      }
    } else {
      var tag = this._tags[index];
      invariant(tag, "old rule at index `" + index + "` not found");
      tag.textContent = rule;
    }

    return index;
  };

  _proto.deleteRule = function deleteRule(index) {
    if (!this._isBrowser) {
      this._serverSheet.deleteRule(index);

      return;
    }

    if (this._optimizeForSpeed) {
      this.replaceRule(index, '');
    } else {
      var tag = this._tags[index];
      invariant(tag, "rule at index `" + index + "` not found");
      tag.parentNode.removeChild(tag);
      this._tags[index] = null;
    }
  };

  _proto.flush = function flush() {
    this._injected = false;
    this._rulesCount = 0;

    if (this._isBrowser) {
      this._tags.forEach(function (tag) {
        return tag && tag.parentNode.removeChild(tag);
      });

      this._tags = [];
    } else {
      // simpler on server
      this._serverSheet.cssRules = [];
    }
  };

  _proto.cssRules = function cssRules() {
    var _this2 = this;

    if (!this._isBrowser) {
      return this._serverSheet.cssRules;
    }

    return this._tags.reduce(function (rules, tag) {
      if (tag) {
        rules = rules.concat(Array.prototype.map.call(_this2.getSheetForTag(tag).cssRules, function (rule) {
          return rule.cssText === _this2._deletedRulePlaceholder ? null : rule;
        }));
      } else {
        rules.push(null);
      }

      return rules;
    }, []);
  };

  _proto.makeStyleTag = function makeStyleTag(name, cssString, relativeToTag) {
    if (cssString) {
      invariant(isString(cssString), 'makeStyleTag acceps only strings as second parameter');
    }

    var tag = document.createElement('style');
    if (this._nonce) tag.setAttribute('nonce', this._nonce);
    tag.type = 'text/css';
    tag.setAttribute("data-" + name, '');

    if (cssString) {
      tag.appendChild(document.createTextNode(cssString));
    }

    var head = document.head || document.getElementsByTagName('head')[0];

    if (relativeToTag) {
      head.insertBefore(tag, relativeToTag);
    } else {
      head.appendChild(tag);
    }

    return tag;
  };

  _createClass(StyleSheet, [{
    key: "length",
    get: function get() {
      return this._rulesCount;
    }
  }]);

  return StyleSheet;
}();

exports["default"] = StyleSheet;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheet: " + message + ".");
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/styled-jsx/dist/style.js":
/*!***********************************************!*\
  !*** ./node_modules/styled-jsx/dist/style.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.flush = flush;
exports["default"] = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _stylesheetRegistry = _interopRequireDefault(__webpack_require__(/*! ./stylesheet-registry */ "./node_modules/styled-jsx/dist/stylesheet-registry.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var styleSheetRegistry = new _stylesheetRegistry["default"]();

var JSXStyle =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(JSXStyle, _Component);

  function JSXStyle(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.prevProps = {};
    return _this;
  }

  JSXStyle.dynamic = function dynamic(info) {
    return info.map(function (tagInfo) {
      var baseId = tagInfo[0];
      var props = tagInfo[1];
      return styleSheetRegistry.computeId(baseId, props);
    }).join(' ');
  } // probably faster than PureComponent (shallowEqual)
  ;

  var _proto = JSXStyle.prototype;

  _proto.shouldComponentUpdate = function shouldComponentUpdate(otherProps) {
    return this.props.id !== otherProps.id || // We do this check because `dynamic` is an array of strings or undefined.
    // These are the computed values for dynamic styles.
    String(this.props.dynamic) !== String(otherProps.dynamic);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    styleSheetRegistry.remove(this.props);
  };

  _proto.render = function render() {
    // This is a workaround to make the side effect async safe in the "render" phase.
    // See https://github.com/zeit/styled-jsx/pull/484
    if (this.shouldComponentUpdate(this.prevProps)) {
      // Updates
      if (this.prevProps.id) {
        styleSheetRegistry.remove(this.prevProps);
      }

      styleSheetRegistry.add(this.props);
      this.prevProps = this.props;
    }

    return null;
  };

  return JSXStyle;
}(_react.Component);

exports["default"] = JSXStyle;

function flush() {
  var cssRules = styleSheetRegistry.cssRules();
  styleSheetRegistry.flush();
  return cssRules;
}

/***/ }),

/***/ "./node_modules/styled-jsx/dist/stylesheet-registry.js":
/*!*************************************************************!*\
  !*** ./node_modules/styled-jsx/dist/stylesheet-registry.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _stringHash = _interopRequireDefault(__webpack_require__(/*! string-hash */ "./node_modules/string-hash/index.js"));

var _stylesheet = _interopRequireDefault(__webpack_require__(/*! ./lib/stylesheet */ "./node_modules/styled-jsx/dist/lib/stylesheet.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sanitize = function sanitize(rule) {
  return rule.replace(/\/style/gi, '\\/style');
};

var StyleSheetRegistry =
/*#__PURE__*/
function () {
  function StyleSheetRegistry(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$styleSheet = _ref.styleSheet,
        styleSheet = _ref$styleSheet === void 0 ? null : _ref$styleSheet,
        _ref$optimizeForSpeed = _ref.optimizeForSpeed,
        optimizeForSpeed = _ref$optimizeForSpeed === void 0 ? false : _ref$optimizeForSpeed,
        _ref$isBrowser = _ref.isBrowser,
        isBrowser = _ref$isBrowser === void 0 ? typeof window !== 'undefined' : _ref$isBrowser;

    this._sheet = styleSheet || new _stylesheet["default"]({
      name: 'styled-jsx',
      optimizeForSpeed: optimizeForSpeed
    });

    this._sheet.inject();

    if (styleSheet && typeof optimizeForSpeed === 'boolean') {
      this._sheet.setOptimizeForSpeed(optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    this._isBrowser = isBrowser;
    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  }

  var _proto = StyleSheetRegistry.prototype;

  _proto.add = function add(props) {
    var _this = this;

    if (undefined === this._optimizeForSpeed) {
      this._optimizeForSpeed = Array.isArray(props.children);

      this._sheet.setOptimizeForSpeed(this._optimizeForSpeed);

      this._optimizeForSpeed = this._sheet.isOptimizeForSpeed();
    }

    if (this._isBrowser && !this._fromServer) {
      this._fromServer = this.selectFromServer();
      this._instancesCounts = Object.keys(this._fromServer).reduce(function (acc, tagName) {
        acc[tagName] = 0;
        return acc;
      }, {});
    }

    var _this$getIdAndRules = this.getIdAndRules(props),
        styleId = _this$getIdAndRules.styleId,
        rules = _this$getIdAndRules.rules; // Deduping: just increase the instances count.


    if (styleId in this._instancesCounts) {
      this._instancesCounts[styleId] += 1;
      return;
    }

    var indices = rules.map(function (rule) {
      return _this._sheet.insertRule(rule);
    }) // Filter out invalid rules
    .filter(function (index) {
      return index !== -1;
    });
    this._indices[styleId] = indices;
    this._instancesCounts[styleId] = 1;
  };

  _proto.remove = function remove(props) {
    var _this2 = this;

    var _this$getIdAndRules2 = this.getIdAndRules(props),
        styleId = _this$getIdAndRules2.styleId;

    invariant(styleId in this._instancesCounts, "styleId: `" + styleId + "` not found");
    this._instancesCounts[styleId] -= 1;

    if (this._instancesCounts[styleId] < 1) {
      var tagFromServer = this._fromServer && this._fromServer[styleId];

      if (tagFromServer) {
        tagFromServer.parentNode.removeChild(tagFromServer);
        delete this._fromServer[styleId];
      } else {
        this._indices[styleId].forEach(function (index) {
          return _this2._sheet.deleteRule(index);
        });

        delete this._indices[styleId];
      }

      delete this._instancesCounts[styleId];
    }
  };

  _proto.update = function update(props, nextProps) {
    this.add(nextProps);
    this.remove(props);
  };

  _proto.flush = function flush() {
    this._sheet.flush();

    this._sheet.inject();

    this._fromServer = undefined;
    this._indices = {};
    this._instancesCounts = {};
    this.computeId = this.createComputeId();
    this.computeSelector = this.createComputeSelector();
  };

  _proto.cssRules = function cssRules() {
    var _this3 = this;

    var fromServer = this._fromServer ? Object.keys(this._fromServer).map(function (styleId) {
      return [styleId, _this3._fromServer[styleId]];
    }) : [];

    var cssRules = this._sheet.cssRules();

    return fromServer.concat(Object.keys(this._indices).map(function (styleId) {
      return [styleId, _this3._indices[styleId].map(function (index) {
        return cssRules[index].cssText;
      }).join(_this3._optimizeForSpeed ? '' : '\n')];
    }) // filter out empty rules
    .filter(function (rule) {
      return Boolean(rule[1]);
    }));
  }
  /**
   * createComputeId
   *
   * Creates a function to compute and memoize a jsx id from a basedId and optionally props.
   */
  ;

  _proto.createComputeId = function createComputeId() {
    var cache = {};
    return function (baseId, props) {
      if (!props) {
        return "jsx-" + baseId;
      }

      var propsToString = String(props);
      var key = baseId + propsToString; // return `jsx-${hashString(`${baseId}-${propsToString}`)}`

      if (!cache[key]) {
        cache[key] = "jsx-" + (0, _stringHash["default"])(baseId + "-" + propsToString);
      }

      return cache[key];
    };
  }
  /**
   * createComputeSelector
   *
   * Creates a function to compute and memoize dynamic selectors.
   */
  ;

  _proto.createComputeSelector = function createComputeSelector(selectoPlaceholderRegexp) {
    if (selectoPlaceholderRegexp === void 0) {
      selectoPlaceholderRegexp = /__jsx-style-dynamic-selector/g;
    }

    var cache = {};
    return function (id, css) {
      // Sanitize SSR-ed CSS.
      // Client side code doesn't need to be sanitized since we use
      // document.createTextNode (dev) and the CSSOM api sheet.insertRule (prod).
      if (!this._isBrowser) {
        css = sanitize(css);
      }

      var idcss = id + css;

      if (!cache[idcss]) {
        cache[idcss] = css.replace(selectoPlaceholderRegexp, id);
      }

      return cache[idcss];
    };
  };

  _proto.getIdAndRules = function getIdAndRules(props) {
    var _this4 = this;

    var css = props.children,
        dynamic = props.dynamic,
        id = props.id;

    if (dynamic) {
      var styleId = this.computeId(id, dynamic);
      return {
        styleId: styleId,
        rules: Array.isArray(css) ? css.map(function (rule) {
          return _this4.computeSelector(styleId, rule);
        }) : [this.computeSelector(styleId, css)]
      };
    }

    return {
      styleId: this.computeId(id),
      rules: Array.isArray(css) ? css : [css]
    };
  }
  /**
   * selectFromServer
   *
   * Collects style tags from the document with id __jsx-XXX
   */
  ;

  _proto.selectFromServer = function selectFromServer() {
    var elements = Array.prototype.slice.call(document.querySelectorAll('[id^="__jsx-"]'));
    return elements.reduce(function (acc, element) {
      var id = element.id.slice(2);
      acc[id] = element;
      return acc;
    }, {});
  };

  return StyleSheetRegistry;
}();

exports["default"] = StyleSheetRegistry;

function invariant(condition, message) {
  if (!condition) {
    throw new Error("StyleSheetRegistry: " + message + ".");
  }
}

/***/ }),

/***/ "./node_modules/styled-jsx/style.js":
/*!******************************************!*\
  !*** ./node_modules/styled-jsx/style.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/style */ "./node_modules/styled-jsx/dist/style.js")


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./pages/exercitiu/[id].js":
/*!*********************************!*\
  !*** ./pages/exercitiu/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Exercitiu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_IndividualExercise_HeaderInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/IndividualExercise/HeaderInfo */ "./components/IndividualExercise/HeaderInfo.js");
/* harmony import */ var _components_IndividualExercise_ExerciseInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/IndividualExercise/ExerciseInfo */ "./components/IndividualExercise/ExerciseInfo.js");
/* harmony import */ var _components_IndividualExercise_SolutionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/IndividualExercise/SolutionArea */ "./components/IndividualExercise/SolutionArea.js");
/* harmony import */ var _components_IndividualExercise_ResultsArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/IndividualExercise/ResultsArea */ "./components/IndividualExercise/ResultsArea.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\pages\\exercitiu\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Exercitiu() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      needsResultsComponent = _useState[0],
      setResultsComponent = _useState[1];

  var toggleResultsComponent = function toggleResultsComponent() {
    return setResultsComponent(!needsResultsComponent);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_IndividualExercise_HeaderInfo__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "ScriereEcran",
    isSolved: true,
    difficulty: 1,
    authorName: "Jane Doe",
    maxExecutionTime: 0.1,
    maxMemoryConsumption: 4,
    source: "Model bacalaureat 2009",
    sentSolutions: 291,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), __jsx(_components_IndividualExercise_ExerciseInfo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    needsHint: true,
    userSolutions: 2,
    officialSolution: true,
    dataInput: {
      toInput: "doua numere naturale a si b",
      toOutput: "suma acestor numere"
    },
    importantData: ["un test", "doi testi", "trei tresti", "4 chestii"],
    inputExample: {
      input: "24 2",
      output: "Test 1234 test test"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Incididunt aute ex amet quis sint elit. Do mollit in Lorem eu proident elit cupidatat aliquip eu irure exercitation. Laborum ex minim nostrud duis cupidatat quis est proident et nulla deserunt sint Lorem. Eu exercitation sunt et incididunt eu nostrud ad ea velit tempor laborum. Mollit pariatur consectetur ad elit. Incididunt aute ex amet quis sint elit. Do mollit in Lorem eu proident elit cupidatat aliquip eu irure exercitation. Laborum ex minim nostrud duis cupidatat quis est proident et nulla deserunt sint Lorem. Eu exercitation sunt et incididunt eu nostrud ad ea velit tempor laborum. Mollit pariatur consectetur ad elit."), needsResultsComponent ?
  /* 
  CODURI:
  * -1 limita de timp
  * -2 limita de memorie
  * -3 alte erori
  */
  __jsx(_components_IndividualExercise_ResultsArea__WEBPACK_IMPORTED_MODULE_4__["default"], {
    toggleResultsComponent: toggleResultsComponent,
    totalPointsGained: 75,
    testResults: [{
      didPass: true,
      timeTaken: 0.11,
      memoryUsed: 0.25,
      failureCode: null
    }, {
      didPass: false,
      timeTaken: 0.11,
      memoryUsed: 0.25,
      failureCode: -1
    }, {
      didPass: true,
      timeTaken: 0.11,
      memoryUsed: 0.25,
      failureCode: null
    }, {
      didPass: false,
      timeTaken: 0.11,
      memoryUsed: 0.25,
      failureCode: -2
    }, {
      didPass: false,
      timeTaken: 0.11,
      memoryUsed: 0.25,
      failureCode: -3
    }],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 17
    }
  }) : __jsx(_components_IndividualExercise_SolutionArea__WEBPACK_IMPORTED_MODULE_3__["default"], {
    toggleResultsComponent: toggleResultsComponent,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 17
    }
  }));
}

/***/ }),

/***/ 5:
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fexercitiu%2F%5Bid%5D&absolutePagePath=C%3A%5CUsers%5Cplesa%5CDesktop%5CProiecte%20Web%5Cinfoplus%5Cpages%5Cexercitiu%5C%5Bid%5D.js&hotRouterUpdates=true ***!
  \*******************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fexercitiu%2F%5Bid%5D&absolutePagePath=C%3A%5CUsers%5Cplesa%5CDesktop%5CProiecte%20Web%5Cinfoplus%5Cpages%5Cexercitiu%5C%5Bid%5D.js&hotRouterUpdates=true! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fexercitiu%2F%5Bid%5D&absolutePagePath=C%3A%5CUsers%5Cplesa%5CDesktop%5CProiecte%20Web%5Cinfoplus%5Cpages%5Cexercitiu%5C%5Bid%5D.js&hotRouterUpdates=true!./");


/***/ }),

/***/ "dll-reference dll_c2e10d183b950a67d9e7":
/*!*******************************************!*\
  !*** external "dll_c2e10d183b950a67d9e7" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_c2e10d183b950a67d9e7;

/***/ })

},[[5,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=[id].js.map