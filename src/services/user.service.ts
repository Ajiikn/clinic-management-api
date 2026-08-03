import { ConflictError } from "../errors/ConflictError.js";
import * as userRepository from "../repositories/user.repository.js";
import type { createUserData } from "../validators/user.validate.js";

export async function createUser(data: createUserData) {
  const existingUser = await userRepository.findByEmployeeId(data.employeeId);

  if (existingUser) {
    throw new ConflictError("Employee ID already exists");
  }

  return userRepository.createUser(data);
}
