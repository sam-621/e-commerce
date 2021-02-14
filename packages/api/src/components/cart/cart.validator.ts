import { check, ValidationChain } from 'express-validator';

export const removeCartProductValidator: ValidationChain[] = [
  check('productID', 'wrong product id').isMongoId(),
];
