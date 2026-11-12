import { Service } from "typedi";
import DatabaseService from "./DatabaseService";

@Service()
export class RankingService {
  constructor(private databaseService: DatabaseService) {}

  async getDoubleRanking() {
    return await this.databaseService.getDoubleRanking();
  }
}