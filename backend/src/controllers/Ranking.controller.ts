import { Get, JsonController } from "routing-controllers";
import { Service } from "typedi";
import { RankingService } from "../services/RankingService";

@JsonController("/ranking")
@Service()
export class RankingController {
  constructor(private rankingService: RankingService) {}

  @Get("/duplas")
  async getDoubleRanking() {
    return this.rankingService.getDoubleRanking();
  }
}