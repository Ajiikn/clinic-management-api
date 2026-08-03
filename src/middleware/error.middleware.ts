import type { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { AppError } from "../errors/AppError.js";

export function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // External/input validation errors
  if (err instanceof ZodError) {
    return res.status(400).json({
      success: false,
      message: "Validation Failed",
      errors: err.issues,
    });
  }
  // Application/business errors
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({
      success: false,
      message: err.message,
    });
  }

  console.error(err);

  return res
    .status(500)
    .json({ success: false, message: "Internal Server Error" });
}
