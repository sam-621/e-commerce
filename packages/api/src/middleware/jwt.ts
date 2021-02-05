import { Response, NextFunction } from 'express';
import { IRequest, IDecoded } from './interfaces.middlewares';
import { JWT_SECRET, MODE } from '../config';
import jwt from 'jsonwebtoken';
import UserModel from '../components//user/user.models';
import { IUser } from '../components/user/user.interface';

function jwtMiddleware(req: IRequest, res: Response, next: NextFunction) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({
      statusCode: 401,
      message: 'NO TOKEN PROVIDED',
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as IDecoded;

    const user: IUser = UserModel.findById(decoded.ID, '_id');

    if (!user) {
      return res.status(401).json({
        statusCode: 401,
        message: 'UNAUTHORIZED',
      });
    }

    req.user = decoded as IDecoded;
    return next();
  } catch (err) {
    MODE === 'dev' ? console.log(err) : null;

    return res.status(500).json({
      statusCode: 500,
      message: 'INTERNAL SERVER ERROR',
    });
  }
}

export { jwtMiddleware };
