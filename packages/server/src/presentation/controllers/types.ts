import { FastifyRequest } from "fastify";

export interface IController {
  extractBody<T>(request: FastifyRequest): Promise<T>;
}
