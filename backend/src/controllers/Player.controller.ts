import {
  Body,
  ForbiddenError,
  Get,
  HttpCode,
  HeaderParam,
  JsonController,
  Param,
  Patch,
  Post,
} from "routing-controllers";
import { Service } from "typedi";

import { CadastroJogadorForm } from "../DTOs/CadastroJogadorForm";
import { AtualizarRoleForm } from "../DTOs/AtualizarRoleForm";
import { PlayerService } from "../services/PlayerService";
import { AuthService } from "../services/AuthService";

@JsonController("/jogadores")
@Service()
export class PlayerController {
  constructor(
    private jogadorService: PlayerService,
    private authService: AuthService
  ) {}

  private async ensureAdmin(authorization?: string) {
    if (!authorization || !(await this.authService.isAdmin(authorization))) {
      throw new ForbiddenError("Acesso negado.");
    }
  }

  @Post("/")
  @HttpCode(201)
  async create(@Body() body: CadastroJogadorForm) {
    const result = await this.jogadorService.create(body);

    return {
      jogador: {
        id: result.jogador.id,
        nome: result.jogador.nome,
        email: result.jogador.email,
        cpf: result.jogador.cpf,
        telefone: result.jogador.telefone,
        usuarioId: result.jogador.usuarioId,
      },
    };
  }

  @Get("/")
  async list(@HeaderParam("authorization") authorization?: string) {
    await this.ensureAdmin(authorization);

    const jogadores = await this.jogadorService.list();

    return {
      jogadores,
    };
  }

  @Patch("/:id")
async updateRole(
  @Param("id") id: string,
  @Body() body: AtualizarRoleForm,
  @HeaderParam("authorization") authorization?: string
) {
  await this.ensureAdmin(authorization);

  await this.jogadorService.updateRole(id, body.role);

  return {
    message: "Perfil atualizado com sucesso.",
  };
}
}