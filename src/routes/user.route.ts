import { Router } from "express";
// imports controller functions
import { createUser } from "../controllers/user.controller.js";
import { validate } from "../middleware/validation.middleware.js";
import { createUserSchema } from "../validators/user.validate.js";

const router = Router();

router.post("/", validate(createUserSchema),createUser);

export default router;
