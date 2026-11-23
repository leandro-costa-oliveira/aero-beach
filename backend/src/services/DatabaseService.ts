import { BadRequestError } from "../errors/BadRequestError";
import { NotFoundError } from "../errors/NotFoundError";
import { Service } from "typedi";
import {
  Categoria,
  CategoriaTorneio,
  Dupla,
  Inscricao,
  Prisma,
  PrismaClient,
  Torneio,
  Usuario,
} from "../../generated/prisma";
import { TorneioForm } from "../DTOs/TorneioForm";
import { TorneioInscricaoForm } from "../DTOs/TorneioInscricaoForm";
import type { CriarCategoriaDTO } from "@aero-beach/api-schema/TorneioDTO";

export const prisma = new PrismaClient();

@Service()
export default class DatabaseService {
  async getUserByEmail(email: string): Promise<Usuario | null> {
    return prisma.usuario.findUnique({
      where: { email },
    });
  }

  async createTournament(tournament: TorneioForm): Promise<Torneio> {
    return prisma.torneio.create({
      data: tournament,
    });
  }

  async createCategory(data: CriarCategoriaDTO): Promise<Categoria> {
    const torneio = await prisma.torneio.findUnique({
      where: { id: data.torneioId },
    });

    if (!torneio) {
      throw new NotFoundError("Torneio não encontrado.");
    }

    const categoriaExistente = await prisma.categoria.findUnique({
      where: {
        torneioId_genero_modalidade_nivel: {
          torneioId: data.torneioId,
          genero: data.genero,
          modalidade: data.modalidade,
          nivel: data.nivel,
        },
      },
    });

    if (categoriaExistente) {
      throw new BadRequestError("Categoria já cadastrada.");
    }

    try {
      return await prisma.categoria.create({
        data: {
          torneioId: data.torneioId,
          genero: data.genero,
          modalidade: data.modalidade,
          nivel: data.nivel,
          valorInscricao: data.valorInscricao,
          dataRealizacao: data.dataRealizacao
            ? new Date(data.dataRealizacao)
            : null,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        throw new BadRequestError("Categoria já cadastrada.");
      }

      throw error;
    }
  }

  async getPlayerSubscriptions(userId: string) {
    return prisma.inscricao.findMany({
      where: {
        jogador: {
          usuarioId: userId,
        },
      },
      include: {
        torneio: true,
        categoria: true,
      },
      orderBy: {
        torneio: {
          dataInicio: "asc",
        },
      },
    });
  }

  async getHistorico(userId: string) {
    return prisma.inscricao.findMany({
      where: {
        jogador: {
          usuarioId: userId,
        },
        torneio: {
          situacao: "concluido",
        },
      },
      include: {
        torneio: true,
        categoria: true,
      },
      orderBy: {
        torneio: {
          dataInicio: "desc",
        },
      },
    });
  }

  async subscribeTournament(
    userId: string,
    torneioId: string,
    tournamentForm: TorneioInscricaoForm,
  ): Promise<{
    subscriptions: Inscricao[];
    double?: Dupla;
  }> {
    const result = await prisma.$transaction(async (tx) => {
      const tournament = await tx.torneio.findUnique({
        where: { id: torneioId },
      });

      if (!tournament) {
        throw new NotFoundError("Torneio não encontrado.");
      }

      if (new Date() > tournament.dataLimiteInscricao) {
        throw new BadRequestError(
          "O prazo de inscrição para este torneio já expirou.",
        );
      }

      const category = await tx.categoria.findUnique({
        where: { id: tournamentForm.categoriaId },
      });

      if (!category || category.torneioId !== torneioId) {
        throw new BadRequestError("Categoria inválida para este torneio.");
      }

      if (
        (category.modalidade === "duplas") !==
        Boolean(tournamentForm.jogador2)
      ) {
        throw new BadRequestError(
          category.modalidade === "duplas"
            ? "Informe os dados da dupla."
            : "Esta categoria é individual.",
        );
      }

      const player1 = await tx.jogador.findUnique({
        where: { usuarioId: userId },
      });

      if (!player1) {
        throw new NotFoundError("Jogador vinculado à conta não encontrado.");
      }

      const duplicate = await tx.inscricao.findFirst({
        where: {
          torneioId,
          categoriaId: tournamentForm.categoriaId,
          jogadorId: player1.id,
        },
      });

      if (duplicate) {
        throw new BadRequestError("Você já está inscrito nesta categoria.");
      }

      if (!tournamentForm.jogador2) {
        const subscription = await tx.inscricao.create({
          data: {
            torneioId,
            jogadorId: player1.id,
            categoriaId: tournamentForm.categoriaId,
          },
        });

        return { subscriptions: [subscription] };
      }

      if (
        tournamentForm.jogador2.email.toLowerCase() ===
        player1.email.toLowerCase()
      ) {
        throw new BadRequestError("O parceiro deve ser outro jogador.");
      }

      const player2 = await tx.jogador.upsert({
        where: {
          email: tournamentForm.jogador2.email,
        },
        update: {},
        create: {
          nome: tournamentForm.jogador2.nome,
          email: tournamentForm.jogador2.email,
        },
      });

      const inscritos = await tx.inscricao.findMany({
        where: {
          torneioId,
          categoriaId: tournamentForm.categoriaId,
          jogadorId: { in: [player1.id, player2.id] },
        },
      });

      if (inscritos.length > 0) {
        throw new BadRequestError(
          "Um ou mais jogadores já estão inscritos nessa categoria",
        );
      }

      const inscricao1 = await tx.inscricao.create({
        data: {
          torneioId,
          jogadorId: player1.id,
          categoriaId: tournamentForm.categoriaId,
        },
      });

      const inscricao2 = await tx.inscricao.create({
        data: {
          torneioId,
          jogadorId: player2.id,
          categoriaId: tournamentForm.categoriaId,
        },
      });

      const double = await tx.dupla.create({
        data: {
          torneioId,
          categoriaId: tournamentForm.categoriaId,
          participante1: player1.id,
          participante2: player2.id,
        },
      });

      return {
        subscriptions: [inscricao1, inscricao2],
        double,
      };
    });

    return {
      subscriptions: result.subscriptions,
      double: result.double,
    };
  }

  async getDoubleRanking(categoria?: string, periodo?: string) {
    const categoriasValidas = Object.values(CategoriaTorneio);

    if (
      categoria &&
      !categoriasValidas.includes(categoria as CategoriaTorneio)
    ) {
      throw new BadRequestError("Categoria inválida.");
    }

    let ano: number | undefined;

    if (periodo) {
      if (!/^\d{4}$/.test(periodo)) {
        throw new BadRequestError("Período inválido.");
      }

      ano = Number(periodo);

      if (ano < 1900 || ano > 2100) {
        throw new BadRequestError("Período inválido.");
      }
    }

    return prisma.dupla.findMany({
      where: {
        ...(categoria && {
          categoria: {
            nivel: categoria as CategoriaTorneio,
          },
        }),
        ...(periodo && {
          torneio: {
            dataInicio: {
              gte: new Date(ano!, 0, 1),
              lt: new Date(ano! + 1, 0, 1),
            },
          },
        }),
      },
      include: {
        jogador1: { select: { nome: true } },
        jogador2: { select: { nome: true } },
        categoria: true,
        torneio: true,
      },
      orderBy: {
        pontuacao: "desc",
      },
    });
  }
}
