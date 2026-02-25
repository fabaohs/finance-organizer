import {
  decimal,
  index,
  integer,
  pgEnum,
  pgTable,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { ExpenseTypeEnum } from "../../../domain/entities/expense.entity";

export const expenseType = pgEnum("expense_type", [
  ExpenseTypeEnum.FIXED,
  ExpenseTypeEnum.VARIABLE,
]);

const expenseSchema = pgTable(
  "expenses",
  {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    userId: integer().notNull(),
    name: varchar({ length: 100 }).notNull(),
    amount: decimal({ precision: 10, scale: 2 }).notNull(),
    category: varchar({ length: 100 }).notNull(),
    type: expenseType("type").notNull(),
    createdAt: timestamp().notNull().defaultNow(),
    updatedAt: timestamp(),
    deletedAt: timestamp(),
  },
  (table) => [index("idx_expense_user_id").on(table.userId)],
);

export default expenseSchema;
