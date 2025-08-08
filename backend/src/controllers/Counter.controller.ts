import { Get, JsonController } from "routing-controllers";
import { CounterService } from "../services/CounterService";

@JsonController("/counter")
export class CounterController {
  private counterService: CounterService;
  constructor() {
    this.counterService = new CounterService();
  }

  @Get("/")
  async count() {
    return { count: await this.counterService.doCount() };
  }
}
