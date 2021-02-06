class MockUser {
  email: string;
  password: string;
  username: string;

  constructor(username: string, email: string, password: string) {
    this.username = username || 'userTest';
    this.email = email || 'userTest@gmail.com';
    this.password = password || '123456';
  }
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

export { MockUser, token, MockProduct };
