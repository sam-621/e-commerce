import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { envVars } from './config';
import { router } from './router';
import { apiKey } from './middleware/apiKey';

class server {
  public App: Application;
  private port: number;

  constructor(port: number) {
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
    this.App.use(apiKey);
  }

  private routing(): void {
    router(this.App);
  }

  private middlewareOutput(): void {}

  public startServer(): void {
    this.App.listen(this.port, () => console.log(`PORT[${this.port}] MODE[${envVars.MODE}]`));
  }
}

export default server;
