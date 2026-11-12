import { Service } from "typedi";
import DatabaseService from "./DatabaseService";

@Service()
export class RankingService {
  constructor(private databaseService: DatabaseService) {}

  async getDoubleRanking(categoria?: string, periodo?: string) {
    return this.databaseService.getDoubleRanking(categoria, periodo);
  }
}