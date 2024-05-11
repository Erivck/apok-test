import { validationResult } from "express-validator";
import { HttpRequestError } from "../httpErrorHandler";


const getErrorMsgs = (errorsArray) => {
  return errorsArray.map((error) => {
    return `${error.type} "${error.path}". ${error.msg}`;
  });
}

export const checkValidation = (req, _res, next) => {
  const result = validationResult(req);

  if (result.isEmpty()) {
    next();
  }

  const error = new HttpRequestError(getErrorMsgs(result.array()), 400);

  next(error);
}