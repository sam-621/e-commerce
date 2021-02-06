import { IUser, IDataForToken } from './user.interface';
import UserModel from './user.models';
import argon from 'argon2';

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
        return { id: null, err: { msg: 'EMAIL ALREADY TAKEN', statusCode: 400 } };
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
}

export { User };
