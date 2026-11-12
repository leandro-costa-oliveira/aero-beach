  import { afterEach, describe, expect, it, jest } from "@jest/globals";
  import DatabaseService, { prisma } from "../src/services/DatabaseService";

  describe("DatabaseService.createJogador", () => {
    afterEach(() => {
      jest.restoreAllMocks();
    });

    it("registers the first account as administrator", async () => {
      const usuarioCreate = jest.fn<(input: { data: { role: string } }) => Promise<{ id: string }>>().mockResolvedValue({ id: "user-1" });
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
});