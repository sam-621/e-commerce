import { Response, NextFunction } from 'express';
import { IRequest } from '../types/controllers';
import { IUser } from '../types/user';
import { AuthServices } from '../components/auth/auth.services';
import { IDecoded, IDecodedService } from '../components/auth/auth.interfaces';
import UserRepository from '../repository/user.repository';

async function jwtMiddleware(req: IRequest, res: Response, next: NextFunction) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({
      statusCode: 401,
      message: 'NO TOKEN PROVIDED',
    });
  }

  try {
    const { decoded, err }: IDecodedService = AuthServices.verifyToken(token);

    if (err) {
      return res.status(400).json({
        data: null,
        message: null,
        error: err,
      });
    }

    // const user: IUser = await UserModel.findById(decoded.id, '_id');
    const user: IUser = await UserRepository.getUserById(decoded.id, ['_id']);

    if (!user) {
      return res.status(401).json({
        data: null,
        message: null,
        error: { msg: 'You dont have permisions' },
      });
    }

    req.user = decoded as IDecoded;
    return next();
  } catch (err) {
    console.log(err);

    return res.status(500).json({
      data: null,
      message: null,
      error: { msg: 'INTERNAL SERVER ERROR' },
    });
  }
}

export { jwtMiddleware };
