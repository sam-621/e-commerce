import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';
import { envVars, responses } from '../../config';
import UserRepository from '../../repository/user.repository';
import { IDecoded, IPayload } from '../../types/jwt';
import { IServiceResponse } from '../../types/services';
import ErrorHandler from '../../errors/ErrorHandler';

class AuthServices {
  public static createToken(payload: IPayload): IServiceResponse {
    const token: string = jwt.sign(
      payload,
      envVars.JWT_SECRET,
      envVars.MODE === 'production' ? { expiresIn: envVars.EXPIRES_IN } : null
    );

    return {
      data: token,
      message: '',
      error: null,
    };
  }

  public static verifyToken(token: string): IServiceResponse {
    try {
      const decoded: IDecoded = jwt.verify(token, envVars.JWT_SECRET) as IDecoded;

      delete decoded.exp;
      delete decoded.iat;

      return {
        data: decoded,
        message: '',
        error: null,
      };
    } catch (e) {
      if (e.message === 'jwt expired') {
        return {
          data: null,
          error: { message: responses.TOKEN_EXPIRED, statusCode: 401, e: e },
          message: null,
        };
      }
      return {
        data: null,
        error: { message: responses.ERROR_500, statusCode: 500, e: e },
        message: '',
      };
    }
  }

  public static refreshToken(id: ObjectId): IServiceResponse {
    const payload: IPayload = {
      id: id,
    };

    const { data, error, message } = this.createToken(payload);

    if (error) throw new ErrorHandler(error.message, error.statusCode, error.e);

    return {
      data: data,
      error: error,
      message: message,
    };
  }

  public static async getUser(userID: ObjectId, fields?: string[]): Promise<IServiceResponse> {
    try {
      const user = await UserRepository.getUserById(userID, fields || null);

      return {
        data: user,
        message: 'OK',
        error: null,
      };
    } catch (e) {
      return {
        data: null,
        message: null,
        error: { message: 'INTERNAL SERVER ERROR', statusCode: 500, e: e },
      };
    }
  }
}

export { AuthServices };
