import { Body, HeaderParam, HttpCode, JsonController, Post, } from "routing-controllers";
import { Service } from "typedi";
import { CategoriaForm } from "../DTOs/CategoriaForm";
import { UnauthorizedError } from "../errors/UnauthorizedError";
import { AuthService } from "../services/AuthService";
import { CategoryService } from "../services/CategoryService";

@JsonController("/categorias")
@Service()
export class CategoryController {
  constructor(
    private categoryService: CategoryService,
    private authService: AuthService
  ) {}

  @Post("/")
  @HttpCode(201)
  async createCategory(
    @HeaderParam("Authorization") authorization: string,
    @Body() body: CategoriaForm
  ) {
    if (!authorization) {
      throw new UnauthorizedError("Token não informado.");
    }

    const isAdmin = await this.authService.isAdmin(authorization);

    if (!isAdmin) {
      throw new UnauthorizedError("Acesso restrito.");
    }

    const categoria = await this.categoryService.createCategory(body);

    return { categoria };
  }
}