import { Router } from 'express';
import { jwtMiddleware } from '../../middleware/jwt';
const router = Router();
import { getProductsController, buyProductController } from './product.controllers';
import { buyProductValidator } from './product.validators';

router.get('/products', jwtMiddleware, getProductsController);

router.put('/products/buy', jwtMiddleware, buyProductValidator, buyProductController);

export { router as productRouter };
