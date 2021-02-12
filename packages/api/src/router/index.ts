import { Application } from 'express';
import { userRouter, productRouter, cartRouter } from '../components/';

function router(server: Application): void {
  server.use(userRouter);
  server.use(productRouter);
  server.use(cartRouter);
}

export { router };
