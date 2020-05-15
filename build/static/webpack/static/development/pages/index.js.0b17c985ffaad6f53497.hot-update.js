webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/utils/submitHandler.js":
/*!*******************************************!*\
  !*** ./components/utils/submitHandler.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return submitHandler; });
/* harmony import */ var _utils_checkFieldsValidity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/checkFieldsValidity */ "./utils/checkFieldsValidity.js");

function submitHandler(_ref) {
  var e = _ref.e,
      userDetails = _ref.userDetails,
      showErrorMessage = _ref.showErrorMessage,
      setDisabled = _ref.setDisabled,
      modalHandler = _ref.modalHandler,
      modifyAlert = _ref.modifyAlert,
      fetchEndpoint = _ref.fetchEndpoint;
  e.preventDefault();
  setDisabled(true);
  var errorMessage = Object(_utils_checkFieldsValidity__WEBPACK_IMPORTED_MODULE_0__["default"])({
    fields: userDetails,
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
    body: JSON.stringify(userDetails)
  }).then(function (r) {
    return r.json();
  }).then(function (_ref2) {
    var ok = _ref2.ok,
        _ref2$error = _ref2.error,
        error = _ref2$error === void 0 ? null : _ref2$error;
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
//# sourceMappingURL=index.js.0b17c985ffaad6f53497.hot-update.js.map