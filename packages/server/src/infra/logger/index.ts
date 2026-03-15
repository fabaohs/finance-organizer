import type { FastifyBaseLogger } from "fastify";
import type { ILogger } from "./types.js";

export function createLogger(pinoLogger: FastifyBaseLogger): ILogger {
  return {
    info: (message, meta) => pinoLogger.info(meta ?? {}, message),
    warn: (message, meta) => pinoLogger.warn(meta ?? {}, message),
    error: (message, meta) => pinoLogger.error(meta ?? {}, message),
    debug: (message, meta) => pinoLogger.debug(meta ?? {}, message),
  };
}
