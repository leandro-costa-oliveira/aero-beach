import { Get, JsonController, QueryParam } from "routing-controllers";
import { TournamentService } from "../services/tournamentService";

@JsonController("/torneios")
export class TournamentController {
  private TournamentService: TournamentService;

  constructor() {
    this.TournamentService = new TournamentService();
  }

  @Get('/')
  async getAll(
    @QueryParam("page") page: number,
    @QueryParam("perPage") perPage: number
  ) {
    return this.TournamentService.getAll(page, perPage);
  }
}