import { Body, Get, JsonController, Post } from "routing-controllers";
import { Service } from "typedi";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { AuthService } from "../services/AuthService";
import { LoginForm } from "../forms/LoginForms";
import { SetupForm } from "../DTOs/SetupForm";
import { BadRequestError } from "../errors/BadRequestError";

@JsonController("/auth")
@Service()
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  @Get("/setup-status")
  async setupStatus() {
    return {
      required: await this.authService.isSetupRequired(),
      available: this.authService.isSetupAvailable(),
    };
  }

  @Post("/setup")
  async setup(@Body() body: SetupForm) {
    if (!(await this.authService.isSetupRequired())) {
      throw new BadRequestError("A configuração inicial já foi concluída.");
    }
    if (!this.authService.isValidSetupSecret(body.setupSecret)) {
      throw new UnauthorizedError("Segredo de configuração inválido ou não configurado.");
    }
    await this.authService.initializeSetup(body);
    return { message: "Configuração concluída. Faça login para continuar." };
  }

  @Post("/login")
  async login(
    @Body() body: LoginForm
  ) {
const login = await this.authService.login(
  body.email,
  body.password
);

if (!login) {
  throw new UnauthorizedError("Invalid email or password");
}

return login;
  }}
