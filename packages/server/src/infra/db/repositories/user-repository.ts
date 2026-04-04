import { and, eq, isNull } from "drizzle-orm";
import type { AppDatabase } from "../app-database.js";
import type { IUserEntity } from "../../../domain/entities/user.js";
import type {
  CreateUserInput,
  IUserRepository,
  UpdateUserInput,
} from "../../../use-cases/ports/user-repository.js";
import { users } from "../schemas/user.js";

type UserRow = typeof users.$inferSelect;

function toEntity(row: UserRow): IUserEntity {
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    password: row.password,
    createdAt: row.createdAt,
    updatedAt: row.updatedAt ?? undefined,
    deletedAt: row.deletedAt ?? undefined,
  };
}

export class DrizzleUserRepository implements IUserRepository {
  constructor(private readonly db: AppDatabase) {}

  async findById(id: number): Promise<IUserEntity | null> {
    const [row] = await this.db
      .select()
      .from(users)
      .where(and(eq(users.id, id), isNull(users.deletedAt)))
      .limit(1);

    return row ? toEntity(row) : null;
  }

  async findByEmail(email: string): Promise<IUserEntity | null> {
    const [row] = await this.db
      .select()
      .from(users)
      .where(
        and(eq(users.email, email.toLowerCase()), isNull(users.deletedAt)),
      )
      .limit(1);

    return row ? toEntity(row) : null;
  }

  async create(input: CreateUserInput): Promise<IUserEntity> {
    const [row] = await this.db
      .insert(users)
      .values({
        name: input.name,
        email: input.email.toLowerCase(),
        password: input.password,
      })
      .returning();

    if (!row) {
      throw new Error("[UserRepository] insert did not return a row");
    }

    return toEntity(row);
  }

  async update(
    id: number,
    input: UpdateUserInput,
  ): Promise<IUserEntity | null> {
    const patch: Partial<{
      name: string;
      email: string;
      password: string;
      updatedAt: Date;
    }> = { updatedAt: new Date() };

    if (input.name !== undefined) patch.name = input.name;
    if (input.email !== undefined) patch.email = input.email.toLowerCase();
    if (input.password !== undefined) patch.password = input.password;

    const [row] = await this.db
      .update(users)
      .set(patch)
      .where(and(eq(users.id, id), isNull(users.deletedAt)))
      .returning();

    return row ? toEntity(row) : null;
  }

  async softDelete(id: number): Promise<void> {
    await this.db
      .update(users)
      .set({ deletedAt: new Date(), updatedAt: new Date() })
      .where(and(eq(users.id, id), isNull(users.deletedAt)));
  }
}
