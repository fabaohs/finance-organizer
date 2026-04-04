import type { AppDatabase } from "../../../infra/db/app-database.js";
import { AuthUseCase } from "../../../use-cases/auth/index.js";
import { makeUserRepository } from "../../repositories/make-user-repository.js";
import { makeTokenService } from "../../token/make-token-service.js";

export function makeAuthUseCases(db: AppDatabase) {
  const userRepository = makeUserRepository(db);
  const tokenService = makeTokenService();
  return new AuthUseCase(userRepository, tokenService);
}
