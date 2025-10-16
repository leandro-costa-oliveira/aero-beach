import { Service } from "typedi";
import { PrismaClient, Torneios, Usuarios } from "../../generated/prisma";
import { UserDTO } from "../DTOs/User";

export const prisma = new PrismaClient();

export interface DatabaseInterface {
  getUserByEmail(email: string): Promise<Usuarios | null>;
  createTournament(tournament: Omit<Torneios, "id">): Promise<void>;
}

@Service()
export default class DatabaseService implements DatabaseInterface {
  async getUserByEmail(email: string): Promise<UserDTO | null> {
    return await prisma.usuarios.findFirst({
      where: { email: email },
    });
  }

  async createTournament(tournament: Omit<Torneios, "id">): Promise<void> {
    await prisma.torneios.create({
      data: tournament,
    });
  }
}
