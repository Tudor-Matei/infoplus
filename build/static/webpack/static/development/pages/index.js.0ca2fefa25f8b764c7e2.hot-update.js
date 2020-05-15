webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/home/Main.js":
false,

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
      lineNumber: 15,
      columnNumber: 13
    }
  }, buttonTitle), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2585271453",
    __self: this
  }, ".button--primary.jsx-2585271453{background-color:var(--accent-secondary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXHV0aWxzXFxTdWJtaXRCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0N3QixBQUc4RCx5Q0FDN0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcdXRpbHNcXFN1Ym1pdEJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNob3dBbGVydENvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvX2FwcFwiO1xyXG5pbXBvcnQgeyBSZWdpc3Rlck1vZGFsSGFuZGxlciB9IGZyb20gXCIuLi9Ib21lL01haW5cIjtcclxuaW1wb3J0IHsgTG9naW5Nb2RhbEhhbmRsZXIgfSBmcm9tIFwiLi4vSG9tZS9NYWluXCI7XHJcbmltcG9ydCBjaGVja0ZpZWxkc1ZhbGlkaXR5IGZyb20gXCIuLi8uLi91dGlscy9jaGVja0ZpZWxkc1ZhbGlkaXR5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJtaXRCdXR0b24oeyB1c2VyRGF0YSwgc2hvd0Vycm9yTWVzc2FnZSwgYnV0dG9uVGl0bGUsIHR5cGUgfSkge1xyXG4gICAgY29uc3QgW2lzRGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBzaG93UmVnaXN0ZXJNb2RhbEhhbmRsZXIgPSB1c2VDb250ZXh0KFJlZ2lzdGVyTW9kYWxIYW5kbGVyKTtcclxuICAgIGNvbnN0IG1vZGlmeUFsZXJ0ID0gdXNlQ29udGV4dChTaG93QWxlcnRDb250ZXh0KTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2lzRGlzYWJsZWR9XHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT5cclxuICAgICAgICAgICAgICAgICAgICBzdWJtaXRIYW5kbGVyKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlckRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERpc2FibGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbEhhbmRsZXI6IHNob3dSZWdpc3Rlck1vZGFsSGFuZGxlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5QWxlcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoRW5kcG9pbnQ6IFwiYXBpL3JlZ2lzdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ1dHRvbi0tcHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtidXR0b25UaXRsZX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgICAgIC5idXR0b24tLXByaW1hcnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1zZWNvbmRhcnkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgfTwvc3R5bGU+XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzdWJtaXRIYW5kbGVyKHtcclxuICAgIGUsXHJcbiAgICB1c2VyRGF0YSxcclxuICAgIHNob3dFcnJvck1lc3NhZ2UsXHJcbiAgICBzZXREaXNhYmxlZCxcclxuICAgIG1vZGFsSGFuZGxlcixcclxuICAgIG1vZGlmeUFsZXJ0LFxyXG4gICAgZmV0Y2hFbmRwb2ludCxcclxufSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RGlzYWJsZWQodHJ1ZSk7XHJcblxyXG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gY2hlY2tGaWVsZHNWYWxpZGl0eSh7XHJcbiAgICAgICAgZmllbGRzOiB1c2VyRGF0YSxcclxuICAgICAgICBtaW5pbXVtTGVuZ3RoRm9yRWFjaEZpZWxkOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IDMsXHJcbiAgICAgICAgICAgIHN1cm5hbWU6IDMsXHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiA1LFxyXG4gICAgICAgICAgICBwYXNzd29yZDogOCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhc0VtYWlsOiB0cnVlLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yTWVzc2FnZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICBzZXREaXNhYmxlZChmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIHNob3dFcnJvck1lc3NhZ2UoZXJyb3JNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaChmZXRjaEVuZHBvaW50LCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyRGF0YSksXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKChyKSA9PiByLmpzb24oKSlcclxuICAgICAgICAudGhlbigoeyBvaywgZXJyb3IgPSBudWxsIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFvaylcclxuICAgICAgICAgICAgICAgIG1vZGlmeUFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICBpc1Zpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46ICFlcnJvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIkEgYXDEg3J1dCBvIGVyb2FyZSBpbnRlcm7EgywgdsSDIHJ1Z2FtIHPEgyBuZSBzY3V6YcibaS5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBlcnJvcixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIG1vZGlmeUFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICBpc1Zpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwiT3BlcmHIm2l1bmVhIGEgZm9zdCBlZmVjdHVhdMSDIGN1IHN1Y2Nlcy5cIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBtb2RhbEhhbmRsZXIoKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgc2hvd0Vycm9yTWVzc2FnZShcIkEgYXBhcnV0IG8gZXJvYXJlIGludGVybmEsIHZhIHJvZyBzYSBuZSBzY3V6YXRpLlwiKTtcclxuICAgICAgICB9KTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\utils\\\\SubmitButton.js */"));
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
//# sourceMappingURL=index.js.0ca2fefa25f8b764c7e2.hot-update.js.map