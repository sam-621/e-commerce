import Server from './app';
import connect from './db/connect';
import { MONGO_URI } from './config';

async function main(): Promise<void> {
  const server = new Server(3000);

  await connect(MONGO_URI);
  server.startServer();
}

main();
