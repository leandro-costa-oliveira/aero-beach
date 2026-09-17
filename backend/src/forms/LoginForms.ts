import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import type { LoginDTO } from "../../../api-schema/LoginDTO";

export class LoginForm implements LoginDTO {
  @IsEmail()
  @IsNotEmpty()
  email!: string;

  @IsString()
  @IsNotEmpty()
  password!: string;
}