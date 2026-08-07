import { z } from "zod";

export const loginSchema = z.object({
  employeeId: z.string().min(6),
  password: z.string().min(8),
});

export type loginData = z.infer<typeof loginSchema>;
