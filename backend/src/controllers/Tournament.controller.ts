import { Get, JsonController, QueryParam } from "routing-controllers";
import { Service } from 'typedi';
import { TournamentService } from "../services/TournamentService";

@JsonController("/torneios")
@Service()
export class TournamentController {

  constructor(private tournmentService: TournamentService) {}

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
