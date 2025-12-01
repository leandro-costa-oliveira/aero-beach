import { BadRequestError } from "routing-controllers";
import { Service } from "typedi";
import { TorneioForm } from "../DTOs/TorneioForm";
import DatabaseService, { prisma } from "./DatabaseService";
import { TorneioInscricaoForm } from '../DTOs/TorneioInscricaoForm';
import { Duplas, Inscricoes } from '../../generated/prisma';

@Service()
export class TournamentService {
  constructor(private databaseService: DatabaseService) {}

  async getAll(page: number = 1, perPage: number = 6) {
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

  // TODO: Retornar o torneio criado ao invés de uma mensagem fixa
  async createTournament(tournament: TorneioForm): Promise<string> {
    if (tournament.dataInicio > tournament.dataRealizacao!) {
      throw new BadRequestError("Data de início não pode ser maior que a data de realização do torneio.");
    }
    if (tournament.dataLimiteInscricao > tournament.dataRealizacao!) {
      throw new BadRequestError("Data limite de inscrição não pode ser maior que a data de realização do torneio.");
    }
    if (tournament.dataLimiteInscricao < tournament.dataInicio) {
      throw new BadRequestError("Data limite de inscrição não pode ser menor que a data de início do torneio.");
    }

    await this.databaseService.createTournament(tournament);
    return "Torneio criado com sucesso!";
  }

  async subscribeTournamentAsDouble(torneioInscricaoForm: TorneioInscricaoForm): Promise<{
    subscriptions: Inscricoes[];
    double: Duplas;
  }> {
    if (!torneioInscricaoForm.jogador2) {
      throw new BadRequestError("Inscrição de dupla requer dois jogadores.");
    }
    return await this.databaseService.subscribeTournamentAsDouble(torneioInscricaoForm);
  }

   async getById(id: string) {
    if (!id || null) {
      throw new BadRequestError("ID inválido.");
    }

    const torneio = await prisma.torneios.findUnique({
      where: { id: id},
    });

    if (!torneio) {
      throw new BadRequestError("Torneio não encontrado.");
    }

    return torneio;
  }
}

