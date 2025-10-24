import { Body, Get, HttpCode, JsonController, Post, QueryParam } from "routing-controllers";
import { Service } from "typedi";
import { TorneioForm } from "../DTOs/TorneioForm";
import { TournamentService } from "../services/TournamentService";

@JsonController("/torneios")
@Service()
export class TournamentController {
  constructor(private tournamentService: TournamentService) {}

  @Get("/")
  async getAll(@QueryParam("page") page: number, @QueryParam("perPage") perPage: number) {
    return this.tournamentService.getAll(page, perPage);
  }

  @Post("/")
  @HttpCode(201)
  // @Authorized()
  async createTournament(@Body() body: TorneioForm) {
    await this.tournamentService.createTournament(body);
    return { message: "Torneio criado com sucesso!" };
  }

  @Get("/latest")
  async lastTournament() {
    const lastTournament = await this.tournamentService.lastTournament();
    return { tournament: lastTournament || null };
  }
}
