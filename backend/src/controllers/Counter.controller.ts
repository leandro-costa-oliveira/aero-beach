import { Get, JsonController, Post } from "routing-controllers";
import { Service } from 'typedi';
import { CounterService } from "../services/CounterService";

@JsonController("/counter")
@Service()
export class CounterController {

  constructor(private counterService: CounterService) {}

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
