import { afterEach, describe, expect, it, jest } from "@jest/globals";
import DatabaseService, { prisma } from "../src/services/DatabaseService";

describe("DatabaseService.createJogador", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("registers the first account as administrator", async () => {
    const usuarioCreate = jest
      .fn<(input: { data: { role: string } }) => Promise<{ id: string }>>()
      .mockResolvedValue({ id: "user-1" });

    const arenaCreate = jest.fn<() => Promise<{ id: number }>>();
    arenaCreate.mockResolvedValue({ id: 1 });

    const tx = {
      usuario: {
        count: jest.fn(async () => 0),
        findUnique: jest.fn(async () => null),
        create: usuarioCreate,
      },
      jogador: {
        upsert: jest.fn(async () => ({ id: "player-1" })),
      },
      arena: {
        create: arenaCreate,
      },
    };

    jest.spyOn(prisma, "$transaction").mockImplementation(
      ((callback: (transaction: typeof tx) => Promise<unknown>) => callback(tx)) as never,
    );

    await new DatabaseService().createJogador({
      nome: "Primeiro usuário",
      email: "admin@example.com",
      senha: "hash",
      salt: "salt",
    });

    expect(usuarioCreate).toHaveBeenCalledWith({
      data: expect.objectContaining({ role: "admin" }),
    });
    expect(arenaCreate).toHaveBeenCalled();
  });

  it("registers later accounts as players", async () => {
    const usuarioCreate = jest
      .fn<(input: { data: { role: string } }) => Promise<{ id: string }>>()
      .mockResolvedValue({ id: "user-2" });

    const arenaCreate = jest
      .fn<() => Promise<{ id: number }>>()
      .mockResolvedValue({ id: 1 });

    const tx = {
      usuario: {
        count: jest.fn(async () => 1),
        findUnique: jest.fn(async () => null),
        create: usuarioCreate,
      },
      jogador: {
        upsert: jest.fn(async () => ({ id: "player-2" })),
      },
      arena: {
        create: arenaCreate,
      },
    };

    jest.spyOn(prisma, "$transaction").mockImplementation(
      ((callback: (transaction: typeof tx) => Promise<unknown>) => callback(tx)) as never,
    );

    await new DatabaseService().createJogador({
      nome: "Próximo jogador",
      email: "player@example.com",
      senha: "hash",
      salt: "salt",
    });

    expect(usuarioCreate).toHaveBeenCalledWith({
      data: expect.objectContaining({ role: "player" }),
    });

    expect(arenaCreate).not.toHaveBeenCalled();
  });

  it("rejects duplicated email", async () => {
    const tx = {
      usuario: {
        count: jest.fn(async () => 1),
        findUnique: jest.fn(async () => ({ id: "user-1" })),
        create: jest.fn(),
      },
      jogador: {
        upsert: jest.fn(),
      },
      arena: {
        create: jest.fn(),
      },
    };

    jest.spyOn(prisma, "$transaction").mockImplementation(
      ((callback: (transaction: typeof tx) => Promise<unknown>) => callback(tx)) as never,
    );

    await expect(
      new DatabaseService().createJogador({
        nome: "Teste",
        email: "admin@example.com",
        senha: "hash",
        salt: "salt",
      }),
    ).rejects.toThrow("E-mail já cadastrado.");
  });
});

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

    await expect(service.getDoubleRanking("categoria-invalida", "2026")).rejects.toThrow(
      "Categoria inválida.",
    );
  });

  it("rejects invalid periodo", async () => {
    const service = new DatabaseService();

    await expect(service.getDoubleRanking("a", "9999")).rejects.toThrow("Período inválido.");
  });
});

describe("DatabaseService.getHistorico", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("returns only concluded tournaments", async () => {
    const findMany = jest.spyOn(prisma.inscricao, "findMany").mockResolvedValue([
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