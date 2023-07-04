"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class BaseRoute {
    path = "/alive";
    router = (0, express_1.Router)();
    constructor() {
        this.initBaseRoutes();
    }
    /**
     * initBaseRoutes
     */
    initBaseRoutes() {
        this.router.get(`${this.path}`, (_req, res) => {
            try {
                res.status(200).json({
                    message: "I'm a API and I'm running ",
                });
            }
            catch (error) {
                console.log("🚀 ~ file: base.routes.ts:19 ~ BaseRoute ~ this.router.get ~ error:", error);
            }
        });
    }
}
exports.default = BaseRoute;
//# sourceMappingURL=base.routes.js.map