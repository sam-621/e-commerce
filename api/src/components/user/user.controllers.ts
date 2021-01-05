import { Result, validationResult } from 'express-validator';
import { ErrorHandler } from '../../middleware';
import { IController } from './user.interface';
import { User } from './user.services';

const registerController: IController = async (req, res, next) => {
  const errors: Result = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new ErrorHandler(400, 'WRONG DATA SCHEMA', errors.array()));
  }

  const { username, email, password } = req.body;

  const user = new User(username, email, password);

  const { err, msg, statusCode, data } = await user.register();

  if (err) {
    return next(new ErrorHandler(statusCode, msg, err));
  }

  return res.json(statusCode).json({ data, msg });
};

export { registerController };
