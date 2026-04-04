import type { AppDatabase } from "../../infra/db/app-database.js";
import { AuthController } from "../../presentation/controllers/auth/index.js";
import { makeAuthUseCases } from "../use-cases/auth/make-auth-use-cases.js";

export function makeAuthController(db: AppDatabase) {
  const useCase = makeAuthUseCases(db);
  const controller = new AuthController(useCase);

  return controller;
}