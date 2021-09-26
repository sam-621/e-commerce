import { getErrorMsg } from '@Helpers/error'
import { IResponse } from '@Types/services'
import { IUser } from '@Types/user'
import { AxiosResponse } from 'axios'
import HttpRequest from './HttpRequest'

export default class UserService extends HttpRequest {
  private configRegister(user: IUser): Promise<AxiosResponse<IRegisterResponse>> {
    this.configEndpoint('register')
    return this.post(user)
  }

  public async register(user: IUser): Promise<IRegisterResponse> {
    try {
      const response = await this.configRegister(user)

      return response.data
    } catch (error) {
      getErrorMsg(error)

      if (error.response) {
        return { errorMessage: error.response.data.message }
      }
      return error.message
    }
  }

  private configLogin(user: IUser): Promise<AxiosResponse<IResponse>> {
    this.configEndpoint('login')
    return this.post(user)
  }

  public async login(user: IUser): Promise<ILoginResponse> {
    try {
      const response = await this.configLogin(user)

      return response.data
    } catch (error) {
      getErrorMsg(error)

      if (error.response) {
        return { errorMessage: error.response.data.message }
      }
      return error.message
    }
  }
}

interface IRegisterResponse extends IResponse {
  data?: string
  errorMessage?: string
}

interface ILoginResponse extends IResponse {
  errorMessage?: string
}
