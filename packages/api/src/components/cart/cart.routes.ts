import { Router } from 'express';
import { jwtMiddleware, areWrongData } from '../../middleware/';
import { buyProductValidator } from '../product/product.validators';
import { addToCartController } from './cart.controller';
const router = Router();

router.put('/cart/add', jwtMiddleware, buyProductValidator, areWrongData, addToCartController);

export { router as cartRouter };
