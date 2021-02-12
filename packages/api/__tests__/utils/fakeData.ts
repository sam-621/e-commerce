import UserModel from '../../src/components/user/user.models';
import jwt from 'jsonwebtoken';

class MockUser {
  constructor(public username: string, public email: string, public password: string) {}
}

class MockProduct {
  constructor(
    public productImage: string,
    public productName: string,
    public productPrice: number,
    public productDescription: string
  ) {}
}

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjYwMWViOTYxOTc1MWY2MDFhY2JjZGRlZiIsImlhdCI6MTYxMjYyNzM4OX0.iFQ_YmCY5VP7mGhnqic5DlyL7wBAziqeUUORduurhuU';

async function registerUserAndGetToken(): Promise<string> {
  try {
    const user = new UserModel({
      username: 'admin',
      email: 'admin@gmail.com',
      password: '123456',
    });

    await user.save();

    const token = jwt.sign({ id: user._id }, 'secret');

    return token;
  } catch (e) {
    console.log(e);
  }
}

export { MockUser, token, MockProduct, registerUserAndGetToken };
