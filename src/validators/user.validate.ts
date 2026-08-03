import { z } from "zod";

export const createUserSchema = z.object({
  employeeId: z.string().min(6),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  passwordHash: z.string().min(8),
  role: z.enum(["ADMIN", "DOCTOR", "RECEPTIONIST"]),
  email: z.email(),
});

export type createUserData = z.infer<typeof createUserSchema>;
