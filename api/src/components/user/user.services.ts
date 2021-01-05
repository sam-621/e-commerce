import { IUser, IResponse } from './user.interface';
import UserModel from './user.models';
import argon from 'argon2';

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

  public async register(): Promise<IResponse> {
    try {
      const hashedPassword = await argon.hash(this.password);

      const user = new UserModel({
        email: this.email,
        username: this.username,
        password: hashedPassword,
      });

      await user.save();

      return { data: null, msg: 'USER REGISTERED', statusCode: 200, err: false };
    } catch (e) {
      if (e.code === 11000) {
        return { data: null, msg: 'EMAIL ALREADY TAKEN', statusCode: 400, err: e };
      }
      return { data: null, msg: 'INTERNAL SERVER ERROR', statusCode: 500, err: e };
    }
  }
}

export { User };

// user.save((err) => {
//   if (err) {
//     return { data: null, msg: 'EMAIL ALREADY TAKEN', statusCode: 400, err: err };
//   }
//   return { data: null, msg: 'USER REGISTERED', statusCode: 200, err: false };
// });
