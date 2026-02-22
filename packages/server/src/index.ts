import Fastify from "fastify";
import cors from "@fastify/cors";

const app = Fastify({ logger: true });

await app.register(cors, { origin: true });

app.get("/api/health", async () => {
  return { status: "ok" };
});

app.listen({ port: 3001 }, (err) => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
