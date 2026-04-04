export interface ISignInInputDTO {
  email: string;
  password: string;
}

export interface ISignInOutputDTO {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}

export interface ISignUpInputDTO {
  name: string;
  email: string;
  password: string;
}

export interface ISignUpOutputDTO {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
}
