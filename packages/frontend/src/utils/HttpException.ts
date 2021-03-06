class HTTPException {
  message: string;

  constructor(message: string) {
    this.message = message;
  }

  public getRegisterMessage(): string {
    const statusCode: number = this.convertIntoStatusCode();
    let message: string = '';

    switch (statusCode) {
      case 400:
        message = 'Some of the data is incorrect';
        break;
      case 401:
        message = 'There is already an account with that email';
        break;
      case 500:
        message = 'Something went wrong, try it later';
        break;
    }

    return message;
  }

  public getLoginMessage(): string {
    const statusCode: number = this.convertIntoStatusCode();
    let message: string = '';

    switch (statusCode) {
      case 400:
        message = 'Some of the data is incorrect';
        break;
      case 401:
        message = 'Wrong credentials';
        break;
      case 500:
        message = 'Something went wrong, try it later';
        break;
    }

    return message;
  }

  public getProductsMessage(): string {
    const statusCode: number = this.convertIntoStatusCode();
    let message: string = '';

    switch (statusCode) {
      case 401:
        message = `You don't have permission to see this content`;
        break;
      case 500:
        message = 'Something went wrong, try it later';
        break;
    }

    return message;
  }

  private convertIntoStatusCode(): number {
    let statusCode: number = 0;

    switch (this.message) {
      case 'Request failed with status code 401':
        statusCode = 401;
        break;

      case 'Network Error':
        statusCode = 500;
        break;

      case 'Request failed with status code 400':
        statusCode = 400;
        break;

      case 'Request failed with status code 404':
        statusCode = 404;
        break;
    }

    console.log(statusCode);

    return statusCode;
  }
}

export { HTTPException };
