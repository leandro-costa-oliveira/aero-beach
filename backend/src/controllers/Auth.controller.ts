import { Body, JsonController, Post } from "routing-controllers";
import { Service } from "typedi";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { AuthService } from "../services/AuthService";
import { LoginForm } from "../forms/LoginForms";

@JsonController("/auth")
@Service()
export class AuthController {
  constructor(
    private authService: AuthService
  ) {}

  @Post("/login")
  async login(
    @Body() body: LoginForm
  ) {
    const accessToken = await this.authService.login(
      body.email,
      body.password
    );

    if (!accessToken) {
      throw new UnauthorizedError("Invalid email or password");
    }

    return { accessToken };
  }
}