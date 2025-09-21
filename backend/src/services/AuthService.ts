import * as crypto from "crypto";
import jwt from "jsonwebtoken";
import { UserService } from "./UserService";
import 'dotenv/config'

export class AuthService {

  private userService: UserService;
  constructor() {
    this.userService = new UserService();
  }

  async authenticateUser(email: string, password: string): Promise<string | null> {

    const user = await this.userService.findUserByEmail(email);

    if (!user) {
      return null;
    }

    const hashPassword = crypto
      .pbkdf2Sync(password, process.env.AUTH_SALT!, 1000, 64, `sha512`)
      .toString(`hex`);

    // a coluna "senha" na tabela "Usuarios" será implementada na task #20
    if (hashPassword !== user.senha) {
      return null;
    }

    const accessToken = jwt.sign(
      { userId: user.id, username: user.nome },
      process.env.JWT_SECRET!,
      { expiresIn: '3h' }
    );

    return accessToken;
  }
}