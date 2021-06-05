import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';
import { JWT_SECRET, MODE, EXPIRES_IN } from '../../config';
import UserRepository from '../../repository/user.repository';
import { IDecoded, IGetUser, IPayload, IDecodedService } from './auth.interfaces';

class AuthServices {
  public static createToken(payload: IPayload): string {
    const token: string = jwt.sign(
      payload,
      JWT_SECRET,
      MODE === 'production' ? { expiresIn: EXPIRES_IN } : null
    );

    return token;
  }

  public static verifyToken(token: string): IDecodedService {
    try {
      const decoded: IDecoded = jwt.verify(token, JWT_SECRET) as IDecoded;

      delete decoded.exp;
      delete decoded.iat;

      return { decoded, error: null };
    } catch (e) {
      if (e.message === 'jwt expired') {
        return { decoded: null, error: { message: 'Your session has expired' } };
      }
      return { decoded: null, error: { message: 'Something wrong occurred' } };
    }
  }

  public static refreshToken(id: ObjectId): string {
    const payload: IPayload = {
      id: id,
    };

    const tokenRefreshed: string = this.createToken(payload);

    return tokenRefreshed;
  }

  public static async getUser(userID: ObjectId, fields?: string[]): Promise<IGetUser> {
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
        error: { message: 'INTERNAL SERVER ERROR', statusCode: 500 },
      };
    }
  }
}

export { AuthServices };
