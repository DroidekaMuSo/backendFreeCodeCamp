import { Request, Response, Router } from "express";
import { Route } from "../interfaces/route.interface";

class UserRoutes implements Route {
  public path = "/user";
  public router = Router();

  constructor() {
    this.initUserRoute();
  }

  /**
   * initUserRoute
   */
  public initUserRoute() {
    this.router.get(`${this.path}`, (_req: Request, res: Response) => {
      return res.status(200).json({
        message: "All users",
      });
    });

    //*Get user by ID
    this.router.get(`${this.path}/:id`, (req: Request, res: Response) => {
      const { id: userId } = req.params;

      return res.status(200).json({
        message: `User with ID ${userId}`,
      });
    });

    //*Update user by ID
    this.router.put(`${this.path}/:id`, (req: Request, res: Response) => {
      const { id: userId } = req.params;

      return res.status(200).json({
        message: `User with id ${userId} updated`,
      });
    });

    //*Delete user by ID
    this.router.delete(`${this.path}/:id`, (req: Request, res: Response) => {
      const { id: userId } = req.params;

      return res.status(200).json({
        message: `User with ID ${userId} deleted`,
      });
    });

    //*Create user
    this.router.post(`${this.path}`, (req: Request, res: Response) => {
      const user = req.body;

      console.log(user);
      return res.status(200).json({
        message: `User with email  was created`,
        user,
      });
    });
  }
}

export default UserRoutes;
