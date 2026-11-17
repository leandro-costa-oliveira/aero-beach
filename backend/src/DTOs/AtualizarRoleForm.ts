import { IsEnum } from "class-validator";
import { Role } from "../../generated/prisma";

export class AtualizarRoleForm {
  @IsEnum(Role)
  role!: Role;
}