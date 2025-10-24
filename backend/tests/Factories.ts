import { Factory } from 'fishery';
import { faker } from '@faker-js/faker';
import { randomUUID } from "node:crypto";

import { TorneioForm } from '../src/DTOs/TorneioForm';
import { CategoriaTorneio, ModalidadeTorneio, TipoTorneio } from '../generated/prisma';
import { TorneioInscricaoForm } from '../src/DTOs/TorneioInscricaoForm';

export const tournamentFormFactory = Factory.define<TorneioForm>(() => ({
  nome: faker.person.firstName(),
  dataInicio: new Date("2023-10-10"),
  dataRealizacao: new Date("2023-10-20"),
  dataLimiteInscricao: new Date("2023-10-15"),
  categoria: faker.helpers.arrayElement(Object.values(CategoriaTorneio)),
  modalidade: faker.helpers.arrayElement(Object.values(ModalidadeTorneio)),
  tipo: faker.helpers.arrayElement(Object.values(TipoTorneio)),
  federado: faker.datatype.boolean(),
  valorInscricao: faker.number.float({ min: 10, max: 50, fractionDigits: 2 })
}));

export const tournamentSubscriptionFormFactory = Factory.define<TorneioInscricaoForm>(() => ({
  torneioId: randomUUID(),
  jogador1: {
    nome: faker.person.firstName(),
    email: faker.internet.email()
  },
  jogador2: {
    nome: faker.person.firstName(),
    email: faker.internet.email()
  }
}))
