import { it, describe, expect } from "@jest/globals";
import { CategoriaTorneio, ModalidadeTorneio, TipoTorneio } from "../../../aero-beach/backend/generated/prisma";

import { MockedDatabaseService } from "../../../aero-beach/backend/src/mocks/DatabaseService.mock";
import { TournamentService } from "../../../aero-beach/backend/src/services/TournamentService";
import { TournamentController } from "../../../aero-beach/backend/src/controllers/Tournament.controller";

const mockedDatabaseService = new MockedDatabaseService();
const mockedTournamentService = new TournamentService(mockedDatabaseService);
const mockedTournamentController = new TournamentController(mockedTournamentService);

describe("TournamentController Unit Tests, route: tournaments/", () => {

  it ("checks if tournament creation works with valid data", async () => {
    const response = await mockedTournamentController.createTornament({
      nome: "Fake Name",
      dataInicio: new Date("2023-10-10"),
      dataRealizacao: new Date("2023-10-20"),
      dataLimiteInscricao: new Date("2023-10-15"),
      categoria: CategoriaTorneio.iniciante,
      modalidade: ModalidadeTorneio.duplas,
      tipo: TipoTorneio.masculino,
      federado: true,
      valorInscricao: 20.00
    })
    expect(response.message).toBe("Torneio criado com sucesso!");
  });

  it ("checks if throws error when dataInicio is later than dataRealizacao", async () => {
    const diaInicio = 20
    const diaRealizacao = 10
    const diaLimiteInscricao = 15
    await expect(mockedTournamentController.createTornament({
      nome: "Fake Name",
      dataInicio: new Date(`2023-10-${diaInicio}`),
      dataRealizacao: new Date(`2023-10-${diaRealizacao}`),
      dataLimiteInscricao: new Date(`2023-10-${diaLimiteInscricao}`),
      categoria: CategoriaTorneio.iniciante,
      modalidade: ModalidadeTorneio.duplas,
      tipo: TipoTorneio.masculino,
      federado: true,
      valorInscricao: 20.00
    })).rejects.toThrow(
      "Data de início não pode ser maior que a data de realização do torneio."
    );
  });

  it ("checks if throws error when dataLimiteInscricao is later than dataRealizacao", async () => {
    const diaInicio = 10
    const diaRealizacao = 15
    const diaLimiteInscricao = 20
    await expect(mockedTournamentController.createTornament({
      nome: "Fake Name",
      dataInicio: new Date(`2023-10-${diaInicio}`),
      dataRealizacao: new Date(`2023-10-${diaRealizacao}`),
      dataLimiteInscricao: new Date(`2023-10-${diaLimiteInscricao}`),
      categoria: CategoriaTorneio.iniciante,
      modalidade: ModalidadeTorneio.duplas,
      tipo: TipoTorneio.masculino,
      federado: true,
      valorInscricao: 20.00
    })).rejects.toThrow(
      "Data limite de inscrição não pode ser maior que a data de realização do torneio."
    );
  });

  it ("checks if throws error when dataLimiteInscricao is earlier than dataInicio", async () => {
    const diaInicio = 15
    const diaRealizacao = 20
    const diaLimiteInscricao = 10
    await expect(mockedTournamentController.createTornament({
      nome: "Fake Name",
      dataInicio: new Date(`2023-10-${diaInicio}`),
      dataRealizacao: new Date(`2023-10-${diaRealizacao}`),
      dataLimiteInscricao: new Date(`2023-10-${diaLimiteInscricao}`),
      categoria: CategoriaTorneio.iniciante,
      modalidade: ModalidadeTorneio.duplas,
      tipo: TipoTorneio.masculino,
      federado: true,
      valorInscricao: 20.00
    })).rejects.toThrow(
      "Data limite de inscrição não pode ser menor que a data de início do torneio."
    );
  });

});