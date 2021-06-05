import { ObjectId } from 'mongoose';
import { IProduct } from '../../types/products';
import { IUser, IUserDocument } from '../../types/user';
import UserModel from '../../db/models/user.models';
import { IAddToCartParams } from './cart.interfaces';
import { IService } from '../interfaces/IService';
import UserRepository from '../../repository/user.repository';

class Cart {
  public async addToCart({ product, userId }: IAddToCartParams): Promise<IService> {
    try {
      const user: IUserDocument = await UserModel.findById(userId);

      user.userCart.push(product);

      await user.save();

      return {
        data: user.userCart[user.userCart.length - 1],
        message: 'Products added to cart',
        error: null,
      };
    } catch (e) {
      console.log(e);

      return {
        data: null,
        message: null,
        error: { message: 'Something went wrong', statusCode: 500 },
      };
    }
  }

  public async getCartProducts(userID: ObjectId): Promise<IService> {
    try {
      // const cartProducts: IProduct[] = await UserModel.findById(userID, 'cart');
      const cartProducts = await UserRepository.getUserById(userID, ['cart']);

      return {
        data: cartProducts,
        message: 'OK',
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

  public async removeCartProduct(productID: ObjectId, userID: ObjectId): Promise<IService> {
    try {
      await UserModel.updateOne({ _id: userID }, { $pull: { cart: { _id: productID } } });

      const cartProducts: IProduct[] = await UserModel.findById(userID, 'cart');

      return { data: cartProducts, message: 'PRODUCT REMOVED', error: null };
    } catch (e) {
      console.log(e);
      return {
        data: null,
        message: null,
        error: { message: 'Something went wrong', statusCode: 500 },
      };
    }
  }
}

export { Cart };
