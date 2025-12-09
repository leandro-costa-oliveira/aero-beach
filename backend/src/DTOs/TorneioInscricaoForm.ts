import { IsOptional, IsUUID } from "class-validator";
import { JogadorForm } from "./JogadorForm";

export class TorneioInscricaoForm {
  @IsUUID()
  torneioId!: string;

  @IsUUID()
  categoriaId!: string;

  jogador1!: JogadorForm;

  @IsOptional()
  jogador2!: JogadorForm;
}
