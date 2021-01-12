import { ObjectId } from 'mongoose';
import { IProduct } from './product.interfaces';
import ProductModel from './product.models';

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
      const product: IProduct = new ProductModel({
        productName: this.name,
        ProductDescription: this.description,
        productPrice: this.price,
        productImage: this.image,
        buyer: buyerID,
      });

      await product.save();
    } catch (e) {
      return {
        data: null,
        msg: 'INTERNAL SERVER ERROR',
        statusCode: 500,
        err: e,
      };
    }
  }
}

export { Product };
