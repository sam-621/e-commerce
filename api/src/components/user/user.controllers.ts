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

  const result = await user.register();

  if (result.err) {
    return next(new ErrorHandler(result.statusCode, result.msg, result.err));
  }

  return res.status(result.statusCode).json({ data: result.data, msg: result.msg });
};

const loginController: IController = async (req, res, next) => {
  const errors: Result = validationResult(req);

  if (!errors.isEmpty()) {
    return next(new ErrorHandler(400, 'WRONG DATA SCHEMA', errors.array()));
  }

  const user = new User('', req.body.email, req.body.password);

  const { data, err, statusCode, msg } = await user.login();

  if (err) {
    return next(new ErrorHandler(statusCode, msg, err));
  }
  return res.status(statusCode).json({
    data: data,
    msg: msg,
  });
};

export { registerController, loginController };
