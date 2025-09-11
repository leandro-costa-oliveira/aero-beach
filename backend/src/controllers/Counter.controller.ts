import { Get, JsonController, Post } from "routing-controllers";
import { CounterService } from "../services/CounterService";

@JsonController("/counter")
export class CounterController {
  private counterService: CounterService;
  constructor() {
    this.counterService = new CounterService();
  }

  @Get("/")
  async count() {
    const num = await this.counterService.getCount();
    return { count: num?.contador || 0 };
  }

  @Post("/")
  async doCount() {
    return { count: await this.counterService.doCount() };
  }
}
