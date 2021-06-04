import { IProduct } from './products';

export interface IUser {
  profilePic: String;
  username: String;
  email: String;
  password: String;
  userCart: IProduct[];
  userProductsBought: IProduct[];
}
