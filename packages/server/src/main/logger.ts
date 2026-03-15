import type { FastifyBaseLogger } from "fastify";
import { createLogger } from "../infra/logger/index.js";

export function loggerFactory(pinoLogger: FastifyBaseLogger) {
  return createLogger(pinoLogger);
}
