import { IUser } from '@Types/user';
import { AxiosResponse } from 'axios';
import HttpRequest from './HttpRequest';

class UserService extends HttpRequest {
  private configRegister(): Promise<AxiosResponse> {
    this.configEnpoint('register');
    return this.get();
  }

  public async register(user: IUser) {
    try {
      const response = await this.configRegister();
    } catch (error) {}
  }
}
