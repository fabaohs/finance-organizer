export enum ExpenseTypeEnum {
  FIXED = "fixed",
  VARIABLE = "variable",
}

export interface IExpenseEntity {
  id: number;
  userId: number;
  name: string;
  amount: number;
  category: string;
  type: ExpenseTypeEnum;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
