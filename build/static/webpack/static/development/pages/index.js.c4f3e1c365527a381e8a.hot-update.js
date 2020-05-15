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

  var showModalHandler = Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(type === "register" ? _Home_Main__WEBPACK_IMPORTED_MODULE_3__["RegisterModalHandler"] : _Home_Main__WEBPACK_IMPORTED_MODULE_3__["LoginModalHandler"]);
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
        modalHandler: showModalHandler,
        modifyAlert: modifyAlert,
        fetchEndpoint: "api/".concat(type)
      });
    },
    className: "jsx-3491458380" + " " + "button--primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, buttonTitle), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3491458380",
    __self: this
  }, ".button--primary.jsx-3491458380{background-color:var(--accent-secondary);}.modal--login .button-primary{background-color:var(--accent-primary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXHV0aWxzXFxTdWJtaXRCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0N3QixBQUc4RCxBQUlGLHVDQUMzQyxFQUpBIiwiZmlsZSI6IkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXHV0aWxzXFxTdWJtaXRCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTaG93QWxlcnRDb250ZXh0IH0gZnJvbSBcIi4uLy4uL3BhZ2VzL19hcHBcIjtcclxuaW1wb3J0IHsgUmVnaXN0ZXJNb2RhbEhhbmRsZXIgfSBmcm9tIFwiLi4vSG9tZS9NYWluXCI7XHJcbmltcG9ydCB7IExvZ2luTW9kYWxIYW5kbGVyIH0gZnJvbSBcIi4uL0hvbWUvTWFpblwiO1xyXG5pbXBvcnQgY2hlY2tGaWVsZHNWYWxpZGl0eSBmcm9tIFwiLi4vLi4vdXRpbHMvY2hlY2tGaWVsZHNWYWxpZGl0eVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VibWl0QnV0dG9uKHsgdXNlckRhdGEsIHNob3dFcnJvck1lc3NhZ2UsIGJ1dHRvblRpdGxlLCB0eXBlIH0pIHtcclxuICAgIGNvbnN0IFtpc0Rpc2FibGVkLCBzZXREaXNhYmxlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd01vZGFsSGFuZGxlciA9IHVzZUNvbnRleHQoXHJcbiAgICAgICAgdHlwZSA9PT0gXCJyZWdpc3RlclwiID8gUmVnaXN0ZXJNb2RhbEhhbmRsZXIgOiBMb2dpbk1vZGFsSGFuZGxlclxyXG4gICAgKTtcclxuICAgIGNvbnN0IG1vZGlmeUFsZXJ0ID0gdXNlQ29udGV4dChTaG93QWxlcnRDb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRIYW5kbGVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERpc2FibGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbEhhbmRsZXI6IHNob3dNb2RhbEhhbmRsZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUFsZXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaEVuZHBvaW50OiBgYXBpLyR7dHlwZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tLXByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YnV0dG9uVGl0bGV9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuYnV0dG9uLS1wcmltYXJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICA6Z2xvYmFsKC5tb2RhbC0tbG9naW4gLmJ1dHRvbi1wcmltYXJ5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LXByaW1hcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRIYW5kbGVyKHtcclxuICAgIGUsXHJcbiAgICB1c2VyRGF0YSxcclxuICAgIHNob3dFcnJvck1lc3NhZ2UsXHJcbiAgICBzZXREaXNhYmxlZCxcclxuICAgIG1vZGFsSGFuZGxlcixcclxuICAgIG1vZGlmeUFsZXJ0LFxyXG4gICAgZmV0Y2hFbmRwb2ludCxcclxufSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RGlzYWJsZWQodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gY2hlY2tGaWVsZHNWYWxpZGl0eSh7XHJcbiAgICAgICAgZmllbGRzOiB1c2VyRGF0YSxcclxuICAgICAgICBtaW5pbXVtTGVuZ3RoRm9yRWFjaEZpZWxkOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IDMsXHJcbiAgICAgICAgICAgIHN1cm5hbWU6IDMsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiA1LFxyXG4gICAgICAgICAgICBwYXNzd29yZDogOCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhc0VtYWlsOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yTWVzc2FnZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICBzZXREaXNhYmxlZChmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIHNob3dFcnJvck1lc3NhZ2UoZXJyb3JNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaChmZXRjaEVuZHBvaW50LCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKChyKSA9PiByLmpzb24oKSlcclxuICAgICAgICAudGhlbigoeyBvaywgZXJyb3IgPSBudWxsIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFvaylcclxuICAgICAgICAgICAgICAgIG1vZGlmeUFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICBpc1Zpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46ICFlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkEgYXDEg3J1dCBvIGVyb2FyZSBpbnRlcm7EgywgdsSDIHJ1Z2FtIHPEgyBuZSBzY3V6YcibaS5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIG1vZGlmeUFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICBpc1Zpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwiT3BlcmHIm2l1bmVhIGEgZm9zdCBlZmVjdHVhdMSDIGN1IHN1Y2Nlcy5cIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBtb2RhbEhhbmRsZXIoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgc2hvd0Vycm9yTWVzc2FnZShcIkEgYXBhcnV0IG8gZXJvYXJlIGludGVybmEsIHZhIHJvZyBzYSBuZSBzY3V6YXRpLlwiKTtcclxuICAgICAgICB9KTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\utils\\\\SubmitButton.js */"));
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
//# sourceMappingURL=index.js.c4f3e1c365527a381e8a.hot-update.js.map