"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_routemap_1 = __importDefault(require("express-routemap"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const hpp_1 = __importDefault(require("hpp"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const logger_1 = require("./utils/logger");
const cors_config_1 = __importDefault(require("./config/cors.config"));
const config_1 = require("./config/config");
class App {
    app;
    env;
    port;
    server;
    constructor(routes) {
        this.app = (0, express_1.default)();
        this.port = Number(config_1.PORT) || 5000;
        this.env = config_1.NODE_ENV || "development";
        this.initRoutes(routes);
        this.connectToDataBase();
        this.initMiddlewares();
        this.initSwagger();
        this.initErrorHandling();
    }
    /**
     * initRoutes
     */
    initRoutes(routes) {
        routes.forEach((route) => {
            this.app.use(`/api/${config_1.API_VERSION}`, route.router);
        });
    }
    /**
     * getServer
     */
    getServer() {
        return this.app;
    }
    /**
     * closeServer
     */
    closeServer(done) {
        this.server = this.app.listen(this.port, () => {
            done();
        });
    }
    /**
     * connectToDataBase
     */
    connectToDataBase() {
        //TODO: Initializa connection
    }
    initMiddlewares() {
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
        this.app.use((0, cookie_parser_1.default)());
        this.app.use((0, cors_1.default)(cors_config_1.default));
        this.app.use((0, hpp_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use((0, morgan_1.default)(config_1.LOG_FORMAT ?? "../logs", { stream: logger_1.stream }));
    }
    /**
     * listen
     */
    listen() {
        this.app.listen(this.port, () => {
            logger_1.logger.info(`==============================`);
            logger_1.logger.info(`====== ENV: ${this.env} ======`);
            logger_1.logger.info(`🎢 App running on port ${this.port}`);
            logger_1.logger.info(`==============================`);
            (0, express_routemap_1.default)(this.app);
        });
    }
    initSwagger() {
        //TODO: Init swagger
    }
    initErrorHandling() {
        //TODO: Init Error hanlding
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map