import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

const ProductSchema: Schema = new Schema({
  productName: { required: true, type: String },
  ProductDescription: { required: true, type: String },
  productPrice: { required: true, type: Number },
  productImage: { required: true, type: String },
});

const userSchema: Schema = new Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: { type: [ProductSchema], required: false, default: [] },
  productsBought: { type: [ProductSchema], required: false, default: [] },
});

const UserModel = model<IUser>('users', userSchema);

export default UserModel;
