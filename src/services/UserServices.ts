import { IResponse } from '@Types/services';
import { IUser } from '@Types/user';
import { AxiosResponse } from 'axios';
import HttpRequest from './HttpRequest';

export default class UserService extends HttpRequest {
  private configRegister(user: IUser): Promise<AxiosResponse<IRegisterResponse>> {
    this.configEnpoint('register');
    return this.post(user);
  }

  public async register(user: IUser): Promise<IRegisterResponse> {
    try {
      const response = await this.configRegister(user);

      return response.data;
    } catch (error) {
      console.log(error.response);

      if (error.response) {
        return { errorMessage: error.response.data.message };
      }
      return error.message;
    }
  }
}

interface IRegisterResponse extends IResponse {
  data?: string;
  errorMessage?: string;
}
