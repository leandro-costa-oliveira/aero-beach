import { NotFoundError } from "../errors/NotFoundError";
import { Service } from "typedi";
import { Dupla, Inscricao, Torneio } from "../../generated/prisma";
import { TorneioForm } from "../DTOs/TorneioForm";
import { TorneioInscricaoForm } from "../DTOs/TorneioInscricaoForm";
import type {
  Categoria,
  CriarTorneioDTO,
  Torneio as TorneioDTO,
} from "../../../api-schema/TorneioDTO";
import DatabaseService, { prisma } from "./DatabaseService";

@Service()
export class TournamentService {
  constructor(private databaseService: DatabaseService) {}

  private mapCategoria(categoria: {
    id: string;
    torneioId: string;
    genero: any;
    modalidade: any;
    nivel: any;
    valorInscricao: number;
    dataRealizacao: Date | null;
  }): Categoria {
    return {
      id: categoria.id,
      torneioId: categoria.torneioId,
      genero: categoria.genero,
      modalidade: categoria.modalidade,
      nivel: categoria.nivel,
      valorInscricao: categoria.valorInscricao,
      dataRealizacao: categoria.dataRealizacao
        ? categoria.dataRealizacao.toISOString()
        : null,
    };
  }

  private mapTorneio(
    torneio: Torneio,
    categorias: Categoria[] = []
  ): TorneioDTO {
    return {
      id: torneio.id,
      nome: torneio.nome,
      federado: torneio.federado,
      dataInicio: torneio.dataInicio.toISOString(),
      dataLimiteInscricao: torneio.dataLimiteInscricao.toISOString(),
      situacao: torneio.situacao,
      categorias,
    };
  }

  async getAll(page: number = 1, perPage: number = 6) {
    const skip = (page - 1) * perPage;

    const [data, total] = await Promise.all([
      prisma.torneio.findMany({
        skip,
        take: perPage,
        orderBy: { dataInicio: "desc" },
        include: { categorias: true },
      }),
      prisma.torneio.count(),
    ]);

    const tournaments = data.map((torneio) =>
      this.mapTorneio(
        torneio,
        torneio.categorias.map((categoria) =>
          this.mapCategoria(categoria)
        )
      )
    );

    return {
      data: tournaments,
      total,
      page,
      perPage,
      totalPages: Math.ceil(total / perPage),
    };
  }

  public async lastTournament(): Promise<TorneioDTO | null> {
    const torneio = await prisma.torneio.findFirst({
      orderBy: {
        dataInicio: "desc",
      },
      include: { categorias: true },
    });

    if (!torneio) {
      return null;
    }

    return this.mapTorneio(
      torneio,
      torneio.categorias.map((categoria) =>
        this.mapCategoria(categoria)
      )
    );
  }

  async createTournament(tournament: TorneioForm): Promise<TorneioDTO> {
    const createdTournament =
      await this.databaseService.createTournament({
        nome: tournament.nome,
        federado: tournament.federado,
        dataInicio: tournament.dataInicio.toISOString(),
        dataLimiteInscricao:
          tournament.dataLimiteInscricao.toISOString(),
      });

    return this.mapTorneio(createdTournament);
  }

  async subscribeTournamentAsDouble(
    torneioInscricaoForm: TorneioInscricaoForm
  ): Promise<{
    subscriptions: Inscricao[];
    double: Dupla;
  }> {
    if (!torneioInscricaoForm.jogador2) {
      throw new Error("Inscrição de dupla requer dois jogadores.");
    }

    return await this.databaseService.subscribeTournamentAsDouble(
      torneioInscricaoForm
    );
  }

  async getById(id: string): Promise<TorneioDTO> {
    if (!id) {
      throw new Error("ID inválido.");
    }

    const torneio = await prisma.torneio.findUnique({
      where: { id },
      include: { categorias: true },
    });

    if (!torneio) {
      throw new NotFoundError("Torneio não encontrado.");
    }

    return this.mapTorneio(
      torneio,
      torneio.categorias.map((categoria) =>
        this.mapCategoria(categoria)
      )
    );
  }
}