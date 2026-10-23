import { IsEmail, IsOptional, IsString, MinLength } from "class-validator";

export class SetupForm {
  @IsString()
  @MinLength(16)
  setupSecret!: string;

  @IsString()
  @MinLength(2)
  nomeAdministrador!: string;

  @IsEmail()
  emailAdministrador!: string;

  @IsString()
  @MinLength(8)
  senhaAdministrador!: string;

  @IsString()
  @MinLength(2)
  nomeArena!: string;

  @IsOptional()
  @IsString()
  enderecoArena?: string;
}
