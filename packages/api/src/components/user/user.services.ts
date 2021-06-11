import { IUser, IUserDocument } from '../../types/user';
import argon from 'argon2';
import { ObjectId } from 'mongoose';
import { IServiceResponse } from '../../types/services';
import UserRepository from '../../repository/user.repository';
import { responses } from '../../config/';
import { IPayload } from '../../types/jwt';
import { AuthServices } from '../auth/auth.services';
import serviceResponse from '../../helpers/srviceResponse';

class User {
  public static async register(data: IUser): Promise<IServiceResponse> {
    try {
      const hashedPassword = await argon.hash(data.password);

      const user = await UserRepository.saveUser({ ...data, password: hashedPassword });

      const payload: IPayload = {
        id: user._id,
      };

      const token = AuthServices.createToken(payload);

      return serviceResponse(token, 'User registered', 200, null);
    } catch (e) {
      if (e.code === 11000) {
        return serviceResponse(null, responses.EMAIL_ALREADY_TAKEN, 400, e);
      }

      return serviceResponse(null, responses.ERROR_500, 500, e);
    }
  }

  public static async login(email: string, password: string): Promise<IServiceResponse> {
    try {
      const user: IUserDocument = await UserRepository.getUserByEmail(email, ['password', '_id']);

      if (!user) {
        return serviceResponse(null, responses.WRONG_CREDENTIALS, 401, null);
      }

      const isTheSamePassword = await argon.verify(user.password, password);

      if (!isTheSamePassword) {
        return serviceResponse(null, responses.WRONG_CREDENTIALS, 401, null);
      }

      const payload: IPayload = {
        id: user._id,
      };

      const token = AuthServices.createToken(payload);

      return serviceResponse(token, 'User loger', 200, null);
    } catch (e) {
      return serviceResponse(null, responses.ERROR_500, 500, e);
    }
  }

  public static async UpdateUserInfo(
    userID: ObjectId,
    username: string,
    email: string
  ): Promise<IServiceResponse> {
    try {
      await UserRepository.updateUser(userID, { username: username, email: email });

      return serviceResponse(null, 'User updated', 500, null);
    } catch (e) {
      if (e.code === 11000) {
        return serviceResponse(null, responses.EMAIL_ALREADY_TAKEN, 400, null);
      }

      return serviceResponse(null, responses.ERROR_500, 500, null);
    }
  }
}

export { User };
