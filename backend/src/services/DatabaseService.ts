import { Service } from "typedi";
import { PrismaClient, Usuarios } from "../../generated/prisma";
import { TorneioForm } from "../DTOs/TorneioForm";

export const prisma = new PrismaClient();

@Service()
export default class DatabaseService {

  async getUserByEmail(email: string): Promise<Usuarios | null> {
    return await prisma.usuarios.findFirst({
      where: { email: email },
    });
  }

  async createTournament(tournament: TorneioForm): Promise<void> {
    await prisma.torneios.create({
      data: tournament,
    });
  }
}
