import { TokenService } from "../../infra/token/index.js";
import type { IUserRepository } from "../ports/user-repository.js";
import {
  ISignInInputDTO,
  ISignInOutputDTO,
  ISignUpInputDTO,
  ISignUpOutputDTO,
} from "./dtos.js";
import { IAuthUseCase } from "./types.js";

export class AuthUseCase implements IAuthUseCase {
  constructor(
    private readonly userRepository: IUserRepository,
    private readonly tokenService: TokenService,
  ) {}

  // TODO: implementar
  public async signIn(input: ISignInInputDTO): Promise<ISignInOutputDTO> {
    return {
      accessToken: "",
      refreshToken: "",
      expiresIn: 0,
    };
  }

  public async signUp(input: ISignUpInputDTO): Promise<ISignUpOutputDTO> {
    const userExists = await this.userRepository.findByEmail(input.email);

    if (userExists) {
      // todo: retornar um erro de dominio
      throw new Error("User already exists");
    }

    const user = await this.userRepository.create(input);

    const accessToken = await this.tokenService.generateAccessToken(user.id);
    const refreshToken = await this.tokenService.generateRefreshToken(user.id);

    return {
      accessToken: accessToken,
      refreshToken: refreshToken,
      expiresIn: 0, // todo: implementar expiresIn
    };
  }
}
