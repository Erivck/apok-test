"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.prisma = void 0;
var _client = require("@prisma/client");
var _config = require("../config");
var prisma = exports.prisma = new _client.PrismaClient({
  datasources: {
    db: {
      url: _config.DB_URL
    }
  }
});