import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { ILogger } from "../logger/types";
import ENV from "../env";

const databaseUrl = ENV.DATABASE_URL;
let dbInstance: ReturnType<typeof drizzle> | null = null;

export default async function createDbConnection(logger: ILogger) {
  if (!databaseUrl) throw new Error("DATABASE_URL is not set");
  if (dbInstance) return dbInstance;

  logger.info("[DB] Conectando ao banco de dados...");

  const pool = new Pool({ connectionString: databaseUrl });

  pool.on("error", (error) =>
    logger.error("[DB] Erro ao conectar ao banco de dados", { error }),
  );

  try {
    const client = await pool.connect();
    client.release();
    logger.info("[db] Connected successfully");
  } catch (error) {
    logger.error("[db] Connection failed:", { error });
    await pool.end();
    throw error;
  }

  dbInstance = drizzle(pool);
  return dbInstance;
}
