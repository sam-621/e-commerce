import { IUser, IDataForToken } from './user.interface';
import UserModel from './user.models';
import argon from 'argon2';
import { ICartServiceRes } from '../cart/cart.interfaces';
import { ObjectId } from 'mongoose';

class User {
  private readonly username: string;
  private readonly email: string;
  private password: string;

  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  public async register(): Promise<IDataForToken> {
    try {
      const hashedPassword = await argon.hash(this.password);

      const user = new UserModel({
        email: this.email,
        username: this.username,
        password: hashedPassword,
      });

      await user.save();

      return { id: user._id, err: null };
    } catch (e) {
      if (e.code === 11000) {
        return { id: null, err: { msg: 'EMAIL ALREADY TAKEN', statusCode: 401 } };
      }
      return { id: null, err: { msg: 'INTERNAL SERVER ERROR', statusCode: 500 } };
    }
  }

  public async login(): Promise<IDataForToken> {
    try {
      const user: IUser = await UserModel.findOne({ email: this.email }, 'password _id');

      if (!user) {
        return { id: null, err: { msg: 'WRONG CREDENTIALS', statusCode: 401 } };
      }

      const passwordsMatch = await argon.verify(user.password, this.password);

      if (!passwordsMatch) {
        return { id: null, err: { msg: 'WRONG CREDENTIALS', statusCode: 401 } };
      }

      return { id: user._id, err: null };
    } catch (e) {
      return { id: null, err: { msg: 'INTERNAL SERVER ERROR', statusCode: 500 } };
    }
  }

  public async UpdateUserInfo({username, email}: IUpdateUserInfoProp, userID: ObjectId):Promise<ICartServiceRes> {
    try {
      const res = await UserModel.findByIdAndUpdate(userID, {username, email})
      console.log(res);
      
      return { data: res, msg: 'USER UPDATED', statusCode: 200 }
      
    } catch (e) {
      if (e.code === 11000) {
        return { data: null, msg: 'EMAIL ALREADY TAKEN', statusCode: 401 }
      }
      return { data: null, msg: 'INTERNAL SERVER ERROR', statusCode: 500 }
    }
  }
}

interface IUpdateUserInfoProp {
  username: string
  email: string
}

export { User };
