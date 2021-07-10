import Server from './app';
import connect from './db/connect';
import { envVars } from './config';

function main(): void {
  const server = new Server(envVars.PORT);
  connect(envVars.MONGO_URI);
  server.startServer();
}

main();
