import { getErrorMsg } from '@Helpers/error'
import { IResponse, IUserService } from '@Types/services'
import { IUser } from '@Types/user'
import { AxiosResponse } from 'axios'
import HttpRequest from './HttpRequest'

export default class UserService extends HttpRequest {
  private configRegister(user: IUser): Promise<AxiosResponse<IUserService<string>>> {
    this.configEndpoint('register')
    return this.post(user)
  }

  public async register(user: IUser): Promise<IUserService<string>> {
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

  private configLogin(user: IUser): Promise<AxiosResponse<IUserService<string>>> {
    this.configEndpoint('login')
    return this.post(user)
  }

  public async login(user: IUser): Promise<IUserService<string>> {
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

  private async getUserDataConfig(token: string): Promise<AxiosResponse<IUserService<IUser>>> {
    this.addToken(token)
    this.configEndpoint('user')

    return this.get()
  }

  public async getUserData(token: string): Promise<IUserService<IUser>> {
    try {
      const response = await this.getUserDataConfig(token)

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
