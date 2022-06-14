import { Application, Request, Response } from "express";
import axios from "axios";

const routing = (app: Application) => {
  app.post("/:apiName/*", async (req: Request, res: Response) => {
    console.log(`http://127.0.0.1:3003/${req.params[0]}`, req.params[0]);
    axios({
      method: req.method,
      url: `http://localhost:3003/api/v1/user`,
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
