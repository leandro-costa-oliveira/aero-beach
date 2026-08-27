import { BadRequestError, NotFoundError } from "routing-controllers";
import { Service } from "typedi";
import { Dupla, Inscricao, PrismaClient, Torneio, Usuario } from "../../generated/prisma";
import { TorneioForm } from "../DTOs/TorneioForm";
import { TorneioInscricaoForm } from "../DTOs/TorneioInscricaoForm";

export const prisma = new PrismaClient();

@Service()
export default class DatabaseService {
  async getUserByEmail(email: string): Promise<Usuario | null> {
    return await prisma.usuario.findFirst({
      where: { email: email },
    });
  }

  async createTournament(tournament: TorneioForm): Promise<Torneio> {
    return await prisma.torneio.create({
      data: tournament,
    });
  }

  async subscribeTournamentAsDouble(tournamentForm: TorneioInscricaoForm): Promise<{
    subscriptions: Inscricao[];
    double: Dupla;
  }> {
    if (!tournamentForm.jogador2) {
      throw new BadRequestError("É preciso fornecer os dados do segundo jogador para inscrição em dupla.");
    }

    const result = await prisma.$transaction(async (tx) => {
      const tournament = await tx.torneio.findUnique({
        where: { id: tournamentForm.torneioId },
      });
      if (!tournament) {
        throw new NotFoundError("Torneio não encontrado.");
      }
      if (new Date() > tournament.dataLimiteInscricao) {
        throw new BadRequestError("O prazo de inscrição para este torneio já expirou.");
      }

      await tx.usuario.upsert({
        where: { email: tournamentForm.jogador1.email },
        update: {},
        create: {
          nome: tournamentForm.jogador1.nome,
          email: tournamentForm.jogador1.email,
          role: "player",
        },
      });

      await tx.usuario.upsert({
        where: { email: tournamentForm.jogador2.email },
        update: {},
        create: {
          nome: tournamentForm.jogador2.nome,
          email: tournamentForm.jogador2.email,
          role: "player",
        },
      });

      const player1 = await tx.jogador.upsert({
        where: { email: tournamentForm.jogador1.email },
        update: {},
        create: {
          nome: tournamentForm.jogador1.nome,
          email: tournamentForm.jogador1.email,
        },
      });

      const player2 = await tx.jogador.upsert({
        where: { email: tournamentForm.jogador2.email },
        update: {},
        create: {
          nome: tournamentForm.jogador2.nome,
          email: tournamentForm.jogador2.email,
        },
      });

      const inscritos = await tx.inscricao.findMany({
        where: {
          torneioId: tournamentForm.torneioId,
          categoriaId: tournamentForm.categoriaId,
          jogadorId: { in: [player1.id, player2.id] },
        },
      });
      if (inscritos.length > 0) {
        throw new BadRequestError("Um ou mais jogadores já estão inscritos nessa categoria");
      }

      const inscricao1 = await tx.inscricao.create({
        data: {
          torneioId: tournamentForm.torneioId,
          jogadorId: player1.id,
          categoriaId: tournamentForm.categoriaId,
        },
      });
      const inscricao2 = await tx.inscricao.create({
        data: {
          torneioId: tournamentForm.torneioId,
          jogadorId: player2.id,
          categoriaId: tournamentForm.categoriaId,
        },
      });

      const double = await tx.dupla.create({
        data: {
          torneioId: tournamentForm.torneioId,
          categoriaId: tournamentForm.categoriaId,
          participante1: player1.id,
          participante2: player2.id,
        },
      });

      const subscriptions = [inscricao1, inscricao2];

      return { subscriptions, double };
    });

    return {
      subscriptions: result.subscriptions,
      double: result.double,
    };
  }
}
