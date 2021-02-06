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
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJJRCI6IjVmZjUyNDVhMThlMDdkMDBlNWE4MDEwYSIsImlhdCI6MTYxMDU3NDM2OX0.GV1LM9UTnVK_i9cdkKcojWWfz2RtfMsfRz-uTw0ODj0';

export { MockUser, token, MockProduct };
