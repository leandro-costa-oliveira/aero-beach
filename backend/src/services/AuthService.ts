import { Service } from 'typedi';
import DatabaseService, { DatabaseInterface } from "../services/DatabaseService";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import 'dotenv/config'
import { CredentialsDTO } from '../DTOs/Crendentials';

@Service()
export class AuthService {

  constructor(
    private databaseService: DatabaseInterface = new DatabaseService()
  ) {}

  async login(email: string, password: string) {
    const user = await this.databaseService.getUserByEmail(email);
    if (!user) {
      return null;
    }
    if (!user.salt) {
      /*
        TODO: Necessário serviço para atualizar o salt do usuário caso não exista,
        para evitar erro durante o hash
      */
      return null;
    }

    const hashPassword = bcrypt.hashSync(password, user.salt);
    if (hashPassword !== user.senha) {
      return null;
    }

    const credentials: CredentialsDTO = {
      userId: user.id,
      username: user.nome
    }
    const accessToken = jwt.sign(
      credentials,
      process.env.JWT_SECRET!,
      { expiresIn: '3h' }
    );

    return accessToken;
  }

  async getCredentials(authorizationToken: string): Promise<CredentialsDTO | null> {
    const decoded = jwt.verify(authorizationToken, process.env.JWT_SECRET!)
    if (!decoded || typeof decoded === 'string') {
      return null;
    }
    const { userId, username } = decoded;
    if (!userId || !username) {
      return null;
    }
    return { userId, username };
  }
} 