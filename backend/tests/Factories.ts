import { faker } from "@faker-js/faker";
import { Factory } from "fishery";
import { randomUUID } from "node:crypto";
import { TorneioForm } from "../src/DTOs/TorneioForm";
import { TorneioInscricaoForm } from "../src/DTOs/TorneioInscricaoForm";

export const tournamentFormFactory = Factory.define<TorneioForm>(() => ({
  nome: faker.person.firstName(),
  dataInicio: new Date("2023-10-10"),
  dataLimiteInscricao: new Date("2023-10-09"),
  federado: faker.datatype.boolean(),
  situacao: "aberto",
}));

export const tournamentSubscriptionFormFactory = Factory.define<TorneioInscricaoForm>(() => ({
  torneioId: randomUUID(),
  categoriaId: randomUUID(),
  jogador1: {
    nome: faker.person.firstName(),
    email: faker.internet.email(),
  },
  jogador2: {
    nome: faker.person.firstName(),
    email: faker.internet.email(),
  },
}));
