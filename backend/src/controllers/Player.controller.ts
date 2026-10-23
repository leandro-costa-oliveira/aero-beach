import { Body, HttpCode, JsonController, Post } from "routing-controllers";
import { Service } from "typedi";
import { CadastroJogadorForm } from "../DTOs/CadastroJogadorForm";
import { PlayerService } from "../services/PlayerService";

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
}