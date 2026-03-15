import Fastify from "fastify";
import cors from "@fastify/cors";
import { loggerFactory } from "./main/logger-factory";

const app = Fastify({ logger: true });

await app.register(cors, { origin: true });

const logger = loggerFactory(app.log);

app.get("/api/health", async () => {
  return { status: "ok" };
});

app.listen({ port: 3001 }, (err) => {
  if (err) {
    logger.error(err.message, { error: err });
    process.exit(1);
  }
});

export { logger };
