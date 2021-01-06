import mongoose from 'mongoose';
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
  await mongoose.connection.close();
  done();
}

export { dbConnection, dbClose };
