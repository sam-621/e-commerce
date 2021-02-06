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

export { MockUser, token, MockProduct };
