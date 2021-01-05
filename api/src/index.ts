import Server from './app';
import connect from './db/connect';
import { MONGO_URI } from './config';

function main(): void {
  const server = new Server(3000);
  connect(MONGO_URI);
  server.startServer();
}

main();
