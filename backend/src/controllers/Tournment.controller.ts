import { Get, JsonController } from "routing-controllers";
import { TournmentService } from "../services/TournmentService";

@JsonController("/torneios")
export class TournamentController {
  private tournmentService: TournmentService
  constructor() {
    this.tournmentService = new TournmentService();
  }

  @Get("/latest")
  async lastTournament() {
    const lastTournament = await this.tournmentService.lastTournament();
    return { tournament: lastTournament || null };
  }
}
