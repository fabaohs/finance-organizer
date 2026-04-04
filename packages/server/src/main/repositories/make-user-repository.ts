import type { AppDatabase } from "../../infra/db/app-database.js";
import { DrizzleUserRepository } from "../../infra/db/repositories/user-repository.js";

export function makeUserRepository(db: AppDatabase) {
  return new DrizzleUserRepository(db);
}
