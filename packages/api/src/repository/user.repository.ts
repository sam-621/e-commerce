import { ObjectId, QueryOptions } from 'mongoose';
import UserModel from '../db/models/user.models';
import { IUser, IUserDocument } from '../types/user';

class UserRepository {
  public async getUserById(id: ObjectId, fields: String[]): Promise<IUserDocument> {
    return await UserModel.findById(id, fields);
  }

  public async deleteUser(id: ObjectId, options: QueryOptions): Promise<void> {
    await UserModel.findByIdAndDelete(id, options);
  }

  public async updateUser(
    id: ObjectId,
    data: IUser,
    options: QueryOptions & { upsert: true }
  ): Promise<IUserDocument> {
    return await UserModel.findByIdAndUpdate(id, data, options);
  }

  public async saveUser(data: IUser): Promise<void> {
    const newUser = new UserModel(data);

    await newUser.save();
  }
}

export default UserRepository;
