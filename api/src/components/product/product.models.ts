import { Schema, model, Types } from 'mongoose';
import { IProduct } from './product.interfaces';

const ProductSchema: Schema = new Schema({
  productName: { required: true, type: String },
  ProductDescription: { required: true, type: String },
  productPrice: { required: true, type: Number },
  productImage: { required: true, type: String },
  buyer: { required: true, type: Types.ObjectId },
});

const ProductModel = model<IProduct>('product', ProductSchema);

export default ProductModel;
