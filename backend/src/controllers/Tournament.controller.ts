import { Get, JsonController } from "routing-controllers";
import { TournamentService } from "../services/TournamentService";

@JsonController("/torneios")
export class TournamentController {
  private tournmentService: TournamentService
  constructor() {
    this.tournmentService = new TournamentService();
  }

  @Get("/latest")
  async lastTournament() {
    const lastTournament = await this.tournmentService.lastTournament();
    return { tournament: lastTournament || null };
  }
}
