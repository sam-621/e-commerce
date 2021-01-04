import mongoose from 'mongoose';

async function connection(uri: string) {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    });
    console.log('DB connected');
  } catch (error) {
    console.log(error);
    throw new Error('INTERNAL SERVER ERROR');
  }
}

module.exports = connection;
