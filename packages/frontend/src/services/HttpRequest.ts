import { BASE_URL } from '../config/envVars';

export default class HttpRequest {
  private port: number;
  private baseUrl: string;
  private endpoint: string;
  private headers: object;
  constructor() {
    this.port = 3000;
    this.baseUrl = BASE_URL;
  }

  public configEnpoint(endpoint: string) {
    this.endpoint = endpoint;
  }
}
