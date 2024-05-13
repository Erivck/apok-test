"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkIfTranslationIsRequired = void 0;
var checkIfTranslationIsRequired = exports.checkIfTranslationIsRequired = function checkIfTranslationIsRequired(req, _res, next) {
  var _req$get$substring, _req$get;
  var language = (_req$get$substring = (_req$get = req.get("Accept-Language")) === null || _req$get === void 0 ? void 0 : _req$get.substring(0, 2)) !== null && _req$get$substring !== void 0 ? _req$get$substring : "en";
  if (language != "en") req.translate = language;
  return next();
};