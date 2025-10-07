import { PrismaClient } from "../../generated/prisma";
import { Service } from "typedi";
import { UserDTO } from "../DTOs/User";

export const prisma = new PrismaClient();

export interface DatabaseInterface {
  getUserByEmail(email: string): Promise<UserDTO | null>;
}

@Service()
export default class DatabaseService implements DatabaseInterface {

  async getUserByEmail(email: string): Promise<UserDTO | null> {
    return await prisma.usuarios.findFirst({
      where: { email: email }
    });
  }
}
