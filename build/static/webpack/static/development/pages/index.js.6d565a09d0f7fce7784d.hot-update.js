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
/* harmony import */ var validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! validator/lib/isEmpty */ "./node_modules/validator/lib/isEmpty.js");
/* harmony import */ var validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! validator/lib/isEmail */ "./node_modules/validator/lib/isEmail.js");
/* harmony import */ var validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1__);


function checkFieldsValidity(_ref) {
  var _ref$fields = _ref.fields,
      fields = _ref$fields === void 0 ? {} : _ref$fields,
      _ref$minimumLengthFor = _ref.minimumLengthForEachField,
      minimumLengthForEachField = _ref$minimumLengthFor === void 0 ? {} : _ref$minimumLengthFor,
      _ref$hasEmail = _ref.hasEmail,
      hasEmail = _ref$hasEmail === void 0 ? false : _ref$hasEmail;
  if (thereAreEmptyFields(Object.values(fields))) return "Nu ai completat unul sau mai multe câmpuri.";else if (fieldValuesAreNotLongEnough(fields, minimumLengthForEachField)) return "Unul sau mai multe câmpuri nu indeplinesc numarul de caractere minim.";else if (hasEmail && !validator_lib_isEmail__WEBPACK_IMPORTED_MODULE_1___default()(fields.email)) return "E-mail-ul pe care l-ai introdus nu este valid.";
  return false;
}

function thereAreEmptyFields(fieldValues) {
  return fieldValues.some(function (fieldValue) {
    return validator_lib_isEmpty__WEBPACK_IMPORTED_MODULE_0___default()(fieldValue);
  });
}

function fieldValuesAreNotLongEnough(fields, minimumLengthForEachField) {
  for (var _i = 0, _Object$keys = Object.keys(minimumLengthForEachField); _i < _Object$keys.length; _i++) {
    var field = _Object$keys[_i];
    if (fields[field].length < minimumLengthForEachField[field]) return true;
  }

  return false;
}

/***/ })

})
//# sourceMappingURL=index.js.6d565a09d0f7fce7784d.hot-update.js.map