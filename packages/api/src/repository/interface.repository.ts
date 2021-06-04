import { ObjectId, QueryOptions } from 'mongoose';
import { IUser } from '../types/user';
import { IUserDocument } from '../types/user';

export interface IUserRepository {
  getUserById(id: ObjectId, fields: String[]): Promise<IUserDocument>;
  deleteUser(id: ObjectId, options: QueryOptions): Promise<void>;
  saveUser(data: IUser): Promise<void>;
  updateUser(
    id: ObjectId,
    data: IUser,
    options: QueryOptions & { upsert: true }
  ): Promise<IUserDocument>;
}
