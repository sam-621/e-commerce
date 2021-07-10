import { Application } from 'express';
import { userRouter } from '../components/';
import { productRouter } from '../components/';

function router(server: Application): void {
  server.use(userRouter);
  server.use(productRouter);
}

export { router };
