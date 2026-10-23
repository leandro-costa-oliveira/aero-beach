import { afterEach, describe, expect, it, jest } from "@jest/globals";
import DatabaseService, { prisma } from "../src/services/DatabaseService";

describe("DatabaseService.createJogador", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("registers the first account as administrator", async () => {
    const usuarioCreate = jest.fn<(input: { data: { role: string } }) => Promise<{ id: string }>>().mockResolvedValue({ id: "user-1" });
    const tx = {
      usuario: {
        count: jest.fn<() => Promise<number>>().mockResolvedValue(0),
        findUnique: jest.fn<() => Promise<null>>().mockResolvedValue(null),
        create: usuarioCreate,
      },
      jogador: {
        upsert: jest.fn<() => Promise<{ id: string }>>().mockResolvedValue({ id: "player-1" }),
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
  });

  it("registers later accounts as players", async () => {
    const usuarioCreate = jest.fn<(input: { data: { role: string } }) => Promise<{ id: string }>>().mockResolvedValue({ id: "user-2" });
    const tx = {
      usuario: {
        count: jest.fn<() => Promise<number>>().mockResolvedValue(1),
        findUnique: jest.fn<() => Promise<null>>().mockResolvedValue(null),
        create: usuarioCreate,
      },
      jogador: {
        upsert: jest.fn<() => Promise<{ id: string }>>().mockResolvedValue({ id: "player-2" }),
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
  });
});
