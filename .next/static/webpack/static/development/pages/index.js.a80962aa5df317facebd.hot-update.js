webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/DropdownMenu.js":
/*!************************************!*\
  !*** ./components/DropdownMenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DropdownMenu; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
var _jsxFileName = "C:\\Users\\Tudor\\Desktop\\Proiecte Web\\infoplus\\components\\DropdownMenu.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function DropdownMenu(_ref) {
  var isDropdownToggled = _ref.isDropdownToggled;
  return __jsx("div", {
    className: "dropdown-menu-header ".concat(isDropdownToggled ? "dropdown-menu-header--active " : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(DropdownMenuAccordion, {
    title: "Exercitii",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, ["Clasa IX", "Clasa X", "Clasa XI"]), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), __jsx(DropdownMenuAccordion, {
    title: "Resurse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, ["Clasa IX", "Clasa X", "Clasa XI"]), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Tema Intunecata"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Mod proiector"), __jsx("hr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Detalii cont")));
}

function DropdownMenuAccordion(_ref2) {
  var title = _ref2.title,
      children = _ref2.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isToggled = _useState[0],
      toggle = _useState[1];

  var toggleDropdown = function toggleDropdown() {
    return toggle(!isToggled);
  };

  return __jsx("div", {
    className: "dropdown-menu-header__option-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("li", {
    onClick: toggleDropdown,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, title, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_1__["FontAwesomeIcon"], {
    icon: "angle-down",
    color: "2A2A2A",
    className: "dropdown-menu-header__icon ".concat(isToggled ? "icon--active" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx("div", {
    className: "dropdown-menu-header__content ".concat(isToggled ? "content--active" : ""),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, children.map(function (child, i) {
    return __jsx("li", {
      key: "child_".concat(i),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, child);
  }))));
}

/***/ })

})
//# sourceMappingURL=index.js.a80962aa5df317facebd.hot-update.js.map