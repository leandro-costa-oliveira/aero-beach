import { Service } from 'typedi';
import DatabaseService from "../services/DatabaseService";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'
import { CredentialsDTO } from '../DTOs/Crendentials';
import { SetupForm } from '../DTOs/SetupForm';

@Service()
export class AuthService {
  constructor(
    private databaseService: DatabaseService
  ) {}

  async isSetupRequired(): Promise<boolean> {
    return !(await this.databaseService.hasAdmin());
  }

  async initializeSetup(form: SetupForm) {
    const salt = await bcrypt.genSalt();
    const senha = await bcrypt.hash(form.senhaAdministrador, salt);
    await this.databaseService.initializeSetup({
      nomeAdministrador: form.nomeAdministrador.trim(),
      emailAdministrador: form.emailAdministrador.trim().toLowerCase(),
      senha,
      salt,
      nomeArena: form.nomeArena.trim(),
      enderecoArena: form.enderecoArena?.trim(),
    });
  }

  async login(email: string, password: string) {
    const user = await this.databaseService.getUserByEmail(email);

    if (!user) {
      return null;
    }

    if (!user.salt) {
      return null;
    }

    const hashPassword = bcrypt.hashSync(password, user.salt);

    if (hashPassword !== user.senha) {
      return null;
    }

    const credentials: CredentialsDTO = {
      userId: user.id,
      username: user.nome,
      role: user.role,
    };

    const accessToken = jwt.sign(
      credentials,
      process.env.JWT_SECRET!,
      { expiresIn: "3h" }
    );

    return {
      accessToken,
      role: user.role,
    };
  }

  async isAdmin(
    authorizationToken: string
  ): Promise<boolean> {
    const credentials = await this.getCredentials(
      authorizationToken
    );

    return credentials?.role === "admin";
  }

  async getCredentials(
    authorizationToken: string
  ): Promise<CredentialsDTO | null> {
    try {
      const decoded = jwt.verify(
        authorizationToken,
        process.env.JWT_SECRET!
      );

      if (typeof decoded === "string") {
        return null;
      }

      const { userId, username, role } = decoded;

      if (!userId || !username || !role) {
        return null;
      }

      return {
        userId,
        username,
        role,
      };
    } catch {
      return null;
    }
  }
}
