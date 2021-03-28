import { ObjectId } from 'mongoose';
import { IProduct } from '../interfaces/IProducts';
import { IUser } from '../user/user.interface';
import UserModel from '../user/user.models';

class Product {
  public async buyProduct(buyerID: ObjectId, products: IProduct[]) {
    try {
      const user: IUser = await UserModel.findById(buyerID);

      user.productsBought = user.productsBought.concat(products);

      await user.save();

      return {
        data: null,
        msg: 'PRODUCT BOUGHT',
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

  public async addToCart(buyerID: ObjectId, product: IProduct) {
    try {
      const user: IUser = await UserModel.findById(buyerID);

      user.cart.push(product);

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
}

export { Product };
