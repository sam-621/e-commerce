import { Router } from 'express';
import { jwtMiddleware, areWrongData } from '../../middleware/';
import { buyProductValidator } from '../product/product.validators';
import { removeCartProductValidator } from './cart.validator';
import {
  addToCartController,
  getCartProductsController,
  removeCartProductController,
} from './cart.controller';
const router = Router();

router.put('/cart/add', jwtMiddleware, buyProductValidator, areWrongData, addToCartController);

router.get('/cart/get', jwtMiddleware, getCartProductsController);

router.put('/cart/remove', jwtMiddleware, removeCartProductValidator, removeCartProductController);

export { router as cartRouter };
