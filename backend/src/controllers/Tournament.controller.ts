import { Body, Get, HeaderParam, HttpCode, JsonController, Param, Post, QueryParam, } from "routing-controllers";
import { Service } from "typedi";
import { TournamentService } from "../services/TournamentService";
import { AuthService } from "../services/AuthService";
import { TorneioForm } from "../DTOs/TorneioForm";
import { TorneioInscricaoForm } from "../DTOs/TorneioInscricaoForm";
import { UnauthorizedError } from "../errors/UnauthorizedError";

@JsonController("/torneios")
@Service()
export class TournamentController {
  constructor(
    private tournamentService: TournamentService,
    private authService: AuthService
  ) {}

@Get("/historico")
async getHistorico(
  @HeaderParam("Authorization")
  authorization: string
) {
  if (!authorization) {
    throw new UnauthorizedError("Token não informado.");
  }

  const credentials =
    await this.authService.getCredentials(
      authorization
    );

  if (!credentials) {
    throw new UnauthorizedError("Token inválido.");
  }

  return this.tournamentService.getHistorico(
    credentials.userId
  );
}

  @Get("/")
  async getAll(
    @QueryParam("page") page: number,
    @QueryParam("perPage") perPage: number
  ) {
    return this.tournamentService.getAll(page, perPage);
  }

  @Post("/")
  @HttpCode(201)
  async createTournament(@Body() body: TorneioForm) {
    await this.tournamentService.createTournament(body);

    return {
      message: "Torneio criado com sucesso!",
    };
  }

  @Get("/latest")
  async lastTournament() {
    const lastTournament =
      await this.tournamentService.lastTournament();

    return {
      tournament: lastTournament || null,
    };
  }

  @Post("/:id/inscrever")
  @HttpCode(201)
  async tournamentSubscription(
    @Param("id") id: string,
    @HeaderParam("Authorization") authorization: string,
    @Body() body: TorneioInscricaoForm
  ) {
    const credentials = authorization ? await this.authService.getCredentials(authorization) : null;
    if (!credentials || credentials.role !== "player") throw new UnauthorizedError("Entre com uma conta de jogador para se inscrever.");
    await this.tournamentService.subscribeTournament(credentials.userId, id, body);

    return {
      message: "Inscrição realizada com sucesso!",
    };
  }

  @Get("/minhas-inscricoes")
  async getPlayerSubscriptions(
    @HeaderParam("Authorization")
    authorization: string
  ) {
    if (!authorization) {
      throw new UnauthorizedError(
        "Token não informado."
      );
    }

    const credentials =
      await this.authService.getCredentials(
        authorization
      );

    if (!credentials) {
      throw new UnauthorizedError(
        "Token inválido."
      );
    }

    return this.tournamentService.getPlayerSubscriptions(
      credentials.userId
    );
  }

  @Get("/:id")
  async getById(
    @Param("id") id: string
  ) {
    return this.tournamentService.getById(id);
  }
}
