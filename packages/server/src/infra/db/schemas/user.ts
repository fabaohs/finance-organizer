import {
  index,
  integer,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

const userSchema = pgTable(
  "users",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 100 }).notNull(),
    email: varchar({ length: 100 }).notNull().unique(),
    password: varchar({ length: 100 }).notNull(),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp(),
    deletedAt: timestamp(),
  },
  (table) => [index("idx_user_email").on(table.email)],
);

export default userSchema;
