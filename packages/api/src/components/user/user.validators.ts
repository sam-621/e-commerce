import { check, ValidationChain } from 'express-validator';

export const registerValidator: Array<ValidationChain> = [
  check('username', 'Must be a valid username').isLength({ max: 20 }).isString(),
  check('email', 'Must be a valid email').isEmail(),
  check('password', 'Must be a valid password').isLength({ min: 6 }).isString(),
];

export const loginValidator: Array<ValidationChain> = [
  check('email', 'Must be an email').isEmail(),
  check('password', 'Must have at least 6 characters').isLength({ min: 6 }),
];

export const updateInfoValidator: Array<ValidationChain> = [
  check('email', 'Must be an email').isEmail(),
  check('username', 'Must be a valid username').isLength({ max: 20 }).isString(),
];
