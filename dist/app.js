"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _nodes = _interopRequireDefault(require("./routes/nodes"));
var _config = require("./config");
var _httpErrorHandler = require("./middlewares/httpErrorHandler");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
_dotenv["default"].config();
var app = (0, _express["default"])();
app.set("port", _config.PORT);
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: true
}));
app.use("/node", _nodes["default"]);
app.get("/ping", function (_req, res) {
  console.log("someone pinged here!!");
  return res.status(200).send({
    message: "pong"
  });
});
app.use(function (req, res, next) {
  next(new _httpErrorHandler.HttpRequestError("", 404));
});
app.use(_httpErrorHandler.httpErrorHandler);
var _default = exports["default"] = app;