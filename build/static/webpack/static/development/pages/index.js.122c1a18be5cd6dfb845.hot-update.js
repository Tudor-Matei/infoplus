webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./utils/checkFieldsValidity.js":
/*!**************************************!*\
  !*** ./utils/checkFieldsValidity.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return checkFieldsValidity; });
/* harmony import */ var _isEmailValid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isEmailValid */ "./utils/isEmailValid.js");

function checkFieldsValidity(_ref) {
  var _ref$fields = _ref.fields,
      fields = _ref$fields === void 0 ? {} : _ref$fields,
      _ref$minimumLengthFor = _ref.minimumLengthForEachField,
      minimumLengthForEachField = _ref$minimumLengthFor === void 0 ? {} : _ref$minimumLengthFor,
      _ref$hasEmail = _ref.hasEmail,
      hasEmail = _ref$hasEmail === void 0 ? false : _ref$hasEmail;
  var fieldValues = Object.values(fields);
  if (thereAreEmptyFields(fieldValues)) return "Nu ai completat unul sau mai multe câmpuri.";else if (fieldValuesAreNotLongEnough(fields, minimumLengthForEachField)) return "Unul sau mai multe câmpuri nu indeplinesc numarul de caractere minim.";else if (hasEmail && !Object(_isEmailValid__WEBPACK_IMPORTED_MODULE_0__["default"])(fields.email)) return "E-mail-ul pe care l-ai introdus nu este valid.";
  return false;
}

function thereAreEmptyFields(fieldValues) {
  return fieldValues.some(function (fieldValue) {
    return fieldValue.trim() === "";
  });
}

function fieldValuesAreNotLongEnough(fields, minimumLengthForEachField) {
  for (var _i = 0, _Object$keys = Object.keys(minimumLengthForEachField); _i < _Object$keys.length; _i++) {
    var field = _Object$keys[_i];
    if (fields[field].length < minimumLengthForEachField[field]) return true;
  }

  return false;
}

/***/ }),

/***/ "./utils/isEmailValid.js":
/*!*******************************!*\
  !*** ./utils/isEmailValid.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isEmailValid; });
function isEmailValid(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gim.test(email);
}

/***/ })

})
//# sourceMappingURL=index.js.122c1a18be5cd6dfb845.hot-update.js.map