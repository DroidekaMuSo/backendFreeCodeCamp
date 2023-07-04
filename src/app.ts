import express from "express";
import displayRoutes from "express-routemap";

import { Route } from "./interfaces/route.interface";
import { logger } from "./utils/logger";

import { NODE_ENV, PORT, API_VERSION } from "./config/config";

class App {
  public app: express.Application;
  public env: string;
  public port: number;

  constructor(routes: Route[]) {
    this.app = express();
    this.port = Number(PORT) || 5000;
    this.env = NODE_ENV || "development";

    this.initRoutes(routes);
  }

  /**
   * initRoutes
   */
  public initRoutes(routes: Route[]) {
    routes.forEach((route) => {
      this.app.use(`/api/${API_VERSION}`, route.router);
    });
  }

  /**
   * listen
   */
  public listen() {
    this.app.listen(this.port, () => {
      logger.info(`==============================`);
      logger.info(`====== ENV: ${this.env} ======`);
      logger.info(`🎢 App running on port ${this.port}`);
      logger.info(`==============================`);
      displayRoutes(this.app);
    });
  }
}

export default App;
