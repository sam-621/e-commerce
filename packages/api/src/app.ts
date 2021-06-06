import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { MODE } from './config';
import { router } from './router';

class server {
  public App: Application;
  private port: number | string;

  constructor(port: number | string) {
    this.port = port;
    this.App = express();
    this.middlewareInput();
    this.routing();
    this.middlewareOutput();
  }

  private middlewareInput(): void {
    this.App.use(cors());
    this.App.use(helmet());
    this.App.use(express.json());
  }

  private routing(): void {
    router(this.App);
  }

  private middlewareOutput(): void {}

  public startServer(): void {
    this.App.listen(this.port, () => console.log(`PORT[${this.port}] MODE[${MODE}]`));
  }
}

export default server;
