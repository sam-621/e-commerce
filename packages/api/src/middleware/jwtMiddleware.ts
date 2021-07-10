import { Response, NextFunction } from 'express';
import { IRequest } from '../types/controllers';
import UserModel from '../db/models/user.models';
import { IUser } from '../types/user';
import { AuthServices } from '../components/auth/auth.services';
import { IDecoded } from '../types/jwt';
import ControllerResponse from '../helpers/ControllerResponse';
import { responses, statusCodes } from '../config';

async function jwtMiddleware(req: IRequest, res: Response, next: NextFunction) {
  const token = req.headers['authorization'];

  if (!token) {
    return new ControllerResponse(
      res,
      null,
      'No token provided',
      statusCodes.UNAUTHORIZED
    ).response();
  }

  try {
    const { data, error, message, statusCode } = AuthServices.verifyToken(token);

    if (error) {
      return new ControllerResponse(res, null, message, statusCode).response();
    }

    const user: IUser = await UserModel.findById(data.id, '_id');

    if (!user) {
      return new ControllerResponse(
        res,
        null,
        responses.CANT_HAVE_ACCESS,
        statusCodes.UNAUTHORIZED
      );
    }

    req.user = data as IDecoded;
    return next();
  } catch (err) {
    return new ControllerResponse(
      res,
      null,
      responses.ERROR_500,
      statusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

export { jwtMiddleware };
