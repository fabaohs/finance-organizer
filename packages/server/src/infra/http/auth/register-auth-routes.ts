import type { AppDatabase } from "../../db/app-database.js";
import { FastifyInstance } from "fastify";
import { makeAuthController } from "../../../main/controllers/make-auth-controller.js";

export function registerAuthRoutes(db: AppDatabase) {
  return async function authRoutes(app: FastifyInstance) {
    const controller = makeAuthController(db);

    app.post("/auth/sign-in", async (request, reply) => {
      const result = await controller.signIn(request);
      return reply.status(200).send(result);
    });

    app.post("/auth/sign-up", async (request, reply) => {
      const result = await controller.signUp(request);
      return reply.status(200).send(result);
    });
  };
}
