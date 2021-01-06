import mongoose from 'mongoose';
import UserModel from '../../src/components/user/user.models';
import { MONGO_URI_TEST } from '../../src/config';

async function dbConnection(done: any) {
  await mongoose.connect(MONGO_URI_TEST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  done();
}

async function dbClose(done: any) {
  await UserModel.findOneAndDelete({ email: 'register@gmail.com' });

  await mongoose.connection.close();
  done();
}

export { dbConnection, dbClose };
