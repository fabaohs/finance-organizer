import type { IUserEntity } from "../../domain/entities/user.js";

export type CreateUserInput = Pick<IUserEntity, "name" | "email" | "password">;

export type UpdateUserInput = Partial<
  Pick<IUserEntity, "name" | "email" | "password">
>;

export interface IUserRepository {
  findById(id: number): Promise<IUserEntity | null>;
  findByEmail(email: string): Promise<IUserEntity | null>;
  create(input: CreateUserInput): Promise<IUserEntity>;
  update(id: number, input: UpdateUserInput): Promise<IUserEntity | null>;
  softDelete(id: number): Promise<void>;
}
