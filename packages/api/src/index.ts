import Server from './app';
import connect from './db/connect';
import { MONGO_URI, PORT } from './config';

function main(): void {
  const server = new Server(PORT);
  connect(MONGO_URI);
  server.startServer();
}

main();
