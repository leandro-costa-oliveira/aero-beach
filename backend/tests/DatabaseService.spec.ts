import { afterEach, describe, expect, it, jest } from "@jest/globals";
import DatabaseService, { prisma } from "../src/services/DatabaseService";

describe("DatabaseService.getDoubleRanking", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("filters by categoria and periodo and orders by pontuacao desc", async () => {
    const findMany = jest.spyOn(prisma.dupla, "findMany").mockResolvedValue([
      {
        id: "double-1",
        torneioId: "t-1",
        participante1: "p1",
        participante2: "p2",
        categoriaId: "c-1",
        pontuacao: 100,
        jogador1: { nome: "Jogador 1" },
        jogador2: { nome: "Jogador 2" },
        categoria: {
          id: "c-1",
          torneioId: "t-1",
          genero: "feminino",
          modalidade: "duplas",
          nivel: "a",
          valorInscricao: 30,
          dataRealizacao: null,
        },
        torneio: {
          id: "t-1",
          nome: "Torneio 1",
          dataInicio: new Date("2026-01-10"),
          dataLimiteInscricao: new Date("2026-01-09"),
          federado: false,
          situacao: "aberto",
        },
      },
    ] as never);

    const service = new DatabaseService();
    const result = await service.getDoubleRanking("a", "2026");

    expect(findMany).toHaveBeenCalledWith({
      where: {
        categoria: {
          nivel: "a",
        },
        torneio: {
          dataInicio: {
            gte: new Date(2026, 0, 1),
            lt: new Date(2027, 0, 1),
          },
        },
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

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("double-1");
  });

  it("rejects invalid categoria", async () => {
    const service = new DatabaseService();

    await expect(
      service.getDoubleRanking("categoria-invalida", "2026"),
    ).rejects.toThrow("Categoria inválida.");
  });

  it("rejects invalid periodo", async () => {
    const service = new DatabaseService();

    await expect(service.getDoubleRanking("a", "9999")).rejects.toThrow(
      "Período inválido.",
    );
  });
});

describe("DatabaseService.getHistorico", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns only concluded tournaments", async () => {
    const findMany = jest
      .spyOn(prisma.inscricao, "findMany")
      .mockResolvedValue([
        {
          id: "i-1",
          torneioId: "t-1",
          jogadorId: "j-1",
          pago: false,
          dataPagamento: null,
          categoriaId: "c-1",
          torneio: {
            id: "t-1",
            nome: "Torneio Concluído",
            dataInicio: new Date("2022-09-10"),
            dataLimiteInscricao: new Date("2022-09-15"),
            federado: false,
            situacao: "concluido",
          },
          categoria: {
            id: "c-1",
            torneioId: "t-1",
            genero: "masculino",
            modalidade: "duplas",
            nivel: "b",
            valorInscricao: 30,
            dataRealizacao: null,
          },
        },
      ] as never);

    const service = new DatabaseService();
    const result = await service.getHistorico("user-1");

    expect(findMany).toHaveBeenCalledWith({
      where: {
        jogador: {
          usuarioId: "user-1",
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

    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("i-1");
  });
});
