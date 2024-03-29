import { IProduct } from './products'

export interface IUser {
  profilePic?: string
  username?: string
  email: string
  password: string
  userCart?: IProduct[]
  userProductsBought?: IProduct[]
}

export interface IUserReduxStore {
  data: IUser
  isLogged: boolean
}
