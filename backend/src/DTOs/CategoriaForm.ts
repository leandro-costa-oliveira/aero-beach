import { Type } from "class-transformer";
import {
  IsDate,
  IsEnum,
  IsNumber,
  IsString,
} from "class-validator";

import {
  CategoriaTorneio,
  ModalidadeTorneio,
  TipoTorneio,
} from "../../generated/prisma";

export class CategoriaForm {
  @IsString()
  torneioId!: string;

  @IsEnum(TipoTorneio, {
    message: `Gênero inválido. Valores permitidos: ${Object.values(
      TipoTorneio
    ).join(", ")}`,
  })
  genero!: TipoTorneio;

  @IsEnum(ModalidadeTorneio, {
    message: `Modalidade inválida. Valores permitidos: ${Object.values(
      ModalidadeTorneio
    ).join(", ")}`,
  })
  modalidade!: ModalidadeTorneio;

  @IsEnum(CategoriaTorneio, {
    message: `Nível inválido. Valores permitidos: ${Object.values(
      CategoriaTorneio
    ).join(", ")}`,
  })
  nivel!: CategoriaTorneio;

  @IsNumber()
  valorInscricao!: number;

  @Type(() => Date)
  @IsDate({
    message: "Data de realização inválida. Deve ser uma data válida.",
  })
  dataRealizacao!: Date | null;
}