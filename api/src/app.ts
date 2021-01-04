import express, { Application, Request, Response } from 'express';
import { apiKey } from './middleware';

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
    this.App.get('/', (req: Request, res: Response) => res.send('hello'));
  }

  public startServer(): void {
    this.App.listen(this.port, () => console.log(`Server on port ${this.port}`));
  }
}

export default server;
