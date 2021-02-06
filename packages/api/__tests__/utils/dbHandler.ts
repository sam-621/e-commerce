import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

const mongod = new MongoMemoryServer();

async function dbConnection(done: any) {
  const uri = await mongod.getUri();

  await mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  // done();
}

async function dbClose(done: any) {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
  // done();
}

export { dbConnection, dbClose };
