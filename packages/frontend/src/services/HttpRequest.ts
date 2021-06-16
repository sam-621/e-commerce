import { BASE_URL, MODE } from '../config/envVars';
import { IHeaders } from '../types/services';
import axios, { AxiosInstance } from 'axios';

export default class HttpRequest {
  private port: number;
  private baseUrl: string;
  private endpoint: string;
  private headers: IHeaders;
  private axios: AxiosInstance;

  constructor() {
    this.port = 3000;
    this.baseUrl = BASE_URL;
    this.headers = {
      api_key: process.env.API_KEY,
      'Content-Type': 'application/json',
    };
    this.axios = this.configAxios();
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

  private configAxios(): AxiosInstance {
    return axios.create({
      baseURL: this.baseUrl,
      headers: this.headers,
    });
  }
}
