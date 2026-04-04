import { FastifyRequest } from "fastify";
import { IAuthUseCase } from "../../../use-cases/auth/types.js";
import {
  ISignInInputDTO,
  ISignUpInputDTO,
} from "../../../use-cases/auth/dtos.js";

export class AuthController {
  private useCase: IAuthUseCase;

  constructor(useCase: IAuthUseCase) {
    this.useCase = useCase;
  }

  public async signIn(request: FastifyRequest) {
    const body = request.body as ISignInInputDTO;
    return await this.useCase.signIn(body);
  }

  public async signUp(request: FastifyRequest) {
    const body = request.body as ISignUpInputDTO;
    return await this.useCase.signUp(body);
  }
}
