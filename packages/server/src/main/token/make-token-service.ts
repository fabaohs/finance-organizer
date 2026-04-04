import { TokenService } from "../../infra/token";

export function makeTokenService() {
  return new TokenService();
}
