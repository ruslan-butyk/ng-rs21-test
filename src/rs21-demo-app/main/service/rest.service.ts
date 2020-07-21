import { environment } from '../../../environments/environment';

export abstract class RestService {
  private readonly api = environment.http.api;
  protected readonly url: string;

  constructor(endPoint: string) {
    this.url = this.buildUrl(endPoint);
  }

  private buildUrl(endPoint: string): string {
    return `/${this.api}/${endPoint}`;
  }
}
