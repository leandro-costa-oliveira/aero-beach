import { it, describe, expect } from "@jest/globals";
import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';
import supertest from 'supertest'
import app from "../src/app";

import { CategoriaTorneio, ModalidadeTorneio, TipoTorneio } from "../generated/prisma/index";
import { TorneioForm } from "../src/DTOs/TorneioForm";

const torneioFormFactory = Factory.define<TorneioForm>(() => ({
  nome: faker.person.firstName(),
  dataInicio: new Date("2023-10-10"),
  dataRealizacao: new Date("2023-10-20"),
  dataLimiteInscricao: new Date("2023-10-15"),
  categoria: faker.helpers.arrayElement(Object.values(CategoriaTorneio)),
  modalidade: faker.helpers.arrayElement(Object.values(ModalidadeTorneio)),
  tipo: faker.helpers.arrayElement(Object.values(TipoTorneio)),
  federado: faker.datatype.boolean(),
  valorInscricao: faker.number.float({ min: 10, max: 50, fractionDigits: 2 })
}))

describe("Integration tests for tournaments/", () => {

  it ("checks if tournament creation works with valid data", async () => {

    const data: TorneioForm = torneioFormFactory.build();

    await supertest(app)
    .post('/torneios')
    .set("Content-Type", "application/json")
    .send(data).then((response) => {
      expect(response.status).toBe(201);
      expect(response.body.message).toBe("Torneio criado com sucesso!");
    });
  });

  it ("checks if throws error when dataInicio is later than dataRealizacao", async () => {

    const diaInicio = 20
    const diaRealizacao = 10
    const diaLimiteInscricao = 15
    const data: TorneioForm = torneioFormFactory.build({
      dataInicio: new Date(`2023-10-${diaInicio}`),
      dataRealizacao: new Date(`2023-10-${diaRealizacao}`),
      dataLimiteInscricao: new Date(`2023-10-${diaLimiteInscricao}`)
    });

    await supertest(app)
    .post('/torneios')
    .set("Content-Type", "application/json")
    .send(data).then((response) => {
      expect(response.status).toBe(400);
      expect(response.body.message).toBe("Data de início não pode ser maior que a data de realização do torneio.");
    });
  });

  it ("checks if throws error when dataLimiteInscricao is later than dataRealizacao", async () => {

    const diaInicio = 10
    const diaRealizacao = 15
    const diaLimiteInscricao = 20
    const data: TorneioForm = torneioFormFactory.build({
      dataInicio: new Date(`2023-10-${diaInicio}`),
      dataRealizacao: new Date(`2023-10-${diaRealizacao}`),
      dataLimiteInscricao: new Date(`2023-10-${diaLimiteInscricao}`)
    });

    await supertest(app)
    .post('/torneios')
    .set("Content-Type", "application/json")
    .send(data).then((response) => {
      expect(response.status).toBe(400);
      expect(response.body.message).toBe("Data limite de inscrição não pode ser maior que a data de realização do torneio.");
    });
  });
});