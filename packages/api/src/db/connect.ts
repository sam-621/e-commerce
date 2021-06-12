import mongoose from 'mongoose';
import { envVars } from '../config';

async function connection(uri: string) {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    envVars.MODE === 'dev' ? console.log(`DB connected [${uri}]`) : console.log('DB connected');
  } catch (error) {
    console.log(error);
    throw new Error('INTERNAL SERVER ERROR');
  }
}

export default connection;
