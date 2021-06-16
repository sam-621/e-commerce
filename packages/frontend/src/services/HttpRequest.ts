import { BASE_URL, MODE } from '../config/envVars';
import { IHeaders } from '../types/services';

export default class HttpRequest {
  private port: number;
  private baseUrl: string;
  private endpoint: string;
  private headers: IHeaders;

  constructor() {
    this.port = 3000;
    this.baseUrl = BASE_URL;
    this.headers = {
      api_key: process.env.API_KEY,
      'Content-Type': 'application/json',
    };
  }

  public configEnpoint(endpoint: string): void {
    this.endpoint = endpoint;
  }

  public addToken(token: string): void {
    this.headers = {
      ...this.headers,
      authorization: token,
    };
  }

  private urlBuilder(): string {
    const port: number | String = MODE === 'dev' ? this.port : '';

    return `${this.baseUrl}${this.port}/${this.endpoint}`;
  }
}
