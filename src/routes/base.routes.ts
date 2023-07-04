import { Request, Response, Router } from "express";
import { Route } from "../interfaces/route.interface";

class BaseRoute implements Route {
  public path = "/alive";
  public router = Router();

  constructor() {
    this.initBaseRoutes();
  }

  /**
   * initBaseRoutes
   */
  public initBaseRoutes() {
    this.router.get(`${this.path}`, (_req: Request, res: Response) => {
      try {
        res.status(200).json({
          message: "I'm a API and I'm running ",
        });
      } catch (error) {
        console.log(
          "🚀 ~ file: base.routes.ts:19 ~ BaseRoute ~ this.router.get ~ error:",
          error
        );
      }
    });
  }
}

export default BaseRoute;
