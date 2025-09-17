import { prisma } from "./DatabaseService";

export class TournmentService {
  
  public async lastTournament() {
    return prisma.torneio.findFirst({
      orderBy: {
        realizado_em: 'desc'
      }
    });
  }

}