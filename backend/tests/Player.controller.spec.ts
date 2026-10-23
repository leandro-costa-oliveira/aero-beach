import { describe, it, expect } from "@jest/globals";
import supertest from "supertest";

import app from "../src/app";
import DatabaseService, { prisma } from "../src/services/DatabaseService";
import { tournamentSubscriptionFormFactory } from "./Factories";

describe("Integration tests for jogadores", () => {
  it("completes an existing account created during tournament subscription", async () => {
    const email = `registered-${Date.now()}@test.com`;
    const nome = "Jogador cadastrado";
    const password = "123456";
    const cadastro = await supertest(app).post("/jogadores").send({ nome, email, password });
    expect(cadastro.status).toBe(201);
    const login = await supertest(app).post("/auth/login").send({ email, password });
    expect(login.status).toBe(200);

    const tournament = await new DatabaseService().createTournament({
      nome: "Cadastro Teste",
      federado: false,
      dataInicio: new Date("2500-10-10"),
      dataLimiteInscricao: new Date("2500-10-09"),
    });

    const categoria = await prisma.categoria.create({
      data: {
        torneioId: tournament.id,
        genero: "feminino",
        modalidade: "duplas",
        nivel: "a",
        valorInscricao: 30,
        dataRealizacao: null,
      },
    });

    const inscricao = tournamentSubscriptionFormFactory.build({
      torneioId: tournament.id,
      categoriaId: categoria.id,
    });

    await supertest(app)
      .post(`/torneios/${tournament.id}/inscrever`)
      .set("Authorization", login.body.accessToken)
      .send(inscricao)
      .expect(201);

    const usuarios = await prisma.usuario.findMany({
      where: { email },
    });

    expect(usuarios).toHaveLength(1);
    expect(usuarios[0].senha).not.toBeNull();
    expect(usuarios[0].salt).not.toBeNull();

    const jogador = await prisma.jogador.findUnique({
      where: { email },
    });

    expect(jogador?.usuarioId).toBe(usuarios[0].id);
  });
});
