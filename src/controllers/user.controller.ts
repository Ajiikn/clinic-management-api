import * as userService from "../services/user.service.js";
import type { Request, Response } from "express";

export async function createUser(req: Request, res: Response) {
  const user = await userService.createUser(req.body);
  return res.status(201).json(user);
}
