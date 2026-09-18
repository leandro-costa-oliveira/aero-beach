import { describe, expect, it } from "@jest/globals";
import DatabaseService, { prisma } from "../src/services/DatabaseService";

describe("Migration regression", () => {
  it("preserves category associations for existing doubles and subscriptions", async () => {
    const db = new DatabaseService();

    const tournament = await db.createTournament({
      nome: "Migration Test",
      federado: false,
      dataInicio: new Date("2500-01-10"),
      dataLimiteInscricao: new Date("2500-01-09"),
    });

    const categoria = await prisma.categoria.create({
      data: {
        torneioId: tournament.id,
        genero: "feminino",
        modalidade: "duplas",
        nivel: "a",
        valorInscricao: 50,
        dataRealizacao: null,
      },
    });

    const jogador1 = await prisma.jogador.create({
      data: {
        nome: "Jogador 1",
        email: "migration-j1@test.com",
      },
    });

    const jogador2 = await prisma.jogador.create({
      data: {
        nome: "Jogador 2",
        email: "migration-j2@test.com",
      },
    });

    const duplaCriada = await prisma.dupla.create({
      data: {
        torneioId: tournament.id,
        participante1: jogador1.id,
        participante2: jogador2.id,
        categoriaId: categoria.id,
      },
    });

    const inscricaoCriada = await prisma.inscricao.create({
      data: {
        torneioId: tournament.id,
        jogadorId: jogador1.id,
        categoriaId: categoria.id,
      },
    });

    const dupla = await prisma.dupla.findUnique({
      where: { id: duplaCriada.id },
      include: {
        categoria: true,
      },
    });

    const inscricao = await prisma.inscricao.findUnique({
      where: { id: inscricaoCriada.id },
      include: {
        categoria: true,
      },
    });

    expect(dupla).not.toBeNull();
    expect(inscricao).not.toBeNull();

    expect(dupla?.categoria).not.toBeNull();
    expect(inscricao?.categoria).not.toBeNull();

    expect(dupla?.categoria.id).toBe(categoria.id);
    expect(inscricao?.categoria?.id).toBe(categoria.id);
  });
});