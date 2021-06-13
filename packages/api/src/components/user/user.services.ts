import { IUser, IUserDocument } from '../../types/user';
import argon from 'argon2';
import { ObjectId } from 'mongoose';
import { IServiceResponse } from '../../types/services';
import UserRepository from '../../repository/user.repository';
import { responses } from '../../config/';
import { IPayload } from '../../types/jwt';
import { AuthServices } from '../auth/auth.services';
import ServiceResponse from '../../helpers/ServiceResponse';

class User {
  public static async register(userInfo: IUser): Promise<IServiceResponse> {
    try {
      const hashedPassword = await argon.hash(userInfo.password);

      const user = await UserRepository.saveUser({ ...userInfo, password: hashedPassword });

      const payload: IPayload = {
        id: user._id,
      };

      const { data } = AuthServices.createToken(payload);

      return new ServiceResponse(data, 'User registered', 201, null);
    } catch (e) {
      if (e.code === 11000) {
        return new ServiceResponse(null, responses.EMAIL_ALREADY_TAKEN, 400, e);
      }

      return new ServiceResponse(null, responses.ERROR_500, 500, e);
    }
  }

  public static async login(email: string, password: string): Promise<IServiceResponse> {
    try {
      const user: IUserDocument = await UserRepository.getUserByEmail(email, ['password', '_id']);

      if (!user) {
        return new ServiceResponse(null, responses.WRONG_CREDENTIALS, 401, 'no user');
      }

      const isTheSamePassword = await argon.verify(user.password, password);

      if (!isTheSamePassword) {
        return new ServiceResponse(null, responses.WRONG_CREDENTIALS, 401, 'no password');
      }

      const payload: IPayload = {
        id: user._id,
      };

      const { data } = AuthServices.createToken(payload);

      return new ServiceResponse(data, 'User loger', 200, null);
    } catch (e) {
      return new ServiceResponse(null, responses.ERROR_500, 500, e);
    }
  }

  public static async UpdateUserInfo(
    userID: ObjectId,
    username: string,
    email: string
  ): Promise<IServiceResponse> {
    try {
      await UserRepository.updateUser(userID, { username: username, email: email });

      return new ServiceResponse(null, 'User updated', 500, null);
    } catch (e) {
      if (e.code === 11000) {
        return new ServiceResponse(null, responses.EMAIL_ALREADY_TAKEN, 400, null);
      }

      return new ServiceResponse(null, responses.ERROR_500, 500, null);
    }
  }
}

export { User };
