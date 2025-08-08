export class CounterService {
  private count = 0;

  constructor() {}

  async doCount() {
    return this.count++;
  }
}
