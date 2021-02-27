import jwt from 'jsonwebtoken';
import { ObjectId } from 'mongoose';
import { JWT_SECRET, MODE, EXPIRES_IN } from '../../config';
import UserModel from '../user/user.models';
import { IDecoded, IGetUser, IPayload } from './auth.interfaces';

class AuthServices {
  public createToken(payload: IPayload): string {
    const token: string = jwt.sign(
      payload,
      JWT_SECRET,
      MODE === 'production' ? { expiresIn: EXPIRES_IN } : null
    );

    return token;
  }

  public verifyToken(token: string): IDecoded {
    const decoded: IDecoded = jwt.verify(token, JWT_SECRET) as IDecoded;

    delete decoded.exp;
    delete decoded.iat;

    return decoded;
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
