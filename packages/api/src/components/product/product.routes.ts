import { Router } from 'express';
import { jwtMiddleware, areWrongData } from '../../middleware/';
const router = Router();
import {
  getProductsController,
  buyProductController,
  addToCartController,
} from './product.controllers';
import { buyProductValidator } from './product.validators';

router.get('/products', getProductsController);

router.put('/products/buy', jwtMiddleware, buyProductValidator, areWrongData, buyProductController);

router.put('/products/cart', jwtMiddleware, buyProductValidator, areWrongData, addToCartController);

export { router as productRouter };
