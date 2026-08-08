import jwt from "jsonwebtoken";
import type { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../errors/UnauthorizedError.js";
import type { JwtPayLoad } from "../types/auth.types.js";

export function authenticate(req: Request, res: Response, next: NextFunction) {
  // to check if the token is in the expected format
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new UnauthorizedError("No Access Token");
  }

  const [scheme, token] = authHeader.split(" ");

  if (scheme !== "Bearer" || !token) {
    throw new UnauthorizedError("Invalid Authorization Header");
  }

  // to inport env secret and verify if the provided token is valid
  const jwtSecret = process.env.JWT_SECRET;

  if (!jwtSecret) {
    throw new Error("JWT_SECRET Is Not Defined");
  }

  let payload: JwtPayLoad; // declared outside to prevent it from dissappearing after the try/catch block

  // to catch errors
  try {
    const payload = jwt.verify(token, jwtSecret) as JwtPayLoad; // type assertion.
  } catch {
    throw new UnauthorizedError("Invalid or Expired Token");
  }

  next();
}
