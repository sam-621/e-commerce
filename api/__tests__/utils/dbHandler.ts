import mongoose from 'mongoose';
import ProductModel from '../../src/components/product/product.models';
import UserModel from '../../src/components/user/user.models';
import { MONGO_URI } from './fakeData';

async function dbConnection(done: any) {
  await mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  done();
}

async function dbClose(done: any) {
  await UserModel.findOneAndDelete({ email: 'register@gmail.com' });
  await ProductModel.findOneAndDelete({ productName: 'Camiseta' });

  await mongoose.connection.close();
  done();
}

export { dbConnection, dbClose };
