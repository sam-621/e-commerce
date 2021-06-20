import { AxiosResponse } from 'axios';
import { IAllProducts, IProduct } from '../types/products';
import HttpRequest from './HttpRequest';

export default class ProductServices extends HttpRequest {
  private configGetAllProducts(): Promise<AxiosResponse> {
    this.configEnpoint('products');
    return this.get();
  }

  public async getAllProducts(): Promise<IAllProducts> {
    try {
      const response = await this.configGetAllProducts();
      console.log(response);

      return response.data;
    } catch (error) {
      return error.response;
    }
  }
}
