import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
}

const userSchema: Schema = new Schema({
  name: { type: String, required: false, default: '' },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = model<IUser>('user', userSchema);
