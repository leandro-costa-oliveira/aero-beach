import { BodyParam, JsonController, Post, UnauthorizedError } from "routing-controllers";
import { Service } from 'typedi';
import { AuthService } from "../services/AuthService";

@JsonController("/auth")
@Service()
export class AuthController {

  constructor(
    private authService: AuthService = new AuthService()
  ) {}

  @Post("/login")
  async login(
    @BodyParam("email") email: string, 
    @BodyParam("password") password: string,
  ) {

    const accessToken = await this.authService.login(email, password);
    if (!accessToken) {
      throw new UnauthorizedError("Invalid email or password");
    }

    return { accessToken };
  }
}