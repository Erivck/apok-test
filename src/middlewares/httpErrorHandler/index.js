import { LOG_ERRORS_TO_CONSOLE } from "../../config";

export const HttpErrorString = {
  [400]: "Bad request",
  [401]: "Unauthorized",
  [403]: "Forbidden",
  [404]: "Resource not found",
  [500]: "Internal server error",
};

export class HttpRequestError extends Error {
  statusCode;
  httpError;
  messages;

  constructor(msg, statusCode = 500) {
    if (msg instanceof Array) {
      super(msg[0]);
      this.messages = msg;
    } else {
      super(msg);
    }
    Object.setPrototypeOf(this, HttpRequestError.prototype);
    this.statusCode = statusCode;
    this.httpError = HttpErrorString[statusCode];
  }

  getObject() {
    if (this.message) {
      return {
        statusCode: this.statusCode,
        message: this.messages ?? this.message,
        error: this.httpError
      }
    }
    return {
      statusCode: this.statusCode,
      error: this.httpError,
    };
  }

  static getFromError(error) {
    if (error instanceof HttpRequestError) return error;
    else if (error instanceof PrismaClientKnownRequestError) {
      return this.getFromPrismaRequestError(error);
    } else if (error instanceof Error) {
      return new HttpRequestError(error.message);
    }
    return new HttpRequestError();
  }
}


export const httpErrorHandler = (
  error,
  _req,
  res,
  _next
) => {
  if (LOG_ERRORS_TO_CONSOLE) {
    console.log({ error });
  }
  const httpError = HttpRequestError.getFromError(error).getObject();
  return res.status(httpError.statusCode).send(httpError);
};
