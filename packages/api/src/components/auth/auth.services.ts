import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';
import { envVars, responses, statusCodes } from '../../config';
import UserRepository from '../../repository/user.repository';
import { IDecoded, IPayload } from '../../types/jwt';
import { IServiceResponse } from '../../types/services';
import ServiceResponse from '../../helpers/ServiceResponse';

class AuthServices {
  public static createToken(payload: IPayload): IServiceResponse {
    const token: string = jwt.sign(
      payload,
      envVars.JWT_SECRET,
      envVars.MODE === 'production' ? { expiresIn: envVars.EXPIRES_IN } : null
    );

    return new ServiceResponse(token, '', 200);
  }

  public static verifyToken(token: string): IServiceResponse {
    try {
      const decoded: IDecoded = jwt.verify(token, envVars.JWT_SECRET) as IDecoded;

      delete decoded.exp;
      delete decoded.iat;

      return new ServiceResponse(decoded, '', statusCodes.OK);
    } catch (e) {
      console.log(e.message);

      if (e.message === 'jwt expired') {
        return new ServiceResponse(null, 'Your session has expired', statusCodes.UNAUTHORIZED, e);
      }

      if (e.message === 'invalid signature') {
        return new ServiceResponse(null, 'token is corrupted', statusCodes.UNAUTHORIZED, e);
      }
      return new ServiceResponse(null, responses.ERROR_500, statusCodes.INTERNAL_SERVER_ERROR, e);
    }
  }

  public static refreshToken(id: ObjectId): IServiceResponse {
    const payload: IPayload = {
      id: id,
    };

    const { data, message, statusCode, error } = this.createToken(payload);

    return new ServiceResponse(data, message, statusCode, error);
  }

  public static async getUser(userID: ObjectId, fields?: string[]): Promise<IServiceResponse> {
    try {
      const user = await UserRepository.getUserById(userID, fields || null);

      return new ServiceResponse(user, 'OK', statusCodes.OK);
    } catch (e) {
      return new ServiceResponse(null, responses.ERROR_500, statusCodes.INTERNAL_SERVER_ERROR);
    }
  }
}

export { AuthServices };
