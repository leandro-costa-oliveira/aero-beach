import { Type } from "class-transformer";
import {
  IsBoolean,
  IsDate,
  IsString,
  Matches,
} from "class-validator";

export class TorneioForm {
  @IsString()
  @Matches(/^(?=.*[A-Za-zÀ-ÿ])[A-Za-zÀ-ÿ\s]+$/, {
    message:
      "Nome inválido. Deve conter pelo menos uma letra e não pode ser vazio.",
  })
  nome!: string;

  @Type(() => Date)
  @IsDate({
    message: "Data de início inválida. Deve ser uma data válida.",
  })
  dataInicio!: Date;

  @Type(() => Date)
  @IsDate({
    message:
      "Data limite de inscrição inválida. Deve ser uma data válida.",
  })
  dataLimiteInscricao!: Date;

  @IsBoolean({
    message:
      "Indicação de torneio federado inválida. Deve ser true ou false.",
  })
  federado!: boolean;
}