import express, { Application, Request, Response } from 'express';
import { apiKey } from './middleware';
import { MODE } from './config';
import { router } from './router';

class server {
  public App: Application;
  private port: number;

  constructor(port: number) {
    this.port = port;
    this.App = express();
    this.middlewareInput();
    this.routing();
  }

  private middlewareInput() {
    this.App.use(apiKey);
  }

  private routing(): void {
    router(this.App);
  }

  public startServer(): void {
    this.App.listen(this.port, () => console.log(`PORT[${this.port}] MODE[${MODE}]`));
  }
}

export default server;
