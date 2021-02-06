import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import UserModel from '../../src/components/user/user.models';
import ProductModel from '../../src/components/product/product.models';
import { MockUser } from './';
import argon from 'argon2';

const mongod = new MongoMemoryServer();

async function dbConnection(done: any) {
  const uri = await mongod.getUri();

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  done();
}

async function dbClose(done: any) {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
  done();
}

async function dbConnectionAnCreateUser(done) {
  const uri = await mongod.getUri();

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

  const mockUser = new MockUser('admin', 'admin@gmail.com', '123456');
  mockUser.password = await argon.hash(mockUser.password);
  UserModel.create(mockUser);

  done();
}

export { dbConnection, dbClose, dbConnectionAnCreateUser };
