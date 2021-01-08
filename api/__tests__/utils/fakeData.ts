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

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjVmZjNjNjIzODNlMTk3MDRmZDRmOGZhMiIsImlhdCI6MTYxMDEzNTgyM30.tghNKoDQ3vQOuNDEHb8I-hu6aQWMwsrvTo41XD222K4';

export { MONGO_URI, FakeUser, token };
