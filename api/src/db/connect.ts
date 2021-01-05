import mongoose from 'mongoose';

async function connection(uri: string) {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log(`DB connected [${uri}]`);
  } catch (error) {
    console.log(error);
    throw new Error('INTERNAL SERVER ERROR');
  }
}

export default connection;
