import express from "express";
import { nodesControllers } from "../controllers";
import { body } from "express-validator";
import { checkValidation } from "../middlewares/checkValidation";
import { checkIfTranslationIsRequired } from "../middlewares";

const nodesRouter = express.Router();

nodesRouter.post("/",
  body("parentId")
  .optional()
  .isInt(),
  checkValidation,
  checkIfTranslationIsRequired,
  nodesControllers.createNode
);

nodesRouter.get("/:id", checkIfTranslationIsRequired, nodesControllers.getNode);

nodesRouter.get("/:id/children", checkIfTranslationIsRequired, nodesControllers.getChildNodes);

nodesRouter.get("/parents", checkIfTranslationIsRequired, nodesControllers.getParentNodes);

nodesRouter.delete("/:id", nodesControllers.deleteNode);

export default nodesRouter;
