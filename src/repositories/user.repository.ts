import prisma from "../config/prisma.js";
import type { createUserData } from "../validators/user.validate.js";

export async function createUser(data: createUserData) {
  return prisma.user.create({
    data,
  });
}

export async function findByEmployeeId(employeeId: string) {
  return prisma.user.findUnique({
    where: {
      employeeId,
    },
  });
}