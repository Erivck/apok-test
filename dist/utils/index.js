"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _nameNumber = require("./nameNumber");
Object.keys(_nameNumber).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _nameNumber[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _nameNumber[key];
    }
  });
});
var _formatDate = require("./formatDate");
Object.keys(_formatDate).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _formatDate[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _formatDate[key];
    }
  });
});