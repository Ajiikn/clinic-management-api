import { Router } from "express";
import { loginController } from "../controllers/auth.controller.js";
import { validate } from "../middleware/validation.middleware.js";
import { loginSchema } from "../validators/login.validate.js";

const router = Router();

router.post("/login", validate(loginSchema), loginController);

export default router;
