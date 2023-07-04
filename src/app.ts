import express from "express";
import displayRoutes from "express-routemap";
import cookieParser from "cookie-parser";
import cors from "cors";
import hpp from "hpp";
import helmet from "helmet";
import morgan from "morgan";

import { Route } from "./interfaces/route.interface";
import { logger, stream } from "./utils/logger";
import corsConfig from "./config/cors.config";

import { NODE_ENV, PORT, API_VERSION, LOG_FORMAT } from "./config/config";

class App {
  public app: express.Application;
  public env: string;
  public port: number;
  public server: any;

  constructor(routes: Route[]) {
    this.app = express();
    this.port = Number(PORT) || 5000;
    this.env = NODE_ENV || "development";

    this.initRoutes(routes);
    this.connectToDataBase();
    this.initMiddlewares();
    this.initSwagger();
    this.initErrorHandling();
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
   * getServer
   */
  public getServer() {
    return this.app;
  }

  /**
   * closeServer
   */
  public closeServer(done?: any) {
    this.server = this.app.listen(this.port, () => {
      done();
    });
  }

  /**
   * connectToDataBase
   */
  private connectToDataBase() {
    //TODO: Initializa connection
  }

  private initMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
    this.app.use(cors(corsConfig));
    this.app.use(hpp());
    this.app.use(helmet());
    this.app.use(morgan(LOG_FORMAT ?? "../logs", { stream }));
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

  private initSwagger() {
    //TODO: Init swagger
  }

  private initErrorHandling() {
    //TODO: Init Error hanlding
  }
}

export default App;
