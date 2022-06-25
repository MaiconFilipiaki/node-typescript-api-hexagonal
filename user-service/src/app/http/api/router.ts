import { Application, Request, Response } from "express";
import { router as RouterV1 } from "./v1/router";

const _prefixV1 = "/api/v1/";

function healthCheck(req: Request, res: Response) {
  return res.json({ msg: "Dad is On 4" });
}

const routing = (app: Application) => {
  app.use(_prefixV1, RouterV1);
  app.use("/health-check", healthCheck);
};

export { routing };
