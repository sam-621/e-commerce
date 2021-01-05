import { IUser, IResponse } from './user.interface';
import UserModel from './user.models';
import argon from 'argon2';

class User {
  private readonly username: string;
  private readonly email: string;
  private password: string;
  private error: any;

  constructor(username: string, email: string, password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  public async register(): Promise<IResponse> {
    try {
      const hashedPassword = await argon.hash(this.password);

      const user: IUser = new UserModel({
        email: this.email,
        username: this.username,
        password: hashedPassword,
      });

      const res = user.save();
      console.log(res);
      return { data: null, msg: 'USER REGISTERED', statusCode: 200, err: false };
    } catch (e) {
      return { data: null, err: e, statusCode: 500, msg: 'INTERNAL SERVER ERROR' };
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
