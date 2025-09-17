import { prisma } from "./DatabaseService";

export class TournamentService {
  
  public async lastTournament() {
    return prisma.torneios.findFirst({
      orderBy: {
        realizado_em: 'desc'
      }
    });
  }

}