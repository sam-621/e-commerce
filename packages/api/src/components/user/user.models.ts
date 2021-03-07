import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

const ProductSchema: Schema = new Schema({
  frontID: { required: true, type: Number },
  name: { required: true, type: String },
  description: { required: true, type: String },
  price: { required: true, type: Number },
  image: { required: true, type: String },
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
