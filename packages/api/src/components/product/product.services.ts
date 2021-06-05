import { ObjectId } from 'mongoose';
import { IProduct } from '../../types/products';
import { IService } from '../interfaces/IService';
import { IUserDocument } from '../../types/user';
import UserRepository from '../../repository/user.repository';

class Product {
  public static async buyProduct(buyerID: ObjectId, products: IProduct[]): Promise<IService> {
    try {
      const user: IUserDocument = await UserRepository.getUserById(buyerID);

      user.userProductsBought = user.userProductsBought.concat(products);

      await user.save();

      return {
        data: null,
        message: 'PRODUCT BOUGHT',
        error: null,
      };
    } catch (e) {
      return {
        data: null,
        message: null,
        error: { message: 'Something went wrong', statusCode: 500 },
      };
    }
  }

  public static async addToCart(buyerID: ObjectId, product: IProduct): Promise<IService> {
    try {
      const user: IUserDocument = await UserRepository.getUserById(buyerID);

      user.userCart.push(product);

      await user.save();

      return {
        data: null,
        message: 'PRODUCT ADDED TO CART',
        error: null,
      };
    } catch (e) {
      return {
        data: null,
        message: 'INTERNAL SERVER ERROR',
        error: { message: 'Something went wrong', statusCode: 500 },
      };
    }
  }
}

export { Product };
