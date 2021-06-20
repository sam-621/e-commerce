import { AxiosResponse } from 'axios';
import { IProduct } from '../types/products';
import HttpRequest from './HttpRequest';

export default class ProductsServices extends HttpRequest {
  private configGetAllProducts(): Promise<AxiosResponse> {
    this.configEnpoint('products');
    return this.get();
  }

  public async getAllProducts(): Promise<IProduct[]> {
    try {
      const response = await this.configGetAllProducts();

      return response.data.data;
    } catch (error) {
      return error.response;
    }
  }
}
