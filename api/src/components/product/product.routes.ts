import { Router } from 'express';
import { jwtMiddleware } from '../../middleware/jwt';
const router = Router();
import { getProductsController, buyProductController } from './product.controllers';

router.get('/products', jwtMiddleware, getProductsController);

router.post('/products/buy', jwtMiddleware, buyProductController);

export { router as productRouter };
