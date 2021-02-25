import { Router } from 'express';
import { jwtMiddleware, areWrongData } from '../../middleware/';
const router = Router();
import { getProductsController, buyProductController } from './product.controllers';
import { buyProductValidator } from './product.validators';

router.get('/products', getProductsController);

router.put('/products/buy', jwtMiddleware, buyProductController);
// buyProductValidator, areWrongData,

export { router as productRouter };
