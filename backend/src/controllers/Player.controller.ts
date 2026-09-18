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
    const jogador = await this.jogadorService.create(body);

    return { jogador };
  }
}