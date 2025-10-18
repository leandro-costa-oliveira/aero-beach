import { Authorized, Body, Get, HttpCode, JsonController, Post, QueryParam } from "routing-controllers";
import { Service } from 'typedi';
import { TournamentService } from "../services/TournamentService";
import { TorneioForm } from "../DTOs/TorneioForm";

@JsonController("/torneios")
@Service()
export class TournamentController {

  constructor(
    private tournmentService: TournamentService
  ) {}

  @Get('/')
  async getAll(
    @QueryParam("page") page: number,
    @QueryParam("perPage") perPage: number
  ) {
    return this.tournmentService.getAll(page, perPage);
  }

  @Post('/')
  @HttpCode(201)
  // @Authorized()
  async createTornament(
    @Body() body: TorneioForm,
  ) {
    await this.tournmentService.createTornament(body)
    return { message: "Torneio criado com sucesso!" };
  }

  @Get("/latest")
  async lastTournament() {
    const lastTournament = await this.tournmentService.lastTournament();
    return { tournament: lastTournament || null };
  }

}
