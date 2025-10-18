import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsEnum, IsNumber, IsString, Matches} from 'class-validator';
import { CategoriaTorneio, ModalidadeTorneio, TipoTorneio, Torneios } from '../../generated/prisma';

export class TorneioForm implements Omit<Torneios, "id"> {

  @IsString()
  @Matches(/^(?=.*[a-zA-Z])[a-zA-Z\s]+$/, { message: "Nome inválido. Deve conter pelo menos uma letra e não pode ser vazio." })
  nome!: string

  @Type(() => Date)
  @IsDate({ message: "Data de início inválida. Deve ser uma data válida." })
  dataInicio!: Date

  @Type(() => Date)
  @IsDate({ message: "Data de realização inválida. Deve ser uma data válida." })
  dataRealizacao!: Date

  @Type(() => Date)
  @IsDate({ message: "Data limite de inscrição inválida. Deve ser uma data válida." })
  dataLimiteInscricao!: Date

  @IsNumber({ maxDecimalPlaces: 2 }, { message: "Valor de inscrição inválido. Deve ser um número com até duas casas decimais." })
  valorInscricao!: number

  @IsEnum(TipoTorneio, { message: `Tipo de torneio inválido. Valores permitidos: ${Object.values(TipoTorneio).join(", ")}` })
  tipo!: TipoTorneio

  @IsEnum(CategoriaTorneio, { message: `Categoria de torneio inválida. Valores permitidos: ${Object.values(CategoriaTorneio).join(", ")}` })
  categoria!: CategoriaTorneio

  @IsEnum(ModalidadeTorneio, { message: `Modalidade de torneio inválida. Valores permitidos: ${Object.values(ModalidadeTorneio).join(", ")}` })
  modalidade!: ModalidadeTorneio

  @IsBoolean({ message: "Indicação de torneio federado inválida. Deve ser true ou false." })
  federado!: boolean
}