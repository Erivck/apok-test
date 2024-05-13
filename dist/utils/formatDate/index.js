"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatDate = void 0;
var formatDate = exports.formatDate = function formatDate(date) {
  if (!(date instanceof Date)) throw new Error("invalid date");
  return "".concat(date.getUTCFullYear(), "-").concat(date.getUTCMonth(), "-").concat(date.getUTCDate(), " ").concat(date.getUTCHours(), ":").concat(date.getUTCMinutes(), ":").concat(date.getUTCSeconds());
};