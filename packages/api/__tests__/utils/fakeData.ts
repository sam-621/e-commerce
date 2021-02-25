import UserModel from '../../src/components/user/user.models';
import jwt from 'jsonwebtoken';
import { IUser } from '../../src/components/user/user.interface';

class MockUser {
  constructor(public username: string, public email: string, public password: string) {}
}

class MockProduct {
  constructor(
    public image: string,
    public name: string,
    public price: number | string,
    public description: string
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

    const token = jwt.sign({ id: user._id }, 'jwt_secret');

    return token;
  } catch (e) {
    console.log(e);
  }
}

async function addToCart(): Promise<IUser> {
  try {
    const user = new UserModel({
      username: 'admin',
      email: 'admin@gmail.com',
      password: '123456',
      cart: [
        {
          image: 'https://arepa.s3.amazonaws.com/camiseta.png',
          name: 'Camiseta',
          price: 25,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        },
      ],
    });

    await user.save();

    return user;
  } catch (e) {
    console.log(e);
  }
}

export { MockUser, token, MockProduct, registerUserAndGetToken, addToCart };
