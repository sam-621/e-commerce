import { IUser, IResponse } from './user.interface';

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

  public register(): IResponse {
    try {
      return { data: null, msg: 'USER REGISTERED', statusCode: 200, err: false };
    } catch (e) {
      return { data: null, err: e, statusCode: 500, msg: 'INTERNAL SERVER ERROR' };
    }
  }
}

export { User };
