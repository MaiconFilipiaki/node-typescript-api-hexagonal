require("dotenv").config();
import { log } from "./config/logger";
import express, { Application } from "express";
import cors from "cors";
import axios from "axios";
import apiErrorHandler from "./app/exception/apiErrorHandler";
import MongoConfig from "./config/mongo";
import { routing } from "./app/http/api/router";

async function mountApp() {
  const app: Application = express();
  app.use(cors());
  await MongoConfig();

  app.use(express.json());
  routing(app);
  app.use(apiErrorHandler);
  const port = process.env.PORT_RUN;
  app.listen(port, async () => {
    await axios.post('http://localhost:8080/register', {
      "port": port,
      "host": "localhost",
      "verb": "http",
      "name": "user"
    }).catch(err => {
      console.log(err)
    })
    log.info(`🚀 Server On ${port}`)
  });
}

mountApp();
