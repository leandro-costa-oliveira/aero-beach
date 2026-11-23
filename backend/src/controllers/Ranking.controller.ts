import { Get, JsonController, QueryParam } from "routing-controllers";
import { Service } from "typedi";
import { RankingService } from "../services/RankingService";

@JsonController("/ranking")
@Service()
export class RankingController {
  constructor(private rankingService: RankingService) {}

  @Get("/duplas")
  async getDoubleRanking(
    @QueryParam("categoria") categoria?: string,
    @QueryParam("periodo") periodo?: string,
  ) {
    return this.rankingService.getDoubleRanking(categoria, periodo);
  }
}