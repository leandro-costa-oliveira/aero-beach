import { IsOptional, IsUUID, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { JogadorForm } from "./JogadorForm";

export class TorneioInscricaoForm {
  // Campos opcionais mantidos para compatibilidade com clientes antigos.
  @IsOptional()
  @IsUUID()
  torneioId?: string;

  @IsUUID()
  categoriaId!: string;

  jogador1?: JogadorForm;

  @IsOptional()
  @ValidateNested()
  @Type(() => JogadorForm)
  jogador2!: JogadorForm;
}
