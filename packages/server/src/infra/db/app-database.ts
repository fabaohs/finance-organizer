import type { NodePgDatabase } from "drizzle-orm/node-postgres";

/** Tipo do cliente Drizzle devolvido por createDbConnection (schema não registado no tipo). */
export type AppDatabase = NodePgDatabase<Record<string, unknown>>;
