import { Get, Body, HttpCode, JsonController, Post, Patch, Param, } from "routing-controllers";
import { Service } from "typedi";
import { CadastroJogadorForm } from "../DTOs/CadastroJogadorForm";
import { PlayerService } from "../services/PlayerService";
import { AtualizarRoleForm } from "../DTOs/AtualizarRoleForm";

@JsonController("/jogadores")
@Service()
export class PlayerController {
  constructor(private jogadorService: PlayerService) {}

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
async list() {
  const jogadores = await this.jogadorService.list();

  return {
    jogadores,
  };
}
@Patch("/:id")
async updateRole(
  @Param("id") id: string,
  @Body() body: AtualizarRoleForm
) {
  await this.jogadorService.updateRole(id, body.role);

  return {
    message: "Perfil atualizado com sucesso.",
  };
}
}