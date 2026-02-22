interface IUserEntity {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
