import {
  Authorized,
  BadRequestError,
  Body,
  Get,
  HttpCode,
  JsonController,
  Param,
  Post,
  QueryParam,
} from "routing-controllers";
import { Service } from "typedi";
import { TournamentService } from "../services/TournamentService";
import { TorneioForm } from "../DTOs/TorneioForm";
import { TorneioInscricaoForm } from "../DTOs/TorneioInscricaoForm";

@JsonController("/torneios")
@Service()
export class TournamentController {
  constructor(private tournamentService: TournamentService) {}

  @Get("/")
  async getAll(
    @QueryParam("page") page: number,
    @QueryParam("perPage") perPage: number
  ) {
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

  @Post("/inscrever/:id")
  @HttpCode(201)
  async tournamentSubscription(@Body() body: TorneioInscricaoForm) {
    await this.tournamentService.subscribeTournamentAsDouble(body);
    return { message: "Inscrição realizada com sucesso!" };
  }

  @Get("/:id")
  async getById(@Param("id") id: string) {
    return this.tournamentService.getById(id);
  }

  @Get("/:id/inscrever/:cateId")
  async getCategory(@Param("id") id: string, @Param("cateId") cateId: string) {
    return this.tournamentService.getCategory(id, cateId);
  }
}
