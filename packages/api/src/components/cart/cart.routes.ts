import { Router } from 'express';
import { jwtMiddleware, areWrongData } from '../../middleware/';
import { buyProductValidator } from '../product/product.validators';
import { addToCartController, getCartProductsController } from './cart.controller';
const router = Router();

router.put('/cart/add', jwtMiddleware, buyProductValidator, areWrongData, addToCartController);

router.get('/cart/get', jwtMiddleware, getCartProductsController);

export { router as cartRouter };
