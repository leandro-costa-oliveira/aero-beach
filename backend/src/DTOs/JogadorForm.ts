import { IsEmail, IsString } from "class-validator"

export class JogadorForm {

  @IsString()
  nome!: string
  
  @IsEmail()
  email!: string
}