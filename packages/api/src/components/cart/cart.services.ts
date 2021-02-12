import { ObjectId } from 'mongoose';
import { IProduct, IUser } from '../user/user.interface';
import UserModel from '../user/user.models';
import { User } from '../user/user.services';
import { IAddToCartParams, ICartServiceRes } from './cart.interfaces';
import { cartRouter } from './cart.routes';

class Cart {
  public async addToCart(params: IAddToCartParams): Promise<ICartServiceRes> {
    const { buyerID, description, image, name, price } = params;

    try {
      const user: IUser = await UserModel.findById(buyerID);

      user.cart.push({
        productName: name,
        productPrice: price,
        ProductDescription: description,
        productImage: image,
      });

      await user.save();

      return {
        data: null,
        msg: 'PRODUCT ADDED TO CART',
        statusCode: 200,
      };
    } catch (e) {
      return {
        data: null,
        msg: 'INTERNAL SERVER ERROR',
        statusCode: 500,
      };
    }
  }

  public async getCartProducts(userID: ObjectId): Promise<ICartServiceRes> {
    try {
      const cartProducts: IProduct[] = await UserModel.findById(userID, 'cart');

      return {
        data: cartProducts,
        msg: 'OK',
        statusCode: 200,
      };
    } catch (e) {
      return {
        data: null,
        msg: 'INTERNAL SERVER ERROR',
        statusCode: 500,
      };
    }
  }
}

export { Cart };
