import { ObjectId } from 'mongoose';
import { IUser } from '../user/user.interface';
import UserModel from '../user/user.models';

class Product {
  private readonly name: string;
  private readonly price: number;
  private readonly description: string;
  private readonly image: string;

  constructor(name: string, price: number, description: string, image: string) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.image = image;
  }

  public async buyProduct(buyerID: ObjectId) {
    try {
      const user: IUser = await UserModel.findById(buyerID);

      user.productsBought.push({
        name: this.name,
        price: this.price,
        description: this.description,
        image: this.image,
      });

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

  public async addToCart(buyerID: ObjectId) {
    try {
      const user: IUser = await UserModel.findById(buyerID);

      user.cart.push({
        name: this.name,
        price: this.price,
        description: this.description,
        image: this.image,
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
}

export { Product };
