import { check, ValidationChain } from 'express-validator';

export const registerValidator: Array<ValidationChain> = [
  check('username', 'Must be a valid username').isLength({ max: 15 }).isString(),
  check('email', 'Must be a valid email').isEmail(),
  check('password', 'Must be a valid password').isLength({ min: 6 }).isString(),
];
