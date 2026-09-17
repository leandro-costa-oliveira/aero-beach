import { Body, HttpCode, JsonController, Post, } from "routing-controllers";
import { Service } from "typedi";
import { CategoriaForm } from "../DTOs/CategoriaForm";
import { CategoryService } from "../services/CategoryService";

@JsonController("/categorias")
@Service()
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Post("/")
  @HttpCode(201)
  async createCategory(@Body() body: CategoriaForm) {
    const categoria = await this.categoryService.createCategory(body);

    return { categoria };
  }
}