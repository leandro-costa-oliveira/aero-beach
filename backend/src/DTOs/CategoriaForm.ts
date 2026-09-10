import {IsDate, IsEnum, IsNumber, IsString, Min, IsOptional, } from "class-validator";
import { Type } from "class-transformer";
import { TipoTorneio, ModalidadeTorneio, CategoriaTorneio, } from "../../generated/prisma";
export class CategoriaForm {
  @IsString()
  torneioId!: string;
  @IsEnum(TipoTorneio, {
    message: "Gênero de torneio inválido.",
  })
  genero!: TipoTorneio;
  @IsEnum(ModalidadeTorneio, {

    message: "Modalidade de torneio inválida.",

  })

  modalidade!: ModalidadeTorneio;
  @IsEnum(CategoriaTorneio, {
    message: "Nível de categoria inválido.",
  })
  nivel!: CategoriaTorneio;
  @IsNumber(
    {},
    {
      message: "Valor de inscrição inválido.",
    }
  )
  @Min(0, {
    message: "O valor de inscrição não pode ser negativo.",
  })
  valorInscricao!: number;
  @IsOptional()
  @Type(() => Date)
  @IsDate({
    message: "Data de realização inválida.",
  })
  dataRealizacao!: Date | null;
}