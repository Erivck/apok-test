"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkValidation = void 0;
var _expressValidator = require("express-validator");
var _httpErrorHandler = require("../httpErrorHandler");
var getErrorMsgs = function getErrorMsgs(errorsArray) {
  return errorsArray.map(function (error) {
    return "".concat(error.type, " \"").concat(error.path, "\". ").concat(error.msg);
  });
};
var checkValidation = exports.checkValidation = function checkValidation(req, _res, next) {
  var result = (0, _expressValidator.validationResult)(req);
  if (result.isEmpty()) {
    return next();
  }
  var error = new _httpErrorHandler.HttpRequestError(getErrorMsgs(result.array()), 400);
  return next(error);
};