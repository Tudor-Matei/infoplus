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
        fetchEndpoint: "api/"
      });
    },
    className: "jsx-2585271453" + " " + "button--primary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }, buttonTitle), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2585271453",
    __self: this
  }, ".button--primary.jsx-2585271453{background-color:var(--accent-secondary);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccGxlc2FcXERlc2t0b3BcXFByb2llY3RlIFdlYlxcaW5mb3BsdXNcXGNvbXBvbmVudHNcXHV0aWxzXFxTdWJtaXRCdXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0N3QixBQUc4RCx5Q0FDN0MiLCJmaWxlIjoiQzpcXFVzZXJzXFxwbGVzYVxcRGVza3RvcFxcUHJvaWVjdGUgV2ViXFxpbmZvcGx1c1xcY29tcG9uZW50c1xcdXRpbHNcXFN1Ym1pdEJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFNob3dBbGVydENvbnRleHQgfSBmcm9tIFwiLi4vLi4vcGFnZXMvX2FwcFwiO1xyXG5pbXBvcnQgeyBSZWdpc3Rlck1vZGFsSGFuZGxlciB9IGZyb20gXCIuLi9Ib21lL01haW5cIjtcclxuaW1wb3J0IHsgTG9naW5Nb2RhbEhhbmRsZXIgfSBmcm9tIFwiLi4vSG9tZS9NYWluXCI7XHJcbmltcG9ydCBjaGVja0ZpZWxkc1ZhbGlkaXR5IGZyb20gXCIuLi8uLi91dGlscy9jaGVja0ZpZWxkc1ZhbGlkaXR5XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdWJtaXRCdXR0b24oeyB1c2VyRGF0YSwgc2hvd0Vycm9yTWVzc2FnZSwgYnV0dG9uVGl0bGUsIHR5cGUgfSkge1xyXG4gICAgY29uc3QgW2lzRGlzYWJsZWQsIHNldERpc2FibGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBzaG93TW9kYWxIYW5kbGVyID0gdXNlQ29udGV4dChcclxuICAgICAgICB0eXBlID09PSBcInJlZ2lzdGVyXCIgPyBSZWdpc3Rlck1vZGFsSGFuZGxlciA6IExvZ2luTW9kYWxIYW5kbGVyXHJcbiAgICApO1xyXG4gICAgY29uc3QgbW9kaWZ5QWxlcnQgPSB1c2VDb250ZXh0KFNob3dBbGVydENvbnRleHQpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17aXNEaXNhYmxlZH1cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgIHN1Ym1pdEhhbmRsZXIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0Vycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGlzYWJsZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsSGFuZGxlcjogc2hvd01vZGFsSGFuZGxlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kaWZ5QWxlcnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZldGNoRW5kcG9pbnQ6IFwiYXBpL1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24tLXByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7YnV0dG9uVGl0bGV9XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgICAgICAgICAuYnV0dG9uLS1wcmltYXJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtc2Vjb25kYXJ5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc3VibWl0SGFuZGxlcih7XHJcbiAgICBlLFxyXG4gICAgdXNlckRhdGEsXHJcbiAgICBzaG93RXJyb3JNZXNzYWdlLFxyXG4gICAgc2V0RGlzYWJsZWQsXHJcbiAgICBtb2RhbEhhbmRsZXIsXHJcbiAgICBtb2RpZnlBbGVydCxcclxuICAgIGZldGNoRW5kcG9pbnQsXHJcbn0pIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldERpc2FibGVkKHRydWUpO1xyXG5cclxuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGNoZWNrRmllbGRzVmFsaWRpdHkoe1xyXG4gICAgICAgIGZpZWxkczogdXNlckRhdGEsXHJcbiAgICAgICAgbWluaW11bUxlbmd0aEZvckVhY2hGaWVsZDoge1xyXG4gICAgICAgICAgICBuYW1lOiAzLFxyXG4gICAgICAgICAgICBzdXJuYW1lOiAzLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogNSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IDgsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYXNFbWFpbDogdHJ1ZSxcclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChlcnJvck1lc3NhZ2UgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgc2V0RGlzYWJsZWQoZmFsc2UpO1xyXG4gICAgICAgIHJldHVybiBzaG93RXJyb3JNZXNzYWdlKGVycm9yTWVzc2FnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZmV0Y2goZmV0Y2hFbmRwb2ludCwge1xyXG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlckRhdGEpLFxyXG4gICAgfSlcclxuICAgICAgICAudGhlbigocikgPT4gci5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oKHsgb2ssIGVycm9yID0gbnVsbCB9KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghb2spXHJcbiAgICAgICAgICAgICAgICBtb2RpZnlBbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiAhZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJBIGFwxINydXQgbyBlcm9hcmUgaW50ZXJuxIMsIHbEgyBydWdhbSBzxIMgbmUgc2N1emHIm2kuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZXJyb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBtb2RpZnlBbGVydCh7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBcIk9wZXJhyJtpdW5lYSBhIGZvc3QgZWZlY3R1YXTEgyBjdSBzdWNjZXMuXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgbW9kYWxIYW5kbGVyKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICBzZXREaXNhYmxlZChmYWxzZSk7XHJcbiAgICAgICAgICAgIHNob3dFcnJvck1lc3NhZ2UoXCJBIGFwYXJ1dCBvIGVyb2FyZSBpbnRlcm5hLCB2YSByb2cgc2EgbmUgc2N1emF0aS5cIik7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuIl19 */\n/*@ sourceURL=C:\\\\Users\\\\plesa\\\\Desktop\\\\Proiecte Web\\\\infoplus\\\\components\\\\utils\\\\SubmitButton.js */"));
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
//# sourceMappingURL=index.js.aa1717bb87a4f0bfb21f.hot-update.js.map