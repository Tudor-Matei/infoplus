webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/utils/SubmitButton.js":
/*!******************************************!*\
  !*** ./components/utils/SubmitButton.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubmitButton; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/_app */ "./pages/_app.js");
/* harmony import */ var _Home_Main__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Home/Main */ "./components/Home/Main.js");
/* harmony import */ var _utils_checkFieldsValidity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/checkFieldsValidity */ "./utils/checkFieldsValidity.js");
var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\utils\\SubmitButton.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




function SubmitButton(_ref) {
  var userData = _ref.userData,
      showErrorMessage = _ref.showErrorMessage,
      buttonTitle = _ref.buttonTitle,
      type = _ref.type;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isDisabled = _useState[0],
      setDisabled = _useState[1];

  var showRegisterModalHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_Home_Main__WEBPACK_IMPORTED_MODULE_3__["RegisterModalHandler"]);
  var modifyAlert = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_2__["ShowAlertContext"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("button", {
    type: "submit",
    disabled: isDisabled,
    onClick: function onClick(e) {
      return submitHandler({
        e: e,
        userData: userData,
        showErrorMessage: showErrorMessage,
        setDisabled: setDisabled,
        modalHandler: showRegisterModalHandler,
        modifyAlert: modifyAlert,
        fetchEndpoint: "api/register"
      });
    },
    className: "jsx-2585271453" + " " + "button--primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, buttonTitle), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2585271453",
    __self: this
  }, ".button--primary.jsx-2585271453{background-color:var(--accent-secondary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXHV0aWxzXFxTdWJtaXRCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0J3QixBQUc4RCx5Q0FDN0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcdXRpbHNcXFN1Ym1pdEJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNob3dBbGVydENvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvX2FwcFwiO1xyXG5pbXBvcnQgeyBSZWdpc3Rlck1vZGFsSGFuZGxlciB9IGZyb20gXCIuLi9Ib21lL01haW5cIjtcclxuaW1wb3J0IGNoZWNrRmllbGRzVmFsaWRpdHkgZnJvbSBcIi4uLy4uL3V0aWxzL2NoZWNrRmllbGRzVmFsaWRpdHlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1Ym1pdEJ1dHRvbih7IHVzZXJEYXRhLCBzaG93RXJyb3JNZXNzYWdlLCBidXR0b25UaXRsZSwgdHlwZSB9KSB7XHJcbiAgICBjb25zdCBbaXNEaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHNob3dSZWdpc3Rlck1vZGFsSGFuZGxlciA9IHVzZUNvbnRleHQoUmVnaXN0ZXJNb2RhbEhhbmRsZXIpO1xyXG4gICAgY29uc3QgbW9kaWZ5QWxlcnQgPSB1c2VDb250ZXh0KFNob3dBbGVydENvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNEaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEhhbmRsZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGlzYWJsZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSGFuZGxlcjogc2hvd1JlZ2lzdGVyTW9kYWxIYW5kbGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZnlBbGVydCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmV0Y2hFbmRwb2ludDogXCJhcGkvcmVnaXN0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnV0dG9uLS1wcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2J1dHRvblRpdGxlfVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAgICAgLmJ1dHRvbi0tcHJpbWFyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXNlY29uZGFyeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoe1xyXG4gICAgZSxcclxuICAgIHVzZXJEYXRhLFxyXG4gICAgc2hvd0Vycm9yTWVzc2FnZSxcclxuICAgIHNldERpc2FibGVkLFxyXG4gICAgbW9kYWxIYW5kbGVyLFxyXG4gICAgbW9kaWZ5QWxlcnQsXHJcbiAgICBmZXRjaEVuZHBvaW50LFxyXG59KSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzZXREaXNhYmxlZCh0cnVlKTtcclxuXHJcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBjaGVja0ZpZWxkc1ZhbGlkaXR5KHtcclxuICAgICAgICBmaWVsZHM6IHVzZXJEYXRhLFxyXG4gICAgICAgIG1pbmltdW1MZW5ndGhGb3JFYWNoRmllbGQ6IHtcclxuICAgICAgICAgICAgbmFtZTogMyxcclxuICAgICAgICAgICAgc3VybmFtZTogMyxcclxuICAgICAgICAgICAgdXNlcm5hbWU6IDUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiA4LFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGFzRW1haWw6IHRydWUsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoZXJyb3JNZXNzYWdlICE9PSBmYWxzZSkge1xyXG4gICAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcclxuICAgICAgICByZXR1cm4gc2hvd0Vycm9yTWVzc2FnZShlcnJvck1lc3NhZ2UpO1xyXG4gICAgfVxyXG5cclxuICAgIGZldGNoKGZldGNoRW5kcG9pbnQsIHtcclxuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXJEYXRhKSxcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4oKHIpID0+IHIuanNvbigpKVxyXG4gICAgICAgIC50aGVuKCh7IG9rLCBlcnJvciA9IG51bGwgfSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW9rKVxyXG4gICAgICAgICAgICAgICAgbW9kaWZ5QWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogIWVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQSBhcMSDcnV0IG8gZXJvYXJlIGludGVybsSDLCB2xIMgcnVnYW0gc8SDIG5lIHNjdXphyJtpLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgbW9kaWZ5QWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogXCJPcGVyYcibaXVuZWEgYSBmb3N0IGVmZWN0dWF0xIMgY3Ugc3VjY2VzLlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIG1vZGFsSGFuZGxlcigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgc2V0RGlzYWJsZWQoZmFsc2UpO1xyXG4gICAgICAgICAgICBzaG93RXJyb3JNZXNzYWdlKFwiQSBhcGFydXQgbyBlcm9hcmUgaW50ZXJuYSwgdmEgcm9nIHNhIG5lIHNjdXphdGkuXCIpO1xyXG4gICAgICAgIH0pO1xyXG59XHJcbiJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\utils\\\\SubmitButton.js */"));
}

function submitHandler(_ref2) {
  var e = _ref2.e,
      userData = _ref2.userData,
      showErrorMessage = _ref2.showErrorMessage,
      setDisabled = _ref2.setDisabled,
      modalHandler = _ref2.modalHandler,
      modifyAlert = _ref2.modifyAlert,
      fetchEndpoint = _ref2.fetchEndpoint;
  e.preventDefault();
  setDisabled(true);
  var errorMessage = Object(_utils_checkFieldsValidity__WEBPACK_IMPORTED_MODULE_4__["default"])({
    fields: userData,
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

  fetch(fetchEndpoint, {
    method: "POST",
    body: JSON.stringify(userData)
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
        children: "Operațiunea a fost efectuată cu succes."
      }
    });
    modalHandler();
  })["catch"](function (error) {
    console.error(error);
    setDisabled(false);
    showErrorMessage("A aparut o eroare interna, va rog sa ne scuzati.");
  });
}

/***/ })

})
//# sourceMappingURL=index.js.f530a23e28db4f272fa1.hot-update.js.map