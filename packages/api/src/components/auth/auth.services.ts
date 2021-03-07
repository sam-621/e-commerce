import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';
import { JWT_SECRET, MODE, EXPIRES_IN } from '../../config';
<<<<<<< HEAD
import UserModel from '../user/user.models';
import { IDecoded, IGetUser, IPayload } from './auth.interfaces';
=======
import { IDecoded, IDecodedService, IPayload } from './auth.interfaces';
>>>>>>> c38d002396a779bcc36cf36e296f985cda487f14

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

  public async getUser(userID: ObjectId): Promise<IGetUser> {
    try {
      const user = await UserModel.findById(userID, 'email username cart productsBought');

      return {
        data: user,
        msg: 'OK',
        err: null,
      };
    } catch (e) {
      console.log(e);
      return {
        data: null,
        msg: 'INTERNAL SERVER ERROR',
        err: { msg: 'INTERNAL SERVER ERROR', statusCode: 500 },
      };
    }
  }
}

export { AuthServices };
