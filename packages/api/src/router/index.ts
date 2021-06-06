import { Application } from 'express';
import { userRouter } from '../components/';

function router(server: Application): void {
  server.use(userRouter);
}

export { router };
