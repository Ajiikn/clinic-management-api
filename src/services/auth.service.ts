import * as userRepository from "../repositories/user.repository.js";
import { UnauthorizedError } from "../errors/UnauthorizedError.js";
import type { loginData } from "../validators/login.validate.js";

export async function login(data: loginData) {
  const user = await userRepository.findByEmployeeId(data.employeeId);

  if (!user) {
    throw new UnauthorizedError("Invalid EmployeeId or password");
  }
}
