import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { ILogger } from "../logger/types";

const databaseUrl = process.env.DATABASE_URL!;
let dbInstance: ReturnType<typeof drizzle> | null = null;

export default async function createDbConnection(logger: ILogger) {
  if (!databaseUrl) throw new Error("DATABASE_URL is not set");
  if (dbInstance) return dbInstance;

  logger.info("[DB] Conectando ao banco de dados...");

  const pool = new Pool({ connectionString: databaseUrl });

  pool.on("error", (err) =>
    logger.error("[DB] Erro ao conectar ao banco de dados", err),
  );

  try {
    const client = await pool.connect();
    client.release();
    logger.info("[db] Connected successfully");
  } catch (err) {
    logger.error("[db] Connection failed:", err);
    await pool.end();
    throw err;
  }

  dbInstance = drizzle(pool);
  return dbInstance;
}
