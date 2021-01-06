const MONGO_URI = 'mongodb://localhost:27017/ecommerceTest';

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

export { MONGO_URI, FakeUser };
