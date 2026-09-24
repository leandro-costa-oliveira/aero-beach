import { IsEmail, IsString, MinLength } from "class-validator";

export class CadastroJogadorForm {
  @IsString()
  nome!: string;

  @IsEmail()
  email!: string;

  @IsString()
  @MinLength(6)
  password!: string;
}