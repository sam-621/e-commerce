import { IUser, IResponse, IDataForToken } from './user.interface';
import UserModel from './user.models';
import { MODE, EXPIRES_IN, JWT_SECRET } from '../../config';
import argon, { verify } from 'argon2';
import jwt from 'jsonwebtoken';

class User {
  private readonly username: string;
  private readonly email: string;
  private password: string;
  private error: any;
  private emailTaken: boolean;

  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.emailTaken = false;
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

      return { ID: user._id, err: null };
    } catch (e) {
      if (e.code === 11000) {
        return { ID: null, err: { msg: 'EMAIL ALREADY TAKEN', statusCode: 400 } };
      }
      return { ID: null, err: { msg: 'INTERNAL SERVER ERROR', statusCode: 500 } };
    }
  }

  public async login(): Promise<IResponse> {
    try {
      const user: IUser = await UserModel.findOne({ email: this.email }, 'password _id');

      if (!user) {
        return {
          data: null,
          msg: 'WRONG CREDENTIALS',
          statusCode: 401,
          err: 'No user founded',
        };
      }

      const passwordsMatch = await argon.verify(user.password, this.password);

      if (!passwordsMatch) {
        return {
          data: null,
          msg: 'WRONG CREDENTIALS',
          statusCode: 401,
          err: 'Passwords dont match',
        };
      }

      const payload = {
        ID: user._id,
      };

      const token = jwt.sign(
        payload,
        JWT_SECRET,
        MODE === 'production' ? { expiresIn: EXPIRES_IN } : null
      );

      return { data: token, msg: 'USER LOGGED', statusCode: 200, err: false };
    } catch (e) {
      return { data: null, msg: 'INTERNAL SERVER ERROR', statusCode: 500, err: e };
    }
  }
}

export { User };
