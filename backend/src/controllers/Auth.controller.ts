import { BodyParam, JsonController, Post } from "routing-controllers";
import { AuthService } from "../services/AuthService";
import { STATUS_CODES } from "http";

@JsonController("/auth")
export class AuthController {

  private authService: AuthService;
  constructor () {
    this.authService = new AuthService();
  }

  @Post("/login")
  async login(
    @BodyParam("email") email: string, 
    @BodyParam("password") password: string,
  ) {
    const accessToken = await this.authService.authenticateUser(email, password);
    if (!accessToken) {
      return STATUS_CODES[401];
    }
    return { accessToken };
  }
}