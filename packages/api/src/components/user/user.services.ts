import { IDataForToken } from './user.interface';
import { IUser, IUserDocument } from '../../types/user';
import argon from 'argon2';
import { ObjectId } from 'mongoose';
import { IService } from '../interfaces/IService';
import UserRepository from '../../repository/user.repository';

class User {
  public static async register(data: IUser): Promise<IDataForToken> {
    try {
      const hashedPassword = await argon.hash(data.password);

      const user = await UserRepository.saveUser({ ...data, password: hashedPassword });

      return { id: user._id, err: null };
    } catch (e) {
      if (e.code === 11000) {
        return { id: null, err: { message: 'Email already taken', statusCode: 400 } };
      }
      return { id: null, err: { message: 'Something went worng', statusCode: 500 } };
    }
  }

  public static async login(email: string, password: string): Promise<IDataForToken> {
    try {
      const user: IUserDocument = await UserRepository.getUserByEmail(email, ['password', '_id']);

      if (!user) {
        return { id: null, err: { message: 'WRONG CREDENTIALS', statusCode: 401 } };
      }

      const isTheSamePassword = await argon.verify(user.password, password);

      if (!isTheSamePassword) {
        return { id: null, err: { message: 'WRONG CREDENTIALS', statusCode: 401 } };
      }

      return { id: user._id, err: null };
    } catch (e) {
      return { id: null, err: { message: 'Something went wrong', statusCode: 500 } };
    }
  }

  public static async UpdateUserInfo(
    userID: ObjectId,
    username: string,
    email: string
  ): Promise<IService> {
    try {
      await UserRepository.updateUser(userID, { username: username, email: email });

      return { data: null, message: 'USER UPDATED', error: null };
    } catch (e) {
      if (e.code === 11000) {
        return { data: null, message: null, error: { message: 'EMAIL ALREADY TAKEN' } };
      }
      return { data: null, message: null, error: { message: 'INTERNAL SERVER ERROR' } };
    }
  }
}

export { User };
