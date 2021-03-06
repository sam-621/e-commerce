import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';
import { JWT_SECRET, MODE, EXPIRES_IN } from '../../config';
import { IDecoded, IDecodedService, IPayload } from './auth.interfaces';

class AuthServices {
  public createToken(payload: IPayload): string {
    const token: string = jwt.sign(
      payload,
      JWT_SECRET,
      MODE === 'production' ? { expiresIn: EXPIRES_IN } : null
    );

    return token;
  }

  public verifyToken(token: string): IDecodedService {
    try {
      const decoded: IDecoded = jwt.verify(token, JWT_SECRET) as IDecoded;

      delete decoded.exp;
      delete decoded.iat;

      return { decoded, err: null };
    } catch (e) {
      if (e.message === 'jwt expired') {
        return { decoded: null, err: 'JWT HAS EXPIRED' };
      }
      console.log(e);
    }
  }

  public refreshToken(id: ObjectId): string {
    const payload: IPayload = {
      id: id,
    };

    const tokenRefreshed: string = this.createToken(payload);

    return tokenRefreshed;
  }
}

export { AuthServices };
