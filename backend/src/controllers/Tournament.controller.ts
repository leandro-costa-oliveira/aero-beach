import { Get, JsonController, QueryParam } from "routing-controllers";
import { TournamentService } from "../services/TournamentService";

@JsonController("/torneios")
export class TournamentController {
  private tournmentService: TournamentService
  constructor() {
    this.tournmentService = new TournamentService();
  }

  @Get('/')
  async getAll(
    @QueryParam("page") page: number,
    @QueryParam("perPage") perPage: number
  ) {
    return this.tournmentService.getAll(page, perPage);
  }

  @Get("/latest")
  async lastTournament() {
    const lastTournament = await this.tournmentService.lastTournament();
    return { tournament: lastTournament || null };
  }

}
