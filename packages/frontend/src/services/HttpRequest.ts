import axios, { AxiosResponse } from 'axios';
import { API_KEY, BASE_URL, MODE } from '../config/envVars';
import { IHeaders } from '@Types/services';

export default class HttpRequest {
  private port: number;
  private baseUrl: string;
  private endpoint: string;
  private headers: IHeaders;

  constructor() {
    this.port = 6000;
    this.baseUrl = BASE_URL;
    this.headers = {
      api_key: API_KEY,
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

  public get(): Promise<AxiosResponse> {
    try {
      return axios.get(this.urlBuilder(), { headers: this.headers });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public post(data: unknown): Promise<AxiosResponse> {
    try {
      return axios.post(this.urlBuilder(), data, { headers: this.headers });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public put(data: unknown): Promise<AxiosResponse> {
    try {
      return axios.put(this.urlBuilder(), data, { headers: this.headers });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public delete(): Promise<AxiosResponse> {
    try {
      return axios.delete(this.urlBuilder(), { headers: this.headers });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  private urlBuilder(): string {
    const port: number | String = MODE === 'dev' ? this.port : '';

    return `${this.baseUrl}${port}/${this.endpoint}`;
  }
}
