import { check, ValidationChain } from 'express-validator';

export const buyProductValidator: Array<ValidationChain> = [
  check('productName', 'wrong name').notEmpty().isString(),
  check('productDescription', 'wrong description').notEmpty().isString(),
  check('productPrice', 'wrong price').notEmpty().isNumeric(),
  check('productImage', 'wrong image').notEmpty().isString(),
];
