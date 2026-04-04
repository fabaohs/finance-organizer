import {
  ISignInInputDTO,
  ISignInOutputDTO,
  ISignUpInputDTO,
  ISignUpOutputDTO,
} from "./dtos.js";

export interface IAuthUseCase {
  signIn(input: ISignInInputDTO): Promise<ISignInOutputDTO>;
  signUp(input: ISignUpInputDTO): Promise<ISignUpOutputDTO>;
}
