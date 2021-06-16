import { BASE_URL } from '../config/envVars';
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

  public configEnpoint(endpoint: string) {
    this.endpoint = endpoint;
  }
}
