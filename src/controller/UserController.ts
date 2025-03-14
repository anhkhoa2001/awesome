import type { Request, Response } from "express";
import type { UserCreateRequest } from "../dto/request/UserCreateRequest";
import { UserService } from "../service/UserService";

export class UserController {

  static getUsers(req: Request, res: Response) {
    res.json({ message: "List of users" });
  }

  static getUserById(req: Request, res: Response) {
    const userId = req.params.id;
    res.json({ message: `User with ID: ${userId}` });
  }

  static async createUser(req: Request, res: Response) {
    const resUser = await UserService.saveUser(req.body); // 🟢 Chờ Promise hoàn thành
    console.log("resUser", resUser);
    res.status(201).json(resUser);
  }


}
