"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TRANSLATE_API_KEY = exports.PORT = exports.LOG_ERRORS_TO_CONSOLE = exports.DB_URL = void 0;
var _Number, _process$env$DATABASE, _process$env$TRANSLAT;
var PORT = exports.PORT = (_Number = Number(process.env.PORT)) !== null && _Number !== void 0 ? _Number : 3000;
var DB_URL = exports.DB_URL = (_process$env$DATABASE = process.env.DATABASE_URL) !== null && _process$env$DATABASE !== void 0 ? _process$env$DATABASE : "";
var LOG_ERRORS_TO_CONSOLE = exports.LOG_ERRORS_TO_CONSOLE = process.env.LOG_ERRORS_TO_CONSOLE === "true" ? true : false;
var TRANSLATE_API_KEY = exports.TRANSLATE_API_KEY = (_process$env$TRANSLAT = process.env.TRANSLATE_API_KEY) !== null && _process$env$TRANSLAT !== void 0 ? _process$env$TRANSLAT : "";