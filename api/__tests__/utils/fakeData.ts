const MONGO_URI: string = 'mongodb://localhost:27017/ecommerceTest';
const API_KEY: string = 'secret';

class FakeUser {
  email: string;
  password: string;
  username: string;

  constructor(username: string, email: string, password: string) {
    this.username = username || 'userTest';
    this.email = email || 'userTest@gmail.com';
    this.password = password || '123456';
  }
}

export { MONGO_URI, FakeUser, API_KEY };
