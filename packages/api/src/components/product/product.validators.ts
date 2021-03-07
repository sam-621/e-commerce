import { check, ValidationChain } from 'express-validator';

export const buyProductValidator: Array<ValidationChain> = [
  check('frontID', 'wrong frontID').notEmpty().isNumeric(),
  check('name', 'wrong name').notEmpty().isString(),
  check('description', 'wrong description').notEmpty().isString(),
  check('price', 'wrong price').notEmpty().isNumeric(),
  check('image', 'wrong image').notEmpty().isString(),
];
