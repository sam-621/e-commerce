import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';
import UserModel from '../../src/components/user/user.models';
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

async function clearDatabase() {
  const collections = mongoose.connection.collections;

  for (const key in collections) {
    const collection = collections[key];
    await collection.deleteMany({});
  }
}

export { dbConnection, dbClose, dbConnectionAnCreateUser, clearDatabase };
