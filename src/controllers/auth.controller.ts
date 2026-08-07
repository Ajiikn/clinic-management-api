import * as authService from "../services/auth.service.js";
import type { Request, Response } from "express";

export async function loginController(req: Request, res: Response) {
  const user = await authService.login(req.body);
  return res.status(200).json({
    success: true,
    data: user,
  });
}
