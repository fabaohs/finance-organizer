import jwt from "jsonwebtoken";
import ENV from "../env";

export class TokenService {
  private readonly JWT_SECRET = ENV.JWT_SECRET!;
  private readonly JWT_ACCESS_TOKEN_EXPIRATION =
    ENV.JWT_ACCESS_TOKEN_EXPIRATION!;
  private readonly JWT_REFRESH_TOKEN_EXPIRATION =
    ENV.JWT_REFRESH_TOKEN_EXPIRATION!;

  public async generateAccessToken(userId: number): Promise<string> {
    return jwt.sign({ userId }, this.JWT_SECRET, {
      expiresIn: this.JWT_ACCESS_TOKEN_EXPIRATION,
    });
  }

  public async generateRefreshToken(userId: number): Promise<string> {
    return jwt.sign({ userId }, this.JWT_SECRET, {
      expiresIn: this.JWT_REFRESH_TOKEN_EXPIRATION,
    });
  }

  public async verifyAccessToken(token: string) {
    return jwt.verify(token, this.JWT_SECRET);
  }

  public async verifyRefreshToken(token: string) {
    return jwt.verify(token, this.JWT_SECRET);
  }
}
