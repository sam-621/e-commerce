import { Response, NextFunction } from 'express';
import { IRequest } from './interfaces.middlewares';
import { MODE } from '../config';
import UserModel from '../components//user/user.models';
import { IUser } from '../components/user/user.interface';
import { AuthServices } from '../components/auth/auth.services';
import { IDecoded } from '../components/auth/auth.interfaces';

async function jwtMiddleware(req: IRequest, res: Response, next: NextFunction) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({
      statusCode: 401,
      message: 'NO TOKEN PROVIDED',
    });
  }

  try {
    const authServices = new AuthServices();
    const decoded: IDecoded = authServices.verifyToken(token);

    const user: IUser = await UserModel.findById(decoded.id, '_id');

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
