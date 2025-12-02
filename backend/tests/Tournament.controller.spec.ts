import { beforeAll, describe, expect, it } from "@jest/globals";
import { randomUUID } from "node:crypto";

import supertest from "supertest";
import app from "../src/app";
import { tournamentFormFactory, tournamentSubscriptionFormFactory } from "./Factories";

import { Categorias, Torneios } from "../generated/prisma/index";
import { TorneioForm } from "../src/DTOs/TorneioForm";
import DatabaseService, { prisma } from "../src/services/DatabaseService";

let tournament_Ongoing: Torneios;
let categoria: Categorias;
let tournament_Done: Torneios;

describe("Integration tests for tournaments/torneios", () => {
  it("checks if tournament creation works with valid data", async () => {
    const data: TorneioForm = tournamentFormFactory.build();

    await supertest(app)
      .post("/torneios")
      .set("Content-Type", "application/json")
      .send(data)
      .then((response) => {
        expect(response.status).toBe(201);
        expect(response.body.message).toBe("Torneio criado com sucesso!");
      });
  });

  it("checks if throws error when dataLimiteInscricao is later than dataRealizacao", async () => {
    const diaInicio = 10;
    const diaRealizacao = 15;
    const diaLimiteInscricao = 20;
    const data: TorneioForm = tournamentFormFactory.build({
      dataInicio: new Date(`2023-10-${diaInicio}`),
      dataLimiteInscricao: new Date(`2023-10-${diaLimiteInscricao}`),
    });

    await supertest(app)
      .post("/torneios")
      .set("Content-Type", "application/json")
      .send(data)
      .then((response) => {
        expect(response.status).toBe(400);
        expect(response.body.message).toBe(
          "Data limite de inscrição não pode ser maior que a data de início do torneio."
        );
      });
  });
});

describe("Integration tests for tournaments/:id/inscrever", () => {
  beforeAll(async () => {
    tournament_Ongoing = await new DatabaseService().createTournament(
      tournamentFormFactory.build({
        dataInicio: new Date("1500-11-10"),
        dataLimiteInscricao: new Date("2500-11-19"),
      })
    );

    categoria = await prisma.categorias.create({data: {
      torneioId: tournament_Ongoing.id,
      genero: "feminino",
      modalidade: "duplas",
      nivel: "a",
      valorInscricao: 30,
      dataRealizacao: null,
    }})

    tournament_Done = await new DatabaseService().createTournament(
      tournamentFormFactory.build({
        dataInicio: new Date("2022-09-10"),
        dataLimiteInscricao: new Date("2022-09-15"),
      })
    );
  });

  it("Checks if tournament subscription works with valid data", async () => {
    const subscriptionData = tournamentSubscriptionFormFactory.build({
      torneioId: tournament_Ongoing.id,
      categoriaId: categoria.id,
    });

    await supertest(app)
      .post(`/torneios/${tournament_Ongoing.id}/inscrever`)
      .set("Content-Type", "application/json")
      .send(subscriptionData)
      .then((response) => {
        expect(response.status).toBe(201);
        expect(response.body.message).toBe("Inscrição realizada com sucesso!");
      });
  });

  it("Checks it thows error when trying to subscribe a team with only one player", async () => {
    const subscriptionData = tournamentSubscriptionFormFactory.build({
      torneioId: tournament_Ongoing.id,
      jogador2: undefined,
    });

    await supertest(app)
      .post(`/torneios/${tournament_Ongoing.id}/inscrever`)
      .set("Content-Type", "application/json")
      .send(subscriptionData)
      .then((response) => {
        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Inscrição de dupla requer dois jogadores.");
      });
  });

  it("Checks if throws error when trying to subscribe to a non-existing tournament", async () => {
    const subscriptionData = tournamentSubscriptionFormFactory.build({
      torneioId: randomUUID(),
    });

    await supertest(app)
      .post(`/torneios/${subscriptionData.torneioId}/inscrever`)
      .set("Content-Type", "application/json")
      .send(subscriptionData)
      .then((response) => {
        expect(response.status).toBe(404);
        expect(response.body.message).toBe("Torneio não encontrado.");
      });
  });

  it("Checks if throws error when trying to subscribe after the registration deadline", async () => {
    const subscriptionData = tournamentSubscriptionFormFactory.build({
      torneioId: tournament_Done.id,
    });

    await supertest(app)
      .post(`/torneios/${tournament_Done.id}/inscrever`)
      .set("Content-Type", "application/json")
      .send(subscriptionData)
      .then((response) => {
        expect(response.status).toBe(400);
        expect(response.body.message).toBe("O prazo de inscrição para este torneio já expirou.");
      });
  });

  it("Checks if throws error when trying to subscribe a team with already subscribed players", async () => {
    const subscriptionData = tournamentSubscriptionFormFactory.build({
      torneioId: tournament_Ongoing.id,
      categoriaId: categoria.id,
    });
    
    await supertest(app)
    .post(`/torneios/${tournament_Ongoing.id}/inscrever`)
    .set("Content-Type", "application/json")
    .send(subscriptionData)
    .then((response) => {
      console.log(response);
      expect(response.status).toBe(201);
      expect(response.body.message).toBe("Inscrição realizada com sucesso!");
    });
    
    // Player 1 already subscribed
    const secondSubscriptionData = tournamentSubscriptionFormFactory.build({
      torneioId: tournament_Ongoing.id,
      jogador1: subscriptionData.jogador1,
      categoriaId: categoria.id,
    });
    
    await supertest(app)
    .post(`/torneios/${tournament_Ongoing.id}/inscrever`)
    .set("Content-Type", "application/json")
    .send(secondSubscriptionData)
    .then((response) => {
      expect(response.status).toBe(400);
      expect(response.body.message).toBe("Um ou mais jogadores já estão inscritos nessa categoria");
    });
    
    // Player 2 already subscribed
    const thirdSubscriptionData = tournamentSubscriptionFormFactory.build({
      torneioId: tournament_Ongoing.id,
      jogador2: subscriptionData.jogador2,
      categoriaId: categoria.id,
    });

    await supertest(app)
      .post(`/torneios/${tournament_Ongoing.id}/inscrever`)
      .set("Content-Type", "application/json")
      .send(thirdSubscriptionData)
      .then((response) => {
        expect(response.status).toBe(400);
        expect(response.body.message).toBe("Um ou mais jogadores já estão inscritos nessa categoria");
      });
  });
});
