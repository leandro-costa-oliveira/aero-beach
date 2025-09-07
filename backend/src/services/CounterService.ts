import { prisma } from "./DatabaseService";

export class CounterService {
  private count = 0;

  public getCount() {
    return prisma.contador.findFirst();
  }

  async doCount() {
    return this.count++;
  }
}
