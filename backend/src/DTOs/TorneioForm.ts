import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsEnum, IsNumber, IsOptional, IsString, Matches} from 'class-validator';
import { CategoriaTorneio, ModalidadeTorneio, SituacaoTorneio, TipoTorneio, Torneio } from '../../generated/prisma';

export class TorneioForm implements Omit<Torneio, "id"> {

  @IsString()
  @Matches(/^(?=.*[a-zA-Z])[a-zA-Z\s]+$/, { message: "Nome inválido. Deve conter pelo menos uma letra e não pode ser vazio." })
  nome!: string

  @Type(() => Date)
  @IsDate({ message: "Data de início inválida. Deve ser uma data válida." })
  dataInicio!: Date

  @Type(() => Date)
  @IsDate({ message: "Data limite de inscrição inválida. Deve ser uma data válida." })
  dataLimiteInscricao!: Date

  @IsBoolean({ message: "Indicação de torneio federado inválida. Deve ser true ou false." })
  federado!: boolean

  @IsOptional()
  @IsEnum(SituacaoTorneio, { message: `Situação do torneio inválida. Valores permitidos: ${Object.values(SituacaoTorneio).join(", ")}` })
  situacao!: SituacaoTorneio;
}