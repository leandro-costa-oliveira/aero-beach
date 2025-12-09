import { Type } from "class-transformer";
import { ValidateNested } from "class-validator";
import { JogadorForm } from "./JogadorForm";

export class JogadorFormDouble {
  @ValidateNested()
  @Type(() => JogadorForm)
  jogador1!: JogadorForm;

  @ValidateNested()
  @Type(() => JogadorForm)
  jogador2!: JogadorForm;
}