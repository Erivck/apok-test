"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.httpErrorHandler = exports.HttpRequestError = exports.HttpErrorString = void 0;
var _config = require("../../config");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(fn) { try { return Function.toString.call(fn).indexOf("[native code]") !== -1; } catch (e) { return typeof fn === "function"; } }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HttpErrorString = exports.HttpErrorString = _defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({}, 400, "Bad request"), 401, "Unauthorized"), 403, "Forbidden"), 404, "Resource not found"), 500, "Internal server error");
var HttpRequestError = exports.HttpRequestError = /*#__PURE__*/function (_Error) {
  function HttpRequestError(msg) {
    var _this;
    var statusCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 500;
    _classCallCheck(this, HttpRequestError);
    if (msg instanceof Array) {
      _this = _callSuper(this, HttpRequestError, [msg[0]]);
      _defineProperty(_assertThisInitialized(_this), "statusCode", void 0);
      _defineProperty(_assertThisInitialized(_this), "httpError", void 0);
      _defineProperty(_assertThisInitialized(_this), "messages", void 0);
      _this.messages = msg;
    } else {
      _this = _callSuper(this, HttpRequestError, [msg]);
      _defineProperty(_assertThisInitialized(_this), "statusCode", void 0);
      _defineProperty(_assertThisInitialized(_this), "httpError", void 0);
      _defineProperty(_assertThisInitialized(_this), "messages", void 0);
    }
    Object.setPrototypeOf(_assertThisInitialized(_this), HttpRequestError.prototype);
    _this.statusCode = statusCode;
    _this.httpError = HttpErrorString[statusCode];
    return _assertThisInitialized(_this);
  }
  _inherits(HttpRequestError, _Error);
  return _createClass(HttpRequestError, [{
    key: "getObject",
    value: function getObject() {
      if (this.message) {
        var _this$messages;
        return {
          statusCode: this.statusCode,
          message: (_this$messages = this.messages) !== null && _this$messages !== void 0 ? _this$messages : this.message,
          error: this.httpError
        };
      }
      return {
        statusCode: this.statusCode,
        error: this.httpError
      };
    }
  }], [{
    key: "getFromError",
    value: function getFromError(error) {
      if (error instanceof HttpRequestError) return error;else if (error instanceof PrismaClientKnownRequestError) {
        return this.getFromPrismaRequestError(error);
      } else if (error instanceof Error) {
        return new HttpRequestError(error.message);
      }
      return new HttpRequestError();
    }
  }]);
}( /*#__PURE__*/_wrapNativeSuper(Error));
var httpErrorHandler = exports.httpErrorHandler = function httpErrorHandler(error, _req, res, _next) {
  if (_config.LOG_ERRORS_TO_CONSOLE) {
    console.log({
      error: error
    });
  }
  var httpError = HttpRequestError.getFromError(error).getObject();
  return res.status(httpError.statusCode).send(httpError);
};