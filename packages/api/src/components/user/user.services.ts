import { IUser, IUserDocument } from '../../types/user';
import argon from 'argon2';
import { ObjectId } from 'mongoose';
import { IServiceResponse } from '../../types/services';
import UserRepository from '../../repository/user.repository';
import { responses } from '../../config/';
import { IPayload } from '../../types/jwt';
import { AuthServices } from '../auth/auth.services';

class User {
  public static async register(data: IUser): Promise<IServiceResponse> {
    try {
      const hashedPassword = await argon.hash(data.password);

      const user = await UserRepository.saveUser({ ...data, password: hashedPassword });

      const payload: IPayload = {
        id: user._id,
      };

      const token = AuthServices.createToken(payload);

      return {
        data: token,
        message: 'User registered',
        error: null,
      };
    } catch (e) {
      if (e.code === 11000) {
        return {
          data: null,
          message: null,
          error: { message: responses.EMAIL_ALREADY_TAKEN, statusCode: 400, e: e },
        };
      }
      return {
        data: null,
        message: null,
        error: { message: responses.ERROR_500, statusCode: 500, e: e },
      };
    }
  }

  public static async login(email: string, password: string): Promise<IServiceResponse> {
    try {
      const user: IUserDocument = await UserRepository.getUserByEmail(email, ['password', '_id']);

      if (!user) {
        return {
          data: null,
          message: null,
          error: {
            message: responses.WRONG_CREDENTIALS,
            statusCode: 401,
          },
        };
      }

      const isTheSamePassword = await argon.verify(user.password, password);

      if (!isTheSamePassword) {
        return {
          data: null,
          message: null,
          error: {
            message: responses.WRONG_CREDENTIALS,
            statusCode: 401,
          },
        };
      }

      const payload: IPayload = {
        id: user._id,
      };

      const token = AuthServices.createToken(payload);

      return {
        data: token,
        message: 'User logged',
        error: null,
      };
    } catch (e) {
      return {
        data: null,
        message: null,
        error: { message: responses.ERROR_500, statusCode: 500, e: e },
      };
    }
  }

  public static async UpdateUserInfo(
    userID: ObjectId,
    username: string,
    email: string
  ): Promise<IServiceResponse> {
    try {
      await UserRepository.updateUser(userID, { username: username, email: email });

      return { data: null, message: 'User updated', error: null };
    } catch (e) {
      if (e.code === 11000) {
        return {
          data: null,
          message: null,
          error: { message: responses.EMAIL_ALREADY_TAKEN, statusCode: 400, e: e },
        };
      }
      return {
        data: null,
        message: null,
        error: { message: responses.ERROR_500, statusCode: 500, e: e },
      };
    }
  }
}

export { User };
