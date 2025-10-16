import { describe, expect, it } from "@jest/globals";
import { CategoriaTorneio, ModalidadeTorneio, TipoTorneio } from "../../generated/prisma";
import { validate } from "class-validator";
import { TorneioForm } from "../DTOs/TorneioForm";

// ...existing code...

describe("TorneioForm Validation", () => {

  it("checks if throws error when name is empty", async () => {
    const dto = Object.assign(new TorneioForm(), {
      nome: "",
      dataInicio: new Date("2023-10-1"),
      dataRealizacao: new Date("2023-10-10"),
      dataLimiteInscricao: new Date("2023-10-5"),
      categoria: CategoriaTorneio.iniciante,
      modalidade: ModalidadeTorneio.duplas,
      tipo: TipoTorneio.masculino,
      federado: true,
      valorInscricao: 20.00
    });

    const validationError = await validate(dto)
    expect(validationError.length).toBe(1);
    expect(validationError[0].constraints).toHaveProperty("matches");
    expect(validationError[0].constraints?.matches).toBe("Nome inválido. Deve conter pelo menos uma letra e não pode ser vazio.");
  });

  it("checks if thwrows error when dataInicio is not a date", async () => {
    const dto = Object.assign(new TorneioForm(), {
      nome: "Fake Name",
      dataInicio: "invalid-date",
      dataRealizacao: new Date("2023-10-10"),
      dataLimiteInscricao: new Date("2023-10-5"),
      categoria: CategoriaTorneio.iniciante,
      modalidade: ModalidadeTorneio.duplas,
      tipo: TipoTorneio.masculino,
      federado: true,
      valorInscricao: 20.00
    });

    const validationError = await validate(dto)
    expect(validationError.length).toBe(1);
    expect(validationError[0].constraints).toHaveProperty("isDate");
    expect(validationError[0].constraints?.isDate).toBe("Data de início inválida. Deve ser uma data válida.");
  })

  it("checks if throws error when dataRealizacao is not a date", async () => {
    const dto = Object.assign(new TorneioForm(), {
      nome: "Fake Name",
      dataInicio: new Date("2023-10-1"),
      dataRealizacao: "invalid-date",
      dataLimiteInscricao: new Date("2023-10-5"),
      categoria: CategoriaTorneio.iniciante,
      modalidade: ModalidadeTorneio.duplas,
      tipo: TipoTorneio.masculino,
      federado: true,
      valorInscricao: 20.00
    });

    const validationError = await validate(dto)
    expect(validationError.length).toBe(1);
    expect(validationError[0].constraints).toHaveProperty("isDate");
    expect(validationError[0].constraints?.isDate).toBe("Data de realização inválida. Deve ser uma data válida.");
  })

  it("checks if throws error when dataLimiteInscricao is not a date", async () => {
    const dto = Object.assign(new TorneioForm(), {
      nome: "Fake Name",
      dataInicio: new Date("2023-10-1"),
      dataRealizacao: new Date("2023-10-10"),
      dataLimiteInscricao: "invalid-date",
      categoria: CategoriaTorneio.iniciante,
      modalidade: ModalidadeTorneio.duplas,
      tipo: TipoTorneio.masculino,
      federado: true,
      valorInscricao: 20.00
    });

    const validationError = await validate(dto)
    expect(validationError.length).toBe(1);
    expect(validationError[0].constraints).toHaveProperty("isDate");
    expect(validationError[0].constraints?.isDate).toBe("Data limite de inscrição inválida. Deve ser uma data válida.");
  })

  it("checks if throws error when valorInscricao is not a number", async () => {
    const dto = Object.assign(new TorneioForm(), {
      nome: "Fake Name",
      dataInicio: new Date("2023-10-1"),
      dataRealizacao: new Date("2023-10-10"),
      dataLimiteInscricao: new Date("2023-10-5"),
      categoria: CategoriaTorneio.iniciante,
      modalidade: ModalidadeTorneio.duplas,
      tipo: TipoTorneio.masculino,
      federado: true,
      valorInscricao: "invalid-number"
    });

    const validationError = await validate(dto)
    expect(validationError.length).toBe(1);
    expect(validationError[0].constraints).toHaveProperty("isNumber");
    expect(validationError[0].constraints?.isNumber).toBe("Valor de inscrição inválido. Deve ser um número com até duas casas decimais.");
  })

  it("checks if throws error when tipo is not a valid enum value", async () => {
    const dto = Object.assign(new TorneioForm(), {
      nome: "Fake Name",
      dataInicio: new Date("2023-10-1"),
      dataRealizacao: new Date("2023-10-10"),
      dataLimiteInscricao: new Date("2023-10-5"),
      categoria: CategoriaTorneio.iniciante,
      modalidade: ModalidadeTorneio.duplas,
      tipo: "invalid-enum-value",
      federado: true,
      valorInscricao: 20.00
    });
    
    const validationError = await validate(dto)
    expect(validationError.length).toBe(1);
    expect(validationError[0].constraints).toHaveProperty("isEnum");
    expect(validationError[0].constraints?.isEnum).toBe(`Tipo de torneio inválido. Valores permitidos: ${Object.values(TipoTorneio).join(", ")}`);
  })

  it("checks if throws error when categoria is not a valid enum value", async () => {
    const dto = Object.assign(new TorneioForm(), {
      nome: "Fake Name",
      dataInicio: new Date("2023-10-1"),
      dataRealizacao: new Date("2023-10-10"),
      dataLimiteInscricao: new Date("2023-10-5"),
      categoria: "invalid-enum-value",
      modalidade: ModalidadeTorneio.duplas,
      tipo: TipoTorneio.masculino,
      federado: true,
      valorInscricao: 20.00
    });

    const validationError = await validate(dto)
    expect(validationError.length).toBe(1);
    expect(validationError[0].constraints).toHaveProperty("isEnum");
    expect(validationError[0].constraints?.isEnum).toBe(`Categoria de torneio inválida. Valores permitidos: ${Object.values(CategoriaTorneio).join(", ")}`);
  })

  it("checks if throws error when modalidade is not a valid enum value", async () => {
    const dto = Object.assign(new TorneioForm(), {
      nome: "Fake Name",
      dataInicio: new Date("2023-10-1"),
      dataRealizacao: new Date("2023-10-10"),
      dataLimiteInscricao: new Date("2023-10-5"),
      categoria: CategoriaTorneio.iniciante,
      modalidade: "invalid-enum-value",
      tipo: TipoTorneio.masculino,
      federado: true,
      valorInscricao: 20.00
    });

    const validationError = await validate(dto)
    expect(validationError.length).toBe(1);
    expect(validationError[0].constraints).toHaveProperty("isEnum");
    expect(validationError[0].constraints?.isEnum).toBe(`Modalidade de torneio inválida. Valores permitidos: ${Object.values(ModalidadeTorneio).join(", ")}`);
  })

  it("checks if throws error when federado is not a boolean", async () => {
    const dto = Object.assign(new TorneioForm(), {
      nome: "Fake Name",
      dataInicio: new Date("2023-10-1"),
      dataRealizacao: new Date("2023-10-10"),
      dataLimiteInscricao: new Date("2023-10-5"),
      categoria: CategoriaTorneio.iniciante,
      modalidade: ModalidadeTorneio.duplas,
      tipo: TipoTorneio.masculino,
      federado: "invalid-boolean",
      valorInscricao: 20.00
    });

    const validationError = await validate(dto)
    expect(validationError.length).toBe(1);
    expect(validationError[0].constraints).toHaveProperty("isBoolean");
    expect(validationError[0].constraints?.isBoolean).toBe("Indicação de torneio federado inválida. Deve ser true ou false.");
  })
});
