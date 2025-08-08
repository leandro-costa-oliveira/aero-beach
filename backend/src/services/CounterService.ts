export class CounterService {
  private count = 0;

  public getCount() {
    return this.count;
  }

  async doCount() {
    return this.count++;
  }
}
