import { Get, HttpCode, JsonController } from "routing-controllers";
import { Service } from 'typedi';

@JsonController("/isServerAlive")
@Service()
export class TestController {

  @Get("/")
  async isServerAlive() {
    return {};
  }
}