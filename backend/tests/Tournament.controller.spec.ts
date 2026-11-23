import { beforeAll, describe, expect, it } from "@jest/globals";
import { randomUUID } from "node:crypto";
import bcrypt from "bcrypt";
import supertest from "supertest";

import app from "../src/app";
import {
  tournamentFormFactory,
  tournamentSubscriptionFormFactory,
} from "./Factories";
import { Categoria, Torneio } from "../generated/prisma";
import { TorneioForm } from "../src/DTOs/TorneioForm";
import DatabaseService, { prisma } from "../src/services/DatabaseService";

let tournamentOngoing: Torneio;
let categoryDouble: Categoria;
let categoryIndividual: Categoria;
let tournamentDone: Torneio;
let tournamentCategory: Torneio;

async function createPlayerToken(email = `player-${randomUUID()}@test.com`) {
  const password = "player-password";
  const salt = bcrypt.genSaltSync(10);
  const senha = bcrypt.hashSync(password, salt);

  const user = await prisma.usuario.create({
    data: { nome: "Jogador de teste", email, senha, salt, role: "player" },
  });

  await prisma.jogador.upsert({
    where: { email },
    update: { usuarioId: user.id },
    create: { nome: user.nome, email, usuarioId: user.id },
  });

  const response = await supertest(app).post("/auth/login").send({ email, password });
  return response.body.accessToken as string;
}

describe("Integration tests for tournaments/torneios", () => {
  it("creates a tournament with valid data", async () => {
    const data: TorneioForm = tournamentFormFactory.build();

    const response = await supertest(app)
      .post("/torneios")
      .set("Content-Type", "application/json")
      .send(data);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Torneio criado com sucesso!");
  });

  it("returns 400 when dataLimiteInscricao is later than dataInicio", async () => {
    const data: TorneioForm = tournamentFormFactory.build({
      dataInicio: new Date("2023-10-10"),
      dataLimiteInscricao: new Date("2023-10-20"),
    });

    const response = await supertest(app)
      .post("/torneios")
      .set("Content-Type", "application/json")
      .send(data);

    expect(response.status).toBe(400);
    expect(response.body.error.message).toBe(
      "Data limite de inscrição não pode ser maior que a data de início do torneio.",
    );
  });
});

describe("Integration tests for tournaments/:id/inscrever", () => {
  beforeAll(async () => {
    tournamentOngoing = await new DatabaseService().createTournament({
      nome: "Torneio Ongoing",
      federado: false,
      dataInicio: new Date("1500-11-10"),
      dataLimiteInscricao: new Date("2500-11-19"),
    });

    categoryDouble = await prisma.categoria.create({
      data: {
        torneioId: tournamentOngoing.id,
        genero: "feminino",
        modalidade: "duplas",
        nivel: "a",
        valorInscricao: 30,
        dataRealizacao: null,
      },
    });

    categoryIndividual = await prisma.categoria.create({
      data: {
        torneioId: tournamentOngoing.id,
        genero: "feminino",
        modalidade: "simples",
        nivel: "b",
        valorInscricao: 20,
        dataRealizacao: null,
      },
    });

    tournamentDone = await new DatabaseService().createTournament({
      nome: "Torneio Done",
      federado: false,
      dataInicio: new Date("2022-09-10"),
      dataLimiteInscricao: new Date("2022-09-15"),
    });
  });

  it("subscribes to a tournament with valid data", async () => {
    const playerToken = await createPlayerToken();
    const subscriptionData = tournamentSubscriptionFormFactory.build({
      torneioId: tournamentOngoing.id,
      categoriaId: categoryDouble.id,
    });

    const response = await supertest(app)
      .post(`/torneios/${tournamentOngoing.id}/inscrever`)
      .set("Authorization", playerToken)
      .set("Content-Type", "application/json")
      .send(subscriptionData);

    expect(response.status).toBe(201);
    expect(response.body.message).toBe("Inscrição realizada com sucesso!");
  });

  it("allows a logged in player to subscribe alone to an individual category", async () => {
    const playerToken = await createPlayerToken();

    const response = await supertest(app)
      .post(`/torneios/${tournamentOngoing.id}/inscrever`)
      .set("Authorization", playerToken)
      .send({ categoriaId: categoryIndividual.id });

    expect(response.status).toBe(201);
  });

  it("returns 401 when there is no player token", async () => {
    const response = await supertest(app)
      .post(`/torneios/${tournamentOngoing.id}/inscrever`)
      .send({ categoriaId: categoryIndividual.id });

    expect(response.status).toBe(401);
  });

  it("returns 400 when trying to subscribe a team with only one player", async () => {
    const playerToken = await createPlayerToken();
    const subscriptionData = tournamentSubscriptionFormFactory.build({
      torneioId: tournamentOngoing.id,
      categoriaId: categoryDouble.id,
      jogador2: undefined,
    });

    const response = await supertest(app)
      .post(`/torneios/${tournamentOngoing.id}/inscrever`)
      .set("Authorization", playerToken)
      .set("Content-Type", "application/json")
      .send(subscriptionData);

    expect(response.status).toBe(400);
    expect(response.body.error.message).toBe("Informe os dados da dupla.");
  });

  it("returns 404 when trying to subscribe to a non-existing tournament", async () => {
    const playerToken = await createPlayerToken();
    const subscriptionData = tournamentSubscriptionFormFactory.build({
      torneioId: randomUUID(),
    });

    const response = await supertest(app)
      .post(`/torneios/${subscriptionData.torneioId}/inscrever`)
      .set("Authorization", playerToken)
      .set("Content-Type", "application/json")
      .send(subscriptionData);

    expect(response.status).toBe(404);
    expect(response.body.error.message).toBe("Torneio não encontrado.");
  });

  it("returns 400 when trying to subscribe after the deadline", async () => {
    const playerToken = await createPlayerToken();
    const subscriptionData = tournamentSubscriptionFormFactory.build({
      torneioId: tournamentDone.id,
    });

    const response = await supertest(app)
      .post(`/torneios/${tournamentDone.id}/inscrever`)
      .set("Authorization", playerToken)
      .set("Content-Type", "application/json")
      .send(subscriptionData);

    expect(response.status).toBe(400);
    expect(response.body.error.message).toBe(
      "O prazo de inscrição para este torneio já expirou.",
    );
  });

  it("returns 400 when trying to subscribe a team with already subscribed players", async () => {
    const playerToken = await createPlayerToken();
    const subscriptionData = tournamentSubscriptionFormFactory.build({
      torneioId: tournamentOngoing.id,
      categoriaId: categoryDouble.id,
    });

    const firstResponse = await supertest(app)
      .post(`/torneios/${tournamentOngoing.id}/inscrever`)
      .set("Authorization", playerToken)
      .set("Content-Type", "application/json")
      .send(subscriptionData);

    expect(firstResponse.status).toBe(201);
    expect(firstResponse.body.message).toBe("Inscrição realizada com sucesso!");

    const secondSubscriptionData = tournamentSubscriptionFormFactory.build({
      torneioId: tournamentOngoing.id,
      jogador1: subscriptionData.jogador1,
      categoriaId: categoryDouble.id,
    });

    const secondResponse = await supertest(app)
      .post(`/torneios/${tournamentOngoing.id}/inscrever`)
      .set("Authorization", playerToken)
      .set("Content-Type", "application/json")
      .send(secondSubscriptionData);

    expect(secondResponse.status).toBe(400);
    expect(secondResponse.body.error.message).toBe(
      "Você já está inscrito nesta categoria.",
    );

    const thirdSubscriptionData = tournamentSubscriptionFormFactory.build({
      torneioId: tournamentOngoing.id,
      jogador2: subscriptionData.jogador2,
      categoriaId: categoryDouble.id,
    });

    const thirdResponse = await supertest(app)
      .post(`/torneios/${tournamentOngoing.id}/inscrever`)
      .set("Authorization", await createPlayerToken(subscriptionData.jogador2.email))
      .set("Content-Type", "application/json")
      .send(thirdSubscriptionData);

    expect(thirdResponse.status).toBe(400);
    expect(thirdResponse.body.error.message).toBe(
      "Você já está inscrito nesta categoria.",
    );
  });
});

describe("Integration tests for categories/categorias", () => {
  let adminToken: string;
  let tournamentCategoryLocal: Torneio;

  beforeAll(async () => {
    tournamentCategoryLocal = await new DatabaseService().createTournament({
      nome: "Torneio Categoria Teste",
      federado: false,
      dataInicio: new Date("2025-10-10"),
      dataLimiteInscricao: new Date("2025-10-09"),
    });

    const senha = "admin123";

    const adminExistente = await prisma.usuario.findUnique({
      where: { email: "admin@test.com" },
    });

    if (!adminExistente) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(senha, salt);

      await prisma.usuario.create({
        data: {
          nome: "Administrador",
          email: "admin@test.com",
          senha: hash,
          salt,
          role: "admin",
        },
      });
    }

    const login = await supertest(app)
      .post("/auth/login")
      .set("Content-Type", "application/json")
      .send({
        email: "admin@test.com",
        password: senha,
      });

    expect(login.status).toBe(200);
    adminToken = login.body.accessToken;
  });

  it("accepts null as dataRealizacao", async () => {
    const data = {
      torneioId: tournamentCategoryLocal.id,
      genero: "feminino",
      modalidade: "duplas",
      nivel: "a",
      valorInscricao: 30,
      dataRealizacao: null,
    };

    const response = await supertest(app)
      .post("/categorias/")
      .set("Authorization", adminToken)
      .set("Content-Type", "application/json")
      .send(data);

    expect(response.status).toBe(201);
    expect(response.body.categoria.dataRealizacao).toBeNull();
  });

  it("rejects an invalid dataRealizacao", async () => {
    const data = {
      torneioId: tournamentCategoryLocal.id,
      genero: "feminino",
      modalidade: "duplas",
      nivel: "a",
      valorInscricao: 30,
      dataRealizacao: "data-invalida",
    };

    const response = await supertest(app)
      .post("/categorias/")
      .set("Authorization", adminToken)
      .set("Content-Type", "application/json")
      .send(data);

    expect(response.status).toBe(400);
  });

  it("rejects request without token", async () => {
    const response = await supertest(app)
      .post("/categorias/")
      .send({
        torneioId: tournamentCategoryLocal.id,
        genero: "feminino",
        modalidade: "duplas",
        nivel: "a",
        valorInscricao: 30,
        dataRealizacao: null,
      });

    expect(response.status).toBe(401);
  });

  it("rejects request with invalid token", async () => {
    const response = await supertest(app)
      .post("/categorias/")
      .set("Authorization", "token-invalido")
      .send({
        torneioId: tournamentCategoryLocal.id,
        genero: "feminino",
        modalidade: "duplas",
        nivel: "a",
        valorInscricao: 30,
        dataRealizacao: null,
      });

    expect(response.status).toBe(401);
  });

  it("rejects request with non-admin token", async () => {
    const senha = "player123";
    const existente = await prisma.usuario.findUnique({
      where: { email: "player@test.com" },
    });

    if (!existente) {
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(senha, salt);

      await prisma.usuario.create({
        data: {
          nome: "Player",
          email: "player@test.com",
          senha: hash,
          salt,
          role: "player",
        },
      });
    }

    const login = await supertest(app)
      .post("/auth/login")
      .send({
        email: "player@test.com",
        password: senha,
      });

    expect(login.status).toBe(200);

    const response = await supertest(app)
      .post("/categorias/")
      .set("Authorization", login.body.accessToken)
      .send({
        torneioId: tournamentCategoryLocal.id,
        genero: "feminino",
        modalidade: "duplas",
        nivel: "a",
        valorInscricao: 30,
        dataRealizacao: null,
      });

    expect(response.status).toBe(401);
  });

  it("rejects a category when the tournament does not exist", async () => {
    const data = {
      torneioId: randomUUID(),
      genero: "masculino",
      modalidade: "duplas",
      nivel: "b",
      valorInscricao: 30,
      dataRealizacao: null,
    };

    const response = await supertest(app)
      .post("/categorias/")
      .set("Authorization", adminToken)
      .set("Content-Type", "application/json")
      .send(data);

    expect(response.status).toBe(404);
    expect(response.body.error.message).toBe("Torneio não encontrado.");
  });

  it("rejects a duplicated category in the same tournament", async () => {
    const data = {
      torneioId: tournamentCategoryLocal.id,
      genero: "masculino",
      modalidade: "simples",
      nivel: "b",
      valorInscricao: 30,
      dataRealizacao: null,
    };

    const firstResponse = await supertest(app)
      .post("/categorias/")
      .set("Authorization", adminToken)
      .set("Content-Type", "application/json")
      .send(data);

    expect(firstResponse.status).toBe(201);

    const secondResponse = await supertest(app)
      .post("/categorias/")
      .set("Authorization", adminToken)
      .set("Content-Type", "application/json")
      .send(data);

    expect(secondResponse.status).toBe(400);
    expect(secondResponse.body.error.message).toBe("Categoria já cadastrada.");
  });
});