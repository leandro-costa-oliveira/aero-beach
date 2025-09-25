import { Service } from 'typedi';
import { prisma } from "../services/DatabaseService";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

@Service()
export class AuthService {

  async login(email: string, password: string) {
    const user = await prisma.usuarios.findFirst({
      where: { email: email }
    });
    if (!user) {
      return null;
    }

    /* TODO:
      Salt seria adicionado em uma task futura no momento
      de adicionar a coluna salt na tabela Usuarios
    */
    const hashPassword = bcrypt.hashSync(password, 10);
    if (hashPassword !== user.senha) {
      return null;
    }

    const accessToken = jwt.sign(
      { userId: user.id, username: user.nome },
      process.env.JWT_SECRET!,
      { expiresIn: '3h' }
    );

    return { accessToken };
  }
}