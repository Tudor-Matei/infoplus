module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/IndividualExercise/ExerciseInfo.js":
/*!*******************************************************!*\
  !*** ./components/IndividualExercise/ExerciseInfo.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ExerciseInfo; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\IndividualExercise\\ExerciseInfo.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ExerciseInfo({
  needsHint,
  userSolutions,
  officialSolution,
  dataInput = {},
  importantData = [],
  inputExample = {},
  children
}) {
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
  }, importantData.map((datum, i) => __jsx("li", {
    key: `important-datum_${i}`,
    className: "jsx-4286951087",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 25
    }
  }, datum))), __jsx(HeaderSection, {
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

function HeaderSection({
  title,
  children = ""
}) {
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

function HeaderTitleExercise({
  needsHint,
  userSolutions,
  officialSolution
}) {
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_CheckmarkSolved__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/CheckmarkSolved */ "./components/utils/CheckmarkSolved.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_difficultyText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/difficultyText */ "./components/utils/difficultyText.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\IndividualExercise\\HeaderInfo.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function HeaderInfo({
  title,
  isSolved = false,
  difficulty,
  authorName,
  maxExecutionTime,
  maxMemoryConsumption,
  source,
  sentSolutions
}) {
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
  }, `.header-info-exercise__difficulty.__jsx-style-dynamic-selector{background-color:var(--difficulty-${difficulty});}hr.__jsx-style-dynamic-selector{border-color:var(--difficulty-${difficulty});}
/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXEluZGl2aWR1YWxFeGVyY2lzZVxcSGVhZGVySW5mby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwRHdCLEFBSXFGLEFBS0osNERBQ2hFLElBTEEiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcSW5kaXZpZHVhbEV4ZXJjaXNlXFxIZWFkZXJJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoZWNrbWFya1NvbHZlZCBmcm9tIFwiLi4vdXRpbHMvQ2hlY2ttYXJrU29sdmVkXCI7XHJcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcclxuaW1wb3J0IGRpZmZpY3VsdHlUZXh0IGZyb20gXCIuLi91dGlscy9kaWZmaWN1bHR5VGV4dFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVySW5mbyh7XHJcbiAgICB0aXRsZSxcclxuICAgIGlzU29sdmVkID0gZmFsc2UsXHJcbiAgICBkaWZmaWN1bHR5LFxyXG4gICAgYXV0aG9yTmFtZSxcclxuICAgIG1heEV4ZWN1dGlvblRpbWUsXHJcbiAgICBtYXhNZW1vcnlDb25zdW1wdGlvbixcclxuICAgIHNvdXJjZSxcclxuICAgIHNlbnRTb2x1dGlvbnMsXHJcbn0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5mby1leGVyY2lzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbmZvLWV4ZXJjaXNlX19tYWluLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoZWFkZXItaW5mby1leGVyY2lzZV9fdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAge2lzU29sdmVkICYmIDxDaGVja21hcmtTb2x2ZWQgLz59XHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImhlYWRlci1pbmZvLWV4ZXJjaXNlX19kaWZmaWN1bHR5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2RpZmZpY3VsdHlUZXh0KGRpZmZpY3VsdHkpfVxyXG4gICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8aHIgLz5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWluZm8tZXhlcmNpc2VfX3NlY29uZGFyeS1kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbmZvLWV4ZXJjaXNlX19zZWNvbmRhcnktZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5mby1leGVyY2lzZV9fcHJvZmlsZS1waWN0dXJlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFBvc3RhdMSDIGRlOntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidW5kZXJsaW5lZFwiPnthdXRob3JOYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyLWluZm8tZXhlcmNpc2VfX3NlY29uZGFyeS1kZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJjbG9ja1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+VGltcCBtYXhpbSBkZSBleGVjdcibaWU6IHttYXhFeGVjdXRpb25UaW1lfSBzZWN1bmRlPC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbmZvLWV4ZXJjaXNlX19zZWNvbmRhcnktZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpY29uPVwibWVtb3J5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGVyLWluZm8tZXhlcmNpc2VfX2ljb24tLW5lZWRzLW1lZGlhLXF1ZXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPk1lbW9yaWUgbWF4aW3Egzoge21heE1lbW9yeUNvbnN1bXB0aW9ufSBNQjwvcD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItaW5mby1leGVyY2lzZV9fc2Vjb25kYXJ5LWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImNvZGUtYnJhbmNoXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cD5TdXJzxIM6IHtzb3VyY2V9PC9wPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlci1pbmZvLWV4ZXJjaXNlX19zZWNvbmRhcnktZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidXBsb2FkXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoZWFkZXItaW5mby1leGVyY2lzZV9fc2Vjb25kYXJ5LWRldGFpbHMtLW5vLWJvcmRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTb2x1yJtpaSB0cmltaXNlOiB7c2VudFNvbHV0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXItaW5mby1leGVyY2lzZV9fZGlmZmljdWx0eSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogcHJldHRpZXItaWdub3JlICovXHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlmZmljdWx0eS0ke2RpZmZpY3VsdHl9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogcHJldHRpZXItaWdub3JlICovXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1kaWZmaWN1bHR5LSR7ZGlmZmljdWx0eX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5oZWFkZXItaW5mby1leGVyY2lzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDE0MHB4IGF1dG87XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLXRleHQtcHJpbWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1pbmZvLWV4ZXJjaXNlX19kaWZmaWN1bHR5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1idXR0b24pO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBociB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1pbmZvLWV4ZXJjaXNlX19tYWluLWRldGFpbHMge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWluZm8tZXhlcmNpc2VfX3RpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAtOC41cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1pbmZvLWV4ZXJjaXNlX19wcm9maWxlLXBpY3R1cmUge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLXRlcnRpYXJ5KTtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWluZm8tZXhlcmNpc2VfX3NlY29uZGFyeS1kZXRhaWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWluZm8tZXhlcmNpc2VfX3NlY29uZGFyeS1kZXRhaWw6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAuaGVhZGVyLWluZm8tZXhlcmNpc2VfX3NlY29uZGFyeS1kZXRhaWxzIHAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXItaW5mby1leGVyY2lzZV9fc2Vjb25kYXJ5LWRldGFpbHMgcDo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGV4dC10ZXJ0aWFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgOmdsb2JhbCguaGVhZGVyLWluZm8tZXhlcmNpc2VfX3NlY29uZGFyeS1kZXRhaWxzIHN2Zykge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC5oZWFkZXItaW5mby1leGVyY2lzZV9fc2Vjb25kYXJ5LWRldGFpbHMtLW5vLWJvcmRlcjo6YWZ0ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI1cHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAuaGVhZGVyLWluZm8tZXhlcmNpc2VfX21haW4tZGV0YWlscyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDM2M3B4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgOmdsb2JhbChzdmcuaGVhZGVyLWluZm8tZXhlcmNpc2VfX2ljb24tLW5lZWRzLW1lZGlhLXF1ZXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG4iXX0= */
/*@ sourceURL=C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\IndividualExercise\\HeaderInfo.js */`), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_CheckmarkSolved__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/CheckmarkSolved */ "./components/utils/CheckmarkSolved.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_ErrorCircle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/ErrorCircle */ "./components/utils/ErrorCircle.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\IndividualExercise\\ResultsArea.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function Results({
  totalPointsGained,
  testResults = [],
  toggleResultsComponent
}) {
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
  }, testResults.map(({
    didPass,
    timeTaken,
    memoryUsed,
    failureCode
  }, i) => __jsx("div", {
    style: {
      animationDelay: 200 * (i + 1) + "ms"
    },
    key: `results__test-container_${i + 1}`,
    className: "jsx-2552219495" + " " + `results__test ${!didPass ? "results__test--failed" : "results__test--passed"}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 25
    }
  }, __jsx("h3", {
    key: `results__test-number_${i + 1}`,
    className: "jsx-2552219495",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 29
    }
  }, "Testul ", i + 1), didPass ? __jsx("div", {
    className: "jsx-2552219495" + " " + "results__details",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 33
    }
  }, __jsx("p", {
    className: "jsx-2552219495" + " " + "results__seconds--with-border",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "clock",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 41
    }
  }), timeTaken, " secunde"), __jsx("p", {
    className: "jsx-2552219495",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 37
    }
  }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    icon: "memory",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 41
    }
  }), memoryUsed, " MB folosi\u021Bi"), __jsx(_utils_CheckmarkSolved__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: `results__solved-test_${i + 1}`,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 37
    }
  })) : returnElementForFailureCode(failureCode))), __jsx(ReturnToSolutionButton, {
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

function ReturnToSolutionButton({
  onClick
}) {
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\IndividualExercise\\SolutionArea.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function SolutionArea({
  toggleResultsComponent
}) {
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

function SendSolutionButton({
  onClick
}) {
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "@fortawesome/react-fontawesome");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__);
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

/***/ "./pages/exercitiu/[id].js":
/*!*********************************!*\
  !*** ./pages/exercitiu/[id].js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Exercitiu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_IndividualExercise_HeaderInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/IndividualExercise/HeaderInfo */ "./components/IndividualExercise/HeaderInfo.js");
/* harmony import */ var _components_IndividualExercise_ExerciseInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/IndividualExercise/ExerciseInfo */ "./components/IndividualExercise/ExerciseInfo.js");
/* harmony import */ var _components_IndividualExercise_SolutionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/IndividualExercise/SolutionArea */ "./components/IndividualExercise/SolutionArea.js");
/* harmony import */ var _components_IndividualExercise_ResultsArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/IndividualExercise/ResultsArea */ "./components/IndividualExercise/ResultsArea.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\pages\\exercitiu\\[id].js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





function Exercitiu() {
  const {
    0: needsResultsComponent,
    1: setResultsComponent
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);

  const toggleResultsComponent = () => setResultsComponent(!needsResultsComponent);

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

/***/ 7:
/*!***************************************!*\
  !*** multi ./pages/exercitiu/[id].js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\plesa\Desktop\Proiecte Web\infoplus\pages\exercitiu\[id].js */"./pages/exercitiu/[id].js");


/***/ }),

/***/ "@fortawesome/react-fontawesome":
/*!*************************************************!*\
  !*** external "@fortawesome/react-fontawesome" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@fortawesome/react-fontawesome");

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

/***/ })

/******/ });
//# sourceMappingURL=[id].js.map