import { ErrorHandler } from '../../middleware';
import { IController } from './user.interface';
import { User } from './user.services';
import jwt from 'jsonwebtoken';
import { IRequest } from '../../middleware/interfaces.middlewares';
import { NextFunction, Response } from 'express';
import { JWT_SECRET, MODE, EXPIRES_IN } from '../../config';

const registerController: IController = async (req, res, next) => {
  const { username, email, password } = req.body;

  const user = new User(username, email, password);

  const { ID, err } = await user.register();

  if (err) {
    return res.status(err.statusCode).json({
      message: err.msg,
    });
  }

  const payload = {
    ID,
  };

  const token = jwt.sign(
    payload,
    JWT_SECRET,
    MODE === 'production' ? { expiresIn: EXPIRES_IN } : null
  );

  return res.status(201).json({ data: token, message: 'USER REGISTERED' });
};

const loginController: IController = async (req, res, next) => {
  const user = new User('', req.body.email, req.body.password);

  const result = await user.login();

  if (result.err) {
    return next(new ErrorHandler(result.statusCode, result.msg, result.err));
  }
  return res.status(result.statusCode).json({
    data: result.data,
    message: result.msg,
  });
};

const refreshTokenController = async (req: IRequest, res: Response, next: NextFunction) => {
  const payload = {
    ID: req.user.ID,
  };
  const token = jwt.sign(
    payload,
    JWT_SECRET,
    MODE === 'production' ? { expiresIn: EXPIRES_IN } : null
  );

  return res.status(200).json({
    data: token,
  });
};

export { registerController, loginController, refreshTokenController };
