webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/utils/InputAreas.js":
/*!****************************************!*\
  !*** ./components/utils/InputAreas.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InputAreas; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_InputArea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/InputArea */ "./components/utils/InputArea.js");

var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\utils\\InputAreas.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function InputAreas(_ref) {
  var updateDetails = _ref.updateDetails,
      inputAreaData = _ref.inputAreaData;
  return (inputAreaData.length + 1) % 2 !== 0 ? InputAreasOddArrayLength({
    updateDetails: updateDetails,
    inputAreaData: inputAreaData
  }) : InputAreasEvenArrayLength({
    updateDetails: updateDetails,
    inputAreaData: inputAreaData
  });
}

function InputAreasOddArrayLength(_ref2) {
  var _this = this;

  var updateDetails = _ref2.updateDetails,
      inputAreaData = _ref2.inputAreaData;
  return inputAreaData.map(function (props, i) {
    return i % 2 === 0 && __jsx("div", {
      key: "input-panel-group__".concat(i, "-fields"),
      className: "modal__input-panel-group",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, __jsx("div", {
      key: "input-panel__".concat(i, "-fields"),
      className: "modal__input-panel ".concat(i + 1 === inputAreaData.length && "modal__input-panel--last"),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      key: "input__".concat(i, "-fields"),
      eventHandler: function eventHandler(e) {
        return updateDetails(e, props.fieldName);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 25
      }
    }))), i + 1 !== inputAreaData.length && __jsx("div", {
      key: "input-panel__".concat(i + 1, "-fields"),
      className: "modal__input-panel",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 25
      }
    }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, inputAreaData[i + 1], {
      key: "input__".concat(i + 1, "-fields"),
      eventHandler: function eventHandler(e) {
        return updateDetails(e, inputAreaData[i + 1].fieldName);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 29
      }
    }))));
  });
}

function InputAreasEvenArrayLength(_ref3) {
  var _this2 = this;

  var updateDetails = _ref3.updateDetails,
      inputAreaData = _ref3.inputAreaData;
  return inputAreaData.map(function (props, i) {
    return i % 2 === 0 && __jsx("div", {
      key: "input-panel-group__".concat(i, "-fields"),
      className: "modal__input-panel-group",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }
    }, __jsx("div", {
      key: "input-panel__".concat(i, "-fields"),
      className: "modal__input-panel",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 21
      }
    }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      key: "input__".concat(i, "-fields"),
      eventHandler: function eventHandler(e) {
        return updateDetails(e, props.fieldName);
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 25
      }
    }))), __jsx("div", {
      key: "input-panel__".concat(i + 1, "-fields"),
      className: "modal__input-panel",
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 21
      }
    }, __jsx(_utils_InputArea__WEBPACK_IMPORTED_MODULE_2__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: "input__".concat(i + 1, "-fields")
    }, inputAreaData[i + 1], {
      eventHandler: function eventHandler(e) {
        return updateDetails(e, inputAreaData[i + 1].fieldName);
      },
      __self: _this2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 25
      }
    }))));
  });
}

/***/ })

})
//# sourceMappingURL=index.js.57c61e3cb7763ba0589d.hot-update.js.map