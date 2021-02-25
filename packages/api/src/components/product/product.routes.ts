import { Router } from 'express';
import { jwtMiddleware, isAnArray } from '../../middleware/';
const router = Router();
import { getProductsController, buyProductController } from './product.controllers';

router.get('/products', getProductsController);

router.put('/products/buy', jwtMiddleware, isAnArray, buyProductController);

export { router as productRouter };
