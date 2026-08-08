import jwt from "jsonwebtoken";
import type { JwtPayLoad } from "../types/auth.types.js";

const jwtSecret = process.env.JWT_SECRET;

if (!jwtSecret) {
  throw new Error("JWT_SECRET Is Not Defined");
}

export function generateToken(userId: string, role: string) {
  return jwt.sign({ userId, role }, jwtSecret as string);
  //we used "as string" to tell Ts that we are sure its a string cause we already checked(type assertion.)
}
