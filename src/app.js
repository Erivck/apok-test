import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import nodesRouter from "./routes/nodes";
import { PORT } from "./config";
import { HttpRequestError, httpErrorHandler } from "./middlewares/httpErrorHandler";

dotenv.config();

const app = express();

app.set("port", PORT);
app.use (cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/node", nodesRouter);

app.get("/ping", (_req, res) => {
  console.log("someone pinged here!!");
  return res.status(200).send({ message: "pong" });
});

app.use((req, res, next) => {
  next(new HttpRequestError("", 404));
});
app.use(httpErrorHandler);

export default app;