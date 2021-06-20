import { AxiosResponse } from 'axios';
import { IServiceResponse } from '../types/services';
import HttpRequest from './HttpRequest';

export default class ProductsServices extends HttpRequest {
  private configGetAllProducts(): Promise<AxiosResponse> {
    this.configEnpoint('products');
    return this.get();
  }

  public async getAllProducts(): Promise<IServiceResponse> {
    try {
      const response = await this.configGetAllProducts();

      return response.data;
    } catch (error) {
      return error.response;
    }
  }
}
