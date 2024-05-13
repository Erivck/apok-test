"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _http = _interopRequireDefault(require("http"));
var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var server = _http["default"].createServer(_app["default"]);
var port = _app["default"].get("port");
server.listen(port, function () {
  console.log("Server running on http://localhost:".concat(port));
});
var _default = exports["default"] = server;