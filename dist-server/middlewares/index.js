"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _checkIfTranslationIsRequired = require("./checkIfTranslationIsRequired");
Object.keys(_checkIfTranslationIsRequired).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _checkIfTranslationIsRequired[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _checkIfTranslationIsRequired[key];
    }
  });
});
var _checkValidation = require("./checkValidation");
Object.keys(_checkValidation).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _checkValidation[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _checkValidation[key];
    }
  });
});
var _httpErrorHandler = require("./httpErrorHandler");
Object.keys(_httpErrorHandler).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _httpErrorHandler[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _httpErrorHandler[key];
    }
  });
});