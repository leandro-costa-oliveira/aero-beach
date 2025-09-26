import { Service } from 'typedi';
import { prisma } from "./DatabaseService";

@Service()
export class TournamentService {
  async getAll(page: number = 1, perPage: number = 10) {
    const skip = (page - 1) * perPage;

    const [data, total] = await Promise.all([
      prisma.torneios.findMany({
        skip,
        take: perPage,
        orderBy: { dataInicio: "desc" },
      }),
      prisma.torneios.count(),
    ]);

    return {
      data,
      total,
      page,
      perPage,
      totalPages: Math.ceil(total / perPage),
    };
  }

  public async lastTournament() {
    return prisma.torneios.findFirst({
      orderBy: {
        dataInicio: "desc",
      },
    });
  }
}
