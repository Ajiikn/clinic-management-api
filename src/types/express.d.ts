// this is a declaration file so we can merging our definition with Express's existing Request interface.
// Request interface normally has things like req.headers,req.bodyc,etc.
import type { JwtPayload } from "./auth.types.js";

declare global {
  namespace Express {
    interface Request {
      user: JwtPayload;
    }
  }
} //declaration merging.

export {};
