import { prisma } from "./DatabaseService";

export class TournamentService {
  
  public async lastTournament() {
    return prisma.torneio.findFirst({
      orderBy: {
        realizado_em: 'desc'
      }
    });
  }

}