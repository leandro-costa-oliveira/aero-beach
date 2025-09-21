import { prisma } from "./DatabaseService";

export class UserService {
  async findUserByEmail(email: string) {
    // a tabela "Usuarios" será implementada na task #20
    const user = await prisma.usuarios.findFirst({
      where: { email: email }
    });
    return user;
  }
}