import { IUser } from '../user/user.interface';
import UserModel from '../user/user.models';
import { IAddToCartParams, ICartServiceRes } from './cart.interfaces';

class Product {
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
}

export { Product };
