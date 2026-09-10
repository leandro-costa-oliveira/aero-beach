import { AppError } from "./AppError";

export class UnauthorizedError extends AppError {
  constructor(message: string, details?: unknown) {
    super(401, "UNAUTHORIZED", message, details);
    this.name = "UnauthorizedError";
  }
}