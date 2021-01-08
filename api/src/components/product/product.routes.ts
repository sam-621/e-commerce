import { Router } from 'express';
import { jwtMiddleware } from '../../middleware/jwt';
const router = Router();
import { getProductsController } from './product.controllers';

router.get('/products', jwtMiddleware, getProductsController);

export { router as productRouter };
