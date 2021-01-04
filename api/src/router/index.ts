import { Application } from 'express';
import { userRouter } from '../components/user/user.routes';

function router(server: Application): void {
  server.use(userRouter);
}

export { router };
