import { Router } from 'express';
import { jwtMiddleware } from '../../middleware/';
import { getProductController } from './product.controller';
const router = Router();

router.get('/products', jwtMiddleware, getProductController);

export { router as productRouter };
