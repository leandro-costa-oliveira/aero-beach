import { Get, JsonController } from "routing-controllers";

@JsonController("/torneios")
export class TournamentController {

  @Get("/latest")
  async lastTournament() {
  }
}
