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
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/_app */ "./pages/_app.js");
/* harmony import */ var _Home_Main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Home/Main */ "./components/Home/Main.js");
/* harmony import */ var _utils_checkFieldsValidity__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/checkFieldsValidity */ "./utils/checkFieldsValidity.js");

var _jsxFileName = "C:\\Users\\plesa\\Desktop\\Proiecte Web\\infoplus\\components\\utils\\SubmitButton.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function SubmitButton(_ref) {
  var userDetails = _ref.userDetails,
      fieldOptions = _ref.fieldOptions,
      showErrorMessage = _ref.showErrorMessage,
      buttonTitle = _ref.buttonTitle,
      type = _ref.type;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      isDisabled = _useState[0],
      setDisabled = _useState[1];

  var showModalHandler = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(type === "register" ? _Home_Main__WEBPACK_IMPORTED_MODULE_4__["RegisterModalHandler"] : _Home_Main__WEBPACK_IMPORTED_MODULE_4__["LoginModalHandler"]);
  var modifyAlert = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_pages_app__WEBPACK_IMPORTED_MODULE_3__["ShowAlertContext"]);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx("button", {
    type: "submit",
    disabled: isDisabled,
    onClick: function onClick(e) {
      return submitHandler({
        e: e,
        userDetails: userDetails,
        fieldOptions: fieldOptions,
        showErrorMessage: showErrorMessage,
        setDisabled: setDisabled,
        modalHandler: showModalHandler,
        modifyAlert: modifyAlert,
        fetchEndpoint: "api/".concat(type)
      });
    },
    className: "jsx-2585271453" + " " + "button--primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, buttonTitle), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2585271453",
    __self: this
  }, ".button--primary.jsx-2585271453{background-color:var(--accent-secondary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXHV0aWxzXFxTdWJtaXRCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUN3QixBQUc4RCx5Q0FDN0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcdXRpbHNcXFN1Ym1pdEJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNob3dBbGVydENvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvX2FwcFwiO1xyXG5pbXBvcnQgeyBSZWdpc3Rlck1vZGFsSGFuZGxlciB9IGZyb20gXCIuLi9Ib21lL01haW5cIjtcclxuaW1wb3J0IHsgTG9naW5Nb2RhbEhhbmRsZXIgfSBmcm9tIFwiLi4vSG9tZS9NYWluXCI7XHJcbmltcG9ydCBjaGVja0ZpZWxkc1ZhbGlkaXR5IGZyb20gXCIuLi8uLi91dGlscy9jaGVja0ZpZWxkc1ZhbGlkaXR5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJtaXRCdXR0b24oe1xyXG4gICAgdXNlckRldGFpbHMsXHJcbiAgICBmaWVsZE9wdGlvbnMsXHJcbiAgICBzaG93RXJyb3JNZXNzYWdlLFxyXG4gICAgYnV0dG9uVGl0bGUsXHJcbiAgICB0eXBlLFxyXG59KSB7XHJcbiAgICBjb25zdCBbaXNEaXNhYmxlZCwgc2V0RGlzYWJsZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICAgIGNvbnN0IHNob3dNb2RhbEhhbmRsZXIgPSB1c2VDb250ZXh0KFxyXG4gICAgICAgIHR5cGUgPT09IFwicmVnaXN0ZXJcIiA/IFJlZ2lzdGVyTW9kYWxIYW5kbGVyIDogTG9naW5Nb2RhbEhhbmRsZXJcclxuICAgICk7XHJcbiAgICBjb25zdCBtb2RpZnlBbGVydCA9IHVzZUNvbnRleHQoU2hvd0FsZXJ0Q29udGV4dCk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtpc0Rpc2FibGVkfVxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+XHJcbiAgICAgICAgICAgICAgICAgICAgc3VibWl0SGFuZGxlcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJEZXRhaWxzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZE9wdGlvbnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERpc2FibGVkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RhbEhhbmRsZXI6IHNob3dNb2RhbEhhbmRsZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGlmeUFsZXJ0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmZXRjaEVuZHBvaW50OiBgYXBpLyR7dHlwZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tLXByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YnV0dG9uVGl0bGV9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuYnV0dG9uLS1wcmltYXJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0SGFuZGxlcih7XHJcbiAgICBlLFxyXG4gICAgdXNlckRldGFpbHMsXHJcbiAgICBmaWVsZE9wdGlvbnMsXHJcbiAgICBzaG93RXJyb3JNZXNzYWdlLFxyXG4gICAgc2V0RGlzYWJsZWQsXHJcbiAgICBtb2RhbEhhbmRsZXIsXHJcbiAgICBtb2RpZnlBbGVydCxcclxuICAgIGZldGNoRW5kcG9pbnQsXHJcbn0pIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldERpc2FibGVkKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGNoZWNrRmllbGRzVmFsaWRpdHkoe1xyXG4gICAgICAgIGZpZWxkczogdXNlckRldGFpbHMsXHJcbiAgICAgICAgLi4uZmllbGRPcHRpb25zLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGVycm9yTWVzc2FnZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICBzZXREaXNhYmxlZChmYWxzZSk7XHJcbiAgICAgICAgcmV0dXJuIHNob3dFcnJvck1lc3NhZ2UoZXJyb3JNZXNzYWdlKTtcclxuICAgIH1cclxuXHJcbiAgICBmZXRjaChmZXRjaEVuZHBvaW50LCB7XHJcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyRGV0YWlscyksXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKChyKSA9PiByLmpzb24oKSlcclxuICAgICAgICAudGhlbigoeyBvaywgZXJyb3IgPSBudWxsIH0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFvaykge1xyXG4gICAgICAgICAgICAgICAgbW9kaWZ5QWxlcnQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogIWVycm9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiQSBhcMSDcnV0IG8gZXJvYXJlIGludGVybsSDLCB2xIMgcnVnYW0gc8SDIG5lIHNjdXphyJtpLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1vZGlmeUFsZXJ0KHtcclxuICAgICAgICAgICAgICAgICAgICBpc1Zpc2libGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFwiT3BlcmHIm2l1bmVhIGEgZm9zdCBlZmVjdHVhdMSDIGN1IHN1Y2Nlcy5cIixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbW9kYWxIYW5kbGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIHNldERpc2FibGVkKGZhbHNlKTtcclxuICAgICAgICAgICAgc2hvd0Vycm9yTWVzc2FnZShcIkEgYXBhcnV0IG8gZXJvYXJlIGludGVybmEsIHZhIHJvZyBzYSBuZSBzY3V6YXRpLlwiKTtcclxuICAgICAgICB9KTtcclxufVxyXG4iXX0= */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\utils\\\\SubmitButton.js */"));
}

function submitHandler(_ref2) {
  var e = _ref2.e,
      userDetails = _ref2.userDetails,
      fieldOptions = _ref2.fieldOptions,
      showErrorMessage = _ref2.showErrorMessage,
      setDisabled = _ref2.setDisabled,
      modalHandler = _ref2.modalHandler,
      modifyAlert = _ref2.modifyAlert,
      fetchEndpoint = _ref2.fetchEndpoint;
  e.preventDefault();
  setDisabled(true);
  var errorMessage = Object(_utils_checkFieldsValidity__WEBPACK_IMPORTED_MODULE_5__["default"])(_objectSpread({
    fields: userDetails
  }, fieldOptions));

  if (errorMessage !== false) {
    setDisabled(false);
    return showErrorMessage(errorMessage);
  }

  fetch(fetchEndpoint, {
    method: "POST",
    body: JSON.stringify(userDetails)
  }).then(function (r) {
    return r.json();
  }).then(function (_ref3) {
    var ok = _ref3.ok,
        _ref3$error = _ref3.error,
        error = _ref3$error === void 0 ? null : _ref3$error;

    if (!ok) {
      modifyAlert({
        isVisible: true,
        props: {
          type: 0,
          children: !error ? "A apărut o eroare internă, vă rugam să ne scuzați." : error
        }
      });
      setDisabled(false);
    } else {
      modifyAlert({
        isVisible: true,
        props: {
          type: 1,
          children: "Operațiunea a fost efectuată cu succes."
        }
      });
      modalHandler();
    }
  })["catch"](function (error) {
    console.error(error);
    setDisabled(false);
    showErrorMessage("A aparut o eroare interna, va rog sa ne scuzati.");
  });
}

/***/ })

})
//# sourceMappingURL=index.js.59ae529e22f1d18b516e.hot-update.js.map