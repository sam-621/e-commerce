import { ObjectId, QueryOptions } from 'mongoose';
import UserModel from '../db/models/user.models';
import { IUser, IUserDocument } from '../types/user';

class UserRepository {
  public static async getUserById(id: ObjectId, fields: string[]): Promise<IUserDocument> {
    return await UserModel.findById(id, fields);
  }

  public static async getUserByEmail(email: string, fields: string[]): Promise<IUserDocument> {
    return await UserModel.findOne({ email: email }, fields);
  }

  public static async deleteUser(id: ObjectId, options: QueryOptions): Promise<void> {
    await UserModel.findByIdAndDelete(id, options);
  }

  public static async updateUser(
    id: ObjectId,
    data: IUser,
    options?: QueryOptions & { upsert: true }
  ): Promise<IUserDocument> {
    return await UserModel.findByIdAndUpdate(id, data, options);
  }

  public static async saveUser(data: IUser): Promise<IUserDocument> {
    const newUser = new UserModel(data);

    await newUser.save();

    return newUser;
  }
}

export default UserRepository;
