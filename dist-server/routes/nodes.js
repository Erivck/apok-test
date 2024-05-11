"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _controllers = require("../controllers");
var _expressValidator = require("express-validator");
var _checkValidation = require("../middlewares/checkValidation");
var _middlewares = require("../middlewares");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var nodesRouter = _express["default"].Router();
nodesRouter.post("/", (0, _expressValidator.body)("parentId").optional().isInt(), _checkValidation.checkValidation, _middlewares.checkIfTranslationIsRequired, _controllers.nodesControllers.createNode);
nodesRouter.get("/:id", _middlewares.checkIfTranslationIsRequired, _controllers.nodesControllers.getNode);
nodesRouter.get("/:id/children", _middlewares.checkIfTranslationIsRequired, _controllers.nodesControllers.getChildNodes);
nodesRouter.get("/parents", _middlewares.checkIfTranslationIsRequired, _controllers.nodesControllers.getParentNodes);
nodesRouter["delete"]("/:id", _controllers.nodesControllers.deleteNode);
var _default = exports["default"] = nodesRouter;