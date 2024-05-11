"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _nodes = require("./nodes");
Object.keys(_nodes).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _nodes[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _nodes[key];
    }
  });
});