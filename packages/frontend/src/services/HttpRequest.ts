export default class HttpRequest {
  private port: number;
  private baseUrl: string;
  constructor() {
    this.port = 3000;
    this.baseUrl = process.env.BASE_URL;
  }
}
