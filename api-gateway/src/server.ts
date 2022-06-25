require("dotenv").config();
import { log } from "./config/logger";
import express, { Application } from "express";
import cors from "cors";
import apiErrorHandler from "./app/exception/apiErrorHandler";
import { routing } from "./app/gateway/index";
import { register } from "./app/gateway/register";

async function mountApp() {
  const app: Application = express();
  app.use(cors());
  app.use(express.json());
  routing(app);
  register(app)
  app.use(apiErrorHandler);
  const port = process.env.PORT_RUN;
  app.listen(port, () => log.info(`🚀 Server On ${port}`));
}

mountApp();
