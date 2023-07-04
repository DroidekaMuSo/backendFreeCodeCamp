"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class UserRoutes {
    path = "/user";
    router = (0, express_1.Router)();
    constructor() {
        this.initUserRoute();
    }
    /**
     * initUserRoute
     */
    initUserRoute() {
        this.router.get(`${this.path}`, (_req, res) => {
            return res.status(200).json({
                message: "All users",
            });
        });
        //*Get user by ID
        this.router.get(`${this.path}/:id`, (req, res) => {
            const { id: userId } = req.params;
            return res.status(200).json({
                message: `User with ID ${userId}`,
            });
        });
        //*Update user by ID
        this.router.put(`${this.path}/:id`, (req, res) => {
            const { id: userId } = req.params;
            return res.status(200).json({
                message: `User with id ${userId} updated`,
            });
        });
        //*Delete user by ID
        this.router.delete(`${this.path}/:id`, (req, res) => {
            const { id: userId } = req.params;
            return res.status(200).json({
                message: `User with ID ${userId} deleted`,
            });
        });
        //*Create user
        this.router.post(`${this.path}`, (req, res) => {
            const user = req.body;
            console.log(user);
            return res.status(200).json({
                message: `User with email  was created`,
                user,
            });
        });
    }
}
exports.default = UserRoutes;
//# sourceMappingURL=user.routes.js.map