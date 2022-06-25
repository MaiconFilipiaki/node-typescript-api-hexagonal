import { Application, Request, Response } from "express";
import axios from "axios";
import registerFile from "../../../register.json";

const routing = (app: Application) => {
  app.all("/:apiName/:path", async (req: Request, res: Response) => {
    const service = registerFile.services[req.params.apiName]
    if (!service) res.status(404).json({"msg": "service not register"})
    const link =  `${service.verb}://${service.host}:${service.port}/${req.params.path}`
    axios({
      method: req.method,
      url: link,
      headers: req.headers as any,
      data: req.body,
    })
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => {
        res.send(err);
      });
  });
};
export { routing };
