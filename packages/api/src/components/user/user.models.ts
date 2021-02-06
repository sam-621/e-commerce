import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

const userSchema: Schema = new Schema({
  username: { type: String, required: false, default: '' },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  cart: { type: Array, required: false, default: [] },
  productsBought: { type: Array, required: false, default: [] },
});

const UserModel = model<IUser>('users', userSchema);

export default UserModel;
