import { Schema, model } from 'mongoose';
import { IUser } from './user.interface';

const userSchema: Schema = new Schema({
  username: { type: String, required: false, default: '' },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const UserModel = model<IUser>('user', userSchema);

export default UserModel;
