import { Router } from 'express';
import { getProductController } from './product.controller';
const router = Router();

router.get('/products', getProductController);

export { router as productRouter };
