import Fastify, { type FastifyInstance } from "fastify";
import cors from "@fastify/cors";
import { loggerFactory } from "../logger/make-logger.js";
import createDbConnection from "../../infra/db/index.js";
import type { ILogger } from "../../infra/logger/types.js";
import { registerAuthRoutes } from "../../infra/http/auth/register-auth-routes.js";

export type AppBootstrap = {
  app: FastifyInstance;
  logger: ILogger;
  db: Awaited<ReturnType<typeof createDbConnection>>;
};

export async function makeApp(): Promise<AppBootstrap> {
  const app = Fastify({ logger: true });

  await app.register(cors, { origin: true });

  const logger = loggerFactory(app.log);
  const db = await createDbConnection(logger);

  await app.register(registerAuthRoutes(db), { prefix: "/api" });

  app.get("/api/health", async () => {
    try {
      return { status: "ok" };
    } catch (error) {
      return { status: "error" };
    }
  });

  return { app, logger, db };
}
